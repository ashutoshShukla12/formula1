import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Trophy } from "lucide-react";
import Navbar from "@/components/navbar";
import RaceSchedule from "@/components/calendar/race-schedule";
import RaceResults from "@/components/calendar/race-results";
import CircuitInfo from "@/components/calendar/circuit-info";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import type { Race } from "@/types/calendar";

interface RacePageProps {
    params: Promise<{ id: string }>; // Updated to reflect that params is a Promise
}

// Generate metadata for the race
export async function generateMetadata({ params }: RacePageProps): Promise<Metadata> {
    const { id } = await params; // Unwrap the params promise

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/calendar/${id}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            return {
                title: "Race Not Found",
                description: "The requested race could not be found.",
            };
        }

        const race: Race = await response.json();

        return {
            title: `${race.name} | F1 Calendar`,
            description: `Information about the ${race.name} at ${race.circuitName}, including schedule, results, and circuit details.`,
            openGraph: {
                images: [race.circuitImage],
            },
        };
    } catch (error) {
        return {
            title: "Race | F1 Calendar",
            description: error instanceof Error ? error.message : "An error occurred while fetching.",
        };
    }
}

export default async function RacePage({ params }: RacePageProps) {
    const { id } = await params; // Unwrap the params promise

    // Fetch the race data
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/calendar/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        notFound();
    }

    const race: Race = await response.json();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    href="/calendar"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to calendar
                </Link>

                {/* Race header */}
                <div className="relative rounded-xl overflow-hidden mb-10">
                    <div className="relative h-[40vh] md:h-[60vh]">
                        <Image
                            src={race.circuitImage || "/placeholder.svg?height=600&width=1200"}
                            alt={race.circuitName}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-6 relative overflow-hidden rounded">
                                <Image
                                    src={race.location.flagImage || `/placeholder.svg?height=40&width=60`}
                                    alt={race.location.country}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-lg">{race.location.country}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{race.name}</h1>

                        <div className="mt-4 flex flex-wrap gap-4 text-sm md:text-base">
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{race.circuitName}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <time dateTime={race.date}>{formatDate(race.date)}</time>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{race.time} UTC</span>
                            </div>
                            <div className="flex items-center">
                                <Trophy className="w-4 h-4 mr-1" />
                                <span>Round {race.round}</span>
                            </div>
                        </div>

                        {/* Race status badge */}
                        <div className="mt-4">
                            <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${race.status === "upcoming"
                                    ? "bg-blue-600"
                                    : race.status === "completed"
                                        ? "bg-green-600"
                                        : race.status === "ongoing"
                                            ? "bg-yellow-600"
                                            : "bg-red-600"
                                    }`}
                            >
                                {race.status.charAt(0).toUpperCase() + race.status.slice(1)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column: Schedule and Results */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Race schedule */}
                        <RaceSchedule race={race} />

                        {/* Race results if completed */}
                        {race.status === "completed" && race.results && <RaceResults race={race} />}
                    </div>

                    {/* Right column: Circuit info */}
                    <div>
                        <CircuitInfo race={race} />
                    </div>
                </div>
            </div>
        </div>
    );
}
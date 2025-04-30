"use client"
/*
Made with ❤️ by Siva kumar Reddy Chinchala
- Student Number - 8948646
*/
import { useState, useEffect } from "react";
import RaceList from "@/components/calendar/race-list";
import NextRaceHighlight from "@/components/calendar/next-race-highlight";
import CalendarFilters from "@/components/calendar/calendar-filters";
import Navbar from "@/components/navbar";
import { CalendarResponse } from "@/types/calendar";

export default function CalendarPage() {
    const [calendarData, setCalendarData] = useState<CalendarResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState("all");
    const [season, setSeason] = useState<number | undefined>(undefined);

    useEffect(() => {
        const fetchCalendarData = async () => {
            try {
                const response = await fetch(
                    `/api/calendar?status=${status}${season ? `&season=${season}` : ""}`,
                    { cache: "no-store" }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch calendar data");
                }

                const data = await response.json();
                setCalendarData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchCalendarData();
    }, [status, season]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl">Loading calendar...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-6 bg-zinc-900 rounded-xl">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">Error</h2>
                    <p className="mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-20 pb-16">
                {/* Next race highlight */}
                {calendarData?.nextRace && <NextRaceHighlight race={calendarData.nextRace} />}

                <div className="container mx-auto px-4 mt-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar with filters */}
                        <div className="lg:w-1/4">
                            <CalendarFilters
                                selectedStatus={status}
                                selectedSeason={season}
                                onStatusChange={setStatus} // Pass the setStatus function
                                onSeasonChange={setSeason} // Pass the setSeason function
                            />
                        </div>

                        {/* Main content with race list */}
                        <div className="lg:w-3/4">
                            {calendarData?.races && <RaceList races={calendarData.races} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
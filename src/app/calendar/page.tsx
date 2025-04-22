/*
Made with ❤️ by Siva kumar Reddy Chinchala
- Student Number - 8948646
*/
import RaceList from "@/components/calendar/race-list";
import NextRaceHighlight from "@/components/calendar/next-race-highlight";
import CalendarFilters from "@/components/calendar/calendar-filters";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "F1 Race Calendar | Formula 1 Schedule",
    description: "View the complete Formula 1 race calendar with dates, times, and circuit information.",
};

export default async function CalendarPage({
    searchParams,
}: {
    searchParams: Promise<{ status?: string; season?: string }>; // Updated to reflect that searchParams is a Promise
}) {
    const unwrappedSearchParams = await searchParams; // Unwrap the searchParams promise
    const status = unwrappedSearchParams.status || "all";
    const season = unwrappedSearchParams.season ? Number(unwrappedSearchParams.season) : undefined;


    // Fetch calendar data
    const response = await fetch(
        `/api/calendar?status=${status}${season ? `&season=${season}` : ""
        }`,
        { cache: "no-store" }
    );
    const calendarData = await response.json();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-20 pb-16">
                {/* Next race highlight */}
                {calendarData.nextRace && <NextRaceHighlight race={calendarData.nextRace} />}

                <div className="container mx-auto px-4 mt-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar with filters */}
                        <div className="lg:w-1/4">
                            <CalendarFilters selectedStatus={status} selectedSeason={season} />
                        </div>

                        {/* Main content with race list */}
                        <div className="lg:w-3/4">
                            <RaceList races={calendarData.races} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
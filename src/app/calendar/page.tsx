import RaceList from "@/components/calendar/race-list"
import NextRaceHighlight from "@/components/calendar/next-race-highlight"
import CalendarFilters from "@/components/calendar/calendar-filters"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "F1 Race Calendar | Formula 1 Schedule",
    description: "View the complete Formula 1 race calendar with dates, times, and circuit information.",
}

export default async function CalendarPage({
    searchParams,
}: {
    searchParams: { status?: string; season?: string }
}) {
    const status = searchParams.status || "all"
    const season = searchParams.season ? Number(searchParams.season) : undefined

    // Fetch calendar data
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/calendar?status=${status}${season ? `&season=${season}` : ""
        }`,
        { cache: "no-store" },
    )
    const calendarData = await response.json()

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
    )
}

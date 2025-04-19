"use client"
/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown, Filter, X } from "lucide-react"

interface CalendarFiltersProps {
  selectedStatus: string
  selectedSeason?: number
}

export default function CalendarFilters({ selectedStatus, selectedSeason }: CalendarFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const router = useRouter()

  const statuses = [
    { value: "all", label: "All Races" },
    { value: "upcoming", label: "Upcoming Races" },
    { value: "completed", label: "Completed Races" },
  ]

  const seasons = [2024, 2023, 2022, 2021, 2020]

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const season = event.target.value
    const url = `/calendar?status=${selectedStatus}${season !== "" ? `&season=${season}` : ""}`
    router.push(url)
  }

  return (
    <div className="mb-8 lg:mb-0">
      {/* Mobile filter toggle */}
      <button
        className="lg:hidden w-full flex items-center justify-between bg-zinc-900 p-4 rounded-lg mb-4"
        onClick={() => setShowMobileFilters(!showMobileFilters)}
      >
        <div className="flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          <span>Filters</span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
      </button>

      {/* Filter content - hidden on mobile unless toggled */}
      <div className={`lg:block ${showMobileFilters ? "block" : "hidden"}`}>
        {/* Active filters */}
        {(selectedStatus !== "all" || selectedSeason) && (
          <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Active Filters</h3>
              <Link href="/calendar" className="text-xs text-red-500 hover:text-red-400">
                Clear all
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedStatus !== "all" && (
                <div className="inline-flex items-center bg-white/10 text-sm rounded-full px-3 py-1">
                  Status: {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                  <Link href={`/calendar${selectedSeason ? `?season=${selectedSeason}` : ""}`} className="ml-1">
                    <X className="w-3 h-3" />
                  </Link>
                </div>
              )}

              {selectedSeason && (
                <div className="inline-flex items-center bg-white/10 text-sm rounded-full px-3 py-1">
                  Season: {selectedSeason}
                  <Link
                    href={`/calendar${selectedStatus !== "all" ? `?status=${selectedStatus}` : ""}`}
                    className="ml-1"
                  >
                    <X className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Race status filter */}
        <div className="mb-6 p-4 bg-zinc-900 rounded-lg">
          <h3 className="font-medium mb-3">Race Status</h3>
          <div className="space-y-2">
            {statuses.map((status) => (
              <Link
                key={status.value}
                href={`/calendar?status=${status.value}${selectedSeason ? `&season=${selectedSeason}` : ""}`}
                className={`block px-3 py-2 rounded-md transition-colors ${selectedStatus === status.value
                    ? "bg-red-600 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700 text-gray-300"
                  }`}
              >
                {status.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Season filter */}
        <div className="p-4 bg-zinc-900 rounded-lg">
          <h3 className="font-medium mb-3">Season</h3>
          <select
            value={selectedSeason || ""}
            onChange={handleSeasonChange}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All Seasons</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

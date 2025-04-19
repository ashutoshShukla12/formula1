"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Filter, X } from "lucide-react"
import type { Team } from "@/types/types"

interface NewsFiltersProps {
  tags: { name: string; count: number }[]
  teams: Team[]
  selectedTeam?: string
  selectedTag?: string
}

export default function NewsFilters({ tags, teams, selectedTeam, selectedTag }: NewsFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false)

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
        {(selectedTeam || selectedTag) && (
          <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Active Filters</h3>
              <Link href="/news" className="text-xs text-red-500 hover:text-red-400">
                Clear all
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedTeam && (
                <div className="inline-flex items-center bg-white/10 text-sm rounded-full px-3 py-1">
                  Team: {selectedTeam.charAt(0).toUpperCase() + selectedTeam.slice(1).replace("-", " ")}
                  <Link href="/news" className="ml-1">
                    <X className="w-3 h-3" />
                  </Link>
                </div>
              )}

              {selectedTag && (
                <div className="inline-flex items-center bg-white/10 text-sm rounded-full px-3 py-1">
                  Tag: {selectedTag}
                  <Link href="/news" className="ml-1">
                    <X className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Teams filter */}
        <div className="mb-6 p-4 bg-zinc-900 rounded-lg">
          <h3 className="font-medium mb-3">Filter by Team</h3>
          <ul className="space-y-2">
            {teams.map((team) => (
              <li key={team.id}>
                <Link
                  href={`/news?teamId=${team.id}`}
                  className={`flex items-center text-sm hover:text-red-500 transition-colors ${selectedTeam === team.id ? "text-red-500 font-medium" : "text-gray-300"
                    }`}
                >
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: team.color }}></span>
                  {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags filter */}
        <div className="p-4 bg-zinc-900 rounded-lg">
          <h3 className="font-medium mb-3">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.name}
                href={`/news?tag=${tag.name}`}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${selectedTag === tag.name ? "bg-red-600 text-white" : "bg-white/10 hover:bg-white/20 text-gray-300"
                  }`}
              >
                {tag.name} ({tag.count})
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

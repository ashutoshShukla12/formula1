"use client"

type CalendarFiltersProps = {
  selectedStatus: string
  selectedSeason: number | undefined
  onStatusChange: (status: string) => void
  onSeasonChange: (season: number | undefined) => void
}

export default function CalendarFilters({
  selectedStatus,
  selectedSeason,
  onStatusChange,
  onSeasonChange,
}: CalendarFiltersProps) {
  // Get current year for season options
  const currentYear = new Date().getFullYear()

  // Create array of years for season filter (current year and 4 previous years)
  const seasonOptions = Array.from({ length: 5 }, (_, i) => currentYear - i)

  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-6 text-white">Filters</h2>

      {/* Status Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-white">Race Status</h3>
        <div className="space-y-3">
          {["all", "upcoming", "completed"].map((status) => (
            <div key={status} className="flex items-center">
              <button
                onClick={() => onStatusChange(status)}
                className={`flex items-center w-full py-2 px-3 rounded-md transition-colors ${selectedStatus === status ? "bg-red-600 text-white" : "text-gray-300 hover:bg-zinc-800"
                  }`}
              >
                <span className="capitalize">{status}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Season Filter */}
      <div>
        <h3 className="text-lg font-medium mb-4 text-white">Season</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <button
              onClick={() => onSeasonChange(undefined)}
              className={`flex items-center w-full py-2 px-3 rounded-md transition-colors ${selectedSeason === undefined ? "bg-red-600 text-white" : "text-gray-300 hover:bg-zinc-800"
                }`}
            >
              <span>All Seasons</span>
            </button>
          </div>

          {seasonOptions.map((year) => (
            <div key={year} className="flex items-center">
              <button
                onClick={() => onSeasonChange(year)}
                className={`flex items-center w-full py-2 px-3 rounded-md transition-colors ${selectedSeason === year ? "bg-red-600 text-white" : "text-gray-300 hover:bg-zinc-800"
                  }`}
              >
                <span>{year}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      {(selectedStatus !== "all" || selectedSeason !== undefined) && (
        <button
          onClick={() => {
            onStatusChange("all")
            onSeasonChange(undefined)
          }}
          className="w-full mt-8 py-2 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
        >
          Reset Filters
        </button>
      )}
    </div>
  )
}

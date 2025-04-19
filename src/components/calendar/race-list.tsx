/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Race } from "@/types/calendar"

interface RaceListProps {
  races: Race[]
}

export default function RaceList({ races }: RaceListProps) {
  // Group races by month
  const racesByMonth: Record<string, Race[]> = {}

  races.forEach((race) => {
    const date = new Date(race.date)
    const monthYear = date.toLocaleString("default", { month: "long", year: "numeric" })

    if (!racesByMonth[monthYear]) {
      racesByMonth[monthYear] = []
    }

    racesByMonth[monthYear].push(race)
  })

  return (
    <div>
      {races.length > 0 ? (
        <div className="space-y-10">
          {Object.entries(racesByMonth).map(([monthYear, monthRaces]) => (
            <div key={monthYear}>
              <h2 className="text-xl font-bold mb-4">{monthYear}</h2>
              <div className="space-y-4">
                {monthRaces.map((race) => (
                  <Link
                    key={race.id}
                    href={`/calendar/${race.id}`}
                    className="block bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Race date column */}
                      <div className="md:w-1/6 bg-zinc-800 p-4 flex flex-row md:flex-col items-center justify-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-400">ROUND</div>
                          <div className="text-2xl font-bold">{race.round}</div>
                        </div>
                        <div className="h-10 w-px bg-zinc-700 mx-4 md:h-px md:w-full md:my-4"></div>
                        <div className="text-center">
                          <div className="text-sm text-gray-400">
                            {new Date(race.date).toLocaleString("default", { month: "short" })}
                          </div>
                          <div className="text-2xl font-bold">{new Date(race.date).getDate()}</div>
                        </div>
                      </div>

                      {/* Race info column */}
                      <div className="md:w-3/6 p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-4 relative overflow-hidden rounded">
                            <Image
                              src={race.location.flagImage || `/placeholder.svg?height=20&width=30`}
                              alt={race.location.country}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-gray-400">{race.location.country}</span>

                          {/* Status badge */}
                          <span
                            className={`ml-auto text-xs px-2 py-0.5 rounded-full ${race.status === "upcoming"
                                ? "bg-blue-600/20 text-blue-400"
                                : race.status === "completed"
                                  ? "bg-green-600/20 text-green-400"
                                  : race.status === "ongoing"
                                    ? "bg-yellow-600/20 text-yellow-400"
                                    : "bg-red-600/20 text-red-400"
                              }`}
                          >
                            {race.status.charAt(0).toUpperCase() + race.status.slice(1)}
                          </span>
                        </div>

                        <h3 className="font-bold text-lg mb-2">{race.name}</h3>

                        <div className="text-sm text-gray-400">{race.circuitName}</div>

                        <div className="flex flex-wrap gap-4 mt-3 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <time dateTime={race.date}>{formatDate(race.date)}</time>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{race.time} UTC</span>
                          </div>
                        </div>
                      </div>

                      {/* Race results or countdown column */}
                      <div className="md:w-2/6 p-4 bg-zinc-800/50 flex items-center">
                        {race.status === "completed" && race.results ? (
                          <div className="w-full">
                            <div className="text-sm text-gray-400 mb-2">PODIUM</div>
                            <div className="space-y-2">
                              {race.results.slice(0, 3).map((result) => (
                                <div key={result.position} className="flex items-center">
                                  <div className="w-6 text-center font-bold">{result.position}</div>
                                  <div className="ml-2">{result.driver}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <div className="text-sm text-gray-400">View details</div>
                              <div className="font-medium">Race information</div>
                            </div>
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">No races found</h3>
          <p className="text-gray-400">Try adjusting your filters to see more races.</p>
        </div>
      )}
    </div>
  )
}

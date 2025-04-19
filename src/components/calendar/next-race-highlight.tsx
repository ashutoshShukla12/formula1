/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Race } from "@/types/calendar"

interface NextRaceHighlightProps {
  race: Race
}

export default function NextRaceHighlight({ race }: NextRaceHighlightProps) {
  // Calculate days until race
  const today = new Date()
  const raceDate = new Date(race.date)
  const daysUntil = Math.ceil((raceDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="bg-gradient-to-r from-red-900/40 to-black py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side: Race info */}
          <div className="md:w-2/3">
            <div className="mb-4">
              <span className="text-red-500 font-medium">NEXT RACE</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">{race.name}</h2>
            </div>

            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-500" />
                <time dateTime={race.date}>{formatDate(race.date)}</time>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-500" />
                <span>{race.time} UTC</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                <span>
                  {race.circuitName}, {race.location.city}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-600 text-white px-4 py-2 rounded-md font-bold">
                {daysUntil > 0 ? `${daysUntil} DAYS TO GO` : "RACE DAY"}
              </div>
              <Link
                href={`/calendar/${race.id}`}
                className="flex items-center text-white hover:text-red-500 transition-colors"
              >
                Race Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right side: Circuit image */}
          <div className="md:w-1/3">
            <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={race.circuitImage || "/placeholder.svg?height=400&width=600"}
                alt={race.circuitName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2">
                <div className="w-8 h-5 relative overflow-hidden rounded">
                  <Image
                    src={race.location.flagImage || `/placeholder.svg?height=30&width=48`}
                    alt={race.location.country}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{race.location.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import Image from "next/image"
import { Trophy, Timer, Ruler } from "lucide-react"
import type { Race } from "@/types/calendar"

interface CircuitInfoProps {
  race: Race
}

export default function CircuitInfo({ race }: CircuitInfoProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Circuit Information</h2>

      {/* Track map */}
      <div className="relative h-48 mb-6 bg-zinc-800 rounded-lg overflow-hidden">
        <Image
          src={race.trackMap || "/placeholder.svg?height=200&width=400"}
          alt={`${race.circuitName} track map`}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Circuit stats */}
      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-400">Circuit Length</div>
          <div className="flex items-center mt-1">
            <Ruler className="w-4 h-4 mr-2 text-red-500" />
            <span className="font-medium">{race.trackLength} km</span>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400">Race Distance</div>
          <div className="flex items-center mt-1">
            <span className="font-medium">
              {race.laps} laps ({(race.trackLength * race.laps).toFixed(3)} km)
            </span>
          </div>
        </div>

        {race.lapRecord && (
          <div>
            <div className="text-sm text-gray-400">Lap Record</div>
            <div className="flex items-center mt-1">
              <Timer className="w-4 h-4 mr-2 text-red-500" />
              <span className="font-medium">
                {race.lapRecord.time} ({race.lapRecord.driver}, {race.lapRecord.year})
              </span>
            </div>
          </div>
        )}

        <div>
          <div className="text-sm text-gray-400">First Grand Prix</div>
          <div className="flex items-center mt-1">
            <Trophy className="w-4 h-4 mr-2 text-red-500" />
            <span className="font-medium">{race.firstGrandPrix}</span>
          </div>
        </div>
      </div>

      {/* Location info */}
      <div className="mt-6 pt-6 border-t border-zinc-800">
        <div className="text-sm text-gray-400 mb-2">Location</div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 relative overflow-hidden rounded">
            <Image
              src={race.location.flagImage || `/placeholder.svg?height=40&width=60`}
              alt={race.location.country}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium">
              {race.location.city}, {race.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Calendar, Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Race } from "@/types/calendar"

interface RaceScheduleProps {
  race: Race
}

export default function RaceSchedule({ race }: RaceScheduleProps) {
  // Combine all schedule items into one array for sorting
  const scheduleItems = [
    ...race.practices.map((practice) => ({
      type: practice.name,
      date: practice.date,
      time: practice.time,
    })),
    {
      type: "Qualifying",
      date: race.qualifying.date,
      time: race.qualifying.time,
    },
  ]

  // Add sprint if it exists
  if (race.sprint) {
    scheduleItems.push({
      type: "Sprint",
      date: race.sprint.date,
      time: race.sprint.time,
    })
  }

  // Add race
  scheduleItems.push({
    type: "Race",
    date: race.date,
    time: race.time,
  })

  // Sort by date and time
  scheduleItems.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}:00`)
    const dateB = new Date(`${b.date}T${b.time}:00`)
    return dateA.getTime() - dateB.getTime()
  })

  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Race Weekend Schedule</h2>

      <div className="space-y-4">
        {scheduleItems.map((item, index) => {
          const isRace = item.type === "Race"
          const isPast = new Date(`${item.date}T${item.time}:00`) < new Date()

          return (
            <div
              key={index}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg ${
                isRace ? "bg-red-900/30 border border-red-900/50" : "bg-zinc-800"
              } ${isPast ? "opacity-70" : ""}`}
            >
              <div className="mb-2 sm:mb-0">
                <h3 className={`font-bold ${isRace ? "text-lg" : ""}`}>{item.type}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.time} UTC</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 sm:mt-0">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    isPast
                      ? "bg-gray-600"
                      : isRace
                        ? "bg-red-600"
                        : item.type === "Qualifying" || item.type === "Sprint"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                  }`}
                >
                  {isPast ? "Completed" : "Upcoming"}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

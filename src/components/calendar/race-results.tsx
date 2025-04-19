import type { Race } from "@/types/calendar"

interface RaceResultsProps {
  race: Race
}

export default function RaceResults({ race }: RaceResultsProps) {
  // Check if we have results to display
  if (!race.results || race.results.length === 0) {
    return null
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Race Results</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-800">
              <th className="pb-3 font-medium text-gray-400">Pos</th>
              <th className="pb-3 font-medium text-gray-400">Driver</th>
              <th className="pb-3 font-medium text-gray-400">Team</th>
              <th className="pb-3 font-medium text-gray-400">Time/Status</th>
              <th className="pb-3 font-medium text-gray-400 text-right">Points</th>
            </tr>
          </thead>
          <tbody>
            {race.results.map((result) => (
              <tr key={result.position} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="py-3 font-bold">{result.position}</td>
                <td className="py-3">{result.driver}</td>
                <td className="py-3 text-gray-400">{result.team}</td>
                <td className="py-3">{result.time || result.status || "-"}</td>
                <td className="py-3 text-right">{result.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sprint results if available */}
      {race.sprint && race.sprint.results && race.sprint.results.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-3">Sprint Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-zinc-800">
                  <th className="pb-3 font-medium text-gray-400">Pos</th>
                  <th className="pb-3 font-medium text-gray-400">Driver</th>
                  <th className="pb-3 font-medium text-gray-400">Team</th>
                  <th className="pb-3 font-medium text-gray-400">Time/Status</th>
                  <th className="pb-3 font-medium text-gray-400 text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {race.sprint.results.map((result) => (
                  <tr key={result.position} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                    <td className="py-3 font-bold">{result.position}</td>
                    <td className="py-3">{result.driver}</td>
                    <td className="py-3 text-gray-400">{result.team}</td>
                    <td className="py-3">{result.time || result.status || "-"}</td>
                    <td className="py-3 text-right">{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

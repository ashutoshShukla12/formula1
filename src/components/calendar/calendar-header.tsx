export default function CalendarHeader({ season }: { season: number }) {
  return (
    <div className="bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Formula 1 {season} Race Calendar</h1>
        <p className="text-gray-400 max-w-3xl">
          View the complete {season} Formula 1 race schedule, including dates, times, and circuit information. Filter by
          upcoming or completed races and get detailed information about each Grand Prix.
        </p>
      </div>
    </div>
  )
}

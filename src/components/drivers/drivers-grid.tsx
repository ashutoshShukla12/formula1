"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Search } from "lucide-react"
import type { Driver } from "@/types/drivers"

interface DriversGridProps {
  drivers: Driver[]
}

export default function DriversGrid({ drivers }: DriversGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredDriver, setHoveredDriver] = useState<string | null>(null)

  // Filter drivers based on search query
  const filteredDrivers = drivers.filter((driver) => driver.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      {/* Search bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto md:mx-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search drivers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      {filteredDrivers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrivers.map((driver) => (
            <motion.div
              key={driver.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black"
              onMouseEnter={() => setHoveredDriver(driver.id)}
              onMouseLeave={() => setHoveredDriver(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${driver.team.color}, transparent 60%)`,
                  opacity: hoveredDriver === driver.id ? 0.2 : 0.1,
                  transition: "opacity 0.3s ease",
                }}
              />

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: driver.team.color, color: "black" }}
                    >
                      {driver.number}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{driver.name}</h2>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-3 relative overflow-hidden rounded">
                          <Image
                            src={driver.flagImage || "/placeholder.svg?height=20&width=30"}
                            alt={driver.nationality}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-gray-400">{driver.nationality}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/drivers/${driver.id}`}
                    className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1 text-sm"
                  >
                    View Profile <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/2">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg bg-zinc-800">
                      {driver.image ? (
                        <Image
                          src={driver.image || "/placeholder.svg"}
                          alt={driver.name}
                          fill
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-500">No image available</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="sm:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={driver.team.logo || "/placeholder.svg?height=30&width=30"}
                        alt={driver.team.name}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                      <span>{driver.team.name}</span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Championships:</span>
                        <span>{driver.stats.championships}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Race Wins:</span>
                        <span>{driver.stats.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Podiums:</span>
                        <span>{driver.stats.podiums}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pole Positions:</span>
                        <span>{driver.stats.polePositions}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: driver.team.color,
                    width: hoveredDriver === driver.id ? "100%" : "30%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">No drivers found</h3>
          <p className="text-gray-400">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Trophy } from 'lucide-react'
import { Team, Driver } from "@/types/types"
import Navbar from "@/components/navbar"

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams')

        if (!response.ok) {
          throw new Error('Failed to fetch teams')
        }

        const data = await response.json()
        console.log(data)
        setTeams(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading teams...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-zinc-900 rounded-xl">
          <h2 className="text-2xl font-bold text-red-500 mb-3">Error</h2>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Formula 1 Teams</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore all the teams competing in the current Formula 1 season. Click on a team to view detailed
            information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {teams.map((team) => (
            <motion.div
              key={team.id}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black"
              onMouseEnter={() => setHoveredTeam(team.id)}
              onMouseLeave={() => setHoveredTeam(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${team.color}, transparent 60%)`,
                  opacity: hoveredTeam === team.id ? 0.2 : 0.1,
                  transition: "opacity 0.3s ease",
                }}
              />

              <div className="relative p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ backgroundColor: team.color, color: "black" }}
                    >
                      {team.position}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{team.name}</h2>
                      <p className="text-gray-400">{team.points} points</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-yellow-500 mr-1" fill={team.color} stroke={team.color} />
                      <span className="font-medium">{team.championships}</span>
                    </div>
                    <Link
                      href={`/teams/${team.id}`}
                      className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1 text-sm"
                    >
                      View Team <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/2">
                    <h3 className="text-lg font-medium mb-3">Drivers</h3>
                    <div className="space-y-3">
                      {team.drivers.map((driver: Driver) => (
                        <div key={driver.name} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                            {driver.image ? (
                              <Image
                                src={driver.image || "/placeholder.svg"}
                                alt={driver.name}
                                width={40}
                                height={40}
                                className="object-cover"
                              />
                            ) : (
                              <span className="text-sm font-bold">{driver.number}</span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{driver.name}</p>
                            <p className="text-xs text-gray-400">{driver.nationality}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sm:w-1/2">
                    <h3 className="text-lg font-medium mb-3">Team Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">First Entry:</span>
                        <span>{team.firstEntry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Power Unit:</span>
                        <span>{team.powerUnit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Headquarters:</span>
                        <span>{team.headquarters}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Team Principal:</span>
                        <span>{team.teamPrincipal}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: team.color,
                    width: hoveredTeam === team.id ? "100%" : "30%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

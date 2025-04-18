"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Car, Award } from "lucide-react"

const teams = [
  {
    id: "red-bull",
    name: "Red Bull Racing",
    logo: "/placeholder.svg?height=100&width=200",
    car: "/placeholder.svg?height=400&width=800",
    points: 623,
    position: 1,
    color: "#0600EF",
    drivers: ["Max Verstappen", "Sergio Perez"],
    teamPrincipal: "Christian Horner",
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    logo: "/placeholder.svg?height=100&width=200",
    car: "/placeholder.svg?height=400&width=800",
    points: 496,
    position: 2,
    color: "#DC0000",
    drivers: ["Charles Leclerc", "Carlos Sainz"],
    teamPrincipal: "Frédéric Vasseur",
  },
  {
    id: "mclaren",
    name: "McLaren F1 Team",
    logo: "/placeholder.svg?height=100&width=200",
    car: "/placeholder.svg?height=400&width=800",
    points: 487,
    position: 3,
    color: "#FF8700",
    drivers: ["Lando Norris", "Oscar Piastri"],
    teamPrincipal: "Andrea Stella",
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas",
    logo: "/placeholder.svg?height=100&width=200",
    car: "/placeholder.svg?height=400&width=800",
    points: 409,
    position: 4,
    color: "#00D2BE",
    drivers: ["Lewis Hamilton", "George Russell"],
    teamPrincipal: "Toto Wolff",
  },
]

export default function TeamStandings() {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null)

  return (
    <section id="teams" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            2024 Constructors Championship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The battle for supremacy in Formula 1 is fierce. Explore the top teams fighting for the prestigious
            Constructors&apos; Championship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredTeam(team.id)}
              onHoverEnd={() => setHoveredTeam(null)}
            >
              <Link href={`/teams/${team.id}`} className="block h-full">
                <Card
                  className="overflow-hidden h-full border-t-4 transition-all duration-300 hover:shadow-lg"
                  style={{ borderTopColor: team.color }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-black/70 text-white font-bold text-xl rounded-br-lg">
                        {team.position}
                      </div>
                      <Image
                        src={team.car || "/placeholder.svg"}
                        alt={`${team.name} car`}
                        width={800}
                        height={400}
                        className="w-full h-48 object-cover"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end transition-opacity duration-300",
                          hoveredTeam === team.id ? "opacity-100" : "opacity-80",
                        )}
                      >
                        <div className="p-4 w-full">
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="font-bold text-white text-xl">{team.name}</h3>
                              <p className="text-white/80 text-sm">{team.drivers.join(" / ")}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-bold text-2xl">{team.points}</p>
                              <p className="text-white/80 text-xs">POINTS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Car className="h-4 w-4" />
                            <span className="sr-only">Car</span>
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Users className="h-4 w-4" />
                            <span className="sr-only">Drivers</span>
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Trophy className="h-4 w-4" />
                            <span className="sr-only">Trophies</span>
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Award className="h-4 w-4" />
                            <span className="sr-only">Records</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          View Team
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

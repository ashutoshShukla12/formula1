"use client"
/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Team } from "@/types/types"


export default function TeamLayout({ team }: { team: Team }) {
  const [activeTab, setActiveTab] = useState("car")

  // Function to parse trophy strings into title and years
  const parseTrophy = (trophyString: string) => {
    const [title, yearsString] = trophyString.split(": ")
    const years = yearsString ? yearsString.split(", ") : []
    return { title, years }
  }

  return (
    <div className="min-h-screen max-w-screen w-full bg-background">
      <div className="pt-16 flex">
        <div className="flex-1 p-6 md:p-8 lg:p-10 max-w-screen">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: team.color }}
                >
                  <span className="text-white font-bold text-xl">{team.position}</span>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{team.name}</h1>
                  <p className="text-muted-foreground">
                    {team.points} points • {team.championships} championships
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={team.teamUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <span>
                      Team Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex w-full bg-zinc-900 rounded-lg p-1">
                <TabsTrigger
                  className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-white"
                  value="car"
                >
                  Car
                </TabsTrigger>
                <TabsTrigger
                  className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-white"
                  value="drivers"
                >
                  Drivers
                </TabsTrigger>
                <TabsTrigger
                  className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-white"
                  value="achievements"
                >
                  Achievements
                </TabsTrigger>
              </TabsList>

              <div className="relative w-full min-w-full mt-6">
                {activeTab === "car" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full space-y-8"
                  >
                    <div className="relative rounded-xl overflow-hidden w-full">
                      <Image
                        src={team.car || "/placeholder.svg"}
                        alt={`${team.name} car`}
                        width={1200}
                        height={600}
                        className="w-full object-cover aspect-[21/9]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <h2 className="text-white text-2xl font-bold">
                            {new Date().getFullYear()} {team.name} Car
                          </h2>
                          <p className="text-white/80">Power Unit: {team.powerUnit}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 w-full">
                      <Card className="flex-1">
                        <CardHeader>
                          <CardTitle>Team Principal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-3">
                          {team.teamPrincipalImage ? (
                            <div className="relative w-24 h-24 rounded-full overflow-hidden">
                              <Image
                                src={team.teamPrincipalImage || "/placeholder.svg"}
                                alt={`${team.teamPrincipal}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : null}
                          <p className="font-medium text-center">{team.teamPrincipal}</p>
                        </CardContent>
                      </Card>
                      <Card className="flex-1 flex flex-col items-baseline justify-center gap-3">
                        <CardHeader>
                          <CardTitle>Headquarters</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{team.headquarters}</p>
                        </CardContent>
                      </Card>
                      <Card className="flex-1 flex flex-col items-baseline justify-center gap-3">
                        <CardHeader>
                          <CardTitle>Debut</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{team.firstEntry}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="w-full">
                      <CardHeader>
                        <CardTitle>Team History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{team.history}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {activeTab === "drivers" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-[60%] mx-auto flex flex-col md:flex-row flex-wrap gap-8"
                  >
                    {team.drivers.map((driver) => (
                      <Card key={driver.name} className="overflow-hidden flex-1 min-w-[300px]">
                        <div className="relative">
                          <Image
                            src={driver.image || "/placeholder.svg"}
                            alt={driver.name}
                            width={400}
                            height={400}
                            className="w-full max-h-[60vh] object-fit cover"
                          />
                          <div className="absolute top-0 right-0 bg-black/70 text-white font-bold text-3xl p-4 rounded-bl-lg">
                            {driver.number}
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center">
                            <span>{driver.name}</span>
                            <span className="text-sm font-normal text-muted-foreground">{driver.nationality}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold">{driver.championships}</p>
                              <p className="text-xs text-muted-foreground">CHAMPIONSHIPS</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold">{driver.wins}</p>
                              <p className="text-xs text-muted-foreground">WINS</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold">{driver.podiums}</p>
                              <p className="text-xs text-muted-foreground">PODIUMS</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                )}

                {activeTab === "achievements" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-zinc-900 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Trophy className="h-6 w-6 text-yellow-500" />
                          <h2 className="text-xl font-bold">Championships</h2>
                        </div>

                        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-6">
                          <div className="text-6xl font-bold mb-2" style={{ color: team.color }}>
                            {team.championships}
                          </div>
                          <p className="text-gray-400">World Championships</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <h2 className="text-xl font-bold">Team Records</h2>
                        </div>

                        <ul className="space-y-3">
                          {team.records.map((record, index) => (
                            <li key={index} className="flex items-start gap-3 bg-zinc-800/50 rounded-lg p-3">
                              <div
                                className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${team.color}20` }}
                              >
                                <Award className="h-3 w-3" style={{ color: team.color }} />
                              </div>
                              <p className="text-sm">{record}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-zinc-900 rounded-lg p-6 mt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy className="h-6 w-6 text-yellow-500" />
                        <h2 className="text-xl font-bold">Trophy Cabinet</h2>
                      </div>

                      <div className="space-y-6">
                        {team.trophies.map((trophyString, index) => {
                          const { title, years } = parseTrophy(trophyString)
                          return (
                            <div key={index} className="bg-zinc-800/50 rounded-lg p-4">
                              <div className="flex flex-col md:flex-row">
                                {/* Left column - Championship type */}
                                <div className="md:w-1/3 flex items-start gap-3 pb-4 md:pb-0 md:pr-4 md:border-r md:border-zinc-700">
                                  <div
                                    className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                    style={{ backgroundColor: `${team.color}20` }}
                                  >
                                    <Trophy className="h-4 w-4" style={{ color: team.color }} />
                                  </div>
                                  <div>
                                    <p className="font-medium">{title}</p>
                                    <p className="text-gray-400 text-sm mt-1">{years.length} titles</p>
                                  </div>
                                </div>

                                {/* Right column - Years */}
                                <div className="md:w-2/3 md:pl-4">
                                  <div className="flex flex-wrap gap-2">
                                    {years.map((year, yearIndex) => (
                                      <div
                                        key={yearIndex}
                                        className="px-3 py-2 rounded bg-zinc-700/50 hover:bg-zinc-700 transition-colors"
                                      >
                                        <span className="text-sm font-medium" style={{ color: team.color }}>
                                          {year}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>

  )
}

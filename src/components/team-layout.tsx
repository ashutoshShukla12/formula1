"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Car, Trophy, Award, Users, ArrowLeft } from "lucide-react"

type Driver = {
  name: string
  number: number
  nationality: string
  image: string
  championships: number
  wins: number
  podiums: number
}

type Team = {
  id: string
  name: string
  logo: string
  car: string
  points: number
  position: number
  color: string
  drivers: Driver[]
  teamPrincipal: string
  championships: number
  firstEntry: number
  headquarters: string
  powerUnit: string
  history: string
  records: string[]
  trophies: string[]
}

export default function TeamLayout({ team }: { team: Team }) {
  const [activeTab, setActiveTab] = useState("car")

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Navbar is now in the root layout */}

        <div className="pt-16 flex">
          <Sidebar variant="inset" collapsible="icon">
            <SidebarHeader className="h-14 flex items-center px-4">
              <Link href="/" className="flex items-center gap-2 text-sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Teams
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Team Profile</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === "car"}
                        onClick={() => setActiveTab("car")}
                        tooltip="Car"
                      >
                        <Car className="h-4 w-4" />
                        <span>Car</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === "drivers"}
                        onClick={() => setActiveTab("drivers")}
                        tooltip="Drivers"
                      >
                        <Users className="h-4 w-4" />
                        <span>Drivers</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === "trophies"}
                        onClick={() => setActiveTab("trophies")}
                        tooltip="Trophies"
                      >
                        <Trophy className="h-4 w-4" />
                        <span>Trophies</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        isActive={activeTab === "records"}
                        onClick={() => setActiveTab("records")}
                        tooltip="Records"
                      >
                        <Award className="h-4 w-4" />
                        <span>Records</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <div className="flex-1 p-6 md:p-8 lg:p-10">
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
                  <Button variant="outline" size="sm">
                    Team Website
                  </Button>
                  <Button size="sm">Follow Team</Button>
                </div>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="car">Car</TabsTrigger>
                <TabsTrigger value="drivers">Drivers</TabsTrigger>
                <TabsTrigger value="trophies">Trophies</TabsTrigger>
                <TabsTrigger value="records">Records</TabsTrigger>
              </TabsList>

              <TabsContent value="car" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="relative rounded-xl overflow-hidden">
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Team Principal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{team.teamPrincipal}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Headquarters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{team.headquarters}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>First Entry</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{team.firstEntry}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Team History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{team.history}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="drivers" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {team.drivers.map((driver) => (
                    <Card key={driver.name} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={driver.image || "/placeholder.svg"}
                          alt={driver.name}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover"
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
                        <div className="grid grid-cols-3 gap-4 text-center">
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
              </TabsContent>

              <TabsContent value="trophies" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="h-5 w-5" />
                        Championships and Major Trophies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {team.trophies.map((trophy, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Trophy className="h-3 w-3 text-primary" />
                            </div>
                            <p>{trophy}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="records" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Team Records
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {team.records.map((record, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Award className="h-3 w-3 text-primary" />
                            </div>
                            <p>{record}</p>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

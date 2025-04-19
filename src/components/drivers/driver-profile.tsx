/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Flag, Instagram, Facebook, Twitter, Globe } from "lucide-react"
import type { Driver } from "@/types/drivers"

interface DriverProfileProps {
  driver: Driver
}

export default function DriverProfile({ driver }: DriverProfileProps) {
  // Format date of birth
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  // Calculate age
  const calculateAge = (dateString: string) => {
    const birthDate = new Date(dateString)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link href="/drivers" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all drivers
      </Link>

      {/* Driver header */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 md:p-8 mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${driver.team.color}, transparent 60%)`,
          }}
        />

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column: Driver image */}
            <div className="md:w-1/3">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden bg-zinc-800">
                {driver.image ? (
                  <Image
                    src={driver.image || "/placeholder.svg"}
                    alt={driver.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right column: Driver info */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-6 relative overflow-hidden rounded">
                  <Image
                    src={driver.flagImage || `/placeholder.svg?height=40&width=60`}
                    alt={driver.nationality}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg text-gray-300">{driver.nationality}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: driver.team.color, color: "black" }}
                >
                  {driver.number}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{driver.name}</h1>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={driver.team.logo || "/placeholder.svg?height=40&width=40"}
                  alt={driver.team.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl">{driver.team.name}</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Championships</div>
                  <div className="text-2xl font-bold">{driver.stats.championships}</div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Race Wins</div>
                  <div className="text-2xl font-bold">{driver.stats.wins}</div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Podiums</div>
                  <div className="text-2xl font-bold">{driver.stats.podiums}</div>
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400">Pole Positions</div>
                  <div className="text-2xl font-bold">{driver.stats.polePositions}</div>
                </div>
              </div>

              {/* Social media links */}
              {(driver.socialMedia.twitter ||
                driver.socialMedia.instagram ||
                driver.socialMedia.facebook ||
                driver.socialMedia.website) && (
                  <div className="flex gap-3">
                    {driver.socialMedia.twitter && (
                      <a
                        href={driver.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                        aria-label={`${driver.name}'s Twitter`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {driver.socialMedia.instagram && (
                      <a
                        href={driver.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                        aria-label={`${driver.name}'s Instagram`}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {driver.socialMedia.facebook && (
                      <a
                        href={driver.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                        aria-label={`${driver.name}'s Facebook`}
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {driver.socialMedia.website && (
                      <a
                        href={driver.socialMedia.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                        aria-label={`${driver.name}'s Website`}
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Biography */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <div className="text-gray-300 space-y-4">
              {driver.biography.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Helmet image */}
          {driver.helmetImage && (
            <div className="bg-zinc-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Helmet Design</h2>
              <div className="relative h-64 w-full">
                <Image
                  src={driver.helmetImage || "/placeholder.svg"}
                  alt={`${driver.name}'s helmet`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right column: Driver info */}
        <div>
          <div className="bg-zinc-900 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Driver Information</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Team</div>
                <div className="flex items-center gap-2 mt-1">
                  <Image
                    src={driver.team.logo || "/placeholder.svg?height=20&width=20"}
                    alt={driver.team.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <Link href={`/teams/${driver.team.id}`} className="hover:text-red-500 transition-colors">
                    {driver.team.name}
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Date of Birth</div>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>
                    {formatDate(driver.dateOfBirth)} ({calculateAge(driver.dateOfBirth)} years)
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Place of Birth</div>
                <div className="flex items-center gap-2 mt-1">
                  <Flag className="w-4 h-4 text-gray-400" />
                  <span>{driver.placeOfBirth}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="text-sm text-gray-400">Driver Number</div>
                <div className="mt-1 font-bold text-xl">{driver.number}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Code</div>
                <div className="mt-1 font-bold text-xl">{driver.code}</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Career Statistics</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Races Entered</span>
                <span>{driver.stats.racesEntered}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Career Points</span>
                <span>{driver.stats.careerPoints}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fastest Laps</span>
                <span>{driver.stats.fastestLaps}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">First Race</span>
                <span>{driver.stats.firstRace}</span>
              </div>
              {driver.stats.firstWin && (
                <div className="flex justify-between">
                  <span className="text-gray-400">First Win</span>
                  <span>{driver.stats.firstWin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

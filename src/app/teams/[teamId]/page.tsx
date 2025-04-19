'use client'
import { notFound } from "next/navigation"
import TeamLayout from "@/components/team-layout"
import { Team } from "@/types/types" // Importing the Team type
import { useEffect, useState } from "react"

export default function TeamPage({ params }: { params: Promise<{ teamId: string }> }) {
    const [teamId, setTeamId] = useState<string | null>(null)
    const [teams, setTeams] = useState<Team[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const unwrapParams = async () => {
            const unwrappedParams = await params
            setTeamId(unwrappedParams.teamId)
        }
        unwrapParams()
    }, [params])

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

    if (loading || !teamId) {
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

    const team = teams.find((t: Team) => t.id === teamId)

    if (!team) {
        notFound()
    }

    return <TeamLayout team={team} />
}
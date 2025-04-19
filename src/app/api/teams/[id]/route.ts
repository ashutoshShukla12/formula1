import { teams } from "@/data/teams"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const team = teams.find((team) => team.id === params.id)

    if (!team) {
        return NextResponse.json({ error: "Team not found" }, { status: 404 })
    }

    return NextResponse.json(team)
}

import { races } from "@/data/calendar"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const race = races.find((race) => race.id === params.id)

    if (!race) {
        return NextResponse.json({ error: "Race not found" }, { status: 404 })
    }

    return NextResponse.json(race)
}

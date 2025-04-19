import { races } from "@/data/calendar"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = await params; // Unwrap the params promise
    const race = races.find((race) => race.id === unwrappedParams.id);

    if (!race) {
        return NextResponse.json({ error: "Race not found" }, { status: 404 });
    }

    return NextResponse.json(race);
}
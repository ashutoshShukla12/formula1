/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { teams } from "@/data/teams"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = await params; // Unwrap the params promise
    const team = teams.find((team) => team.id === unwrappedParams.id);

    if (!team) {
        return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json(team);
}
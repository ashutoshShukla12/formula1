/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { teams } from "@/data/teams"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(teams)
}

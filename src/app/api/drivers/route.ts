/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { drivers } from "@/data/drivers"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({ drivers })
}

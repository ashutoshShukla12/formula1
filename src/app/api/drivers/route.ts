import { drivers } from "@/data/drivers"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({ drivers })
}

/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { getCalendarData } from "@/data/calendar"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get("status") || "all"
    const season = searchParams.get("season") ? Number(searchParams.get("season")) : undefined

    const calendarData = getCalendarData({ status: status as string, season })

    return NextResponse.json(calendarData)
}

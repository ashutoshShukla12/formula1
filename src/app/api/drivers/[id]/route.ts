import { drivers } from "@/data/drivers"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const driver = drivers.find((driver) => driver.id === params.id)

    if (!driver) {
        return NextResponse.json({ error: "Driver not found" }, { status: 404 })
    }

    return NextResponse.json(driver)
}

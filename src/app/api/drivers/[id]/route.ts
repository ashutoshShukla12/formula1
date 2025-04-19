/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { drivers } from "@/data/drivers"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = await params; // Unwrap the params promise
    const driver = drivers.find((driver) => driver.id === unwrappedParams.id);

    if (!driver) {
        return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(driver);
}
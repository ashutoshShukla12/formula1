/*
Made with ❤️ by Shreyash Raj 
- Student Number - 8971835
*/
import DriversGrid from "@/components/drivers/drivers-grid"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "F1 Drivers | Formula 1 Driver Profiles",
    description:
        "Explore profiles of all current Formula 1 drivers, including statistics, biographies, and team information.",
}

export default async function DriversPage() {
    // Fetch drivers data
    const response = await fetch(`/api/drivers`, {
        cache: "no-store",
    })
    const data = await response.json()

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-20 pb-16">
                {/* <DriversHeader /> */}

                <div className="container mx-auto px-4 mt-12">
                    <DriversGrid drivers={data.drivers} />
                </div>
            </div>
        </div>
    )
}

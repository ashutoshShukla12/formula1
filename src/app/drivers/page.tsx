/*
Made with ❤️ by Shreyash Raj 
- Student Number - 8971835
*/
'use client'
import DriversGrid from "@/components/drivers/drivers-grid"
import Navbar from "@/components/navbar"
import { useState, useEffect } from "react"


import { Driver } from "@/types/drivers"

export default function DriversPage() {
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
                const response = await fetch(`${baseUrl}/api/drivers`);

                if (!response.ok) {
                    throw new Error("Failed to fetch drivers");
                }

                const data = await response.json();
                setDrivers(data.drivers);

            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchDrivers();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl">Loading drivers...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-6 bg-zinc-900 rounded-xl">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">Error</h2>
                    <p className="mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-20 pb-16">
                {/* <DriversHeader /> */}

                <div className="container mx-auto px-4 mt-12">
                    <DriversGrid drivers={drivers} />

                </div>
            </div>
        </div>
    )
}

/*
Made with ❤️ by Shreyash Raj 
- Student Number - 8971835
*/
import { notFound } from "next/navigation";
import DriverProfile from "@/components/drivers/driver-profile";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import type { Driver } from "@/types/drivers";

interface DriverPageProps {
    params: { id: string }; // Corrected: params is not a Promise
}

// Generate metadata for the driver
export async function generateMetadata({ params }: DriverPageProps): Promise<Metadata> {
    const { id } = params;

    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Use environment variable or fallback
        const response = await fetch(`${baseUrl}/api/drivers/${id}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            return {
                title: "Driver Not Found",
                description: "The requested driver could not be found.",
            };
        }

        const driver: Driver = await response.json();

        return {
            title: `${driver.name} | F1 Driver Profile`,
            description: `Learn about Formula 1 driver ${driver.name}, including career statistics, biography, and current team information.`,
            openGraph: {
                images: [driver.image],
            },
        };
    } catch (error) {
        return {
            title: "F1 Driver Profile",
            description: error instanceof Error ? error.message : "An error occurred while fetching driver data.",
        };
    }
}

export default async function DriverPage({ params }: DriverPageProps) {
    const { id } = params;

    // Fetch the driver data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Use environment variable or fallback
    const response = await fetch(`${baseUrl}/api/drivers/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        notFound();
    }

    const driver: Driver = await response.json();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <DriverProfile driver={driver} />
        </div>
    );
}
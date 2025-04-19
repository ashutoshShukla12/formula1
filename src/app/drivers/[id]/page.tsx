import { notFound } from "next/navigation";
import DriverProfile from "@/components/drivers/driver-profile";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import type { Driver } from "@/types/drivers";

interface DriverPageProps {
    params: Promise<{ id: string }>; // Updated to reflect that params is a Promise
}

// Generate metadata for the driver
export async function generateMetadata({ params }: DriverPageProps): Promise<Metadata> {
    const { id } = await params; // Unwrap the params promise

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/drivers/${id}`, {
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
    const { id } = await params; // Unwrap the params promise

    // Fetch the driver data
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/drivers/${id}`, {
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
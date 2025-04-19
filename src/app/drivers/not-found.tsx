/*
Made with ❤️ by Shreyash Raj 
- Student Number - 8971835
*/
import Link from "next/link"
import { UserX } from "lucide-react"
import Navbar from "@/components/navbar"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-24 pb-16 px-4 flex items-center justify-center">
                <div className="text-center max-w-md">
                    <div className="bg-red-600/20 p-4 rounded-full inline-flex items-center justify-center mb-6">
                        <UserX className="h-12 w-12 text-red-600" />
                    </div>

                    <h1 className="text-4xl font-bold mb-4">Driver Not Found</h1>
                    <p className="text-gray-400 mb-8">The driver you&apos;re looking for doesn&apos;t exist or has been removed.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/drivers"
                            className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
                        >
                            View All Drivers
                        </Link>
                        <Link
                            href="/"
                            className="px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

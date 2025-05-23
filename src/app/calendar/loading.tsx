/*
Made with ❤️ by Siva kumar Reddy Chinchala
- Student Number - 8948646
*/
import { Loader2 } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Loading() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-24 pb-16 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-red-600" />
                    <h2 className="text-2xl font-bold">Loading calendar...</h2>
                    <p className="text-gray-400 mt-2">Please wait while we fetch the race schedule</p>
                </div>
            </div>
        </div>
    )
}

/*
Made with ❤️ by Shreyash Raj 
- Student Number - 8971835
*/
import NewsHero from "@/components/news/news-hero"
import NewsList from "@/components/news/news-list"
import NewsFilters from "@/components/news/news-filters"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "F1 News | Latest Formula 1 Updates and Articles",
    description: "Stay up to date with the latest Formula 1 news, team updates, and driver information.",
}

// Helper function to create absolute URLs
function getApiUrl(path: string): string {
    // Check if we're in development or production
    const isDevelopment = process.env.NODE_ENV === "development"
    const baseUrl = isDevelopment ? "http://localhost:3000" : "https://www.f1geeks.fyi"
    return `${baseUrl}${path}`
}

export default async function NewsPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; teamId?: string; tag?: string }> // Updated: searchParams is a Promise in Next.js 15
}) {
    const params = await searchParams
    const page = Number(params.page) || 1
    const teamId = params.teamId
    const tag = params.tag

    // Fetch featured articles for the hero section
    const featuredResponse = await fetch(getApiUrl(`/api/news?featured=true&pageSize=3`), { cache: "no-store" })
    const featuredData = await featuredResponse.json()
    const featuredArticles = featuredData.articles

    // Fetch all articles with pagination and filters
    let apiPath = `/api/news?page=${page}&pageSize=6`

    if (teamId) {
        apiPath += `&teamId=${teamId}`
    }

    if (tag) {
        apiPath += `&tag=${tag}`
    }

    const articlesResponse = await fetch(getApiUrl(apiPath), { cache: "no-store" })
    const articlesData = await articlesResponse.json()

    // Fetch all tags for filtering
    const tagsResponse = await fetch(getApiUrl(`/api/news/tags`), {
        cache: "no-store",
    })
    const tagsData = await tagsResponse.json()

    // Fetch all teams for filtering
    const teamsResponse = await fetch(getApiUrl(`/api/teams`), {
        cache: "no-store",
    })
    const teams = await teamsResponse.json()

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-20 pb-16">
                {/* Hero section with featured articles */}
                {!teamId && !tag && page === 1 && <NewsHero articles={featuredArticles} />}

                <div className="container mx-auto px-4 mt-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar with filters */}
                        <div className="lg:w-1/4">
                            <NewsFilters tags={tagsData.tags} teams={teams} selectedTeam={teamId} selectedTag={tag} />
                        </div>

                        {/* Main content with article list */}
                        <div className="lg:w-3/4">
                            <NewsList
                                articles={articlesData.articles}
                                pagination={articlesData.pagination}
                                currentFilters={{ teamId, tag }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

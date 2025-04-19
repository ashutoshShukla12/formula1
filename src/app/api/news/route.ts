import { newsArticles } from "@/data/news"
import type { NewsResponse } from "@/types/types"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    // Pagination parameters
    const page = Number.parseInt(searchParams.get("page") || "1")
    const pageSize = Number.parseInt(searchParams.get("pageSize") || "10")

    // Filter parameters
    const teamId = searchParams.get("teamId")
    const featured = searchParams.get("featured")
    const tag = searchParams.get("tag")

    // Apply filters
    let filteredArticles = [...newsArticles]

    if (teamId) {
        filteredArticles = filteredArticles.filter((article) => article.relatedTeams.includes(teamId))
    }

    if (featured === "true") {
        filteredArticles = filteredArticles.filter((article) => article.featured)
    }

    if (tag) {
        filteredArticles = filteredArticles.filter((article) => article.tags.includes(tag))
    }

    // Sort by published date (newest first)
    filteredArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    // Calculate pagination
    const total = filteredArticles.length
    const totalPages = Math.ceil(total / pageSize)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize

    // Get paginated articles
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex)

    // Prepare response
    const response: NewsResponse = {
        articles: paginatedArticles,
        pagination: {
            total,
            page,
            pageSize,
            totalPages,
        },
    }

    return NextResponse.json(response)
}

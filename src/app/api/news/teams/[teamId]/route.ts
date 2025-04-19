import { newsArticles } from "@/data/news"
import { teams } from "@/data/teams"
import type { NewsResponse } from "@/types/types"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ teamId: string }> }) {
    const unwrappedParams = await params; // Unwrap the params promise
    const { teamId } = unwrappedParams; // Extract teamId from params
    const searchParams = request.nextUrl.searchParams;

    // Check if the team exists
    const team = teams.find((t) => t.id === teamId);
    if (!team) {
        return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    // Pagination parameters
    const page = Number.parseInt(searchParams.get("page") || "1", 10);
    const pageSize = Number.parseInt(searchParams.get("pageSize") || "10", 10);

    if (page < 1 || pageSize < 1) {
        return NextResponse.json({ error: "Invalid pagination parameters" }, { status: 400 });
    }

    // Filter articles by team ID
    const teamArticles = newsArticles.filter((article) => article.relatedTeams.includes(teamId));

    // Sort by published date (newest first)
    teamArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Calculate pagination
    const total = teamArticles.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= total) {
        return NextResponse.json({ error: "Page out of range" }, { status: 404 });
    }

    // Get paginated articles
    const paginatedArticles = teamArticles.slice(startIndex, endIndex);

    // Prepare response
    const response: NewsResponse = {
        articles: paginatedArticles,
        pagination: {
            total,
            page,
            pageSize,
            totalPages,
        },
    };

    return NextResponse.json(response);
}
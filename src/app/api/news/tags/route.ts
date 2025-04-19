/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { newsArticles } from "@/data/news"
import { NextResponse } from "next/server"

export async function GET() {
    // Extract all tags from articles
    const allTags = newsArticles.flatMap((article) => article.tags)

    // Count occurrences of each tag
    const tagCounts = allTags.reduce(
        (acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1
            return acc
        },
        {} as Record<string, number>,
    )

    // Convert to array of objects and sort by count (descending)
    const tags = Object.entries(tagCounts)
        .map(([name, count]) => ({
            name,
            count,
        }))
        .sort((a, b) => b.count - a.count)

    return NextResponse.json({ tags })
}

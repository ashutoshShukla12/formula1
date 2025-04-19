import { newsArticles } from "@/data/news"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const article = newsArticles.find((article) => article.id === params.id || article.slug === params.id)

    if (!article) {
        return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json(article)
}

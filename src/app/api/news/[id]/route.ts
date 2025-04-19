/*
Made with ❤️ by DilpreetKaur Dhanjal
Student Number - 8669553
*/
import { newsArticles } from "@/data/news"
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = await params; // Unwrap the params promise
    const article = newsArticles.find(
        (article) => article.id === unwrappedParams.id || article.slug === unwrappedParams.id
    );

    if (!article) {
        return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
}
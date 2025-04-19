import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import RelatedArticles from "@/components/news/related-articles";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import type { NewsArticle } from "@/types/types";

interface ArticlePageProps {
    params: Promise<{ slug: string }>; // Updated to reflect that params is a Promise
}

// Generate metadata for the article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params; // Unwrap the params promise

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/news/${slug}`, {
            cache: "no-store",
        });

        if (!response.ok) {
            return {
                title: "Article Not Found",
                description: "The requested article could not be found.",
            };
        }

        const article: NewsArticle = await response.json();

        return {
            title: `${article.title} | F1 News`,
            description: article.excerpt,
            openGraph: {
                images: [article.coverImage],
            },
        };
    } catch (error) {
        return {
            title: "Article | F1 News",
            description: error instanceof Error ? error.message : "An error occurred while fetching the article.",
        };
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params; // Unwrap the params promise

    // Fetch the article data
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/news/${slug}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        notFound();
    }

    const article: NewsArticle = await response.json();

    // Fetch related articles based on the same teams
    const teamId = article.relatedTeams[0];
    const relatedResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/news?teamId=${teamId}&pageSize=3`,
        { cache: "no-store" },
    );
    const relatedData = await relatedResponse.json();

    // Filter out the current article from related articles
    const relatedArticles = relatedData.articles.filter((related: NewsArticle) => related.id !== article.id);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <Link href="/news" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to all news
                </Link>

                <article>
                    {/* Article header */}
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                            </div>

                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                <span>{article.author.name}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/news?tag=${tag}`}
                                        className="inline-flex items-center text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                                    >
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Teams related to the article */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {article.relatedTeams.map((teamId) => (
                                <Link
                                    key={teamId}
                                    href={`/news?teamId=${teamId}`}
                                    className="inline-block px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors"
                                >
                                    {teamId.charAt(0).toUpperCase() + teamId.slice(1).replace("-", " ")}
                                </Link>
                            ))}
                        </div>
                    </header>

                    {/* Cover image */}
                    <div className="relative w-full h-[40vh] md:h-[50vh] mb-8 rounded-xl overflow-hidden">
                        <Image
                            src={article.coverImage || "/placeholder.svg?height=600&width=1200"}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article content */}
                    <div
                        className="prose prose-lg prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Author info */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            {article.author.avatar && (
                                <Image
                                    src={article.author.avatar || "/placeholder.svg?height=80&width=80"}
                                    alt={article.author.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                            )}
                            <div>
                                <p className="text-sm text-gray-400">Written by</p>
                                <p className="font-medium text-lg">{article.author.name}</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related articles */}
                {relatedArticles.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <RelatedArticles articles={relatedArticles} />
                    </div>
                )}
            </div>
        </div>
    );
}
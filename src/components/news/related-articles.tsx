/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { NewsArticle } from "@/types/types"

interface RelatedArticlesProps {
  articles: NewsArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link key={article.id} href={`/news/${article.slug}`} className="group block">
          <div className="bg-zinc-900 rounded-lg overflow-hidden transition-transform hover:translate-y-[-4px]">
            <div className="relative h-40 overflow-hidden">
              <Image
                src={article.coverImage || "/placeholder.svg?height=300&width=500"}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center text-xs text-gray-400 mb-2">
                <Calendar className="w-3 h-3 mr-1" />
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              </div>

              <h3 className="font-bold group-hover:text-red-500 transition-colors line-clamp-2">{article.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

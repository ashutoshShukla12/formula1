import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { NewsArticle } from "@/types/types"

interface NewsListProps {
  articles: NewsArticle[]
  pagination: {
    total: number
    page: number
    pageSize: number
    totalPages: number
  }
  currentFilters: {
    teamId?: string
    tag?: string
  }
}

export default function NewsList({ articles, pagination, currentFilters }: NewsListProps) {
  const { page, totalPages } = pagination
  const { teamId, tag } = currentFilters

  // Build the base URL for pagination links
  let baseUrl = "/news?page="
  if (teamId) baseUrl += `&teamId=${teamId}`
  if (tag) baseUrl += `&tag=${tag}`

  return (
    <div>
      {/* Header with filter indicators */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          {teamId && `${teamId.charAt(0).toUpperCase() + teamId.slice(1).replace("-", " ")} News`}
          {tag && `${tag.charAt(0).toUpperCase() + tag.slice(1)} News`}
          {!teamId && !tag && "All News"}
        </h2>

        {(teamId || tag) && (
          <Link href="/news" className="text-sm text-red-500 hover:text-red-400 mt-2 inline-block">
            Clear filters
          </Link>
        )}
      </div>

      {/* Articles grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="group block">
              <div className="bg-zinc-900 rounded-xl overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-4px]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.coverImage || "/placeholder.svg?height=400&width=600"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="mt-auto">
                    <span className="text-sm font-medium text-red-500 group-hover:text-red-400 transition-colors">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">No articles found</h3>
          <p className="text-gray-400">Try adjusting your filters or check back later for new content.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <Link
            href={page > 1 ? `${baseUrl}${page - 1}` : "#"}
            className={`p-2 rounded-md ${page > 1 ? "bg-white/10 hover:bg-white/20" : "bg-white/5 text-gray-500 cursor-not-allowed"
              }`}
            aria-disabled={page <= 1}
            tabIndex={page <= 1 ? -1 : undefined}
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`${baseUrl}${pageNum}`}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${pageNum === page ? "bg-red-600 text-white" : "bg-white/10 hover:bg-white/20 transition-colors"
                  }`}
              >
                {pageNum}
              </Link>
            ))}
          </div>

          <Link
            href={page < totalPages ? `${baseUrl}${page + 1}` : "#"}
            className={`p-2 rounded-md ${page < totalPages ? "bg-white/10 hover:bg-white/20" : "bg-white/5 text-gray-500 cursor-not-allowed"
              }`}
            aria-disabled={page >= totalPages}
            tabIndex={page >= totalPages ? -1 : undefined}
          >
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  )
}

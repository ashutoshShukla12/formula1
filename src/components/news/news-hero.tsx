import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { NewsArticle } from "@/types/types"

interface NewsHeroProps {
  articles: NewsArticle[]
}

export default function NewsHero({ articles }: NewsHeroProps) {
  // If no featured articles, don't render the hero
  if (!articles || articles.length === 0) {
    return null
  }

  // Get the main featured article and the rest for the sidebar
  const mainArticle = articles[0]
  const sideArticles = articles.slice(1, 3)

  return (
    <section className="relative bg-zinc-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured article */}
          <div className="lg:col-span-2">
            <Link href={`/news/${mainArticle.slug}`} className="group block">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={mainArticle.coverImage || "/placeholder.svg?height=600&width=1000"}
                  alt={mainArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <time dateTime={mainArticle.publishedAt}>{formatDate(mainArticle.publishedAt)}</time>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-red-500 transition-colors">
                    {mainArticle.title}
                  </h2>

                  <p className="mt-2 text-gray-300 line-clamp-2">{mainArticle.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Side featured articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} className="group block">
                <div className="relative h-[180px] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={article.coverImage || "/placeholder.svg?height=400&width=600"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center text-xs text-gray-300 mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-red-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

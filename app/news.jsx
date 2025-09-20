"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "./utils/icons.jsx"
import { mockAPI } from "./utils/mockAPI.jsx"

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await mockAPI("/news/headlines")
        setNews(response.articles)
      } catch (error) {
        console.error("News loading error:", error)
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold animate-fadeInUp">Financial News</h1>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Icons.Spinner />
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((article, index) => (
            <Card
              key={article.id}
              className="hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.source}</span>
                      <span>{article.time}</span>
                    </div>
                  </div>
                  <div className="floating">
                    <Icons.Newspaper />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

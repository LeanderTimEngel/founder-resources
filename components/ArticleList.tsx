'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, ThumbsUp } from 'lucide-react'

type Article = {
  id: number
  title: string
  category: string
  readTime: string
  likes: { day: number; week: number; month: number }
}

const articles: Article[] = [
  { id: 1, title: "How to Validate Your Startup Idea", category: "Ideation", readTime: "5 min", likes: { day: 20, week: 120, month: 500 } },
  { id: 2, title: "Fundraising 101 for Early-Stage Startups", category: "Funding", readTime: "8 min", likes: { day: 15, week: 95, month: 400 } },
  { id: 3, title: "Building a Minimum Viable Product", category: "Product Development", readTime: "10 min", likes: { day: 25, week: 150, month: 600 } },
  { id: 4, title: "Finding Your First Customers", category: "Marketing", readTime: "7 min", likes: { day: 18, week: 88, month: 350 } },
  { id: 5, title: "Legal Essentials for Startups", category: "Legal", readTime: "6 min", likes: { day: 12, week: 75, month: 300 } },
  { id: 6, title: "Creating a Pitch Deck That Wins", category: "Funding", readTime: "9 min", likes: { day: 22, week: 110, month: 450 } },
]

const categories = ["All", ...Array.from(new Set(articles.map(article => article.category)))]

export default function ArticleList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortPeriod, setSortPeriod] = useState<'day' | 'week' | 'month'>('week')

  const filteredAndSortedArticles = articles
    .filter(article => 
      (selectedCategory === "All" || article.category === selectedCategory) &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.likes[sortPeriod] - a.likes[sortPeriod])

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex gap-2">
          <Button
            onClick={() => setSortPeriod("day")}
            variant={sortPeriod === "day" ? "default" : "outline"}
            size="sm"
          >
            Today
          </Button>
          <Button
            onClick={() => setSortPeriod("week")}
            variant={sortPeriod === "week" ? "default" : "outline"}
            size="sm"
          >
            This Week
          </Button>
          <Button
            onClick={() => setSortPeriod("month")}
            variant={sortPeriod === "month" ? "default" : "outline"}
            size="sm"
          >
            This Month
          </Button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedArticles.map(article => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardTitle className="text-xl">{article.title}</CardTitle>
              <CardDescription className="text-gray-100">
                <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                  {article.category}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {article.readTime} read
                </div>
                <div className="flex items-center">
                  <ThumbsUp size={16} className="mr-1" />
                  {article.likes[sortPeriod]} likes
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
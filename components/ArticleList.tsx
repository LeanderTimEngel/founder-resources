'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, ThumbsUp, ExternalLink } from 'lucide-react'

type Article = {
  id: number
  title: string
  url: string
  likes: { day: number; week: number; month: number }
}

const articles: Article[] = [
  { id: 1, title: "Y Combinator application guide from YC alumni", url: "https://lnkd.in/dR-ERqUf", likes: { day: 20, week: 120, month: 500 } },
  { id: 2, title: "100 ideas to get your startup's first 100 users", url: "https://lnkd.in/dydn8MA6", likes: { day: 15, week: 95, month: 400 } },
  { id: 3, title: "Y Combinator tool to find co-founders", url: "https://lnkd.in/dnFSvph7", likes: { day: 25, week: 150, month: 600 } },
  { id: 4, title: "All you need to build best landing pages", url: "https://landingpage.fyi/", likes: { day: 18, week: 88, month: 350 } },
  { id: 5, title: "Greatest sales deck example", url: "https://lnkd.in/dVAMccia", likes: { day: 12, week: 75, month: 300 } },
  { id: 6, title: "Y Combinator startup school", url: "https://lnkd.in/dSuZkWG6", likes: { day: 22, week: 110, month: 450 } },
  { id: 7, title: "Must have document templates: pitch deck, financial models, one-pager", url: "https://lnkd.in/dEgUV7zk", likes: { day: 30, week: 180, month: 700 } },
  { id: 8, title: "Sequoia's guide to pitching a startup", url: "https://lnkd.in/dxSkDHAQ", likes: { day: 28, week: 160, month: 650 } },
  { id: 9, title: "How to raise your first round of funding", url: "https://lnkd.in/duyd_5ry", likes: { day: 35, week: 200, month: 800 } },
  { id: 10, title: "Ready-to-use templates: roadmaps, marketing, team processes", url: "https://lnkd.in/dfVtN2ad", likes: { day: 17, week: 90, month: 380 } },
  { id: 11, title: "How to start a startup by Sam Altman", url: "https://lnkd.in/dEbxqnMs", likes: { day: 40, week: 220, month: 900 } },
  { id: 12, title: "How to come up with startup ideas by Paul Graham", url: "https://lnkd.in/d-eGmPxp", likes: { day: 38, week: 210, month: 850 } },
]

export default function ArticleList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortPeriod, setSortPeriod] = useState<'day' | 'week' | 'month'>('week')

  const filteredAndSortedArticles = articles
    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.likes[sortPeriod] - a.likes[sortPeriod])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSortPeriod("day")}
            variant={sortPeriod === "day" ? "default" : "outline"}
            size="sm"
            className={sortPeriod === "day" ? "bg-green-600 hover:bg-green-700" : "text-green-700 hover:text-green-800"}
          >
            Today
          </Button>
          <Button
            onClick={() => setSortPeriod("week")}
            variant={sortPeriod === "week" ? "default" : "outline"}
            size="sm"
            className={sortPeriod === "week" ? "bg-green-600 hover:bg-green-700" : "text-green-700 hover:text-green-800"}
          >
            This Week
          </Button>
          <Button
            onClick={() => setSortPeriod("month")}
            variant={sortPeriod === "month" ? "default" : "outline"}
            size="sm"
            className={sortPeriod === "month" ? "bg-green-600 hover:bg-green-700" : "text-green-700 hover:text-green-800"}
          >
            This Month
          </Button>
        </div>
      </div>

      <ul className="space-y-4">
        {filteredAndSortedArticles.map((article, index) => (
          <li key={article.id} className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-green-600">
            <div className="flex items-start">
              <span className="text-gray-500 mr-4 font-semibold">{index + 1}.</span>
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200">
                    {article.title}
                  </a>
                  <ExternalLink size={14} className="text-gray-400" />
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="flex items-center">
                    <ThumbsUp size={14} className="mr-1 text-green-600" />
                    {article.likes[sortPeriod]} likes
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

type Article = {
  id: number
  title: string
  url: string
  category: string
}

const articles: Article[] = [
  { id: 1, title: "Y Combinator application guide from YC alumni", url: "https://lnkd.in/dR-ERqUf", category: "Getting Started" },
  { id: 2, title: "100 ideas to get your startup's first 100 users", url: "https://lnkd.in/dydn8MA6", category: "Growth" },
  { id: 3, title: "Y Combinator tool to find co-founders", url: "https://lnkd.in/dnFSvph7", category: "Getting Started" },
  { id: 4, title: "All you need to build best landing pages", url: "https://landingpage.fyi/", category: "Growth" },
  { id: 5, title: "Greatest sales deck example", url: "https://lnkd.in/dVAMccia", category: "Growth" },
  { id: 6, title: "Y Combinator startup school", url: "https://lnkd.in/dSuZkWG6", category: "Getting Started" },
  { id: 7, title: "Must have document templates: pitch deck, financial models, one-pager", url: "https://lnkd.in/dEgUV7zk", category: "Funding" },
  { id: 8, title: "Sequoia's guide to pitching a startup", url: "https://lnkd.in/dxSkDHAQ", category: "Funding" },
  { id: 9, title: "How to raise your first round of funding", url: "https://lnkd.in/duyd_5ry", category: "Funding" },
  { id: 10, title: "Ready-to-use templates: roadmaps, marketing, team processes", url: "https://lnkd.in/dfVtN2ad", category: "Growth" },
  { id: 11, title: "How to start a startup by Sam Altman", url: "https://lnkd.in/dEbxqnMs", category: "Getting Started" },
  { id: 12, title: "How to come up with startup ideas by Paul Graham", url: "https://lnkd.in/d-eGmPxp", category: "Getting Started" },
]

const categories = ["All", "Getting Started", "Growth", "Funding"]

export default function ArticleList() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = articles.filter(article => 
    selectedCategory === "All" || article.category === selectedCategory
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : "text-green-700 hover:text-green-800"}
          >
            {category}
          </Button>
        ))}
      </div>

      <ul className="space-y-4">
        {filteredArticles.map((article, index) => (
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
                <div className="text-sm text-gray-500 mt-1">
                  {article.category}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

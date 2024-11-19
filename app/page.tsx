import ArticleList from '@/components/ArticleList'

export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Founder Resources</h1>
        <p className="text-xl text-gray-600 mb-8">Essential knowledge for early-stage founders</p>
        <ArticleList />
      </div>
    </div>
  )
}
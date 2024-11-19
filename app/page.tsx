import ArticleList from '@/components/ArticleList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="bg-green-700 p-4 mb-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-white">Founder Resources</h1>
          <p className="text-sm text-green-100">Top 12 resources for early-stage startup founders</p>
        </header>
        <ArticleList />
      </div>
    </div>
  )
}
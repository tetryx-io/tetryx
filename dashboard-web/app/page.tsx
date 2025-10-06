import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            🚀 Tetryx Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Supabase for Space - Manage your space operations cache infrastructure with powerful monitoring and control tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-2">Cache Management</h3>
              <p className="text-gray-600">View, create, and configure Nix binary caches for your space missions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">System Monitoring</h3>
              <p className="text-gray-600">Real-time statistics and health monitoring of your cache infrastructure.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-semibold mb-2">Mission Control</h3>
              <p className="text-gray-600">Manage space mission artifacts and binary distribution.</p>
            </div>
          </div>

          <div className="space-x-4">
            <Link
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Open Dashboard
            </Link>
            <Link
              href="/settings"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors"
            >
              Settings
            </Link>
          </div>

          <div className="mt-16 text-sm text-gray-500">
            <p>
              Connected to Tetryx Server •
              <span className="text-green-600 ml-2">● Online</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CacheInfo {
  name: string
  object_count: number
  total_size: number
  is_public: boolean
  created_at: string
}

interface SystemStats {
  total_caches: number
  total_objects: number
  total_size_bytes: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<SystemStats | null>(null)
  const [caches, setCaches] = useState<CacheInfo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for now - replace with actual API calls
    setTimeout(() => {
      setStats({
        total_caches: 5,
        total_objects: 12345,
        total_size_bytes: 2147483648 // 2GB
      })

      setCaches([
        {
          name: 'mission-control',
          object_count: 1234,
          total_size: 536870912, // 512MB
          is_public: false,
          created_at: '2024-01-01T00:00:00Z'
        },
        {
          name: 'satellite-builds',
          object_count: 567,
          total_size: 268435456, // 256MB
          is_public: true,
          created_at: '2024-01-15T10:30:00Z'
        }
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const formatBytes = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Bytes'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Tetryx Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="w-2 h-2 mr-1 bg-green-400 rounded-full"></span>
                Online
              </span>
              <Link href="/settings" className="text-gray-500 hover:text-gray-700">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl">🗄️</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Caches</dt>
                    <dd className="text-3xl font-bold text-gray-900">{stats?.total_caches}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl">📦</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Objects</dt>
                    <dd className="text-3xl font-bold text-gray-900">{stats ? formatNumber(stats.total_objects) : 0}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl">💾</div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Storage</dt>
                    <dd className="text-3xl font-bold text-gray-900">{stats ? formatBytes(stats.total_size_bytes) : '0 B'}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caches List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Cache Repositories</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Manage your Nix binary caches and monitor their status.
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {caches.map((cache) => (
              <li key={cache.name}>
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-3 w-3">
                      <div className={`h-3 w-3 rounded-full ${cache.is_public ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{cache.name}</div>
                      <div className="text-sm text-gray-500">
                        {formatNumber(cache.object_count)} objects • {formatBytes(cache.total_size)} • {cache.is_public ? 'Public' : 'Private'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                      Configure
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <div className="text-2xl mb-2">➕</div>
                <span className="block text-sm font-medium text-gray-900">Create New Cache</span>
              </button>
              <button className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <div className="text-2xl mb-2">🔧</div>
                <span className="block text-sm font-medium text-gray-900">System Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
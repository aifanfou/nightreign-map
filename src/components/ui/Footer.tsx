'use client'

import React, { useEffect, useState } from 'react'
import { APP_VERSION } from '@/lib/constants/version'

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setIsVisible(true), 0)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-t border-gray-600/30 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="relative flex items-center justify-center py-3">
        <span className="absolute left-4 text-sm text-gray-500">v{APP_VERSION}</span>
        <span className="text-gray-500 text-sm">Seed Finder</span>
      </div>
    </footer>
  )
}

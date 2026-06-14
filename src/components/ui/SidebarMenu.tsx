'use client'

import React, { useEffect, useState } from 'react'

interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
  onTriggerUpdates?: () => void
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      return
    }

    const id = window.setTimeout(() => setShouldRender(false), 300)
    return () => window.clearTimeout(id)
  }, [isOpen])

  if (!shouldRender) return null

  return (
    <>
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div
        className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 md:w-96 bg-black/95 backdrop-blur-md border-l border-gray-600/50 z-40 overflow-y-auto transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">菜单</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="关闭菜单"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <nav className={`space-y-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          </nav>
        </div>
      </div>
    </>
  )
}

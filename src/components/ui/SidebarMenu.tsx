'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

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
            <Link
              href="/updates"
              prefetch={false}
              onClick={onClose}
              className="block w-full p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-blue-400 transition-all duration-200 text-left"
            >
              <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-200">更新日志</h3>
              <p className="text-sm text-gray-400 mt-1">浏览版本发布说明和新功能</p>
            </Link>

            <Link
              href="/faq"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">FAQ</h3>
              <p className="text-sm text-gray-400 mt-1">常见问题解答</p>
            </Link>

            <Link
              href="/contact"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">联系作者</h3>
              <p className="text-sm text-gray-400 mt-1">如何联系作者</p>
            </Link>

            <Link
              href="/about"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">关于</h3>
              <p className="text-sm text-gray-400 mt-1">项目背后的故事</p>
            </Link>

            <Link
              href="/how-to-use"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">使用指南</h3>
              <p className="text-sm text-gray-400 mt-1">逐步操作说明</p>
            </Link>

            <Link
              href="/privacy-policy"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">隐私政策</h3>
              <p className="text-sm text-gray-400 mt-1">了解我们如何保护和处理您的数据</p>
            </Link>

            <Link
              href="/legal"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">法律声明</h3>
              <p className="text-sm text-gray-400 mt-1">免责声明、商标和内容移除政策</p>
            </Link>

            <Link
              href="/terms"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-gray-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-200">服务条款</h3>
              <p className="text-sm text-gray-400 mt-1">服务条款</p>
            </Link>

            <Link
              href="/support-the-project"
              prefetch={false}
              onClick={onClose}
              className="block p-4 rounded-lg border border-gray-600/50 bg-gray-700/30 hover:bg-gray-600/50 hover:border-blue-400 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-200">支持本项目</h3>
              <p className="text-sm text-gray-400 mt-1">帮助我们持续运营</p>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

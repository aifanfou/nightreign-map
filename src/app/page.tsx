'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MapSelectionCards } from '@/components/cards/MapSelectionCards'
import PreNightlordSelector from '@/components/ui/PreNightlordSelector'
import HomePrefetchAssets from '@/components/HomePrefetchAssets'

export default function HomePage() {
  const [selectedNightlord, setSelectedNightlord] = useState<string>('empty')

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 text-gray-100">
      <HomePrefetchAssets />
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold">黑夜君临种子查找器</h1>
        <p className="mt-6 text-gray-300 leading-snug sm:leading-normal">
          黑夜君临种子查找器是一款帮助玩家简化地图路线规划、优化游戏内路径的工具。
        </p>
        <p className="mt-1 text-gray-300 leading-snug sm:leading-normal">
          了解使用流程请查看 <Link className="underline" href="/how-to-use" prefetch={false}>使用指南</Link>，常见问题请查看{' '}
          <Link className="underline" href="/faq" prefetch={false}>FAQ</Link>。
        </p>
      </header>

      <section className="mx-auto mt-0 w-full max-w-7xl md:mt-[1.5rem]">
        <MapSelectionCards selectedNightlord={selectedNightlord} />
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          {/* Empty space on the left */}
        </div>
        <div className="flex items-center justify-center">
          <PreNightlordSelector onNightlordChange={setSelectedNightlord} />
        </div>
      </section>

      <div className="h-[32rem]" />

      <nav className="flex justify-center px-6 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-gray-300">
          <Link className="underline" href="/legal" prefetch={false}>
            法律声明
          </Link>
          <span aria-hidden="true">•</span>
          <Link className="underline" href="/privacy-policy" prefetch={false}>
            隐私政策
          </Link>
          <span aria-hidden="true">•</span>
          <Link className="underline" href="/terms" prefetch={false}>
            服务条款
          </Link>
        </div>
      </nav>
    </div>
  )
}

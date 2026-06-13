import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { pagesPngUrl, pagesWebpUrl } from '@/lib/pagesAssets'
import { DecoratedArticle } from '@/components'

export const metadata: Metadata = {
  title: '支持本项目',
  description: '帮助黑夜君临种子查找器保持可持续发展，不断获得更新。',
}

const kofiUrl = 'https://ko-fi.com/nightreignseedfinder'

export default function SupportTheProjectPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header className="text-center">
          <h1 className="text-3xl font-semibold">支持黑夜君临种子查找器</h1>
          <p className="mt-3 text-gray-300">
            如果您喜欢这个工具，并希望帮助它在不断成长的过程中保持运行，这是最好的方式。
          </p>
        </header>

        <div className="mt-8 text-gray-300">
          <div className="grid gap-6 sm:grid-cols-[260px_1fr] sm:items-start">
            <div className="overflow-hidden rounded-xl border border-gray-600/40 bg-black/20">
              <Image
                src={pagesWebpUrl('/Images/support/remember-to-feed-your-local-revenant.webp')}
                alt="记得喂养你当地的怨灵"
                width={520}
                height={520}
                className="h-auto w-full"
                unoptimized
              />
            </div>

            <div className="space-y-5 sm:pt-8">
              <p>
                随着网站不断增长并持续获得更新，我创建了一个 Ko-fi 页面来帮助支付持续运营成本，保持项目的可持续发展。
              </p>
              <p>
                如果您想为项目的长久发展做出贡献，可以通过 Ko-fi 来支持。任何帮助都会带来改变，并帮助我持续改进网站。
              </p>
              <p>
                实话实说：目前我为支持者准备了什么特别的回报——除了我永恒的感激之外。但我承诺，我正在考虑未来给予回馈的方式。
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={kofiUrl}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-500/60 bg-gray-700/40 px-5 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:border-blue-400/80 hover:bg-gray-600/50"
            >
              <span className="flex items-center gap-2">
                <Image src={pagesPngUrl('/Images/support/KoFiIcon.png')} alt="Ko-fi" width={18} height={18} unoptimized />
                <span>在 Ko-fi 上支持我</span>
              </span>
            </Link>
          </div>
        </div>
      </DecoratedArticle>
    </div>
  )
}

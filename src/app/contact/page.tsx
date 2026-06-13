import type { Metadata } from 'next'
import { DecoratedArticle } from '@/components'

export const metadata: Metadata = {
  title: '联系作者',
  description: '如何联系黑夜君临种子查找器的作者。',
}

const contactEmail = 'ALANRODROOGS@GMAIL.COM'

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">联系作者</h1>
        </header>

        <div className="mt-8 space-y-5 text-gray-300">
          <p>
            大多数情况下，您可以直接使用&ldquo;报告&rdquo;按钮，它也可以作为联系我的方式。
          </p>
          <p>
            如果您需要直接联系我，这是我的邮箱：
          </p>
          <p className="rounded-lg border border-gray-600/40 bg-black/20 px-4 py-3 font-medium tracking-wide text-gray-100">
            {contactEmail}
          </p>
        </div>
      </DecoratedArticle>
    </div>
  )
}

import type { Metadata } from 'next'
import { DecoratedArticle, PageNavButtons } from '@/components'

export const metadata: Metadata = {
  title: '服务条款',
  description: '黑夜君临种子查找器的服务条款。',
}

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">服务条款</h1>
        </header>

        <div className="mt-8 space-y-6 text-gray-300">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">接受条款</h2>
            <p>使用本网站即表示您同意这些条款。如果您不同意，请勿使用本网站。</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">服务使用</h2>
            <p>
              您可以将本网站用于个人、非商业目的。您同意不滥用服务、不干扰其运行，也不尝试通过自动化方式访问。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">条款变更</h2>
            <p>
              我们可能随时更新这些条款。变更生效后继续使用本网站即表示您接受更新后的条款。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">责任限制</h2>
            <p>
              在法律允许的最大范围内，我们对因使用本网站而产生的任何损害不承担责任。
            </p>
          </section>
        </div>

        <PageNavButtons
          title="相关页面"
          links={[
            { href: '/legal', label: '法律声明与免责声明' },
            { href: '/terms', label: '服务条款' },
            { href: '/privacy-policy', label: '隐私政策' },
          ]}
        />
      </DecoratedArticle>
    </div>
  )
}

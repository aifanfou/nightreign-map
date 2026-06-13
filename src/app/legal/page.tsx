import type { Metadata } from 'next'
import { DecoratedArticle, PageNavButtons } from '@/components'

export const metadata: Metadata = {
  title: '法律声明',
  description: '法律信息、免责声明和内容移除政策。',
}

const contactEmail = 'ALANRODROOGS@GMAIL.COM'

export default function LegalPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">法律声明与免责声明</h1>
        </header>

        <div className="mt-8 space-y-6 text-gray-300">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">同人项目</h2>
            <p>
              黑夜君临种子查找器是一个同人项目。它与 FromSoftware、Bandai Namco 或任何其他版权方无关，也未获得其认可。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">商标与版权</h2>
            <p>
              本网站引用的所有商标、标识和受版权保护的材料均归其各自所有者所有。它们仅用于标识和信息目的。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">内容移除</h2>
            <p>
              如果您是版权方，并认为本网站上的任何内容侵犯了您的权利，请通过{' '}
              <span className="font-medium text-gray-100">{contactEmail}</span> 联系我们，并清楚描述相关材料和 URL。我们将审核并在适当情况下移除内容。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-100">无担保</h2>
            <p>
              本网站按&ldquo;现状&rdquo;提供。我们不保证其准确性、可用性或对特定用途的适用性。
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

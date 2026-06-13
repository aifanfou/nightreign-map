import type { Metadata } from 'next'
import { DecoratedArticle, PageNavButtons } from '@/components'

export const metadata: Metadata = {
  title: 'FAQ',
  description: '关于黑夜君临种子查找器的常见问题解答。',
}

type FaqItem = {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: '这个工具能判断黑夜王在深夜模式下是否会变成幽暗版本吗？',
    answer: '不能。这个信息不会影响地图模式，游戏只会在最后阶段才揭示这一点。',
  },
  {
    question: '这个工具能预测正午圈的位置或某些事件的出现地点吗？',
    answer: '不能。这些元素是完全随机的，没有可靠的方法来预测它们。',
  },
  {
    question: '如果工具显示的地图不对，我该如何报告？',
    answer:
      '在页脚右下角有一个"报告问题"按钮，点击后会打开一个简短的表格，您可以描述您遇到的情况。',
  },
  {
    question: '能不能实现只用一张截图来识别地图模式？',
    answer:
      '技术上可行，但这会显著增加计算成本，容易出错，总体而言不如手动识别地图上的 2-5 个建筑来得可靠。',
  },
]

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">FAQ</h1>
          <p className="mt-3 text-gray-300">
            关于黑夜君临种子查找器的常见问题解答。
          </p>
        </header>

        <div className="mt-8 space-y-6">
          {faqItems.map((item) => (
            <section key={item.question} className="rounded-lg border border-gray-600/40 bg-black/20 p-5">
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <p className="mt-2 text-gray-300">{item.answer}</p>
            </section>
          ))}
        </div>

        <PageNavButtons
          title="更多"
          links={[
            { href: '/how-to-use', label: '使用指南' },
            { href: '/faq', label: 'FAQ' },
            { href: '/updates', label: '更新日志' },
            { href: '/about', label: '关于' },
          ]}
        />
      </DecoratedArticle>
    </div>
  )
}

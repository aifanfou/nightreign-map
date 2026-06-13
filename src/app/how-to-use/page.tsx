import type { Metadata } from 'next'
import { DecoratedArticle, PageNavButtons } from '@/components'

export const metadata: Metadata = {
  title: '使用指南',
  description: '逐步了解如何使用黑夜君临种子查找器。',
}

type HowToSection = {
  title: string
  description: string
  bullets?: string[]
}

const sections: HowToSection[] = [
  {
    title: '1：选择黑夜王（可选）',
    description:
      '在首页，您可以在选择地图之前先选择黑夜王。这有助于减少可能的种子数量，加快搜索速度。',
    bullets: [
      '打开黑夜王选择器，选择您想要的黑夜王。',
      '您的选择会被记住，并在开始构建地图时自动应用。',
      '每次搜索后，选择会被清除，以便下一次搜索重新开始。',
    ],
  },
  {
    title: '2：选择地图类型',
    description: '《艾尔登法环 黑夜君临》中有 6 种地图类型，它们可能包含特定的事件。',
  },
  {
    title: '3：地图构建器',
    description:
      '选择地图类型后，您可以在地图构建器画布上绘制您的地图布局。不需要全部完成——只需指出足够的信息，直到只剩下 1 个可能的种子即可。',
    bullets: [
      '通常只需要在地图上标注 1 到 4 个建筑即可匹配出结果。',
      '添加黑夜王和出生点信息可以大大加快匹配速度。',
    ],
  },
  {
    title: '4：地图结果',
    description: '找到结果后，您将看到包含完整信息的地图，例如：',
    bullets: [
      '所有建筑和敌人位置。',
      '黑夜王状态摘要。',
      '事件警告。',
      '永恒监牢敌人识别。',
      '水晶查找功能（仅限大空洞）。',
    ],
  },
  {
    title: '5：错误报告',
    description:
      '如果网站上的任何信息或行为看起来有误，您可以使用页面底部的"报告"按钮进行反馈。欢迎随时使用此功能给我留言或提供任何反馈。',
  },
]

export default function HowToUsePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">黑夜君临种子查找器</h1>
          <p className="mt-1 text-lg font-medium text-gray-200">使用指南</p>
          <div className="mt-6 rounded-lg border border-amber-600/40 bg-amber-950/30 px-5 py-4 text-gray-200">
            <p className="font-semibold">警告：</p>
            <p className="mt-2 text-gray-200">
              本工具可能会剧透新玩家的游戏体验。在向他人推荐或在游戏初期使用时，请务必注意这一点。
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-gray-600/40 bg-black/20 p-5">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-gray-300">{section.description}</p>
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
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

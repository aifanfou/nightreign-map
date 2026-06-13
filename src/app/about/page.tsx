import type { Metadata } from 'next'
import { DecoratedArticle, PageNavButtons } from '@/components'

export const metadata: Metadata = {
  title: '关于',
  description: '了解黑夜君临种子查找器背后的故事和支持它的社区。',
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 text-gray-100">
      <DecoratedArticle>
        <header>
          <h1 className="text-3xl font-semibold">关于黑夜君临种子查找器</h1>
        </header>

        <div className="mt-8 space-y-5 text-gray-300">
          <p>
            黑夜君临种子查找器最初只是一个小型个人工具，用于帮助我迭代由社区和数据挖掘者（如 thefifthmatt 和 kevins78）分享的种子模式。
          </p>
          <p>
            当我把它分享给朋友们后，反响立竿见影。他们鼓励我将它发布到 Steam 讨论区，从那时起，项目发展得远超我的预期。
          </p>
          <p>
            从那时起，网站一直在根据持续的反馈不断改进：包括错误报告、功能请求、可用性建议，以及只有充满热情的社区才会花时间撰写的详细笔记。许多最好的改进都直接来自这些交流。
          </p>
          <p>
            每一次成功的更新都在提醒我，这实际上并不是一个单人项目。它得到了分享结果、验证数据、帮助他人学习使用工具、并维持高质量标准的人们的支持。
          </p>
          <p>
            展望未来，我希望网站能够为潜在的新内容做好准备，假如 FromSoftware 决定扩展黑夜君临的话。虽然可能性不大，但我热爱这款游戏，心怀梦想并无过错。目标是保持基础架构的灵活性，以便无需从零重建即可添加新地图、事件或系统。
          </p>
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

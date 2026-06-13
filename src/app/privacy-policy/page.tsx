'use client'

import { useState, useEffect } from 'react'
import DecoratedArticle from '@/components/ui/DecoratedArticle'
import PageNavButtons from '@/components/ui/PageNavButtons'

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            隐私政策
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            您的隐私对我们至关重要。本政策说明了 SeedFinder 如何收集、使用和保护您的信息。
          </p>
          <div className="mt-6 text-sm text-gray-500">
            最后更新：2024年11月28日
          </div>
        </div>

        {/* Content */}
        <DecoratedArticle className="bg-black/40 backdrop-blur-sm">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">我们收集的信息</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  SeedFinder 以保护隐私为设计理念。我们仅收集最少量的信息，以为您提供最佳体验：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">本地存储数据：</strong>您的偏好设置、已关闭的更新通知和已选择的出生点存储在浏览器的本地存储中</li>
                  <li><strong className="text-white">广告数据：</strong>Google AdSense 可能会收集您的访问数据、交互记录和兴趣偏好以投放相关广告</li>
                  <li><strong className="text-white">使用分析：</strong>匿名使用统计数据，用于改进应用程序</li>
                  <li><strong className="text-white">不收集个人信息：</strong>我们不直接收集姓名、邮箱或其他可识别个人身份的信息</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">我们如何使用您的信息</h2>
              <div className="text-gray-300 space-y-4">
                <p>我们收集的有限数据仅用于以下目的：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>记住您在访问间的偏好和设置</li>
                  <li>避免重复显示相同的更新通知</li>
                  <li>改善整体用户体验</li>
                </ul>
              </div>
            </section>

            {/* Data Storage */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">数据存储与安全</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  您的数据安全是我们的首要任务：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">本地存储：</strong>您的应用偏好存储在浏览器的本地存储中</li>
                  <li><strong className="text-white">Google AdSense：</strong>广告数据由 Google 根据其隐私政策进行处</li>
                  <li><strong className="text-white">浏览器控制：</strong>您可以通过浏览器设置清除存储的数据和管理 Cookie 偏好</li>
                  <li><strong className="text-white">数据共享：</strong>我们与 Google AdSense 共享匿名使用数据用于广告投放</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie 与追踪</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  SeedFinder 使用以下追踪技术：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">必要存储：</strong>用于应用功能的本地存储（偏好设置、出生点选择）</li>
                  <li><strong className="text-white">广告 Cookie：</strong>Google AdSense 使用 Cookie 根据您的兴趣投放个性化广告</li>
                  <li><strong className="text-white">第三方追踪：</strong>Google 可能会跨网站追踪您的访问以改进广告定位</li>
                  <li><strong className="text-white">分析：</strong>匿名使用数据，用于改进应用体验</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">管理 Cookie：</strong>您可以通过浏览器设置控制或禁用 Cookie。
                  请注意，禁用广告 Cookie 可能会导致广告相关性降低。
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">您的权利与选择</h2>
              <div className="text-gray-300 space-y-4">
                <p>您对自己的数据和隐私拥有控制权：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">应用数据：</strong>通过浏览器设置清除本地偏好</li>
                  <li><strong className="text-white">广告个性化：</strong>访问 <a href="https://adssettings.google.com" className="text-blue-400 hover:text-blue-300">Google 广告设置</a> 来控制广告个性化</li>
                  <li><strong className="text-white">Cookie 管理：</strong>使用浏览器设置阻止或删除广告 Cookie</li>
                  <li><strong className="text-white">GDPR/CCPA 权利：</strong>直接联系 Google 以进行数据访问、删除或可移植性请求</li>
                </ul>
              </div>
            </section>

            {/* Updates to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">本政策的更新</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  我们可能会不时更新本隐私政策。更新时：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>我们将更新本页面顶部的&ldquo;最后更新&rdquo;日期</li>
                  <li>重大变更将通过我们的更新通知系统公布</li>
                  <li>继续使用本应用程序即表示您接受任何变更</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">联系我们</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Email: alanrodroogs@gmail.com
                </p>
              </div>
            </section>

            {/* Summary */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">隐私摘要</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">简而言之：</strong>SeedFinder 将您的应用偏好存储在本地，并使用 Google AdSense
                投放广告，后者可能会收集和使用数据用于个性化广告。我们不直接收集个人信息，
                但 Google 可能会追踪您的使用情况用于广告目的。您可以通过 Google 的设置来控制广告个性化。
              </p>
            </div>

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
    </div>
  )
}
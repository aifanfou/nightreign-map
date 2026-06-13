import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { GlobalBackground } from '@/components/backgrounds/GlobalBackground'
import { GlobalUpdateProvider } from '@/components/providers/GlobalUpdateProvider'
import { PwaServiceWorkerRegister } from '@/components/PwaServiceWorkerRegister'
import { pagesIcoUrl, pagesJpgUrl } from '@/lib/pagesAssets'

export const viewport: Viewport = {
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: {
    default: '黑夜君临种子查找器',
    template: '%s | 黑夜君临种子查找器',
  },
  description: '移动端友好的黑夜君临种子查找工具',
  keywords: '黑夜君临, 种子查找, 游戏种子, 地图构建',
  authors: [{ name: '黑夜君临种子查找器团队' }],
  robots: 'index, follow',
  manifest: process.env.NODE_ENV === 'production' ? undefined : '/manifest.webmanifest',
  icons: {
    icon: pagesIcoUrl('/favicon.ico')
  },
  other: {
    'google-adsense-account': 'ca-pub-3952409900980393',
  },
  openGraph: {
    title: '黑夜君临种子查找器',
    description: '为黑夜君临查找最佳游戏种子',
    type: 'website',
    images: [
      {
        url: pagesJpgUrl('/Images/og/og_main.jpg'),
        width: 1200,
        height: 630,
        alt: '黑夜君临种子查找器',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [pagesJpgUrl('/Images/og/og_main.jpg')],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="zh-CN">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3952409900980393"
          strategy="afterInteractive"
        />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
      </head>
      <body className="antialiased overflow-x-hidden">
        <GlobalUpdateProvider>
          <PwaServiceWorkerRegister />
          <GlobalBackground />
          <Header />
          <main className="min-h-screen relative">
            {children}
          </main>
          <Footer />
        </GlobalUpdateProvider>
      </body>
    </html>
  )
}
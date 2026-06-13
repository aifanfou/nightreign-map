import Link from 'next/link'

import { pagesWebpUrl } from '@/lib/pagesAssets'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px',
        paddingBottom: '70px',
        paddingLeft: '16px',
        paddingRight: '16px',
        gap: '18px',
      }}
    >
      <img
        src={pagesWebpUrl('/Images/404_err.webp')}
        alt="Not Found"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
        loading="eager"
        decoding="async"
      />
      <p style={{ color: 'white', textAlign: 'center' }}>
        页面未找到。返回 <Link href="/" prefetch={false}>首页</Link>
      </p>
    </div>
  )
}

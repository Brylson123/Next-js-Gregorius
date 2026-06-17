import { ImageResponse } from 'next/og'
import { getAllSlugParams, getPostBySlug } from '@/content/blog'
import { type Locale } from '@/i18n/config'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllSlugParams()
}

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'GREGORIUS'

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(locale as Locale, slug)
  const content = post?.[locale as Locale]
  const title = content?.title ?? 'GREGORIUS'
  const category = post?.category[locale as Locale] ?? 'Blog'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#2563eb',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
            }}
          >
            ⚙
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: 6 }}>GREGORIUS</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 4,
              color: '#fbbf24',
              marginBottom: 20,
            }}
          >
            {category}
          </div>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.12, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 26, color: '#cbd5e1' }}>
          <div style={{ width: 44, height: 5, background: '#2563eb', borderRadius: 4 }} />
          gregorius.pl/blog
        </div>
      </div>
    ),
    { ...size }
  )
}

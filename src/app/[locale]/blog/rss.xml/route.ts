import { getAllPosts } from '@/content/blog'
import { locales, type Locale } from '@/i18n/config'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const FEED: Record<Locale, { title: string; description: string }> = {
  pl: {
    title: 'GREGORIUS — Blog / Baza wiedzy',
    description: 'Poradniki o tulejach cylindrowych, gniazdach zaworowych i obróbce silników.',
  },
  en: {
    title: 'GREGORIUS — Blog / Knowledge Base',
    description: 'Guides on cylinder liners, valve seats and engine machining.',
  },
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale
  const meta = FEED[locale] ?? FEED.pl
  const feedUrl = `${SITE_URL}/${locale}/blog/rss.xml`
  const blogUrl = `${SITE_URL}/${locale}/blog/`

  const items = getAllPosts()
    .map((post) => {
      const content = post[locale]
      const url = `${SITE_URL}/${locale}/blog/${post.slug[locale]}/`
      return `    <item>
      <title>${escapeXml(content.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(content.excerpt)}</description>
      <category>${escapeXml(post.category[locale])}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(meta.title)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(meta.description)}</description>
    <language>${locale}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

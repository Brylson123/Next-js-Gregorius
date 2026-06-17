import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

const BASE = SITE_URL

// Canonical page groups with their localized paths (matches i18n routing pathnames).
const pages: { pl: string; en: string; priority: number }[] = [
  { pl: '/pl', en: '/en', priority: 1 },
  { pl: '/pl/produkty', en: '/en/products', priority: 0.9 },
  { pl: '/pl/uslugi', en: '/en/services', priority: 0.8 },
  { pl: '/pl/technologia', en: '/en/technology', priority: 0.7 },
  { pl: '/pl/kontakt', en: '/en/contact', priority: 0.6 },
]

// trailingSlash: true in next.config — keep URLs consistent with the export.
const withSlash = (path: string) => `${BASE}${path}/`

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.flatMap((page) => {
    const languages = {
      pl: withSlash(page.pl),
      en: withSlash(page.en),
    }

    return (['pl', 'en'] as const).map((locale) => ({
      url: withSlash(page[locale]),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: page.priority,
      alternates: { languages },
    }))
  })
}

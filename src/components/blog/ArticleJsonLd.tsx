import { SITE_URL } from '@/lib/site'
import type { BlogPost, LocalizedPost } from '@/content/blog'
import type { Locale } from '@/i18n/config'

type Props = {
  post: BlogPost
  content: LocalizedPost
  locale: Locale
  homeLabel: string
  blogLabel: string
}

export default function ArticleJsonLd({ post, content, locale, homeLabel, blogLabel }: Props) {
  const slug = post.slug[locale]
  const url = `${SITE_URL}/${locale}/blog/${slug}/`
  const image = `${SITE_URL}/${locale}/blog/${slug}/opengraph-image`

  const publisher = {
    '@type': 'Organization',
    name: 'GREGORIUS',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: content.title,
      description: content.description,
      inLanguage: locale,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      image: [image],
      author: publisher,
      publisher,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      isPartOf: { '@id': `${SITE_URL}/${locale}/blog/#blog` },
      keywords: content.keywords.join(', '),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: homeLabel, item: `${SITE_URL}/${locale}/` },
        { '@type': 'ListItem', position: 2, name: blogLabel, item: `${SITE_URL}/${locale}/blog/` },
        { '@type': 'ListItem', position: 3, name: content.title, item: url },
      ],
    },
  ]

  if (content.faq && content.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: content.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  const data = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

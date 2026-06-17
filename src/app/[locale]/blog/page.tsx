import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getAllPosts, getReadingTime } from '@/content/blog'
import { locales, type Locale } from '@/i18n/config'
import { SITE_URL } from '@/lib/site'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  return {
    title: `${t('title')} — GREGORIUS`,
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { pl: '/pl/blog', en: '/en/blog' },
      types: { 'application/rss+xml': `/${locale}/blog/rss.xml` },
    },
    openGraph: {
      type: 'website',
      title: `${t('title')} — GREGORIUS`,
      description: t('intro'),
      url: `/${locale}/blog`,
    },
  }
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale
  const t = await getTranslations('blog')
  const posts = getAllPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/${locale}/blog/#blog`,
        name: `${t('title')} — GREGORIUS`,
        description: t('intro'),
        inLanguage: locale,
        url: `${SITE_URL}/${locale}/blog/`,
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p[locale].title,
          url: `${SITE_URL}/${locale}/blog/${p.slug[locale]}/`,
          datePublished: p.date,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'GREGORIUS', item: `${SITE_URL}/${locale}/` },
          { '@type': 'ListItem', position: 2, name: t('title'), item: `${SITE_URL}/${locale}/blog/` },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen">
      <Navigation />

      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mt-6 lg:mt-8">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1 className="page-heading mt-3">{t('title')}</h1>
          <span className="accent-bar" />
          <p className="content-text text-lg mt-4 mb-8 max-w-3xl">{t('intro')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const content = post[locale]
              const href = `/${locale}/blog/${post.slug[locale]}/`
              const minutes = getReadingTime(content.body)
              return (
                <Link
                  key={post.id}
                  href={href}
                  prefetch={false}
                  className="feature-card group flex flex-col !p-0"
                >
                  <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-slate-50 border-b border-slate-100">
                    <Image
                      src={post.cover}
                      alt={content.title}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="badge absolute top-3 left-3 bg-blue-600 text-white shadow-sm">
                      {post.category[locale]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {content.title}
                    </h2>
                    <p className="content-text text-sm mt-2 flex-1">{content.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                      <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{t('readingTime', { min: minutes })}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

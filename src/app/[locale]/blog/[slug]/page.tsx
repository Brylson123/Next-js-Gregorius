import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleBody from '@/components/blog/ArticleBody'
import ArticleJsonLd from '@/components/blog/ArticleJsonLd'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getAllSlugParams, getPostBySlug, getReadingTime, getRelatedPosts } from '@/content/blog'
import { type Locale } from '@/i18n/config'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllSlugParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPostBySlug(locale as Locale, slug)
  if (!post) return {}
  const content = post[locale as Locale]

  return {
    title: `${content.title} — GREGORIUS`,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        pl: `/pl/blog/${post.slug.pl}`,
        en: `/en/blog/${post.slug.en}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${content.title} — GREGORIUS`,
      description: content.description,
      url: `/${locale}/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: localeParam, slug } = await params
  const locale = localeParam as Locale
  const post = getPostBySlug(locale, slug)
  if (!post) notFound()

  const t = await getTranslations('blog')
  const content = post[locale]
  const minutes = getReadingTime(content.body)

  const localeAlternates = {
    pl: `/pl/blog/${post.slug.pl}/`,
    en: `/en/blog/${post.slug.en}/`,
  }

  const contactHref = locale === 'en' ? '/en/contact/' : '/pl/kontakt/'
  const related = getRelatedPosts(post.id, 2)

  return (
    <div className="flex min-h-screen">
      <Navigation localeAlternates={localeAlternates} />

      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />

        <ArticleJsonLd
          post={post}
          content={content}
          locale={locale}
          homeLabel="GREGORIUS"
          blogLabel={t('title')}
        />

        <article className="mt-6 lg:mt-8 max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href={`/${locale}/`} prefetch={false} className="hover:text-blue-600 transition-colors">GREGORIUS</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}/blog/`} prefetch={false} className="hover:text-blue-600 transition-colors">{t('title')}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-600 truncate">{content.title}</span>
          </nav>

          <span className="badge bg-blue-50 text-blue-700">{post.category[locale]}</span>
          <h1 className="page-heading mt-3">{content.title}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <span>{t('publishedOn')} </span>
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span aria-hidden="true">·</span>
            <span>{t('readingTime', { min: minutes })}</span>
          </div>

          <div className="relative h-64 lg:h-80 w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 my-8">
            <Image
              src={post.cover}
              alt={content.title}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <ArticleBody body={content.body} />

          {/* FAQ */}
          {content.faq && content.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{t('faqTitle')}</h2>
              <span className="accent-bar" />
              <div className="mt-6 space-y-3">
                {content.faq.map((item, i) => (
                  <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-800 list-none">
                      {item.q}
                      <svg className="h-5 w-5 flex-shrink-0 text-blue-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="content-text mt-3">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related posts */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{t('relatedTitle')}</h2>
              <span className="accent-bar" />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((rp) => {
                  const rc = rp[locale]
                  const rHref = `/${locale}/blog/${rp.slug[locale]}/`
                  return (
                    <Link
                      key={rp.id}
                      href={rHref}
                      prefetch={false}
                      className="feature-card group flex items-center gap-4 !p-4"
                    >
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                        <Image
                          src={rp.cover}
                          alt={rc.title}
                          fill
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <span className="badge bg-blue-50 text-blue-700 mb-1">{rp.category[locale]}</span>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                          {rc.title}
                        </h3>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-8 text-center text-white shadow-lg">
            <h2 className="text-xl lg:text-2xl font-bold">{t('ctaTitle')}</h2>
            <p className="mt-2 text-blue-100">{t('ctaText')}</p>
            <Link
              href={contactHref}
              prefetch={false}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t('ctaButton')}
            </Link>
          </section>

          <div className="mt-10 text-center">
            <Link href={`/${locale}/blog/`} prefetch={false} className="btn-back-to-top">{t('backToBlog')}</Link>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  )
}

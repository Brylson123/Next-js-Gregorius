import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const META = {
  pl: {
    title: 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych',
    description:
      'GREGORIUS - uznany producent części zamiennych do silników spalinowych. Specjalizujemy się w tulejach cylindrowych i gniazdach zaworowych. Ponad 60 lat doświadczenia.',
    keywords:
      'tuleje cylindrowe, gniazda zaworowe, części zamienne, silniki spalinowe, tuleje suche, tuleje mokre, honowanie, regeneracja, GREGORIUS, Kraków',
    ogLocale: 'pl_PL',
  },
  en: {
    title: 'GREGORIUS - Cylinder liners and valve seats manufacturer',
    description:
      'GREGORIUS - a recognized manufacturer of spare parts for internal combustion engines. We specialize in cylinder liners and valve seats. Over 60 years of experience.',
    keywords:
      'cylinder liners, valve seats, spare parts, internal combustion engines, dry liners, wet liners, honing, regeneration, GREGORIUS, Krakow',
    ogLocale: 'en_US',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as keyof typeof META] ?? META.pl

  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: '/pl',
        en: '/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'GREGORIUS',
      title: m.title,
      description: m.description,
      url: `/${locale}`,
      locale: m.ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  setRequestLocale(locale)

  if (!locales.includes(locale as typeof locales[number])) {
    notFound()
  }

  let messages
  try {
    // Explicitly pass locale to getMessages
    messages = await getMessages({ locale })
  } catch (error) {
    console.error('Error loading messages:', error)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" lang={locale}>
      <JsonLd locale={locale} />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  )
}


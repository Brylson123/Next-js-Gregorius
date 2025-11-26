import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/config'
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

  return {
    title: 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych',
    description: 'GREGORIUS - uznany producent części zamiennych do silników spalinowych. Specjalizujemy się w tulejach cylindrowych i gniazdach zaworowych.',
    keywords: 'tuleje cylindrowe, gniazda zaworowe, części zamienne, silniki spalinowe, GREGORIUS',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" lang={locale}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  )
}


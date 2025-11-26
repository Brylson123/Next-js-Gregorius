import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale, type Locale } from './config'

export default getRequestConfig(async ({ locale, requestLocale }) => {
  // Handle locale - it might be a Promise in Next.js 15
  let resolvedLocale: string | undefined
  
  if (locale instanceof Promise) {
    resolvedLocale = await locale
  } else if (typeof locale === 'string') {
    resolvedLocale = locale
  } else if (requestLocale instanceof Promise) {
    resolvedLocale = await requestLocale
  } else if (typeof requestLocale === 'string') {
    resolvedLocale = requestLocale
  } else {
    resolvedLocale = defaultLocale
  }
  
  // Ensure locale is valid
  const validLocales: string[] = [...locales]
  
  if (!resolvedLocale || !validLocales.includes(resolvedLocale)) {
    console.warn(`Invalid or missing locale: ${resolvedLocale}. Using default: ${defaultLocale}`)
    resolvedLocale = defaultLocale
  }

  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default
    return {
      locale: resolvedLocale as Locale,
      messages
    }
  } catch (error) {
    console.error(`Error loading messages for locale ${resolvedLocale}:`, error)
    // Fallback to default locale
    const fallbackMessages = (await import(`../messages/${defaultLocale}.json`)).default
    return {
      locale: defaultLocale as Locale,
      messages: fallbackMessages
    }
  }
})


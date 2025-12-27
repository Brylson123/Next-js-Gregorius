import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale, type Locale } from './config'

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let resolvedLocale: string | undefined
  
  if (locale && typeof locale === 'object' && 'then' in locale && typeof (locale as any).then === 'function') {
    resolvedLocale = await (locale as Promise<string>)
  } else if (typeof locale === 'string') {
    resolvedLocale = locale
  } else if (requestLocale && typeof requestLocale === 'object' && 'then' in requestLocale && typeof (requestLocale as any).then === 'function') {
    resolvedLocale = await (requestLocale as Promise<string>)
  } else if (typeof requestLocale === 'string') {
    resolvedLocale = requestLocale
  } else {
    resolvedLocale = defaultLocale
  }
  
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
    const fallbackMessages = (await import(`../messages/${defaultLocale}.json`)).default
    return {
      locale: defaultLocale as Locale,
      messages: fallbackMessages
    }
  }
})


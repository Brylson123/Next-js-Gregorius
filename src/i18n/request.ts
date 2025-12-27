import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale, type Locale } from './config'

type Thenable<T> = {
  then: (onfulfilled?: (value: T) => T | PromiseLike<T>) => Promise<T>
}

function isThenable<T>(value: unknown): value is Thenable<T> {
  return (
    value !== null &&
    typeof value === 'object' &&
    'then' in value &&
    typeof (value as Thenable<T>).then === 'function'
  )
}

export default getRequestConfig(async ({ locale, requestLocale }) => {
  let resolvedLocale: string | undefined
  
  if (locale && isThenable<string>(locale)) {
    resolvedLocale = await Promise.resolve(locale)
  } else if (typeof locale === 'string') {
    resolvedLocale = locale
  } else if (requestLocale && isThenable<string>(requestLocale)) {
    resolvedLocale = await Promise.resolve(requestLocale)
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


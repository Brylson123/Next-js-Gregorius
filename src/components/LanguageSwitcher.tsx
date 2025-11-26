'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/i18n/config'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    // pathname from next/navigation includes the locale (e.g., /pl/kontakt)
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLanguage(loc)}
          className={`
            px-3 py-1.5 rounded-md text-sm font-medium transition-colors
            ${
              locale === loc
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-white hover:bg-white/20'
            }
          `}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}


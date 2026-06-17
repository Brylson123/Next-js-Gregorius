'use client'

import { useLocale } from 'next-intl'
import { usePathname, getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const newPath = getPathname({
      href: pathname,
      locale: newLocale,
    })
    window.location.href = newPath
  }

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((loc) => (
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

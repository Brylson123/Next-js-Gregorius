'use client'

import { useLocale } from 'next-intl'
import { usePathname, getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageSwitcher({
  alternates,
}: {
  alternates?: Partial<Record<string, string>>
}) {
  const locale = useLocale()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    // On pages with per-language slugs (e.g. blog posts) use the explicit
    // alternate URL; otherwise keep the current path and swap the locale.
    const newPath =
      alternates?.[newLocale] ??
      getPathname({
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

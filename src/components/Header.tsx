'use client'

import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('header')
  const tCommon = useTranslations('common')

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 text-white py-5 lg:py-7 rounded-2xl shadow-xl">
      <div className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-blue-600/15 blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center gap-3 mb-2">
          <svg
            className="w-8 h-8 lg:w-10 lg:h-10 text-blue-400 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.34.07-.68.07-1.08s-.03-.74-.07-1.08l2.29-1.79c.2-.16.25-.45.12-.68l-2.17-3.76c-.13-.23-.42-.3-.65-.21l-2.7 1.08c-.56-.42-1.17-.77-1.82-1.04l-.41-2.87c-.05-.25-.26-.44-.53-.44H9.04c-.27 0-.48.19-.53.44l-.41 2.87c-.65.27-1.25.62-1.82 1.04l-2.7-1.08c-.23-.09-.52-.02-.65.21L.76 9.53c-.13.23-.08.52.12.68l2.29 1.79c-.04.34-.07.69-.07 1.08s.03.74.07 1.08L.88 15.95c-.2.16-.25.45-.12.68l2.17 3.76c.13.23.42.3.65.21l2.7-1.08c.57.42 1.17.77 1.82 1.04l.41 2.87c.05.25.26.44.53.44h4.34c.27 0 .48-.19.53-.44l.41-2.87c.65-.27 1.26-.62 1.82-1.04l2.7 1.08c.23.09.52.02.65-.21l2.17-3.76c.13-.23.08-.52-.12-.68l-2.29-1.79z" />
          </svg>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-widest uppercase">GREGORIUS</h1>
        </div>
        <p className="text-center text-xs lg:text-sm font-medium uppercase tracking-[0.2em] text-blue-300 mb-3 lg:mb-4">
          {tCommon('tagline')}
        </p>
        <div className="text-center">
          <div className="text-sm lg:text-base space-y-1.5">
            <p className="font-medium text-slate-200">{t('address')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-slate-300">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('phone')}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('phoneStationary')}
              </span>
              <a
                href="mailto:biuro@gregorius.pl"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                biuro@gregorius.pl
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

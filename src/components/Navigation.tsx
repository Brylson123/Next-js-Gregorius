'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import LanguageSwitcher from './LanguageSwitcher'

const HomeIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const ProductsIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const ServicesIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const TechIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  </svg>
)

const ContactIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const BlogIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

type NavPathname = '/' | '/blog' | '/produkty' | '/uslugi' | '/technologia' | '/kontakt'

export default function Navigation({
  localeAlternates,
}: {
  localeAlternates?: Partial<Record<string, string>>
}) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const pathname = usePathname()

  const navigationItems: { pathname: NavPathname; label: string; icon: React.ReactNode }[] = [
    { pathname: '/', label: t('about'), icon: <HomeIcon /> },
    { pathname: '/produkty', label: t('products'), icon: <ProductsIcon /> },
    { pathname: '/uslugi', label: t('services'), icon: <ServicesIcon /> },
    { pathname: '/technologia', label: t('technology'), icon: <TechIcon /> },
    { pathname: '/blog', label: t('blog'), icon: <BlogIcon /> },
    { pathname: '/kontakt', label: t('contact'), icon: <ContactIcon /> },
  ]

  const isActive = (itemPathname: NavPathname) => pathname === itemPathname

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-700 text-white p-2 rounded-md shadow-lg hover:bg-slate-600 transition-colors"
        aria-label="Otwórz menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`
        bg-gradient-to-b from-slate-700 to-slate-800 min-h-screen w-64 p-6 shadow-xl
        fixed lg:static z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-xl font-bold tracking-wide">{tCommon('menu')}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-slate-300 hover:text-white transition-colors"
            aria-label="Zamknij menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const active = isActive(item.pathname)
            return (
              <li key={item.pathname}>
                <Link
                  href={item.pathname}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 py-2.5 px-4 rounded-lg font-medium transition-all duration-200
                    ${active
                      ? 'bg-blue-600 text-white shadow-md border-l-2 border-blue-300'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white border-l-2 border-transparent'
                    }
                  `}
                >
                  <span className={active ? 'text-blue-200' : 'text-slate-400'}>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-slate-600 space-y-4">
          <div className="text-slate-300 text-sm">
            <p className="font-semibold text-slate-100">{tCommon('companyName')}</p>
            <p className="text-xs mt-1 text-slate-400">{tCommon('producer')}</p>
          </div>
          <div className="pt-2">
            <LanguageSwitcher alternates={localeAlternates} />
          </div>
        </div>
      </nav>
    </>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const navigationItems = [
    { href: `/${locale}`, label: t('about') },
    { href: `/${locale}/produkty`, label: t('products') },
    { href: `/${locale}/uslugi`, label: t('services') },
    { href: `/${locale}/technologia`, label: t('technology') },
    { href: `/${locale}/kontakt`, label: t('contact') },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className={`
        bg-gradient-to-b from-blue-600 to-blue-700 min-h-screen w-64 p-6 shadow-xl
        fixed lg:static z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-xl font-bold">{tCommon('menu')}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:text-blue-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="space-y-3">
          {navigationItems.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-white font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:transform hover:scale-105"
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-blue-500 space-y-4">
          <div className="text-blue-100 text-sm">
            <p className="font-semibold">{tCommon('companyName')}</p>
            <p className="text-xs mt-1">{tCommon('producer')}</p>
          </div>
          <div className="pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  )
}


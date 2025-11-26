'use client'

import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('header')

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 lg:py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-3 lg:mb-4">
          <h1 className="text-3xl lg:text-4xl font-bold">GREGORIUS</h1>
        </div>
        <div className="text-center">
          <div className="text-sm lg:text-base space-y-1">
            <p className="font-medium">{t('address')}</p>
            <p className="text-blue-100">{t('phone')}</p>
            <p className="text-blue-100">{t('phoneStationary')}</p>
            <p className="text-blue-100">
              <a href="mailto:biuro@gregorius.pl" className="hover:text-white transition-colors">
                biuro@gregorius.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}


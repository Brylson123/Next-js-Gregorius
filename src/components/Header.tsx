'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 lg:py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">GREGORIUS</h1>
          <div className="text-sm lg:text-base space-y-1">
            <p className="font-medium">os. Na Wzgórzach 22, 31-723 Kraków</p>
            <p className="text-blue-100">tel. 501 271 070</p>
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


'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigationItems = [
  { href: '/', label: 'O firmie' },
  { href: '/produkty', label: 'Produkty' },
  { href: '/technologia', label: 'Technologia' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: 'mailto:biuro@gregorius.pl', label: 'E-mail' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
          <h2 className="text-white text-xl font-bold">Menu</h2>
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

        <div className="mt-8 pt-6 border-t border-blue-500">
          <div className="text-blue-100 text-sm">
            <p className="font-semibold">GREGORIUS</p>
            <p className="text-xs mt-1">Producent części zamiennych</p>
          </div>
        </div>
      </nav>
    </>
  )
}


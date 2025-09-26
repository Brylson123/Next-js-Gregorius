import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych',
  description: 'GREGORIUS - uznany producent części zamiennych do silników spalinowych. Specjalizujemy się w tulejach cylindrowych, gniazdach zaworowych i prowadnicach zaworowych.',
  keywords: 'tuleje cylindrowe, gniazda zaworowe, części zamienne, silniki spalinowe, GREGORIUS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}
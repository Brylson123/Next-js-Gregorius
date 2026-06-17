import { ImageResponse } from 'next/og'
import { locales } from '@/i18n/config'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #020617 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
          <div
            style={{
              display: 'flex',
              width: 84,
              height: 84,
              borderRadius: 20,
              background: '#2563eb',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
            }}
          >
            ⚙
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: 8,
            }}
          >
            GREGORIUS
          </div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Tuleje cylindrowe i gniazda zaworowe
        </div>
        <div style={{ fontSize: 30, color: '#93c5fd', marginTop: 28, maxWidth: 900 }}>
          Producent części zamiennych do silników spalinowych · ponad 60 lat doświadczenia
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 70,
            left: 90,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 26,
            color: '#cbd5e1',
          }}
        >
          <div style={{ width: 44, height: 5, background: '#f59e0b', borderRadius: 4 }} />
          gregorius.pl
        </div>
      </div>
    ),
    { ...size }
  )
}

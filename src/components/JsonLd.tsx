import { SITE_URL } from '@/lib/site'

const BASE = SITE_URL

const DESCRIPTION = {
  pl: 'Uznany producent części zamiennych do silników spalinowych — tuleje cylindrowe (suche i mokre) oraz gniazda zaworowe. Honowanie, regeneracja cylindrów i produkcja na zamówienie.',
  en: 'A recognized manufacturer of spare parts for internal combustion engines — cylinder liners (dry and wet) and valve seats. Liner honing, cylinder regeneration and custom production.',
} as const

export default function JsonLd({ locale }: { locale: string }) {
  const description = DESCRIPTION[locale as keyof typeof DESCRIPTION] ?? DESCRIPTION.pl

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        name: 'GREGORIUS',
        legalName: 'Gregorius Grzegorz Marcin Urbaniak',
        url: BASE,
        logo: `${BASE}/icon.svg`,
        email: 'biuro@gregorius.pl',
        vatID: 'PL7531101080',
        taxID: '753-110-10-80',
        foundingDate: '1960',
        description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'os. Na Wzgórzach 22',
          postalCode: '31-723',
          addressLocality: 'Kraków',
          addressCountry: 'PL',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+48501271070',
            contactType: 'sales',
            email: 'biuro@gregorius.pl',
            availableLanguage: ['Polish', 'English'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+48126451361',
            contactType: 'customer service',
            availableLanguage: ['Polish'],
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE}/#localbusiness`,
        name: 'GREGORIUS',
        image: `${BASE}/${locale}/opengraph-image`,
        url: BASE,
        telephone: '+48126451361',
        email: 'biuro@gregorius.pl',
        priceRange: '$$',
        description,
        parentOrganization: { '@id': `${BASE}/#organization` },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'os. Na Wzgórzach 22',
          postalCode: '31-723',
          addressLocality: 'Kraków',
          addressCountry: 'PL',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.095746,
          longitude: 20.062018,
        },
        hasMap: 'https://www.google.com/maps?q=50.095746,20.062018',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/produkty': {
      pl: '/produkty',
      en: '/products',
    },
    '/uslugi': {
      pl: '/uslugi',
      en: '/services',
    },
    '/technologia': {
      pl: '/technologia',
      en: '/technology',
    },
    '/kontakt': {
      pl: '/kontakt',
      en: '/contact',
    },
  },
})

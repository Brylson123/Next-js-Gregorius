import { routing } from './routing'

export const locales = routing.locales
export const defaultLocale = routing.defaultLocale

export type Locale = (typeof locales)[number]

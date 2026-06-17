import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  await getTranslations({ locale, namespace: 'home' })

  return {
    title: 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych',
    description: 'GREGORIUS - uznany producent części zamiennych do silników spalinowych. Specjalizujemy się w tulejach cylindrowych i gniazdach zaworowych.',
  }
}

const FeatureMaterialsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)
const FeaturePrecisionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const FeatureCustomIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)
const FeatureTraditionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)
const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  const t = await getTranslations()

  const stats = [
    { value: t('home.stats.yearsValue'), label: t('home.stats.yearsLabel') },
    { value: t('home.stats.diameterValue'), label: t('home.stats.diameterLabel') },
    { value: t('home.stats.seatsValue'), label: t('home.stats.seatsLabel') },
    { value: t('home.stats.marketsValue'), label: t('home.stats.marketsLabel') },
  ]

  const features = [
    { icon: <FeatureMaterialsIcon />, title: t('home.features.materials.title'), content: t('home.features.materials.content') },
    { icon: <FeaturePrecisionIcon />, title: t('home.features.precision.title'), content: t('home.features.precision.content') },
    { icon: <FeatureCustomIcon />, title: t('home.features.custom.title'), content: t('home.features.custom.content') },
    { icon: <FeatureTraditionIcon />, title: t('home.features.tradition.title'), content: t('home.features.tradition.content') },
  ]

  return (
    <div className="flex min-h-screen">
      <Navigation />

      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />

        <div className="mt-6 lg:mt-8">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 px-6 py-10 lg:px-12 lg:py-14 shadow-xl">
            <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />

            <div className="relative max-w-3xl">
              <span className="badge bg-blue-500/15 text-blue-200 ring-1 ring-inset ring-blue-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {t('home.hero.badge')}
              </span>
              <h1 className="mt-5 text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                {t('home.hero.title')}
              </h1>
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-slate-300">
                {t('home.hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/produkty" prefetch={false} className="btn-primary">
                  {t('home.hero.ctaPrimary')}
                  <ArrowIcon />
                </Link>
                <Link href="/kontakt" prefetch={false} className="btn-secondary">
                  {t('home.hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="relative mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mt-12 lg:mt-16">
            <span className="eyebrow">{t('home.features.eyebrow')}</span>
            <h2 className="page-heading mt-3">{t('home.features.title')}</h2>
            <span className="accent-bar" />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="content-text text-sm">{f.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partners / materials */}
          <section className="mt-12 lg:mt-16">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 lg:p-10 shadow-sm">
              <div className="text-center max-w-2xl mx-auto">
                <span className="eyebrow justify-center">{t('home.partners.eyebrow')}</span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-3">{t('home.partners.title')}</h2>
                <p className="content-text mt-3">{t('home.partners.subtitle')}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'MAHLE', note: t('home.partners.mahle') },
                  { name: 'FUCHS', note: t('home.partners.fuchs') },
                  { name: 'GILDEMEISTER', note: t('home.partners.gildemeister') },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-7 text-center transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className="text-xl lg:text-2xl font-extrabold tracking-wide text-slate-700">{p.name}</span>
                    <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">{p.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mt-12 lg:mt-16">
            <span className="eyebrow">{t('home.title')}</span>
            <h2 className="page-heading mt-3">{t('home.whoWeAre.title')}</h2>
            <span className="accent-bar" />

            <div className="mt-6 flex flex-col lg:flex-row gap-2 mb-8">
              <a href="#nasz-cel" className="quick-nav-btn">{t('home.sections.ourGoal')}</a>
              <a href="#tradycja" className="quick-nav-btn">{t('home.sections.tradition')}</a>
              <a href="#rozwoj" className="quick-nav-btn">{t('home.sections.development')}</a>
              <a href="#nip" className="quick-nav-btn">{t('home.sections.nip')}</a>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <section id="kim-jestesmy" className="card-accent">
                <p className="content-text text-lg">{t('home.whoWeAre.content')}</p>
              </section>

              <section id="nasz-cel" className="card-accent">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('home.ourGoal.title')}</h3>
                <p className="content-text">{t('home.ourGoal.content')}</p>
              </section>

              <section id="tradycja" className="card-accent">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('home.tradition.title')}</h3>
                <p className="content-text">{t('home.tradition.content')}</p>
              </section>

              <section id="rozwoj" className="card-accent">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('home.development.title')}</h3>
                <p className="content-text">{t('home.development.content')}</p>
              </section>

              <section id="nip" className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 shadow-sm p-6 lg:p-8 border border-blue-100 border-l-4 border-l-blue-600">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">{t('home.nip.title')}</h3>
                <p className="text-lg lg:text-xl font-semibold text-blue-800 font-mono tracking-wide">{t('home.nip.value')}</p>
              </section>
            </div>
          </section>

          <div className="mt-10 lg:mt-12 text-center">
            <a href="#top" className="btn-back-to-top">{t('home.backToTop')}</a>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

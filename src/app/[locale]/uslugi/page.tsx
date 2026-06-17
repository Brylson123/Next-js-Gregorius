import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function Uslugi({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params
  const t = await getTranslations()

  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h1 className="page-heading mt-3">{t('services.title')}</h1>
          <span className="accent-bar" />
          <p className="content-text text-lg mt-4 mb-8 max-w-3xl">{t('services.intro')}</p>

          <div className="flex flex-col lg:flex-row gap-2 mb-6 lg:mb-8">
            <a href="#handel" className="quick-nav-btn">{t('services.sections.trade')}</a>
            <a href="#regeneracja" className="quick-nav-btn">{t('services.sections.regeneration')}</a>
            <a href="#honowanie" className="quick-nav-btn">{t('services.sections.honing')}</a>
            <a href="#produkcja" className="quick-nav-btn">{t('services.sections.production')}</a>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <section id="handel" className="card-accent">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('services.trade.title')}</h2>
              <p className="content-text">
                {t('services.trade.content')}
              </p>
            </section>

            <section id="regeneracja" className="card-accent">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('services.regeneration.title')}</h2>
              <p className="content-text">
                {t('services.regeneration.content')}
              </p>
            </section>

            <section id="honowanie" className="card-accent">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('services.honing.title')}</h2>
              <p className="content-text">
                {t('services.honing.content')}
              </p>
            </section>

            <section id="produkcja" className="card-accent">
              <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">{t('services.production.title')}</h2>
              <p className="content-text">
                {t('services.production.content')}
              </p>
            </section>
          </div>

          <div className="mt-10 lg:mt-12 text-center">
            <a href="#top" className="btn-back-to-top">{t('services.backToTop')}</a>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}


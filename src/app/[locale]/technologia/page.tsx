import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function Technologia({
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
          <span className="eyebrow">{t('technology.eyebrow')}</span>
          <h1 className="page-heading mt-3">{t('technology.title')}</h1>
          <span className="accent-bar" />

          <div className="mb-10 mt-4">
            <p className="content-text text-lg max-w-3xl">
              {t('technology.intro')}
            </p>
          </div>

          <section>
            <h2 className="section-title mb-6">{t('technology.conditions.title')}</h2>

            <div className="space-y-4">
              {[
                { title: t('technology.conditions.materials.title'), content: t('technology.conditions.materials.content') },
                { title: t('technology.conditions.processing.title'), content: t('technology.conditions.processing.content') },
                { title: t('technology.conditions.conservation.title'), content: t('technology.conditions.conservation.content') },
                { title: t('technology.conditions.packaging.title'), content: t('technology.conditions.packaging.content') },
                { title: t('technology.conditions.shipping.title'), content: t('technology.conditions.shipping.content') },
              ].map((step, i) => (
                <div key={step.title} className="card-accent flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
                    <p className="content-text">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10 lg:mt-12 text-center">
            <a href="#top" className="btn-back-to-top">{t('technology.backToTop')}</a>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

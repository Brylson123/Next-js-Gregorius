import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductGallery from '@/components/ProductGallery'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function Produkty({
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
          <span className="eyebrow">{t('products.eyebrow')}</span>
          <h1 className="page-heading mt-3">{t('products.title')}</h1>
          <span className="accent-bar" />

          <div className="flex flex-col lg:flex-row gap-2 mb-8 mt-6">
            <a href="#tuleje-suche" className="quick-nav-btn">{t('products.sections.dryLiners')}</a>
            <a href="#tuleje-mokre" className="quick-nav-btn">{t('products.sections.wetLiners')}</a>
            <a href="#gniazda-zaworowe" className="quick-nav-btn">{t('products.sections.valveSeats')}</a>
          </div>

          <div className="mb-8">
            <p className="content-text text-lg">
              {t('products.intro')}
            </p>
          </div>

          <div className="space-y-12">
            <section id="tuleje-suche" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">{t('products.dryLiners.title')}</h2>
              <p className="content-text mb-8">
                {t('products.dryLiners.content')}
              </p>
              <ProductGallery
                images={[
                  { src: '/photo/tuleja sucha.png', alt: t('products.sections.dryLiners') },
                  { src: '/photo/Tuleja sucha2.png', alt: t('products.sections.dryLiners') },
                  { src: '/photo/Tuleja sucha 3.png', alt: t('products.sections.dryLiners') },
                ]}
              />
            </section>

            <section id="tuleje-mokre" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">{t('products.wetLiners.title')}</h2>
              <p className="content-text mb-8">
                {t('products.wetLiners.content')}
              </p>
              <ProductGallery
                images={[
                  { src: '/photo/tuleja mokra.png', alt: t('products.sections.wetLiners') },
                  { src: '/photo/tuleja mokra 2.png', alt: t('products.sections.wetLiners') },
                  { src: '/photo/Tuleja mokra 3.png', alt: t('products.sections.wetLiners') },
                ]}
              />
            </section>

            <section id="gniazda-zaworowe" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">{t('products.valveSeats.title')}</h2>
              <p className="content-text mb-4">
                {t('products.valveSeats.intro')}
              </p>
              <ul className="list-disc list-inside mb-8 space-y-2 content-text">
                <li><strong>{t('products.valveSeats.gasoline')}</strong></li>
                <li><strong>{t('products.valveSeats.gasolineLpg')}</strong></li>
                <li><strong>{t('products.valveSeats.diesel')}</strong></li>
              </ul>
              <p className="content-text mb-8">
                {t('products.valveSeats.content')}
              </p>
              <ProductGallery
                images={[
                  { src: '/photo/gniazda zaworowe.png', alt: t('products.sections.valveSeats') },
                ]}
              />
            </section>
          </div>

          <div className="mt-10 lg:mt-12 text-center">
            <a href="#top" className="btn-back-to-top">{t('products.backToTop')}</a>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}


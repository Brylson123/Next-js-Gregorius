import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

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
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{t('products.title')}</h1>
          
          <div className="flex flex-col lg:flex-row gap-3 mb-8">
            <a 
              href="#tuleje-suche" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              {t('products.sections.dryLiners')}
            </a>
            <a 
              href="#tuleje-mokre" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              {t('products.sections.wetLiners')}
            </a>
            <a 
              href="#gniazda-zaworowe" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              {t('products.sections.valveSeats')}
            </a>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja sucha.png"
                    alt={t('products.sections.dryLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja sucha2.png"
                    alt={t('products.sections.dryLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja sucha 3.png"
                    alt={t('products.sections.dryLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </section>

            <section id="tuleje-mokre" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">{t('products.wetLiners.title')}</h2>
              <p className="content-text mb-8">
                {t('products.wetLiners.content')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja mokra.png"
                    alt={t('products.sections.wetLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja mokra 2.png"
                    alt={t('products.sections.wetLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja mokra 3.png"
                    alt={t('products.sections.wetLiners')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/gniazda zaworowe.png"
                    alt={t('products.sections.valveSeats')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-6 lg:mt-8 text-center">
            <a href="#top" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
              {t('products.backToTop')}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


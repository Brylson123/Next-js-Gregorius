import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import { getTranslations } from 'next-intl/server'

export default async function Technologia({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations()

  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{t('technology.title')}</h1>
          
          <div className="mb-8">
            <p className="content-text text-lg">
              {t('technology.intro')}
            </p>
          </div>

          <section>
            <h2 className="section-title">{t('technology.conditions.title')}</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('technology.conditions.materials.title')}</h3>
                <p className="content-text">
                  {t('technology.conditions.materials.content')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('technology.conditions.processing.title')}</h3>
                <p className="content-text">
                  {t('technology.conditions.processing.content')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('technology.conditions.conservation.title')}</h3>
                <p className="content-text">
                  {t('technology.conditions.conservation.content')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('technology.conditions.packaging.title')}</h3>
                <p className="content-text">
                  {t('technology.conditions.packaging.content')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('technology.conditions.shipping.title')}</h3>
                <p className="content-text">
                  {t('technology.conditions.shipping.content')}
                </p>
              </div>
            </div>
          </section>

          <div className="mt-6 lg:mt-8 text-center">
            <a href="#top" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
              {t('technology.backToTop')}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


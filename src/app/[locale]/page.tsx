import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const t = await getTranslations({ namespace: 'home' })

  return {
    title: 'GREGORIUS - Producent tulei cylindrowych i gniazd zaworowych',
    description: 'GREGORIUS - uznany producent części zamiennych do silników spalinowych. Specjalizujemy się w tulejach cylindrowych i gniazdach zaworowych.',
  }
}

export default async function Home({
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
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">{t('home.title')}</h1>
          
          <div className="flex flex-col lg:flex-row gap-3 mb-6 lg:mb-8">
            <a href="#nasz-cel" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">{t('home.sections.ourGoal')}</a>
            <a href="#tradycja" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">{t('home.sections.tradition')}</a>
            <a href="#rozwoj" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">{t('home.sections.development')}</a>
            <a href="#nip" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">{t('home.sections.nip')}</a>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <section id="kim-jestesmy" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t('home.whoWeAre.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('home.whoWeAre.content')}
              </p>
            </section>

            <section id="nasz-cel" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t('home.ourGoal.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('home.ourGoal.content')}
              </p>
            </section>

            <section id="tradycja" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t('home.tradition.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('home.tradition.content')}
              </p>
            </section>

            <section id="rozwoj" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t('home.development.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('home.development.content')}
              </p>
            </section>

            <section id="nip" className="bg-blue-50 rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{t('home.nip.title')}</h2>
              <p className="text-lg lg:text-xl font-semibold text-blue-800 font-mono">{t('home.nip.value')}</p>
            </section>
          </div>

          <div className="mt-6 lg:mt-8 text-center">
            <a href="#top" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
              {t('home.backToTop')}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


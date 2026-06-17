import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleMap from '@/components/GoogleMap'
import ContactForm from '@/components/ContactForm'
import { Toaster } from 'react-hot-toast'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'pl' }]
}

export default async function Kontakt({
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
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h1 className="page-heading mt-3">{t('contact.title')}</h1>
          <span className="accent-bar" />
          <p className="content-text text-lg mt-4 mb-8 max-w-3xl">{t('contact.intro')}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full flex flex-col">
                <h2 className="section-title">{t('contact.contact')}</h2>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.phone')}</p>
                      <p className="text-gray-600">501 271 070</p>
                    </div>
      
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.phoneStationary')}</p>
                      <p className="text-gray-600">+48 12 645 13 61</p>
                    </div>  
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{t('contact.email')}</p>
                      <a href="mailto:biuro@gregorius.pl" className="text-blue-600 hover:text-blue-800">
                        biuro@gregorius.pl
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full">
                <h2 className="section-title">{t('contact.sendMessage')}</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="section-title">{t('contact.location')}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <GoogleMap className="mb-4 rounded-lg overflow-hidden" />
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">📍</span>
                    {t('contact.address')}
                  </h3>
                  <p className="content-text">
                    <strong>Gregorius Grzegorz Marcin Urbaniak</strong><br />
                    os. Na Wzgórzach 22<br />
                    31-723 Kraków
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-12 text-center">
            <a href="#top" className="btn-back-to-top">{t('contact.backToTop')}</a>
          </div>
        </div>
        <Footer />
      </main>
      <Toaster position="top-right" />
    </div>
  )
}


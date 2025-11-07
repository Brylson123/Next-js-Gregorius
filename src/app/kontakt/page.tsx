import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import GoogleMap from '@/components/GoogleMap'
import ContactForm from '@/components/ContactForm'
import { Toaster } from 'react-hot-toast'

export default function Kontakt() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Kontakt</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full flex flex-col">
                <h2 className="section-title">Kontakt</h2>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefon</p>
                      <p className="text-gray-600">012 645 13 61</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Komórka</p>
                      <p className="text-gray-600">501 271 070</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
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
                <h2 className="section-title">Wyślij wiadomość</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="section-title">Lokalizacja</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <GoogleMap className="mb-4 rounded-lg overflow-hidden" />
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">📍</span>
                    Adres
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

          <div className="mt-6 lg:mt-8 text-center">
            <a href="#top" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
              ↑ Na początek
            </a>
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  )
}

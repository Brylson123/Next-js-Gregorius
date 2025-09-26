import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import GoogleMap from '@/components/GoogleMap'

export default function Kontakt() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Kontakt</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title">Dane kontaktowe</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Strona internetowa:</h3>
                  <a href="https://www.gregorius.pl" className="text-blue-600 hover:text-blue-800">
                    www.gregorius.pl
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Telefon:</h3>
                  <p>012 645 13 61</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Fax:</h3>
                  <p>012 640 56 50</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">Telefon komórkowy:</h3>
                  <p>501 271 070</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">E-mail:</h3>
                  <a href="mailto:biuro@gregorius.pl" className="text-blue-600 hover:text-blue-800">
                    biuro@gregorius.pl
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="section-title">O firmie</h2>
                <p className="content-text">
                  Producent tulei cylindrowych i gniazd zaworowych. Nasze wyroby wykonywane są 
                  z odlewów firmy Mahle Polska Sp. z o.o. - Krotoszyn oraz Prima S.A.
                </p>
                <p className="content-text mt-4 font-semibold">
                  Serdecznie zapraszamy do współpracy.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="section-title">Właściciel</h2>
                <p className="content-text">
                  <strong>Gregorius Grzegorz Marcin Urbaniak</strong><br />
                  Os. Na Wzgórzach 22<br />
                  31-723 Kraków
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title">Lokalizacja</h2>
              <GoogleMap className="mb-4" />
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Adres:</h3>
                <p className="content-text">
                  os. Na Wzgórzach 22<br />
                  31-723 Kraków
                </p>
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
    </div>
  )
}

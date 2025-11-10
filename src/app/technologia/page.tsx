import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default function Technologia() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Technologia i warunki wykonania</h1>
          
          <div className="mb-8">
            <p className="content-text text-lg">
              GREGORIUS produkuje swoje wyroby według wypracowanej technologii dostosowanej 
              do wymogów technicznych dotyczących części zamiennych dla silników spalinowych 
              oraz wysokich wymagań swoich odbiorców.
            </p>
          </div>

          <section>
            <h2 className="section-title">Warunki wykonania:</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Materiały</h3>
                <p className="content-text">
                  Materiały pochodzą od firmy MAHLE Polska z Krotoszyna. Odlewy żeliwne do tulei cylindrowych, gniazd zaworowych 
                  produkowane są zgodnie z odpowiednimi normami branżowymi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Obróbka</h3>
                <p className="content-text">
                  Tuleje cylindrowe i pozostałe wyroby poddawane są obróbce cieplnej w celu 
                  poprawy właściwości mechanicznych. Produkcja wykorzystuje szeroką gamę 
                  obrabiarek - od tokarek uniwersalnych po specjalistyczne automaty klasy LSP 
                  oraz ultranowoczesne obrabiarki CNC firmy GILDEMEISTER. Ostateczną precyzję 
                  uzyskujemy poprzez szlifowanie na szlifierkach do wałków.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Konserwacja</h3>
                <p className="content-text">
                  Wszystkie wyroby konserwowane są środkami antykorozyjnymi firmy Fuchs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Pakowanie</h3>
                <p className="content-text">
                  Wyroby pakowane są w kartonowe pudełka. 
                  Opakowania zbiorcze dostosowane są do indywidualnych wymagań klienta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Wysyłka</h3>
                <p className="content-text">
                  Zamówione wyroby wysyłane są do klientów zgodnie z indywidualnymi ustaleniami: 
                  kurierem, pocztą lub transportem własnym.
                </p>
              </div>
            </div>
          </section>

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


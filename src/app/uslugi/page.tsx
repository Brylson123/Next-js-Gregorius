import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default function Sprzedaz() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Usługi</h1>
          
          <div className="flex flex-col lg:flex-row gap-3 mb-6 lg:mb-8">
            <a href="#handel" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Handel</a>
            <a href="#regeneracja" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Regeneracja</a>
            <a href="#honowanie" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Honowanie tuleji</a>
            <a href="#produkcja" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Produkcja</a>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <section id="handel" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Handel</h2>
              <p className="text-gray-700 leading-relaxed">
                Prowadzimy sprzedaż odlewów na tuleje i gniazda w postaci rur, odlewów do pojedynczych tulei oraz wałków.
              </p>
            </section>

            <section id="regeneracja" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Regeneracja</h2>
              <p className="text-gray-700 leading-relaxed">
                Oferujemy usługi regeneracji cylindrów.
              </p>
            </section>

            <section id="honowanie" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Honowanie tulei</h2>
              <p className="text-gray-700 leading-relaxed">
                Wykonujemy honowanie tulei cylindrowych.
              </p>
            </section>

            <section id="produkcja" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Produkcja</h2>
              <p className="text-gray-700 leading-relaxed">
                Na indywidualne zamówienia wykonujemy detale z żeliwa, stali oraz metali kolorowych według wymagań klienta.
              </p>
            </section>
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


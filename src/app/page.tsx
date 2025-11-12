import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Informacje o firmie</h1>
          
          <div className="flex flex-col lg:flex-row gap-3 mb-6 lg:mb-8">
            <a href="#nasz-cel" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Nasz cel</a>
            <a href="#tradycja" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Tradycja</a>
            <a href="#rozwoj" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">Rozwój</a>
            <a href="#nip" className="flex items-center justify-center text-sm lg:text-base text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto">NIP</a>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <section id="kim-jestesmy" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Kim jesteśmy?</h2>
              <p className="text-gray-700 leading-relaxed">
                GREGORIUS to uznany producent części zamiennych do silników spalinowych, 
                specjalizujący się w produkcji tulei cylindrowych i gniazd zaworowych. Nasza firma od lat 
                dostarcza wysokiej jakości produkty, dostosowane do indywidualnych potrzeb klientów.
              </p>
            </section>

            <section id="nasz-cel" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Nasz cel</h2>
              <p className="text-gray-700 leading-relaxed">
                Naszym głównym celem jest dostarczanie produktów najwyższej jakości, 
                ciągła modernizacja procesów produkcyjnych oraz dbałość o środowisko naturalne. 
                Dążymy do zaspokojenia potrzeb naszych klientów poprzez innowacyjne rozwiązania 
                i profesjonalne podejście do każdego zlecenia.
              </p>
            </section>

            <section id="tradycja" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Tradycja</h2>
              <p className="text-gray-700 leading-relaxed">
                Historia naszej firmy sięga lat 60. XX wieku, kiedy to rozpoczęliśmy działalność 
                jako warsztat szlifowania cylindrów i wałów korbowych.
              </p>
            </section>

            <section id="rozwoj" className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Rozwój</h2>
              <p className="text-gray-700 leading-relaxed">
                W 2004 roku przeprowadziliśmy znaczącą restrukturyzację, inwestując w jakość 
                i efektywność produkcji. Dzięki temu znacznie rozszerzyliśmy bazę klientów 
                w Polsce i za granicą.
              </p>
            </section>

            <section id="nip" className="bg-blue-50 rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Nr NIP</h2>
              <p className="text-lg lg:text-xl font-semibold text-blue-800 font-mono">753-110-10-80</p>
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
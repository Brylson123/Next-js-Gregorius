import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Produkty() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      
      <main className="flex-1 lg:ml-0 ml-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <Header />
        
        <div className="mt-6 lg:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Produkty</h1>
          
          <div className="flex flex-col lg:flex-row gap-3 mb-8">
            <a 
              href="#tuleje-suche" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              Tuleje suche
            </a>
            <a 
              href="#tuleje-mokre" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              Tuleje mokre
            </a>
            <a 
              href="#gniazda-zaworowe" 
              className="flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-200 w-full lg:w-auto"
            >
              Gniazda zaworowe
            </a>
          </div>

          <div className="mb-8">
            <p className="content-text text-lg">
              GREGORIUS to uznany producent części zamiennych do silników spalinowych, 
              specjalizujący się w wysokiej jakości tulejach cylindrowych i gniazdach zaworowych.
            </p>
          </div>

          <div className="space-y-12">
            <section id="tuleje-suche" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">Tuleje suche</h2>
              <p className="content-text mb-8">
                Produkujemy cienkościenne tuleje cylindrowe suche o średnicach wewnętrznych 
                do 240 mm. Nasze produkty przeznaczone są dla wszystkich typów silników 
                spalinowych, sprężarek i kosiarek. Realizujemy również zamówienia indywidualne 
                według specyfikacji klienta.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja sucha.png"
                    alt="Tuleje suche"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja sucha2.png"
                    alt="Tuleje suche"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja sucha 3.png"
                    alt="Tuleje suche"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </section>

            <section id="tuleje-mokre" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">Tuleje mokre</h2>
              <p className="content-text mb-8">
                Oferujemy grubościenne tuleje cylindrowe mokre o średnicach wewnętrznych 
                do 240 mm. Produkty przeznaczone dla wszystkich typów silników 
                spalinowych i maszyn. Dostępne zamówienia indywidualne według wymagań klienta.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja mokra.png"
                    alt="Tuleje mokre"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/tuleja mokra 2.png"
                    alt="Tuleje mokre"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/Tuleja mokra 3.png"
                    alt="Tuleje mokre"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </section>

            <section id="gniazda-zaworowe" className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="section-title mb-6">Gniazda zaworowe</h2>
              <p className="content-text mb-4">
                Produkujemy gniazda zaworowe w trzech wersjach:
              </p>
              <ul className="list-disc list-inside mb-8 space-y-2 content-text">
                <li><strong>Dla silników benzynowych:</strong> wykonane ze specjalnego żeliwa odpornego na wysokie temperatury</li>
                <li><strong>Dla silników benzynowo-gazowych:</strong> wykonane ze specjalnie opracowanego żeliwa dla cięższych warunków pracy</li>
                <li><strong>Dla silników wysokoprężnych:</strong> wykonane ze specjalnego żeliwa dla szczególnie trudnych warunków</li>
              </ul>
              <p className="content-text mb-8">
                Gniazda zaworowe produkowane są dla wszystkich typów silników. 
                Realizujemy zamówienia indywidualne.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative w-full h-96 bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200 shadow-md">
                  <Image
                    src="/photo/gniazda zaworowe.png"
                    alt="Gniazda zaworowe"
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
              ↑ Na początek
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


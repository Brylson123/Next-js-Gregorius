import { locales, type Locale } from '@/i18n/config'

/** Inline text fragment — plain string or an internal link. */
export type Inline = string | { text: string; href: string }

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; content: Inline[] }
  | { type: 'ul'; items: Inline[][] }
  | { type: 'ol'; items: Inline[][] }
  | { type: 'quote'; text: string }
  | { type: 'cta'; text: string; href: string; label: string }

export type Faq = { q: string; a: string }

export type LocalizedPost = {
  title: string
  description: string
  excerpt: string
  keywords: string[]
  body: Block[]
  faq?: Faq[]
}

export type BlogPost = {
  id: string
  date: string
  updated?: string
  slug: Record<Locale, string>
  cover: string
  category: Record<Locale, string>
} & Record<Locale, LocalizedPost>

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

export const posts: BlogPost[] = [
  {
    id: 'gniazda-zaworowe-lpg',
    date: '2026-06-10',
    cover: '/photo/gniazda zaworowe.png',
    slug: {
      pl: 'gniazda-zaworowe-do-lpg',
      en: 'valve-seats-for-lpg-engines',
    },
    category: { pl: 'Poradnik', en: 'Guide' },
    pl: {
      title: 'Gniazda zaworowe do LPG — dlaczego standardowe nie wystarczą',
      description:
        'Instalacja LPG zmienia warunki pracy zaworów. Wyjaśniamy, dlaczego silnik na gaz potrzebuje twardszych gniazd zaworowych i jak uniknąć ich wypalenia.',
      excerpt:
        'Po montażu LPG zawory pracują w wyższej temperaturze i bez „smarowania" benzyną. Sprawdź, dlaczego potrzebne są gniazda przeznaczone do gazu.',
      keywords: [
        'gniazda zaworowe do LPG',
        'gniazda zaworowe gaz',
        'wypalone gniazda zaworowe',
        'silnik na gaz zawory',
        'gniazda zaworowe benzyna gaz',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Montaż instalacji LPG to oszczędność na paliwie, ale też zmiana warunków pracy najbardziej obciążonych elementów głowicy — zaworów i ich gniazd. Wielu kierowców dowiaduje się o tym dopiero przy spadku kompresji. Jako ',
            { text: 'producent gniazd zaworowych', href: '/pl/produkty/' },
            ' wyjaśniamy, na czym polega problem.',
          ],
        },
        { type: 'h2', text: 'Dlaczego gaz jest trudniejszy dla zaworów' },
        {
          type: 'p',
          content: [
            'Spalanie gazu przebiega w wyższej temperaturze, a paliwo gazowe nie tworzy na zaworze cienkiej warstwy ochronnej, którą zapewnia benzyna. Efekt: gniazdo zaworowe pracuje goręcej i bardziej „na sucho", przez co szybciej się zużywa, a w skrajnych przypadkach ulega wypaleniu (recesji).',
          ],
        },
        { type: 'h2', text: 'Objawy wypalonych gniazd' },
        {
          type: 'ul',
          items: [
            ['Spadek kompresji na jednym lub kilku cylindrach.'],
            ['Nierówna praca silnika, „kiwanie" na biegu jałowym.'],
            ['Spadek mocy i wzrost zużycia paliwa.'],
            ['Trudniejszy rozruch.'],
          ],
        },
        { type: 'h2', text: 'Rozwiązanie — gniazda przeznaczone do pracy na gazie' },
        {
          type: 'p',
          content: [
            'Odpowiedzią jest zastosowanie gniazd z materiału odpornego na wysoką temperaturę i tarcie. W naszej ofercie produkujemy gniazda zaworowe w trzech wersjach dobranych do warunków pracy:',
          ],
        },
        {
          type: 'ol',
          items: [
            ['Do silników benzynowych — żeliwo odporne na wysokie temperatury.'],
            ['Do silników benzynowo-gazowych — żeliwo opracowane do cięższych warunków pracy (LPG/CNG).'],
            ['Do silników wysokoprężnych — żeliwo do szczególnie trudnych warunków.'],
          ],
        },
        {
          type: 'quote',
          text: 'Przy aucie z LPG warto wybrać gniazda przeznaczone do pracy na gazie już przy pierwszej naprawie głowicy — to tańsze niż druga naprawa.',
        },
        {
          type: 'cta',
          text: 'Potrzebujesz gniazd zaworowych do silnika na gaz?',
          href: '/pl/kontakt/',
          label: 'Zapytaj o dobór',
        },
      ],
      faq: [
        {
          q: 'Czy każde auto z LPG wymaga specjalnych gniazd?',
          a: 'Nie zawsze — część nowoczesnych głowic jest fabrycznie przystosowana do gazu. Przy starszych konstrukcjach i intensywnej eksploatacji gniazda do pracy na gazie znacząco wydłużają żywotność.',
        },
        {
          q: 'Czy adapter / „flashlube" zastępuje twardsze gniazda?',
          a: 'Dodatki smarujące zawory zmniejszają zużycie, ale nie zmieniają materiału gniazda. Przy mocno obciążonych silnikach najpewniejszym rozwiązaniem są gniazda przeznaczone do gazu.',
        },
        {
          q: 'Produkujecie gniazda na konkretny model silnika?',
          a: 'Tak — realizujemy zamówienia indywidualne według specyfikacji klienta dla wszystkich typów silników.',
        },
      ],
    },
    en: {
      title: 'Valve Seats for LPG Engines — Why Standard Ones Are Not Enough',
      description:
        'An LPG conversion changes how valves work. We explain why a gas engine needs harder valve seats and how to avoid valve seat recession (burning).',
      excerpt:
        'After an LPG conversion valves run hotter and without the "lubrication" of petrol. See why seats designed for gas are needed.',
      keywords: [
        'valve seats for LPG',
        'valve seats gas engine',
        'burnt valve seats',
        'valve seat recession LPG',
        'petrol gas valve seats',
      ],
      body: [
        {
          type: 'p',
          content: [
            'An LPG conversion saves on fuel, but it also changes the operating conditions of the most heavily loaded parts of the head — the valves and their seats. Many drivers only find out when compression drops. As a ',
            { text: 'valve seat manufacturer', href: '/en/products/' },
            ', we explain the problem.',
          ],
        },
        { type: 'h2', text: 'Why gas is harder on valves' },
        {
          type: 'p',
          content: [
            'Gas burns at a higher temperature, and gaseous fuel does not form the thin protective film on the valve that petrol provides. As a result, the valve seat runs hotter and more "dry", so it wears faster and, in extreme cases, burns away (recession).',
          ],
        },
        { type: 'h2', text: 'Symptoms of burnt seats' },
        {
          type: 'ul',
          items: [
            ['A drop in compression on one or more cylinders.'],
            ['Rough running and a shaky idle.'],
            ['Power loss and higher fuel consumption.'],
            ['Harder starting.'],
          ],
        },
        { type: 'h2', text: 'The solution — seats designed to run on gas' },
        {
          type: 'p',
          content: [
            'The answer is to use seats made of a material resistant to high temperature and friction. We produce valve seats in three versions matched to operating conditions:',
          ],
        },
        {
          type: 'ol',
          items: [
            ['For petrol engines — heat-resistant cast iron.'],
            ['For petrol-gas engines — cast iron developed for more demanding conditions (LPG/CNG).'],
            ['For diesel engines — cast iron for particularly tough conditions.'],
          ],
        },
        {
          type: 'quote',
          text: 'With an LPG car it pays to choose seats designed for gas at the first head repair — it is cheaper than a second repair.',
        },
        {
          type: 'cta',
          text: 'Need valve seats for a gas engine?',
          href: '/en/contact/',
          label: 'Ask about selection',
        },
      ],
      faq: [
        {
          q: 'Does every LPG car need special seats?',
          a: 'Not always — some modern heads are factory-prepared for gas. On older designs and with intensive use, seats designed for gas significantly extend service life.',
        },
        {
          q: 'Does a lube additive ("flashlube") replace harder seats?',
          a: 'Valve-lubricating additives reduce wear but do not change the seat material. On heavily loaded engines, seats designed for gas are the most reliable solution.',
        },
        {
          q: 'Do you make seats for a specific engine model?',
          a: 'Yes — we fulfill individual orders to customer specification for all types of engines.',
        },
      ],
    },
  },

  {
    id: 'regeneracja-czy-wymiana',
    date: '2026-05-25',
    cover: '/photo/tuleja mokra 2.png',
    slug: {
      pl: 'regeneracja-czy-wymiana-cylindra',
      en: 'cylinder-regeneration-vs-replacement',
    },
    category: { pl: 'Poradnik', en: 'Guide' },
    pl: {
      title: 'Regeneracja czy wymiana cylindra — co się bardziej opłaca',
      description:
        'Kiedy opłaca się regeneracja cylindra, a kiedy konieczna jest wymiana tulei? Porównujemy koszty, trwałość i ryzyko, by pomóc Ci podjąć decyzję.',
      excerpt:
        'Regeneracja bywa tańsza, ale nie zawsze możliwa. Porównujemy oba rozwiązania pod kątem kosztu, trwałości i ryzyka.',
      keywords: [
        'regeneracja cylindra',
        'wymiana tulei cylindrowej',
        'regeneracja czy wymiana',
        'naprawa cylindra koszt',
        'szlifowanie cylindra na nadwymiar',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Gdy diagnostyka potwierdzi zużycie cylindra, pojawia się pytanie: regenerować czy wymieniać? Nie ma jednej odpowiedzi — decyduje stan materiału, rodzaj silnika i rachunek kosztów. Pomożemy Ci to rozważyć; obie usługi znajdziesz w sekcji ',
            { text: 'Usługi', href: '/pl/uslugi/' },
            '.',
          ],
        },
        { type: 'h2', text: 'Kiedy wystarczy regeneracja' },
        {
          type: 'p',
          content: [
            'Regeneracja (szlifowanie na nadwymiar i ',
            { text: 'honowanie', href: '/pl/blog/honowanie-tulei-cylindrowych/' },
            ') ma sens, gdy zużycie jest umiarkowane, a w bloku jest jeszcze zapas materiału na kolejny nadwymiar. To zwykle tańsze i szybsze rozwiązanie.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Niewielka owalizacja i stożkowość mieszczące się w tolerancjach.'],
            ['Brak pęknięć, głębokich rys i ognisk korozji.'],
            ['Dostępny tłok w odpowiednim nadwymiarze.'],
          ],
        },
        { type: 'h2', text: 'Kiedy konieczna jest wymiana' },
        {
          type: 'ul',
          items: [
            ['Przekroczony maksymalny nadwymiar — nie ma już materiału do zebrania.'],
            ['Pęknięcia, zatarcia lub głębokie zadziory ściany.'],
            [
              'Silnik z tulejami wymiennymi — często prościej i pewniej zamontować ',
              { text: 'nową tuleję suchą lub mokrą', href: '/pl/produkty/' },
              '.',
            ],
          ],
        },
        { type: 'h2', text: 'Koszt i trwałość — jak to porównać' },
        {
          type: 'ol',
          items: [
            ['Zacznij od rzetelnego pomiaru — bez niego każda wycena to zgadywanie.'],
            ['Policz koszt całościowy: robocizna, tłoki/pierścienie w nadwymiarze, uszczelnienia.'],
            ['Uwzględnij trwałość — dobrze dobrana nowa tuleja przywraca parametry zbliżone do fabrycznych.'],
          ],
        },
        {
          type: 'quote',
          text: 'Najdroższa jest naprawa wykonana dwa razy. Czasem wymiana tulei to po prostu pewniejsza inwestycja.',
        },
        {
          type: 'cta',
          text: 'Nie wiesz, czy regenerować, czy wymienić?',
          href: '/pl/kontakt/',
          label: 'Skonsultuj z nami',
        },
      ],
      faq: [
        {
          q: 'Ile razy można regenerować cylinder?',
          a: 'Tyle, na ile pozwala zapas materiału i dostępne nadwymiary tłoków — zwykle kilka razy. Po wyczerpaniu nadwymiarów rozwiązaniem jest tuleja.',
        },
        {
          q: 'Czy regenerowany cylinder jest gorszy od nowego?',
          a: 'Prawidłowo wykonana regeneracja przywraca właściwą geometrię i gładź. Kluczowe są dokładny pomiar, szlifowanie i honowanie wykończeniowe.',
        },
        {
          q: 'Czy wymianę tulei robi się w każdym silniku?',
          a: 'Nie — dotyczy konstrukcji z tulejami wymiennymi (suchymi lub mokrymi). W blokach bez tulei stosuje się szlifowanie na nadwymiar.',
        },
      ],
    },
    en: {
      title: 'Cylinder Regeneration vs Replacement — Which Pays Off',
      description:
        'When is cylinder regeneration worth it and when is a liner replacement necessary? We compare cost, durability and risk to help you decide.',
      excerpt:
        'Regeneration can be cheaper, but it is not always possible. We compare both options in terms of cost, durability and risk.',
      keywords: [
        'cylinder regeneration',
        'cylinder liner replacement',
        'regeneration vs replacement',
        'cylinder repair cost',
        'cylinder oversize grinding',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Once diagnostics confirm cylinder wear, the question arises: regenerate or replace? There is no single answer — it depends on the condition of the material, the engine type and the cost calculation. We will help you weigh it up; both services are in our ',
            { text: 'Services', href: '/en/services/' },
            ' section.',
          ],
        },
        { type: 'h2', text: 'When regeneration is enough' },
        {
          type: 'p',
          content: [
            'Regeneration (grinding to an oversize and ',
            { text: 'honing', href: '/en/blog/cylinder-liner-honing-explained/' },
            ') makes sense when wear is moderate and there is still material left in the block for the next oversize. It is usually the cheaper and faster option.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Minor ovality and taper within tolerances.'],
            ['No cracks, deep scoring or corrosion pitting.'],
            ['A piston available in the right oversize.'],
          ],
        },
        { type: 'h2', text: 'When replacement is necessary' },
        {
          type: 'ul',
          items: [
            ['The maximum oversize has been reached — there is no material left to remove.'],
            ['Cracks, seizure or deep wall scoring.'],
            [
              'An engine with replaceable liners — often it is simpler and safer to fit a ',
              { text: 'new dry or wet liner', href: '/en/products/' },
              '.',
            ],
          ],
        },
        { type: 'h2', text: 'Cost and durability — how to compare' },
        {
          type: 'ol',
          items: [
            ['Start with accurate measurement — without it, every quote is guesswork.'],
            ['Count the total cost: labour, oversize pistons/rings, seals.'],
            ['Factor in durability — a well-matched new liner restores parameters close to factory spec.'],
          ],
        },
        {
          type: 'quote',
          text: 'The most expensive repair is the one done twice. Sometimes replacing the liner is simply the safer investment.',
        },
        {
          type: 'cta',
          text: 'Not sure whether to regenerate or replace?',
          href: '/en/contact/',
          label: 'Talk to us',
        },
      ],
      faq: [
        {
          q: 'How many times can a cylinder be regenerated?',
          a: 'As many times as the material reserve and available piston oversizes allow — usually a few. Once oversizes are exhausted, a liner is the solution.',
        },
        {
          q: 'Is a regenerated cylinder worse than a new one?',
          a: 'A properly done regeneration restores correct geometry and finish. Accurate measurement, grinding and finish honing are key.',
        },
        {
          q: 'Is liner replacement done on every engine?',
          a: 'No — it applies to designs with replaceable liners (dry or wet). Blocks without liners are ground to an oversize.',
        },
      ],
    },
  },

  {
    id: 'honowanie-tulei',
    date: '2026-06-02',
    cover: '/photo/Tuleja sucha2.png',
    slug: {
      pl: 'honowanie-tulei-cylindrowych',
      en: 'cylinder-liner-honing-explained',
    },
    category: { pl: 'Technologia', en: 'Technology' },
    pl: {
      title: 'Honowanie tulei cylindrowych — na czym polega i kiedy je wykonać',
      description:
        'Czym jest honowanie tulei cylindrowych, jak wpływa na pracę silnika i kiedy warto je wykonać. Wyjaśniamy krzyżowy ślad honu, chropowatość i typowe błędy.',
      excerpt:
        'Honowanie nadaje powierzchni tulei właściwą gładkość i geometrię. Tłumaczymy, czym jest krzyżowy ślad honu i dlaczego decyduje o trwałości silnika.',
      keywords: [
        'honowanie tulei cylindrowych',
        'honowanie cylindra',
        'krzyżowy ślad honu',
        'chropowatość tulei',
        'gładź cylindra',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Honowanie to obróbka wykończeniowa, która nadaje wewnętrznej powierzchni tulei cylindrowej dokładną geometrię i kontrolowaną chropowatość. To właśnie ten ostatni etap decyduje o tym, jak ułoży się film olejowy, jak szybko dotrą się pierścienie tłokowe i ile realnie przepracuje silnik. W GREGORIUS honowanie jest stałym elementem ',
            { text: 'naszych usług warsztatowych', href: '/pl/uslugi/' },
            '.',
          ],
        },
        { type: 'h2', text: 'Czym jest honowanie i czym różni się od szlifowania' },
        {
          type: 'p',
          content: [
            'Szlifowanie usuwa większy naddatek materiału i ustala wymiar, natomiast honowanie pracuje na poziomie mikrometrów — koryguje błędy kształtu (owalizację, stożkowość) i tworzy charakterystyczną strukturę powierzchni. Narzędziem są listwy ścierne (osełki) wykonujące jednocześnie ruch obrotowy i posuwisto-zwrotny.',
          ],
        },
        { type: 'h2', text: 'Krzyżowy ślad honu i dlaczego ma znaczenie' },
        {
          type: 'p',
          content: [
            'Połączenie obu ruchów tworzy na ściance siatkę skrzyżowanych rys — tzw. krzyżowy ślad honu. Te mikrorowki pełnią dwie funkcje: zatrzymują olej, zapewniając smarowanie pierścieni, oraz odprowadzają jego nadmiar. Kąt honowania dobiera się do zastosowania:',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Kąt ok. 45° — uniwersalny kompromis między smarowaniem a kontrolą zużycia oleju.'],
            ['Mniejszy kąt — lepsza kontrola zużycia oleju, stosowany w niektórych silnikach wysokoprężnych.'],
            ['Większy kąt — intensywniejsze smarowanie, szybsze docieranie pierścieni.'],
          ],
        },
        { type: 'h2', text: 'Kiedy wykonać honowanie' },
        {
          type: 'ol',
          items: [
            ['Po szlifowaniu tulei lub bloku na nadwymiar — honowanie jest obowiązkowym etapem wykończenia.'],
            ['Przy montażu nowych pierścieni — świeża gładź zapewnia ich prawidłowe docieranie.'],
            ['Przy regeneracji cylindra, gdy powierzchnia jest wygładzona („wypolerowana") i utraciła zdolność utrzymywania oleju.'],
          ],
        },
        {
          type: 'quote',
          text: 'Zbyt gładka ścianka jest równie szkodliwa jak zbyt chropowata — w obu przypadkach silnik zacznie zużywać olej.',
        },
        { type: 'h2', text: 'Najczęstsze błędy' },
        {
          type: 'p',
          content: [
            'Najczęstsze problemy to nieodpowiednia chropowatość, zatarte (zawinięte) wierzchołki struktury po zbyt agresywnej obróbce oraz brak dokładnego mycia po honowaniu, przez co w rowkach pozostaje ścierniwo. Dlatego honowanie warto powierzyć warsztatowi z doświadczeniem i właściwym parkiem maszynowym — opisaliśmy go w sekcji ',
            { text: 'Technologia', href: '/pl/technologia/' },
            '.',
          ],
        },
        {
          type: 'cta',
          text: 'Potrzebujesz honowania tulei lub regeneracji cylindra?',
          href: '/pl/kontakt/',
          label: 'Zapytaj o usługę',
        },
      ],
      faq: [
        {
          q: 'Czy honowanie zwiększa średnicę cylindra?',
          a: 'Minimalnie — honowanie usuwa naddatek rzędu mikrometrów. Większą zmianę wymiaru uzyskuje się szlifowaniem na nadwymiar, po którym następuje honowanie wykończeniowe.',
        },
        {
          q: 'Po czym poznać, że cylinder wymaga honowania?',
          a: 'Typowe sygnały to zwiększone zużycie oleju, spadek kompresji oraz gładka, „wypolerowana" ścianka bez widocznego śladu honu.',
        },
        {
          q: 'Czy honować trzeba przy każdej wymianie pierścieni?',
          a: 'Zwykle tak — świeża struktura powierzchni jest niezbędna do prawidłowego dotarcia nowych pierścieni i szczelności komory spalania.',
        },
      ],
    },
    en: {
      title: 'Cylinder Liner Honing — What It Is and When You Need It',
      description:
        'What cylinder liner honing is, how it affects engine operation and when it should be done. We explain the cross-hatch pattern, surface roughness and common mistakes.',
      excerpt:
        'Honing gives the liner surface the right roughness and geometry. We explain the cross-hatch pattern and why it determines engine durability.',
      keywords: [
        'cylinder liner honing',
        'cylinder honing',
        'cross-hatch pattern',
        'liner surface roughness',
        'cylinder bore finish',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Honing is a finishing operation that gives the inner surface of a cylinder liner precise geometry and controlled roughness. This final stage decides how the oil film forms, how quickly the piston rings bed in and how long the engine actually lasts. At GREGORIUS, honing is a standard part of ',
            { text: 'our workshop services', href: '/en/services/' },
            '.',
          ],
        },
        { type: 'h2', text: 'What honing is and how it differs from grinding' },
        {
          type: 'p',
          content: [
            'Grinding removes a larger material allowance and sets the dimension, while honing works at the micron level — it corrects form errors (ovality, taper) and creates the characteristic surface structure. The tool is a set of abrasive stones that rotate and reciprocate at the same time.',
          ],
        },
        { type: 'h2', text: 'The cross-hatch pattern and why it matters' },
        {
          type: 'p',
          content: [
            'Combining both movements creates a mesh of crossing lines on the wall — the cross-hatch pattern. These micro-grooves do two jobs: they hold oil to lubricate the rings and they drain away the excess. The honing angle is matched to the application:',
          ],
        },
        {
          type: 'ul',
          items: [
            ['About 45° — a universal compromise between lubrication and oil-consumption control.'],
            ['A smaller angle — better oil-consumption control, used in some diesel engines.'],
            ['A larger angle — more intensive lubrication and faster ring bedding-in.'],
          ],
        },
        { type: 'h2', text: 'When to hone' },
        {
          type: 'ol',
          items: [
            ['After grinding the liner or block to an oversize — honing is a mandatory finishing step.'],
            ['When fitting new rings — a fresh finish lets them bed in correctly.'],
            ['During cylinder regeneration, when the surface is glazed ("polished") and can no longer hold oil.'],
          ],
        },
        {
          type: 'quote',
          text: 'A wall that is too smooth is just as harmful as one that is too rough — in both cases the engine starts to burn oil.',
        },
        { type: 'h2', text: 'Most common mistakes' },
        {
          type: 'p',
          content: [
            'The most common issues are incorrect roughness, folded peaks of the surface structure after overly aggressive machining, and inadequate cleaning afterwards, which leaves abrasive grit in the grooves. That is why honing is best left to a workshop with experience and the right machinery — described in our ',
            { text: 'Technology', href: '/en/technology/' },
            ' section.',
          ],
        },
        {
          type: 'cta',
          text: 'Need liner honing or cylinder regeneration?',
          href: '/en/contact/',
          label: 'Ask about the service',
        },
      ],
      faq: [
        {
          q: 'Does honing increase the cylinder diameter?',
          a: 'Only minimally — honing removes a few microns of material. A larger dimensional change is achieved by grinding to an oversize, followed by finish honing.',
        },
        {
          q: 'How do I know a cylinder needs honing?',
          a: 'Typical signs are increased oil consumption, a drop in compression and a smooth, "polished" wall with no visible honing marks.',
        },
        {
          q: 'Do I have to hone every time I change the rings?',
          a: 'Usually yes — a fresh surface structure is essential for new rings to bed in properly and for a tight combustion chamber.',
        },
      ],
    },
  },

  {
    id: 'objawy-zuzycia-tulei',
    date: '2026-05-12',
    cover: '/photo/Tuleja mokra 3.png',
    slug: {
      pl: 'objawy-zuzytych-tulei-cylindrowych',
      en: 'symptoms-of-worn-cylinder-liners',
    },
    category: { pl: 'Diagnostyka', en: 'Diagnostics' },
    pl: {
      title: 'Objawy zużytych tulei cylindrowych — jak je rozpoznać',
      description:
        'Zwiększone zużycie oleju, spadek mocy, niebieski dym i stuki na zimno. Poznaj objawy zużytych tulei cylindrowych i dowiedz się, kiedy regeneracja, a kiedy wymiana.',
      excerpt:
        'Niebieski dym, ubywający olej i spadek kompresji to klasyczne sygnały zużycia tulei. Sprawdź, jak je rozpoznać i co zrobić dalej.',
      keywords: [
        'objawy zużytych tulei cylindrowych',
        'zużycie tulei cylindrowej',
        'silnik bierze olej',
        'spadek kompresji',
        'niebieski dym z wydechu',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Tuleja cylindrowa pracuje w skrajnie trudnych warunkach — wysokiej temperaturze, ciśnieniu i tarciu. Z czasem jej powierzchnia się zużywa, co przekłada się na spadek osiągów i rosnące zużycie oleju. Im wcześniej rozpoznasz objawy, tym większa szansa, że wystarczy regeneracja zamiast kosztownej naprawy.',
          ],
        },
        { type: 'h2', text: 'Najczęstsze objawy zużycia' },
        {
          type: 'ul',
          items: [
            ['Zwiększone zużycie oleju — silnik „bierze" olej między przeglądami bez widocznych wycieków.'],
            ['Niebieskawy dym z wydechu, zwłaszcza przy rozruchu i przyspieszaniu.'],
            ['Spadek kompresji i mocy oraz trudniejszy rozruch na zimno.'],
            ['Stuki i większy hałas pracy na zimnym silniku (efekt luzu tłok–tuleja).'],
            ['Rosnące ciśnienie w skrzyni korbowej (przedmuchy spalin).'],
          ],
        },
        { type: 'h2', text: 'Skąd bierze się zużycie' },
        {
          type: 'p',
          content: [
            'Przyczyną bywa naturalne, długotrwałe tarcie, ale proces przyspieszają: praca na zimnym oleju, zanieczyszczone powietrze (uszkodzony filtr), przegrzanie silnika oraz zbyt gładka, wypolerowana ścianka, która utraciła ',
            { text: 'krzyżowy ślad honu', href: '/pl/blog/honowanie-tulei-cylindrowych/' },
            '.',
          ],
        },
        { type: 'h2', text: 'Regeneracja czy wymiana?' },
        {
          type: 'p',
          content: [
            'Decyzja zależy od stopnia i rodzaju zużycia. Przy niewielkiej owalizacji i zadrapaniach często wystarczy obróbka i honowanie. Przy głębokich rysach, pęknięciach lub przekroczeniu maksymalnego nadwymiaru konieczna jest nowa tuleja.',
          ],
        },
        {
          type: 'ol',
          items: [
            [
              'Diagnostyka — pomiar średnicy, owalizacji i stożkowości oraz test kompresji.',
            ],
            [
              { text: 'Regeneracja lub honowanie', href: '/pl/uslugi/' },
              ' — gdy materiał i geometria na to pozwalają.',
            ],
            [
              'Wymiana na nową tuleję — gdy zużycie przekracza granicę naprawy; dobierzemy ',
              { text: 'tuleję suchą lub mokrą', href: '/pl/produkty/' },
              ' do Twojego silnika.',
            ],
          ],
        },
        {
          type: 'cta',
          text: 'Nie masz pewności, czy tuleja kwalifikuje się do regeneracji?',
          href: '/pl/kontakt/',
          label: 'Skonsultuj z nami',
        },
      ],
      faq: [
        {
          q: 'Czy zużyte tuleje zawsze trzeba wymieniać?',
          a: 'Nie. Przy niewielkim zużyciu często wystarcza regeneracja i honowanie. Wymiana jest konieczna dopiero przy głębokich uszkodzeniach lub przekroczeniu maksymalnego nadwymiaru.',
        },
        {
          q: 'Czy duże zużycie oleju zawsze oznacza zużyte tuleje?',
          a: 'Niekoniecznie — przyczyną mogą być też pierścienie, prowadnice i uszczelniacze zaworów lub turbosprężarka. Dlatego ważna jest rzetelna diagnostyka przed naprawą.',
        },
        {
          q: 'Jak długo wytrzymują tuleje cylindrowe?',
          a: 'Przy prawidłowej eksploatacji i regularnej wymianie oleju liczone są w setkach tysięcy kilometrów. Żywotność skraca przegrzewanie i zanieczyszczone powietrze.',
        },
      ],
    },
    en: {
      title: 'Symptoms of Worn Cylinder Liners — How to Spot Them',
      description:
        'Increased oil consumption, power loss, blue smoke and cold knocking. Learn the symptoms of worn cylinder liners and when to choose regeneration over replacement.',
      excerpt:
        'Blue smoke, disappearing oil and a drop in compression are classic signs of liner wear. See how to recognize them and what to do next.',
      keywords: [
        'symptoms of worn cylinder liners',
        'cylinder liner wear',
        'engine burning oil',
        'compression loss',
        'blue exhaust smoke',
      ],
      body: [
        {
          type: 'p',
          content: [
            'A cylinder liner works in extreme conditions — high temperature, pressure and friction. Over time its surface wears, which shows up as lower performance and rising oil consumption. The earlier you spot the symptoms, the better the chance that regeneration will be enough instead of a costly repair.',
          ],
        },
        { type: 'h2', text: 'The most common symptoms of wear' },
        {
          type: 'ul',
          items: [
            ['Increased oil consumption — the engine "uses" oil between services with no visible leaks.'],
            ['Bluish exhaust smoke, especially on start-up and acceleration.'],
            ['A drop in compression and power, and harder cold starts.'],
            ['Knocking and louder operation on a cold engine (piston-to-liner clearance).'],
            ['Rising crankcase pressure (combustion blow-by).'],
          ],
        },
        { type: 'h2', text: 'Where wear comes from' },
        {
          type: 'p',
          content: [
            'The cause is often natural, long-term friction, but the process is accelerated by: running on cold oil, contaminated air (a damaged filter), engine overheating and a too-smooth, polished wall that has lost its ',
            { text: 'cross-hatch honing pattern', href: '/en/blog/cylinder-liner-honing-explained/' },
            '.',
          ],
        },
        { type: 'h2', text: 'Regeneration or replacement?' },
        {
          type: 'p',
          content: [
            'The decision depends on the degree and type of wear. With minor ovality and scratches, machining and honing are often enough. With deep scoring, cracks or an exceeded maximum oversize, a new liner is required.',
          ],
        },
        {
          type: 'ol',
          items: [
            ['Diagnostics — measuring diameter, ovality and taper, plus a compression test.'],
            [
              { text: 'Regeneration or honing', href: '/en/services/' },
              ' — when the material and geometry allow it.',
            ],
            [
              'Replacement with a new liner — when wear exceeds the repair limit; we will match a ',
              { text: 'dry or wet liner', href: '/en/products/' },
              ' to your engine.',
            ],
          ],
        },
        {
          type: 'cta',
          text: 'Not sure whether your liner qualifies for regeneration?',
          href: '/en/contact/',
          label: 'Talk to us',
        },
      ],
      faq: [
        {
          q: 'Do worn liners always have to be replaced?',
          a: 'No. With minor wear, regeneration and honing are often enough. Replacement is only required for deep damage or when the maximum oversize has been exceeded.',
        },
        {
          q: 'Does high oil consumption always mean worn liners?',
          a: 'Not necessarily — the cause may also be the rings, valve guides and seals, or the turbocharger. That is why reliable diagnostics matter before any repair.',
        },
        {
          q: 'How long do cylinder liners last?',
          a: 'With correct operation and regular oil changes, they last hundreds of thousands of kilometres. Overheating and contaminated air shorten their life.',
        },
      ],
    },
  },

  {
    id: 'tuleje-suche-mokre',
    date: '2026-04-08',
    cover: '/photo/tuleja sucha.png',
    slug: {
      pl: 'tuleje-suche-czy-mokre',
      en: 'dry-vs-wet-cylinder-liners',
    },
    category: { pl: 'Poradnik', en: 'Guide' },
    pl: {
      title: 'Tuleje suche czy mokre — różnice i jak wybrać',
      description:
        'Czym różnią się tuleje suche od mokrych, jak działają i którą wybrać do swojego silnika. Praktyczny przewodnik producenta tulei cylindrowych GREGORIUS.',
      excerpt:
        'Tuleja sucha czy mokra? Wyjaśniamy różnice w budowie, chłodzeniu i montażu oraz podpowiadamy, jak dobrać właściwą do silnika.',
      keywords: [
        'tuleje suche czy mokre',
        'tuleja sucha',
        'tuleja mokra',
        'różnica tuleja sucha mokra',
        'tuleja cylindrowa',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Wybór między tuleją suchą a mokrą to jedno z pierwszych pytań przy naprawie lub doborze części. Obie pełnią tę samą rolę — tworzą gładź roboczą dla tłoka — ale różnią się budową, sposobem chłodzenia i montażem. Jako ',
            { text: 'producent tulei cylindrowych', href: '/pl/produkty/' },
            ' wyjaśniamy różnice w praktyce.',
          ],
        },
        { type: 'h2', text: 'Tuleja sucha' },
        {
          type: 'p',
          content: [
            'Tuleja sucha jest cienkościenna i wciskana w istniejący otwór bloku. Nie ma kontaktu z cieczą chłodzącą — ciepło odbiera przez ściankę bloku. Stosuje się ją m.in. do regeneracji bloków, w których pierwotna gładź uległa zużyciu.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Cienka ścianka, montaż przez wciskanie.'],
            ['Chłodzenie pośrednie — przez materiał bloku.'],
            ['Idealna do naprawy i przywracania nominalnego wymiaru.'],
          ],
        },
        { type: 'h2', text: 'Tuleja mokra' },
        {
          type: 'p',
          content: [
            'Tuleja mokra jest grubościenna i bezpośrednio omywana cieczą chłodzącą — jej zewnętrzna powierzchnia stanowi ściankę kanału chłodzenia. Zapewnia bardzo skuteczny odbiór ciepła i jest typowa dla wielu silników wysokoprężnych oraz maszyn pracujących pod dużym obciążeniem.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Gruba ścianka, uszczelnienie o-ringami u podstawy.'],
            ['Chłodzenie bezpośrednie — najlepszy odbiór ciepła.'],
            ['Łatwiejsza wymiana bez obróbki bloku w wielu konstrukcjach.'],
          ],
        },
        { type: 'h2', text: 'Jak wybrać właściwą tuleję' },
        {
          type: 'ol',
          items: [
            ['Sprawdź konstrukcję silnika — to ona przesądza, czy potrzebujesz tulei suchej, czy mokrej.'],
            ['Ustal wymiary: średnicę wewnętrzną, długość, kołnierz i ewentualny nadwymiar.'],
            ['Dobierz materiał do warunków pracy (np. obciążenie cieplne w silnikach diesla).'],
            [
              'W razie wątpliwości ',
              { text: 'skontaktuj się z nami', href: '/pl/kontakt/' },
              ' — realizujemy także zamówienia indywidualne.',
            ],
          ],
        },
        {
          type: 'quote',
          text: 'Nie da się „przerobić" silnika z tulei suchej na mokrą według uznania — typ tulei wynika z konstrukcji bloku.',
        },
        {
          type: 'cta',
          text: 'Potrzebujesz tulei suchej lub mokrej do konkretnego silnika?',
          href: '/pl/kontakt/',
          label: 'Zapytaj o dobór',
        },
      ],
      faq: [
        {
          q: 'Która tuleja lepiej odprowadza ciepło?',
          a: 'Tuleja mokra — jest bezpośrednio omywana cieczą chłodzącą, dlatego sprawdza się w silnikach mocno obciążonych cieplnie.',
        },
        {
          q: 'Czy mogę zamiennie stosować tuleję suchą i mokrą?',
          a: 'Nie. Typ tulei wynika z konstrukcji bloku — bloki pod tuleje mokre mają kanały chłodzenia i gniazda uszczelnień, których nie ma w blokach pod tuleje suche.',
        },
        {
          q: 'Do jakiej średnicy produkujecie tuleje?',
          a: 'Produkujemy tuleje suche i mokre o średnicach wewnętrznych do 240 mm, również na zamówienie według specyfikacji klienta.',
        },
      ],
    },
    en: {
      title: 'Dry vs Wet Cylinder Liners — Differences and How to Choose',
      description:
        'How dry and wet cylinder liners differ, how they work and which to choose for your engine. A practical guide from cylinder liner manufacturer GREGORIUS.',
      excerpt:
        'Dry or wet liner? We explain the differences in design, cooling and fitting, and help you choose the right one for your engine.',
      keywords: [
        'dry vs wet cylinder liners',
        'dry liner',
        'wet liner',
        'dry wet liner difference',
        'cylinder liner',
      ],
      body: [
        {
          type: 'p',
          content: [
            'Choosing between a dry and a wet liner is one of the first questions in any repair or part selection. Both do the same job — they provide the running surface for the piston — but they differ in design, cooling and fitting. As a ',
            { text: 'cylinder liner manufacturer', href: '/en/products/' },
            ', we explain the differences in practice.',
          ],
        },
        { type: 'h2', text: 'Dry liner' },
        {
          type: 'p',
          content: [
            'A dry liner is thin-walled and pressed into an existing bore in the block. It has no contact with coolant — heat is removed through the block wall. It is used, among other things, to recondition blocks whose original bore has worn out.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Thin wall, press-fit installation.'],
            ['Indirect cooling — through the block material.'],
            ['Ideal for repair and restoring the nominal dimension.'],
          ],
        },
        { type: 'h2', text: 'Wet liner' },
        {
          type: 'p',
          content: [
            'A wet liner is thick-walled and washed directly by coolant — its outer surface forms the wall of the cooling jacket. It provides very effective heat removal and is typical of many diesel engines and machines working under heavy load.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Thick wall, sealed with O-rings at the base.'],
            ['Direct cooling — the best heat removal.'],
            ['Easier replacement without machining the block in many designs.'],
          ],
        },
        { type: 'h2', text: 'How to choose the right liner' },
        {
          type: 'ol',
          items: [
            ['Check the engine design — it determines whether you need a dry or a wet liner.'],
            ['Establish the dimensions: internal diameter, length, flange and any oversize.'],
            ['Match the material to the operating conditions (e.g. thermal load in diesel engines).'],
            [
              'If in doubt, ',
              { text: 'contact us', href: '/en/contact/' },
              ' — we also fulfill individual orders.',
            ],
          ],
        },
        {
          type: 'quote',
          text: 'You cannot freely convert an engine from dry to wet liners — the liner type follows from the block design.',
        },
        {
          type: 'cta',
          text: 'Need a dry or wet liner for a specific engine?',
          href: '/en/contact/',
          label: 'Ask about selection',
        },
      ],
      faq: [
        {
          q: 'Which liner removes heat better?',
          a: 'The wet liner — it is washed directly by coolant, so it performs well in engines under heavy thermal load.',
        },
        {
          q: 'Can I use dry and wet liners interchangeably?',
          a: 'No. The liner type follows from the block design — blocks for wet liners have cooling jackets and seal seats that blocks for dry liners do not.',
        },
        {
          q: 'Up to what diameter do you produce liners?',
          a: 'We produce dry and wet liners with internal diameters up to 240 mm, also to order according to customer specification.',
        },
      ],
    },
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getLocalized(post: BlogPost, locale: Locale): LocalizedPost {
  return post[locale]
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug[locale] === slug)
}

export function getAllSlugParams(): { locale: Locale; slug: string }[] {
  return posts.flatMap((p) => locales.map((locale) => ({ locale, slug: p.slug[locale] })))
}

/** Related posts — prefers the same category, fills up with the newest others. */
export function getRelatedPosts(currentId: string, limit = 2): BlogPost[] {
  const current = posts.find((p) => p.id === currentId)
  const others = getAllPosts().filter((p) => p.id !== currentId)
  if (!current) return others.slice(0, limit)
  const sameCategory = others.filter((p) => p.category.pl === current.category.pl)
  const rest = others.filter((p) => p.category.pl !== current.category.pl)
  return [...sameCategory, ...rest].slice(0, limit)
}

function inlineToText(content: Inline[]): string {
  return content.map((c) => (typeof c === 'string' ? c : c.text)).join('')
}

export function getReadingTime(body: Block[]): number {
  let words = 0
  for (const block of body) {
    if (block.type === 'p') words += inlineToText(block.content).split(/\s+/).length
    else if (block.type === 'h2' || block.type === 'h3' || block.type === 'quote')
      words += block.text.split(/\s+/).length
    else if (block.type === 'ul' || block.type === 'ol')
      words += block.items.reduce((sum, item) => sum + inlineToText(item).split(/\s+/).length, 0)
  }
  return Math.max(1, Math.round(words / 200))
}

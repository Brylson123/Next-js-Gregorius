export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 mt-12 rounded-2xl py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-center sm:text-left">
          <span className="font-bold text-white tracking-wide">GREGORIUS</span>
          <span className="mx-2 text-slate-600">·</span>
          <span>os. Na Wzgórzach 22, 31-723 Kraków</span>
          <div className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-slate-400">
            <a href="tel:+48501271070" className="hover:text-white transition-colors">501 271 070</a>
            <a href="mailto:biuro@gregorius.pl" className="hover:text-white transition-colors">biuro@gregorius.pl</a>
          </div>
        </div>
        <div className="text-slate-500 text-xs">
          &copy; {year} GREGORIUS. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}

import { useRef } from "react";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Casa ristrutturata in 60 giorni.
              <span className="block text-sky-300">O ti paghiamo noi.</span>
            </h1>
            <p className="mt-6 text-lg text-sky-100/80">
              Scritto e firmato a contratto. Preventivo bloccato, lavori finiti in 60 giorni e 1.000€ al giorno se tardiamo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/30 transition">
                Prenota ora il tuo sopralluogo gratuito
              </button>
              <a href="#video" className="text-sky-300 hover:text-white transition">
                Guarda il video
              </a>
            </div>
            <div className="mt-6 text-sm text-sky-200/70">
              Preventivo bloccato • Consegna garantita • 1.000€/giorno se in ritardo
            </div>
          </div>
          <div id="video" className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-tr from-slate-800 to-slate-700 overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/10 grid place-items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white/90">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sky-100">Video placeholder</p>
                  <p className="text-sky-200/60 text-sm">Inserisci qui il tuo video di presentazione</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}

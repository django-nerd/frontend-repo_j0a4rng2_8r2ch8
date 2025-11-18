export default function Solution() {
  const points = [
    {
      title: "Casa pronta in massimo 60 giorni",
      desc: "Tempi certi e scritti a contratto. Se tardiamo, ti paghiamo 1.000€/giorno.",
    },
    {
      title: "Preventivo bloccato",
      desc: "Il prezzo concordato alla firma è quello che paghi alla consegna.",
    },
    {
      title: "Trasparenza totale",
      desc: "Report giornalieri con foto e video dal responsabile di cantiere.",
    },
  ];

  const method = [
    "Architetto e Direttore Lavori interni",
    "Materiali scelti e ordinati prima dell'apertura",
    "Squadre interne specializzate per ogni fase",
    "Responsabile cantiere dedicato con aggiornamenti quotidiani",
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Cosa facciamo noi (e loro no)</h2>
            <p className="mt-4 text-slate-300">Loro promettono. Noi garantiamo.</p>

            <div className="mt-8 space-y-4">
              {points.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-slate-200 font-medium">Per rispettare i 60 giorni serve:</p>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc pl-5">
                {method.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
              <p className="mt-4 text-slate-400 text-sm">0 penali pagate fino ad oggi.</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white">Perché possiamo permettercelo</h3>
              <p className="mt-2 text-slate-300 text-sm">
                La nostra promessa nasce da un metodo che riduce al minimo gli imprevisti e gestisce subito quelli che possono capitare. Il cliente non li paga, né in soldi né in tempo.
              </p>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
                <li>Architetto e Direttore Lavori interni</li>
                <li>Materiali ordinati prima dell'apertura del cantiere</li>
                <li>Squadre interne specializzate e sincronizzate</li>
                <li>Responsabile cantiere dedicato: foto, video e report quotidiani</li>
              </ul>
              <p className="mt-4 text-slate-300 text-sm">
                È questa cura che ci permette di firmare un contratto con tempi certi, costi bloccati e 1.000€/giorno se tardiamo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

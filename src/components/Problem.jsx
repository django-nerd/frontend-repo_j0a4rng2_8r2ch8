export default function Problem() {
  const bullets = [
    {
      title: "Il preventivo “basso” è un’esca",
      body:
        "A lavori avviati emergono extra e costi imprevisti. E tu non puoi più tirarti indietro.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "I tempi si allungano",
      body:
        "I 3 mesi promessi diventano 6. Nel frattempo paghi mutuo e affitto insieme, e ogni giorno in più pesa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Comunicazione scarsa",
      body:
        "Aggiornamenti rari e vaghi. Messaggi senza risposta per giorni: vivi nell’incertezza.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
        </svg>
      ),
    },
    {
      title: "Scaricabarile",
      body:
        "Quando qualcosa va storto, la colpa è sempre di qualcun altro. Ma a pagare sei tu.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Problema</h2>
          <p className="mt-4 text-slate-300">
            Quante volte hai sentito “ristrutturazione senza stress”, “prezzo conveniente”, “tempi brevi”? Chiunque abbia ristrutturato sa come va a finire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {bullets.map((b, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-300 grid place-items-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{b.title}</h3>
                  <p className="text-slate-300 mt-1 text-sm">{b.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-slate-300">
          <ul className="list-disc pl-6 space-y-1">
            <li>Lavori che non finiscono mai</li>
            <li>Costi che esplodono</li>
            <li>Nessuna garanzia reale</li>
            <li>Nessuna responsabilità chiara</li>
            <li>Stress continuo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

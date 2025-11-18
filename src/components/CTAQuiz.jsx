import { useState } from "react";

export default function CTAQuiz() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    metri: "",
    stanze: "",
    livello: "",
    nome: "",
    email: "",
    telefono: "",
  });

  const questions = [
    { key: "metri", label: "Quanti metri quadri vuoi ristrutturare?", placeholder: "Es. 80" },
    { key: "stanze", label: "Quante stanze principali?", placeholder: "Es. 3" },
    { key: "livello", label: "Livello di finiture", placeholder: "Base / Standard / Premium" },
  ];

  const handleChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const estimated = () => {
    const mq = parseFloat(form.metri || 0);
    const stanze = parseInt(form.stanze || 0);
    const base = mq * 700 + stanze * 1500; // stima semplice
    const mult = form.livello.toLowerCase().includes("premium")
      ? 1.25
      : form.livello.toLowerCase().includes("base")
      ? 0.9
      : 1;
    const tot = Math.max(0, Math.round(base * mult));
    return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(tot);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, stima: estimated() }),
      });
      setStep(3);
    } catch (e) {
      setStep(3);
    }
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {step < 3 && (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Fai il quiz e scopri quanto costa
            </h2>
            <p className="mt-3 text-slate-300">
              Rispondi a poche domande: ti invieremo una stima personalizzata via email.
            </p>
          </>
        )}

        {step === 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {questions.map((q) => (
              <div key={q.key} className="p-5 rounded-xl bg-white/5 border border-white/10 text-left">
                <label className="block text-sm text-slate-300 mb-2">{q.label}</label>
                <input
                  type="text"
                  value={form[q.key]}
                  onChange={(e) => handleChange(q.key, e.target.value)}
                  placeholder={q.placeholder}
                  className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400"
                />
              </div>
            ))}
          </div>
        )}

        {step === 0 && (
          <div className="mt-6">
            <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/30 transition">
              Calcola la tua stima
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 inline-block">
            <p className="text-slate-300">La tua stima indicativa:</p>
            <div className="text-3xl font-extrabold text-white mt-2">{estimated()}</div>
            <p className="text-slate-400 text-sm mt-1">Stima non vincolante. Il prezzo finale è bloccato dopo il sopralluogo.</p>
            <div className="mt-6">
              <button onClick={() => setStep(2)} className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold">
                Continua
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-2">Nome</label>
              <input className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white" value={form.nome} onChange={(e)=>handleChange("nome", e.target.value)} required />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input type="email" className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white" value={form.email} onChange={(e)=>handleChange("email", e.target.value)} required />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-2">Telefono</label>
              <input className="w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white" value={form.telefono} onChange={(e)=>handleChange("telefono", e.target.value)} required />
            </div>
            <div className="sm:col-span-3 flex items-center justify-between mt-2">
              <button type="button" onClick={()=>setStep(1)} className="text-slate-300 hover:text-white">Indietro</button>
              <button type="submit" className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold">Ricevi la stima via email</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="mt-10 p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
            <h3 className="text-white font-semibold">Grazie! 🎉</h3>
            <p className="text-slate-200 mt-1">Abbiamo ricevuto i tuoi dati. Ti contatteremo a breve con la stima personalizzata.</p>
          </div>
        )}
      </div>
    </section>
  );
}

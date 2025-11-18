import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import CTAQuiz from "./components/CTAQuiz";

function App() {
  const handleCTA = () => {
    const el = document.getElementById("quiz");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Hero onCTAClick={handleCTA} />
      <Problem />
      <Solution />
      <div id="quiz">
        <CTAQuiz />
      </div>

      <footer className="py-10 text-center text-slate-400">
        Home360 • Tempi certi. Costi chiari. Garanzia scritta.
      </footer>
    </div>
  );
}

export default App;

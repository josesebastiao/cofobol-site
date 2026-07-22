import Header from '../components/Header';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import SliderMidia from '../components/SliderMidia';
import Regras from '../components/Regras';
import Equipamentos from '../components/Equipamentos';
import Campo from '../components/Campo';
import TabelaCompatibilidade from '../components/TabelaCompatibilidade';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-green-500 selection:text-white scroll-smooth">
      <Header />
      <Hero />
      <Historia />
      <SliderMidia />
      <section id="jogo" className="scroll-mt-20">
        <Regras />
        <Campo />
        <Equipamentos />
      </section>
      <TabelaCompatibilidade />
      <Contato />
      <Footer />
    </main>
  );
}

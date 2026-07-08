import Header from '../components/Header';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import SliderMidia from '../components/SliderMidia';
import Regras from '../components/Regras';
import TabelaCompatibilidade from '../components/TabelaCompatibilidade';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-green-500 selection:text-white scroll-smooth">
      <Header />
      <Hero />
      <Historia />
      <SliderMidia />
      <Regras />
      <TabelaCompatibilidade /> {/* <-- Tabela adicionada aqui! */}
      <Footer />
    </main>
  );
}
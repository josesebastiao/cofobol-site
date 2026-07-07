import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      
      {/* SEÇÃO HERO - O primeiro impacto */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center bg-gradient-to-b from-red-950 via-black to-black">
        <div className="absolute top-8 left-8">
          <span className="text-2xl font-black tracking-widest text-white">COFOBOL<span className="text-red-600">.</span></span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">
          BEM-VINDO AO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">COFOBOL</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold mb-6 text-slate-200">
          Um Novo Paradigma Desportivo Colectivo.
        </p>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
          Alta intensidade, invasão, pressão, fuga e adrenalina 100%. Uma modalidade que liberta serotonina e dopamina, desenvolvendo a velocidade, força bruta, resistência e agilidade dos verdadeiros atletas.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            Descubra as Regras
          </button>
          <button className="bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300">
            A Dinâmica do Jogo
          </button>
        </div>
      </section>

      <hr className="border-slate-900" />

      {/* SEÇÃO CONCEITO - O que torna o jogo único */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-wide">
          A Essência da <span className="text-red-600">Batalha</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-600/50 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Duas Bolas Simultâneas</h3>
            <p className="text-slate-400 leading-relaxed">
              Diferente de tudo o que conhece, cada equipa joga com a sua própria bola esférica macia (320g a 420g). A atenção, a retenção e o arremesso são levados ao limite.
            </p>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-600/50 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">A Chapada (O Golo)</h3>
            <p className="text-slate-400 leading-relaxed">
              Não usamos balizas convencionais. O golo, ou "Chapada", é obtido quando o jogador corre o mais rápido possível na pista, suporta a pressão e completa o circuito inteiro.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-600/50 transition duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Pontos Conquistados e Ganhos</h3>
            <p className="text-slate-400 leading-relaxed">
              Pontue suplantando o oponente pela sua capacidade física (conquistados) ou beneficiando-se das infrações cometidas pela equipa adversária (ganhos).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-900" />

      {/* SEÇÃO JOGADORES - Perfis e Papéis */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-wide">
          Perfil dos <span className="text-red-600">Guerreiros</span>
        </h2>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-3xl font-black text-white">O Kwanzaa <br/><span className="text-red-500 text-xl font-bold">(O Capitão)</span></h3>
            </div>
            <div className="md:w-2/3 md:pl-8 border-l-0 md:border-l border-slate-800">
              <p className="text-slate-400 text-lg">Identificado com uma faixa no braço esquerdo. É o líder em campo, responsável pela conduta da equipa e o representante oficial durante toda a partida de alta intensidade.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-3xl font-black text-white">O Simba <br/><span className="text-green-500 text-xl font-bold">(O Trânsito)</span></h3>
            </div>
            <div className="md:w-2/3 md:pl-8 border-l-0 md:border-l border-slate-800">
              <p className="text-slate-400 text-lg">Veste camisola de cor diferente. É o único jogador livre para mudar de lugar durante o jogo e auxiliar os colegas em plena ação, ditando o ritmo da movimentação.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-3xl font-black text-white">O Wakili <br/><span className="text-blue-500 text-xl font-bold">(O Defensor)</span></h3>
            </div>
            <div className="md:w-2/3 md:pl-8 border-l-0 md:border-l border-slate-800">
              <p className="text-slate-400 text-lg">O mestre da retenção. Indicado para deter a bola adversária, podendo brigar com até 5 oponentes enquanto o seu colega corre na pista para marcar a Chapada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BÁSICO */}
      <footer className="py-8 text-center text-slate-600 bg-slate-950 border-t border-slate-900">
        <p className="font-bold">© 2026 Cofobol. Desenvolvido para o futuro do desporto.</p>
      </footer>
      
    </main>
  );
}
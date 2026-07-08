import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 z-10">
        BEM-VINDO AO <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-green-600">
          COFOBOL
        </span>
      </h1>
      <p className="text-2xl md:text-3xl font-bold mb-6 text-slate-700 z-10">
        Um Novo Paradigma Desportivo Colectivo.
      </p>
      <p className="text-lg md:text-xl text-slate-500 max-w-3xl mb-10 leading-relaxed z-10">
        Alta intensidade, invasão, pressão, fuga e adrenalina 100%. Uma modalidade que liberta serotonina e dopamina, desenvolvendo a velocidade, força bruta, resistência e agilidade dos verdadeiros atletas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <a href="#midia" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg shadow-red-600/30">
          Ver o Jogo em Ação
        </a>
        <a href="#regras" className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-bold py-4 px-10 rounded-full text-lg transition duration-300">
          Descubra as Regras
        </a>
      </div>
    </section>
  );
}
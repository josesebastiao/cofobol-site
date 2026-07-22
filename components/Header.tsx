"use client";
import React, { useState } from 'react';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full p-4 md:p-6 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        
        {/* Logo */}
        <a href="#" className="z-50" onClick={() => setMenuAberto(false)}>
          <img 
            src="/logo.png" 
            alt="Logotipo Oficial Cofobol" 
            className="h-10 md:h-14 w-auto drop-shadow-sm" 
          />
        </a>

        {/* Botão do Menu Mobile */}
        <button 
          className="md:hidden z-50 flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          <span className={`w-7 h-0.5 bg-slate-900 transition-all duration-300 ${menuAberto ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-slate-900 transition-all duration-300 ${menuAberto ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-slate-900 transition-all duration-300 ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 font-bold text-slate-600">
          <a href="#historia" className="hover:text-green-600 transition">A História</a>
          <a href="#jogo" className="hover:text-red-600 transition">O Jogo</a>
          <a href="#midia" className="hover:text-blue-600 transition">Vídeos & Eventos</a>
          <a href="#contato" className="hover:text-green-500 transition">Contato</a>
        </nav>
      </div>

      {/* Tela do Menu Mobile */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-[100dvh] bg-white flex flex-col items-center justify-center gap-10 font-black text-3xl transition-transform duration-300 ease-in-out ${menuAberto ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#historia" onClick={() => setMenuAberto(false)} className="text-slate-800 hover:text-green-600">A História</a>
        <a href="#jogo" onClick={() => setMenuAberto(false)} className="text-slate-800 hover:text-red-600">O Jogo</a>
        <a href="#midia" onClick={() => setMenuAberto(false)} className="text-slate-800 hover:text-blue-600">Vídeos & Eventos</a>
        <a href="#contato" onClick={() => setMenuAberto(false)} className="text-slate-800 hover:text-green-500">Contato</a>
        
        <div className="absolute bottom-10 flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-600"></span>
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
        </div>
      </div>
    </header>
  );
}

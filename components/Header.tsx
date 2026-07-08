import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="text-3xl font-black tracking-widest text-slate-900 flex items-center gap-1">
        <span className="text-red-600">C</span>
        <span className="text-blue-600">F</span>
        <span className="text-green-600">B</span>
        <span className="ml-2 text-xl tracking-tight hidden md:inline-block">COFOBOL</span>
      </div>
      <nav className="hidden md:flex gap-8 font-bold text-slate-600">
        <a href="#historia" className="hover:text-green-600 transition">A História</a>
        <a href="#regras" className="hover:text-red-600 transition">As Regras</a>
        <a href="#midia" className="hover:text-blue-600 transition">Vídeos & Eventos</a>
      </nav>
    </header>
  );
}
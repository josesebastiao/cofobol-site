import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md shadow-sm">
      
      {/* Aqui é onde a logo em imagem entra */}
      <div className="flex items-center">
        <a href="#">
          <img 
            src="/logo.png" 
            alt="Logotipo Oficial Cofobol" 
            className="h-12 md:h-16 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300" 
          />
        </a>
      </div>

      {/* Menu de Navegação */}
      <nav className="hidden md:flex gap-8 font-bold text-slate-600">
        <a href="#historia" className="hover:text-green-600 transition">A História</a>
        <a href="#regras" className="hover:text-red-600 transition">As Regras</a>
        <a href="#midia" className="hover:text-blue-600 transition">Vídeos & Eventos</a>
      </nav>
      
    </header>
  );
}
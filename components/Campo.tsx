import React from 'react';

export default function Campo() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wide text-slate-900">
          O <span className="text-green-600">Terreno</span> de Jogo
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          O Cofobol adapta-se ao ambiente, podendo ser jogado em campos quadrados, retangulares (como futebol 11 e futsal), quadras multiusos ou até na rua, delimitando as pistas dos jogadores e árbitros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="border-l-4 border-blue-600 pl-6 py-2">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Formato e Medidas</h4>
            <p className="text-slate-600 mb-4">
              As <strong>Pistas</strong> devem ter no mínimo 20 metros e no máximo 40 metros de comprimento. A largura varia entre um mínimo de 2 metros e um máximo de 4 metros.
            </p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6 py-2">
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Superfícies Permitidas</h4>
            <ul className="text-slate-600 space-y-2 list-disc ml-5 font-medium">
              <li>Relva natural ou sintética.</li>
              <li>Tatami ou Tartan.</li>
              <li>Tapete peludo ou de plástico.</li>
              <li>Pavimentada ou material maleável sem perigo.</li>
            </ul>
          </div>
        </div>

        {/* Imagem do Diagrama do Campo */}
        <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <img 
            src="/diagrama.jpg" 
            alt="Diagrama do Campo de Cofobol" 
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
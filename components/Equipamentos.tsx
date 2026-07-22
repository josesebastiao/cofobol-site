import React from 'react';

export default function Equipamentos() {
  return (
    <section className="py-24 px-6 bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-wide text-slate-900">
          Bolas e <span className="text-red-600">Equipamento</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card da Bola */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <span className="inline-block mb-5 rounded-full bg-red-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-red-700">Passo 6</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">As bolas de jogo</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              O Cofobol é disputado por duas equipas de cinco ou sete jogadores. Cada equipa joga com a sua própria bola, e as duas bolas devem ter cores totalmente diferentes.
            </p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Peso:</strong> 320 a 420 gramas.</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Circunferência:</strong> 34 a 36 cm.</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Material:</strong> borracha, couro ou outro material esférico, macio e maleável.</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Pressão:</strong> 0,3 a 0,8 atmosferas.</li>
            </ul>
          </div>

          {/* Card do Equipamento */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-md text-slate-100">
            <span className="inline-block mb-5 rounded-full bg-blue-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-blue-700">Passo 7</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-3xl font-black text-white">O Equipamento</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              O cofobolista veste um conjunto de nove peças, projectado para alta intensidade, protecção e dinamismo.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <li><span className="text-red-500 font-bold">1.</span> Camisola numerada</li>
              <li><span className="text-red-500 font-bold">2.</span> Calções acima do joelho</li>
              <li><span className="text-red-500 font-bold">3.</span> Calção térmico (obrigatório)</li>
              <li><span className="text-red-500 font-bold">4.</span> Calçado (sapatilhas ou chuteiras)</li>
              <li><span className="text-red-500 font-bold">5.</span> Meias</li>
              <li className="col-span-1 sm:col-span-2 bg-slate-800 p-2 rounded text-white font-bold">
                <span className="text-red-500">6.</span> Lubra, que identifica e diferencia um braço do outro
              </li>
              <li><span className="text-slate-500 font-bold">7.</span> Camisola interna (facultativa)</li>
              <li><span className="text-slate-500 font-bold">8.</span> Joelheiras (facultativas)</li>
              <li className="col-span-1 sm:col-span-2"><span className="text-slate-500 font-bold">9.</span> Luvas de protecção (facultativas)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

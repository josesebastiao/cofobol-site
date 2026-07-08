import React from 'react';

export default function Equipamentos() {
  return (
    <section className="py-24 px-6 bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-wide text-slate-900">
          A Armadura e a <span className="text-red-600">Bola</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card da Bola */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">A Bola de Cofobol</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              No Cofobol, o jogo é disputado com <strong>duas bolas simultâneas</strong> (uma para cada equipa), que devem possuir cores totalmente diferentes.
            </p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Peso:</strong> 320 a 420 gramas[cite: 1].</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Circunferência:</strong> 34 a 36 cm (cabe facilmente na palma da mão)[cite: 1].</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Material:</strong> Esférica e macia (borracha, couro ou material maleável)[cite: 1].</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> <strong>Pressão:</strong> 0,3 a 0,8 atmosferas[cite: 1].</li>
            </ul>
          </div>

          {/* Card do Equipamento */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-md text-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-3xl font-black text-white">O Equipamento</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              O Cofobolista veste um conjunto de 9 peças, projetado para alta intensidade, proteção e dinamismo[cite: 1].
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <li><span className="text-red-500 font-bold">1.</span> Camisola numerada[cite: 1]</li>
              <li><span className="text-red-500 font-bold">2.</span> Calções acima do joelho[cite: 1]</li>
              <li><span className="text-red-500 font-bold">3.</span> Calção térmico (Obrigatório)[cite: 1]</li>
              <li><span className="text-red-500 font-bold">4.</span> Calçado (sapatilhas/chuteiras)[cite: 1]</li>
              <li><span className="text-red-500 font-bold">5.</span> Meias[cite: 1]</li>
              <li className="col-span-1 sm:col-span-2 bg-slate-800 p-2 rounded text-white font-bold">
                <span className="text-red-500">6.</span> Cocapepu (Colete Capa de guerra: "Pega-pega, puxa-puxa")[cite: 1]
              </li>
              <li><span className="text-slate-500 font-bold">7.</span> Camisola interna (Facultativo)[cite: 1]</li>
              <li><span className="text-slate-500 font-bold">8.</span> Joelheiras (Facultativo)[cite: 1]</li>
              <li className="col-span-1 sm:col-span-2"><span className="text-slate-500 font-bold">9.</span> Luvas de proteção (Facultativo)[cite: 1]</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
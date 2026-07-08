import React from 'react';

export default function SliderMidia() {
  // Lista temporária
  const midias = [
    { id: 1, tipo: 'Vídeo', titulo: 'Primeiro Jogo Oficial', cor: 'bg-red-100 border-red-300 text-red-700' },
    { id: 2, tipo: 'Foto', titulo: 'Equipa Alfa em Ação', cor: 'bg-green-100 border-green-300 text-green-700' },
    { id: 3, tipo: 'Vídeo', titulo: 'A Grande Chapada', cor: 'bg-blue-100 border-blue-300 text-blue-700' },
    { id: 4, tipo: 'Foto', titulo: 'Tática do Capitão', cor: 'bg-slate-200 border-slate-400 text-slate-800' },
    { id: 5, tipo: 'Vídeo', titulo: 'Entrevista com o Criador', cor: 'bg-red-100 border-red-300 text-red-700' },
  ];

  return (
    <section id="midia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase tracking-wide text-slate-900">
          O Cofobol em <span className="text-blue-600">Ação</span>
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto text-lg">
          Deslize para o lado e veja os melhores momentos, eventos e a energia do nosso desporto.
        </p>

        {/* O Container do Slider */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {midias.map((item) => (
            <div 
              key={item.id} 
              className={`min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-video rounded-3xl flex flex-col items-center justify-center border-2 border-dashed snap-center transition-transform hover:scale-[1.02] cursor-grab active:cursor-grabbing shadow-sm shrink-0 ${item.cor}`}
            >
              <span className="font-black text-2xl mb-2">{item.tipo}</span>
              <span className="font-medium">{item.titulo}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
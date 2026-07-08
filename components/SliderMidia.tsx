import React from 'react';

export default function SliderMidia() {
  // Lista com os vídeos reais e caminhos para as fotos
  const midias = [
    { id: 1, tipo: 'video', youtubeId: 'KYVIEJxUhOE', titulo: 'O que é o Cofobol?' },
    { id: 2, tipo: 'foto', src: '/foto1.jpeg', titulo: 'Equipa em Ação' },
    { id: 3, tipo: 'video', youtubeId: 'H_cPmJ2BAWQ', titulo: 'Dinâmica e Movimentação' },
    { id: 4, tipo: 'foto', src: '/foto2.jpeg', titulo: 'Medição de Forças' },
    { id: 5, tipo: 'video', youtubeId: '_wbB8qhgd0k', titulo: 'Treino Prático' },
  ];

  return (
    <section id="midia" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase tracking-wide text-white">
          O Cofobol em <span className="text-blue-500">Ação</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
          Deslize para o lado e veja os melhores momentos, eventos e a energia do nosso desporto.
        </p>

        {/* Container do Slider */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {midias.map((item) => (
            <div 
              key={item.id} 
              // AQUI ESTÁ A CORREÇÃO: flex-none impede o esmagamento, e w-[...] define a largura exata
              className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-video rounded-3xl overflow-hidden snap-center shadow-lg border border-slate-700 bg-black relative group"
            >
              {item.tipo === 'video' ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
                  title={item.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              
              {/* Título sobreposto na foto */}
              {item.tipo === 'foto' && (
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pointer-events-none">
                  <h3 className="text-white font-bold text-xl">{item.titulo}</h3>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
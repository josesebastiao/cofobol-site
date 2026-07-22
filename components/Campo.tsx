import React from 'react';

export default function Campo() {
  return (
    <section className="py-24 px-6 bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200">
          <div className="p-8 md:p-10">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-green-700">Passo 5</span>
            <h2 className="text-3xl md:text-4xl font-black mb-5 text-slate-900">
              Terreno de jogo
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-4xl">
              O Cofobol adapta-se aos ambientes, podendo ser jogado em campos quadrados ou rectangulares, com quatro ou seis pilares.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Superfícies permitidas</h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 list-decimal pl-6 text-slate-600 font-medium leading-relaxed">
              <li>Relva natural ou sintética.</li>
              <li>Tatami ou tartan.</li>
              <li>Tapete peludo ou de plástico.</li>
              <li>Pavimento ou outro material maleável que não constitua perigo para os utentes.</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-slate-200">
            <figure className="bg-white p-4 md:p-6">
              <img src="/diagrama.jpg" alt="Diagrama de um campo de mini-Cofobol" className="h-full min-h-64 w-full rounded-2xl object-contain" />
              <figcaption className="pt-3 text-center text-sm font-medium text-slate-500">Diagrama do campo de mini-Cofobol</figcaption>
            </figure>
            <figure className="bg-slate-900 p-4 md:p-6">
              <img src="/foto2.jpeg" alt="Praticantes num campo de Cofobol" className="h-full min-h-64 w-full rounded-2xl object-cover" />
              <figcaption className="pt-3 text-center text-sm font-medium text-slate-300">Campo de Cofobol em utilização</figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}

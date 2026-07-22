import React from 'react';

export default function Regras() {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase tracking-wide text-slate-900">
          O <span className="text-red-600">Jogo</span>
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Conheça os princípios, os contrastes e os elementos que tornam o Cofobol uma modalidade única.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="bg-slate-50 p-8 rounded-3xl border-t-4 border-t-red-600 shadow-sm hover:shadow-md transition">
            <span className="inline-block mb-4 rounded-full bg-red-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-red-700">Passo 2</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Um projecto para a juventude</h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              O Cofobol é um projecto desportivo cujo objectivo é atrair pessoas, principalmente adolescentes e jovens, e ocupá-las nos seus tempos livres de forma saudável.
            </p>
            <p className="rounded-2xl bg-red-600 p-5 text-lg font-bold leading-relaxed text-white">
              COFOBOL-TEV-FM é o maior refúgio da juventude quando longe da escola e das telas da ociosidade.
            </p>
          </article>
          
          <article className="bg-slate-50 p-8 rounded-3xl border-t-4 border-t-green-600 shadow-sm hover:shadow-md transition">
            <span className="inline-block mb-4 rounded-full bg-green-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-green-700">Passo 3</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Contrastes do Cofobol</h3>
            <ol className="list-decimal space-y-3 pl-5 text-slate-600 leading-relaxed">
              <li>Tem pontos ganhos e pontos conquistados.</li>
              <li>Não usa balizas convencionais, mas tem a figura do golo.</li>
              <li>Cada equipa joga com a sua própria bola.</li>
              <li>Usa cinco cartões para manter a ordem e a disciplina no jogo.</li>
              <li>Tem uma pontuação FM única.</li>
            </ol>
          </article>

          <article className="lg:col-span-2 bg-slate-900 p-8 rounded-3xl shadow-md">
            <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-blue-700">Passo 4</span>
            <h3 className="text-2xl font-bold text-white mb-6">Cartões disciplinares</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
              <div className="rounded-2xl border-t-4 border-yellow-400 bg-slate-800 p-5"><h4 className="font-black text-yellow-300 mb-2">Amarelo</h4><p className="text-sm text-slate-300 leading-relaxed">Advertência por comportamento antidesportivo.</p></div>
              <div className="rounded-2xl border-t-4 border-orange-500 bg-slate-800 p-5"><h4 className="font-black text-orange-400 mb-2">Laranja</h4><p className="text-sm text-slate-300 leading-relaxed">Suspensão por comportamento antidesportivo grave.</p></div>
              <div className="rounded-2xl border-t-4 border-green-500 bg-slate-800 p-5"><h4 className="font-black text-green-400 mb-2">Verde</h4><p className="text-sm text-slate-300 leading-relaxed">Restauração: uma nova oportunidade para fazer melhor.</p></div>
              <div className="rounded-2xl border-t-4 border-white bg-slate-800 p-5"><h4 className="font-black text-white mb-2">Branco</h4><p className="text-sm text-slate-300 leading-relaxed">Fair Play: vi uma boa acção que deve ser multiplicada.</p></div>
              <div className="rounded-2xl border-t-4 border-red-600 bg-slate-800 p-5"><h4 className="font-black text-red-400 mb-2">Vermelho</h4><p className="text-sm text-slate-300 leading-relaxed">Expulsão por comportamento antidesportivo muito grave e desumano. Stop. Basta. Amanhã haverá mais.</p></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const infracoes = [
  'Arremessar a bola sem antes percorrer meia distância da pista.',
  'Recepcionar a bola arremessada fora do pilar.',
  'Correr sem a camisola de jogo na segunda pista.',
  'Tocar dolosamente, com o pé ou o braço, na bola adversária, mudando-a de rota.',
];

export default function SistemaPontuacao() {
  return (
    <section aria-labelledby="titulo-sistema-pontuacao" className="bg-slate-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-black uppercase tracking-wider text-green-700">
            Regras do jogo
          </span>
          <h2 id="titulo-sistema-pontuacao" className="text-4xl font-black uppercase tracking-wide text-slate-900 md:text-5xl">
            Sistema de <span className="text-green-600">Pontuação</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-8 lg:col-span-2">
            <h3 className="mb-6 text-xl font-black uppercase tracking-wide text-slate-900">Como conquistar pontos</h3>
            <ol className="grid gap-5 md:grid-cols-2">
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-black text-white">1</span>
                <p className="pt-1.5 leading-relaxed text-slate-700">
                  Uma equipa conquista <strong className="text-green-700">1 ponto</strong> sempre que percorrer, sem perseguição adversária, meia distância do percurso da pista.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-black text-white">2</span>
                <p className="pt-1.5 leading-relaxed text-slate-700">
                  Uma equipa ganha <strong className="text-green-700">1 ponto</strong> sempre que a equipa adversária cometer uma infracção.
                </p>
              </li>
            </ol>
          </article>

          <article className="rounded-3xl border-t-4 border-orange-500 bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-8 lg:col-span-2">
            <h3 className="mb-2 text-xl font-black uppercase tracking-wide text-slate-900">Infracções</h3>
            <p className="mb-7 text-slate-600">Estas acções atribuem 1 ponto à equipa adversária:</p>
            <ol className="grid gap-4 md:grid-cols-2">
              {infracoes.map((infracao, index) => (
                <li key={infracao} className="flex gap-4 rounded-2xl bg-orange-50 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-white">
                    {index + 3}
                  </span>
                  <p className="pt-1 leading-relaxed text-slate-700">{infracao}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl bg-slate-900 p-7 text-white shadow-md md:p-8 lg:col-span-2">
            <h3 className="mb-6 text-xl font-black uppercase tracking-wide text-white">Golo ou chapada</h3>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-black text-white">7</span>
              <p className="pt-1.5 text-lg leading-relaxed text-slate-200">
                O <strong className="text-white">golo ou chapada</strong> é dado quando um jogador consegue percorrer todos os pilares com as duas bolas em sua posse.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

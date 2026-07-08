import React from 'react';

export default function Regras() {
  return (
    <section id="regras" className="py-24 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 uppercase tracking-wide text-slate-900">
          A Essência da <span className="text-red-600">Batalha</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-t-red-600 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Duas Bolas Simultâneas</h3>
            <p className="text-slate-600 leading-relaxed">
              Cada equipa joga com a sua própria bola. A atenção, a retenção e o arremesso são levados ao limite numa perseguição constante.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-t-green-600 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Chapada (O Golo)</h3>
            <p className="text-slate-600 leading-relaxed">
              Não usamos balizas convencionais. O golo é obtido quando o jogador corre o mais rápido possível na pista e completa o circuito inteiro sob pressão.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border-t-4 border-t-blue-600 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4 Cartões Disciplinares</h3>
            <p className="text-slate-600 leading-relaxed">
              Amarelo (advertência), Vermelho (suspensão de 6 min), Verde (restauração ao jogo) e Preto (expulsão). Disciplina e Fair Play acima de tudo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Historia() {
  return (
    <section id="historia" className="py-24 px-6 bg-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-wide text-slate-900 text-center">
          A Nossa <span className="text-green-600">História</span>
        </h2>
        <div className="mb-12 space-y-5 text-lg md:text-xl text-slate-600 leading-relaxed">
          <p>
            O Cofobol é uma modalidade desportiva colectiva criada pelo angolano Dongala Kufica Mendes, “Orlando Mendes”, professor de Educação Física e Desportos Escolares.
          </p>
          <p>
            Foi jogado pela primeira vez na Aldeia de Crianças do Lubango, precisamente na Escola Herman Gmeiner SOS, na altura chamado “jogo de precisão”.
          </p>
          <p>
            Renasceu em 2023 no Liceu 7005, em Talatona, Luanda, já com toda a estrutura que a modalidade apresenta hoje como Cofobol.
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
          Alicerces e berço
        </h3>
        <p className="text-xl text-slate-600 mb-6 leading-relaxed font-medium">
          O Prof. Orlando Mendes teve a ideia de criar um jogo que pudesse:
        </p>
        <ol className="list-decimal space-y-4 pl-6 text-lg text-slate-600 leading-relaxed">
          <li>
            Treinar para desenvolver, fortalecer e aperfeiçoar, de forma intermitente e encarrilhada, todas as capacidades psicomotoras e, durante a prática, proporcionar pressão, diversão, lazer, entretenimento, socialização e competitividade. O jogo deveria também trazer o entendimento claro de que o trabalho em equipa produz mais e melhores resultados, além de atrair todos à prática.
          </li>
          <li>Envolver o maior número possível de praticantes.</li>
          <li>Mantê-los aquecidos.</li>
          <li>Socializar os alunos.</li>
          <li>Despertar e promover nos alunos o interesse pela prática desportiva.</li>
          <li>Tonificar os músculos de forma natural.</li>
          <li>
            Formar homens e mulheres para uma missão especial: enfrentar a vida de forma honesta.
          </li>
        </ol>
        <p className="mt-8 text-xl text-slate-700 leading-relaxed font-semibold border-l-4 border-green-600 pl-5">
          Ensinava que o treino contínuo e a disciplina são as chaves do sucesso.
        </p>
      </div>
    </section>
  );
}

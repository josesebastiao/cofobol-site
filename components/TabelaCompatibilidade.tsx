import React from 'react';

export default function TabelaCompatibilidade() {
  const categorias = [
    { id: 1, idade: '6 à 8', categoria: 'Alfa', pilares: '4', voltas: '1', obs: '60 m' },
    { id: 2, idade: '8 à 10', categoria: 'Infantil', pilares: '4', voltas: '1', obs: '80 m' },
    { id: 3, idade: '10 à 13', categoria: 'Iniciados', pilares: '4', voltas: '2', obs: '240 m' },
    { id: 4, idade: '13 à 15', categoria: 'Cadetes', pilares: '4', voltas: '2', obs: '360 m' },
    { id: 5, idade: '15 à 17', categoria: 'Juvenis', pilares: '4 à 6', voltas: '2 à 3', obs: '660 m' },
    { id: 6, idade: '18 à 20', categoria: 'Juniores', pilares: '4 à 6', voltas: '2 à 4', obs: '720 m' },
    { id: 7, idade: '21 à 36', categoria: 'Seniores A', pilares: '4 à 6', voltas: '2 à 4', obs: '1080 m (TOP VIP)' },
    { id: 8, idade: '45 à 50', categoria: 'Veteranos 1', pilares: '6', voltas: '1 à 2', obs: '630 m' },
    { id: 9, idade: '65 à 70', categoria: 'V. Guardas 5', pilares: '4', voltas: '1', obs: '80 m' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide mb-4 md:mb-6">
            Princípio da <span className="text-green-500">Compatibilidade</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            No Cofobol, a compatibilidade psicofísica é essencial. Os jogos são disputados entre adversários da mesma faixa etária. Um desporto para todos, dos 6 aos 70 anos!
          </p>
        </div>

        {/* Dica visual apenas para mobile */}
        <div className="md:hidden text-center text-slate-400 text-sm font-bold mb-3 animate-pulse">
          👈 Deslize a tabela para ver mais 👉
        </div>

        {/* Tabela Responsiva */}
        <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl bg-slate-900/50">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-800 text-slate-300 text-sm md:text-base">
                <th className="p-3 md:p-4 font-bold border-b border-slate-700">Idade</th>
                <th className="p-3 md:p-4 font-bold border-b border-slate-700">Categoria</th>
                <th className="p-3 md:p-4 font-bold border-b border-slate-700">Pilares</th>
                <th className="p-3 md:p-4 font-bold border-b border-slate-700">Voltas</th>
                <th className="p-3 md:p-4 font-bold border-b border-slate-700">Distância Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm md:text-base">
              {categorias.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/50 transition duration-150">
                  <td className="p-3 md:p-4 font-semibold text-green-400">{item.idade} anos</td>
                  <td className="p-3 md:p-4 font-bold">{item.categoria}</td>
                  <td className="p-3 md:p-4 text-slate-300">{item.pilares}</td>
                  <td className="p-3 md:p-4 text-slate-300">{item.voltas}</td>
                  <td className="p-3 md:p-4 text-blue-400 font-medium">{item.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
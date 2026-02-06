export default function Reason() {
  const reasons = [
    { num: 1, title: 'デザインが決まらない', desc: '好みのデザインがわからない' },
    { num: 2, title: 'サイズがわからない', desc: '彼女の指のサイズを知らない' },
    { num: 3, title: 'サプライズがしたい', desc: 'プロポーズ当日に渡したい' },
    { num: 4, title: 'ダイヤモンドにこだわりたい', desc: '高品質なダイヤを贈りたい' },
    { num: 5, title: '高い品質のものを贈りたい', desc: '有名ブランドで買いたい' },
    { num: 6, title: '納期まで時間がない', desc: 'すぐにプロポーズしたい' },
    { num: 7, title: '彼女の好みを尊重したい', desc: 'デザインは後で選びたい' },
    { num: 8, title: 'プロポーズの演出を相談したい', desc: 'スタッフに相談したい' },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-serif text-brand-dark mb-4 tracking-widest">REASON</h2>
      <p className="text-xs text-gray-500 mb-16">PLEDGE for WEDDINGが選ばれる理由</p>
      
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {reasons.map((r) => (
          <div key={r.num} className="text-left border-t border-gray-300 pt-4">
             <span className="text-3xl font-serif text-gray-300 italic mb-2 block">{r.num}</span>
             <h3 className="font-bold text-sm mb-2 text-brand-dark leading-tight h-10 flex items-center">{r.title}</h3>
             <p className="text-xs text-gray-500">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

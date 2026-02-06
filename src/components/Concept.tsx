export default function Concept() {
  const philosophies = [
    {
      id: "01",
      titleEn: "Material Soul",
      titleJa: "素材の生命力",
      description: "大地が育んだ「木」の血液。7000年の風雪に耐え抜いた「石」の記憶。\n自然との共生から生まれた素材は、圧倒的な堅牢性と、吸い込まれるような深淵な黒を宿す。\nそれは、化学が生み出せない、生命の塊。",
      note: "Urushi / Earth",
      align: "left"
    },
    {
      id: "02",
      titleEn: "Artisan’s Silence",
      titleJa: "職人の沈黙",
      description: "100を超える工程。数ヶ月、時に数年という歳月。\nその膨大な時間のすべてに、職人の魂が沈殿する。\n言葉を持たない漆の中に込められたのは、一期一会の祈りと、妥協なき美学。\n静寂の中で磨き上げられた時間は、永遠の輝きへと昇華する。",
      note: "Craftsmanship / Time",
      align: "right"
    },
    {
      id: "03",
      titleEn: "Tactile Memory",
      titleJa: "身体的記憶",
      description: "視覚を超えて、皮膚が記憶する美しさ。\n「口当たり」「手触り」「温度」。\n触れた瞬間、境界線が消え、ETTOは身体の一部となる。\n五感を通じて心に刻まれる機能美は、あなたの日々に寄り添い、共に時を重ねていく。",
      note: "Sensation / Unity",
      align: "left"
    }
  ];

  return (
    <section className="w-full py-32 bg-[#080808] text-white">
      
      {/* Section Header */}
      <div className="text-center mb-24 px-6">
        <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4 font-serif">The Philosophy</p>
        <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-neutral-200">
          我々が刻むのは、<br className="md:hidden" />触れることのできる歴史。
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-32">
        {philosophies.map((item, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Visual Part */}
            <div className="w-full md:w-1/2">
               <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden group">
                 {/* Placeholder Image */}
                 <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105"></div>
                 <div className="absolute top-4 left-4 text-neutral-600 font-serif text-sm border border-neutral-700 px-3 py-1">
                   {item.id} — {item.note}
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center text-neutral-700 font-serif tracking-widest opacity-30">
                    [Visual: {item.titleEn}]
                 </div>
               </div>
            </div>

            {/* Text Part */}
            <div className="w-full md:w-1/2 text-left">
               <span className="block text-xs font-serif text-brand-red tracking-widest mb-3 opacity-80">
                 {item.id}. {item.titleEn}
               </span>
               <h3 className="text-2xl font-serif text-white mb-8 tracking-widest">
                 {item.titleJa}
               </h3>
               <p className="text-neutral-400 leading-loose text-sm font-serif whitespace-pre-line tracking-wide">
                 {item.description}
               </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

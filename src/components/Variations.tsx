export default function Variations() {
  return (
    <section className="w-full py-32 bg-[#050505] text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-serif tracking-widest mb-12">
          The Creations
        </h2>

        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-sm md:text-base font-serif text-neutral-400 leading-loose tracking-wide">
             伝統の文脈を編集（Edit）し、<br />
             現代のラグジュアリーへと再構築されたクリエイション。<br />
             これらは単なる装飾品ではない。<br />
             あなたの生き様を映し出す鏡である。
          </p>
        </div>

        {/* Teaser Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-60">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="aspect-square bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-700">
                [Collection {i}]
             </div>
           ))}
        </div>

        <button className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-serif tracking-widest text-white border border-white/30 hover:border-white transition-colors duration-500">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative text-sm">View Collections</span>
        </button>

      </div>
    </section>
  );
}

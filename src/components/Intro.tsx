export default function Intro() {
  return (
    <section className="w-full py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* English Heading */}
        <div className="text-center mb-12">
           <h2 className="text-xs md:text-sm tracking-[0.3em] text-neutral-500 uppercase font-serif">
             The Manifesto
           </h2>
        </div>

        {/* Japanese Heading */}
        <div className="text-center mb-16">
           <h3 className="text-3xl md:text-4xl font-serif tracking-widest mb-6">
             解放。<br />
             <span className="text-2xl md:text-3xl block mt-4 text-neutral-300">「器」から「象徴」へ。</span>
           </h3>
           <p className="text-xs md:text-sm text-neutral-500 tracking-widest uppercase mt-4">
             Liberation. From Vessel to Symbol.
           </p>
        </div>

        {/* Body Text */}
        <div className="space-y-10 text-center md:text-left md:space-y-0 md:grid md:grid-cols-2 md:gap-16 items-center">
            {/* Left Column: English */}
            <div className="text-neutral-500 text-xs leading-relaxed font-serif tracking-wide hidden md:block">
               <p className="mb-4">We liberate Wajima lacquerware from the confines of &quot;craft.&quot;</p>
               <p className="mb-4">It is not merely a tool, but a gemstone born of the earth, condensed over 7,000 years. An art piece that proves the identity of its owner.</p>
               <p>Just as the katana was once the soul of the samurai, ETTO becomes the shape of your spirit.</p>
            </div>

            {/* Right Column: Japanese (Main) */}
            <div className="text-base md:text-lg leading-loose font-serif text-neutral-200">
               <p className="mb-6">
                 1000年の時を超えて受け継がれた日本の技と精神。<br/>
                 それは、美術館のガラスケースに閉じ込めるべき過去ではない。<br/>
                 生活の道具という役割だけに留めておくべきものでもない。
               </p>
               <p className="mb-6">
                 ETTOは、輪島塗を「工芸」から解放する。<br/>
                 7000年の歴史を凝縮した、地球が生んだ宝石として。<br/>
                 所有する者のアイデンティティを証明する、アートピースとして。
               </p>
               <p>
                 かつて刀が武士の魂であったように、<br/>
                 ETTOは、現代を生きるあなたの「精神の形」となる。
               </p>
            </div>
        </div>

      </div>
      
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
}

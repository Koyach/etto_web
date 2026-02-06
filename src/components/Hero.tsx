"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Visual: NIWAKA同様、画面いっぱいの高解像度画像（黒背景に浮かぶ漆の艶） */}
      <div className="absolute inset-0 bg-neutral-900 opacity-80 z-0">
        {/* Placeholder for Product Image floating in darkness */}
        {/* <img src="/path/to/hero-bg.jpg" alt="ETTO Product" className="w-full h-full object-cover opacity-60" /> */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Vertical Text */}
        <div className="writing-vertical-rl text-white font-serif text-3xl md:text-5xl tracking-widest leading-loose h-[40vh] border-l border-white/20 pl-8 ml-4">
          精神は残り、形は進化する
        </div>

        {/* English Subtitle */}
        <div className="mt-12 opacity-80 animate-fade-in">
          <p className="text-sm md:text-base font-serif text-neutral-400 tracking-[0.2em] uppercase">
            Spirit Remains, Form Evolves.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-16 bg-white/30 mx-auto"></div>
        <p className="text-[10px] text-white/50 tracking-widest mt-2 uppercase">Scroll</p>
      </div>

      <style jsx>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </section>
  );
}

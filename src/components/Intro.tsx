"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full py-[30vh] bg-[#050505] text-[#F2F0EB] overflow-hidden">
      
      {/* Asymmetric Grids - NOT Centered */}
      <div className="max-w-[90%] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Quiet English / Context */}
        <div className="md:col-span-4 flex flex-col justify-end pb-12 md:pb-0">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="border-l border-white/20 pl-6"
           >
              <h2 className="text-xs tracking-[0.3em] text-[#8a1c1c] uppercase font-bodoni mb-6">
                The Manifesto
              </h2>
              <p className="font-bodoni text-xs leading-loose text-neutral-500 tracking-wider text-justify">
                ETTO breaks the seal of "preservation." We liberate "Kogei" (Craft) from the confines of mere utility and museum cases, elevating it into a contemporary luxury that resonates with the soul. This is not merely an object. It is the tangible history of the Japanese spirit.
              </p>
           </motion.div>
        </div>

        {/* Right Column: Dominant Japanese Statement */}
        <div className="md:col-span-8 relative">
           <motion.div style={{ y: yParallax }}>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.4] tracking-wider mb-20">
                伝統を、「保存」から<br />
                <span className="ml-[10%] md:ml-[15%] block text-neutral-400">「解放」する。</span>
              </h3>
              
              <div className="md:pl-[30%] font-serif text-sm md:text-base leading-[2.8] text-neutral-300 tracking-widest text-justify w-full md:w-[80%]">
                 <p className="mb-8">
                   日本列島には、数千年もの間、沈黙の中で磨き上げられてきた「美」が眠っている。
                   それは、過酷な自然と対峙した人間が、祈りにも似た手仕事で紡いできた結晶だ。
                 </p>
                 <p className="mb-0">
                   ETTOは、その封印を解く。<br />
                   工芸を、生活用品という枠から解放し、<br />
                   所有者の魂と響き合う「現代のラグジュアリー」へと昇華させる。
                 </p>
              </div>
           </motion.div>
        </div>

      </div>
      
      {/* Decorative large kanji 'Symbol' in background */}
      <div className="absolute top-[20%] left-[-10%] text-[20vw] font-serif font-bold text-white/5 pointer-events-none select-none z-0 writing-vertical-rl">
         解放
      </div>

    </section>
  );
}


"use client";

import { motion } from "framer-motion";

export default function Origin() {
  return (
    <section className="w-full py-32 md:py-48 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden"
        >
          {/* Placeholder for Noto Landscape Image */}
          <div className="absolute inset-0 bg-neutral-800 animate-pulse opacity-20"></div>
           <div className="absolute inset-0 flex items-center justify-center text-neutral-600 font-bodoni italic opacity-50">
             [ Image: Noto Peninsula / Sea ]
           </div>
           
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative"
        >
           <h2 className="text-sm tracking-[0.3em] text-[#8a1c1c] uppercase font-bodoni mb-8">
             The Origin
           </h2>
           
           <h3 className="text-3xl md:text-5xl font-serif tracking-widest mb-10">
             始まりの地、能登。
           </h3>
           
           <div className="font-serif text-base leading-loose text-neutral-300 space-y-8 text-justify border-l border-white/10 pl-8 md:pl-12">
             <p>
               ETTOの旅は、日本海に突き出た半島、能登から始まる。<br />
               かつて大陸との窓口であり、豊かな里山と海が共存するこの地は、高度な工芸技術の聖地である。
             </p>
             <p>
               震災という試練を超え、瓦礫の中から拾い上げられた「不屈の精神」。<br />
               それこそが、ETTOというブランドの背骨である。<br />
               我々はここから、日本の美意識を世界へ問いかける。
             </p>
           </div>
           
           <div className="mt-12 font-bodoni text-xs md:text-sm text-neutral-500 tracking-wider leading-relaxed opacity-80 pl-8 md:pl-12">
             ETTO's journey begins in Noto. Rising from the trials of disaster, the "indomitable spirit" found here forms the backbone of our brand. From this land, we present the Japanese aesthetic to the world.
           </div>
        </motion.div>

      </div>
    </section>
  );
}

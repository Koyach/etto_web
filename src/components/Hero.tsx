"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const lines = ["精神は", "残り、", "形は", "進化する"];
  
  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Visual Background: Deep Abyss */}
      <div className="absolute inset-0 z-0">
          {/* Subtle Lacquer Sheen - Moving slowly */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-black z-10" />
         <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-[radial-gradient(circle_at_60%_40%,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#000000]" 
         />
      </div>

      <div className="relative z-20 w-full h-full max-w-[1400px] mx-auto px-6">
        
        {/* Main Japanese Copy - Vertical, Monolithic, Sharp */}
        <div className="absolute top-[45%] right-[10%] md:right-[15%] -translate-y-1/2 flex flex-col justify-center">
            {/* The vertical line acting as a "Cut" */}
            <motion.div 
               initial={{ height: 0 }}
               animate={{ height: "100%" }}
               transition={{ duration: 1.5, ease: "circOut" }}
               className="absolute top-0 right-[-2rem] w-[1px] bg-gradient-to-b from-white/0 via-white/40 to-white/0"
            />
            
            <h1 className="text-vertical text-[#F2F0EB] font-serif text-4xl md:text-6xl lg:text-8xl leading-loose font-medium select-none mix-blend-screen drop-shadow-2xl flex items-start gap-x-6 md:gap-x-12">
                {lines.map((line, lineIndex) => (
                  <span key={lineIndex} className="block">
                    {line.split("").map((char, charIndex) => (
                      <motion.span
                          key={`${lineIndex}-${charIndex}`}
                          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ 
                          duration: 1.0, 
                          delay: (lineIndex * 4 + charIndex) * 0.15 + 0.5,
                          ease: "easeOut" 
                          }}
                          className="inline-block py-1 md:py-3"
                      >
                          {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
            </h1>
        </div>

        {/* English Subtitle - Subordinate, Small, Refined */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.5, duration: 2.0 }}
          className="absolute bottom-16 left-8 md:left-16"
        >
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-12 bg-white/30" />
             <p className="text-[10px] md:text-xs font-bodoni text-[#888] tracking-[0.3em] uppercase">
                Spirit Remains, Form Evolves.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Editions() {
  return (
    <section className="w-full py-32 md:py-48 bg-[#050505] text-[#F2F0EB]">
      <div className="w-full px-6 md:px-12">
        
        {/* Header - Subtle */}
        <div className="mb-24 md:mb-40 flex justify-between items-end border-b border-white/10 pb-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-8xl font-bodoni text-white/90"
          >
            The Editions
          </motion.h2>
          <span className="text-xs tracking-[0.3em] font-bodoni text-neutral-500 uppercase hidden md:block">
             Collection 2026
          </span>
        </div>

        {/* 01. WAJIMA - Huge Layout */}
        <div className="mb-40">
           <div className="grid grid-cols-1 gap-12">
              
              {/* Product Info - Minimalist Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div>
                      <span className="text-sm font-bodoni text-[#8a1c1c] tracking-widest block mb-2">01 / WAJIMA</span>
                      <h3 className="text-3xl md:text-5xl font-serif font-medium">深淵の黒。</h3>
                  </div>
                  <p className="text-sm font-bodoni text-neutral-500 max-w-sm text-right hidden md:block">
                     The Deepest Black,<br />Born from 7000 years of resilience.
                  </p>
              </div>

              {/* Product Image - MACRO HERO SHOT (Full Width) */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 className="w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-900 relative overflow-hidden group cursor-pointer"
              >
                  <ImagePlaceholder 
                     src="/images/editions/edition-hero.jpg"
                     alt="WAJIMA Edition Hero Shot"
                     className="z-0 w-full h-full"
                  />
                  {/* Hero Shot Placeholder - Representing "Texture" */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-20"></div>

                  {/* Button Overlay - "Glowing Line" Interaction */}
                  <div className="absolute bottom-12 right-12 z-20">
                     <button className="flex items-center gap-6 group">
                        <span className="text-sm font-bodoni tracking-[0.2em] text-white uppercase group-hover:text-[#8a1c1c] transition-colors duration-500">
                           Discover Collection
                        </span>
                        <div className="w-16 h-[1px] bg-white/50 group-hover:w-32 group-hover:bg-[#8a1c1c] transition-all duration-500 relative">
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] group-hover:bg-[#8a1c1c] group-hover:shadow-[0_0_15px_3px_rgba(138,28,28,0.8)] transition-all duration-500"></div>
                        </div>
                     </button>
                  </div>
              </motion.div>

           </div>
        </div>

        {/* 02. Coming Soon - Reduced */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-start opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-not-allowed">
            <div>
               <span className="text-xs font-bodoni text-white/50 tracking-widest block mb-2">02 / NEXT</span>
               <h3 className="text-2xl font-serif text-neutral-400">未完の美。</h3>
            </div>
            <p className="text-xs font-bodoni text-neutral-600 italic mt-2">Coming 2027...</p>
        </div>

      </div>
    </section>
  );
}

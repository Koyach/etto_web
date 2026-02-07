"use client";

import ImagePlaceholder from "./ImagePlaceholder";

export default function Concept() {
  const philosophies = [
    {
      id: "01",
      titleEn: "Material Soul",
      titleJa: "素材の生命力",
      description: "大地が育んだ「木」の血液。地球の記憶を宿す石。\n自然への畏敬から生まれた素材は、化学には生み出せない「生命の塊」であり、\n圧倒的な堅牢さと、吸い込まれるような深淵を宿している。",
      bgGradient: "from-neutral-900 to-black",
      image: "/images/concept/material.jpg"
    },
    {
      id: "02",
      titleEn: "Artisan’s Silence",
      titleJa: "職人の沈黙",
      description: "100を超える工程。数ヶ月、時に数年という歳月。\n言葉を持たないその手仕事の中に込められたのは、「一期一会」の精神と、妥協なき美学。\n静寂の中で極限まで高められた技術は、もはや魔術と区別がつかない。",
      bgGradient: "from-stone-900 to-black",
      image: "/images/concept/artisan.jpg"
    },
    {
      id: "03",
      titleEn: "Tactile Memory",
      titleJa: "身体的記憶",
      description: "視覚を超えて、皮膚が記憶する美しさ。\n日本人が大切にしてきた「口当たり」「手触り」「温度」。\nETTOのクリエイションは、触れた瞬間に境界線を消し、あなたの身体の一部となる。",
      bgGradient: "from-slate-900 to-black",
      image: "/images/concept/tactile.jpg"
    }
  ];

  return (
    <section className="w-full bg-black text-white relative">
      <div className="py-20 md:py-32 text-center sticky top-0 bg-black z-10 border-b border-white/5">
        <h2 className="text-sm md:text-base tracking-[0.3em] text-[#8a1c1c] uppercase font-bodoni mb-4">
          The Philosophy
        </h2>
        <p className="text-xl md:text-2xl font-serif text-neutral-400">
          我々が提供するのは、<br className="md:hidden"/>3つの要素が重なり合った「触れることのできる歴史」。
        </p>
      </div>

      <div className="w-full pb-32">
        {philosophies.map((item, index) => (
          <div 
            key={item.id} 
            className="sticky top-[15vh] w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-t border-white/10"
            style={{ 
                zIndex: index + 20,
                backgroundColor: '#000000' 
            }}
          >
            {/* Background Image / Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-50`}></div>
            
            <div className={`max-w-7xl mx-auto px-6 w-full py-20 relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} z-10`}>
                
                {/* Visual Side */}
                <div className="w-full md:w-[60%] aspect-square md:aspect-[16/10] bg-gradient-to-tr from-white/10 to-white/0 border border-white/5 relative items-center justify-center flex overflow-hidden group">
                   <div className="absolute -bottom-10 -right-10 text-[12rem] md:text-[20rem] font-bodoni text-white/5 font-bold leading-none z-0 transition-transform duration-1000 group-hover:scale-110">
                       {item.id}
                   </div>
                   <ImagePlaceholder 
                     src={item.image}
                     alt={`${item.titleEn} Visual`}
                     className="z-10 w-full h-full"
                   />
                </div>

                {/* Text Side - Overlapping Card */}
                <div className={`w-full md:w-[50%] flex flex-col justify-center p-8 md:p-16 bg-[#050505] border border-white/10 relative z-20 mt-[-3rem] md:mt-0 shadow-2xl ${index % 2 === 1 ? 'md:mr-[-10%]' : 'md:ml-[-10%]'}`}>
                    <div className="mb-10 relative">
                        <div className="w-12 h-[1px] bg-[#8a1c1c] mb-8"></div>
                        <h3 className="text-3xl md:text-5xl font-bodoni mb-3 text-white">{item.titleEn}</h3>
                        <p className="text-lg md:text-xl font-serif text-[#8a1c1c]">{item.titleJa}</p>
                    </div>
                    
                    <div className="font-serif text-base md:text-lg leading-loose text-neutral-300 whitespace-pre-line">
                        {item.description}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

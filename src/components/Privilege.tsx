import ImagePlaceholder from "./ImagePlaceholder";

export default function Privilege() {
  return (
    <section className="w-full py-24 bg-beige-gold text-center">
      <h2 className="text-3xl font-serif text-brand-dark mb-4 tracking-widest">PRIVILEGE</h2>
      <p className="text-xs text-brand-dark mb-12">ご購入特典</p>
      <p className="text-xs text-brand-dark mb-12 leading-relaxed">
        PLEDGEを購入した後、エンゲージリングを購入する際、<br/>
        ダイヤモンドのグレードアップなどの特典がございます。
      </p>

      <div className="max-w-3xl mx-auto bg-white p-12 shadow-xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          
          <div className="flex gap-4 justify-center mb-8 border-b border-gray-100 pb-8">
             <span className="bg-yellow-100 text-yellow-700 px-4 py-1 text-xs">ダイヤモンドのグレードアップ</span>
             <span className="bg-gray-100 text-gray-500 px-4 py-1 text-xs">刻印サービス</span>
          </div>

          <div className="w-full h-64 bg-gray-50 mb-8 relative">
             <ImagePlaceholder 
                src="/images/privilege/diamond-rings.jpg"
                alt="Diamond Rings"
                objectFit="contain"
             />
          </div>

          <p className="text-sm font-bold text-brand-dark mb-4">
             PLEDGEの価格分、エンゲージリングがお得に
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-8">
             エンゲージリングをご成約の際、<br/>
             「PLEDGE for WEDDING」の価格分を<br/>
             ダイヤモンドのグレードアップとして<br/>
             還元させていただきます。
          </p>

          <button className="border border-gray-300 px-12 py-3 text-xs tracking-widest hover:bg-gray-50 transition-colors">
            詳しく見る &gt;
          </button>
      </div>
      
      <div className="mt-16 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="flex gap-4 items-start">
             <div className="w-24 h-24 bg-white shrink-0">[Img]</div>
             <div>
                <h4 className="text-sm font-bold mb-2">ふたりの幸せなドラマへとつながる</h4>
                 <p className="text-xs text-brand-dark leading-relaxed">
                   NIWAKAのブライダルリングには、<br/>
                   ひとつひとつ名前があり、美しい情景と想いが込められています。
                 </p>
             </div>
          </div>
          <div className="flex gap-4 items-start">
             <div className="w-24 h-24 bg-white shrink-0">[Img]</div>
             <div>
                 <p className="text-xs text-brand-dark leading-relaxed">
                    「PLEDGE」から始まる幸せなストーリーは、<br/>
                    エンゲージリング、マリッジリングへと続き、<br/>
                    おふたりの人生に寄り添い輝き続けます。
                 </p>
             </div>
          </div>
      </div>
    </section>
  );
}

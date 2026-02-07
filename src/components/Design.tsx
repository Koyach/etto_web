import ImagePlaceholder from "./ImagePlaceholder";

export default function Design() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-soft-gray text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-brand-dark mb-2 tracking-widest">DESIGN</h2>
        <p className="text-xs text-gray-500 mb-12">サプライズプロポーズのためのリングデザイン</p>
        
        <div className="relative">
          <div className="w-full h-80 relative bg-gray-200 rounded-sm mx-auto mb-8 overflow-hidden">
             <ImagePlaceholder 
               src="/images/design/ring-large.jpg" 
               alt="Ring Design Large"
             />
          </div>
          <div className="text-left max-w-lg mx-auto">
             <p className="text-sm leading-8 text-gray-600 font-serif">
               大粒のダイヤモンドが輝く<br/>
               スターリングシルバー製のリング。<br/>
               幸せのクローバーを模した<br/>
               ストーンが華やかさを演出します。<br/>
               そのまま思い出として残せます。
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

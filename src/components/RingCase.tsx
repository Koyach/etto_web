export default function RingCase() {
  return (
    <section className="w-full py-24 bg-soft-gray relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="z-10">
          <h2 className="text-3xl font-serif text-brand-dark mb-4 tracking-widest">RING CASE</h2>
          <p className="text-xs text-gray-500 mb-8">ときめきの瞬間を演出するリングケース</p>
          <p className="text-sm text-gray-600 leading-loose mb-8">
            箱の上のリボンをほどくと<br/>
            現れるリングケース。<br/>
            サプライズプロポーズを演出する<br/>
            特別なケースです。<br/><br/>
            贈られた後も、部屋に飾り<br/>
            大切な思い出の品として<br/>
            飾っておくことができます。
          </p>
          <button className="border border-gray-400 px-8 py-3 text-xs tracking-widest hover:bg-white transition-colors">
            IMAGE GALLERY &gt;
          </button>
        </div>
        <div className="relative h-96">
           <div className="absolute inset-0 bg-white shadow-xl transform rotate-3 flex items-center justify-center">
             [Image: Open Ring Box with Ribbon]
           </div>
           {/* Decorative ribbon element could be added with CSS or SVG here */}
        </div>
      </div>
    </section>
  );
}

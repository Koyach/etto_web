export default function Select() {
  return (
    <section className="w-full py-20 bg-white text-center">
       <span className="text-xs text-gray-500 border-b border-gray-300 pb-1 mb-12 inline-block">選べる２タイプ</span>
       
       <h2 className="text-3xl font-serif text-brand-dark mb-12 tracking-widest">SELECT</h2>
       
       <div className="flex justify-center gap-4 mb-12">
          <button className="bg-brand-dark text-white px-8 py-2 text-xs">スクエア</button>
          <button className="bg-gray-200 text-gray-500 px-8 py-2 text-xs">ラウンド</button>
       </div>

       <div className="max-w-2xl mx-auto mb-12 relative h-80 bg-soft-gray flex items-center justify-center">
          [Image: Selected box type showcase]
       </div>
       
       <p className="text-xs text-center text-gray-500 max-w-lg mx-auto leading-relaxed">
         「PLEDGE for WEDDING」は、<br/>
         お好みに合わせて2種類のケースから<br/>
         お選びいただけます。<br/>
         どちらも、プロポーズの瞬間を<br/>
         美しく彩るデザインです。
       </p>
    </section>
  );
}

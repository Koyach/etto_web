export default function Steps() {
  const steps = [
    { num: "01", title: "PLEDGE for WEDDINGを購入", desc: "プロポーズ用のリングを選びます。\nサイズ調整も可能です。" },
    { num: "02", title: "思い出に残るプロポーズを", desc: "あなたらしい言葉で想いを伝えてください。" },
    { num: "03", title: "ふたりで選ぶエンゲージリング", desc: "後日、ふたりでお店へ。\n好みのデザインを選べます。" },
    { num: "04", title: "ダイヤモンドをセッティング", desc: "PLEDGEのダイヤモンドを\n選んだリングにセットします。" },
  ];

  return (
    <section className="w-full py-24 bg-soft-gray">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl text-brand-dark mb-16 tracking-widest">
          幸せなプロポーズを叶える4つのステップ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col items-center">
              <span className="font-serif text-3xl text-gray-300 mb-4 block w-full text-left italic">STEP {step.num}</span>
              <div className="w-full h-32 bg-gray-100 mb-4 flex items-center justify-center text-xs text-gray-400">
                [Illus {step.num}]
              </div>
              <h3 className="text-sm font-bold text-brand-dark mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500 text-left whitespace-pre-line leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center gap-4">
           {/* Additional steps/info about diamond grade if needed */}
        </div>
      </div>
    </section>
  );
}

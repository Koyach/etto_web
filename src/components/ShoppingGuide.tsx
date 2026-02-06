export default function ShoppingGuide() {
    return (
      <section className="w-full py-20 bg-white text-center">
        <h2 className="text-3xl font-serif text-brand-dark mb-4 tracking-widest">SHOPPING GUIDE</h2>
        <p className="text-xs text-gray-500 mb-12">ご購入について</p>
        <p className="text-xs text-gray-500 mb-12">
          PLEDGE for WEDDINGは全国のNIWAKA直営店、またはオンラインストアでご購入いただけます
        </p>
        
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-serif text-xl tracking-widest mb-4">STORE</h3>
              <p className="text-xs text-gray-400 mb-6">全国の店舗でご購入</p>
              <div className="w-full h-32 bg-gray-100 flex items-center justify-center">[MAP Illust]</div>
           </div>
           
           <div className="border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="font-serif text-xl tracking-widest mb-4">ONLINE STORE</h3>
              <p className="text-xs text-gray-400 mb-6">オンラインストアでご購入</p>
              <div className="w-full h-32 bg-gray-100 flex items-center justify-center">[Smartphone Illust]</div>
           </div>
        </div>
      </section>
    );
  }

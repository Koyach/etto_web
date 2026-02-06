export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 text-center border-t border-neutral-900">
       <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <div className="mb-12">
             <h2 className="text-3xl font-serif tracking-[0.2em] mb-4">ETTO</h2>
             <p className="text-xs text-neutral-500 tracking-widest uppercase">
               Maison
             </p>
          </div>

          <div className="text-sm font-serif text-neutral-400 tracking-wider leading-relaxed mb-12">
            <p className="mb-2">Noto, Japan</p>
            <p>(Based in Wajima / Nanao)</p>
          </div>
          
          <a href="#" className="text-xs text-white border-b border-white/30 pb-1 hover:border-white transition-colors tracking-widest mb-16">
            Make an Appointment
          </a>
          
          <p className="text-[10px] text-neutral-700 tracking-widest">
             &copy; 2026 ETTO. ALL RIGHTS RESERVED.
          </p>
       </div>
    </footer>
  );
}

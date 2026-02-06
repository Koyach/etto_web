export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-24 text-center border-t border-neutral-900">
       <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <div className="mb-8">
             <h2 className="text-4xl font-bodoni tracking-[0.2em] mb-2">ETTO</h2>
             <p className="text-xs text-neutral-500 tracking-[0.3em] uppercase">
               Maison
             </p>
          </div>

          <div className="text-xs md:text-sm font-bodoni text-neutral-400 tracking-wider leading-relaxed mb-12 opacity-80">
            <p>Noto, Japan</p>
            <p className="mt-1">(Appointment Only)</p>
          </div>
          
          <div className="flex items-center gap-8 mb-16">
            <a href="#" className="text-[10px] md:text-xs text-neutral-500 hover:text-white transition-colors tracking-widest uppercase">Instagram</a>
            <a href="#" className="text-[10px] md:text-xs text-neutral-500 hover:text-white transition-colors tracking-widest uppercase">Contact</a>
            <a href="#" className="text-[10px] md:text-xs text-neutral-500 hover:text-white transition-colors tracking-widest uppercase">Legal</a>
          </div>
          
          <p className="text-[10px] text-neutral-800 tracking-widest font-bodoni">
             &copy; ETTO Project
          </p>
       </div>
    </footer>
  );
}

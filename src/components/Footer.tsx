export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#3c494e]/10 bg-[#0e0e0e] relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="text-lg font-bold text-[#e5e2e1] font-headline">
          Celestial Observer
        </div>
        <div className="font-label text-[0.75rem] uppercase tracking-widest text-[#bbc9cf] text-center md:text-left opacity-80 hover:opacity-100 transition-colors">
          © 2024 Celestial Observer. Engineered for the Void.
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-[0.75rem] uppercase tracking-widest">
          <a className="text-[#bbc9cf] hover:text-[#00d4ff] transition-colors" href="#">GitHub</a>
          <a className="text-[#bbc9cf] hover:text-[#00d4ff] transition-colors" href="#">LinkedIn</a>
          <a className="text-[#bbc9cf] hover:text-[#00d4ff] transition-colors" href="#">Docs</a>
          <a className="text-[#bbc9cf] hover:text-[#00d4ff] transition-colors" href="#">Status</a>
        </div>
      </div>
    </footer>
  );
}

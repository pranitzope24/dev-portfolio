import Link from "next/link";

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative">
      <div className="parallax-layer absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-[0.03] blur-[120px] rounded-full pointer-events-none" data-depth="0.1"></div>
      <div className="parallax-layer absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-[0.03] blur-[120px] rounded-full pointer-events-none" data-depth="0.2"></div>
      
      <header className="mb-16 reveal active">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-outline-variant/20 bg-surface-container-low">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Personnel File // A. Nova</span>
        </div>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter font-headline text-on-surface leading-[0.9] mb-6 relative z-10">
            ARCHITECTING<br/>THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">INVISIBLE.</span>
          </h1>
        </div>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Specializing in high-concurrency backend systems and the frontier of agentic AI. I build the logic that lives in the shadows of the interface, engineering systems that think, learn, and scale.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* About Me Profile Sidebar */}
        <div className="md:col-span-5 lg:col-span-4 md:row-span-4 glass-card rounded-xl overflow-hidden group reveal stagger-1">
          <div className="h-[400px] overflow-hidden relative">
            <img alt="Pranit Zope headshot" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="./about/pranit_image.png" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-8">
              <h2 className="font-headline text-3xl font-black text-on-surface">Pranit Zope</h2>
              <p className="text-primary font-label text-xs tracking-widest uppercase">Backend and AI Engineer</p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-on-surface-variant text-sm leading-loose mb-8">
              I am a Backend &amp; AI Engineer obsessive about system reliability and emergent intelligence. My work focuses on creating agentic frameworks that don't just follow instructions, but reason through complex objectives within distributed architectures.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span className="text-xs font-label text-on-surface-variant tracking-wider uppercase">San Francisco / Remote</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-xl">terminal</span>
                <span className="text-xs font-label text-on-surface-variant tracking-wider uppercase">Go, Python, Rust, TS</span>
              </div>
              <div className="pt-6 border-t border-outline-variant/10">
                <div className="flex flex-wrap gap-2">
                  <span className="font-label text-[10px] px-3 py-1 rounded-sm bg-surface-container-high text-primary border border-outline-variant/20">BACKEND ARCHITECT</span>
                  <span className="font-label text-[10px] px-3 py-1 rounded-sm bg-surface-container-high text-secondary border border-outline-variant/20">AI RESEARCHER</span>
                  <span className="font-label text-[10px] px-3 py-1 rounded-sm bg-surface-container-high text-tertiary border border-outline-variant/20">SYSTEM DESIGN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Astronomy Card */}
        <div className="md:col-span-7 lg:col-span-8 md:row-span-2 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 group overflow-hidden relative reveal stagger-2">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary-container text-4xl group-hover:rotate-12 transition-transform duration-500">nights_stay</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface">Astronomy</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed mb-8">
              Deep-space imaging and celestial observation. I spend my clearest nights tracking the movement of Jovian moons and capturing the faint glow of distant nebulae through a modified Schmidt-Cassegrain telescope. It provides a sense of scale that informs my architectural thinking.
            </p>
            <div>
              <Link className="group/link flex items-center gap-2 text-primary-fixed text-xs font-label uppercase tracking-widest transition-all" href="#">
                <span>View Star Map Collection</span>
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <div className="h-px w-24 bg-primary-fixed/30 mt-1"></div>
            </div>
          </div>
          <div className="w-full md:w-64 h-64 md:h-auto rounded-lg overflow-hidden border border-outline-variant/10 shadow-2xl shrink-0">
            <img alt="Deep space nebula" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx7fj11NrF_LZuszX0IZjTE8fSMnEfDelFRasKP2Nni_rf0NHn4yZ1XXzrWCI4YF1T_0G-6Uji1uRlVbo-BIm72tKDGXY-9srwjNYw4QPi9OoN94WKcIdJVGWuVpcii82S2mqBfI7edEPzbRNaBFV3TwulyFcnzsFONTQR4RAwf86s8x_kcZ6iIhxOXVqrYos8k00MDewDiz7E8jrwgf1frQNKnCD0CL5WW9GohcymLilOPHae6VwXr28miKb036wUb7RI3P7WNyg" />
          </div>
        </div>
        
        {/* System Logic Card */}
        <div className="md:col-span-7 lg:col-span-4 md:row-span-2 glass-card rounded-xl p-8 group relative overflow-hidden reveal stagger-3">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform duration-500">memory</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">System Logic</h3>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-6 bg-surface-container-lowest font-mono p-5 text-[11px] text-primary/70 leading-relaxed border border-outline-variant/10">
            <div className="group-hover:text-primary transition-colors">
                <span className="text-secondary">class</span> AgenticLayer {"{"}<br/>
                &nbsp;&nbsp;<span className="text-secondary">async</span> execute(goal) {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-on-surface-variant">// Distributed reasoning...</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">const</span> plan = <span className="text-secondary">await</span> this.think(goal);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">return</span> plan.map(s =&gt; s.dispatch());<br/>
                &nbsp;&nbsp;{"}"}<br/>
                {"}"}
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Refining the orchestration of LLM-based agents. Making non-deterministic AI outputs behave reliably within strictly deterministic backend systems.
          </p>
        </div>
        
        {/* Hardware Lab Card */}
        <div className="md:col-span-6 lg:col-span-4 md:row-span-1 glass-card rounded-xl p-8 group reveal stagger-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-tertiary-container text-3xl group-hover:-rotate-12 transition-transform duration-500">precision_manufacturing</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Hardware Lab</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest/50 border border-outline-variant/10 group-hover:border-tertiary-container/30 transition-colors">
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider">Current Project</span>
              <span className="text-[10px] font-label text-tertiary-container uppercase font-bold">FPGA RISC-V CPU</span>
            </div>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Building custom compute modules from the gate level up. Understanding silicon helps build better high-level AI abstractions.
            </p>
          </div>
        </div>
        
        {/* Soundscapes Card */}
        <div className="md:col-span-6 lg:col-span-4 md:row-span-1 glass-card rounded-xl p-8 group reveal stagger-5 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform duration-500">album</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Soundscapes</h3>
          </div>
          <div className="flex gap-1.5 h-12 items-end mb-6">
            <div className="flex-1 bg-secondary rounded-full h-full opacity-40 animate-[pulse_1.5s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[60%] opacity-60 animate-[pulse_1.2s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[80%] opacity-80 animate-[pulse_1.8s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[40%] opacity-30 animate-[pulse_1.4s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[90%] opacity-90 animate-[pulse_1.1s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-full opacity-50 animate-[pulse_1.6s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[70%] opacity-70 animate-[pulse_1.3s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[50%] opacity-40 animate-[pulse_1.7s_infinite]"></div>
            <div className="flex-1 bg-secondary rounded-full h-[85%] opacity-75 animate-[pulse_1.2s_infinite]"></div>
          </div>
          <p className="text-on-surface-variant text-xs leading-relaxed">
            Producing ambient modular synth textures inspired by early sci-fi soundtracks. A sonic representation of complex systems in harmony.
          </p>
        </div>
      </div>
    </main>
  );
}

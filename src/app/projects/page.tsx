import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="parallax-layer absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-bloom pointer-events-none" data-depth="0.1"></div>
      <div className="parallax-layer absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-bloom pointer-events-none opacity-50" data-depth="0.2"></div>
      
      <header className="max-w-7xl mx-auto mb-20 relative z-10 reveal active">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block reveal stagger-1">Engineered Portfolio</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-on-surface mb-6 reveal stagger-2">
                Backend <br/><span className="gradient-text">&amp; AI.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg reveal stagger-3">
                Developing robust architectures and intelligent systems. Specializing in high-throughput infrastructure, agentic workflows, and LLM orchestration.
            </p>
          </div>
          <div className="hidden md:block reveal stagger-4">
            <div className="flex gap-2">
              <span className="px-4 py-2 rounded-full border border-outline-variant/20 font-label text-[0.65rem] uppercase tracking-widest bg-surface-container-high/40 backdrop-blur-md">Filter: All</span>
              <span className="px-4 py-2 rounded-full border border-outline-variant/20 font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Backend</span>
              <span className="px-4 py-2 rounded-full border border-outline-variant/20 font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer">AI / ML</span>
            </div>
          </div>
        </div>
      </header>
      
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-10">
        
        {/* Project Card: Agentic Workflow Orchestrator */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-lg glass-card reveal stagger-1">
          <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="a complex network diagram of intelligent nodes connecting and exchanging data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd-r6p5G4w5J9O-k_Z8L8S-f8_9z4E7J7m2n_1b9_3k_L_o_U_y_P_g_r_A_M_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_0_1_2_3_4_5_6_7_8_9" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-sm bg-secondary-container/40 text-on-secondary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">LangChain</span>
              <span className="px-3 py-1 rounded-sm bg-secondary-container/40 text-on-secondary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Python</span>
              <span className="px-3 py-1 rounded-sm bg-secondary-container/40 text-on-secondary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">LLMs</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-surface mb-2">Agentic Workflow Orchestrator</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl">An enterprise-grade system for orchestrating multi-agent LLM teams to solve complex tasks with autonomous feedback loops.</p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-fixed font-bold tracking-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-primary-container/20">
                View Technical Docs
            </button>
          </div>
        </div>
        
        {/* Project Card: Distributed Crawler System */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-lg glass-card reveal stagger-2">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" alt="abstract representation of a web crawler as a swarm of digital lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA39RdsJCVLuG7O7zh423RD1mKmp3EdFly5nUvAzHJJYxpNvT5pI3kmGSbG0qW0r2HVK1KjBGtiwkCNB21RoZMV49ZdE0fyhax5PJPJUoDqfCuWYdQdgQPZcFUBJrrLqUXxhF7vMKG68qQ7ZLbu_pV_bMwIs87pgXCi39kXYR5IGIzrYb6QjQEd_Bx1yYjDD0YF213_kjoNIPEMi8p2HtBEdQOS_QJRN8wk0UvIsG14FpCC_PsFpbjQYtC_TgssiQUQf5VZtSa4_cM" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/90 via-surface-container-high/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 rounded-sm bg-primary-container/20 text-primary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Go</span>
              <span className="px-3 py-1 rounded-sm bg-primary-container/20 text-primary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Kubernetes</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-2">Distributed Crawler</h2>
            <p className="text-on-surface-variant text-sm mb-6">High-performance scraper processing 10k+ pages per second with intelligent proxy rotation.</p>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-fixed font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500">
                View Architecture
            </button>
          </div>
        </div>
        
        {/* Project Card: High-Throughput API Gateway */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-lg glass-card reveal stagger-3">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" alt="a high-tech portal or gateway glowing with cyan energy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaySpOf0dlWgs54VawlYLZNsF5vgMXrda2ompckOCLMWtXuxrL11b8Rxn8bdXtU0sW2TOOC1haUpVjHhefBoFgMCnJrcysIlqtrkWz-uBk9_P-mOi0i3BYyA2VoR7exgUf_jSNcJ8uXpZqWbsiKG-xWEAgAd-kowDihnjFYGDi70BZXkZ7bcd3JSpUWqTxXvbRAHbn9MuAXsf5ced1ahHDauzZL3eGHvT9plWiMNxbmZdBsL1t1uhcFkaOqzGGy0gS2Xc2vca4_bM" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/90 via-surface-container-high/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 rounded-sm bg-primary-container/20 text-primary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Rust</span>
              <span className="px-3 py-1 rounded-sm bg-primary-container/20 text-primary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Redis</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-2">API Gateway</h2>
            <p className="text-on-surface-variant text-sm mb-6">Low-latency edge gateway with dynamic rate limiting and JWT verification at the frontier.</p>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-fixed font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-500">
                Explore Code
            </button>
          </div>
        </div>
        
        {/* Project Card: Autonomous Research Agent */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-lg glass-card reveal stagger-4">
          <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="a digital eye or core glowing with intense white and primary cyan light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2By9BHPtTdzIr79wjzAuw8610f8RhxZyTtztwZdqDqe3P58Vst8PHAPPMQ8T9s1xoyfGS3y-FSBBS0xizf8kSywqQV3EySKwJv1kpDGPJ-SSoyzmFpTkS_bRiXMehnbNs_TeLBoGfPZHmBXAge-a2efJaFdrDuosyEm5z7clNpNCie8tEg7xlL-MSvKW_33ruPTE_vaZHdSIuFw26FnN3xsy_FbTcli2blzerNBHFt7r9iA4wuNzsYXnFFBbrsDdqbJrPPu9pYfc" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-sm bg-secondary-container/40 text-on-secondary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">PyTorch</span>
              <span className="px-3 py-1 rounded-sm bg-secondary-container/40 text-on-secondary-container font-label text-[0.6rem] uppercase tracking-wider backdrop-blur-md">Vector DB</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-surface mb-2">Autonomous Research Agent</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl">Self-correcting AI agent that performs deep-dive research and generates structured reports from the web.</p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-fixed font-bold tracking-tight opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-primary-container/20">
                Watch Live Demo
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-32 text-center relative z-10 reveal stagger-5">
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6">Need a robust <span className="gradient-text">backbone?</span></h3>
        <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">I'm currently accepting new system design and AI integration projects for early 2025.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className="px-10 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-fixed font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all transform hover:scale-105 active:scale-95">Start a Conversation</Link>
          <button className="px-10 py-4 rounded-full border border-outline-variant text-on-surface font-bold text-lg hover:bg-surface-bright transition-all active:scale-95">
              Technical Resume
          </button>
        </div>
      </section>
    </main>
  );
}

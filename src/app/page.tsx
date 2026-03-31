import Link from "next/link";
import HeroMesh from "@/components/HeroMesh";

export default function Home() {
  return (
    <main className="relative pt-20">
      <section className="relative min-h-[921px] flex items-center px-8 max-w-7xl mx-auto">
        <div className="parallax-layer absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" data-depth="0.1"></div>
        <div className="parallax-layer absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" data-depth="0.2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10 reveal active">
            <div className="space-y-4">
              <span className="font-label text-[#edb1ff] tracking-[0.2em] uppercase text-xs font-bold px-4 py-1.5 rounded-full border border-[#edb1ff]/20 bg-[#edb1ff]/5 inline-block">
                Alex Nova // Agentic AI Architect
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] font-headline reveal stagger-1">
                Engineering <br/>
                <span className="gradient-text">Autonomous</span> <br/>
                Intelligence.
              </h1>
            </div>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed reveal stagger-2">
              Crafting robust, distributed backend systems and self-optimizing AI agents that bridge the gap between static code and cognitive automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal stagger-3">
              <button className="gradient-bg text-on-primary-fixed px-10 py-4 rounded-full font-bold text-lg transition-all active:scale-95 bloom-effect">
                See My Architecture
              </button>
              <Link href="/contact" className="bg-surface-container-highest/40 backdrop-blur-md ghost-border text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest/60 transition-all active:scale-95 text-center flex items-center justify-center">Connect</Link>
            </div>
            <div className="flex items-center gap-8 pt-12 reveal stagger-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-headline">12+</span>
                <span className="font-label text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Core Systems</span>
              </div>
              <div className="h-10 w-px bg-outline-variant/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-headline">0.4s</span>
                <span className="font-label text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Avg. Latency</span>
              </div>
              <div className="h-10 w-px bg-outline-variant/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-headline">99.9%</span>
                <span className="font-label text-[0.65rem] tracking-widest text-on-surface-variant uppercase">Agent Uptime</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px] reveal stagger-2">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary/10 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full glass-card rounded-xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
                <HeroMesh />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-lg flex items-center justify-between pointer-events-none z-20">
                  <div className="flex flex-col">
                    <span className="font-label text-[0.5rem] tracking-widest text-[#00d4ff]">NODE_STATUS</span>
                    <span className="font-headline font-bold text-sm tracking-tight">STABLE_MESH_SYNC</span>
                  </div>
                  <span className="material-symbols-outlined text-primary-container animate-pulse">sensors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 glass-card p-10 rounded-lg group reveal stagger-1">
            <div className="flex flex-col h-full justify-between gap-12">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">database</span>
                <h3 className="text-3xl font-bold font-headline mb-4">Scalable Backend Architecture</h3>
                <p className="text-on-surface-variant max-w-lg">Designing high-concurrency distributed systems that handle millions of requests per second with sub-millisecond precision. Kubernetes-native and event-driven.</p>
              </div>
              <div className="flex gap-4">
                <span className="px-4 py-1.5 rounded-full ghost-border font-label text-[0.65rem] uppercase tracking-widest bg-surface-container-lowest">Go</span>
                <span className="px-4 py-1.5 rounded-full ghost-border font-label text-[0.65rem] uppercase tracking-widest bg-surface-container-lowest">Rust</span>
                <span className="px-4 py-1.5 rounded-full ghost-border font-label text-[0.65rem] uppercase tracking-widest bg-surface-container-lowest">gRPC</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 glass-card p-10 rounded-lg border-l-primary-container/30 border-l-2 group reveal stagger-2">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">psychology</span>
            <h3 className="text-2xl font-bold font-headline mb-4">Agentic AI</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Developing autonomous LLM agents capable of complex tool usage, long-term memory, and self-correction protocols.</p>
          </div>

          <div className="md:col-span-4 glass-card p-8 rounded-lg group reveal stagger-3">
            <span className="material-symbols-outlined text-primary-container mb-4">cloud_done</span>
            <h4 className="font-bold font-headline mb-2">Cloud Native</h4>
            <p className="text-sm text-on-surface-variant">Serverless and edge optimization strategies for global distribution.</p>
          </div>
          
          <div className="md:col-span-4 glass-card p-8 rounded-lg group reveal stagger-4">
            <div className="h-2 w-12 bg-primary-container rounded-full mb-6"></div>
            <h4 className="font-bold font-headline mb-2">Observability</h4>
            <p className="text-sm text-on-surface-variant">Deep telemetry and logging pipelines for autonomous monitoring.</p>
          </div>
          
          <div className="md:col-span-4 glass-card p-8 rounded-lg overflow-hidden relative group reveal stagger-5">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">security</span>
            </div>
            <h4 className="font-bold font-headline mb-2">Hardened Security</h4>
            <p className="text-sm text-on-surface-variant">Zero-trust architecture integration at the agent-to-service boundary.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

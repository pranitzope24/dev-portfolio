import HeroMesh from "@/components/HeroMesh";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative pt-20">
      <div className="absolute top-0 left-0 w-full h-[100vh] min-h-[921px] -z-10 overflow-hidden pointer-events-none">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>
      <section className="relative z-10 min-h-[921px] flex items-center px-8 max-w-7xl mx-auto">
        <div className="parallax-layer absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" data-depth="0.1"></div>
        <div className="parallax-layer absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" data-depth="0.2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10 reveal active">
            <div className="space-y-4">
              <span className="font-label text-[#edb1ff] tracking-[0.2em] uppercase text-xs font-bold px-4 py-1.5 rounded-full border border-[#edb1ff]/20 bg-[#edb1ff]/5 inline-block">
                Pranit Zope // Backend and AI Engineer
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
          
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center gap-8 min-h-[500px] reveal stagger-2">
            <div className="relative w-full aspect-[4/5] max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary/10 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full glass-card rounded-xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
                <HeroMesh />
                {/* Terminal Box Segment Overlaid on Mesh */}
                <div className="group absolute bottom-6 left-6 right-6 surface_container_highest bg-[#2a2a2a]/80 backdrop-blur-md rounded border border-[#3c494e]/40 p-4 font-mono shadow-[0_4px_30px_-10px_rgba(0,212,255,0.2)] z-20 cursor-default">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#feb528]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff]"></div>
                  </div>
                  <div className="space-y-1.5 text-left font-mono tracking-wide text-xs leading-tight opacity-75 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-500">
                    <div className="flex text-[#a8e8ff]">
                      <span className="opacity-80 shrink-0">pranit-zope:~$</span>
                      <span className="ml-2">deploy-neural-mesh</span>
                    </div>
                    <div className="text-[#bbc9cf]">
                      Init spatial parameters...
                    </div>
                    <div className="text-[#edb1ff] font-bold break-all">
                      Success: Mesh established [0x4F2...]
                    </div>
                    <div className="flex text-[#a8e8ff] mt-1">
                      <span className="opacity-80 shrink-0">pranit-zope:~$</span>
                      <span className="ml-2 animate-pulse font-bold">|</span>
                    </div>
                  </div>
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

      {/* Feature Section: The Architecture */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-secondary/5 via-secondary/5 to-transparent blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-headline-md text-secondary-fixed-dim mb-4 uppercase font-label tracking-widest">Architectural Pillars</h2>
              <p className="text-5xl font-black tracking-tight text-on-surface leading-tight">Constructing resilient foundations for an automated future.</p>
            </div>
            <div className="font-mono text-xs text-primary-container/60 flex items-center gap-2 mb-2">
              <span className="w-12 h-[1px] bg-primary-container/20"></span>
              SCROLL_FOR_INTEL
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-6 group">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 relative">
                <img alt="Project Gallery Visualization" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="A high-tech 3D grid or gallery of translucent server racks and data structures, glowing with neon blue and violet accents. Minimalist and sleek, representing a curated collection of backend and AI project infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YrWAPp7FMwVckhtZ9cUY2w137IPW1ljv-O-V-zw7U2VPM_T9OrZqBbO9NZHGIvbMPE2bStbEr45zn8wzJY2hx-ckPXA4GlL4P7Je3QIJI7kiMtL51VTcZ-Sj3mdAelMgyayRk6oiPUcGUth7-ax29sg8vfrGvCweYzp0it_GiyD35SCntLvD1tAimyM5tpvtLhnUxGMsiInzWl_wbdtJfHXA-FAc3RHvYqxcHPgboQA6NbAOavqgWME-B_sTbGdhtySc0fry-_I" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none"></div>
              </div>
              <h4 className="text-2xl font-bold text-on-surface">Project Gallery</h4>
              <p className="text-on-surface-variant leading-relaxed">Highly available, low-latency edge computing clusters designed for real-time model inference at global scale.</p>
              <Link className="inline-flex items-center gap-2 text-primary-fixed hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest font-label" href="/projects">
                Explore Protocols <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Feature 2 */}
            <div className="space-y-6 group mt-10">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 relative">
                <img alt="Career Journey Visualization" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="A futuristic, high-fidelity 3D abstract visualization of a career timeline or data path, with glowing nodes and flowing connections in electric blue and vibrant violet on a dark obsidian background. Cinematic lighting, shallow depth of field, representing professional growth and journey." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjrur4665qRr5GVg9N9b8FHvH-W0hcr-YNO5P9hPn5Stmux6Vp9Zd9BJ6oNAk87Wc_Q4-p7a3RTsJUV-XlcLoHARjOi_kvbB9IiuOb7T4zuedwO74msau8np7c6H-0GZeRG-fwTTqQ2In008vf8JKwPM-rXSxSx-fvN4449toRzmZvUzIxtMDJ4VHUGXUtNAu-UbaCJcQ0yEMly0KySJC_KSDtfHkfCNKX8G18QAPiFW4TM6FClApuJAM9O3KWrTalKMACsC8hOyc" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none"></div>
              </div>
              <h4 className="text-2xl font-bold text-on-surface">Career Journey</h4>
              <p className="text-on-surface-variant leading-relaxed">Rust-based backend services engineered for zero-trust security and sub-millisecond response times under heavy load.</p>
              <Link className="inline-flex items-center gap-2 text-primary-fixed hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest font-label" href="/about">
                Architecture Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            {/* Feature 3 */}
            <div className="space-y-6 group mt-20">
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 relative">
                <img alt="The Architect Visualization" className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="An abstract 3D representation of a solitary, glowing geometric structure floating in a deep space void. Sharp, crystalline edges with electric blue and violet light leaks, symbolizing the precision of system design and the 'Architect' persona." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHoMO52J84c8wkxmAKdc_VZcCGP4M1SrIAJ3bjKhu1t_aIma8ag1fnSatoEkK-3Ko3EaIfJkel1n-Zm096iwIb37C_E89mrgRaBRQgk8r7c8WFTf1IKo0ot6YkTNUOgLF2bpLWARX3dFy8ouGxaxJme3rFgrHYAdeVdPojzCP2vXOoFDgx0vJfInAfCz9DNGrz1cAX9a_uSteywMh2wn0nerKUBueo3ukNcDDLRKOo5hleDpR7k6zkNWEs6TrwUJ0wljzUSP75oGQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent pointer-events-none"></div>
              </div>
              <h4 className="text-2xl font-bold text-on-surface">The Architect</h4>
              <p className="text-on-surface-variant leading-relaxed">Multi-cloud deployment strategies utilizing custom Kubernetes operators for seamless vertical and horizontal scaling.</p>
              <Link className="inline-flex items-center gap-2 text-primary-fixed hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest font-label" href="/work">
                Scale Documentation <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary-container/5 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface">Ready to transcend the <span className="gradient-text">standard?</span></h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Currently accepting high-impact architectural challenges and advisory roles for AI-first enterprises.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-on-surface text-surface-container-lowest px-12 py-5 rounded-full font-black text-xl hover:bg-primary transition-all">
              Initialize Contact
            </Link>
            <button className="glass-panel px-12 py-5 rounded-full font-black text-xl text-on-surface border border-outline-variant/30 hover:bg-surface-bright/50 transition-all">
              Fetch Resumé
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

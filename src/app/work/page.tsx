import Link from "next/link";

export default function Work() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">
      <section className="mb-24 relative reveal active">
        <div className="parallax-layer absolute -top-20 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" data-depth="0.1"></div>
        <div className="relative z-10">
          <p className="font-label text-secondary uppercase tracking-[0.3em] text-[0.75rem] mb-4">Core Systems &amp; Logic</p>
          <h1 className="text-[3.5rem] font-black leading-none tracking-[-0.04em] text-on-surface mb-6 max-w-3xl reveal stagger-1">
            Architecting the neural backbone of the <span className="bg-gradient-to-r from-primary-container to-secondary bg-clip-text text-transparent">autonomous deep.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed reveal stagger-2">
            A chronicle of engineering distributed systems and agentic AI infrastructures within high-concurrency interstellar environments.
          </p>
        </div>
      </section>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container/40 via-secondary/20 to-transparent"></div>
        
        {/* Experience Card 1 */}
        <div className="relative mb-20 md:flex items-center justify-between group reveal stagger-1">
          <div className="hidden md:block w-[45%] text-right pr-12">
            <span className="font-label text-secondary text-sm tracking-widest bg-secondary-container/10 px-4 py-2 rounded-full ghost-border">2022 — PRESENT</span>
          </div>
          <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 rounded-full bg-primary-container shadow-[0_0_15px_#00d4ff]"></div>
          <div className="w-full md:w-[45%] pl-8 md:pl-0 md:ml-12">
            <div className="glass-card p-8 rounded-lg bloom-effect group-hover:border-primary-container/30">
              <div className="md:hidden mb-4">
                <span className="font-label text-secondary text-xs tracking-widest uppercase">2022 — PRESENT</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Lead Backend Architect</h3>
              <p className="text-primary-container font-label text-sm uppercase tracking-wider mb-6">Galactic Soft</p>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Designed a distributed orchestration layer handling 500k+ concurrent agentic workflows across planetary nodes.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Implemented a high-performance gRPC API mesh reducing cross-cluster latency by 65%.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Pioneered an autonomous "Self-Healing" agent framework for proactive infrastructure management in deep space.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="relative mb-20 md:flex flex-row-reverse items-center justify-between group reveal stagger-2">
          <div className="hidden md:block w-[45%] text-left pl-12">
            <span className="font-label text-secondary text-sm tracking-widest bg-secondary-container/10 px-4 py-2 rounded-full ghost-border">2019 — 2022</span>
          </div>
          <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_#edb1ff]"></div>
          <div className="w-full md:w-[45%] pl-8 md:pl-0 md:mr-12">
            <div className="glass-card p-8 rounded-lg bloom-effect group-hover:border-secondary/30">
              <div className="md:hidden mb-4">
                <span className="font-label text-secondary text-xs tracking-widest uppercase">2019 — 2022</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Senior AI Engineer</h3>
              <p className="text-secondary font-label text-sm uppercase tracking-wider mb-6">Nebula Intelligence</p>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                <li className="flex gap-3">
                  <span className="text-primary-container shrink-0">•</span>
                  Developed RAG-based (Retrieval-Augmented Generation) autonomous agents for real-time telemetry analysis.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-container shrink-0">•</span>
                  Architected a petabyte-scale vector database system for efficient stellar data querying and pattern matching.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-container shrink-0">•</span>
                  Optimized LLM inference pipelines using custom CUDA kernels, increasing throughput by 4x.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Card 3 */}
        <div className="relative mb-20 md:flex items-center justify-between group reveal stagger-3">
          <div className="hidden md:block w-[45%] text-right pr-12">
            <span className="font-label text-secondary text-sm tracking-widest bg-secondary-container/10 px-4 py-2 rounded-full ghost-border">2017 — 2019</span>
          </div>
          <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 rounded-full bg-primary-container shadow-[0_0_15px_#00d4ff]"></div>
          <div className="w-full md:w-[45%] pl-8 md:pl-0 md:ml-12">
            <div className="glass-card p-8 rounded-lg bloom-effect group-hover:border-primary-container/30">
              <div className="md:hidden mb-4">
                <span className="font-label text-secondary text-xs tracking-widest uppercase">2017 — 2019</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Backend Systems Engineer</h3>
              <p className="text-primary-container font-label text-sm uppercase tracking-wider mb-6">Starry Sky Infrastructure</p>
              <ul className="space-y-4 text-on-surface-variant text-sm">
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Engineered robust event-driven microservices using Go and Kafka for real-time satellite telemetry ingestion.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Designed scalable Postgres schemas and caching layers reducing database CPU utilization by 40%.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">•</span>
                  Integrated OAuth2/OIDC security layers across 20+ internal services for granular access control.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 text-center relative reveal stagger-4">
        <div className="parallax-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[100px] rounded-full pointer-events-none" data-depth="0.15"></div>
        <div className="relative z-10">
          <h2 className="text-[1.75rem] font-bold text-secondary-fixed-dim mb-6">Interface with the system core.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="px-10 py-4 rounded-full bg-gradient-to-br from-primary-container to-secondary text-on-primary font-bold transition-transform hover:scale-105">
                Request Technical Manifest
            </Link>
            <button className="px-10 py-4 rounded-lg bg-surface-container-highest ghost-border text-on-surface font-medium hover:bg-surface-bright transition-all">
                System Architecture
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

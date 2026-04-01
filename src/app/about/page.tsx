"use client";
import { Globe } from "@/components/ui/cobe-globe";
import { GLOBE_ARCS, GLOBE_MARKERS, INDIAN_ARCS, INDIAN_MARKERS } from "@/constants/globe";
import { useMemo, useState } from "react";

export default function About() {
  const [focusMode, setFocusMode] = useState<'india' | null>(null);

  const activeMarkers = useMemo(() => {
    if (focusMode === 'india') {
      return INDIAN_MARKERS;
    }
    return GLOBE_MARKERS;
  }, [focusMode]);

  const activeArcs = useMemo(() => {
    if (focusMode === 'india') {
      return INDIAN_ARCS;
    }
    return GLOBE_ARCS;
  }, [focusMode]);

  const handleMarkerClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === 'mumbai' || id === 'delhi') {
      setFocusMode('india');
    }
  };

  const handleGlobeClick = () => {
    setFocusMode(null);
  };

  const focusAngles: [number, number] | undefined = focusMode === 'india' ? [3.34, 0.38] : undefined;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative">
      <div className="parallax-layer absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-[0.03] blur-[120px] rounded-full pointer-events-none" data-depth="0.1"></div>
      <div className="parallax-layer absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-[0.03] blur-[120px] rounded-full pointer-events-none" data-depth="0.2"></div>
      
      <header className="mb-16 reveal active">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-outline-variant/20 bg-surface-container-low">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Personnel File // P. ZOPE</span>
        </div>
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter font-headline text-on-surface leading-[0.9] mb-6 relative z-10">
            BEYOND THE CODE:<br/>THE ARCHITECT'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-secondary">MATRIX.</span>
          </h1>
        </div>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
          Specializing in high-concurrency backend systems and the frontier of agentic AI. I build the logic that lives in the shadows of the interface, engineering systems that think, learn, and scale.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* About Me Profile Sidebar */}
        <div className="md:col-span-5 lg:col-span-4 md:row-span-4 glass-card rounded-xl overflow-hidden flex flex-col group reveal stagger-1">
          <div className="h-72 sm:h-80 overflow-hidden relative shrink-0">
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

        {/* Global Expedition */}
        <div className="md:col-span-7 lg:col-span-8 md:row-span-3 glass-card rounded-xl p-8 flex flex-col gap-6 group overflow-hidden relative reveal stagger-2">
          {/* Top Section: Text */}
          <div className="flex flex-col justify-start z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary-container text-4xl group-hover:rotate-12 transition-transform duration-500">public</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-widest text-on-surface">Global Expedition</h3>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed mb-4">
              Navigating the intersections of technology and culture across the globe. From the neon-lit megalopolises of East Asia to the silicon-hubs of Northern Europe.
            </p>
            
          </div>
          {/* Bottom Section: Globe */}
          <div className="flex-1 w-full flex items-center justify-center shrink-0 min-h-[300px] -mt-12 z-0">
            <div className="w-[120%] max-w-[600px] aspect-square relative flex items-center justify-center origin-center">
              <Globe
                markers={activeMarkers}
                arcs={activeArcs}
                markerColor={[0, 0.83, 1]}
                baseColor={[1, 1, 1]}
                arcColor={[0, 0.83, 1]}
                glowColor={[0.05, 0.05, 0.05]}
                dark={1}
                mapBrightness={10}
                markerSize={focusMode === 'india' ? 0.01 : 0.03}
                arcWidth={focusMode === 'india' ? 0.35 : 0.5}
                markerElevation={0.015}
                mapSamples={focusMode === 'india' ? 35000 : 16000}
                focusAngles={focusAngles}
                zoom={focusMode === 'india' ? 4.3 : 1}
                highlightedMarkerIds={focusMode === null ? ['delhi', 'mumbai'] : []}
                onMarkerClick={handleMarkerClick}
                onGlobeClick={handleGlobeClick}
              />
            </div>
          </div>
        </div>
        
        {/* Robotics & Unmanned Systems */}
        <div className="md:col-span-7 lg:col-span-8 md:row-span-2 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 group overflow-hidden relative reveal stagger-3" style={{minHeight: '0'}}>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary-container text-3xl group-hover:animate-pulse">settings_input_antenna</span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Robotics &amp; Unmanned Systems</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              A deep-rooted passion for building and flying custom FPV drones. My focus lies at the synergy between low-level hardware control and autonomous software layers, exploring how edge computing can enable real-time spatial awareness and complex flight maneuvers in unmanned platforms.
            </p>
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-surface-container-high rounded border border-outline-variant/20 text-[10px] font-label text-primary uppercase">Custom Builds</div>
              <div className="px-3 py-1 bg-surface-container-high rounded border border-outline-variant/20 text-[10px] font-label text-secondary uppercase">Acrobatic Flight</div>
            </div>
          </div>
          <div className="w-full md:w-64 h-64 md:h-auto rounded-lg overflow-hidden border border-outline-variant/10 shadow-2xl shrink-0">
            <img alt="High-fidelity 3D engineering-focused FPV drone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnltBGaPrxek4vfJMWfKqefmZtHMwoC5OlqNYTHXqiJ3oG7_ad8SIsv85SA7c86A1iX9kJsekfAk6EBTMOSAoUyHtJoxmz-TAOQWRFT-6gGZiXQqZvPBAH8Nx8HwDPMQwpCezkyeJZaZ6JdwwpiX6EPc3qahlwfEjGiCb_WSBUibnC_gA9W_EVEoH_g7HHXS4EPKzK62D_jrVz9twTp3qUhn6OTgf2q4lNkW0ZAR_j8TF6C4YA7hmpB4TKxYu3TdxJUWzSZcbKQ_U" />
          </div>
        </div>

        {/* System Logic */}
        <div className="md:col-span-6 lg:col-span-4 md:row-span-2 glass-card rounded-xl p-8 group relative overflow-hidden reveal stagger-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform duration-500">memory</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">System Logic</h3>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 bg-surface-container-lowest font-mono p-4 text-[10px] text-primary/70 leading-relaxed border border-outline-variant/10">
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
            Making non-deterministic AI outputs behave reliably within strictly deterministic backend systems.
          </p>
        </div>

        {/* Commercial Aviation */}
        <div className="md:col-span-7 lg:col-span-4 md:row-span-2 glass-card rounded-xl p-8 group relative overflow-hidden reveal stagger-5">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-tertiary-container text-3xl group-hover:-rotate-12 transition-transform duration-500">flight_takeoff</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Commercial Aviation</h3>
          </div>
          <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low">
            <img alt="Commercial airliner at a modern airport terminal at night" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCNv9TGL0bSW8s2gKmIw-9hw4VHnpuB1r2Aa9d0nW54_xXOws-bapxjUk6JO4-J5oLdVds_SOykCaQqvL6h8SIvrAHEZ8ohzIOnYv2KZkE9gaX-rbdZFuFFmcr6H51FBqQlp7kiC1W4vCnA4re_DpcoDcBFp7WONUhy5NetDuzsqHjYqGKeMQTuzYZk2IUrXKAOngybmwghGd1_G-pYVVk-huTYoEpuCatTu6xsPoC9IDliMvtXktpjo5fP4RQ9T5s83bEop-9IU" />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Fascinated by the immense scale and intricate global logistics of modern airline networks. From fleet optimization to the physics of wide-body aircraft, I study how airlines move millions across the globe with precision.
          </p>
        </div>

        {/* Digital Frontiers */}
        <div className="md:col-span-6 lg:col-span-4 md:row-span-2 glass-card rounded-xl p-8 group relative overflow-hidden reveal stagger-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform duration-500">sports_esports</span>
            <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">Digital Frontiers</h3>
          </div>
          <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden border border-outline-variant/10 bg-surface-container-low">
            <img alt="Futuristic controller 3D visual" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhYB1JQ3VS3UQORPFwFcboAjqMIm1XiIiwRQJfpTGm_kHnnwEay9Qu8JXFQ6ts_1cvu8s6fmH2XTRl982guKZ52863kg-8YDv1Icqj2D-8zB_mgoJwuRLl-7tv0w0IWNSoJLjb9EDw3iP6dGpQhjPRY6eSAllWpBDfJ8mMtlpNSqD-j6hYtfzLUDj_WIbHIULuPRoqEazW3XzTD5OZJJdWBI1Hejv7DMSZ_zbQlTy5X_mGSMVy1ymPeVLDhQCPS1MXpjsuva7UsRk" />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Passionate about playing and exploring high-fidelity virtual worlds. I'm fascinated by the technical depth of game engines and the emergent storytelling found in massive multiplayer environments.
          </p>
        </div>
      </div>
    </main>
  );
}

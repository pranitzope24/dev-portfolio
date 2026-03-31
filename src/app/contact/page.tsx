"use client";

import Link from "next/link";
import ContactMesh from "@/components/ContactMesh";

export default function Contact() {
  return (
    <main className="relative min-h-screen pt-32 pb-24">
      <div className="parallax-layer absolute top-1/4 -left-20 w-[500px] h-[500px] bloom-effect pointer-events-none" data-depth="0.1"></div>
      <div className="parallax-layer absolute bottom-1/4 -right-20 w-[600px] h-[600px] bloom-effect pointer-events-none opacity-50" data-depth="0.2"></div>
      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        
        <div className="mb-20 reveal active">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Initialization</span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-[-0.04em] text-on-surface leading-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-container to-secondary">Touch.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light reveal stagger-1">
              Let's Build Something Galactic. Whether you have a specific project in mind or just want to explore the possibilities of the digital void.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-12 reveal stagger-1">
            <div className="space-y-8">
              <div>
                <h3 className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant mb-4">Communication Core</h3>
                <a className="text-2xl font-headline font-bold text-on-surface hover:text-primary-container transition-colors duration-300" href="mailto:hello@galactichorizon.com">hello@galactichorizon.com</a>
              </div>
              <div>
                <h3 className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant mb-4">Operational Base</h3>
                <p className="text-2xl font-headline font-bold text-on-surface">San Francisco, CA</p>
                <p className="text-on-surface-variant mt-2">Remote Work Available Globally</p>
              </div>
              <div>
                <h3 className="font-label text-[0.75rem] uppercase tracking-widest text-on-surface-variant mb-4">Neural Networks</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link className="px-6 py-3 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/20 hover:border-primary/50 transition-all text-sm font-label uppercase tracking-widest hover:bg-primary/5" href="#">LinkedIn</Link>
                  <Link className="px-6 py-3 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/20 hover:border-primary/50 transition-all text-sm font-label uppercase tracking-widest hover:bg-primary/5" href="#">GitHub</Link>
                  <Link className="px-6 py-3 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-outline-variant/20 hover:border-primary/50 transition-all text-sm font-label uppercase tracking-widest hover:bg-primary/5" href="#">Dribbble</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group rounded-lg overflow-hidden h-72 glass-card">
              <ContactMesh />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-label text-[0.6rem] uppercase tracking-widest text-primary-container mb-1">Signal Status</p>
                <p className="text-sm font-medium flex items-center gap-2">
                    Ready for transmission
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                </p>
              </div>
              
              <div className="absolute top-6 right-6 p-2 bg-surface/40 backdrop-blur-md rounded-md border border-outline-variant/10 pointer-events-none z-20">
                <span className="material-symbols-outlined text-primary-container text-sm animate-spin" style={{ animationDuration: '3s' }}>settings_input_antenna</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal stagger-2">
            <div className="p-8 md:p-12 rounded-lg glass-card relative">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors">Identity</label>
                    <div className="form-input-focus transition-all rounded-DEFAULT overflow-hidden">
                      <input className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-[1rem] p-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/50 transition-all duration-300" placeholder="Full Name" type="text" />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors">Frequency</label>
                    <div className="form-input-focus transition-all rounded-DEFAULT overflow-hidden">
                      <input className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-[1rem] p-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/50 transition-all duration-300" placeholder="Email Address" type="email" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors">The Mission</label>
                  <div className="form-input-focus transition-all rounded-DEFAULT overflow-hidden">
                    <textarea className="w-full bg-surface-container-lowest/50 border border-outline-variant/20 rounded-[1rem] p-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none" placeholder="Your Message..." rows={6}></textarea>
                  </div>
                </div>
                <button className="group relative w-full py-5 px-8 bg-gradient-to-r from-primary-container to-secondary rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,212,255,0.4)] active:scale-[0.98]" type="submit">
                  <span className="relative z-10 font-headline font-black text-on-primary-fixed uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                      Send Message
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">send</span>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </form>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-secondary/20 rounded-bl-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

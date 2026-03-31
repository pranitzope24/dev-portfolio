"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-[#3c494e]/20 shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-black tracking-tighter text-[#e5e2e1] font-headline">
          Celestial.Dev
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors font-headline ${
                  isActive
                    ? "text-[#00d4ff] font-bold border-b-2 border-[#00d4ff] pb-1"
                    : "text-[#bbc9cf] hover:text-[#00d4ff]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center text-[#bbc9cf] hover:text-[#00d4ff] transition-all active:scale-95">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <Link
            href="/contact"
            className="hidden md:flex items-center justify-center gradient-bg text-on-primary-fixed px-8 py-2.5 rounded-full font-bold transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.3)] text-sm"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
}

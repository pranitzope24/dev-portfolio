"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full px-2 group">
        <div className={`mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12 ${isScrolled ? "bg-[#131313]/80 max-w-4xl rounded-full border border-[#3c494e]/40 backdrop-blur-xl lg:px-8 shadow-[0_4px_30px_-10px_rgba(0,212,255,0.1)]" : "bg-[#131313]/60 backdrop-blur-xl border-x-0 border-t-0 border-b border-[#3c494e]/20 shadow-[0_0_20px_rgba(0,212,255,0.05)] max-w-full mt-0 px-8"}`}>
          <div className="relative flex flex-wrap items-center justify-between h-20 transition-all duration-300">
            <Link href="/" className="flex items-center gap-3 group/logo">
              <Image src="/logo.png" alt="Celestial.Dev Logo" width={32} height={32} className="object-contain" />
              <div className="text-xl font-black tracking-tighter text-[#e5e2e1] font-headline group-hover/logo:text-[#00d4ff] transition-colors duration-300">
                Celestial.Dev
              </div>
            </Link>
        
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
        </div>
      </nav>
    </header>
  );
}

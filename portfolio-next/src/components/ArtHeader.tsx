"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ArtHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 py-5 bg-[#070709]/75 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group text-decoration-none">
          <span className="logo-brand text-lg sm:text-[1.18rem] text-white group-hover:text-[#00f2fe] transition-colors">
            BIJΣПDΛЯ
          </span>
          <span className="font-sans text-xs text-[#00f2fe] tracking-wider">
            / ARTWORKS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-[0.85rem] tracking-[1px] uppercase">
          <a href="#hero" className="text-white/70 hover:text-white transition-colors">
            Exhibition
          </a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
            Collection (12)
          </a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            About
          </a>
          <Link
            href="/portfolio"
            className="text-[#00f2fe] border border-[#00f2fe]/30 px-4 py-1.5 rounded-full text-xs hover:bg-[#00f2fe]/15 hover:text-white hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all font-sans"
          >
            Portfolio →
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070709] border-b border-white/10 px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-widest uppercase">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white">Exhibition</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white">Collection (12)</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white">About</a>
          <Link href="/" className="text-[#00f2fe] font-bold">Portfolio →</Link>
        </div>
      )}
    </header>
  );
}

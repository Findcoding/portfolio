"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SreNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/portfolio" className="flex items-center gap-1 text-[#00f2fe] font-sans font-bold text-lg hover:opacity-90 transition-opacity">
          <span className="text-white/60 font-mono">&lt;</span>
          <span className="logo-brand text-[#ffffff] text-lg">BIJΣПDΛЯ</span>
          <span className="text-white/60 font-mono">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-white/70 tracking-wider">
          <a href="#about" className="hover:text-[#00f2fe] transition-colors">About</a>
          <a href="#pipeline" className="hover:text-[#00f2fe] transition-colors">Experience</a>
          <a href="#education" className="hover:text-[#00f2fe] transition-colors">Education</a>
          <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Tech Stack</a>
          <a href="#certifications" className="hover:text-[#00f2fe] transition-colors">Certifications</a>
          <a href="#terminal" className="hover:text-[#00f2fe] transition-colors">Terminal</a>
          <a href="#projects" className="hover:text-[#00f2fe] transition-colors">Projects</a>
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00f2fe]/20 to-[#4facfe]/20 border border-[#00f2fe]/40 text-white hover:border-[#00f2fe] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all font-bold"
          >
            Artworks 📷
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f] px-6 py-4 flex flex-col gap-4 font-mono text-sm text-white/80">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Dashboard</a>
          <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Pipeline</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Education</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Tech Stack</a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Certifications</a>
          <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Terminal</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2fe]">Projects</a>
          <Link href="/artworks" onClick={() => setMobileMenuOpen(false)} className="text-[#00f2fe] font-bold">
            Artworks 📷
          </Link>
        </div>
      )}
    </nav>
  );
}

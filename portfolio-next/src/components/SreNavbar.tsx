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
        <div className="hidden lg:flex items-center gap-5 font-sans text-[0.78rem] tracking-[1px] uppercase">
          <a href="#about" className="text-white/70 hover:text-[#00f2fe] transition-colors">ABOUT</a>
          <a href="#pipeline" className="text-white/70 hover:text-[#00f2fe] transition-colors">EXPERIENCE</a>
          <a href="#education" className="text-white/70 hover:text-[#00f2fe] transition-colors">EDUCATION</a>
          <a href="#skills" className="text-white/70 hover:text-[#00f2fe] transition-colors">TECH STACK</a>
          <a href="#certifications" className="text-white/70 hover:text-[#00f2fe] transition-colors">CERTIFICATIONS</a>
          <a href="#terminal" className="text-white/70 hover:text-[#00f2fe] transition-colors">TERMINAL</a>
          <a href="#projects" className="text-white/70 hover:text-[#00f2fe] transition-colors">PROJECTS</a>
          <Link
            href="/"
            className="group relative inline-flex items-center h-[2.05em] pl-[0.85em] pr-[2.55em] bg-[#00f2fe] text-[#070709] font-sans text-[0.72rem] font-bold tracking-[1px] uppercase rounded-[0.75em] border-none shadow-[0_0_12px_rgba(0,242,254,0.35)] overflow-hidden cursor-pointer no-underline select-none transition-all duration-300"
          >
            <span>ARTWORKS</span>
            <div className="absolute right-[0.18em] flex items-center justify-center h-[1.68em] w-[1.68em] ml-[0.7em] bg-[#070709] rounded-[0.6em] shadow-[0.1em_0.1em_0.4em_0.15em_rgba(0,242,254,0.3)] transition-all duration-300 group-hover:w-[calc(100%-0.36em)] group-active:scale-95 z-10">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[0.9em] h-[0.9em] text-[#00f2fe] transition-transform duration-300 group-hover:translate-x-[0.1em] shrink-0"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
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
        <div className="lg:hidden bg-[#0a0a0f] px-6 py-4 flex flex-col gap-4 font-mono text-sm text-white/80">
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

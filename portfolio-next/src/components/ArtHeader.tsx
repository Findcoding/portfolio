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
        <nav className="hidden md:flex items-center gap-6 font-sans text-[0.78rem] tracking-[1px] uppercase">
          <a href="#hero" className="text-white/70 hover:text-white transition-colors">
            EXHIBITION
          </a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
            GALLERY (12)
          </a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            ABOUT
          </a>
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center h-[2.05em] pl-[0.85em] pr-[2.55em] bg-[#00f2fe] text-[#070709] font-sans text-[0.72rem] font-bold tracking-[1px] uppercase rounded-[0.75em] border-none shadow-[0_0_12px_rgba(0,242,254,0.35)] overflow-hidden cursor-pointer no-underline select-none transition-all duration-300"
          >
            <span>PORTFOLIO</span>
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
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-[#00f2fe] font-bold">PORTFOLIO →</Link>
        </div>
      )}
    </header>
  );
}

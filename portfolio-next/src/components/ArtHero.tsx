"use client";

import React from "react";
import { getR2Url } from "@/lib/r2";

export default function ArtHero() {
  return (
    <section id="hero" className="relative w-full max-w-full min-h-[65vh] sm:min-h-screen pt-16 sm:pt-32 pb-8 sm:pb-20 px-4 sm:px-12 flex flex-col justify-center items-center overflow-hidden bg-[#070709] isolate">

      {/* Photographer Portrait Background (photos/me1.png) - Robust 100% width mobile presentation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
        <img
          src={getR2Url("/photos/me1.png")}
          alt="Bijendar Prasad - Photographer Portrait"
          className="w-full h-full object-cover object-[center_35%] sm:object-[center_46%] brightness-[0.85] contrast-[1.08] opacity-90 scale-100 sm:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/30 via-[#070709]/50 to-[#070709]" />
      </div>

      {/* Grid & Dot Matrix Overlay Pattern - Clean GPU-Safe Opacity */}
      <div
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(rgba(0, 242, 254, 0.14) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px, 72px 72px, 72px 72px",
        }}
      />

      {/* SVG Camera Aperture & Viewfinder Doodles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden w-full h-full">
        <svg className="w-full h-full object-cover opacity-60 overflow-hidden" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Golden Ratio / Aperture Rings */}
          <circle cx="200" cy="180" r="140" stroke="rgba(0, 242, 254, 0.18)" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="180" r="90" stroke="rgba(0, 242, 254, 0.1)" strokeWidth="1" />
          <circle cx="1200" cy="350" r="220" stroke="rgba(212, 175, 55, 0.18)" strokeWidth="1.5" strokeDasharray="8 8" />

          {/* Viewfinder Crosshairs */}
          <path d="M150 180 H250 M200 130 V230" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1" />
          <path d="M1150 350 H1250 M1200 300 V400" stroke="rgba(212, 175, 55, 0.22)" strokeWidth="1" />

          {/* Viewfinder Frame Corners */}
          <path d="M80 60 H140 V120" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <path d="M1320 60 H1260 V120" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <path d="M80 740 H140 V680" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
          <path d="M1320 740 H1260 V680" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

          {/* Wavy Motion Lines */}
          <path d="M-50 400 Q 300 250, 700 450 T 1450 300" stroke="url(#doodle-grad-1)" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
          <path d="M-50 500 Q 400 650, 900 400 T 1450 550" stroke="url(#doodle-grad-2)" strokeWidth="1.5" opacity="0.3" />

          <defs>
            <linearGradient id="doodle-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 242, 254, 0.4)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0.4)" />
            </linearGradient>
            <linearGradient id="doodle-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 242, 254, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft Ambient Glow Orbs - Radial CSS Gradients for 100% Smooth GPU Rendering without Flickering */}
      <div className="absolute top-[5%] left-[-20%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[radial-gradient(circle,rgba(0,242,254,0.22)_0%,transparent_70%)] pointer-events-none z-10" />
      <div className="absolute bottom-[10%] right-[-20%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_70%)] pointer-events-none z-10" />

      {/* Hero Stacked Content - Rock Solid Centered Layout */}
      <div className="relative z-20 max-w-[850px] w-full mx-auto flex flex-col items-center text-center my-auto px-2">

        {/* Badge - Compact font size on mobile */}
        <div className="inline-block font-sans text-[9.5px] sm:text-xs tracking-[1.5px] sm:tracking-[3px] text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/25 px-3 py-1 sm:px-4 sm:py-1.5 rounded uppercase mb-4 sm:mb-6">
          FEATURED EXHIBITION • COLLECTION 2026
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col items-center mb-4 sm:mb-6 w-full">
          <span className="font-display text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            THE GEOMETRY OF
          </span>
          <span className="font-serif italic font-normal text-2xl sm:text-5xl lg:text-6xl text-white/90 tracking-wide mt-1">
            LIGHT & SILENCE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-base text-white/80 max-w-[650px] leading-relaxed mb-6 sm:mb-9">
          A visual anthology capturing perspective, atmosphere, and human spaces. Curated photographic portfolio.
        </p>

        {/* Explore Button */}
        <a
          href="#featured-carousel"
          className="uiverse-glow-btn group relative inline-flex items-center justify-center whitespace-nowrap w-auto min-w-[190px] sm:min-w-[220px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl overflow-hidden bg-neutral-800 border border-white/20 hover:border-rose-300 text-gray-50 hover:text-rose-300 transition-all duration-500 font-mono text-xs sm:text-sm font-bold tracking-[2px] sm:tracking-[2.5px] uppercase"
        >
          <span className="relative z-20 inline sm:hidden">EXPLORE</span>
          <span className="relative z-20 hidden sm:inline">EXPLORE GALLERY</span>
        </a>

        {/* Uiverse Exact Glow Button Styles */}
        <style jsx>{`
          .uiverse-glow-btn::before {
            content: '';
            position: absolute;
            width: 3rem;
            height: 3rem;
            right: 0.25rem;
            top: 0.25rem;
            z-index: 10;
            background-color: #8b5cf6;
            border-radius: 9999px;
            filter: blur(16px);
            transition: all 500ms ease;
          }
          .uiverse-glow-btn::after {
            content: '';
            position: absolute;
            width: 5rem;
            height: 5rem;
            right: 2rem;
            top: 0.75rem;
            z-index: 10;
            background-color: #fda4af;
            border-radius: 9999px;
            filter: blur(16px);
            transition: all 500ms ease;
          }
          .uiverse-glow-btn:hover::before {
            right: 3rem;
            top: auto;
            bottom: -2rem;
            box-shadow: 20px 20px 20px 30px #a21caf;
            transition-duration: 500ms;
          }
          .uiverse-glow-btn:hover::after {
            right: -2rem;
            transition-duration: 500ms;
          }
        `}</style>
      </div>

    </section>
  );
}

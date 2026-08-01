"use client";

import React from "react";
import { GalleryItem } from "./GalleryGrid";
import { getR2Url } from "@/lib/r2";

interface MasterpieceSpotlightProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export default function MasterpieceSpotlight({ onOpenLightbox }: MasterpieceSpotlightProps) {
  const spotlightItem: GalleryItem = {
    id: "masterpiece-03",
    src: getR2Url("/photos/1 (3).jpg"),
    title: "Serenity in Bloom",
    category: "portrait",
    meta: "The Sleeping Innocence • Botanical Nature Study",
    location: "India",
  };

  return (
    <section className="relative w-full py-10 sm:py-16 px-4 sm:px-12 bg-[#070709]">
      <div className="max-w-[1350px] mx-auto flex flex-col gap-8 sm:gap-12">
        
        {/* Connector Bridge */}
        <div className="flex flex-col items-center justify-center -mt-6 sm:-mt-10 mb-2 sm:mb-4">
          <div className="w-[1.5px] h-12 sm:h-20 bg-gradient-to-b from-[#00f2fe]/60 via-[#df9aff]/80 to-transparent" />
          <div className="inline-flex items-center gap-2 bg-[#0c0b14]/90 border border-[#df9aff]/40 px-4 sm:px-5 py-1.5 rounded-full text-[10px] sm:text-xs font-sans tracking-widest text-[#df9aff] uppercase shadow-[0_0_20px_rgba(223,154,255,0.2)] my-2">
            <span>↓ CURATED SPECIAL SELECTION &amp; COLLECTION</span>
          </div>
          <div className="w-[1.5px] h-12 sm:h-20 bg-gradient-to-b from-transparent via-[#df9aff]/80 to-[#00f2fe]/60" />
        </div>

        {/* Masterpiece Spotlight Outer Card Wrapper with Purple Outline Glow */}
        <div className="w-full bg-[#0f0e16]/85 border border-[#af52de]/35 rounded-[24px] p-5 sm:p-10 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(175,82,222,0.15)] hover:border-[#af52de]/65 transition-all">
          
          {/* Spotlight Showcase Grid (45% Image / 55% Content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Artwork Image Container (Original Ratio) */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => onOpenLightbox?.(spotlightItem)}
                className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-[#df9aff]/35 bg-[#0a0a0f] cursor-pointer group shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(223,154,255,0.25)] transition-all duration-500 hover:border-[#df9aff]/70"
              >
                <div className="w-full relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-black/80 border border-[#df9aff]/40 px-3 py-1 rounded-full text-[10px] font-sans tracking-widest text-[#df9aff] z-20 flex items-center gap-1.5 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#df9aff] animate-pulse" />
                    <span>ARTIST&apos;S SPECIAL SELECTION</span>
                  </div>

                  <img
                    src={getR2Url("/photos/1 (3).jpg")}
                    alt="Serenity in Bloom - Masterpiece Spotlight"
                    className="w-full h-auto max-h-[380px] sm:max-h-[560px] object-cover object-center group-hover:scale-105 transition-transform duration-700 block"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Content & Specs (55% / 7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
              
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="font-sans text-[10px] sm:text-xs tracking-[2px] text-[#df9aff] font-semibold">
                  // SPECIAL FEATURED ARTWORK
                </span>
                <h3 className="font-display text-2xl sm:text-5xl font-extrabold text-white tracking-wider sm:tracking-wide uppercase leading-tight">
                  SERENITY IN BLOOM
                </h3>
                <p className="font-sans text-[11px] sm:text-sm text-white/60">
                  The Sleeping Innocence • Botanical Nature Study
                </p>
              </div>

              {/* Quote Block */}
              <div className="border-l-2 border-[#df9aff] pl-3.5 sm:pl-4 py-0.5 sm:py-1">
                <p className="font-serif italic text-sm sm:text-lg text-white/90 leading-relaxed">
                  &ldquo;In the quiet sanctuary of nature, life finds its softest harmony amidst wild blossoms.&rdquo;
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                A tender, candid photograph capturing a white puppy peacefully resting within a carpet of vibrant purple Lantana flowers and emerald foliage.
              </p>

              {/* Specs Cards - 3 on Mobile (LIGHTING hidden on mobile), 4 on Desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 mt-1">
                <div className="bg-white/[0.03] border border-white/10 p-2.5 sm:p-3.5 rounded-xl flex flex-col gap-0.5 sm:gap-1 text-center">
                  <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[1px] text-white/40 uppercase truncate">SUBJECT</span>
                  <span className="font-sans text-[10.5px] sm:text-sm font-semibold text-white truncate">Flora &amp; Wildlife</span>
                </div>
                <div className="bg-white/[0.03] border border-white/10 p-2.5 sm:p-3.5 rounded-xl flex flex-col gap-0.5 sm:gap-1 text-center">
                  <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[1px] text-white/40 uppercase truncate">PALETTE</span>
                  <span className="font-sans text-[10.5px] sm:text-sm font-semibold text-white truncate">Violet &amp; Emerald</span>
                </div>
                <div className="hidden sm:flex bg-white/[0.03] border border-white/10 p-2.5 sm:p-3.5 rounded-xl flex-col gap-0.5 sm:gap-1 text-center">
                  <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[1px] text-white/40 uppercase truncate">LIGHTING</span>
                  <span className="font-sans text-[10.5px] sm:text-sm font-semibold text-white truncate">Natural Ambient</span>
                </div>
                <div className="bg-white/[0.03] border border-white/10 p-2.5 sm:p-3.5 rounded-xl flex flex-col gap-0.5 sm:gap-1 text-center">
                  <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[1px] text-white/40 uppercase truncate">FOCUS</span>
                  <span className="font-sans text-[10.5px] sm:text-sm font-semibold text-white truncate">Macro Depth</span>
                </div>
              </div>

              {/* Action Button - Compact size & text length on mobile */}
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenLightbox?.(spotlightItem)}
                  className="inline-flex items-center gap-1.5 sm:gap-3 bg-gradient-to-r from-[#af52de]/25 to-[#00f2fe]/25 border border-[#af52de]/50 text-white font-sans text-[10px] sm:text-xs font-bold tracking-[1.5px] sm:tracking-[2px] px-4 py-2 sm:px-7 sm:py-3.5 rounded-full hover:border-[#df9aff] hover:shadow-[0_10px_25px_rgba(175,82,222,0.35)] transition-all transform hover:-translate-y-0.5"
                >
                  <span className="inline sm:hidden">VIEW FULLPAGE</span>
                  <span className="hidden sm:inline">VIEW FULLPAGE EXHIBITION</span>
                  <span className="text-xs sm:text-sm">↗</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { GalleryItem } from "./GalleryGrid";
import { getR2Url } from "@/lib/r2";

interface ShivaSanctuaryProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export default function ShivaSanctuary({ onOpenLightbox }: ShivaSanctuaryProps) {
  const shivaItem: GalleryItem = {
    id: "shiva-21",
    src: getR2Url("/photos/1 (21).jpg"),
    title: "ADIYOGI • THE FIRST YOGI",
    category: "portrait",
    meta: "Lord Shiva • Embodiment of Transcendence & Stillness",
    location: "Sanctuary",
  };

  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-12 bg-[#070709] border-t border-[#d4af37]/25 relative">
      <div className="max-w-[1350px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Section Title */}
        <div className="text-center flex flex-col items-center gap-1.5 sm:gap-2">
          <span className="font-sans text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-[#d4af37] font-bold uppercase">
            // SACRED GEOMETRY • SPIRITUAL ANTHOLOGY
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-extrabold tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37]">
            COSMIC SANCTUARY
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/60 max-w-xl">
            A chiaroscuro exploration of the Eternal Ascetic (Adiyogi).
          </p>
        </div>

        {/* Display Card */}
        <div className="bg-[#0c0b14]/95 border border-[#d4af37]/35 rounded-3xl p-5 sm:p-10 grid grid-cols-1 lg:grid-cols-[minmax(320px,440px)_1fr] gap-8 sm:gap-10 items-center shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.15)] transition-all hover:border-[#d4af37]/65">
          
          {/* Frame */}
          <div
            onClick={() => onOpenLightbox?.(shivaItem)}
            className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden bg-black border border-white/12 shadow-2xl group cursor-pointer"
          >
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 bg-[#0c0b14]/90 border border-[#d4af37]/50 px-3.5 py-1.5 rounded-full text-[11px] tracking-widest text-[#d4af37] font-sans flex items-center gap-2 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              ADIYOGI • SACRED SHADOW
            </div>

            {/* Photo 21 */}
            <img
              src={getR2Url("/photos/1 (21).jpg")}
              alt="Lord Shiva - Adiyogi Sacred Fine Art"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Narrative Content */}
          <div className="flex flex-col gap-6">
            
            <div className="font-sans text-sm sm:text-base tracking-[4px] text-[#d4af37] font-bold">
              ॐ NAMAH SHIVAYA
            </div>

            <blockquote className="font-serif italic text-lg sm:text-xl text-white/95 border-l-2 border-[#d4af37] pl-5 leading-relaxed">
              "Out of the stillness of silence emerged the first yogi—the source of cosmic consciousness and unmanifest light."
            </blockquote>

            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Captured in high-contrast chiaroscuro photography, highlighting the monumental silhouette of Lord Shiva with the crescent moon ornament.
            </p>

            {/* Subject, Symbolism & Technique Cards - Guaranteed 1 Single Horizontal Line */}
            <div className="flex flex-row items-center gap-2 sm:gap-3.5 overflow-x-auto whitespace-nowrap max-w-full mt-2 pb-1 scrollbar-none">
              <div className="flex-1 min-w-[95px] bg-[#13121d]/90 border border-[#d4af37]/25 rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1 text-center">
                <span className="font-sans text-[8.5px] sm:text-[11px] tracking-[1px] text-white/50 font-semibold uppercase truncate">
                  SUBJECT
                </span>
                <span className="font-sans font-bold text-[10px] sm:text-base text-white truncate">
                  Sacred Adiyogi
                </span>
              </div>
              <div className="flex-1 min-w-[95px] bg-[#13121d]/90 border border-[#d4af37]/25 rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1 text-center">
                <span className="font-sans text-[8.5px] sm:text-[11px] tracking-[1px] text-white/50 font-semibold uppercase truncate">
                  SYMBOLISM
                </span>
                <span className="font-sans font-bold text-[10px] sm:text-base text-white truncate">
                  Crescent Moon &amp; Void
                </span>
              </div>
              <div className="flex-1 min-w-[95px] bg-[#13121d]/90 border border-[#d4af37]/25 rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1 text-center">
                <span className="font-sans text-[8.5px] sm:text-[11px] tracking-[1px] text-white/50 font-semibold uppercase truncate">
                  TECHNIQUE
                </span>
                <span className="font-sans font-bold text-[10px] sm:text-base text-white truncate">
                  Chiaroscuro Night
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

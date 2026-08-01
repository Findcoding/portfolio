"use client";

import React from "react";
import { GalleryItem } from "./GalleryGrid";
import { getR2Url } from "@/lib/r2";

interface ExhibitionShowcaseProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export default function ExhibitionShowcase({ onOpenLightbox }: ExhibitionShowcaseProps) {
  const mainpieceItem: GalleryItem = {
    id: "mainpiece-01",
    src: getR2Url("/photos/1 (1).jpg"),
    title: "Luminous Horizons • Ultra Wide Panoramic",
    category: "landscape",
    meta: "35mm • f/2.8 • ISO 100 • 1/500s",
    location: "India",
  };

  return (
    <div className="w-full py-10 sm:py-16 px-4 sm:px-12 bg-[#070709] relative">
      <div className="max-w-[1350px] mx-auto flex flex-col items-center">

        {/* Intro Block */}
        <div className="text-center flex flex-col items-center gap-2.5 sm:gap-3 mb-8 sm:mb-12 w-full">
          <span className="font-sans text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-[#00f2fe] font-bold uppercase">
            // FEATURED SHOWCASE • EXHIBITION 2026
          </span>
          <h2 className="font-display text-2xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider sm:tracking-tight text-white uppercase leading-[1.05] text-center my-1 sm:my-2">
            <span className="block">THE LUMINOUS</span>
            <span className="block mt-1">HORIZON</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-white/70 max-w-xl leading-relaxed text-center">
            An immersive panoramic anthology capturing structural perspective, light, and atmosphere.
          </p>

          {/* Telemetry Pill-Shaped Box - Forced 1 Single Line on Mobile */}
          <div className="inline-flex flex-nowrap items-center justify-center gap-1.5 sm:gap-3 font-sans text-[8.5px] sm:text-[11px] text-[#00f2fe] bg-[#0f0e16]/85 border border-[#00f2fe]/35 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full shadow-[0_0_20px_rgba(0,242,254,0.15)] mt-2 max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
            <span>⊕ FRAME #01</span>
            <span className="opacity-40">•</span>
            <span>28.5439° N, 77.2723° E</span>
            <span className="opacity-40">•</span>
            <span>35mm ULTRA WIDE</span>
          </div>
        </div>

        {/* Primary Mainpiece Frame */}
        <div
          onClick={() => onOpenLightbox?.(mainpieceItem)}
          className="relative w-full max-w-[1250px] rounded-2xl overflow-hidden border border-white/15 bg-[#121218]/85 cursor-pointer group shadow-[0_0_50px_rgba(0,242,254,0.15)]"
        >
          {/* Frame Corner Viewfinders */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00f2fe] z-20" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00f2fe] z-20" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00f2fe] z-20" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00f2fe] z-20" />

          <img
            src={getR2Url("/photos/1 (1).jpg")}
            alt="Main Landing Artwork by Bijendar Prasad"
            className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 block"
          />

          {/* Caption Overlay Bar (Matching artworks.html 100%) */}
          <div className="p-4 sm:p-5 bg-[#070709]/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col text-left gap-1">
              <span className="font-sans text-xs text-[#00f2fe] font-bold tracking-widest uppercase">
                EXHIBITION MAINPIECE • PHOTO #01 / 12
              </span>
              <span className="font-display font-extrabold text-white text-base sm:text-lg tracking-wide">
                Luminous Horizons • Ultra Wide Panoramic
              </span>
            </div>

            <div className="flex items-center gap-4 font-sans text-xs text-white/50">
              <span>35mm • f/2.8 • ISO 100 • 1/500s</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

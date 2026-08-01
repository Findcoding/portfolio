"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArtHeader from "@/components/ArtHeader";
import ArtHero from "@/components/ArtHero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ExhibitionShowcase from "@/components/ExhibitionShowcase";
import MasterpieceSpotlight from "@/components/MasterpieceSpotlight";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";
import ShivaSanctuary from "@/components/ShivaSanctuary";
import ArtistStatement from "@/components/ArtistStatement";
import LightboxModal, { LightboxData } from "@/components/LightboxModal";

export default function RootLandingPage() {
  const [activeLightbox, setActiveLightbox] = useState<LightboxData | null>(null);

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightbox({
      src: item.src,
      title: item.title,
      meta: item.meta,
      id: item.id,
    });
  };

  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-[#00f2fe] selection:text-black">

      {/* Artworks Header */}
      <ArtHeader />

      {/* Hero Section */}
      <ArtHero />

      {/* Panoramic 7-Slide Carousel Showcase */}
      <div id="featured-carousel">
        <FeaturedCarousel />
      </div>

      {/* Exhibition Showcase Mainpiece */}
      <ExhibitionShowcase onOpenLightbox={handleOpenLightbox} />

      {/* Masterpiece Spotlight (Serenity in Bloom) */}
      <MasterpieceSpotlight onOpenLightbox={handleOpenLightbox} />

      {/* Photographic Collection Grid with Filter Pills */}
      <GalleryGrid onOpenLightbox={handleOpenLightbox} />

      {/* Cosmic Sanctuary Section (Adiyogi / Lord Shiva) */}
      <div id="shiva-sanctuary">
        <ShivaSanctuary onOpenLightbox={handleOpenLightbox} />
      </div>

      {/* Artist Bio Statement */}
      <ArtistStatement />

      {/* Gallery Footer */}
      <footer className="w-full py-12 px-6 sm:px-12 bg-[#07070a] border-t border-white/10 text-white/60 font-mono text-xs">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="logo-brand text-base text-white mb-1">
              BIJENDAR PRASAD
            </h3>
            <p className="text-white/50 font-sans text-xs">Capturing Light, Landscapes, and Timeless Moments.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-[0.78rem] tracking-[1px] uppercase">
            <a href="#hero" className="text-white/70 hover:text-[#00f2fe] transition-colors">EXHIBITION</a>
            <a href="#gallery" className="text-white/70 hover:text-[#00f2fe] transition-colors">GALLERY</a>
            <a href="#about" className="text-white/70 hover:text-[#00f2fe] transition-colors">ABOUT</a>
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
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-white">
              <span>Status:</span>
              <span className="w-2 h-2 rounded-full bg-[#34a853] animate-pulse" />
              <span className="text-[#34a853] font-bold">Exploring</span>
            </div>
            <p className="text-white/40 font-sans text-xs">© 2026 Bijendar Prasad. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        data={activeLightbox}
        onClose={() => setActiveLightbox(null)}
      />

    </main>
  );
}

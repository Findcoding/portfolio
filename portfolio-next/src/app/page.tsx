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
      <footer className="w-full py-12 px-6 bg-[#070709] text-center font-sans text-xs text-white/50 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 text-[#00f2fe] font-bold">
          <span>BIJENDAR PRASAD PHOTOGRAPHY</span>
          <span>•</span>
          <span>FINE ART EXHIBITION 2026</span>
        </div>
        <p>© 2026 Bijendar Prasad Fine Art Portfolio. All rights reserved.</p>
        <Link
          href="/portfolio"
          className="mt-2 px-6 py-2 rounded-full border border-[#00f2fe]/40 text-[#00f2fe] font-bold hover:bg-[#00f2fe]/20 hover:text-white transition-all shadow-[0_0_15px_rgba(0,242,254,0.2)]"
        >
          Portfolio →
        </Link>
      </footer>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        data={activeLightbox}
        onClose={() => setActiveLightbox(null)}
      />

    </main>
  );
}

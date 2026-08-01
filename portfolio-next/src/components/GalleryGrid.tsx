"use client";

import React, { useState } from "react";
import { getR2Url } from "@/lib/r2";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  tag?: string;
  meta: string;
  location?: string;
}

// First two photos (1 (1).jpg and 1 (3).jpg) are featured in Exhibition Showcase & Masterpiece Spotlight above,
// so they are omitted from the gallery grid to prevent duplicate displays.
const RAW_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "04",
    src: "/photos/1 (4).jpg",
    title: "ECHOES OF STONE",
    category: "HERITAGE",
    tag: "HISTORIC MONUMENT",
    meta: "Carved Pillar Frieze • Ancient Heritage",
  },
  {
    id: "05",
    src: "/photos/1 (5).jpg",
    title: "MIST OVER HIGHLANDS",
    category: "LANDSCAPE",
    tag: "HIGHLAND NATURE",
    meta: "Tea Plantation Ridge • Dawn Atmosphere",
  },
  {
    id: "06",
    src: "/photos/1 (6).jpg",
    title: "COASTAL SYMPHONY",
    category: "LANDSCAPE",
    tag: "AERIAL COASTAL",
    meta: "Estuary & Bridge • Oceanic Perspective",
  },
  {
    id: "07",
    src: "/photos/1 (7).jpg",
    title: "SILHOUETTE AT TWILIGHT",
    category: "URBAN",
    tag: "GOLDEN HOUR",
    meta: "Metropolitan Towers • Amber Sunset",
  },
  {
    id: "08",
    src: "/photos/1 (8).jpg",
    title: "STRUCTURE & SPACE",
    category: "PORTRAIT",
    tag: "ARCHITECTURAL STUDY",
    meta: "Steel Floodlight Geometry • High Contrast",
  },
  {
    id: "10",
    src: "/photos/1 (10).jpg",
    title: "CELESTIAL VERDANT",
    category: "BOTANICAL",
    tag: "MACRO FLORA",
    meta: "Magenta Zinnia Petals • Botanical Detail",
  },
  {
    id: "11",
    src: "/photos/1 (11).jpg",
    title: "MONOCHROME PASSAGE",
    category: "HERITAGE",
    tag: "BLACK & WHITE",
    meta: "Corridor Perspective • Light & Shadow",
  },
  {
    id: "13",
    src: "/photos/1 (13).jpg",
    title: "SPECTRUM IN SHADOWS",
    category: "PORTRAIT",
    tag: "STUDIO PORTRAIT",
    meta: "Prism Refraction • Dramatic Framing",
  },
  {
    id: "14",
    src: "/photos/1 (23).jpg",
    title: "FLORAL ELEGANCE",
    category: "BOTANICAL",
    tag: "BOTANICAL STUDY",
    meta: "Vivid Petals • Natural Light Macro",
  },
  {
    id: "14b",
    src: "/photos/1 (22).jpg",
    title: "VALLEY OF MIST",
    category: "LANDSCAPE",
    tag: "MOUNTAIN RIDGE",
    meta: "Highland Slopes • Early Morning Fog",
  },
  {
    id: "15",
    src: "/photos/1 (15).jpg",
    title: "EMERALD CANOPY",
    category: "LANDSCAPE",
    tag: "FOREST STUDY",
    meta: "Deep Woods • Sunbeams & Foliage",
  },
  {
    id: "17",
    src: "/photos/1 (17).jpg",
    title: "GOLDEN HARVEST",
    category: "LANDSCAPE",
    tag: "RURAL LANDSCAPE",
    meta: "Sunlit Terraces • Sunset Warmth",
  },
  {
    id: "18",
    src: "/photos/1 (18).jpg",
    title: "TEMPLE CHRONICLES",
    category: "HERITAGE",
    tag: "HERITAGE FRIEZE",
    meta: "Rock Carving Frieze • Stone Sculpture",
  },
  {
    id: "19",
    src: "/photos/1 (19).jpg",
    title: "STEEL MONOLITH",
    category: "URBAN",
    tag: "INDUSTRIAL PERSPECTIVE",
    meta: "High Stadium Lights • Sky Silhouette",
  },
  {
    id: "20",
    src: "/photos/1 (20).jpg",
    title: "CRIMSON FLARE",
    category: "BOTANICAL",
    tag: "MACRO FLORAL",
    meta: "Petal Close-up • Vivid Floral Center",
  },
  {
    id: "22",
    src: "/photos/1 (22).jpg",
    title: "BLOSSOM & CANOPY",
    category: "BOTANICAL",
    tag: "BOTANICAL STUDY",
    meta: "Flora & Nature • Macro Perspective",
  },
  {
    id: "778",
    src: "/photos/1 (778).jpg",
    title: "GOLDEN HORIZON",
    category: "LANDSCAPE",
    tag: "SUNSET LANDSCAPE",
    meta: "Atmospheric Mountain Ridge • Twilight Glow",
  },
  {
    id: "7711",
    src: "/photos/1 (7711).jpg",
    title: "ARCHITECTURAL HARMONY",
    category: "URBAN",
    tag: "GEOMETRIC PERSPECTIVE",
    meta: "Structural Geometry • Shadows & Lines",
  },
];

const CATEGORIES = ["ALL", "LANDSCAPE", "BOTANICAL", "HERITAGE", "URBAN", "PORTRAIT"];

interface GalleryGridProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export default function GalleryGrid({ onOpenLightbox }: GalleryGridProps) {
  // getR2Url appends dynamic versioning to fetch fresh updated images directly from Cloudflare R2
  const GALLERY_ITEMS = RAW_GALLERY_ITEMS.map((item) => ({
    ...item,
    src: getR2Url(item.src),
  }));

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(9); // Initial batch size of 9 photos

  const categoryFiltered = GALLERY_ITEMS.filter((item) => {
    return selectedCategory === "ALL" || item.category === selectedCategory;
  });

  const visibleItems = categoryFiltered.slice(0, visibleCount);
  const hasMore = visibleCount < categoryFiltered.length;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(9);
  };

  const handleLoadMore = () => {
    if (hasMore) {
      setVisibleCount((prev) => prev + 9);
    } else {
      setVisibleCount(9);
    }
  };

  return (
    <section id="gallery" className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-24 px-4 sm:px-8 bg-[#070709]">
      <div className="max-w-[1450px] mx-auto flex flex-col gap-10">

        {/* Section Title */}
        <div className="text-center flex flex-col items-center gap-1.5 sm:gap-2">
          <span className="font-sans text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-[#00f2fe] font-bold uppercase">
            // COMPLETE ANTHOLOGY • FINE ART PORTFOLIO
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-extrabold tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 uppercase">
            GALLERY COLLECTION
          </h2>
          <div className="w-16 sm:w-20 h-[2.5px] sm:h-[3px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent rounded-full mt-0.5" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`font-sans text-[10px] sm:text-xs tracking-wider px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border transition-all ${selectedCategory === cat
                ? "bg-[#00f2fe] text-black border-[#00f2fe] font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                : "bg-white/5 text-white/70 border-white/15 hover:border-[#00f2fe]/40 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Paginated Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleItems.map((item, index) => {
            const itemNum = index + 1;
            const displayNo = itemNum < 10 ? `0${itemNum}` : `${itemNum}`;

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-black border border-white/12 cursor-pointer shadow-xl transition-all duration-500 hover:border-[#00f2fe]/50 hover:shadow-[0_20px_40px_rgba(0,242,254,0.15)] transform-gpu will-change-transform"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 block transform-gpu"
                />

                {/* Tag Badge Top */}
                <div className="absolute top-3.5 left-3.5 bg-black/80 border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-sans tracking-widest text-[#00f2fe] z-10 uppercase">
                  {item.tag}
                </div>

                {/* Bottom Card Content - Title in Syne font-display */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#05050c]/95 via-[#05050c]/75 to-transparent p-5 sm:p-6 flex flex-col gap-1 sm:gap-1.5 z-10">
                  <span className="font-sans text-[10px] sm:text-[11px] text-[#00f2fe] font-bold">
                    {displayNo} / {categoryFiltered.length}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-2xl text-white tracking-wide uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-white/60">{item.meta}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button - Compact top & bottom spacing on mobile */}
        {categoryFiltered.length > 9 && (
          <div className="flex justify-center mt-3 mb-2 sm:mt-10 sm:mb-8">
            <button
              onClick={handleLoadMore}
              className="font-sans text-[10px] sm:text-xs font-bold tracking-[1.5px] sm:tracking-widest px-3.5 py-1.5 sm:px-8 sm:py-3.5 rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/40 text-white transition-all hover:bg-[#00f2fe]/30 hover:border-[#00f2fe] hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transform hover:-translate-y-0.5"
            >
              {hasMore ? (
                <>
                  <span className="inline sm:hidden">SHOW MORE ({visibleItems.length}/{categoryFiltered.length}) ↓</span>
                  <span className="hidden sm:inline">SHOW MORE ({visibleItems.length} OF {categoryFiltered.length}) ↓</span>
                </>
              ) : (
                "SHOW LESS ↑"
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

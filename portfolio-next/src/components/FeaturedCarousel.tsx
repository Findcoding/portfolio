"use client";

import React, { useState, useEffect } from "react";
import { getR2Url } from "@/lib/r2";

export interface CarouselSlideData {
  id: string;
  src: string;
  title: string;
  category: string;
  subtitle: string;
}

const RAW_SLIDES: CarouselSlideData[] = [
  {
    id: "01",
    src: "/photos/2 (1).jpg",
    title: "BLOSSOMS IN AZURE",
    category: "BOTANICAL STUDY",
    subtitle: "Vibrant orchid tree blossoms reaching toward the deep cerulean sky.",
  },
  {
    id: "02",
    src: "/photos/2 (2).jpg",
    title: "RELIEFS OF ETERNITY",
    category: "HERITAGE MONUMENT",
    subtitle: "Ancient rock-cut temple carvings capturing timeless mythological legends.",
  },
  {
    id: "03",
    src: "/photos/2 (3).jpg",
    title: "ESTUARY FROM ABOVE",
    category: "AERIAL LANDSCAPE",
    subtitle: "Sweeping aerial view of lush mangrove forest waterways and sea bridge.",
  },
  {
    id: "04",
    src: "/photos/2 (4).jpg",
    title: "AMBER SKYLINE",
    category: "URBAN ARCHITECTURE",
    subtitle: "Metropolitan skyscrapers silhouetted against a radiant golden sun.",
  },
  {
    id: "05",
    src: "/photos/2 (5).jpg",
    title: "SPECTRUM OF SILENCE",
    category: "EXPERIMENTAL COLOR",
    subtitle: "Refracted light prisms casting vibrant gradient shadows across minimalist architecture.",
  },
  {
    id: "06",
    src: "/photos/2 (6).jpg",
    title: "MONOLITH OF LIGHT",
    category: "INDUSTRIAL GEOMETRY",
    subtitle: "Towering stadium floodlight mast silhouetted in dramatic black & white contrast.",
  },
  {
    id: "07",
    src: "/photos/2 (7).jpg",
    title: "MAGENTA BLOOM",
    category: "MACRO BOTANICAL",
    subtitle: "Vivid magenta zinnia petals unfolding around vibrant golden yellow stamens.",
  },
];

export default function FeaturedCarousel() {
  const DEFAULT_SLIDES = RAW_SLIDES.map((slide) => ({
    ...slide,
    src: getR2Url(slide.src),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = DEFAULT_SLIDES.length;

  // Touch Swipe Gesture State for Mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 35; // minimum px for touch swipe trigger

  const goToSlide = (index: number) => {
    setCurrentIndex((index + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 bg-[#070709] overflow-hidden">
      <div className="max-w-[1350px] mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* Header - Perfectly visible without any top text clipping */}
        <div className="text-center flex flex-col items-center gap-1.5 sm:gap-2">
          <div className="font-sans text-[9px] sm:text-xs tracking-[1.5px] sm:tracking-[3px] text-cyan-400 font-bold uppercase">
            // FEATURED COLLECTION • CURATED SLIDESHOW
          </div>
          <h2 className="font-display text-2xl sm:text-5xl font-extrabold tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 uppercase">
            VISUAL ANTHOLOGY
          </h2>
          <div className="w-14 sm:w-20 h-[2.5px] sm:h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full mt-0.5" />
        </div>

        {/* 7-Card Collapsed Stage with Touch Swipe Effect */}
        <div
          className="relative w-full h-[430px] sm:h-[540px] flex items-center justify-center overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-[410px] sm:h-[520px] flex items-center justify-center">
            {DEFAULT_SLIDES.map((slide, i) => {
              let diff = i - currentIndex;
              const half = Math.floor(total / 2);
              while (diff > half) diff -= total;
              while (diff < -half) diff += total;

              let positionClass = "opacity-0 pointer-events-none scale-75 z-0";

              if (diff === 0) {
                // Center Active Slide (3:4 Ratio) - Sleek compact fit on mobile
                positionClass =
                  "w-[280px] sm:w-[370px] h-[390px] sm:h-[510px] left-1/2 -translate-x-1/2 opacity-100 z-30 border-cyan-400/50 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(0,242,254,0.2)]";
              } else if (diff === -1) {
                // Left Near Strip
                positionClass =
                  "w-[45px] sm:w-[80px] h-[350px] sm:h-[460px] left-[calc(50%-180px)] sm:left-[calc(50%-275px)] -translate-x-1/2 opacity-60 sm:opacity-80 z-20 cursor-pointer brightness-75 hover:brightness-95";
              } else if (diff === -2) {
                // Left Mid Strip
                positionClass =
                  "w-[30px] sm:w-[60px] h-[310px] sm:h-[420px] left-[calc(50%-220px)] sm:left-[calc(50%-360px)] -translate-x-1/2 opacity-35 sm:opacity-55 z-10 cursor-pointer brightness-50 hover:brightness-80 hidden sm:block";
              } else if (diff === -3) {
                // Left Far Strip
                positionClass =
                  "w-[40px] sm:w-[45px] h-[360px] sm:h-[375px] left-[calc(50%-425px)] -translate-x-1/2 opacity-35 z-0 cursor-pointer brightness-40 hover:brightness-65 hidden sm:block";
              } else if (diff === 1) {
                // Right Near Strip
                positionClass =
                  "w-[45px] sm:w-[80px] h-[350px] sm:h-[460px] left-[calc(50%+180px)] sm:left-[calc(50%+275px)] -translate-x-1/2 opacity-60 sm:opacity-80 z-20 cursor-pointer brightness-75 hover:brightness-95";
              } else if (diff === 2) {
                // Right Mid Strip
                positionClass =
                  "w-[30px] sm:w-[60px] h-[310px] sm:h-[420px] left-[calc(50%+220px)] sm:left-[calc(50%+360px)] -translate-x-1/2 opacity-35 sm:opacity-55 z-10 cursor-pointer brightness-50 hover:brightness-80 hidden sm:block";
              } else if (diff === 3) {
                // Right Far Strip
                positionClass =
                  "w-[40px] sm:w-[45px] h-[360px] sm:h-[375px] left-[calc(50%+425px)] -translate-x-1/2 opacity-35 z-0 cursor-pointer brightness-40 hover:brightness-65 hidden sm:block";
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => diff !== 0 && goToSlide(i)}
                  className={`absolute rounded-2xl overflow-hidden bg-black border border-white/15 transition-all duration-700 ease-out ${positionClass}`}
                >
                  <div className="w-full h-full relative overflow-hidden group">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Active Center Slide Content Overlay */}
                    {diff === 0 && (
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#05050c]/95 via-[#05050c]/70 to-transparent p-4 sm:p-6 flex flex-col gap-1 sm:gap-1.5 z-10">
                        <span className="font-sans text-[10px] sm:text-xs tracking-widest text-cyan-400 font-bold">
                          {slide.id} / {total < 10 ? `0${total}` : total}
                        </span>
                        <span className="font-sans text-[9px] sm:text-[11px] tracking-widest text-white/85 bg-cyan-400/15 border border-cyan-400/35 px-2.5 py-0.5 rounded-full w-fit uppercase">
                          {slide.category}
                        </span>
                        <h3 className="font-display text-base sm:text-2xl font-extrabold text-white tracking-wide leading-tight uppercase">
                          {slide.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {slide.subtitle}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls (< > Arrow buttons hidden on mobile, visible only on sm+) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0c0b14]/90 border border-white/25 text-white text-2xl items-center justify-center z-40 transition-all hover:bg-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0c0b14]/90 border border-white/25 text-white text-2xl items-center justify-center z-40 transition-all hover:bg-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
          >
            ›
          </button>
        </div>

        {/* Indicators Below Image Container */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-2 sm:mt-4 z-20">
          {DEFAULT_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 border border-white/10 ${
                idx === currentIndex
                  ? "w-6 sm:w-8 bg-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.6)]"
                  : "w-2.5 sm:w-3 bg-white/25 hover:bg-cyan-400/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

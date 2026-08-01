"use client";

import React from "react";
import { getR2Url } from "@/lib/r2";

export default function ArtistStatement() {
  return (
    <section id="about" className="w-full py-20 px-6 sm:px-12 bg-[#070709] relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <span className="font-sans text-xs tracking-[3px] text-[#00f2fe] font-bold uppercase mb-8">
          // THE PHOTOGRAPHER
        </span>

        {/* Avatar & Name */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#00f2fe]/60 shadow-[0_0_25px_rgba(0,242,254,0.3)]">
            <img
              src={getR2Url("/photos/me2.jpg")}
              alt="Bijendar Prasad Photographer Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="logo-brand text-4xl sm:text-5xl text-white leading-none">
            BIJΣПDΛЯ PЯΛƧΛD
          </h2>
          <p className="font-sans text-xs text-[#00f2fe]">
            SRE/DevOps Engineer & Fine Art Photographer based in Delhi, India.
          </p>
        </div>

        {/* Quote & Body */}
        <blockquote className="font-serif italic text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8">
          &ldquo;Photography is the art of capturing silent dialogues between light, architecture, and atmosphere before the moment dissipates.&rdquo;
        </blockquote>

        <p className="font-sans text-sm text-white/70 max-w-3xl leading-relaxed mb-12 text-center sm:text-justify">
          When I&apos;m not building cloud infrastructure and automating DevOps workflows, I enjoy capturing nature, landscapes, and everyday moments through photography. Traveling to the mountains, exploring hidden places, and experiencing new cultures inspire both my work and creativity. I believe every journey has a story, and through my lens, I aim to preserve those fleeting moments—the golden light of a sunset, the calm of a quiet valley, and the beauty found in simplicity. Whether I&apos;m designing reliable systems or framing the perfect shot, I&apos;m driven by curiosity, precision, and a passion for creating something meaningful.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-[#00f2fe] mb-1">14</span>
            <span className="font-sans text-xs text-white/60">Curated Artworks</span>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-[#00f2fe] mb-1">35mm</span>
            <span className="font-sans text-xs text-white/60">Primary Medium</span>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-[#00f2fe] mb-1">100%</span>
            <span className="font-sans text-xs text-white/60">Original Shots</span>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";

export default function SreFooter() {
  return (
    <footer className="w-full py-12 px-6 sm:px-12 bg-[#07070a] border-t border-white/10 text-white/60 font-mono text-xs">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="logo-brand text-base text-white mb-1">
            BIJENDAR PRASAD <span className="text-[#00f2fe] ml-1"></span>
          </h3>
          <p className="text-white/50">Architecting Reliability, Scalability, and Cloud Excellence.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white/70">
          <a href="#about" className="hover:text-[#00f2fe] transition-colors">Dashboard</a>
          <a href="#pipeline" className="hover:text-[#00f2fe] transition-colors">Experience</a>
          <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Skills</a>
          <a href="#terminal" className="hover:text-[#00f2fe] transition-colors">Terminal</a>
          <Link href="/artworks" className="text-[#00f2fe] font-bold hover:underline">Artworks 📷</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2 text-white">
            <span>Status:</span>
            <span className="w-2 h-2 rounded-full bg-[#34a853] animate-pulse" />
            <span className="text-[#34a853] font-bold">Operational</span>
          </div>
          <p className="text-white/40">© 2026 Bijendar Prasad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

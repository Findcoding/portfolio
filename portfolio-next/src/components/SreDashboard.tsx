"use client";

import React from "react";
import { getR2Url } from "@/lib/r2";

export default function SreDashboard() {
  return (
    <section id="about" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-10 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> About
        </h2>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Compact Photo Card with Glassmorphic Metrics at Bottom (4 Cols) */}
          <div className="lg:col-span-4 h-full flex flex-col">
            <div className="relative w-full max-w-[380px] mx-auto lg:mx-0 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00f2fe]/30 bg-[#0f0e16]/80 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(0,242,254,0.15)] group transition-all duration-500 hover:border-[#00f2fe]/60 flex flex-col justify-between p-3.5 sm:p-4">

              {/* Background Image & Liquid Glass Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={getR2Url("/photos/me3.jpg")}
                  alt="Bijendar Prasad - SRE Architect"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              {/* Top Floating Status Badge */}
              <div className="relative z-10 self-start bg-black/60 backdrop-blur-md border border-[#00f2fe]/40 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-[#00f2fe] flex items-center gap-1.5 uppercase shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
                <span>SRE / DEVOPS ENGINEER</span>
              </div>

              {/* Bottom Liquid Glass Metrics Bar - Photo parts clearly visible through frosted glass */}
              <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2 mt-auto pt-8">
                <div className="bg-white/[0.08] border border-white/25 backdrop-blur-xl p-1.5 sm:p-2.5 rounded-xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-white/[0.16] hover:border-[#00f2fe]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className="font-mono text-xs sm:text-base font-extrabold text-[#00f2fe] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform">
                    99.99<span className="text-[9px] text-[#00f2fe]">%</span>
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9px] text-white/90 font-bold uppercase tracking-wide truncate w-full drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">Availability</div>
                </div>

                <div className="bg-white/[0.08] border border-white/25 backdrop-blur-xl p-1.5 sm:p-2.5 rounded-xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-white/[0.16] hover:border-[#00f2fe]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className="font-mono text-xs sm:text-base font-extrabold text-[#00f2fe] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform">
                    3.5+
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9px] text-white/90 font-bold uppercase tracking-wide truncate w-full drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">Years Exp</div>
                </div>

                <div className="bg-white/[0.08] border border-white/25 backdrop-blur-xl p-1.5 sm:p-2.5 rounded-xl flex flex-col justify-center items-center text-center transition-all duration-300 group hover:bg-white/[0.16] hover:border-[#00f2fe]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <div className="font-mono text-xs sm:text-base font-extrabold text-[#00f2fe] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform">
                    100+
                  </div>
                  <div className="font-mono text-[8px] sm:text-[9px] text-white/90 font-bold uppercase tracking-wide truncate w-full drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">Deployments</div>
                </div>
              </div>

            </div>
          </div>

          {/* Profile Summary Widget (8 Cols - Flawless Height Alignment with Photo Card) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all flex flex-col justify-between h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <span className="font-mono text-sm text-[#00f2fe] font-bold">my_summary.conf</span>
                <span className="font-mono text-[10px] tracking-widest text-[#34a853] bg-[#34a853]/15 px-3 py-1 rounded-full border border-[#34a853]/40 font-bold">
                  ACTIVE
                </span>
              </div>

              <p className="font-mono text-[13px] sm:text-sm text-white/90 leading-relaxed mb-3.5">
                I&apos;m a <strong className="text-white font-bold">Site Reliability &amp; Platform Engineer</strong> with <strong className="text-white font-bold">3.5+ years of experience</strong> operating cloud-native platforms at <strong className="text-white font-bold">Jio Platforms Limited</strong>. Backed by a <strong className="text-white font-bold">B.Tech in Computer Science &amp; Applied Mathematics from IIIT Delhi</strong>, I build resilient, scalable infrastructure.
              </p>
              <p className="font-mono text-[13px] sm:text-sm text-white/75 leading-relaxed mb-3.5">
                My work focuses on <strong className="text-white font-bold">Kubernetes, multi-cloud architecture, Infrastructure as Code, CI/CD automation, distributed systems, observability, and enterprise blockchain platforms</strong>. I transform complex infrastructure into automated, production-ready solutions that accelerate software delivery.
              </p>
              <p className="font-mono text-[13px] sm:text-sm text-white/75 leading-relaxed mb-3.5">
                I&apos;m passionate about creating platforms where <strong className="text-white font-bold">automation replaces manual effort, observability drives informed decisions, and reliability is built into every deployment</strong>. Philosophy: <em className="italic text-[#00f2fe]">great infrastructure should be secure by default, resilient under failure, and effortless for developers to use.</em>
              </p>
              <p className="font-mono text-[13px] sm:text-sm text-[#ff9900]/90 leading-relaxed mb-4">
                Outside of work, you&apos;ll often find me capturing mountain landscapes through my camera, trekking across the mountains, or exploring the latest advancements in cloud computing, distributed systems, and platform engineering.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-1.5 xs:gap-x-3 gap-y-2 pt-3.5 border-t border-white/10 font-mono text-[9px] xs:text-[11px] sm:text-xs text-white/70">
              <div className="whitespace-nowrap text-left"><strong className="text-white/90">Location:</strong> Delhi, India</div>
              <div className="whitespace-nowrap text-right"><strong className="text-white/90">Phone:</strong> +91 8130630988</div>
              <div className="whitespace-nowrap text-left"><strong className="text-white/90">Email:</strong> prasadbijendar7@gmail.com</div>
              <div className="whitespace-nowrap text-right"><strong className="text-white/90">Education:</strong> B.Tech, IIIT-Delhi</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

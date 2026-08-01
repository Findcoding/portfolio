"use client";

import React from "react";

export default function SreProjects() {
  return (
    <section id="projects" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-6 sm:mb-10 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Core Projects
        </h2>

        {/* Core Projects Cards - Horizontally Scrollable on Mobile View Only */}
        <div className="flex md:grid md:grid-cols-2 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-6 md:mx-0 px-6 md:px-0">
          {/* Project 1 */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all flex flex-col justify-between w-[290px] xs:w-[330px] md:w-auto shrink-0 snap-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">📁</span>
                <h3 className="font-mono text-sm sm:text-lg font-bold text-white">
                  <a
                    href="https://repository.iiitd.edu.in/xmlui/handle/123456789/1125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00f2fe] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Student Claim Process System</span>
                    <span className="text-[#00f2fe]">↗</span>
                  </a>
                </h3>
              </div>
              <p className="font-mono text-xs text-white/75 leading-relaxed mb-6">
                Built a secure workflow engine regulating claim processes across 10+ university departments. Orchestrated access controls for 500+ users.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Django", "AWS", "MySQL", "Docker", "Nginx"].map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10.5px] sm:text-[11px] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all flex flex-col justify-between w-[290px] xs:w-[330px] md:w-auto shrink-0 snap-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl sm:text-2xl">📁</span>
                <h3 className="font-mono text-sm sm:text-lg font-bold text-white">
                  IIIT-DRIVE Cloud Storage Engine
                </h3>
              </div>
              <p className="font-mono text-xs text-white/75 leading-relaxed mb-6">
                Engineered a cloud-based storage system mimicking Google Drive. Features secure upload (100MB cap), automatic file deletion after 7 days, and administrative auditing tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Django", "AWS S3", "Docker", "Kubernetes"].map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10.5px] sm:text-[11px] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";

interface Commit {
  tag: string;
  head?: boolean;
  hash: string;
  accent: string;
  logo?: string;
  logoBg?: string;
  emoji?: string;
  title: string;
  subtitle: string;
  date: string;
  desc?: string;
  location?: string;
  coursework?: boolean;
}

function hexToRgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function CommitIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
    </svg>
  );
}

function TagIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

function RepoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  );
}

function BranchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
    </svg>
  );
}

export default function SreEducation() {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const iiitCourses = [
    "Linear Algebra",
    "Cloud Computing",
    "Data Structures and Algorithms",
    "Analysis and Design of Algorithms",
    "Theory of Computation",
    "Machine Learning",
    "Artificial Intelligence",
    "Discrete Structures",
    "Collaborative Filtering",
    "Advanced Programming",
    "Operating Systems",
    "Abstract Algebra",
    "Probability and Statistics",
    "Advanced Engineering Mathematics",
    "Number Theory",
    "Scientific Computing",
    "Real Analysis",
  ];

  const defaultLimit = 7;
  const visibleCourses = showAllCourses ? iiitCourses : iiitCourses.slice(0, defaultLimit);

  const commits: Commit[] = [
    {
      tag: "v3.0.0",
      head: true,
      hash: "a1b2c3d",
      accent: "#00f2fe",
      logo: "https://www.iiitd.ac.in/sites/default/files/images/logo/style1colorlarge.png",
      logoBg: "#ffffff",
      title: "Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)",
      subtitle: "Bachelor of Technology (B.Tech) in Computer Science & Applied Mathematics",
      date: "2019 – 2023",
      desc: "Established a strong foundation in computer science and applied mathematics, fostering analytical thinking, system design, and engineering excellence.",
      coursework: true,
    },
    {
      tag: "v2.0.0",
      hash: "e4f5a6b",
      accent: "#34a853",
      emoji: "🎓",
      title: "Ganesh Shankar Vidyarthi Sarvodya Bal Vidyalaya No. 1",
      subtitle: "CBSE | Senior Secondary (Physics, Chemistry, Mathematics)",
      date: "2016 – 2018",
      location: "Sarojini Nagar, New Delhi, Delhi 110023",
    },
    {
      tag: "v1.0.0",
      hash: "c7d8e9f",
      accent: "#df9aff",
      logo: "https://play-lh.googleusercontent.com/6HRh649m5XrF1cInFS8jp_khBj5v2j1nCd6qT-uBkSONkAu2wk047xY-oh8IucUJ97JvwIGWP6DUC7L9Ar8M",
      logoBg: "rgba(255,255,255,0.1)",
      title: "St. Brijmohan lal Senior Secondary School",
      subtitle: "CBSE | Matriculation",
      date: "2014 – 2016",
      location: "Anangpur, Faridabad, Haryana 121003",
    },
  ];

  const spanStart = commits[commits.length - 1].date.split("–")[0].trim();
  const spanEnd = commits[0].date.split("–")[1].trim();
  const spanYears = Number(spanEnd) - Number(spanStart);
  const heatOpacities = [0.06, 0.22, 0.42, 0.66, 0.9];

  return (
    <section id="education" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span className="text-[#00f2fe]">//</span> Academic Journey
          </h2>
          <span className="font-mono text-[10px] sm:text-xs text-white/40 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <CommitIcon className="w-3 h-3 text-[#00f2fe]" />
            git log --graph
          </span>
        </div>
        <p className="font-mono text-xs font-bold text-[#ff9900]/90 mb-8 sm:mb-12">
          Mathematics taught me how to reason. Engineering taught me how to build.
        </p>

        {/* Career history rendered as a git commit graph */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-8 lg:items-start">
          {/* Left column: the commit graph */}
          <div className="relative">
          {/* Branch line */}
          <span
            className="pointer-events-none absolute top-2 bottom-2 w-px left-[15px] sm:left-[19px]"
            style={{ background: "linear-gradient(to bottom, rgba(0,242,254,0.5), rgba(52,168,83,0.4), rgba(223,154,255,0.4), transparent)" }}
          />

          <div className="flex flex-col gap-5 sm:gap-6">
            {commits.map((c, idx) => (
              <div key={idx} className="relative pl-10 sm:pl-14">
                {/* Commit node on the branch line */}
                <span
                  className="absolute top-4 left-[10px] sm:left-[14px] grid place-items-center"
                  aria-hidden="true"
                >
                  {c.head && (
                    <span
                      className="absolute w-4 h-4 rounded-full animate-ping"
                      style={{ background: hexToRgba(c.accent, 0.5) }}
                    />
                  )}
                  <span
                    className="relative w-3 h-3 rounded-full border-2"
                    style={{ background: "#0a0a0f", borderColor: c.accent, boxShadow: `0 0 10px ${hexToRgba(c.accent, 0.7)}` }}
                  />
                </span>

                {/* Commit card */}
                <div
                  className="group rounded-xl bg-[#101018]/80 border border-white/10 hover:border-white/25 transition-all duration-300 p-4 sm:p-6"
                  style={{ boxShadow: `0 10px 40px -28px ${hexToRgba(c.accent, 0.6)}` }}
                >
                  {/* commit meta row: hash + tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                      <CommitIcon className="w-3 h-3" style={{ color: c.accent }} />
                      commit <span className="text-white/60">{c.hash}</span>
                    </span>
                    {c.head && (
                      <span
                        className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                        style={{ color: c.accent, background: hexToRgba(c.accent, 0.12), borderColor: hexToRgba(c.accent, 0.4) }}
                      >
                        HEAD → main
                      </span>
                    )}
                    <span
                      className="flex items-center gap-1 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ color: c.accent, background: hexToRgba(c.accent, 0.08), borderColor: hexToRgba(c.accent, 0.3) }}
                    >
                      <TagIcon className="w-2.5 h-2.5" />
                      {c.tag}
                    </span>
                  </div>

                  {/* Institution header */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div
                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-white/20 text-lg"
                        style={{ background: c.logoBg ?? "rgba(255,255,255,0.1)" }}
                      >
                        {c.logo ? (
                          <img src={c.logo} alt={c.title} className="max-w-full max-h-full w-auto h-auto object-contain p-1" />
                        ) : (
                          <span>{c.emoji}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-mono text-xs sm:text-base font-bold text-white leading-tight">{c.title}</h3>
                        <p className="font-mono text-[11px] sm:text-xs mt-0.5 sm:mt-1" style={{ color: c.accent }}>
                          {c.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-white/50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0 w-fit">
                      {c.date}
                    </span>
                  </div>

                  {/* Description */}
                  {c.desc && (
                    <p className="font-mono text-[11px] sm:text-xs text-white/70 leading-relaxed mt-4">{c.desc}</p>
                  )}

                  {/* Location */}
                  {c.location && (
                    <p className="font-mono text-[10px] sm:text-[11px] text-white/40 mt-3 pl-14 sm:pl-[72px]">{c.location}</p>
                  )}

                  {/* Coursework — rendered as the commit's changed files */}
                  {c.coursework && (
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <h4 className="font-mono text-[10.5px] sm:text-xs font-bold text-white/90 mb-3 uppercase tracking-wider flex items-center gap-2">
                        Completed Key Coursework
                        <span className="text-white/35 normal-case font-normal">
                          {iiitCourses.length} files changed
                        </span>
                      </h4>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center mb-3">
                        {visibleCourses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/15 text-white/80 hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>

                      {/* CLI toggle — unchanged logic */}
                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => setShowAllCourses(!showAllCourses)}
                          className="font-mono text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/15 text-[#00f2fe] hover:border-[#00f2fe]/60 hover:bg-[#00f2fe]/10 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <span className="text-[#9d4edd] font-bold">$</span>
                          <span>{showAllCourses ? "cd .." : "ls additional_courses"}</span>
                          <span className="text-white/50 text-[9px] sm:text-[10px] ml-1">
                            {showAllCourses ? "[less]" : `[+${iiitCourses.length - defaultLimit}]`}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Initial commit note */}
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute top-1.5 left-[11px] sm:left-[15px] w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#0a0a0f]" aria-hidden="true" />
              <p className="font-mono text-[10.5px] sm:text-xs text-white/50 italic">
                Focus: Core Science, Higher Mathematics, and Logical Foundations.
              </p>
            </div>
            </div>
          </div>

          {/* Right column: repo-summary sidebar — fills wide-screen space */}
          <aside className="hidden lg:flex flex-col gap-6 lg:sticky lg:top-24 rounded-2xl bg-[#101018]/80 border border-white/10 p-6">
            {/* Repo header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <RepoIcon className="w-4 h-4 text-[#00f2fe]" />
                <span className="font-mono text-sm font-bold text-white">career/education</span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 border border-white/15 rounded-full px-2 py-0.5">
                Public
              </span>
            </div>

            <p className="font-mono text-[11px] text-white/60 leading-relaxed">
              A {spanYears}-year build history — from mathematical foundations to production engineering.
            </p>

            {/* Repo stats */}
            <div className="flex flex-col gap-2.5 font-mono text-[11px] pt-1 border-t border-white/10">
              <div className="flex items-center justify-between pt-3">
                <span className="flex items-center gap-2 text-white/50">
                  <BranchIcon className="w-3.5 h-3.5 text-[#00f2fe]" /> branch
                </span>
                <span className="text-white/85">main</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-white/50">
                  <CommitIcon className="w-3.5 h-3.5" style={{ color: "#34a853" }} /> commits
                </span>
                <span className="text-white/85">{commits.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-white/50">
                  <TagIcon className="w-3.5 h-3.5" style={{ color: "#df9aff" }} /> tags
                </span>
                <span className="text-white/85">
                  {commits[commits.length - 1].tag} → {commits[0].tag}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-white/50">
                  <span className="text-[#ff9900]">🗓</span> span
                </span>
                <span className="text-white/85">{spanStart} – {spanEnd}</span>
              </div>
            </div>

            {/* Commit-activity heatmap */}
            <div className="pt-1 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-2.5 pt-3">
                commit activity
              </div>
              <div className="grid grid-flow-col grid-rows-[repeat(7,minmax(0,1fr))] gap-[3px] w-fit">
                {Array.from({ length: 98 }).map((_, i) => {
                  const lv = Math.max(0, ((i * 17 + (i % 7) * 5) % 6) - 1);
                  return (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-[2px]"
                      style={{ background: hexToRgba("#00f2fe", heatOpacities[lv]) }}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-end gap-1 mt-2.5 font-mono text-[9px] text-white/35">
                less
                {heatOpacities.map((op, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-[2px]" style={{ background: hexToRgba("#00f2fe", op) }} />
                ))}
                more
              </div>
            </div>

            {/* Releases */}
            <div className="pt-1 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-3 pt-3">releases</div>
              <div className="flex flex-col gap-2.5">
                {commits.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 min-w-0">
                    <span style={{ color: c.accent }}>
                      <TagIcon className="w-3 h-3 shrink-0" />
                    </span>
                    <span className="font-mono text-[11px] font-bold shrink-0" style={{ color: c.accent }}>
                      {c.tag}
                    </span>
                    <span className="font-mono text-[10px] text-white/40 truncate">{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

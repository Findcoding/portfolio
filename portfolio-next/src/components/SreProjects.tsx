"use client";

import React from "react";

interface Project {
  name: string;
  slug: string;
  href: string | null;
  desc: string;
  stack: string[];
}

const TECH_COLORS: Record<string, string> = {
  Django: "#44B78B",
  AWS: "#FF9900",
  "AWS S3": "#E25444",
  MySQL: "#4479A1",
  Docker: "#2496ED",
  Nginx: "#009639",
  Kubernetes: "#326CE5",
};

const techColor = (t: string) => TECH_COLORS[t] ?? "#00f2fe";

const projects: Project[] = [
  {
    name: "Student Claim Process System",
    slug: "student-claim-process-system",
    href: "https://repository.iiitd.edu.in/xmlui/handle/123456789/1125",
    desc: "Built a secure workflow engine regulating claim processes across 10+ university departments. Orchestrated access controls for 500+ users.",
    stack: ["Django", "AWS", "MySQL", "Docker", "Nginx"],
  },
  {
    name: "IIIT-DRIVE Cloud Storage Engine",
    slug: "iiit-drive-cloud-storage-engine",
    href: null,
    desc: "Engineered a cloud-based storage system mimicking Google Drive. Features secure upload (100MB cap), automatic file deletion after 7 days, and administrative auditing tools.",
    stack: ["Django", "AWS S3", "Docker", "Kubernetes"],
  },
];

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

function ProjectCard({ project }: { project: Project }) {
  // Organic, GitHub-style descending weights for the language bar
  const weights = project.stack.map((_, i) => project.stack.length - i * 0.55);
  const total = weights.reduce((a, b) => a + b, 0);

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all duration-300 flex flex-col justify-between w-[290px] xs:w-[330px] md:w-auto shrink-0 snap-start hover:shadow-[0_20px_50px_-25px_rgba(0,242,254,0.45)]">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f2fe]/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-7 flex flex-col h-full">
        {/* Repo header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <RepoIcon className="w-4 h-4 text-[#00f2fe] shrink-0" />
            <div className="font-mono text-sm sm:text-[15px] font-bold min-w-0">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00f2fe] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="truncate">{project.slug}</span>
                  <span className="text-[#00f2fe] shrink-0">↗</span>
                </a>
              ) : (
                <span className="text-white truncate">{project.slug}</span>
              )}
            </div>
          </div>
          <span className="flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-white/50 border border-white/15 rounded-full px-2 py-0.5 shrink-0">
            <BranchIcon className="w-2.5 h-2.5" />
            main
          </span>
        </div>

        {/* Human-readable project title */}
        <h3 className="font-mono text-[13px] font-bold text-white/90 mb-2">{project.name}</h3>

        {/* README description */}
        <p className="font-mono text-xs text-white/65 leading-relaxed mb-6">{project.desc}</p>

        {/* Language breakdown bar + legend */}
        <div className="mt-auto">
          <div className="flex h-2 w-full rounded-full overflow-hidden bg-white/5 mb-3">
            {project.stack.map((t, i) => (
              <div
                key={i}
                title={t}
                style={{
                  width: `${(weights[i] / total) * 100}%`,
                  background: techColor(t),
                  boxShadow: "inset -1px 0 0 rgba(10,10,15,0.6)",
                }}
                className="h-full transition-transform duration-300 group-hover:brightness-110"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {project.stack.map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 font-mono text-[11px] text-white/70">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: techColor(t) }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SreProjects() {
  return (
    <section id="projects" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-10">
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span className="text-[#00f2fe]">//</span> Core Projects
          </h2>
          <span className="font-mono text-[10px] sm:text-xs text-white/40 border border-white/10 rounded-full px-3 py-1.5">
            {projects.length} repositories
          </span>
        </div>

        {/* Repository cards — horizontally scrollable on mobile, 2-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-6 md:mx-0 px-6 md:px-0 items-stretch">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

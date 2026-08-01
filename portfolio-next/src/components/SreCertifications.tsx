"use client";

import React, { useState } from "react";

interface Cert {
  name: string;
  url: string;
  issuer: string;
  badge: string;
}

const certificationsList: Cert[] = [
  { name: "Introduction to Data Structures & Algorithms in Java", url: "https://www.linkedin.com/learning/certificates/99501668359327ee8c4a2f248eb8a75c05dd28168b29ed224b9354264d38566a", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "Create and Manage Cloud Resources", url: "https://www.cloudskillsboost.google/public_profiles/23594fa8-8c63-4d59-b0b8-178133f84a39/badges/3104503?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", issuer: "Google Cloud", badge: "☁️" },
  { name: "Photography Techniques: Light, Content, and Sharing", url: "https://www.coursera.org/account/accomplishments/certificate/M7JKZUL2K2MD", issuer: "Coursera (Michigan State University)", badge: "📷" },
  { name: "Git Essential Training: The Basics (2019)", url: "https://www.linkedin.com/learning/certificates/779ddc50df8553870a76f3a7230347d32bedb79c136b744231473cd212e125a3", issuer: "LinkedIn Learning", badge: "💻" },
  { name: "Learning Linux Command Line (2018)", url: "https://www.linkedin.com/learning/certificates/c28f2b2579f3b4e8e4e65ba39c4a8908fdee4ab08e152c28009410f9dc2d0bda", issuer: "LinkedIn Learning", badge: "🐧" },
  { name: "Programming Foundations: APIs and Web Services", url: "https://www.linkedin.com/learning/certificates/43e445938120287e9978dddce17b803722547d123a25c46f446334783c191040", issuer: "LinkedIn Learning", badge: "🔌" },
  { name: "Building an Android App with Architecture Components", url: "https://www.linkedin.com/learning/certificates/6e462e40425de75138c21c7fe80e4267303416ad8bdaf82b2cb289b9ac2537c2", issuer: "LinkedIn Learning", badge: "🤖" },
  { name: "Android Development Essential Training: App Architecture with Kotlin", url: "https://www.linkedin.com/learning/certificates/67f14f2f60ca31f852fcb8906a6e12110e72bf7e7d9421015723d81eca2aa5ab", issuer: "LinkedIn Learning", badge: "🤖" },
  { name: "Programming Foundations: Algorithms", url: "https://www.linkedin.com/learning/certificates/164b04c3230ca97cc8e3fcf94e9061811cf959b62b79cd78fdd081cdfc36f534", issuer: "LinkedIn Learning", badge: "📊" },
  { name: "Java: Database Integration with JDBC", url: "https://www.linkedin.com/learning/certificates/10bc68b26c0d60848ccd7b04d120c3274775b914c9b7028442025ae65fec9b84", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "Programming Foundations: Databases", url: "https://www.linkedin.com/learning/certificates/42b742aa8b85e2deebe57e7aca76fec02f9e75c528c2230ad3014bd784b83009", issuer: "LinkedIn Learning", badge: "🗄️" },
  { name: "Java 8+ Essential Training: Objects and APIs", url: "https://www.linkedin.com/learning/certificates/223dbf6f44fa1896de54bc2f3cf72d63595214d6adc20c970e6c43c0171869ca", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "Java 8+ Essential Training: Syntax and Structure", url: "https://www.linkedin.com/learning/certificates/159a170052544ea7ca4171d2d1a60d41d7064764f777311ae0c847df185a6c1b", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "Learning Java Applications (2019)", url: "https://www.linkedin.com/learning/certificates/435d183965d12af173f753cecbd765f7d5f21069ad35cdcdb8355ac53f775c69", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "MySQL Essential Training", url: "https://www.linkedin.com/learning/certificates/b029c77f764caf6399c59e3152b0961225b57f85f1e36429abb900c3fa38ad37", issuer: "LinkedIn Learning", badge: "🐬" },
  { name: "Learning Java (2018)", url: "https://www.linkedin.com/learning/certificates/b18bad8a83cc4fc6a45329764d615eaf256bb58901fe6289463e1d92f34791a1", issuer: "LinkedIn Learning", badge: "☕" },
  { name: "Spanish Vocabulary Project", url: "https://www.coursera.org/account/accomplishments/certificate/FJCWY9SZSV86", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Spanish Vocabulary: Sports, Travel, and the Home", url: "https://www.coursera.org/account/accomplishments/certificate/7X4YFZ46G5G9", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Spanish Vocabulary: Careers and Social Events", url: "https://www.coursera.org/account/accomplishments/certificate/V29QAPM26UVU", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Learn Spanish: Basic Spanish Vocabulary Specialization", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2X9LLXHM2U4S", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Spanish Vocabulary: Cultural Experience", url: "https://www.coursera.org/account/accomplishments/certificate/TP6DPB7WZ62K", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Spanish Vocabulary: Meeting People", url: "https://www.coursera.org/account/accomplishments/certificate/KVV57CNDJCPW", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
  { name: "Algorithms on Graphs", url: "https://www.coursera.org/account/accomplishments/certificate/C4MY9WJT4A8F", issuer: "Coursera (UC San Diego & HSE University)", badge: "📊" },
  { name: "Photography Capstone Project", url: "https://www.coursera.org/account/accomplishments/certificate/5LZQZJJ7NR95", issuer: "Coursera (Michigan State University)", badge: "📷" },
  { name: "Principles of Photo Composition and Digital Image Post-Production", url: "https://www.coursera.org/account/accomplishments/certificate/NK4RLQYR4Y8C", issuer: "Coursera (Michigan State University)", badge: "📷" },
  { name: "Algorithmic Toolbox", url: "https://www.coursera.org/account/accomplishments/certificate/JG2PE72HES8W", issuer: "Coursera (UC San Diego & HSE University)", badge: "📊" },
  { name: "Cameras, Exposure, and Photography", url: "https://www.coursera.org/account/accomplishments/certificate/J2HJ79T823J6", issuer: "Coursera (Michigan State University)", badge: "📷" },
  { name: "Camera Control", url: "https://www.coursera.org/account/accomplishments/certificate/G3PECHR8EMZV", issuer: "Coursera (Michigan State University)", badge: "📷" },
  { name: "Photography Basics and Beyond: From Smartphone to DSLR Specialization", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLBN2CJ8ECWJ", issuer: "Coursera (Michigan State University)", badge: "📷" }
];

export default function SreCertifications() {
  const [isPaused, setIsPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const row1 = certificationsList.slice(0, 15);
  const row2 = certificationsList.slice(15);

  return (
    <section id="certifications" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative overflow-hidden">
      {/* Inline Bi-directional Marquee Keyframes Animation */}
      <style>{`
        @keyframes certsMarqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes certsMarqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-certs-left {
          animation: certsMarqueeLeft 45s linear infinite;
        }
        .animate-certs-right {
          animation: certsMarqueeRight 45s linear infinite;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Professional Certifications
        </h2>
        <p className="font-mono text-xs text-white/60 mb-8">
          Professional certifications, technical courses, and continuous learning across cloud infrastructure, software engineering, and technology.
        </p>

        {/* Static Grid View when View All (29) is Clicked - No Animation, No Scrolling */}
        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {certificationsList.map((cert, idx) => (
              <div
                key={`static-${idx}`}
                className="p-4 sm:p-5 rounded-xl bg-[#101018]/90 border border-white/10 hover:border-[#00f2fe]/60 transition-all flex items-start gap-3.5 shadow-lg group/cert"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-lg sm:text-xl shrink-0">
                  {cert.badge}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-mono text-[11.5px] sm:text-xs font-bold text-white leading-snug mb-1">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00f2fe] transition-colors inline-flex items-center gap-1 max-w-full"
                    >
                      <span>{cert.name}</span>
                      <span className="text-[#00f2fe] shrink-0">↗</span>
                    </a>
                  </h3>
                  <p className="font-mono text-[10.5px] sm:text-[11px] text-white/50">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 2-Row Bi-Directional Infinite Marquee for Mobile & Laptop View */
          <div
            className="relative overflow-hidden -mx-6 px-6 py-2 space-y-4 sm:space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Edge Gradient Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

            {/* Row 1: Leftwards Marquee (Right -> Left) */}
            <div
              className="flex gap-4 sm:gap-6 w-max animate-certs-left hover:[animation-play-state:paused] active:[animation-play-state:paused]"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {[...row1, ...row1].map((cert, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="p-4 sm:p-5 rounded-xl bg-[#101018]/90 border border-white/10 hover:border-[#00f2fe]/60 transition-all flex items-start gap-3.5 w-[290px] sm:w-[350px] shrink-0 shadow-lg group/cert"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-lg sm:text-xl shrink-0">
                    {cert.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-[11.5px] sm:text-xs font-bold text-white leading-snug mb-1 truncate" title={cert.name}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00f2fe] transition-colors inline-flex items-center gap-1 max-w-full"
                      >
                        <span className="truncate">{cert.name}</span>
                        <span className="text-[#00f2fe] shrink-0">↗</span>
                      </a>
                    </h3>
                    <p className="font-mono text-[10.5px] sm:text-[11px] text-white/50 truncate">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Rightwards Marquee (Left -> Right) */}
            <div
              className="flex gap-4 sm:gap-6 w-max animate-certs-right hover:[animation-play-state:paused] active:[animation-play-state:paused]"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {[...row2, ...row2].map((cert, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="p-4 sm:p-5 rounded-xl bg-[#101018]/90 border border-white/10 hover:border-[#00f2fe]/60 transition-all flex items-start gap-3.5 w-[290px] sm:w-[350px] shrink-0 shadow-lg group/cert"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-lg sm:text-xl shrink-0">
                    {cert.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-[11.5px] sm:text-xs font-bold text-white leading-snug mb-1 truncate" title={cert.name}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00f2fe] transition-colors inline-flex items-center gap-1 max-w-full"
                      >
                        <span className="truncate">{cert.name}</span>
                        <span className="text-[#00f2fe] shrink-0">↗</span>
                      </a>
                    </h3>
                    <p className="font-mono text-[10.5px] sm:text-[11px] text-white/50 truncate">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Toggle Button Container */}
        <div className="flex justify-center mt-8 sm:mt-10">
          {showAll ? (
            /* Hide Button - Uiverse AKAspidey01 style adapted for Dark Neon theme (No text overlap) */
            <button
              onClick={() => setShowAll(false)}
              type="button"
              className="relative group bg-[#101018]/90 border border-white/20 px-6 py-2.5 rounded-2xl h-12 inline-flex items-center justify-center gap-3 text-white font-mono text-sm font-bold shadow-lg overflow-hidden cursor-pointer active:scale-95 transition-all duration-300"
            >
              {/* Expanding Background Highlight Block */}
              <div className="bg-[#00f2fe]/25 border border-[#00f2fe]/50 rounded-xl h-9 w-9 absolute left-1.5 top-1.5 group-hover:w-[calc(100%-12px)] z-0 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(0,242,254,0.3)]" />

              {/* Left Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="w-4.5 h-4.5 fill-[#00f2fe] relative z-10 shrink-0 group-hover:-translate-x-0.5 transition-transform duration-300"
              >
                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
              </svg>

              {/* Text Label */}
              <span className="relative z-10 font-mono tracking-wider font-bold text-white group-hover:text-white transition-colors duration-300">
                Hide
              </span>
            </button>
          ) : (
            /* View All Button - Uiverse alexmaracinaru expanding pill style */
            <button
              onClick={() => setShowAll(true)}
              type="button"
              className="group relative inline-flex items-center px-5 py-3 transition-all duration-300 ease-out border-0 bg-transparent cursor-pointer active:scale-95 before:content-[''] before:absolute before:top-0 before:left-0 before:block before:w-11 before:h-full before:rounded-full before:bg-[#00f2fe]/20 before:border before:border-[#00f2fe]/50 before:shadow-[0_0_20px_rgba(0,242,254,0.25)] before:transition-all before:duration-300 hover:before:w-full hover:before:bg-[#00f2fe]/30 hover:before:border-[#00f2fe] hover:before:shadow-[0_0_30px_rgba(0,242,254,0.45)]"
            >
              <span className="relative z-10 font-mono text-xs sm:text-sm font-bold tracking-wider text-white pl-2">
                View All (29)
              </span>
              <svg
                className="relative z-10 ml-2.5 w-4 h-3 stroke-[#00f2fe] stroke-2 fill-none -translate-x-1 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 13 10"
                style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
              >
                <path d="M1,5 L11,5" />
                <polyline points="8 1 12 5 8 9" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

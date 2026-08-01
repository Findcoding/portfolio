"use client";

import React, { useState } from "react";

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

  return (
    <section id="education" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Academic Journey
        </h2>
        <p className="font-mono text-xs font-bold text-[#ff9900]/90 mb-6 sm:mb-10">
          Mathematics taught me how to reason. Engineering taught me how to build.
        </p>

        {/* Academic Journey Cards - 2 Windows (College & Combined Schooling) */}
        <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible gap-6 pb-3 lg:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-6 lg:mx-0 px-6 lg:px-0">
          {/* IIIT-Delhi College Card */}
          <div className="p-4 sm:p-8 rounded-xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all w-[300px] sm:w-[360px] lg:w-auto shrink-0 snap-start flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden border border-white/20">
                    <img
                      src="https://www.iiitd.ac.in/sites/default/files/images/logo/style1colorlarge.png"
                      alt="IIIT-Delhi Logo"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold text-white leading-tight">
                      Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)
                    </h3>
                    <p className="font-mono text-[11px] sm:text-xs text-[#00f2fe] mt-0.5 sm:mt-1">
                      Bachelor of Technology (B.Tech) in Computer Science &amp; Applied Mathematics
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-white/50 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0 w-fit">
                  2019 – 2023
                </span>
              </div>

              <p className="font-mono text-[11px] sm:text-xs text-white/70 leading-relaxed mb-4 sm:mb-6">
                Established a strong foundation in computer science and applied mathematics, fostering analytical thinking, system design, and engineering excellence.
              </p>

              <div>
                <h4 className="font-mono text-[10.5px] sm:text-xs font-bold text-white/90 mb-2 sm:mb-3 uppercase tracking-wider">
                  Completed Key Coursework:
                </h4>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center mb-3">
                  {visibleCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/15 text-white/80 hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CLI Button Below Courses List Aligned to Extreme Right */}
            <div className="flex justify-end pt-2">
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

          {/* Combined School Education Window */}
          <div className="p-4 sm:p-8 rounded-xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all w-[300px] sm:w-[360px] lg:w-auto shrink-0 snap-start flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-[11px] sm:text-xs font-bold text-[#00f2fe] mb-4 sm:mb-6 uppercase tracking-wider flex items-center gap-2">
                <span>🏫</span>
                <span>Schooling Foundation (CBSE)</span>
              </h4>

              {/* High School Section */}
              <div className="pb-5 border-b border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0">
                      🎓
                    </div>
                    <div>
                      <h3 className="font-mono text-xs sm:text-base font-bold text-white leading-tight">
                        Ganesh Shankar Vidyarthi Sarvodya Bal Vidyalaya No. 1
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-[#00f2fe] mt-0.5">
                        CBSE | Senior Secondary (Physics, Chemistry, Mathematics)
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10 shrink-0 w-fit">
                    2016 – 2018
                  </span>
                </div>
                <p className="font-mono text-[10px] sm:text-[11px] text-white/40 pl-13">
                  Sarojini Nagar, New Delhi, Delhi 110023
                </p>
              </div>

              {/* Secondary School Section */}
              <div className="pt-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center shrink-0">
                      <img
                        src="https://play-lh.googleusercontent.com/6HRh649m5XrF1cInFS8jp_khBj5v2j1nCd6qT-uBkSONkAu2wk047xY-oh8IucUJ97JvwIGWP6DUC7L9Ar8M"
                        alt="St. Brijmohan Lal Logo"
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-mono text-xs sm:text-base font-bold text-white leading-tight">
                        St. Brijmohan lal Senior Secondary School
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-[#00f2fe] mt-0.5">
                        CBSE | Matriculation
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10 shrink-0 w-fit">
                    2014 – 2016
                  </span>
                </div>
                <p className="font-mono text-[10px] sm:text-[11px] text-white/40 pl-13">
                  Anangpur, Faridabad, Haryana 121003
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 mt-4">
              <span className="font-mono text-[10.5px] sm:text-xs text-white/50 italic">
                Focus: Core Science, Higher Mathematics, and Logical Foundations.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

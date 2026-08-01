"use client";

import React from "react";

export default function SreAchievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "500+ Solved Problems",
      desc: "Mastered complex data structures and algorithms on LeetCode, GeeksforGeeks, and InterviewBit.",
    },
    {
      icon: "⚡",
      title: "CodeChef Division 4",
      desc: "Secured a competitive 2613th rank in the CodeChef Starters 43 contest.",
    },
    {
      icon: "🛡️",
      title: "Zero Downtime Deployments",
      desc: "Achieved 99.99% uptime objectives by tuning K8s readiness/liveness probes and HPA rules.",
    },
  ];

  return (
    <section className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-10 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Key Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#101018]/80 border border-white/10 hover:border-[#00f2fe]/50 transition-all flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-mono text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="font-mono text-xs text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

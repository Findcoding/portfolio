"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: string;
  query: string;
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  title: string;
  unitLabel: string;
  badge?: string;
  desc: string;
  accent: string;
  trendLabel: string;
  spark: number[];
}

const stats: Stat[] = [
  {
    icon: "🏆",
    query: "count(problems_solved)",
    value: 500,
    decimals: 0,
    prefix: "",
    suffix: "+",
    title: "Solved Problems",
    unitLabel: "total",
    desc: "Mastered data structures & algorithms across LeetCode, GeeksforGeeks, and InterviewBit.",
    accent: "#00f2fe",
    trendLabel: "▲ steady climb",
    spark: [6, 9, 8, 13, 12, 17, 16, 21, 20, 25, 30],
  },
  {
    icon: "⚡",
    query: "min(codechef_rank)",
    value: 2613,
    decimals: 0,
    prefix: "#",
    suffix: "",
    title: "CodeChef Rank",
    unitLabel: "Starters 43",
    badge: "Division 4",
    desc: "Secured 2613th place in the CodeChef Starters 43 contest — competitive global standing.",
    accent: "#df9aff",
    trendLabel: "▼ rank improving",
    spark: [30, 27, 26, 21, 22, 16, 15, 12, 9, 7, 5],
  },
  {
    icon: "🛡️",
    query: "avg(uptime_slo)",
    value: 99.99,
    decimals: 2,
    prefix: "",
    suffix: "%",
    title: "Uptime SLO",
    unitLabel: "availability",
    desc: "Hit 99.99% availability by tuning Kubernetes readiness/liveness probes and HPA scaling rules.",
    accent: "#34a853",
    trendLabel: "▲ zero downtime",
    spark: [92, 95, 96, 98, 97, 99, 99.4, 99.7, 99.9, 99.95, 99.99],
  },
];

function hexToRgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function StatPanel({ stat, index, visible }: { stat: Stat; index: number; visible: boolean }) {
  const delay = index * 160;
  const [display, setDisplay] = useState(
    stat.prefix + (stat.decimals ? (0).toFixed(stat.decimals) : "0") + stat.suffix
  );

  // Count-up animation, triggered when the section scrolls into view
  useEffect(() => {
    if (!visible) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const format = (v: number) =>
      stat.prefix +
      (stat.decimals ? v.toFixed(stat.decimals) : Math.round(v).toLocaleString()) +
      stat.suffix;

    if (prefersReduced) {
      setDisplay(format(stat.value));
      return;
    }

    let raf = 0;
    const duration = 1500;
    const startTime = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - startTime) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(stat.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, delay, stat]);

  // Build sparkline geometry
  const min = Math.min(...stat.spark);
  const max = Math.max(...stat.spark);
  const range = max - min || 1;
  const pts = stat.spark.map((v, i) => {
    const x = (i / (stat.spark.length - 1)) * 100;
    const y = 100 - ((v - min) / range) * 100;
    return [x, y] as const;
  });
  const line = pts.map((p) => `${p[0]},${p[1]}`).join(" ");
  const area = `0,100 ${line} 100,100`;
  const last = pts[pts.length - 1];
  const gradId = `spark-grad-${index}`;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-[#101018]/90 border border-white/10 shadow-lg transition-all duration-300 flex flex-col"
      style={{ boxShadow: `0 10px 40px -20px ${hexToRgba(stat.accent, 0.5)}` }}
    >
      {/* Graph-paper grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Accent hover ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1px ${hexToRgba(stat.accent, 0.55)}, 0 0 30px ${hexToRgba(stat.accent, 0.15)}` }}
      />
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)` }}
      />

      <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
        {/* Header: PromQL-style query + live dot + icon */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="relative flex w-1.5 h-1.5">
                <span
                  className="absolute inline-flex w-full h-full rounded-full opacity-70 animate-ping"
                  style={{ background: stat.accent }}
                />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full" style={{ background: stat.accent }} />
              </span>
              <span className="font-mono text-[10px] text-white/45 truncate">{stat.query}</span>
            </div>
          </div>
          <span
            className="grid place-items-center w-9 h-9 rounded-xl text-lg shrink-0 border"
            style={{ background: hexToRgba(stat.accent, 0.1), borderColor: hexToRgba(stat.accent, 0.3) }}
          >
            {stat.icon}
          </span>
        </div>

        {/* Big metric value */}
        <div className="flex items-baseline gap-2 mb-0.5">
          <span
            className="font-mono text-4xl sm:text-5xl font-extrabold tabular-nums tracking-tight leading-none"
            style={{ color: stat.accent, textShadow: `0 0 24px ${hexToRgba(stat.accent, 0.35)}` }}
          >
            {display}
          </span>
          {stat.badge && (
            <span
              className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border"
              style={{ color: stat.accent, background: hexToRgba(stat.accent, 0.1), borderColor: hexToRgba(stat.accent, 0.3) }}
            >
              {stat.badge}
            </span>
          )}
        </div>

        {/* Title + unit */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <h3 className="font-mono text-sm font-bold text-white">{stat.title}</h3>
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/35">{stat.unitLabel}</span>
        </div>

        {/* Sparkline panel */}
        <div className="relative h-14 w-full mb-3">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stat.accent} stopOpacity={0.3} />
                <stop offset="100%" stopColor={stat.accent} stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <polygon
              points={area}
              fill={`url(#${gradId})`}
              style={{ opacity: visible ? 1 : 0, transition: "opacity 1.2s ease-out", transitionDelay: `${delay + 300}ms` }}
            />
            {/* Trend line, draws itself in */}
            <polyline
              points={line}
              fill="none"
              stroke={stat.accent}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: visible ? 0 : 1,
                transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${delay}ms`,
              }}
            />
            {/* Endpoint marker */}
            <circle
              cx={last[0]}
              cy={last[1]}
              r={3}
              fill={stat.accent}
              vectorEffect="non-scaling-stroke"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.4s ease-out",
                transitionDelay: `${delay + 1400}ms`,
                filter: `drop-shadow(0 0 4px ${stat.accent})`,
              }}
            />
          </svg>
        </div>

        {/* Trend label */}
        <div className="font-mono text-[10px] font-semibold mb-2" style={{ color: stat.accent }}>
          {stat.trendLabel}
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] text-white/55 leading-relaxed mt-auto">{stat.desc}</p>
      </div>
    </div>
  );
}

export default function SreAchievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10">
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span className="text-[#00f2fe]">//</span> Key Achievements
          </h2>
          <span className="font-mono text-[10px] sm:text-xs text-white/40 border border-white/10 rounded-full px-3 py-1.5">
            metrics · last 12 data points
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {stats.map((stat, idx) => (
            <StatPanel key={idx} stat={stat} index={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

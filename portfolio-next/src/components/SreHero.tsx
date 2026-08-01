"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface LogoDef {
  name: string;
  color: string;
  src: string;
}

const si = (slug: string, tint?: string) =>
  `https://cdn.simpleicons.org/${slug}${tint ? "/" + tint : ""}`;
const dev = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

const LOGOS: LogoDef[] = [
  // Cloud Platforms
  { name: "AWS", color: "#FF9900", src: dev("amazonwebservices/amazonwebservices-original-wordmark") },
  { name: "Azure", color: "#3AA0E3", src: dev("azure/azure-original") },
  { name: "GCP", color: "#4285F4", src: dev("googlecloud/googlecloud-original") },
  // Orchestration & Containers
  { name: "Kubernetes", color: "#3D6CE7", src: si("kubernetes") },
  { name: "Docker", color: "#2496ED", src: si("docker") },
  { name: "Helm", color: "#5B8DEF", src: si("helm", "5B8DEF") },
  { name: "Nginx", color: "#37B24D", src: si("nginx") },
  // IaC & DevOps
  { name: "Terraform", color: "#844FBA", src: si("terraform") },
  { name: "Ansible", color: "#EE0000", src: si("ansible", "FF3B3B") },
  { name: "Jenkins", color: "#D24939", src: si("jenkins", "E15C4B") },
  { name: "GitHub Actions", color: "#2E8BFF", src: si("githubactions") },
  { name: "GitLab", color: "#FC6D26", src: si("gitlab") },
  { name: "ArgoCD", color: "#EF7B4D", src: si("argo") },
  // Monitoring & Security
  { name: "Prometheus", color: "#E6522C", src: si("prometheus") },
  { name: "Grafana", color: "#F46800", src: si("grafana") },
  { name: "Elasticsearch", color: "#FEC514", src: si("elasticsearch", "FEC514") },
  { name: "Vault", color: "#FFD814", src: si("vault", "FFE45E") },
  { name: "SonarQube", color: "#4E9BCD", src: si("sonarqubeserver", "5FB0E0") },
  // Languages & Frameworks
  { name: "Python", color: "#4B8BBE", src: si("python", "5DA9E0") },
  { name: "JavaScript", color: "#F7DF1E", src: si("javascript") },
  { name: "Node.js", color: "#5FA04E", src: si("nodedotjs", "7CC167") },
  { name: "React", color: "#61DAFB", src: si("react") },
  { name: "Bash", color: "#57C038", src: si("gnubash", "7BD65C") },
  // Databases & Streaming
  { name: "MySQL", color: "#4479A1", src: si("mysql", "6FA8D6") },
  { name: "PostgreSQL", color: "#4169E1", src: si("postgresql", "6E8FF0") },
  { name: "MongoDB", color: "#47A248", src: si("mongodb", "5CC15D") },
  { name: "Redis", color: "#FF4438", src: si("redis", "FF6156") },
  { name: "Kafka", color: "#C9CDD3", src: si("apachekafka", "E6E9EE") },
  { name: "Spark", color: "#E25A1C", src: si("apachespark") },
  { name: "Airflow", color: "#2AA5EE", src: si("apacheairflow", "2AA5EE") },
];

export default function SreHero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roadmapText, setRoadmapText] = useState("ROADMAP");

  const handleRoadmapHover = () => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const target = "ROADMAP";
    let iteration = 0;

    const interval = setInterval(() => {
      setRoadmapText(
        target
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return target[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 35);
  };

  useEffect(() => {
    const heroSection = heroRef.current;
    const canvas = canvasRef.current;
    const heroContainer = containerRef.current;
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    const connectionDistance = 210;
    const repulsionRadius = 150;
    const repulsionStrength = 2.6;
    const gravityForce = -0.014;

    const mouse = { x: null as number | null, y: null as number | null };

    function resizeCanvas() {
      if (!heroSection || !canvas || !ctx) return;
      const rect = heroSection.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // 3D Parallax Tilt effect on the Hero container content
      if (heroContainer) {
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (e.clientX - rect.left - cx) / cx;
        const dy = (e.clientY - rect.top - cy) / cy;

        heroContainer.style.transform = `perspective(1000px) rotateY(${dx * 7
          }deg) rotateX(${-dy * 7}deg) translateZ(8px)`;
        heroContainer.style.transition = "none";
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;

      if (heroContainer) {
        heroContainer.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0deg)";
        heroContainer.style.transition =
          "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
      }
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseleave", handleMouseLeave);

    interface LoadedImg extends HTMLImageElement {
      loaded?: boolean;
      broken?: boolean;
    }

    function loadImage(def: LogoDef): LoadedImg {
      const img = new Image() as LoadedImg;
      img.decoding = "async";
      img.loaded = false;
      img.broken = false;
      img.onload = () => {
        img.loaded = true;
      };
      img.onerror = () => {
        img.broken = true;
      };
      img.src = def.src;
      return img;
    }

    function roundRect(
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) {
      if (context.roundRect) {
        context.beginPath();
        context.roundRect(x, y, w, h, r);
        return;
      }
      context.beginPath();
      context.moveTo(x + r, y);
      context.arcTo(x + w, y, x + w, y + h, r);
      context.arcTo(x + w, y + h, x, y + h, r);
      context.arcTo(x, y + h, x, y, r);
      context.arcTo(x, y, x + w, y, r);
      context.closePath();
    }

    function hexToRgba(hex: string, a: number) {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
    }

    class LogoChip {
      def: LogoDef;
      img: LoadedImg;
      scale: number;
      depth!: number;
      size!: number;
      alpha!: number;
      speed!: number;
      x!: number;
      y!: number;
      vx!: number;
      vy!: number;
      phase!: number;

      constructor(def: LogoDef) {
        this.def = def;
        this.img = loadImage(def);
        this.scale = 1;
        this.reset(true);
      }

      reset(randomY = false) {
        this.depth = Math.random();
        this.size = 32 + this.depth * 27;
        this.alpha = 0.55 + this.depth * 0.4;
        this.speed = 0.55 + this.depth * 0.75;
        this.x = Math.random() * W;
        this.y = randomY ? Math.random() * H : H + this.size;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.8) * 0.4;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;

        this.vx *= 0.97;
        this.vy *= 0.97;

        this.vy += gravityForce;
        this.vx +=
          Math.sin(Date.now() / 900 + this.phase + this.y * 0.012) * 0.006;

        let target = 1;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 0.001;
          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            this.vx += (dx / dist) * force * repulsionStrength;
            this.vy += (dy / dist) * force * repulsionStrength;
          }
          if (dist < 130) target = 1.22;
        }
        this.scale += (target - this.scale) * 0.12;

        if (this.y < -this.size) this.reset(false);
        if (this.x < -this.size) this.x = W + this.size;
        else if (this.x > W + this.size) this.x = -this.size;
      }

      draw() {
        if (!ctx || !this.img.loaded || this.img.broken) return;

        const s = this.size * this.scale;
        const x = this.x;
        const y = this.y;
        const hot = this.scale > 1.05;

        ctx.save();
        ctx.globalAlpha = this.alpha;

        // Frosted-glass chip with brand glow
        ctx.shadowColor = hexToRgba(this.def.color, hot ? 0.85 : 0.5);
        ctx.shadowBlur = hot ? 30 : 16;
        roundRect(ctx, x - s / 2, y - s / 2, s, s, s * 0.28);
        ctx.fillStyle = "rgba(13, 20, 33, 0.55)";
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.lineWidth = 1;
        ctx.strokeStyle = hexToRgba(this.def.color, hot ? 0.9 : 0.45);
        ctx.stroke();

        // Logo, padded inside the chip
        const pad = s * 0.24;
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          this.img,
          x - s / 2 + pad,
          y - s / 2 + pad,
          s - pad * 2,
          s - pad * 2
        );
        ctx.restore();
      }
    }

    let pool = LOGOS;
    if (W < 560) pool = LOGOS.filter((_, i) => i % 3 === 0);
    else if (W < 900) pool = LOGOS.filter((_, i) => i % 2 === 0);

    const chips = pool.map((def) => new LogoChip(def));
    let animationFrameId: number;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Vibrant constellation network links between nearby tech chips (drawn under chips)
      for (let i = 0; i < chips.length; i++) {
        for (let j = i + 1; j < chips.length; j++) {
          const dx = chips[i].x - chips[j].x;
          const dy = chips[i].y - chips[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionDistance) {
            const opacity = 1 - dist / connectionDistance;
            const isHot = chips[i].scale > 1.05 || chips[j].scale > 1.05;
            const a = opacity * (isHot ? 0.55 : 0.32);

            ctx.beginPath();
            ctx.moveTo(chips[i].x, chips[i].y);
            ctx.lineTo(chips[j].x, chips[j].y);
            ctx.strokeStyle = isHot
              ? `rgba(0, 242, 254, ${a})`
              : `rgba(0, 242, 254, ${a * 0.8})`;
            ctx.lineWidth = isHot ? 1.4 : 0.9;
            ctx.stroke();

            // Tiny glowing constellation joint node at midpoint when close
            if (opacity > 0.55) {
              const mx = (chips[i].x + chips[j].x) / 2;
              const my = (chips[i].y + chips[j].y) / 2;
              ctx.beginPath();
              ctx.arc(mx, my, isHot ? 1.8 : 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 242, 254, ${a * 0.9})`;
              ctx.fill();
            }
          }
        }
      }

      for (let i = 0; i < chips.length; i++) {
        if (!prefersReduced) chips[i].update();
        chips[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="w-full min-h-[75vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] pt-16 sm:pt-20 pb-8 sm:pb-16 px-4 sm:px-12"
    >
      {/* Liquid Glass & Cyber CTA animations */}
      <style>{`
        @keyframes glassBreathe {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.06); }
        }
        @keyframes caretBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes apertureSpin {
          to { transform: rotate(360deg); }
        }

        /* Galahhad Uiverse ui-btn chitchat animation */
        .ui-btn {
          --btn-default-bg: rgba(255, 255, 255, 0.06);
          --btn-hover-bg: rgba(255, 255, 255, 0.14);
          --btn-transition: .3s;
          --btn-animation-duration: 1.2s;
          --hover-btn-color: #FAC921;
          --default-btn-color: #fff;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--default-btn-color);
          background: var(--btn-default-bg);
          transition: var(--btn-transition);
          overflow: hidden;
          position: relative;
        }

        .ui-btn span.ui-btn-text {
          transition: var(--btn-transition);
          box-sizing: border-box;
          position: relative;
          background: inherit;
        }

        .ui-btn span.ui-btn-text::before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          background: inherit;
          left: 0;
          top: 0;
        }

        .ui-btn:hover, .ui-btn:focus {
          background: var(--btn-hover-bg);
        }

        .ui-btn:hover span.ui-btn-text, .ui-btn:focus span.ui-btn-text {
          color: var(--hover-btn-color);
        }

        .ui-btn:hover span.ui-btn-text::before, .ui-btn:focus span.ui-btn-text::before {
          animation: chitchat linear both var(--btn-animation-duration);
        }

        @keyframes chitchat {
          0% { content: "#"; }
          5% { content: "."; }
          10% { content: "^{"; }
          15% { content: "-!"; }
          20% { content: "#$_"; }
          25% { content: "№:0"; }
          30% { content: "#{+."; }
          35% { content: "@}-?"; }
          40% { content: "?{4@%"; }
          45% { content: "=.,^!"; }
          50% { content: "?2@%"; }
          55% { content: "\\\\;1}]"; }
          60% { content: "?{%:%"; right: 0; }
          65% { content: "|{f[4"; right: 0; }
          70% { content: "{4%0%"; right: 0; }
          75% { content: "'1_0<"; right: 0; }
          80% { content: "{0%"; right: 0; }
          85% { content: "]>'"; right: 0; }
          90% { content: "4"; right: 0; }
          95% { content: "2"; right: 0; }
          100% { content: ""; right: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lg-breathe, .lg-caret, .lg-aperture { animation: none !important; }
        }
      `}</style>

      {/* Background Interactive Floating Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero Content Container with 3D Parallax Tilt */}
      <div
        ref={containerRef}
        className="max-w-[900px] mx-auto text-center relative z-10 will-change-transform -mt-12 sm:-mt-10"
      >
        {/* Status Indicator - Currently Building @ Reliance Jio in yellow text */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/30 mb-7 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff9900] animate-ping" />
          <span className="font-mono text-[11px] sm:text-xs text-[#ff9900] tracking-wider font-semibold">
            Currently Building @ Reliance Jio
          </span>
        </div>

        {/* Main Name Heading */}
        <div className="flex items-center justify-center gap-3 mb-1.5 sm:mb-3">
          <h1 className="logo-brand text-3xl xs:text-4xl sm:text-6xl lg:text-7xl text-white tracking-wider font-bold">
            BIJΣПDΛЯ PЯΛƧΛD
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="font-mono text-[13px] xs:text-sm sm:text-2xl text-[#00f2fe] font-semibold tracking-wider mb-5 sm:mb-6">
          Site Reliability &amp; DevOps Engineer
        </h2>

        {/* Tagline */}
        <p className="font-mono text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          I build cloud-native platforms that keep critical applications reliable, observable, and easy to deploy—from Kubernetes clusters to enterprise blockchain infrastructure.
        </p>

        {/* Apple VisionOS Liquid Glassmorphic CTAs — each with a unique signature */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 mt-10 sm:mt-14 mb-4 sm:mb-6">

          {/* 1 — Experiences Pipeline: Matrix Sequential Text Scramble Decoder */}
          <a
            href="#pipeline"
            onMouseEnter={handleRoadmapHover}
            className="relative group isolate overflow-hidden inline-flex items-center gap-2.5 rounded-xl sm:rounded-2xl font-mono text-[10px] sm:text-[11px] font-bold tracking-[1.5px] sm:tracking-[2px] px-6 py-3 sm:px-7 sm:py-3.5 text-white backdrop-blur-xl bg-white/[0.05] border border-[#00f2fe]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-10px_rgba(0,0,0,0.6)] hover:border-[#00f2fe] hover:shadow-[0_0_32px_rgba(0,242,254,0.45)] transition-all duration-300 ease-out will-change-transform hover:scale-[1.04] active:scale-[0.97]"
          >
            <span className="relative z-10 font-mono tracking-[2px] group-hover:text-[#00f2fe] transition-colors duration-300">
              {roadmapText}
            </span>
          </a>

          {/* 2 — Interactive Shell: OliverZeros multi-layer expanding bubble button (Instant 1st layer, slow 2nd layer) */}
          <a
            href="#terminal"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl font-mono text-[10px] sm:text-[11px] font-bold tracking-[1.5px] sm:tracking-[2px] px-6 py-3 sm:px-7 sm:py-3.5 text-white backdrop-blur-xl bg-white/[0.05] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-10px_rgba(0,0,0,0.6)] hover:border-[#00f2fe]/60 hover:text-black hover:shadow-[0_0_35px_rgba(0,242,254,0.5)] transition-all duration-500 ease-out overflow-hidden active:scale-[0.97]"
          >
            {/* Multi-layer expanding bubble background (Green -> Yellow -> Cyan) */}
            <span className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden z-0">
              <span className="absolute left-1/2 -top-[60%] -translate-x-1/2 aspect-square w-[max(200%,10rem)] block">
                {/* 1st layer (Green): fast & immediate expansion */}
                <span className="absolute inset-0 rounded-full bg-[#34a853] scale-0 group-hover:scale-100 transition-transform duration-[500ms] cubic-bezier(0.19,1,0.22,1)" />
                {/* 2nd layer (Yellow): accelerated mid expansion */}
                <span className="absolute inset-0 rounded-full bg-[#ffd074] scale-0 group-hover:scale-100 transition-transform duration-[750ms] cubic-bezier(0.19,1,0.22,1) delay-[60ms]" />
                {/* 3rd layer (Cyan): accelerated final fill */}
                <span className="absolute inset-0 rounded-full bg-[#00f2fe] scale-0 group-hover:scale-100 transition-transform duration-[950ms] cubic-bezier(0.19,1,0.22,1) delay-[120ms]" />
              </span>
            </span>

            {/* Content: Static text & Hover text slide transition */}
            <span className="relative z-10 inline-flex items-center gap-2">
              <span className="text-[#34a853] group-hover:text-black transition-colors duration-300">❯</span>
              <span className="relative overflow-hidden block h-[18px] min-w-[70px]">
                <span className="block transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full group-hover:opacity-0">
                  TERMINAL
                </span>
                <span className="block absolute inset-0 translate-y-full opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-hover:opacity-100 font-extrabold text-black">
                  TERMINAL
                </span>
              </span>
              <span className="lg-caret inline-block w-[7px] h-[13px] -mb-px bg-current group-hover:bg-black" style={{ animation: "caretBlink 1.1s step-end infinite" }} />
            </span>
          </a>

          {/* 3 — Photography: Uiverse expanding hover fill CTA button */}
          <Link
            href="/"
            className="group relative isolate overflow-hidden inline-flex items-center gap-2.5 rounded-xl sm:rounded-2xl font-mono text-[10px] sm:text-[11px] font-bold tracking-[1.5px] sm:tracking-[2px] px-6 py-3 sm:px-7 sm:py-3.5 text-white backdrop-blur-md bg-white/[0.06] border border-[#af52de]/40 shadow-[0_8px_24px_-10px_rgba(175,82,222,0.35)] transition-all duration-500 ease-out hover:border-[#df9aff] hover:shadow-[0_0_34px_rgba(175,82,222,0.5)] active:scale-[0.97]"
          >
            {/* Expanding gradient fill from left to right */}
            <span className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden -z-10">
              <span className="absolute inset-0 bg-[linear-gradient(110deg,#6d28d9_0%,#9333ea_30%,#d946ef_65%,#fda4af_100%)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </span>

            <span className="relative z-10">SEE MY WORK</span>
            <svg
              className="relative z-10 w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-white text-white ease-linear duration-300 rounded-full border border-white/30 group-hover:border-none p-1 rotate-45 shrink-0"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-current group-hover:fill-[#7000ff] transition-colors duration-300"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

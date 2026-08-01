"use client";

import React, { useState } from "react";

interface Category {
  title: string;
  dir: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBorder: string;
  dot: string;
  chipHover: string;
  tags: string[];
}

export default function SreSkills() {
  const [isPaused, setIsPaused] = useState(false);

  const categories: Category[] = [
    {
      title: "Cloud Platforms",
      dir: "cloud-platforms",
      icon: "☁️",
      color: "text-[#00f2fe]",
      bgColor: "bg-[#00f2fe]/10",
      borderColor: "border-[#00f2fe]/30",
      hoverBorder: "hover:border-[#00f2fe]/60",
      dot: "bg-[#00f2fe]",
      chipHover: "hover:bg-[#00f2fe]/20",
      tags: [
        "AWS (EKS, EC2, S3, Lambda)",
        "Azure (AKS, VMs, VNet, APIM)",
        "GCP (GKE, GCE, VPC, Storage)",
        "OpenShift",
      ],
    },
    {
      title: "Orchestration & Containers",
      dir: "containers-k8s",
      icon: "☸️",
      color: "text-[#34a853]",
      bgColor: "bg-[#34a853]/10",
      borderColor: "border-[#34a853]/30",
      hoverBorder: "hover:border-[#34a853]/60",
      dot: "bg-[#34a853]",
      chipHover: "hover:bg-[#34a853]/20",
      tags: ["Kubernetes", "Docker", "Helm", "Docker Swarm", "Nginx Ingress", "Traefik"],
    },
    {
      title: "IaC & DevOps",
      dir: "iac-devops",
      icon: "🛠️",
      color: "text-[#df9aff]",
      bgColor: "bg-[#df9aff]/10",
      borderColor: "border-[#df9aff]/30",
      hoverBorder: "hover:border-[#df9aff]/60",
      dot: "bg-[#df9aff]",
      chipHover: "hover:bg-[#df9aff]/20",
      tags: [
        "Terraform",
        "Ansible",
        "Puppet / Chef",
        "GitHub Actions",
        "GitLab CI/CD",
        "Azure DevOps",
        "Jenkins",
        "ArgoCD",
      ],
    },
    {
      title: "Monitoring & Security",
      dir: "monitoring-security",
      icon: "📈",
      color: "text-[#ff9900]",
      bgColor: "bg-[#ff9900]/10",
      borderColor: "border-[#ff9900]/30",
      hoverBorder: "hover:border-[#ff9900]/60",
      dot: "bg-[#ff9900]",
      chipHover: "hover:bg-[#ff9900]/20",
      tags: [
        "Prometheus & Grafana",
        "ELK Stack",
        "OpenSearch",
        "cAdvisor",
        "SonarQube",
        "Vault",
        "Keycloak",
        "Fortify",
      ],
    },
    {
      title: "Languages & Frameworks",
      dir: "languages-frameworks",
      icon: "🐍",
      color: "text-[#ff6b81]",
      bgColor: "bg-[#ff6b81]/10",
      borderColor: "border-[#ff6b81]/30",
      hoverBorder: "hover:border-[#ff6b81]/60",
      dot: "bg-[#ff6b81]",
      chipHover: "hover:bg-[#ff6b81]/20",
      tags: [
        "Python",
        "Java",
        "JavaScript / Node.js",
        "Bash Scripting",
        "React",
        "Angular",
        "Django",
        "Flask",
      ],
    },
    {
      title: "Databases & Streaming",
      dir: "databases-streaming",
      icon: "🗄️",
      color: "text-[#4facfe]",
      bgColor: "bg-[#4facfe]/10",
      borderColor: "border-[#4facfe]/30",
      hoverBorder: "hover:border-[#4facfe]/60",
      dot: "bg-[#4facfe]",
      chipHover: "hover:bg-[#4facfe]/20",
      tags: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Redis",
        "Kafka",
        "Apache Spark",
        "Airflow",
      ],
    },
  ];

  // Total "services" being monitored across all categories
  const totalServices = categories.reduce((n, c) => n + c.tags.length, 0);

  const ServiceCard = ({ cat, delay, compact }: { cat: Category; delay: number; compact?: boolean }) => (
    <div
      className={`group/card relative h-full min-h-[210px] sm:min-h-[220px] flex flex-col justify-between rounded-2xl bg-[#101018]/90 border border-white/10 ${cat.hoverBorder} shadow-lg transition-all duration-300 overflow-hidden ${compact ? "w-[280px] xs:w-[300px] shrink-0 p-4" : "p-4 sm:p-4.5"}`}
    >
      {/* Top accent glow line */}
      <div className={`absolute top-0 left-0 right-0 h-px ${cat.bgColor}`} />

      {/* Card Header & Status */}
      <div>
        {/* Header: service identity + health status */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`grid place-items-center w-7.5 h-7.5 rounded-lg text-sm ${cat.bgColor} border ${cat.borderColor} shrink-0`}>
              {cat.icon}
            </span>
            <div className="min-w-0">
              <div className={`font-mono text-xs sm:text-[13px] font-bold ${cat.color} truncate`}>
                svc/{cat.dir}
              </div>
              <div className="font-mono text-[9px] text-white/40 truncate">{cat.title}</div>
            </div>
          </div>

          <span className={`flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cat.bgColor} ${cat.color} border ${cat.borderColor} shrink-0`}>
            <span className="relative flex w-1.5 h-1.5">
              <span className={`absolute inline-flex w-full h-full rounded-full ${cat.dot} opacity-60 animate-ping`} />
              <span className={`relative inline-flex w-1.5 h-1.5 rounded-full ${cat.dot}`} />
            </span>
            Healthy
          </span>
        </div>

        {/* Uptime bar */}
        <div className="mb-2.5">
          <div className="flex items-center justify-between font-mono text-[9px] text-white/40 mb-1">
            <span>uptime</span>
            <span className={cat.color}>100%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
            <div
              className={`h-full rounded-full ${cat.dot} animate-uptime-fill`}
              style={{ animationDelay: `${delay}ms` }}
            />
          </div>
        </div>

        {/* Deployed "instances" header */}
        <div className="flex items-center justify-between font-mono text-[9px] text-white/40 mb-1.5">
          <span>instances</span>
          <span className="text-white/50">{cat.tags.length} running</span>
        </div>
      </div>

      {/* Skill chips container - tight, compact layout */}
      <div className="flex flex-wrap content-start gap-1.5 flex-1">
        {cat.tags.map((t, tIdx) => (
          <span
            key={tIdx}
            title={t}
            className={`font-mono text-[10px] leading-none px-2 py-1 rounded-md bg-white/[0.03] border ${cat.borderColor} text-white/75 transition-all duration-200 ${cat.chipHover} hover:text-white cursor-default max-w-full truncate`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative overflow-hidden">
      {/* Inline animations */}
      <style>{`
        @keyframes mobileMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-mobile-marquee {
          animation: mobileMarquee 26s linear infinite;
        }
        @keyframes uptimeFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-uptime-fill {
          width: 100%;
          animation: uptimeFill 1.3s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto">
        {/* Heading + live board status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span className="text-[#00f2fe]">//</span> Technical Inventory
          </h2>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white/50 bg-[#101018]/90 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#34a853] opacity-70 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#34a853]" />
            </span>
            <span>{totalServices} services</span>
            <span className="text-white/20">·</span>
            <span className="text-[#34a853]">all systems operational</span>
          </div>
        </div>

        {/* Mobile View: Smooth Infinite Horizontal Scroll Marquee */}
        <div className="md:hidden relative overflow-hidden -mx-6 px-6 py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

          <div
            className="flex gap-4 w-max animate-mobile-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] items-stretch"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...categories, ...categories].map((cat, idx) => (
              <ServiceCard key={idx} cat={cat} delay={(idx % categories.length) * 120} compact />
            ))}
          </div>
        </div>

        {/* Desktop View: Static Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 items-stretch">
          {categories.map((cat, idx) => (
            <ServiceCard key={idx} cat={cat} delay={idx * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

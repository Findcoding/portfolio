"use client";

import React from "react";
import SreNavbar from "@/components/SreNavbar";
import SreHero from "@/components/SreHero";
import SreDashboard from "@/components/SreDashboard";
import SrePipeline from "@/components/SrePipeline";
import SreEducation from "@/components/SreEducation";
import SreSkills from "@/components/SreSkills";
import SreCertifications from "@/components/SreCertifications";
import SreTerminal from "@/components/SreTerminal";
import SreProjects from "@/components/SreProjects";
import SreAchievements from "@/components/SreAchievements";
import SreFooter from "@/components/SreFooter";

export default function SrePortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5] selection:bg-[#00f2fe] selection:text-black">
      
      {/* SRE Navigation Bar */}
      <SreNavbar />

      {/* SRE Hero Section */}
      <SreHero />

      {/* SRE Dashboard (Uptime & Profile Summary) */}
      <SreDashboard />

      {/* Visual Deployment Pipeline (Jio Experience Logs) */}
      <SrePipeline />

      {/* Academic Journey (IIIT-Delhi & Schooling) */}
      <SreEducation />

      {/* Technical Inventory (Skills) */}
      <SreSkills />

      {/* Professional Certifications (29 Licenses) */}
      <SreCertifications />

      {/* Interactive Shell / Terminal */}
      <SreTerminal />

      {/* Core Projects */}
      <SreProjects />

      {/* Key Achievements */}
      <SreAchievements />

      {/* Footer */}
      <SreFooter />

    </main>
  );
}

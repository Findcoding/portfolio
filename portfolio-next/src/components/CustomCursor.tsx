"use client";

import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // 1. Follower Cursor Dot & Ring Physics (matching script.js)
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animId = requestAnimationFrame(animateRing);
    };
    animateRing();

    // 2. Interactive Hover States for Cursor
    const interactiveSelector =
      "a, button, input, textarea, .btn, .nav-item, .pipeline-stage, .project-card, .achievement-card, .education-card, .certification-card, .skill-category, .dashboard-widget, .social-icon, .art-card, .filter-pill, .explore-btn, .spotlight-card, .shiva-frame";

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest(interactiveSelector)) {
        ring.classList.add("hover-active");
        dot.classList.add("hover-active");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest(interactiveSelector)) {
        ring.classList.remove("hover-active");
        dot.classList.remove("hover-active");
      }
    };

    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    // 3. 3D Mouse Tracking Tilt Physics on Cards (matching script.js)
    const attachTiltEffect = () => {
      const tiltTargets = document.querySelectorAll<HTMLElement>(
        ".dashboard-widget, .pipeline-stage, .skill-category, .project-card, .achievement-card, .education-card, .certification-card, .spotlight-card, .art-card, .shiva-display-card"
      );

      tiltTargets.forEach((card) => {
        if (card.dataset.tiltAttached) return;
        card.dataset.tiltAttached = "true";
        card.style.transformStyle = "preserve-3d";

        const handleMouseEnter = () => {
          card.style.transition =
            "transform 0.08s ease-out, border-color 0.3s ease, box-shadow 0.3s ease";
        };

        const handleMouseMoveCard = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
            2
          )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
        };

        const handleMouseLeave = () => {
          card.style.transition =
            "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease";
          card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mousemove", handleMouseMoveCard);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachTiltEffect();
    const intervalId = setInterval(attachTiltEffect, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  );
}

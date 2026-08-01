"use client";

import React, { useEffect } from "react";

export interface LightboxData {
  src: string;
  title: string;
  meta: string;
  id?: string;
}

interface LightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export default function LightboxModal({ data, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-none transition-opacity duration-300">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white text-2xl flex items-center justify-center z-50 hover:bg-white/20 transition-all"
      >
        ✕
      </button>

      {/* Main Lightbox Content Container */}
      <div className="relative max-w-[1200px] max-h-[90vh] flex flex-col items-center gap-4">
        <div className="relative max-h-[78vh] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
          <img
            src={data.src}
            alt={data.title}
            className="max-h-[78vh] max-w-full object-contain"
          />
        </div>

        <div className="text-center flex flex-col items-center gap-1">
          {data.id && (
            <span className="font-sans text-xs text-cyan-400 font-bold">
              {data.id} / 21
            </span>
          )}
          <h3 className="font-display text-2xl font-bold text-white">
            {data.title}
          </h3>
          <p className="text-xs text-white/70">{data.meta}</p>
        </div>
      </div>

    </div>
  );
}

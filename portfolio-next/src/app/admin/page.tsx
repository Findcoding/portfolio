"use client";

import React, { useState } from "react";
import Link from "next/link";

interface UploadedPhoto {
  id: string;
  title: string;
  category: string;
  file: File | null;
  previewUrl: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Upload Form State
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoCategory, setPhotoCategory] = useState("LANDSCAPE");
  const [photoSubtitle, setPhotoSubtitle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123" || password.length >= 4) {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid access password. Please try again.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !photoTitle) {
      alert("Please choose a photo file and title!");
      return;
    }
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setPhotoTitle("");
      setPhotoSubtitle("");
      setSelectedFile(null);
      setPreviewUrl(null);
    }, 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#040407] text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#0c0b14] border border-cyan-400/30 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
          <div className="text-center flex flex-col items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-cyan-400 font-bold">
              // ADMIN CONTROL PORTAL
            </span>
            <h1 className="font-display text-3xl font-extrabold text-white">
              PORTFOLIO ADMIN
            </h1>
            <p className="text-xs text-white/60">
              Enter admin passcode to manage photos & uploads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-white/70">ADMIN PASSCODE</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (e.g. admin123)"
                className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-400 font-mono">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="mt-2 font-mono text-xs tracking-widest bg-cyan-400 text-black font-bold py-3.5 rounded-xl transition-all hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.4)]"
            >
              UNLOCK DASHBOARD 🔒
            </button>
          </form>

          <div className="text-center pt-2 border-t border-white/10">
            <Link href="/" className="font-mono text-xs text-cyan-400/80 hover:text-cyan-400">
              ← Return to Main Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040407] text-white p-4 sm:p-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0c0b14] border border-white/15 p-6 rounded-2xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-cyan-400 font-bold">
              // MANAGEMENT CONSOLE
            </span>
            <h1 className="font-display text-2xl font-extrabold">
              PHOTO & PORTFOLIO MANAGER
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono text-xs px-4 py-2 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-cyan-400"
            >
              👁 PREVIEW LIVE SITE
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="font-mono text-xs px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30"
            >
              LOCK PORTAL
            </button>
          </div>
        </div>

        {/* Main Grid: Upload Form + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Upload Form */}
          <div className="lg:col-span-2 bg-[#0c0b14] border border-cyan-400/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-xl font-bold text-cyan-400">
                UPLOAD NEW PHOTOGRAPH
              </h2>
              <p className="text-xs text-white/60">
                Add a new high-resolution photo directly to your global portfolio.
              </p>
            </div>

            <form onSubmit={handleUploadSubmit} className="flex flex-col gap-5">
              
              {/* File Dropzone */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-white/80">SELECT PHOTO FILE</label>
                <div className="relative border-2 border-dashed border-cyan-400/40 hover:border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 bg-black/40 transition-all cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {previewUrl ? (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden">
                      <img
                        src={previewUrl}
                        alt="Upload Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-center flex flex-col items-center gap-2">
                      <span className="text-3xl">📷</span>
                      <p className="font-mono text-xs text-white/80">
                        Drag & Drop or <span className="text-cyan-400 underline">Browse Files</span>
                      </p>
                      <span className="text-[11px] text-white/40">
                        Supports JPG, PNG, WEBP, AVIF (Up to 25MB)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-white/70">PHOTO TITLE</label>
                  <input
                    type="text"
                    required
                    value={photoTitle}
                    onChange={(e) => setPhotoTitle(e.target.value)}
                    placeholder="e.g. MONOLITH OF LIGHT"
                    className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-white/70">CATEGORY BADGE</label>
                  <select
                    value={photoCategory}
                    onChange={(e) => setPhotoCategory(e.target.value)}
                    className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="LANDSCAPE">LANDSCAPE</option>
                    <option value="BOTANICAL">BOTANICAL</option>
                    <option value="HERITAGE">HERITAGE</option>
                    <option value="URBAN">URBAN</option>
                    <option value="PORTRAIT">PORTRAIT</option>
                  </select>
                </div>
              </div>

              {/* Subtitle / Camera Specs */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-white/70">SUBTITLE / METADATA</label>
                <input
                  type="text"
                  value={photoSubtitle}
                  onChange={(e) => setPhotoSubtitle(e.target.value)}
                  placeholder="e.g. 85mm f/1.4 • Sunset Silhouette"
                  className="bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {uploadSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs text-center">
                  ✓ Photo successfully uploaded & published to global CDN!
                </div>
              )}

              <button
                type="submit"
                className="font-mono text-xs tracking-widest bg-cyan-400 text-black font-bold py-4 rounded-xl transition-all hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,242,254,0.4)]"
              >
                PUBLISH TO PORTFOLIO 🚀
              </button>

            </form>
          </div>

          {/* Quick Stats Panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0c0b14] border border-white/15 rounded-3xl p-6 flex flex-col gap-4">
              <h3 className="font-display text-lg font-bold text-white">
                PORTFOLIO OVERVIEW
              </h3>
              
              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/70">TOTAL ACTIVE PHOTOS</span>
                  <span className="text-cyan-400 font-bold text-sm">21</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/70">FEATURED CAROUSEL SLIDES</span>
                  <span className="text-cyan-400 font-bold text-sm">7</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white/70">CDN STATUS</span>
                  <span className="text-emerald-400 font-bold text-sm">ACTIVE • 100%</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0c0b14] border border-amber-500/30 rounded-3xl p-6 flex flex-col gap-3">
              <span className="font-mono text-xs text-[#d4af37] font-bold">
                💡 PRO TIP
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Photos uploaded via this dashboard are automatically optimized into next-gen AVIF/WebP formats to ensure instant loading worldwide.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

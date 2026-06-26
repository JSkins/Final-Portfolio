"use client";

import { useRef, useState, useCallback } from "react";

interface PrototypeEmbedProps {
  src: string;
  title?: string;
  className?: string;
}

export default function PrototypeEmbed({
  src,
  title = "Interactive Prototype",
  className = "",
}: PrototypeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Keep state in sync when user exits via Escape key
  if (typeof document !== "undefined") {
    document.onfullscreenchange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden bg-[#0d2f2e] ${className}`}
    >
      <iframe
        src={src}
        title={title}
        allow="fullscreen"
        allowFullScreen
        className="w-full h-full border-0 block"
        style={{ minHeight: "inherit" }}
      />

      {/* Fullscreen toggle button — top-right corner */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        className="absolute top-3 right-3 flex items-center justify-center size-9 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors duration-150 z-10"
      >
        {isFullscreen ? (
          /* Compress icon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 3v5H3M21 8h-5V3M16 21v-5h5M3 16h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          /* Expand icon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

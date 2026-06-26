"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// iOS squircle in 221×480 space (matches phone aspect ratio) so corners are
// circular, not elliptical. r=30, smooth=0.6 → t=48, cp=21.6.
const SQUIRCLE_MASK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 221 480'%3E%3Cpath d='M 48 0 C 21.6 0 0 21.6 0 48 L 0 432 C 0 458.4 21.6 480 48 480 L 173 480 C 199.4 480 221 458.4 221 432 L 221 48 C 221 21.6 199.4 0 173 0 Z' fill='white'/%3E%3C/svg%3E")`;

interface VideoLightboxProps {
  src: string;
  className?: string;
}

export default function VideoLightbox({ src, className = "" }: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const modalRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (modalRef.current) {
      modalRef.current.currentTime = 0;
      modalRef.current.play();
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Muted autoplay in phone mockup — click to expand */}
      <video
        src={src}
        autoPlay
        loop
        playsInline
        muted
        className={`${className} cursor-pointer`}
        onClick={() => setOpen(true)}
      />

      {/* Lightbox overlay */}
      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm${isDesktop ? " p-4" : ""}`}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          <video
            ref={modalRef}
            src={src}
            autoPlay
            loop
            playsInline
            controls
            className={isDesktop ? "h-[min(75svh,800px)] aspect-[221/480]" : "w-full h-full object-contain"}
            style={isDesktop ? {
              maskImage: SQUIRCLE_MASK,
              maskSize: "100% 100%",
              WebkitMaskImage: SQUIRCLE_MASK,
              WebkitMaskSize: "100% 100%",
            } : undefined}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

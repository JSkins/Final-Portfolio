"use client";

import { useEffect, useRef } from "react";

/**
 * Phone frame with a viewport-triggered autoplay video.
 * Drop the video file at /public/pd/overview-screen.mp4 to activate.
 * Falls back gracefully if no src is provided.
 */
export default function VideoPhone() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-[5.24px] border-black rounded-[29px] overflow-hidden w-[218px] aspect-[786/1704] relative shrink-0 bg-black">
      <video
        ref={videoRef}
        src="/pd/overview-screen.mp4"
        poster="/pd/screen-1.png"
        loop
        playsInline
        controls
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

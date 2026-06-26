"use client";

import { useRef, useState } from "react";

export default function WealthChartVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  const replay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setEnded(false);
  };

  return (
    <div
      className="relative w-[188px] sm:w-[210px] shrink-0 rounded-[22px] overflow-hidden"
      style={{ aspectRatio: "394/848" }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/t212/projection.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setEnded(true)}
      />
      {ended && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40">
          <button
            onClick={replay}
            aria-label="Replay"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 hover:bg-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 8A5.5 5.5 0 1 1 8 2.5"
                stroke="#0d1821" strokeWidth="1.5" strokeLinecap="round"
              />
              <path
                d="M8 2.5V0M8 2.5L5.5 5M8 2.5L10.5 5"
                stroke="#0d1821" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="text-white/80 text-[10px] font-medium">Replay</span>
        </div>
      )}
    </div>
  );
}

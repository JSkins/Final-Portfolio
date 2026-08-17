"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_WORDS = ["designer", "artist", "maker"];

const HOLD_MS = 3000; // time a word sits fully visible before the next strike
const STRIKE_DRAW_MS = 550; // brush stroke draw-on duration
const STRIKE_HOLD_MS = 150; // pause after the stroke finishes drawing
const ERASE_MS = 350; // old word (with strike) fades/erases out
const REVEAL_MS = 650; // new word staggers in, char by char
const CHAR_STAGGER_MS = 35;
const BRUSH_COLOR = "#FFB627"; // matches the warm accent used elsewhere (CaseStudyFooter)

type Phase = "idle" | "strike" | "erase" | "reveal";

export default function RotatingWord({
  words = DEFAULT_WORDS,
  className = "",
}: {
  words?: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const reducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      timerRef.current = setTimeout(fn, ms);
    };

    if (reducedMotion) {
      if (phase === "idle") {
        schedule(() => setPhase("erase"), HOLD_MS);
      } else if (phase === "erase") {
        schedule(() => {
          setIndex((i) => (i + 1) % words.length);
          setPhase("idle");
        }, 250);
      }
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    if (phase === "idle") {
      schedule(() => setPhase("strike"), HOLD_MS);
    } else if (phase === "strike") {
      schedule(() => setPhase("erase"), STRIKE_DRAW_MS + STRIKE_HOLD_MS);
    } else if (phase === "erase") {
      schedule(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("reveal");
      }, ERASE_MS);
    } else if (phase === "reveal") {
      schedule(() => setPhase("idle"), REVEAL_MS);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, words.length, reducedMotion]);

  const current = words[index];

  return (
    <span className={`relative inline-grid align-baseline ${className}`}>
      {/* Invisible sizers, one per word, all sharing the same grid cell — the
          cell auto-sizes to the widest word so switching words never reflows
          the surrounding sentence. */}
      {words.map((w) => (
        <span
          key={`sizer-${w}`}
          aria-hidden="true"
          className="invisible whitespace-nowrap"
          style={{ gridArea: "1 / 1", width: "max-content" }}
        >
          {w}
        </span>
      ))}

      <span
        style={{ gridArea: "1 / 1", width: "max-content" }}
        className="relative inline-block whitespace-nowrap"
        aria-hidden="true"
      >
        <span
          className={
            "relative inline-block " +
            (phase === "erase" ? (reducedMotion ? "rw-fade-out" : "rw-erase") : "")
          }
        >
          {phase === "reveal" && !reducedMotion
            ? Array.from(current).map((ch, i) => (
                <span
                  key={i}
                  className="rw-char-in inline-block"
                  style={{ animationDelay: `${i * CHAR_STAGGER_MS}ms` }}
                >
                  {ch}
                </span>
              ))
            : current}

          {!reducedMotion && (phase === "strike" || phase === "erase") && (
            <BrushStroke key={`${current}-${phase}`} drawn={phase === "erase"} />
          )}
        </span>
      </span>

      {/* Accessible text: announces the word once it settles, without
          exposing the character-by-character/strike animation churn. */}
      <span className="sr-only" aria-live="polite">
        {current}
      </span>

      <style>{`
        @keyframes rw-stroke-draw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes rw-char-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rw-erase-out {
          0% { opacity: 1; filter: blur(0px); }
          100% { opacity: 0; filter: blur(3px); }
        }
        @keyframes rw-fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .rw-char-in {
          opacity: 0;
          animation: rw-char-in 260ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .rw-erase {
          animation: rw-erase-out ${ERASE_MS}ms ease-in forwards;
        }
        .rw-fade-out {
          animation: rw-fade-out 250ms ease-in forwards;
        }
      `}</style>
    </span>
  );
}

function BrushStroke({ drawn }: { drawn: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute left-[-4%] top-1/2 h-[0.9em] w-[108%] -translate-y-1/2"
      viewBox="0 0 200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="rw-rough" x="-20%" y="-100%" width="140%" height="300%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.25"
            numOctaves={2}
            seed={7}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <path
        d="M4 24 C 40 14, 80 30, 120 18 S 180 26, 196 16"
        fill="none"
        stroke={BRUSH_COLOR}
        strokeWidth={13}
        strokeLinecap="round"
        opacity={0.55}
        filter="url(#rw-rough)"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          animation: drawn
            ? "none"
            : `rw-stroke-draw ${STRIKE_DRAW_MS}ms cubic-bezier(0.65,0,0.35,1) forwards`,
        }}
      />
      <path
        d="M4 20 C 40 12, 80 26, 120 15 S 180 22, 196 13"
        fill="none"
        stroke={BRUSH_COLOR}
        strokeWidth={7}
        strokeLinecap="round"
        filter="url(#rw-rough)"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          animation: drawn
            ? "none"
            : `rw-stroke-draw ${STRIKE_DRAW_MS}ms cubic-bezier(0.65,0,0.35,1) forwards`,
        }}
      />
    </svg>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

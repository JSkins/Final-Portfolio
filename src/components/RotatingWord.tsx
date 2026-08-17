"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_WORDS = ["designer", "artist", "maker"];

const HOLD_MS = 3000; // time a word sits fully visible before the next strike
const STRIKE_DRAW_MS = 550; // brush stroke draw-on duration
const STRIKE_HOLD_MS = 150; // pause after the stroke finishes drawing
const ERASE_MS = 350; // old word (with strike) fades/erases out
const REVEAL_MS = 650; // new word staggers in, char by char
const CHAR_STAGGER_MS = 35;
const BRUSH_COLOR = "#F5B73D"; // Figma brush-stroke texture (node 40000423:19118)

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
        @keyframes rw-fill-draw {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
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
      viewBox="0 0 212 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        clipPath: drawn ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
        animation: drawn
          ? "none"
          : `rw-fill-draw ${STRIKE_DRAW_MS}ms cubic-bezier(0.65,0,0.35,1) forwards`,
      }}
    >
      <path
        d="M18.04 0.199126C19.7167 -0.110607 22.9497 0.0158854 24.7281 0.0853548C24.7607 0.0864942 24.7933 0.0876336 24.826 0.088773C25.248 0.105229 25.6473 0.109503 26.1151 0.114164C27.2305 0.125278 28.7375 0.14037 31.8828 0.337801C32.798 0.330526 33.7133 0.32657 34.6284 0.32657C44.5115 0.326573 54.3945 0.5841 64.2775 0.892499C64.4024 0.890908 64.5294 0.88927 64.6576 0.887616C67.1365 0.855653 70.2102 0.816104 72.1415 0.929121C74.5969 1.07281 76.2646 1.20614 77.6343 1.32122C85.4842 1.56937 93.3342 1.79111 101.184 1.88275C103.644 1.91147 106.105 1.92718 108.565 1.92719C110.831 1.92719 113.097 1.91735 115.363 1.89887C116.682 1.83146 117.936 1.75137 119.1 1.67718C120.734 1.57293 122.189 1.48034 123.391 1.45013C126.287 1.37734 129.573 1.49222 132.012 1.57757C132.411 1.59152 132.787 1.60473 133.136 1.61615C135.073 1.57387 137.011 1.52861 138.949 1.48235C139.078 1.50809 139.208 1.53493 139.341 1.56243C140.994 1.90574 143.027 1.90134 146.227 1.89496C147.621 1.89218 149.236 1.88917 151.137 1.914C152.362 1.93 152.991 2.06612 153.506 2.17719C153.657 2.20986 153.799 2.2404 153.942 2.26508C154.434 2.34963 154.953 2.25825 155.566 2.15034C156.361 2.01033 157.315 1.84216 158.575 1.99408C162.591 2.47815 164.36 2.14975 165.699 1.90131C166.091 1.82843 166.447 1.76259 166.811 1.72601C167.993 1.60745 169.676 1.72492 170.948 1.88617C171.957 2.01403 173.975 1.88727 175.505 1.72601C176.084 1.66503 176.866 1.6635 177.788 1.66204C178.742 1.66054 179.846 1.65917 181.026 1.59075C184.01 1.41787 185.595 1.33408 186.87 1.26702C187.233 1.2479 187.572 1.23049 187.91 1.21233C188.979 1.15495 190.305 1.10768 191.647 1.05998C193.254 1.00291 194.884 0.94495 196.125 0.867596C199.341 0.949459 202.557 1.05074 205.772 1.15178C207.424 1.20424 209.008 1.49969 210.176 1.98676C211.344 2.47421 212 3.10982 212 3.76853C212 4.42725 211.344 5.06282 210.176 5.5503C209.008 6.03737 207.424 6.33331 205.772 6.38577C202.445 6.49033 199.117 6.59495 195.789 6.67825C191.736 6.77973 187.682 6.84964 183.629 6.84964C180.793 6.84964 177.957 6.83393 175.122 6.8057C174.83 6.80279 174.538 6.79958 174.246 6.79642C171.864 6.95862 169.486 7.10614 167.811 7.15873C166.428 7.20214 165.419 7.11558 164.556 7.04154C163.962 6.99059 163.436 6.9455 162.904 6.95267C162.618 6.95652 162.228 6.96653 161.757 6.97855C159.835 7.02763 156.571 7.11094 153.593 6.95267C152.272 6.88244 150.737 6.74401 149.271 6.61184C147.176 6.42286 145.222 6.2467 144.235 6.3008C142.503 6.39588 140.516 6.31541 138.761 6.24416C137.087 6.1762 135.622 6.11686 134.789 6.22658C133.794 6.35775 132.946 6.30429 131.684 6.22512C130.809 6.17021 129.735 6.10318 128.275 6.07619C126.59 6.04504 125.398 5.95315 124.385 5.87501C122.958 5.76505 121.885 5.68238 120.286 5.83449C118.509 6.00348 116.653 6.11102 115.19 6.05763C114.524 6.03331 113.762 6.03923 112.97 6.04543C111.92 6.05364 110.816 6.06213 109.808 6.00148C108.978 5.9515 108.291 5.82363 107.684 5.71046C107.494 5.67516 107.312 5.64146 107.136 5.61183C106.475 5.61346 105.813 5.61585 105.152 5.61964C105.045 5.64022 104.932 5.66301 104.814 5.68653C104.225 5.80457 103.499 5.94935 102.602 6.0215C101.181 6.13567 99.9341 6.06418 98.6189 5.9883C97.5948 5.92922 96.5294 5.86756 95.308 5.88966C94.4751 5.90475 93.5267 5.95702 92.5866 6.00881C91.1904 6.08571 89.8116 6.16141 88.8536 6.1133C88.4947 6.09527 88.1861 6.01496 87.8807 5.93507C87.8794 5.93459 87.878 5.9341 87.8767 5.93361C87.8559 5.92818 87.8351 5.92289 87.8144 5.9175C85.4813 5.97869 83.148 6.04614 80.815 6.11721C80.6128 6.13785 80.4085 6.1582 80.206 6.17824C79.2167 6.27617 78.2554 6.3713 77.6286 6.50637C76.9494 6.65279 75.2416 6.73791 73.4419 6.82767C72.2634 6.88645 71.0449 6.94715 70.0502 7.02836C69.4687 7.07582 68.917 6.99307 68.3494 6.90775C67.8199 6.82814 67.2762 6.74644 66.6819 6.76663C66.3842 6.77677 66.0626 6.81104 65.7195 6.84769C65.4174 6.87995 65.098 6.91415 64.7636 6.93509C64.4529 6.95449 63.7609 6.90942 62.8736 6.85208C62.3253 6.81665 61.7022 6.77662 61.0483 6.74368C59.3199 6.79525 57.5913 6.84469 55.8629 6.89066C55.5023 6.96321 55.1894 7.05737 54.9417 7.17826C54.764 7.26499 54.6127 7.36867 54.4573 7.47465C54.2458 7.61888 54.027 7.76793 53.7254 7.88677C53.4897 7.97964 53.2117 8.01664 53.0251 7.97808C52.9381 7.9601 52.8714 7.92621 52.8108 7.89556C52.7413 7.86045 52.6794 7.82923 52.6037 7.83013C52.5492 7.83084 52.4924 7.8557 52.4226 7.88579C52.3111 7.93385 52.1661 7.99589 51.9454 7.9981C51.1243 8.00631 50.191 7.98645 49.2767 7.96685C48.26 7.94506 47.2662 7.92391 46.4745 7.94244C45.5875 7.9632 44.3237 7.87089 43.0576 7.77886C42.1745 7.71466 41.29 7.65077 40.5312 7.62456C39.7876 7.59887 39.0134 7.64993 38.2636 7.69976C37.3636 7.75956 36.4979 7.81733 35.7622 7.73638C35.6135 7.71994 35.4287 7.61987 35.1969 7.49467C35.0327 7.40594 34.8436 7.30449 34.6284 7.21098C33.692 7.21098 32.7554 7.20687 31.8189 7.19926C31.7859 7.21284 31.7519 7.22665 31.7178 7.24076C31.7173 7.24109 31.7168 7.24141 31.7162 7.24174C30.9471 7.56017 29.8946 7.99573 28.4158 7.73589C28.0399 7.66983 27.8033 7.54783 27.5901 7.43803C27.3808 7.3302 27.1936 7.23371 26.9197 7.21342C26.6086 7.19044 26.2413 7.25665 25.8409 7.32865C25.2787 7.42975 24.6507 7.54272 24.0205 7.43754C23.9775 7.43036 23.9312 7.42248 23.883 7.41459C23.4262 7.33977 22.75 7.22911 22.0771 7.00638C20.0808 6.94693 18.0842 6.87731 16.0878 6.8013C12.76 6.67461 9.43161 6.53015 6.10419 6.38577C4.48535 6.3147 2.9328 6.0114 1.78807 5.52589C0.643272 5.03969 0 4.41483 0 3.76853C9.55392e-05 3.12228 0.643357 2.49782 1.78807 2.01166C2.93281 1.52611 4.48529 1.22285 6.10419 1.15178C8.74398 1.03724 11.3846 0.922527 14.0247 0.816814C14.1631 0.803392 14.3021 0.790409 14.4404 0.778239C15.4696 0.687675 16.4245 0.505779 17.3801 0.323641C17.5996 0.281804 17.8195 0.239876 18.04 0.199126Z"
        fill={BRUSH_COLOR}
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

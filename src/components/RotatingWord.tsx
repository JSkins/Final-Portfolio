"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_WORDS = ["designer", "artist", "maker"];

const HOLD_MS = 3000; // time a fully-typed word sits before the cursor starts backspacing it
const DELETE_CHAR_MS = 35; // backspace speed, per character
const DELETE_PAUSE_MS = 300; // brief pause once a word is fully deleted, before typing starts
const TYPE_CHAR_MS = 55; // typing speed, per character

type Phase = "idle" | "deleting" | "typing";

export default function RotatingWord({
  words = DEFAULT_WORDS,
  className = "",
}: {
  words?: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [charCount, setCharCount] = useState(words[0].length);
  const reducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextIndex = (index + 1) % words.length;

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      timerRef.current = setTimeout(fn, ms);
    };

    if (reducedMotion) {
      if (phase === "idle") {
        schedule(() => {
          setIndex(nextIndex);
          setCharCount(words[nextIndex].length);
        }, HOLD_MS);
      }
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    if (phase === "idle") {
      schedule(() => setPhase("deleting"), HOLD_MS);
    } else if (phase === "deleting") {
      if (charCount > 0) {
        schedule(() => setCharCount((c) => c - 1), DELETE_CHAR_MS);
      } else {
        schedule(() => setPhase("typing"), DELETE_PAUSE_MS);
      }
    } else if (phase === "typing") {
      const target = words[nextIndex].length;
      if (charCount < target) {
        schedule(() => setCharCount((c) => c + 1), TYPE_CHAR_MS);
      } else {
        setIndex(nextIndex);
        setPhase("idle");
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, charCount, nextIndex, words, reducedMotion]);

  const settledWord = words[index];
  const activeWord = phase === "typing" ? words[nextIndex] : settledWord;
  const displayText = phase === "idle" ? settledWord : activeWord.slice(0, charCount);
  const showCursor = !reducedMotion && phase !== "idle";

  return (
    <span className={`relative inline-block align-baseline whitespace-nowrap ${className}`}>
      <span aria-hidden="true">{displayText}</span>
      {showCursor && <span aria-hidden="true" className="rw-cursor" />}

      {/* Accessible text: announces the settled word only, without exposing
          the character-by-character typing/deleting churn. */}
      <span className="sr-only" aria-live="polite">
        {settledWord}
      </span>

      <style>{`
        @keyframes rw-blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        .rw-cursor {
          display: inline-block;
          width: 1px;
          height: 1.1em;
          margin-left: 1px;
          background: currentColor;
          vertical-align: text-bottom;
          animation: rw-blink 1s steps(1) infinite;
        }
      `}</style>
    </span>
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

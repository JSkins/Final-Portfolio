"use client";

import { useEffect, useRef } from "react";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import ProjectCarousel from "@/components/ProjectCarousel";
import { ProjectCardStatic } from "@/components/ProjectCarousel";
import { carousels, type CarouselSection } from "@/content";

/* ─────────────────────────────────────────────────────────────────────────────
   Cherry-pick the 3 published case studies for the "Other work" row
   ───────────────────────────────────────────────────────────────────────────── */

const allProjects = carousels.flatMap((s) => s.projects);

const featuredProjects = (["mb-6", "mb-2", "fl-zia", "fl-vv", "he-3"] as const)
  .map((id) => allProjects.find((p) => p.id === id))
  .filter(Boolean) as CarouselSection["projects"];

const featuredSection: CarouselSection = {
  id: "404-featured",
  companyName: "Other work",
  description: "While you're here, take a look at some of my other case studies.",
  projects: featuredProjects,
};

/* ─────────────────────────────────────────────────────────────────────────────
   Eye — white pill-shaped eyeball with a cursor-tracking pupil.

   Behaviour
   ──────────
   Desktop  : pupils follow mouse cursor (lerp 0.1).
   Mobile   : gyroscope/accelerometer via DeviceOrientationEvent.
              gamma (left-right tilt) → X  |  beta (front-back tilt) → Y.
              iOS: permission requested on first touch.
              Android: no permission required.
   Fallback : touch-drag tracking if orientation API unavailable.
   ───────────────────────────────────────────────────────────────────────────── */

// Shared orientation target — both eyes read from the same values.
const sharedTgt = { x: 0, y: 0 };
let gyroActive = false;

function Eye() {
  const eyeRef   = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eye   = eyeRef.current;
    const pupil = pupilRef.current;
    if (!eye || !pupil) return;

    const mX = () => (eye.offsetWidth  - pupil.offsetWidth)  / 2;
    const mY = () => (eye.offsetHeight - pupil.offsetHeight) / 2;

    let curX = -mX() * 1.22;
    let curY =  mY() * 1.22;
    let following = false;
    let rafId: number;

    const holdTimer = setTimeout(() => { following = true; }, 950);

    /* ── Pointer / touch fallback ── */
    const track = (clientX: number, clientY: number) => {
      if (!following || gyroActive) return;
      const rect  = eye.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = clientX - cx;
      const dy    = clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist  = Math.hypot(dx, dy);
      const t = Math.min(dist / 320, 1);
      sharedTgt.x = Math.cos(angle) * mX() * t;
      sharedTgt.y = Math.sin(angle) * mY() * t;
    };

    const onMouseMove = (e: MouseEvent) => track(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) track(e.touches[0].clientX, e.touches[0].clientY);
    };

    /* ── Gyroscope (mobile only) ── */
    const GAMMA_RANGE = 30; // degrees either side for full pupil travel
    const BETA_CENTER = 70; // natural upright holding angle
    const BETA_RANGE  = 25;

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (!following) return;
      const gamma = e.gamma ?? 0;
      const beta  = e.beta  ?? 0;
      const tx = Math.max(-1, Math.min(1, gamma / GAMMA_RANGE));
      const ty = Math.max(-1, Math.min(1, (beta - BETA_CENTER) / BETA_RANGE));
      sharedTgt.x = tx * mX();
      sharedTgt.y = ty * mY();
    };

    const startGyro = async () => {
      if (gyroActive) return;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const perm = await (DeviceOrientationEvent as any).requestPermission();
          if (perm !== "granted") return;
        }
        gyroActive = true;
        window.addEventListener("deviceorientation", onOrientation);
      } catch {
        /* permission denied — fall through to touch tracking */
      }
    };

    const isMobile = navigator.maxTouchPoints > 0 && window.innerWidth < 1024;

    if (isMobile && "DeviceOrientationEvent" in window) {
      // Android: start immediately | iOS: wait for first touch
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (DeviceOrientationEvent as any).requestPermission !== "function") {
        startGyro();
      } else {
        window.addEventListener("touchstart", startGyro, { once: true });
      }
    }

    /* ── Render loop ── */
    const tick = () => {
      curX += (sharedTgt.x - curX) * 0.08;
      curY += (sharedTgt.y - curY) * 0.08;
      pupil.style.left = `${mX() + curX}px`;
      pupil.style.top  = `${mY() + curY}px`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(holdTimer);
      window.removeEventListener("mousemove",       onMouseMove);
      window.removeEventListener("touchmove",       onTouchMove);
      window.removeEventListener("deviceorientation", onOrientation);
      window.removeEventListener("touchstart",      startGyro);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={eyeRef}
      className="relative bg-white overflow-hidden shrink-0 rounded-[82px]
                 w-[72px]   h-[86px]
                 sm:w-[92px]  sm:h-[110px]
                 lg:w-[110px] lg:h-[131px]"
    >
      <div
        ref={pupilRef}
        className="absolute bg-[#141414] rounded-[82px]
                   w-[43px]  h-[52px]
                   sm:w-[55px]  sm:h-[66px]
                   lg:w-[65px]  lg:h-[79px]"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────────────────────── */

export default function NotFound() {
  return (
    <div className="bg-[#141414] flex flex-col">
      <NavHeader bg="#141414" />

      {/* ── Hero: eyes + text — fills the viewport on arrival ── */}
      <section className="min-h-[calc(100svh-76px)] flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-16 px-6 py-16">

        {/* Eyes */}
        <div className="flex gap-5 sm:gap-7 lg:gap-8 items-center">
          <Eye />
          <Eye />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-['Manrope'] font-light text-[18px] text-[#929296] tracking-[0.18px] leading-[1.48]">
            404
          </p>
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <p className="font-['Manrope'] font-semibold text-2xl sm:text-[32px] text-white leading-[1.4]">
              Case study coming soon
            </p>
            <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] tracking-[0.18px] leading-[1.48]">
              Apologies! I&apos;m currently building out my site
            </p>
          </div>
        </div>

      </section>

      {/* ── Other work ── */}
      <section className="w-full pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-[1152px] mx-auto px-6 sm:px-8 lg:px-0">

          {/* Mobile / tablet: scrollable carousel with header */}
          <div className="lg:hidden">
            <ProjectCarousel section={featuredSection} />
          </div>

          {/* Desktop: static header + 3-column grid */}
          <div className="hidden lg:flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="font-['Manrope'] font-semibold text-[32px] text-white leading-[1.4]">
                Other work
              </h2>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                While you&apos;re here, take a look at some of my other case studies.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCardStatic key={project.id} project={project} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <CaseStudyFooter />
    </div>
  );
}

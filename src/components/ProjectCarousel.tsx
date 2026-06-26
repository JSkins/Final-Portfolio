"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { animate } from "motion/react";
import Image from "next/image";
import { type CarouselSection } from "@/content";
import Emblem from "./Emblem";

export default function ProjectCarousel({ section }: { section: CarouselSection }) {
  const [activePage, setActivePage] = useState(0);
  // Start high so no dots flash before first measurement
  const [cardsPerPage, setCardsPerPage] = useState(999);
  // Ref mirrors state — callbacks always read the current value
  const cardsPerPageRef = useRef(999);

  const scrollRef = useRef<HTMLDivElement>(null);
  // Wrapper that receives the bounce translateX animation
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  // Navigation button refs for pulse feedback
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  // Prevents handleScroll overriding activePage during a programmatic smooth scroll
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const totalProjects = section.projects.length;
  const totalPages = Math.ceil(totalProjects / cardsPerPage);

  /** Measure how many cards fit side-by-side; update on resize */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const measure = () => {
      const card = container.children[0] as HTMLElement | undefined;
      if (!card) return;
      const gap = 24; // gap-6
      const visible = Math.max(1, Math.floor((container.clientWidth + gap) / (card.offsetWidth + gap)));
      cardsPerPageRef.current = visible;
      setCardsPerPage(visible);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  /** Scroll the track to bring card `index` into view with 16 px breathing room.
   *  Uses getBoundingClientRect for reliable cross-browser card positioning.
   *  Temporarily lifts scroll-snap-type so snap-mandatory can't intercept the
   *  smooth scroll (the classic cause of "can't loop back to page 0"). */
  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;
    // Content-space left edge — works regardless of offsetParent
    const cardContentLeft =
      card.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft;
    const targetLeft = Math.max(0, cardContentLeft - 16);
    // Lift CSS snap so it can't intercept the smooth scroll animation
    container.style.scrollSnapType = "none";
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
    setTimeout(() => {
      if (scrollRef.current) scrollRef.current.style.scrollSnapType = "";
    }, 800);
  }, []);

  /** Navigate to a page with infinite looping — updates dot immediately, then scrolls */
  const goToPage = useCallback((page: number) => {
    const cpp = cardsPerPageRef.current;
    const total = Math.ceil(section.projects.length / cpp);
    // Modulo wrap — going before 0 loops to last, going past last loops to 0
    const wrapped = ((page % total) + total) % total;
    setActivePage(wrapped);
    isProgrammaticScroll.current = true;
    clearTimeout(programmaticScrollTimer.current);
    programmaticScrollTimer.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
    scrollToIndex(wrapped * cpp);
  }, [scrollToIndex, section.projects.length]);

  /** Keep the active page in sync with manual scroll / drag (skipped during programmatic scroll) */
  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = scrollRef.current;
    if (!container) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - container.scrollLeft);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    setActivePage(Math.floor(closest / cardsPerPageRef.current));
  }, []);

  /** Quick scale pulse on a nav button for tactile feedback */
  const pulseBtn = useCallback((ref: React.RefObject<HTMLButtonElement | null>) => {
    const el = ref.current;
    if (!el) return;
    animate(el, { scale: [1, 0.82, 1] }, { duration: 0.28, ease: [0.25, 0.1, 0.25, 1.0] });
  }, []);

  /** Subtle bounce on the track wrapper in the direction of travel */
  const triggerBounce = useCallback((scrollDelta: number) => {
    const el = trackWrapperRef.current;
    if (!el || Math.abs(scrollDelta) < 10) return;
    // scrollDelta > 0 means content moved left → bounce direction is left (negative x)
    const dir = scrollDelta > 0 ? -1 : 1;
    animate(el, { x: [0, dir * 8, 0] }, { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] });
  }, []);

  /** Mouse drag — desktop */
  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.pageX;
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    // Lift snap so scrollLeft assignments during drag fire scroll events freely
    if (scrollRef.current) scrollRef.current.style.scrollSnapType = "none";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.pageX - dragStartX.current;
    if (Math.abs(dx) > 4) hasDragged.current = true;
    scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
  };
  const onDragEnd = () => {
    if (isDragging.current) {
      if (hasDragged.current && scrollRef.current) {
        const container = scrollRef.current;
        const delta = container.scrollLeft - dragScrollLeft.current;
        triggerBounce(delta);
        pulseBtn(delta > 0 ? nextBtnRef : prevBtnRef);
        // Find nearest card index from current scroll position, then goToPage
        // to re-enable snap, sync dots, and smooth-scroll to the snap point
        let closest = 0;
        let closestDist = Infinity;
        Array.from(container.children).forEach((child, i) => {
          const dist = Math.abs((child as HTMLElement).offsetLeft - container.scrollLeft);
          if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        goToPage(Math.floor(closest / cardsPerPageRef.current));
      } else if (scrollRef.current) {
        // No drag movement — restore snap immediately
        scrollRef.current.style.scrollSnapType = "";
      }
      isDragging.current = false;
    }
  };

  return (
    <section className="w-full">

      {/* ── Section header ── */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 sm:mb-10 lg:mb-16 gap-4">
        <div className="flex flex-col gap-3">
          {section.logoSrcs && section.logoSrcs.length > 0 && (
            <div className="flex gap-2">
              {section.logoSrcs.map((src, i) => (
                <div key={i} className="size-[56px] rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={src}
                    alt={section.companyName}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          )}
          {/* Company name + description — 4 px gap mobile/tablet, 8 px laptop+ */}
          <div className="flex flex-col gap-1 lg:gap-2">
            <h2 className="font-['Manrope'] font-semibold text-[32px] text-white leading-[1.4]">
              {section.companyName}
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] sm:pr-20">
              {section.description}
            </p>
          </div>
        </div>

        {/* Arrows — always active, loop on overflow */}
        {totalPages > 1 && (
          <div className="flex gap-2 shrink-0 sm:mt-1">
            <button
              ref={prevBtnRef}
              onClick={() => { pulseBtn(prevBtnRef); goToPage(activePage - 1); }}
              aria-label="Previous"
              className="border border-[#f3f3f6] rounded-full p-[14px] hover:bg-white/[0.12] active:bg-white/[0.2] transition-colors"
            >
              <ArrowLeftIcon />
            </button>
            <button
              ref={nextBtnRef}
              onClick={() => { pulseBtn(nextBtnRef); goToPage(activePage + 1); }}
              aria-label="Next"
              className="border border-[#f3f3f6] rounded-full p-[14px] hover:bg-white/[0.12] active:bg-white/[0.2] transition-colors"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>

      {/* ── Carousel track + pagination ── */}
      <div className="flex flex-col gap-6">

        {/* trackWrapperRef receives the bounce animation */}
        <div ref={trackWrapperRef} className="-my-4 -mx-4">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing py-4 px-4 scroll-px-4"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onScroll={handleScroll}
          >
            {section.projects.map((project) => (
              <div
                key={project.id}
                className="snap-start shrink-0 w-[85%] sm:w-[350px]"
              >
                <ProjectCard project={project} hasDragged={hasDragged} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot pagination — one dot per page */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-[2px] h-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                aria-label={`Page ${i + 1}`}
                className="flex items-center justify-center size-8"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    i === activePage
                      ? "bg-white w-6 h-[10px]"
                      : "bg-white/50 size-[10px]"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}

function ProjectCard({
  project,
  hasDragged,
}: {
  project: CarouselSection["projects"][number];
  hasDragged: React.MutableRefObject<boolean>;
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      hasDragged.current = false;
    }
  };

  const inner = (
    <div className="flex flex-col gap-5">
      {/* Thumbnail */}
      <div
        className="relative rounded-xl overflow-hidden aspect-[3/2] w-full"
        style={{ backgroundColor: project.color }}
      >
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <Emblem type={project.emblem} color={project.emblemColor} size={100} />
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4">
        {/* Title + Description — 4 px between them */}
        <div className="flex flex-col gap-1">
          <h3 className="font-['Public_Sans'] font-semibold text-2xl text-white leading-[1.4] tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#929296] rounded-xl px-3 py-1 font-['Manrope'] font-light text-[12px] text-[#929296] leading-[1.48] tracking-[0.12px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        onClick={handleClick}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl transition-transform duration-300 ease-out hover:scale-[1.04] will-change-transform"
        {...(project.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

/* ── Static card — no drag detection, safe to use outside the carousel ── */
export function ProjectCardStatic({
  project,
}: {
  project: CarouselSection["projects"][number];
}) {
  // Plain object satisfies the ref shape; drag never fires in a static grid
  const noop: React.MutableRefObject<boolean> = { current: false };
  return <ProjectCard project={project} hasDragged={noop} />;
}

function ArrowLeftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M17 21L10 14L17 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M11 7L18 14L11 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

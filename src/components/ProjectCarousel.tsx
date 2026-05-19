"use client";
import { useState } from "react";
import Image from "next/image";
import { type CarouselSection } from "@/content";
import Emblem from "./Emblem";

const ITEMS_PER_PAGE = 3;

export default function ProjectCarousel({ section }: { section: CarouselSection }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(section.projects.length / ITEMS_PER_PAGE);
  const visible = section.projects.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section className="w-full">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-16 gap-4">
        <div className="flex flex-col gap-3">
          {section.logoSrc && (
            <div className="bg-[#f3f3f6] rounded-lg p-3 w-fit">
              <Image src={section.logoSrc} alt={section.companyName} width={32} height={32} unoptimized />
            </div>
          )}
          <h2 className="font-['Manrope'] font-semibold text-[32px] text-white leading-[1.4]">
            {section.companyName}
          </h2>
          <p className="font-['Public_Sans'] font-light text-lg text-[#929296] leading-[1.4] sm:max-w-[348px] lg:max-w-[421px]">
            {section.description}
          </p>
        </div>

        {/* Pagination arrows */}
        {totalPages > 1 && (
          <div className="flex gap-2 shrink-0 sm:mt-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous"
              className="border border-[#f3f3f6] rounded-full p-[14px] disabled:opacity-30 hover:bg-white/5 transition-colors"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next"
              className="border border-[#f3f3f6] rounded-full p-[14px] disabled:opacity-30 hover:bg-white/5 transition-colors"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Dot navigation */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6 h-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              className="flex items-center justify-center size-8"
            >
              <span
                className={`rounded-full transition-all ${
                  i === page
                    ? "bg-white/80 w-6 h-[10px]"
                    : "bg-white/50 size-[10px]"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: CarouselSection["projects"][number] }) {
  const inner = (
    <div className="flex flex-col gap-5 group">
      {/* Thumbnail */}
      <div
        className="relative rounded-xl overflow-hidden aspect-[3/2] w-full"
        style={{ backgroundColor: project.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <Emblem type={project.emblem} color={project.emblemColor} size={100} />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4">
        <h3 className="font-['Public_Sans'] font-semibold text-2xl text-white leading-[1.4] tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="font-['Public_Sans'] font-light text-lg text-[#929296] leading-[1.4]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#929296] rounded-xl px-3 py-1 text-xs font-['Public_Sans'] font-light text-[#929296] leading-[1.4]"
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
      <a href={project.href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
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

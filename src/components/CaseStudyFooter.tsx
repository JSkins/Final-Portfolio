import { footer } from "@/content";

export default function CaseStudyFooter() {
  return (
    <footer className="w-full bg-[#f3f3f6]">
      <div className="max-w-[1152px] mx-auto px-6 md:px-16 pt-6 pb-8 flex items-center justify-between gap-6 flex-wrap">

        {/* Col 1 — Contact heading + description */}
        <div className="flex flex-col gap-1 max-w-[560px]">
          <p className="font-['Public_Sans'] font-semibold text-2xl text-[#011b1b] tracking-[-0.02em]">
            Contact
          </p>
          <p className="font-['Manrope'] font-light text-[18px] text-[#3a5757] leading-[1.48] tracking-[0.18px]">
            These short project overviews barely scratch the surface of my process, the immense challenges we encountered, and the rich collaboration that took place, but hopefully it was enough to spark your interest.
          </p>
        </div>

        {/* Col 2 — CTA button */}
        <a
          href={footer.ctaHref}
          className="border border-[#292929] text-[#011b1b] font-['Manrope'] font-[550] text-lg leading-[1.4] px-6 py-[10px] rounded-full hover:bg-black/5 transition-colors whitespace-nowrap shrink-0"
        >
          {footer.ctaLabel}
        </a>
      </div>
    </footer>
  );
}

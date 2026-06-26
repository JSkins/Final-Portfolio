import { footer } from "@/content";

function Motif() {
  return (
    <div className="relative shrink-0 w-[32px] h-[60.69px]">
      {/* Bar 1: right vertical top */}
      <div className="absolute bg-[#ffb627] w-[4.141px] h-[28.281px] left-[27.86px] top-0" />
      {/* Bar 2: right vertical bottom */}
      <div className="absolute flex w-[4.141px] h-[28.281px] left-[27.86px] top-[32.41px] items-center justify-center">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#ffb627] w-[4.141px] h-[28.281px]" />
        </div>
      </div>
      {/* Bar 3: upper diagonal */}
      <div className="absolute flex w-[21.469px] h-[24.309px] left-[10.3px] top-[6.29px] items-center justify-center">
        <div className="flex-none rotate-[-39.82deg] skew-x-[0.37deg]">
          <div className="bg-[#ffb627] w-[4.13px] h-[28.357px]" />
        </div>
      </div>
      {/* Bar 4: lower diagonal */}
      <div className="absolute flex w-[21.469px] h-[24.309px] left-[10.3px] top-[30.09px] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-[39.82deg] skew-x-[-0.37deg]">
          <div className="bg-[#ffb627] w-[4.13px] h-[28.357px]" />
        </div>
      </div>
      {/* Bar 5: horizontal centre */}
      <div className="absolute flex w-[28.464px] h-[4.115px] left-0 top-[28.28px] items-center justify-center">
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-[#ffb627] w-[4.115px] h-[28.464px]" />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyFooter() {
  return (
    <footer className="w-full bg-[#f3f3f6]">
      <div className="max-w-[1152px] mx-auto px-6 sm:px-8 lg:px-0 pt-6 pb-8 flex flex-col gap-6">

        <Motif />

        {/* Content row: Contact text left, CTA button right */}
        <div className="flex items-center justify-between gap-6 flex-wrap">

          {/* Col 1 — Contact heading + description */}
          <div className="flex flex-col gap-1 max-w-[560px]">
            <p className="font-['Public_Sans'] font-semibold text-2xl text-[#011b1b] tracking-[-0.02em] leading-[1.4]">
              Contact
            </p>
            <p className="font-['Manrope'] font-light text-[12px] text-[#3a5757] leading-[1.48] tracking-[0.12px]">
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
      </div>
    </footer>
  );
}

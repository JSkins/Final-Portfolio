import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";

const stats = [
  { value: "80%", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
  { value: "80%", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
  { value: "80%", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
  { value: "80%", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." },
];

export default function PortfolioDashboardPage() {
  return (
    <>
      <NavHeader />

      <main>
        <div className="max-w-[1152px] mx-auto px-6 md:px-16 pt-16 pb-24 flex flex-col gap-16">

          {/* ── Header ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Col 1 — breadcrumb + title + description */}
            <div className="flex flex-col gap-3 lg:max-w-[720px]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Moneybox</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">2026</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Lead Product Designer</span>
              </div>
              <h1 className="font-['Manrope'] font-semibold text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Portfolio Dashboard
              </h1>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Col 2 — The team */}
            <div className="flex flex-col gap-3 lg:items-end shrink-0">
              <p className="font-['Public_Sans'] font-semibold text-2xl text-white leading-[1.4] tracking-[-0.02em]">
                The team
              </p>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                Product manager:
              </p>
            </div>
          </div>

          {/* ── Hero image ── */}
          <div className="w-full h-[194px] sm:h-[400px] lg:h-[648px] bg-[#636363] rounded-xl" />

          {/* ── Problem ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Problem
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* ── Results & Impact ── */}
          <div className="flex flex-col gap-6">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Results &amp; Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <p className="font-['Manrope'] font-semibold text-[40px] lg:text-[48px] text-white leading-[1.4]">
                    {stat.value}
                  </p>
                  <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                    {stat.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 2-col images ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full h-[405px] lg:h-[648px] bg-[#636363] rounded-xl" />
            <div className="w-full h-[405px] lg:h-[648px] bg-[#636363] rounded-xl" />
          </div>

          {/* ── Narrative 1 ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Narrative 1
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* ── 3-col images ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
            <div className="w-full h-[405px] lg:h-[648px] bg-[#636363] rounded-xl" />
            <div className="w-full h-[405px] lg:h-[648px] bg-[#636363] rounded-xl" />
            <div className="w-full h-[405px] lg:h-[648px] bg-[#636363] rounded-xl" />
          </div>

          {/* ── Narrative 2 ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Narrative 2
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
      </main>

      <CaseStudyFooter />
    </>
  );
}

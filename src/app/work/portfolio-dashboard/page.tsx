import React from "react";
import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import VideoPhone from "./VideoPhone";

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-['Manrope'] font-[550] text-sm sm:text-base lg:text-[20px] text-[#48d1d6] leading-[1.4]">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Manrope'] font-semibold text-xl sm:text-2xl lg:text-[32px] text-white leading-[1.4]">
      {children}
    </p>
  );
}

function Body({ children, muted = false, className = "" }: { children: React.ReactNode; muted?: boolean; className?: string }) {
  return (
    <p className={`font-['Manrope'] font-light text-base sm:text-[18px] leading-[1.48] tracking-[0.18px] ${muted ? "text-[#929296]" : "text-white"} ${className}`}>
      {children}
    </p>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="bg-white/10 px-3 py-2 rounded-full font-['Manrope'] font-medium text-[11px] sm:text-xs text-white/80 leading-[1.48]">
      {children}
    </span>
  );
}

function ChapterNum({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[#f4f8f7] text-[11px] sm:text-xs">
      <span className="font-['Manrope'] font-bold leading-none">{num}</span>
      <span className="font-['Manrope'] font-light opacity-85 tracking-[0.12px]">{label}</span>
    </div>
  );
}

/* Dark card housing a centred phone screenshot */
function PhoneCard({ screenSrc }: { screenSrc: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center px-[6px] py-12 sm:py-16 lg:py-[100px]">
      {/* Base + texture */}
      <div className="absolute inset-0 bg-[#022828]" />
      <div className="absolute inset-0 opacity-[0.24]">
        <Image src="/pd/dark-texture.png" alt="" fill className="object-cover" unoptimized />
      </div>
      {/* Phone frame */}
      <div className="relative z-10 border-[4.8px] border-black rounded-[26px] overflow-hidden h-[260px] sm:h-[340px] lg:h-[432px] aspect-[786/1704]">
        <Image src={screenSrc} alt="" fill className="object-cover" unoptimized />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function PortfolioDashboardPage() {
  return (
    <>
      <NavHeader />

      <main>
        <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0 pt-12 sm:pt-16 pb-24 sm:pb-28 flex flex-col gap-12 sm:gap-16">

          {/* ── 1. Header ─────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            {/* Left: breadcrumb + H1 + description */}
            <div className="flex flex-col gap-3 lg:max-w-[552px]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Moneybox</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">2025</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Lead Product Designer</span>
              </div>
              <h1 className="font-['Manrope'] font-semibold text-[36px] sm:text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Portfolio Insights
              </h1>
              <Body muted>
                Turn your money into something greater. A tool delivered as part of the Investing Spotlight campaign, to highlight to customers their portfolio breakdown across a range of categories (ESG, Geography, Sector, Class &amp; Type).
              </Body>
            </div>
            {/* Right: team */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:items-end shrink-0">
              <p className="font-['Public_Sans'] font-semibold text-xl sm:text-2xl text-white leading-[1.4] tracking-[-0.02em]">The team</p>
              <div className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                <p><a href="https://www.linkedin.com/in/jbwhite22/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors">Joseph White</a>, Product manager</p>
                <p>James Skinner, Product Designer</p>
                <p>+3 FE &amp; BE Developers</p>
              </div>
            </div>
          </div>

          {/* ── 2. Hero ────────────────────────────────────────── */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[1152/648] rounded-2xl overflow-hidden">
            <Image
              src="/mb-portfolio-insights.png"
              alt="Portfolio Insights — portfolio split across accounts, equities & cash savings"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* ── 3. Research Insight ────────────────────────────── */}
          <div className="flex flex-col gap-6 pb-8 sm:pb-12 lg:pb-20 pt-8 sm:pt-12 lg:pt-20">
            {/* Moneybox marque — top right */}
            <div className="flex justify-end px-3 py-8 shrink-0">
              <div className="relative size-14">
                <Image src="/pd/mb-marque.svg" alt="Moneybox" fill className="object-contain" unoptimized />
              </div>
            </div>
            {/* Text block — pr-[80px] matches Figma */}
            <div className="relative flex flex-col gap-1 pr-0 sm:pr-[80px]">
              <SectionLabel>Research insight</SectionLabel>
              <p className="font-['Manrope'] font-semibold text-2xl sm:text-[32px] lg:text-[48px] text-white leading-[1.4]">
                <span className="bg-[#6175d7] rounded-[4px] px-1 py-0.5">Advanced investors</span>{" "}
                were leaving Moneybox because the app lacked a consolidated view of their funds and equities needed to effectively{" "}
                <span className="bg-[#6175d7] rounded-[4px] px-1 py-0.5">track and control</span>{" "}
                their portfolios.
              </p>
            </div>
          </div>

          {/* ── 3b. Overview ──────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-[80px] py-8 sm:py-12 lg:py-[80px] lg:items-end">
            {/* Left: heading + background */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-[24px]">
              <p className="font-['Manrope'] font-normal text-xs text-white opacity-85">Our Solution</p>
              <div className="flex flex-col gap-[74px]">
                {/* Heading block */}
                <div className="flex flex-col gap-[14px]">
                  <p className="font-['Manrope'] font-semibold text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[1.4]">
                    See where<br />your money is
                  </p>
                  <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#f4f6f6] leading-[1.48] tracking-[0.18px] opacity-85">
                    View your portfolio split between accounts, equities &amp; cash savings.
                  </p>
                </div>
                {/* Background block */}
                <div className="flex flex-col gap-[9.6px]">
                  <SectionLabel>Background</SectionLabel>
                  <div className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#f4f6f6] leading-[1.48] tracking-[0.18px] opacity-85 flex flex-col gap-3">
                    <p>The feature was launched as part of a wider investing campaign, September 2025, to add value for customers &amp; to get UK savers into investing products.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Centre: phone video */}
            <div className="flex-1 flex items-center justify-center py-6 lg:py-0">
              <VideoPhone />
            </div>

            {/* Right: the tech */}
            <div className="flex-1 flex flex-col gap-[9.6px]">
              <SectionLabel>The tech</SectionLabel>
              <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#f4f6f6] leading-[1.48] tracking-[0.18px] opacity-85">
                A templated screen to show users how their portfolio is divided per product and further by asset, class, type &amp; ESG.
              </p>
            </div>
          </div>

          {/* ── 4. Wealth Mix (text left, phone right) ─────────── */}
          <div id="feature-overview" className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4 justify-center lg:py-16 lg:pr-16">
              <div className="flex flex-col gap-1">
                <SectionLabel>Wealth Mix</SectionLabel>
                <H2>Get cash savers investing</H2>
              </div>
              <div className="flex flex-col gap-4">
                <Body>
                  A soft nudge to promote Cash ISA users to move more of their money into Stocks &amp; Shares ISA accounts to support their long-term savings goals.
                </Body>
                <Body>
                  See the split of your Moneybox wealth between investing &amp; cash accounts.
                </Body>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Tag>xSell</Tag>
                  <Tag>Educational</Tag>
                  <Tag>Experience hook</Tag>
                </div>
              </div>
            </div>
            {/* Phone card */}
            <div className="w-full lg:flex-1">
              <PhoneCard screenSrc="/pd/screen-1.png" />
            </div>
          </div>

          {/* ── 5. Results & Impact ────────────────────────────── */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="font-['Manrope'] font-semibold text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Results &amp; Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[48px]">
              <div className="flex flex-col gap-3">
                <p className="font-['Manrope'] font-semibold text-[36px] sm:text-[40px] lg:text-[48px] text-white leading-[1.4]">-12% Transfers out</p>
                <Body muted>Fewer customers transferring their funds away from Moneybox after Portfolio Insights launched, indicating significantly improved portfolio confidence and reduced anxiety around investment management.</Body>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-['Manrope'] font-semibold text-[36px] sm:text-[40px] lg:text-[48px] text-white leading-[1.4]">542+ views</p>
                <Body muted>Within the first month of launch, Portfolio Insights received 542+ unique views from active customers, demonstrating strong feature discoverability and organic engagement.</Body>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="font-['Manrope'] font-semibold text-[36px] sm:text-[40px] lg:text-[48px] text-white leading-[1.4]">76 NPS</p>
                  <span className="bg-white/10 px-3 py-2 rounded-full font-['Manrope'] font-medium text-[11px] sm:text-xs text-white/80 leading-[1.48] tracking-[0.12px] whitespace-nowrap">+5 since launch</span>
                </div>
                <Body muted>Investing-specific NPS score following rollout, indicating customers found the portfolio breakdown genuinely insightful and useful in managing their long-term investment goals.</Body>
              </div>
            </div>
          </div>

          {/* ── 6. Investing Breakdown (phone left, text right) ── */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Phone card (appears left on lg) */}
            <div className="w-full lg:flex-1">
              <PhoneCard screenSrc="/pd/screen-2.png" />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col gap-4 justify-center lg:py-16 lg:pl-16">
              <div className="flex flex-col gap-1">
                <SectionLabel>Product Insights</SectionLabel>
                <H2>Investing breakdown</H2>
              </div>
              <div className="flex flex-col gap-4">
                <Body>
                  A soft nudge to promote Cash ISA users to move more of their money into Stocks &amp; Shares ISA accounts to support their long-term savings goals.
                </Body>
                <Body>
                  See the split of your Moneybox wealth between investing &amp; cash accounts.
                </Body>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Tag>xSell</Tag>
                  <Tag>Educational</Tag>
                  <Tag>Experience hook</Tag>
                </div>
              </div>
            </div>
          </div>

          {/* ── 7. Participant Quote ───────────────────────────── */}
          <div className="flex flex-col gap-2 py-8 sm:py-12 lg:py-20">
            <SectionLabel>Participant 7, Weekly App User</SectionLabel>
            <p className="font-['Manrope'] font-semibold text-xl sm:text-2xl lg:text-[32px] text-white leading-[1.4] pr-0 sm:pr-[80px]">
              &ldquo;The visual breakdown is super helpful. It&rsquo;s clean and simple, not overwhelming at all, and I can tell at a single glance exactly how my portfolio is weighted without having to dig through dense financial reports.&rdquo;
            </p>
          </div>

          {/* ── 8. Contents card ──────────────────────────────── */}
          <>
            {/* Shared contents data */}
            {(() => {
              const items = [
                { title: "Feature Overview",         sub: null,                           href: "#feature-overview" },
                { title: "Designing for all users",  sub: "Accessibility considerations", href: "#designing-for-all-users" },
                { title: "Bolstering the experience",sub: "How can we Embed delight?",    href: "#bolstering-the-experience" },
                { title: "Design to delivery",       sub: "Translating designs to devs",  href: "#design-to-delivery" },
                { title: "Key takeaways",            sub: null,                           href: "#key-takeaways" },
              ];
              return (
                <>
                  {/* Mobile: content-hugging */}
                  <div className="lg:hidden relative w-full bg-[#022828] rounded-2xl overflow-hidden px-6 py-8 flex flex-col gap-8">
                    <p className="font-['Manrope'] font-semibold text-2xl text-[#f4f8f7]">Contents</p>
                    <div className="flex flex-col gap-5">
                      {items.map(({ title, sub, href }) => (
                        <a key={href} href={href} className="flex flex-col gap-0.5 group">
                          <p className="font-['Manrope'] font-[550] text-base sm:text-[18px] lg:text-[20px] text-[#f4f8f7] leading-[1.4] group-hover:opacity-70 transition-opacity">{title}</p>
                          {sub && <p className="font-['Manrope'] font-light text-sm sm:text-base text-[#f4f8f7] leading-[1.48] opacity-70">{sub}</p>}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* lg+: 16:9 card with forest bg */}
                  <div className="hidden lg:block relative w-full aspect-[1152/648] rounded-2xl overflow-hidden">
                    <Image src="/pd/forest-bg.png" alt="" fill className="object-cover" unoptimized />
                    <div className="absolute left-[1.4%] right-[1.4%] top-[2.5%] bottom-[6.2%] bg-[#022828] rounded-2xl" />
                    <p className="absolute left-[10%] top-1/2 -translate-y-1/2 font-['Manrope'] font-semibold text-[32px] text-[#f4f8f7] leading-[1.4]">Contents</p>
                    <div className="absolute left-[54%] top-1/2 -translate-y-1/2 flex flex-col gap-[28px] w-[36%]">
                      {items.map(({ title, sub, href }) => (
                        <a key={href} href={href} className="flex flex-col gap-1 group">
                          <p className="font-['Manrope'] font-[550] text-[20px] text-[#f4f8f7] leading-[1.4] group-hover:opacity-70 transition-opacity">{title}</p>
                          {sub && <p className="font-['Manrope'] font-light text-[18px] text-[#f4f8f7] leading-[1.48] opacity-70">{sub}</p>}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </>

          {/* ── 9. Designing for all users ────────────────────── */}
          <div id="designing-for-all-users" className="flex flex-col gap-10 sm:gap-14 lg:gap-[86px]">
            <div className="flex flex-col gap-3">
              <ChapterNum num="02" label="Accessibility considerations" />
              <p className="font-['Manrope'] font-semibold text-2xl sm:text-[28px] lg:text-[32px] text-[#f4f8f7] leading-[1.4]">Designing for all users</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-[40px] sm:items-end">

              {/* Col 1 — Dynamic text */}
              <div className="flex flex-col items-center gap-6 sm:gap-[55px]">
                <div className="flex flex-col items-center gap-[2.4px] text-[#f4f8f7] text-center w-full shrink-0">
                  <p className="font-['Manrope'] font-[550] text-base lg:text-[20px] opacity-85 leading-[1.4] w-full">Dynamic text</p>
                  <p className="font-['Manrope'] font-light text-xs opacity-60 tracking-[0.12px] leading-[1.48]">Adaptive to a users device settings up to a 200% text increase, in-line with WCAG AA.</p>
                </div>
                {/* Phone: full rounding mobile, top-only sm+ */}
                <div className="relative border-4 sm:border-[4.8px] border-black rounded-[26px] sm:rounded-t-[26.4px] sm:rounded-b-none overflow-hidden w-[55%] sm:w-full max-w-[200px] aspect-[780/3360] sm:aspect-auto sm:h-[260px] lg:h-[341px]">
                  <Image src="/pd/a11y-phone-1.png" alt="Dynamic text" fill className="object-cover object-top" unoptimized />
                </div>
              </div>

              {/* Col 2 — Data Colours */}
              <div className="flex flex-col items-center gap-6 sm:gap-[55px]">
                <div className="flex flex-col items-center gap-[2.4px] text-[#f4f8f7] text-center w-full shrink-0">
                  <p className="font-['Manrope'] font-[550] text-base lg:text-[20px] opacity-85 leading-[1.4] w-full">Data Colours</p>
                  <p className="font-['Manrope'] font-light text-xs opacity-60 tracking-[0.12px] leading-[1.48]">Applied a scalable data colour set that is AA colour compliant.</p>
                </div>
                <div className="relative border-4 sm:border-[4.8px] border-black rounded-[26px] sm:rounded-t-[26.4px] sm:rounded-b-none overflow-hidden w-[55%] sm:w-full max-w-[200px] aspect-[780/1704] sm:aspect-auto sm:h-[260px] lg:h-[341px]">
                  <Image src="/pd/a11y-phone-2.png" alt="Data Colours" fill className="object-cover object-top" unoptimized />
                </div>
              </div>

              {/* Col 3 — Read order & Alt text (with tooltip overlay on lg+) */}
              <div className="flex flex-col items-center gap-6 sm:gap-[55px]">
                <div className="flex flex-col items-center gap-[2.4px] text-[#f4f8f7] text-center w-full shrink-0">
                  <p className="font-['Manrope'] font-[550] text-base lg:text-[20px] opacity-85 leading-[1.4] w-full">Read order &amp; Alt text</p>
                  <p className="font-['Manrope'] font-light text-xs opacity-60 tracking-[0.12px] leading-[1.48]">Providing a clear read order and alt text for all interactive elements.</p>
                </div>
                {/* Phone + overlay wrapper — overflow-visible so tooltip can bleed left */}
                <div className="relative w-[55%] sm:w-[200px] max-w-[200px]">
                  {/* Phone frame */}
                  <div className="relative border-4 sm:border-[4.8px] border-black rounded-[26px] sm:rounded-t-[26.4px] sm:rounded-b-none overflow-hidden w-full aspect-[780/1704] sm:aspect-auto sm:h-[260px] lg:h-[341px]">
                    <Image src="/pd/a11y-phone-2.png" alt="Read order & Alt text" fill className="object-cover object-top" unoptimized />
                  </div>
                  {/* Alt-text tooltip — desktop only */}
                  <div className="hidden lg:block absolute top-[43px] w-[199px]" style={{ left: '-79px' }}>
                    <Image src="/pd/a11y-overlay.png" alt="Overall Alt Text tooltip" width={199} height={75} className="w-full h-auto" unoptimized />
                  </div>
                  {/* Read-order cursor indicators — desktop only */}
                  <div className="hidden lg:block absolute" style={{ left: '168px', top: '61px', width: '23px', height: '15px' }}>
                    <Image src="/pd/a11y-cursor-1.png" alt="" width={23} height={15} className="w-full h-full object-contain" unoptimized />
                  </div>
                  <div className="hidden lg:block absolute" style={{ left: '151px', top: '92px', width: '23px', height: '15px' }}>
                    <Image src="/pd/a11y-cursor-2.png" alt="" width={23} height={15} className="w-full h-full object-contain" unoptimized />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── 10. Bolstering the experience ─────────────────── */}
          <div id="bolstering-the-experience" className="bg-[#022828] rounded-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left col: chapter num top, phones image below */}
            <div className="flex-1 flex flex-col">
              <div className="px-10 pt-10 lg:px-12 lg:pt-12 shrink-0">
                <ChapterNum num="03" label="How can we Embed delight?" />
              </div>
              <div className="flex-1 flex items-center justify-center px-6 py-8 lg:py-0 min-h-[260px] lg:min-h-[400px] sm:pl-[40px]">
                <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[480px]">
                  <Image src="/pd/delight.png" alt="Bolstering the experience" fill className="object-contain" unoptimized />
                </div>
              </div>
            </div>
            {/* Right col: text — py-[144px] matches Figma */}
            <div className="flex-1 flex flex-col justify-center gap-[14px] px-7 py-8 sm:px-10 sm:py-10 lg:px-[72px] lg:py-[144px]">
              <div className="flex flex-col gap-1">
                <SectionLabel>Jobs to be done</SectionLabel>
                <H2>Bolstering the experience</H2>
              </div>
              <Body>
                To ingrain deep delight throughout the experience, we adopted the Jobs To Be Done framework to meet and look to exceed users expectations &amp; needs.
              </Body>
              <ol className="list-decimal ml-5 font-['Manrope'] font-light text-base sm:text-[18px] text-white leading-[1.48] tracking-[0.18px] flex flex-col gap-3">
                <li>When looking at S&amp;S ISA, as a user I want to see where my money is invested.</li>
                <li>Then, I don&rsquo;t recognise an ETF, so I want to view a quick summary &amp; see my average buy price.</li>
                <li>Then I want to see how the fund has performed overtime.</li>
              </ol>
            </div>
          </div>

          {/* ── 11. Design to delivery ────────────────────────── */}
          <div id="design-to-delivery" className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left: text */}
            <div className="flex-1 flex flex-col gap-8 lg:gap-[133px]">
              <ChapterNum num="04" label="Design to delivery" />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <SectionLabel>Design handover</SectionLabel>
                  <H2>Design to delivery</H2>
                </div>
                <Body>
                  This project came with lots of technical challenges requiring a close dev-to-designer relationship on both the front-end &amp; back-end. This was due to:
                </Body>
                <ul className="list-disc ml-5 font-['Manrope'] font-light text-base sm:text-[18px] text-white leading-[1.48] tracking-[0.18px] flex flex-col gap-1 mt-1">
                  <li>Updates to the styling of our Design System components</li>
                  <li>Bespoke components that required new behavioural definitions.</li>
                </ul>
              </div>
            </div>
            {/* Right: dev handoff screenshot */}
            <div className="flex-1 flex flex-col gap-3 w-full">
              <div className="inline-flex items-center gap-[14px] bg-[#2c2c2c] pl-[3.6px] pr-[14px] py-[3.6px] rounded-[13px] self-start">
                <div className="relative size-7 shrink-0">
                  <Image src="/pd/ready-for-dev-icon.png" alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="font-[family-name:var(--font-inter)] font-normal text-[14.4px] text-white whitespace-nowrap">Ready for dev</span>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[2262/1794]">
                <Image src="/pd/dev-handoff.png" alt="Design handoff screenshot" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>

        </div>

        {/* ── 12. Summary — full-bleed, outside max-w container ── */}
        <div id="key-takeaways" className="relative overflow-hidden py-12 sm:py-16 lg:py-[100px]">
          {/* Clouds bg — full bleed */}
          <div className="absolute inset-0">
            <Image src="/pd/summary-bg.png" alt="" fill className="object-cover" unoptimized />
          </div>
          {/* Dark card — mix-blend-hard-light matches Figma */}
          <div className="relative mx-auto max-w-[1113px] px-4 sm:px-6 lg:px-0">
            <div className="bg-[#011d1d] mix-blend-hard-light rounded-2xl px-8 py-10 sm:px-12 sm:py-12 lg:px-[53px] lg:py-[49px] flex flex-col gap-10 sm:gap-12">
              <ChapterNum num="05" label="Key takeaways" />
              <div className="flex flex-col gap-10 sm:gap-12">
                {/* Evaluation */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                  <p className="font-['Public_Sans'] font-semibold text-xl sm:text-2xl text-white leading-[1.4] tracking-[-0.02em] lg:w-[361px] shrink-0">Evaluation</p>
                  <Body>
                    I&rsquo;m very happy with the outcome with this project. I think we could continue to refine our accessibility adherence. I&rsquo;d like to intro subtle textures so we&rsquo;re less reliant on colour to communicate a user&rsquo;s data.
                  </Body>
                </div>
                {/* What next */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                  <p className="font-['Public_Sans'] font-semibold text-xl sm:text-2xl text-white leading-[1.4] tracking-[-0.02em] lg:w-[361px] shrink-0">What next?</p>
                  <div className="flex flex-col gap-2 font-['Manrope'] font-light text-base sm:text-[18px] text-white leading-[1.48] tracking-[0.18px]">
                    <p>We&rsquo;ll be continuously monitoring the performance of the product by assessing it against product &amp; business metrics such as:</p>
                    <ul className="list-disc ml-5 flex flex-col gap-1">
                      <li>AUA</li>
                      <li>Adoption of investing products</li>
                      <li>Average #funds per user</li>
                      <li>Session time</li>
                      <li>CSAT &amp; NPS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <CaseStudyFooter />
    </>
  );
}

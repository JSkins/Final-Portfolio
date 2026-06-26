import React from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import PrototypeEmbed from "@/components/PrototypeEmbed";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";

/* ─────────────────────────────────────────────────────────────
   Design tokens — mirror portfolio-dashboard exactly
   ───────────────────────────────────────────────────────────── */

// Section label colour (teal accent, matches Figma #48d1d6)
const TEAL = "#48d1d6";

/* ─────────────────────────────────────────────────────────────
   Local permanent assets
   ───────────────────────────────────────────────────────────── */

const HERO      = "/mb-story-hero.png";            // 4 phones on dark teal (1152×648)
const BLUEPRINT = "/mb-story-blueprint-phone.png"; // Blueprint Step screen
const RING      = "/mb-story-ring.png";            // Ring photo — overlays baked in
const SOL_LIGHT = "/mb-story-sol-light.png";       // Solution card — light mode (552×648)
const SOL_DARK  = "/mb-story-sol-dark.png";        // Solution card — dark mode  (552×648)

/* ─────────────────────────────────────────────────────────────
   Primitives  (identical to portfolio-dashboard)
   ───────────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p
      className="font-['Manrope'] font-[550] text-sm sm:text-base lg:text-[20px] leading-[1.4]"
      style={{ color: TEAL }}
    >
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

function Body({
  children,
  muted = false,
  className = "",
}: {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-['Manrope'] font-light text-base sm:text-[18px] leading-[1.48] tracking-[0.18px] ${
        muted ? "text-[#929296]" : "text-white"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────────
   Blueprint Step phone — SVG faithful to Figma node 218:52618
   viewBox matches Figma dimensions: 202.958 × 440 px
   ───────────────────────────────────────────────────────────── */

function BlueprintPhoneSVG() {
  return (
    <svg
      viewBox="0 0 203 440"
      className="h-[240px] sm:h-[320px] lg:h-[440px] w-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.6)]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* ── Phone body ── */}
      <rect width="203" height="440" rx="20.657" fill="#011b1b" />

      {/* ── Status bar ── */}
      {/* Time */}
      <text x="14" y="17" fill="white" fontSize="6.5" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="-0.1">20:16</text>
      {/* Signal bars */}
      <rect x="160" y="13.5" width="2" height="3"   rx="0.5" fill="white" />
      <rect x="163.5" y="11.5" width="2" height="5" rx="0.5" fill="white" />
      <rect x="167" y="9.5"   width="2" height="7"  rx="0.5" fill="white" />
      {/* Wifi arcs */}
      <path d="M173 16.5 Q175.5 13.5 178 16.5" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M174.5 18.5 Q175.5 17 177 18.5" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <circle cx="175.75" cy="21" r="1" fill="white" />
      {/* Battery */}
      <rect x="182" y="11" width="13.5" height="7.5" rx="2" fill="none" stroke="white" strokeWidth="0.9" />
      <rect x="183.2" y="12.2" width="8.5" height="5.1" rx="1" fill="white" />
      <path d="M196 13.5 v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>

      {/* ── Back / close button ── */}
      <circle cx="16.5" cy="38" r="7.5" fill="white" fillOpacity="0.1" />
      <line x1="13.5" y1="35" x2="19.5" y2="41" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="19.5" y1="35" x2="13.5" y2="41" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>

      {/* ── Image placeholder (teal) — 72.3×72.3 starting at content y=50 ── */}
      {/* Checkerboard to signal placeholder */}
      <rect x="12.4" y="50" width="72.3" height="72.3" rx="4" fill="#3aba9f" />
      {[0,1,2,3].map(col => [0,1,2,3].map(row => (row + col) % 2 === 0 ? (
        <rect key={`${col}-${row}`} x={12.4 + col * 18} y={50 + row * 18} width="18" height="18" rx="0" fill="#34a892" fillOpacity="0.5" />
      ) : null))}

      {/* ── Text content block — starts at y=134 ── */}
      {/* Optional label */}
      <text x="12.4" y="139" fill="#acbfbb" fontSize="7.23" fontFamily="system-ui, sans-serif">Optional label</text>
      {/* Title */}
      <text x="12.4" y="155" fill="white" fontSize="14.46" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="-0.29">Title</text>
      {/* Badge */}
      <rect x="12.4" y="162" width="58" height="13" rx="6.5" fill="#78e3df" />
      <text x="41.4" y="172.3" textAnchor="middle" fill="#011b1b" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="600">Optional badge</text>
      {/* Body paragraph 1 */}
      <text x="12.4" y="187" fill="white" fontSize="7.23" fontFamily="system-ui, sans-serif">Lorem ipsum dolor sit amet consectetur.</text>
      <text x="12.4" y="197.5" fill="white" fontSize="7.23" fontFamily="system-ui, sans-serif">Urna ipsum ultricies viverra ac vel.</text>
      {/* Body paragraph 2 */}
      <text x="12.4" y="210" fill="white" fontSize="7.23" fontFamily="system-ui, sans-serif">Pretium lectus purus risus turpis</text>
      <text x="12.4" y="220" fill="white" fontSize="7.23" fontFamily="system-ui, sans-serif">facilisi mattis in sed vitae.</text>
      {/* Supplementary text */}
      <text x="12.4" y="233" fill="#acbfbb" fontSize="7.23" fontFamily="system-ui, sans-serif">Supplementary text</text>

      {/* ── Banner ── */}
      <rect x="5.2" y="241" width="192.6" height="30" rx="4" fill="rgba(156,194,204,0.12)" stroke="#1c3d3e" strokeWidth="0.52" />
      {/* Info icon */}
      <circle cx="16.5" cy="256" r="5.5" fill="none" stroke="#48d1d6" strokeWidth="1" />
      <text x="16.5" y="259.2" textAnchor="middle" fill="#48d1d6" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700">i</text>
      {/* Banner text */}
      <text x="27" y="253" fill="white" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="600">Banner Title</text>
      <text x="27" y="264" fill="#acbfbb" fontSize="6.5" fontFamily="system-ui, sans-serif">Description copy</text>

      {/* ── Placeholder slot ── */}
      <rect x="5.2" y="279" width="192.6" height="38.2" rx="2" fill="rgba(156,194,204,0.2)" stroke="#1c3d3e" strokeWidth="0.52" strokeDasharray="3 2" />
      <text x="101.5" y="302" textAnchor="middle" fill="#566f6f" fontSize="8.26" fontFamily="system-ui, sans-serif">Placeholder slot 1</text>

      {/* ── Overflow keyline ── */}
      <line x1="0" y1="326" x2="203" y2="326" stroke="#1c3d3e" strokeWidth="0.6" strokeDasharray="4 4" />

      {/* ── Bottom buttons (docked to bottom, absolute in Figma) ── */}
      {/* Primary action */}
      <rect x="12.4" y="349" width="178.2" height="24.8" rx="12.4" fill="#78e3df" />
      <text x="101.5" y="365.5" textAnchor="middle" fill="#011b1b" fontSize="8.26" fontFamily="system-ui, sans-serif" fontWeight="600">Primary action</text>
      {/* Secondary action */}
      <rect x="12.4" y="380" width="178.2" height="24.8" rx="12.4" fill="none" stroke="#2a5f5f" strokeWidth="1" />
      <text x="101.5" y="397" textAnchor="middle" fill="white" fontSize="8.26" fontFamily="system-ui, sans-serif">Secondary action</text>
      {/* Bottom black fill so buttons read clearly */}
      <rect x="0" y="337" width="203" height="69" fill="rgba(1,27,27,0.9)" />
      {/* Re-draw buttons on top of overlay */}
      <rect x="12.4" y="349" width="178.2" height="24.8" rx="12.4" fill="#78e3df" />
      <text x="101.5" y="365.5" textAnchor="middle" fill="#011b1b" fontSize="8.26" fontFamily="system-ui, sans-serif" fontWeight="600">Primary action</text>
      <rect x="12.4" y="380" width="178.2" height="24.8" rx="12.4" fill="none" stroke="#2a5f5f" strokeWidth="1" />
      <text x="101.5" y="397" textAnchor="middle" fill="white" fontSize="8.26" fontFamily="system-ui, sans-serif">Secondary action</text>

      {/* ── Home indicator ── */}
      <rect x="65.1" y="430" width="72.8" height="2.58" rx="1.29" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function PromotingStorytellingPage() {
  return (
    <>
      {/* NavHeader default bg="#141414" matches dark mode */}
      <NavHeader />

      <main className="bg-[#141414]">
        <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0 pt-12 sm:pt-16 pb-12 sm:pb-16 flex flex-col gap-12 sm:gap-16 lg:gap-20">

          {/* ── 1. Header ─────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            {/* Left: breadcrumb + h1 + subtitle */}
            <div className="flex flex-col gap-3 lg:max-w-[720px]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                  Moneybox
                </span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                  2026
                </span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                  Lead Product Designer
                </span>
              </div>
              <h1 className="font-['Manrope'] font-semibold text-[36px] sm:text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Promoting Storytelling
              </h1>
              <Body muted className="max-w-[752px]">
                Designing a reusable component optimised for engagement through storytelling.
              </Body>
            </div>

            {/* Right: team */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:items-end shrink-0">
              <p className="font-['Public_Sans'] font-semibold text-xl sm:text-2xl text-white leading-[1.4] tracking-[-0.02em]">
                The team
              </p>
              <div className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                <p>
                  <a
                    href="https://www.linkedin.com/in/phoebe-davies-32b372139/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors"
                  >
                    Phoebe Davis
                  </a>
                  , Product manager
                </p>
                <p>James Skinner, Product Designer</p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/derek-guo-a9301332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors"
                  >
                    Derek Guo
                  </a>
                  , Design Systems Lead
                </p>
              </div>
            </div>
          </div>

          {/* ── 2. Hero ────────────────────────────────────────── */}

          {/* Mobile: video only, full-width, aspect 5:3 (Figma node 256:14385 = 345×207) */}
          <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden sm:hidden">
            <video
              src="/mb-story-carousel.mov"
              autoPlay
              muted
              playsInline
              controls
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* sm+: full dark card — city bg + positioned video container */}
          <div className="relative hidden sm:block w-full aspect-[1152/648] rounded-2xl overflow-hidden bg-[#0d2f2e]">
            {/* Background: city illustration at 50% opacity */}
            <Image
              src="/mb-story-hero-bg.png"
              alt=""
              fill
              className="object-cover opacity-50"
              priority
              unoptimized
            />
            {/* Video container — 800×480 in Figma → 69.44% wide, aspect 5:3 */}
            <div
              className="absolute overflow-hidden rounded-[19px] aspect-[5/3]"
              style={{
                left: "15.28%",
                top: "12.96%",
                width: "69.44%",
              }}
            >
              <video
                src="/mb-story-carousel.mov"
                autoPlay
                muted
                playsInline
                controls
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ── 3. Research Insight ────────────────────────────── */}
          <div className="flex flex-col gap-6 py-8 sm:py-12 lg:py-16">
            {/* Moneybox marque — top right */}
            <div className="flex justify-end px-3 py-4 shrink-0">
              <div className="relative size-14">
                <Image
                  src="/pd/mb-marque.svg"
                  alt="Moneybox"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Quote with purple highlight boxes (Figma: #6175d7) */}
            <div className="flex flex-col gap-1 pr-0 sm:pr-[80px]">
              <SectionLabel>Research insight</SectionLabel>
              <p className="font-['Manrope'] font-semibold text-2xl sm:text-[32px] lg:text-[48px] text-white leading-[1.4]">
                Users are{" "}
                <span className="bg-[#6175d7] rounded-[4px] px-1 py-0.5">
                  scanning rather than reading
                </span>
                , bypassing dense UI copy and missing critical information.
              </p>
            </div>
          </div>

          {/* ── 4. Background ──────────────────────────────────── */}
          <div className="flex flex-col gap-6 max-w-[552px]">
            <H2>Background</H2>
            <div className="flex flex-col gap-4">
              <Body muted>
                To significantly reduce build times, Moneybox has heavily
                invested in server-driven UI, what is internally referred to as
                Blueprint. This approach allows screens to be delivered
                systematically by referencing existing design system components,
                eliminating the need for custom builds.
              </Body>
              <Body muted>
                After rolling out Blueprint, we ran usability sessions across
                multiple touch points to see how the new flows performed in the
                wild. The qualitative data pointed to a single, glaring theme:
                our text density was simply too high. Users were consistently
                skipping the majority of the copy, telling us we needed to
                rethink our visual communication systematically.
              </Body>
            </div>
          </div>

          {/* ── 5. Key Metrics ──────────────────────────────────── */}
          <div className="flex flex-col gap-8 sm:gap-10 my-10">
            {/* Heading + subtitle */}
            <div className="flex flex-col gap-2">
              <H2>Key Metrics</H2>
              <Body muted className="max-w-[752px]">
                Informational overload directly led to user drop-off, lower
                feature comprehension, and an increased cognitive load during
                high-intent actions.
              </Body>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">

              {/* 45% */}
              <div className="flex flex-col gap-3">
                <p className="font-['Manrope'] font-semibold text-[40px] sm:text-[48px] text-white leading-[1.4]">45%</p>
                <Body>Drop-off rate on Product Merch Blueprint screen</Body>
                <Body muted>
                  Overwhelming layouts and excessive text are creating immediate
                  friction, causing users to abandon the Stocks &amp; Shares ISA
                  funnel during critical merchandising moments.
                </Body>
              </div>

              {/* 80% */}
              <div className="flex flex-col gap-3">
                <p className="font-['Manrope'] font-semibold text-[40px] sm:text-[48px] text-white leading-[1.4]">80%</p>
                <Body>of signed-up users failed to understand the T&amp;Cs.</Body>
                <Body muted>
                  When we tested user comprehension of the existing blueprint
                  screens for S&amp;S ISA, only 20% fully understood our T&amp;Cs.
                </Body>
              </div>

              {/* 5% — with down-trend arrow */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <p className="font-['Manrope'] font-semibold text-[40px] sm:text-[48px] text-white leading-[1.4]">5%</p>
                  {/* Down-trend arrow — mirrors the Figma ArrowUp/flip indicator */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#929296] shrink-0 mb-1">
                    <path d="M7 7l10 10M17 7v10H7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Body>Decrease in conversion rate in Personal Pension xSell</Body>
                <Body muted>
                  Heavy cognitive load at critical decision points is stalling
                  final signups and suppressing overall customer acquisition.
                </Body>
              </div>

            </div>
          </div>

          {/* ── 6. Problem — background + centred phone screen ───── */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch">
            {/* Dark card with building bg + centred phone */}
            <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[480px] lg:min-h-[632px] bg-[#011b1b]">
              {/* Background: building illustration at 50% opacity */}
              <Image
                src="/mb-story-problem-bg.png"
                alt=""
                fill
                className="object-cover opacity-50"
                unoptimized
              />
              {/* Centred phone screen — scales with container height, caps at 440px */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative aspect-[203/440] rounded-[21px] overflow-hidden"
                  style={{ height: "calc(100% - 64px)", maxHeight: "440px" }}
                >
                  <Image
                    src="/mb-story-phone-screen.png"
                    alt="Blueprint Step — product merit screen"
                    fill
                    sizes="(max-width: 1024px) 45vw, 210px"
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col gap-[14px] justify-center py-4 lg:py-8">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>The problem</SectionLabel>
                <H2>We&rsquo;ve observed&hellip;</H2>
              </div>
              <Body muted>
                The Blueprint templates (pictured) have been a huge win;
                they&rsquo;ve significantly boosted our productivity and helped
                us maintain great design consistency across the app. As we
                continue to use and evolve them, we&rsquo;ve noticed a few
                areas where we can iterate to make the user experience even
                stronger.
              </Body>
            </div>
          </div>

          {/* ── 7. Project Aims ─────────────────────────────────── */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20">
            {/* Heading + body — 8px gap between them */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Our project aims</SectionLabel>
                <H2>To bolster engagement</H2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
              {[
                {
                  num: "1",
                  title: "Creating Visual Variety",
                  body: "While the conventional blueprint layout (asset + text block) has been incredibly efficient, it's resulted in some screens feeling a bit text-heavy and similar to one another. We've received some helpful feedback suggesting we explore ways to make the screens visually engaging to keep our users' attention and help prevent drop-off.",
                },
                {
                  num: "2",
                  title: "Enhancing Our Storytelling",
                  body: "We do a fantastic job keeping our language accessible, but we've noticed that sometimes the information can still come across as a dense list of features. Moving forward, we have a great opportunity to break up these larger text blocks and weave our content into more digestible, user-focused stories.",
                },
                {
                  num: "3",
                  title: "A Systemised Solution",
                  body: "Recently, a few different versions of carousels have naturally emerged across different teams. We wanted to consolidate & design a flexible, modular Page Carousel component for both iOS and Android, ensuring it could scale natively across the entire Moneybox ecosystem.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex flex-col gap-3">
                  {/* Numbered circle — Figma: bg-[#204d4d] size-[36px] */}
                  <div className="bg-[#204d4d] size-9 rounded-[18px] flex items-center justify-center shrink-0">
                    <span className="font-['Manrope'] font-semibold text-sm text-white tracking-[0.14px]">
                      {num}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-['Manrope'] font-normal text-[20px] sm:text-[28px] text-white leading-[1.5]">
                      {title}
                    </p>
                    <Body muted>{body}</Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 8. Engagement image + Design Principle ──────────── */}
          <div className="flex flex-col gap-6 lg:gap-12">
            {/* Ring photo full-width — text overlays are baked into the image */}
            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[576px]">
              <Image
                src={RING}
                alt="You're almost there — engagement card example"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Design Principle — Billboard rule */}
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Design Principle</SectionLabel>
                <H2>Billboard rule</H2>
              </div>
              <Body muted className="max-w-[552px]">
                Users don&rsquo;t read; they scan. To hit them with the core
                benefits instantly, we borrowed a page from Uber&rsquo;s
                playbook (contextual cards) and embraced the &ldquo;Billboard
                Rule.&rdquo; We keep text to an absolute minimum to ensure
                high visual impact. The ultimate test? If a user can&rsquo;t
                grasp the screen in 3 seconds, it&rsquo;s time to start
                cutting.
              </Body>
              <Body muted>One simple message per screen:</Body>
              <ul className="list-disc ml-5 font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] flex flex-col gap-1 mt-1">
                <li>Title</li>
                <li>Sub-title</li>
                <li>Asset</li>
              </ul>
            </div>
          </div>

          {/* ── 9–11. Solution + Light & dark + Configurable properties ── */}
          <div className="flex flex-col gap-10">
            {/* Solution text */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>The solution</SectionLabel>
                <H2>A flexible carousel</H2>
              </div>
              <Body muted className="max-w-[552px]">
                We successfully launched a flexible Page Carousel component
                integrated into the Moneybox design system, enabling teams to
                break complex processes into bite-sized, visually engaging
                stories.
              </Body>
            </div>

            {/* Light & dark modes */}
            <ImageLightbox
              src="/mb-story-light-dark.svg"
              alt="Page Carousel component in light and dark modes"
              className="w-full rounded-2xl aspect-[64/45] object-cover sm:aspect-auto sm:object-auto"
            />

            {/* Configurable properties */}
            <div className="flex flex-col gap-6">
              <H2>Configurable properties</H2>
              <ul className="list-disc ml-5 font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] flex flex-col gap-1 mt-1 max-w-[552px]">
                <li>Number of pages (recommend 3-5)</li>
                <li>Show button on all/last page</li>
                <li>Page content view can house any number of Blueprint components</li>
              </ul>
            </div>
          </div>

          {/* ── 12. Impact & Implementation ──────────────────────── */}
          <div className="flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col gap-2">
              <H2>Impact &amp; Implementation</H2>
              <Body muted className="max-w-[752px]">
                Whilst the component has been built, it&rsquo;s yet to be released. We are planning to launch A/B tests to measure the impact against our baseline 45% drop-off rate.
              </Body>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
              {[
                {
                  num: "1",
                  title: "Minimised production",
                  body: "By engineering a drag-and-drop, CMS-driven template, we significantly reduced design and engineering cross-functional overhead, making the component entirely flexible for any future use case.",
                },
                {
                  num: "2",
                  title: "Enabled experimentation",
                  body: "Beyond immediate efficiency gains, designers gained a powerful, reusable UI pattern to experiment with different copy & image variants.",
                },
                {
                  num: "3",
                  title: "A systemised solution",
                  body: "Since the release, we've shifted away from Moneybox's traditional, feature-heavy product copy to experiment with emotionally resonant storytelling. By anchoring complex financial milestones in user aspirations rather than just technical specifications, we are designing a more empathetic narrative that connects deeply with customer motivations.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex flex-col gap-3">
                  <div className="bg-[#204d4d] size-9 rounded-[18px] flex items-center justify-center shrink-0">
                    <span className="font-['Manrope'] font-semibold text-sm text-white tracking-[0.14px]">
                      {num}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-['Manrope'] font-normal text-[20px] sm:text-[28px] text-white leading-[1.5]">
                      {title}
                    </p>
                    <Body muted>{body}</Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── In-app Marketing Examples — full-bleed ────────── */}
        <section className="w-full bg-[#1d1d1d] py-16 sm:py-20 lg:py-[80px]">
          <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-12 lg:gap-20">

            {/* Header + 4 phone mockups */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-[2px]">
                  <SectionLabel>Example</SectionLabel>
                  <H2>In-app marketing</H2>
                </div>
                <div className="flex flex-col gap-2 max-w-[552px]">
                  <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-white leading-[1.48] tracking-[0.18px]">Primary objective: Increase conversion into our new Moneybox funds</p>
                  <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">A simple linear narrative to drive users anticipation towards a specific action.</p>
                </div>
              </div>
              {/* 4 phone mockups — 2-col on mobile, 4-col on sm+ */}
              <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mb-story-page1.svg" alt="Moneybox Funds carousel slide 1" className="w-full rounded-[8px] sm:rounded-[16px] lg:rounded-[30px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mb-story-page2.svg" alt="Moneybox Funds carousel slide 2" className="w-full rounded-[8px] sm:rounded-[16px] lg:rounded-[30px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mb-story-page3.svg" alt="Moneybox Funds carousel slide 3" className="w-full rounded-[8px] sm:rounded-[16px] lg:rounded-[30px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mb-story-page4.svg" alt="Moneybox Funds carousel slide 4" className="w-full rounded-[8px] sm:rounded-[16px] lg:rounded-[30px]" />
              </div>
            </div>

            {/* Annotated UI screens — teal container with centred SVG + caption text */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 items-start">
              {/* Gestures */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                <div className="bg-[#0d2f2e] rounded-2xl overflow-hidden aspect-[552/648] max-h-[648px]">
                  <ImageLightbox src="/mb-story-gestures.svg" alt="Page carousel swipe gesture annotations" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-['Manrope'] font-normal text-[20px] sm:text-[28px] text-white leading-[1.5]">Defining Gestures</p>
                  <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">To ensure a seamless and accessible user experience, we defined the component&apos;s interactive regions. As illustrated, the layout supports 2-directional scroll, allowing users to transition between content blocks using either natural swipe gestures or explicit tap targets, alongside vertical scrolling for oversized layouts.</p>
                </div>
              </div>
              {/* Dynamic text */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                <div className="bg-[#0d2f2e] rounded-2xl overflow-hidden aspect-[552/648] max-h-[648px]">
                  <ImageLightbox src="/mb-story-dynamic-text.svg" alt="Page carousel dynamic text annotations" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-['Manrope'] font-normal text-[20px] sm:text-[28px] text-white leading-[1.5]">Catering for dynamic text</p>
                  <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">The template complies with <strong className="font-semibold text-white">WCAG guidelines</strong> by handling text at <strong className="font-semibold text-white">200%</strong>. The containers fill to accommodate text wrapping and introduces vertical scroll when the content becomes oversized to preserve readability.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Journey — 4 AI/Inclusive design sub-sections ─────── */}
        <div className="max-w-[1152px] mx-auto w-full px-4 sm:px-6 lg:px-0 py-[80px] flex flex-col gap-[80px]">

          {/* 1 — Refining Page Transitions */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Adopting AI</SectionLabel>
                <H2>Refining Page Transitions</H2>
              </div>
              <Body muted className="sm:max-w-[552px]">
                To align stakeholders on motion design, I used Figma Make to
                build an interactive testing interface. By integrating custom
                control sliders, stakeholders could manipulate and refine the
                transition styling in real time, significantly streamlining the
                feedback process.
              </Body>
            </div>
            {/* Figma Make proto — embedded via figma.site (no iframe restrictions) */}
            <PrototypeEmbed
              src="https://raven-pivot-52673656.figma.site/"
              title="Page Carousel Prototype"
              className="aspect-[4/3]"
            />
          </div>

          {/* 2 — Tailoring our message per user segment */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Adopting AI</SectionLabel>
                <H2>Tailoring our message per user segment</H2>
              </div>
              <div className="flex flex-col gap-4 sm:max-w-[552px]">
                <Body muted>
                  I used Claude design to ingest our segment research data from PowerBi
                  and UXR files to help tailor our messaging per user to mitigate
                  cash customers barriers to investing.
                </Body>
                <Body muted>
                  For instance, instead of generic &lsquo;Start Investing&rsquo; copy, Claude
                  helped us pivot to &lsquo;Beat inflation with your cash&rsquo; for our low-risk
                  segment 8 customers, directly addressing their specific financial anxieties.
                </Body>
              </div>
            </div>
            <div className="w-full rounded-2xl overflow-hidden relative bg-[#F0EEE7] aspect-[2590/1502]">
              <ImageLightbox
                src="/mb-story-tailoring.png"
                alt="Tailored messaging per user segment"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 3 — Spec'ing for Dev */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Adopting AI</SectionLabel>
                <H2>Spec&apos;ing for Dev</H2>
              </div>
              <Body muted className="sm:max-w-[552px]">
                I developed a shared Claude Skill to automate accessibility
                annotation for new components, saving designers at Moneybox at
                least 4 hours per project.
              </Body>
            </div>
            <div className="w-full rounded-2xl overflow-hidden aspect-video relative bg-[#011a1a]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <ImageLightbox
                src="/mb-story-speccing-dev.svg"
                alt="Accessibility annotation workflow for Spec'ing for Dev"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* ── Reflection — full-bleed with illustration bg ─── */}
        <section className="relative w-full py-16 sm:py-20 lg:py-[100px] flex items-center justify-center bg-[#022828]">
          {/* Background illustration at 60% opacity */}
          <Image
            src="/mb-story-reflection-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-60"
            unoptimized
          />

          {/* Centred card — mix-blend-hard-light creates teal glow against illustration */}
          <div className="relative w-full max-w-[1113px] mx-auto px-6 lg:px-0">
            <div className="bg-[#011d1d] mix-blend-hard-light rounded-2xl px-6 sm:px-10 lg:px-[72px] py-10 lg:py-[64px] flex flex-col gap-12 lg:gap-[64px]">

              {/* Heading */}
              <div className="flex flex-col gap-[2px]">
                <SectionLabel>Reflection</SectionLabel>
                <H2>Key takeaways</H2>
              </div>

              {/* 3-column takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-[40px]">
                {[
                  {
                    title: "Systems Over Screens",
                    body: "Building a component is only half the battle; the real challenge is governance. We must actively partner with product teams to ensure the carousel remains an intentional storytelling tool, rather than a dumping ground for copy that should simply be cut.",
                  },
                  {
                    title: "Unlocking Cross-Selling:",
                    body: "While initially designed for onboarding, the framework doubles as high-converting pattern for feature discovery. Its format allows teams to seamlessly introduce products (e.g., driving cash customers to investing) without cluttering the core app experience.",
                  },
                  {
                    title: "Assets Dictates Success:",
                    body: "As this UI pattern is visually dominant, the carousel is only as good as the creative assets inside it. Success requires tight, ongoing collaboration with the Brand team to continuously raise our illustration standards.",
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex flex-col gap-4">
                    <p className="font-['Manrope'] font-[550] text-base sm:text-[20px] text-white leading-[1.4]">
                      {title}
                    </p>
                    <p className="font-['Manrope'] font-light text-base sm:text-[18px] text-white leading-[1.48] tracking-[0.18px]">
                      {body}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <CaseStudyFooter />
    </>
  );
}

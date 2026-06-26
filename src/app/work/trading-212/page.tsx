import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import WealthChartVideo from "./WealthChartVideo";
import PortfolioOverviewVideo from "./PortfolioOverviewVideo";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const BG   = "#0d151c";
const BLUE = "#00a7e1";
const PROTO =
  "https://www.figma.com/proto/I2mytHdKgCUGNRS1hLO5b5/Trading-212-Task?node-id=266-7330&t=lmyU26HQH27zvhyH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=266%3A7330";

/* ─── Asset paths ────────────────────────────────────────────────────────────── */
const EMBLEM = "/t212/t212-emblem.svg";
const S02    = "/t212/s02-contents.png";
const S08    = "/t212/s08-portfolio-ov2.png";
const S09    = "/t212/s09-portfolio-ov3.png";
const S10    = "/t212/s10-portfolio-rat1.png";
const S11    = "/t212/s11-portfolio-rat2.png";
const S12    = "/t212/s12-portfolio-sol.png";
const S14    = "/t212/s14-variety-rat.png";
const S15    = "/t212/s15-variety2.png";
const S17    = "/t212/s17-wealth-rat.png";
const S18    = "/t212/s18-wealth.png";

/* ─── Primitives ─────────────────────────────────────────────────────────────── */

function Card({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div
      id={id}
      className={`relative w-full overflow-hidden rounded-2xl lg:aspect-[16/9] ${className}`}
      style={{ backgroundColor: BG }}
    >
      {children}
    </div>
  );
}

function T212Emblem({ sm = false }: { sm?: boolean }) {
  const dim = sm
    ? "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
    : "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16";
  return (
    <div className={`relative ${dim} shrink-0`}>
      <Image src={EMBLEM} alt="Trading 212" fill className="object-contain" unoptimized />
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p
      className="font-[family-name:var(--font-montserrat)] font-semibold
                 text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.09em] uppercase"
      style={{ color: BLUE }}
    >
      {children}
    </p>
  );
}

function Heading({ children, xl = false }: { children: React.ReactNode; xl?: boolean }) {
  return (
    <p
      className={`font-[family-name:var(--font-montserrat)] font-semibold text-white leading-[1.2]
        ${xl
          ? "text-[clamp(24px,5vw,54px)] tracking-[-0.01em]"
          : "text-xl sm:text-2xl lg:text-[28px]"}`}
    >
      {children}
    </p>
  );
}

function Body({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p
      className="font-[family-name:var(--font-montserrat)] font-light leading-[1.55]
                 text-sm sm:text-base lg:text-[17px]"
      style={{ color: muted ? "#8a9baa" : "white" }}
    >
      {children}
    </p>
  );
}

/** Full-bleed slide screenshot, optional prototype CTA */
function SlideImg({ src, alt, proto = false }: { src: string; alt: string; proto?: boolean }) {
  return (
    <Card>
      <div className="absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover object-top" unoptimized />
      </div>
      {proto && (
        <a
          href={PROTO}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-10
                     inline-flex items-center px-4 py-2 rounded-full
                     font-[family-name:var(--font-montserrat)] font-semibold text-xs sm:text-sm
                     bg-white text-[#0d151c] hover:bg-white/90 transition-colors"
        >
          View prototype →
        </a>
      )}
      <div className="min-h-[56vw] lg:hidden" />
    </Card>
  );
}

/** Two-column intro card (Portfolio Overview / Variety Score / Wealth Chart) */
function IntroCard({
  title,
  roleLabel,
  roleBody,
  needs,
  id,
}: {
  title: string;
  roleLabel: string;
  roleBody: string;
  needs: string[];
  id?: string;
}) {
  return (
    <Card id={id}>
      <div className="absolute top-0 inset-x-0 h-[4px] lg:h-[6px]" style={{ backgroundColor: BLUE }} />
      <div
        className="flex flex-col justify-between gap-8 lg:gap-0
                   px-5 sm:px-10 lg:px-16
                   pt-8 sm:pt-12 lg:pt-14
                   pb-6 sm:pb-10 lg:pb-12
                   min-h-[56vw]"
      >
        <Heading>{title}</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col gap-2 sm:gap-3">
            <Label>{roleLabel}</Label>
            <Body>{roleBody}</Body>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <Label>User Needs</Label>
            <ul className="space-y-1.5">
              {needs.map((n) => (
                <li
                  key={n}
                  className="flex gap-2 font-[family-name:var(--font-montserrat)] font-light
                             text-sm sm:text-base lg:text-[17px] text-white leading-[1.55]"
                >
                  <span className="shrink-0 mt-[3px] text-[10px]">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ─── Individual slides ──────────────────────────────────────────────────────── */

function S02Contents() {
  const items = [
    { n: null, title: "Background",              body: "Problem, commercial drivers and design principals", href: "#core-problem" },
    { n: "1.", title: "Portfolio Overview",       body: "Designing the L0 experience",                      href: "#portfolio-overview" },
    { n: "2.", title: "Variety Score",            body: "See your investments across asset type, sectors, geography and themes", href: "#variety-score" },
    { n: "3.", title: "Wealth Chart",             body: "See your portfolio projection",                    href: "#wealth-chart" },
    { n: null, title: "If I were to go further…", body: null,                                               href: "#summary" },
  ];
  return (
    <Card>
      <div
        className="absolute top-0 right-0 w-[45%] aspect-square translate-x-[20%] -translate-y-[30%]
                   rounded-full blur-[96px] opacity-[0.12] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00a7e1, #0275b5, #044389)" }}
      />
      <div
        className="relative z-10 flex flex-col lg:flex-row lg:items-stretch lg:justify-between
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   gap-8 lg:gap-0
                   min-h-[56vw]"
      >
        {/* Left — title + prototype button */}
        <div className="flex flex-col justify-between lg:flex-1 lg:max-w-[40%] shrink-0">
          <Heading xl>Contents</Heading>
          <a
            href={PROTO}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-8 lg:mt-0 px-5 py-2 rounded-full
                       font-[family-name:var(--font-montserrat)] font-semibold text-sm text-[#1a1a1a]
                       bg-white hover:bg-white/90 transition-colors"
          >
            Final proposal
          </a>
        </div>
        {/* Right — list items */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 lg:flex-1 lg:pr-[72px] lg:justify-center">
          {items.map(({ n, title, body, href }) => (
            <a
              key={title}
              href={href}
              className="group flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white
                              text-sm sm:text-base lg:text-[19px] leading-[1.5] tracking-[-0.02em]
                              group-hover:opacity-80 transition-opacity">
                  {n && <span className="mr-2" style={{ color: "#8a9baa" }}>{n}</span>}
                  {title}
                </p>
                {body && (
                  <p
                    className="font-[family-name:var(--font-montserrat)] font-light
                               text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.5]"
                    style={{ color: "#8a9baa" }}
                  >
                    {body}
                  </p>
                )}
              </div>
              {/* Hover arrow */}
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-150
                           shrink-0 w-[33px] h-[33px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(22,36,48,0.8)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 2.5L9.5 7L5 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

function S03Problem() {
  return (
    <Card id="core-problem">
      {/* Blue glow — top-right, matches Figma node 295:109041 */}
      <div
        className="absolute top-0 right-0 w-[45%] aspect-square translate-x-[20%] -translate-y-[30%]
                   rounded-full blur-[96px] opacity-[0.1] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00a7e1, #0275b5, #044389)" }}
      />
      <div
        className="relative z-10 flex flex-col justify-between
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   min-h-[56vw] lg:min-h-0"
      >
        <T212Emblem sm />
        <div className="flex flex-col gap-2 sm:gap-3 mt-8 lg:mt-0 max-w-[90%] sm:max-w-[75%] lg:max-w-[57%]">
          <Label>Core Problem</Label>
          <Heading xl>Typical UK customers have poor financial literacy.</Heading>
          <Body muted>
            They understand why investing matters, but financial jargon, perceived risks,
            and not knowing where to start gets in the way.
          </Body>
        </div>
      </div>
    </Card>
  );
}

function S04Principles() {
  const items = [
    {
      n: "1",
      title: "Simple, yet informative",
      paras: [
        `Emphasise only essential data points and hide complex technical overlays. Use progressive disclosure to ensure details only appear when a user actively seeks them, to reduce "decision fatigue" that often intimidates new investors.`,
      ],
    },
    {
      n: "2",
      title: "Plain-English",
      paras: [
        "Actively mitigate financial illiteracy by reducing financial jargon that alienates new investors.",
        "Incorporate educational explainers in context, guiding users from a baseline of zero knowledge to becoming confident long-term investors.",
      ],
    },
    {
      n: "3",
      title: "For the long term",
      paras: [
        `Shift from a reactive marketplace to a future-focused dashboard. Replace urgent daily tickers and volatility alerts with smooth, long-term trajectory graphs, and celebrate consistent time-in-the-market over individual "winning" trades.`,
      ],
    },
  ];
  return (
    <Card>
      <div
        className="flex flex-col gap-6 sm:gap-8 lg:gap-10
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   min-h-[56vw]"
      >
        <div className="flex flex-col gap-1">
          <Label>Background</Label>
          <Heading>Design Principles</Heading>
          <p className="font-[family-name:var(--font-montserrat)] font-light text-white/70
                        text-xs sm:text-sm lg:text-[14px] leading-[1.5] mt-1 max-w-3xl">
            Transition the user interface from a short-term trading view to a{" "}
            <strong className="font-bold text-white">long-term perspective.</strong>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-[57px]">
          {items.map(({ n, title, paras }) => (
            <div key={n} className="flex flex-col gap-2 sm:gap-3">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0
                           font-[family-name:var(--font-montserrat)] font-medium text-sm text-white"
                style={{ backgroundColor: "#162430" }}
              >
                {n}
              </div>
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-white
                            text-sm sm:text-base lg:text-[19px] leading-[1.2]">
                {title}
              </p>
              {paras.map((p, i) => (
                <p key={i}
                   className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5] text-white/70
                              text-xs sm:text-[13px] lg:text-[12px]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function S05Goals() {
  const primaryMetrics = [
    "Average AUA per active customer (target: +X% in 12 months)",
    "Average annual deposit value per customer (% Maxing out ISA & inclusive to other products)",
    "Net ISA transfer flow: inbound transfer value minus outbound",
  ];
  const secondaryMetrics = [
    "AutoInvest Adoption: % of users with an active recurring deposit",
    "Grow cross-product adoption: Increase the average number of products held per user.",
    "Shift trading behaviour: Drive 'Pie' investment adoption over single-asset trades.",
    "Average asset holding period for ISA portfolios",
  ];
  return (
    <Card>
      <div
        className="flex flex-col gap-5 sm:gap-6 lg:gap-8
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   min-h-[56vw]"
      >
        <div className="flex flex-col gap-1">
          <Label>Background</Label>
          <Heading>Commercial Goals</Heading>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[57px]">
          {/* Primary goal — filled dark surface */}
          <div
            className="flex flex-col justify-between gap-8 sm:gap-10 rounded-xl
                       p-5 sm:p-6 lg:p-[28px] flex-1"
            style={{ backgroundColor: "#162430" }}
          >
            <div className="flex flex-col gap-3">
              <span
                className="self-start px-3 py-1 rounded-full
                           font-[family-name:var(--font-montserrat)] font-medium
                           text-[9px] uppercase tracking-[0.08em] text-white"
                style={{ backgroundColor: BLUE }}
              >
                Primary goal
              </span>
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-white
                            text-base sm:text-lg lg:text-[19px] leading-[1.2]">
                Increase AUA
              </p>
              <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5] text-white/80
                            text-xs sm:text-[13px] lg:text-[11px]">
                T212 wants to become the platform where existing holders concentrate their annual allowance, reinvest dividends, and stay for decades. Every £1 retained and grown today is worth multiples in future Assets Under Administration (AUA) and referral value.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-[9px] uppercase tracking-[0.08em]"
                 style={{ color: "#ff903b" }}>
                Success metrics
              </p>
              <ul className="space-y-1 list-disc list-inside">
                {primaryMetrics.map((m) => (
                  <li key={m}
                      className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5] text-white
                                 text-[11px] sm:text-xs">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Secondary goal — no card background */}
          <div className="flex flex-col justify-between gap-8 sm:gap-10 flex-1 lg:py-[28px]">
            <div className="flex flex-col gap-3">
              <span
                className="self-start px-3 py-1 rounded-full border
                           font-[family-name:var(--font-montserrat)] font-medium
                           text-[9px] uppercase tracking-[0.08em] text-white"
                style={{ borderColor: "#72777a" }}
              >
                Secondary goal
              </span>
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-white
                            text-base sm:text-lg lg:text-[19px] leading-[1.2]">
                Building Habit, Not Just Hype
              </p>
              <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5]
                            text-xs sm:text-[13px] lg:text-[12px]"
                 style={{ color: "#8a9baa" }}>
                AUA growth only compounds if customers stay. Moving away from volatile trading cycles. The goal is to build financial habits that make T212 the default &ldquo;home&rdquo; for a user&apos;s monthly savings and dividends rather than just a place to check in to place your next hedge.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-[9px] uppercase tracking-[0.08em]"
                 style={{ color: "#ff903b" }}>
                Success metrics
              </p>
              <ul className="space-y-1 list-disc list-inside">
                {secondaryMetrics.map((m) => (
                  <li key={m}
                      className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5]
                                 text-[11px] sm:text-xs"
                      style={{ color: "#8a9baa" }}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function S06Question() {
  return (
    <Card>
      <div
        className="absolute top-0 right-0 w-[45%] aspect-square translate-x-[20%] -translate-y-[30%]
                   rounded-full blur-[96px] opacity-[0.1] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00a7e1, #0275b5, #044389)" }}
      />
      <div
        className="relative z-10 flex flex-col justify-between
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   min-h-[56vw] lg:min-h-0"
      >
        <T212Emblem sm />
        <div className="flex flex-col gap-2 sm:gap-3 mt-8 lg:mt-0 max-w-[90%] sm:max-w-[75%] lg:max-w-[66%]">
          <Label>Core design question</Label>
          <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white
                        text-xl sm:text-3xl lg:text-[clamp(22px,3.2vw,44px)] leading-[1.22] tracking-tight">
            How might we shift user behaviour from one-off trades to consistent,
            long-term wealth habits?
          </p>
        </div>
      </div>
    </Card>
  );
}

function S07PortfolioIntro() {
  return (
    <IntroCard
      id="portfolio-overview"
      title="Portfolio Overview"
      roleLabel="Role of an Overview"
      roleBody="To give customers a clear picture of where their money is today, and how their strategy will shape their financial tomorrow."
      needs={[
        "How is my portfolio performing now?",
        "How will my portfolio perform in future? In 5, 10, 20 years time?",
        "Will I hit my financial goals? Will I beat an Index?",
        "What actions do I need to take now?",
        "What do I need to consider in the future?",
        "Where can I learn more?",
      ]}
    />
  );
}

function S08WealthManager() {
  const scenarios = [
    {
      n: "1.",
      title: "Too concentrated in one asset or theme",
      body: "Diversify, or at least understand the client's comfort with the concentration. If they have other conviction, that's fine, but they must know why.",
    },
    {
      n: "2.",
      title: "Taking more risk than your goals require",
      body: "Revisit what the client's financial goal is. Use historic drawdowns as a reality check. De-risk via cash, fixed income, or alternative assets.",
    },
    {
      n: "3.",
      title: "Frustrated by slow performance, but on track",
      body: "Nothing needs to change. Show client the numbers (modelling, what other assets would have returned, and the volatility that would have come with it).",
    },
    {
      n: "4.",
      title: "Too cautious and should take more risk",
      body: "Start with the client's emotional relationship with money, not the data. Show recovery timelines from historical drawdowns. If they're still hesitant, drip-feed into riskier assets over time rather than going all in.",
    },
  ];
  return (
    <Card>
      {/* Light blue accent bar */}
      <div className="absolute top-0 inset-x-0 h-[5px] lg:h-[8px]" style={{ backgroundColor: "#63b0e3" }} />
      <div
        className="flex flex-col justify-between
                   px-5 sm:px-10 lg:px-[72px]
                   pt-8 sm:pt-12 lg:pt-12
                   pb-6 sm:pb-10 lg:pb-12
                   min-h-[56vw] lg:min-h-0"
      >
        {/* Header */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white
                        text-lg sm:text-2xl lg:text-[28px] leading-[1.2]">
            Ask a Wealth Manager
          </p>
          <p className="font-[family-name:var(--font-montserrat)] font-light text-white/70
                        text-sm sm:text-base lg:text-[17px] leading-[1.5]">
            4 situations and what they&apos;d tell clients to do:
          </p>
        </div>
        {/* Body: sidebar note + 2×2 scenarios */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] mt-8 lg:mt-0">
          <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5]
                        text-xs sm:text-sm lg:text-[14px] lg:w-[216px] shrink-0"
             style={{ color: "#8a9baa" }}>
            I briefly ran these scenarios past a friend who&apos;s a Wealth Manager.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-[96px] lg:gap-y-[34px] flex-1">
            {scenarios.map(({ n, title, body }) => (
              <div key={n} className="flex flex-col gap-1.5 sm:gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-semibold
                              text-[10px] sm:text-[11px] leading-[1.2]"
                   style={{ color: BLUE }}>
                  {n} {title}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5]
                              text-sm sm:text-base lg:text-[17px] text-white">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function S09Metrics() {
  const ORANGE = "#ff903b";
  const MUTED  = "#8a9baa";
  return (
    <Card>
      {/* Orange accent bar */}
      <div className="h-2 sm:h-3 w-full shrink-0" style={{ backgroundColor: ORANGE }} />

      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-0 lg:flex-row
                      px-5 sm:px-10 lg:px-[72px]
                      py-6 sm:py-10 lg:py-[48px]
                      lg:items-center lg:min-h-[calc(100%-12px)]">

        {/* Heading block */}
        <div className="flex flex-col gap-2 lg:w-[320px] lg:shrink-0 lg:mr-16">
          <Heading>Performance Metrics</Heading>
          <Body muted>Two numbers that tell customers how their portfolio is doing.</Body>
        </div>

        {/* Linked card + two metric columns */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-[60px] lg:flex-1 lg:items-start">

          {/* Diversification ↕ Risk card */}
          <div
            className="rounded-xl px-6 sm:px-8 lg:px-[36px] py-4 sm:py-5 lg:py-[18px]
                       flex flex-col gap-3 shrink-0 sm:w-[200px] lg:w-[220px]"
            style={{ backgroundColor: "rgba(223,233,241,0.05)" }}
          >
            <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-base lg:text-lg tracking-tight">
              Diversification
            </p>
            {/* Vertical linked arrow */}
            <div className="flex flex-col items-start gap-2 py-1">
              {/* Up arrow */}
              <svg width="18" height="40" viewBox="0 0 18 80" fill="none">
                <line x1="9" y1="80" x2="9" y2="0" stroke={MUTED} strokeWidth="1.5" />
                <path d="M2 14L9 0L16 14" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-[family-name:var(--font-montserrat)] font-light text-xs" style={{ color: MUTED }}>linked</p>
              {/* Down arrow */}
              <svg width="18" height="40" viewBox="0 0 18 80" fill="none">
                <line x1="9" y1="0" x2="9" y2="80" stroke={MUTED} strokeWidth="1.5" />
                <path d="M2 66L9 80L16 66" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-base lg:text-lg tracking-tight">
              Risk
            </p>
          </div>

          {/* Metric 1 — Variety Score */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#162430" }}
            >
              <span className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-xs">1</span>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-lg lg:text-xl leading-[1.2]">
              Variety Score
            </p>
            <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5] text-sm lg:text-base text-white">
              Shows how diversified a portfolio actually is, across asset class, geography, and sector, not just number of funds. Label tiers (e.g. &ldquo;Balanced&rdquo;) give customers a goal to aim for without needing to understand the maths.
            </p>
          </div>

          {/* Metric 2 — Risk Score */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#162430" }}
            >
              <span className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-xs">2</span>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-lg lg:text-xl leading-[1.2]">
              Risk Score
            </p>
            <p className="font-[family-name:var(--font-montserrat)] font-light leading-[1.5] text-sm lg:text-base text-white">
              Shown as a delta against the customer&apos;s own target, not an abstract number. &ldquo;You&apos;re +2 above your target risk&rdquo; is actionable. &ldquo;Your risk is 67/100&rdquo; isn&apos;t. Adjacent to the Variety Score means the two metrics reinforce each other: poor diversification shows up in times of elevated risk.
            </p>
          </div>

        </div>
      </div>
    </Card>
  );
}

function S10Iterations() {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row">
        {/* Left — exploration SVG */}
        <div className="flex items-center justify-center lg:justify-start lg:w-[58%] shrink-0
                        px-5 sm:px-10 lg:pl-[72px]
                        pt-6 sm:pt-10 lg:pt-[48px]
                        pb-0 lg:pb-[48px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/t212/exploration.svg"
            alt="Variety Score design explorations"
            className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full"
            width={525}
            height={582}
          />
        </div>
        {/* Right — text */}
        <div className="flex flex-col justify-center gap-3
                        px-5 sm:px-10 lg:pr-[72px]
                        py-8 sm:py-10 lg:py-[48px]
                        lg:flex-1">
          <Label>Iterating</Label>
          <Heading>Variety Score</Heading>
          <Body>How might we visualise the gap between actual and target risk?</Body>
          <a
            href={PROTO}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-2 px-5 py-2 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm text-[#0d151c] bg-white hover:bg-white/90 transition-colors"
          >
            View in full
          </a>
        </div>
      </div>
    </Card>
  );
}

function S11PortfolioFeatures() {
  return <SlideImg src={S11} alt="Portfolio Overview annotated feature breakdown" />;
}

function S12PortfolioSolution() {
  const PAGE_BG = "#162430";
  const investments = [
    { icon: "plus",   name: "Create a pie",   sub: "Start fresh or copy a ready-made one", value: null,     pct: null },
    { icon: "donut",  name: "Copper 🥇",       sub: "4 Holdings",                           value: "£430.10", pct: "+20.8%" },
    { icon: "fund",   name: "Global Shares",   sub: "ETF · Vanguard",                       value: "£327.83", pct: "+16.2%" },
    { icon: "stock",  name: "Amazon.com",       sub: "AMZN · 0.4705",                       value: "£11.10",  pct: "+0.8%" },
  ];
  return (
    <Card>
      <div className="flex flex-col lg:flex-row px-5 sm:px-10 lg:px-[108px] py-6 sm:py-10 lg:py-[60px] gap-8 lg:gap-0 min-h-[56vw] lg:min-h-0">
        {/* Left: text */}
        <div className="flex flex-col justify-between lg:w-[42%] shrink-0">
          <T212Emblem sm />
          <div className="flex flex-col gap-2 mt-8 lg:mt-0">
            <Label>Solution</Label>
            <Heading>Portfolio Overview</Heading>
            <Body>Gives customers a clear picture of where their money is today, and how their strategy will shape their financial tomorrow.</Body>
            <a href={PROTO} target="_blank" rel="noopener noreferrer" className="self-start mt-2 px-5 py-2 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm text-[#0d151c] bg-white hover:bg-white/90 transition-colors">View prototype</a>
          </div>
        </div>
        {/* Right: portfolio overview video */}
        <div className="flex justify-center lg:justify-end lg:flex-1 lg:items-center">
          <PortfolioOverviewVideo />
        </div>
      </div>
    </Card>
  );
}

function S13VarietyIntro() {
  return (
    <IntroCard
      id="variety-score"
      title="Variety Score"
      roleLabel="Role of an Overview"
      roleBody="Shows customers how their portfolio breaks down across ESG, geography, sector, class, and type, and flags when the user needs to act."
      needs={[
        "Where am I currently invested?",
        "Is my portfolio actually diversified, or just spread across similar things?",
        "Am I currently over-exposed?",
        "Am I invested in line with my values & goals?",
        "What's driving my Variety Score up or down?",
        "Which part of my portfolio should I change first?",
        "How can I take action and manage my portfolio?",
      ]}
    />
  );
}

function S14VarietyFeatures() {
  return <SlideImg src={S14} alt="Variety Score annotated feature breakdown" />;
}

function S15VarietySolution() {
  return (
    <Card>
      <div
        className="flex flex-col lg:flex-row
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   gap-8 lg:gap-0
                   min-h-[56vw] lg:min-h-0"
      >
        {/* Left — emblem top, description bottom */}
        <div className="flex flex-col justify-between lg:w-[42%] shrink-0">
          <T212Emblem sm />
          <div className="flex flex-col gap-2 mt-8 lg:mt-0">
            <Label>Solution</Label>
            <Heading>Variety Score</Heading>
            <Body>
              Highlight to customers their portfolio breakdown across a range of categories
              (Company, ESG, Geography, Sector, &amp; Class).
            </Body>
            <a
              href={PROTO}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-2 px-5 py-2 rounded-full
                         font-[family-name:var(--font-montserrat)] font-semibold text-sm text-[#0d151c]
                         bg-white hover:bg-white/90 transition-colors"
            >
              View prototype
            </a>
          </div>
        </div>
        {/* Right — phone screen SVG */}
        <div className="flex justify-center lg:justify-end lg:flex-1 lg:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/t212/variety-score.svg"
            alt="Variety Score phone screen"
            className="w-[188px] sm:w-[210px] shrink-0 max-w-full"
            width={234}
            height={507}
          />
        </div>
      </div>
    </Card>
  );
}

function S16WealthIntro() {
  return (
    <IntroCard
      id="wealth-chart"
      title="Wealth Chart"
      roleLabel="Role of a Wealth Chart — L1"
      roleBody="Shows customers their detailed projected portfolio value over 10 years, a high/low range to set realistic expectations, and past performance for full context."
      needs={[
        "What will my portfolio be worth in 10 years?",
        "How confident can I be in that projection?",
        "What does my past performance tell me about the future?",
        "Where are the gaps between where I am and where I want to be?",
      ]}
    />
  );
}

function S17WealthFeatures() {
  return <SlideImg src={S17} alt="Wealth Chart annotated feature breakdown" />;
}

function S18WealthSolution() {
  return (
    <Card>
      <div
        className="flex flex-col lg:flex-row
                   px-5 sm:px-10 lg:px-[108px]
                   py-6 sm:py-10 lg:py-[60px]
                   gap-8 lg:gap-0
                   min-h-[56vw] lg:min-h-0"
      >
        {/* Left — emblem top, description bottom */}
        <div className="flex flex-col justify-between lg:w-[42%] shrink-0">
          <T212Emblem sm />
          <div className="flex flex-col gap-2 mt-8 lg:mt-0">
            <Label>Solution</Label>
            <Heading>Wealth Chart</Heading>
            <Body>
              Shows customers their projected portfolio value over 10 years, a high/low range to set
              realistic expectations, and past performance for full context. Defaults to the future
              view to keep customer focus on long-term wealth building.
            </Body>
            <a
              href={PROTO}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-2 px-5 py-2 rounded-full
                         font-[family-name:var(--font-montserrat)] font-semibold text-sm text-[#0d151c]
                         bg-white hover:bg-white/90 transition-colors"
            >
              View prototype
            </a>
          </div>
        </div>
        {/* Right — projection video */}
        <div className="flex justify-center lg:justify-end lg:flex-1 lg:items-center">
          <WealthChartVideo />
        </div>
      </div>
    </Card>
  );
}

function S19Summary() {
  const items = [
    {
      title: "Hyper-personalisation",
      body: "HMW tailor the experience to each individual user's behaviour, not just their segment?",
    },
    {
      title: "Explore experience hooks",
      body: "Worth exploring subtle animation on the chart, with haptics and potentially sound layered in on interaction.",
    },
    {
      title: "Expand the feedback loop",
      body: "HMW connect portfolio health back to goal progress, so customers feel the impact of every decision they make?",
    },
  ];
  return (
    <Card id="summary">
      <div
        className="absolute top-0 right-0 w-[50%] aspect-square translate-x-[20%] -translate-y-[20%]
                   rounded-full blur-[120px] opacity-[0.1] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00a7e1, #003b5c)" }}
      />
      <div
        className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16
                   px-5 sm:px-10 lg:px-16
                   py-8 sm:py-12 lg:py-16
                   min-h-[56vw] lg:items-center"
      >
        {/* Left — closing statement */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:w-[40%] lg:shrink-0">
          <Label>In Summary</Label>
          <Heading>What&apos;s next?</Heading>
          <Body muted>
            This is a v1 concept. A great foundation, but the next step is getting a
            lightweight prototype in front of real users to validate my underlying assumptions.
          </Body>
          <a
            href={PROTO}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-2 px-5 py-2 rounded-full
                       font-[family-name:var(--font-montserrat)] font-semibold text-sm
                       bg-white text-[#0d151c] hover:bg-white/90 transition-colors"
          >
            View prototype
          </a>
        </div>
        {/* Vertical divider */}
        <div
          className="hidden lg:block w-px self-stretch"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        />
        {/* Right — future opportunities */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 flex-1">
          {items.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white
                            text-sm sm:text-base lg:text-[17px] leading-[1.4]">
                {title}
              </p>
              <Body muted>{body}</Body>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */

const PAGE_BG = "#162430";

export default function Trading212Page() {
  return (
    <div className="flex flex-col flex-1" style={{ backgroundColor: PAGE_BG }}>
      <NavHeader bg={PAGE_BG} />
      <main className="flex flex-col flex-1">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-[104px] lg:px-[152px] xl:px-16 pb-20">

          {/* Header */}
          <div className="flex flex-col gap-6 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col gap-4">
              <h1 className="font-['Manrope'] font-semibold text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Trading 212
              </h1>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] tracking-[0.18px] leading-[1.48] max-w-2xl">
                A redesign concept of the T212 Home screen shifting from a short-term trading view to a long-term wealth building utility.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["FinTech", "Data Vis", "0 - 1"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#929296] rounded-full px-4 py-1
                             font-['Manrope'] font-light text-[18px] text-[#929296]
                             leading-[1.48] tracking-[0.18px] whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Slides */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <S02Contents />
            <S03Problem />
            <S04Principles />
            <S05Goals />
            <S06Question />
            <S07PortfolioIntro />
            <S08WealthManager />
            <S09Metrics />
            <S10Iterations />
            <S11PortfolioFeatures />
            <S12PortfolioSolution />
            <S13VarietyIntro />
            <S14VarietyFeatures />
            <S15VarietySolution />
            <S16WealthIntro />
            <S17WealthFeatures />
            <S18WealthSolution />
            <S19Summary />
          </div>

        </div>
      </main>
      <CaseStudyFooter />
    </div>
  );
}

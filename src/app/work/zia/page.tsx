import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import VideoLightbox from "@/components/VideoLightbox";

/* ─────────────────────────────────────────────────────────────────────────────
   Design tokens
   ─────────────────────────────────────────────────────────────────────────── */
// Backgrounds
const BG_DARK    = "#0c0a08";
const BG_WARM    = "#ecebe9";
const BG_SMOKE   = "#f3f3f3";
const BG_WHITE   = "#fdfcfc";
// Accents
const ACC_DARK   = "#e97451"; // burnt sienna – used on dark surfaces
const ACC_LIGHT  = "#bf400d"; // sinopia     – used on light surfaces
// Figma assets (expire 7 days from export)
const COVER_IMG  = "/zia-cover.png";
const ZIA_LOGO   = "/zia-logo.svg";
const EMBLEM       = "/zia-emblem.svg";
const EMBLEM_LIGHT = "/zia-emblem-light.svg";
const INTRO_GRID = "/zia-intro-grid.png";
const INTRO_PHONE= "/zia-phone-mockup.png";
const LOGO_SKETCH= "/zia-logo-sketches.png";
const LOGO_GRID  = "/zia-logo-construction.svg";
const ICON_V1    = "/zia-icon-v1.png"; // orange icon
const ICON_V14   = "/zia-icon-v14.png"; // grid icon
const ICON_FINAL = "/zia-icon-final.png"; // dark with lines
const PAL_UNION  = "https://www.figma.com/api/mcp/asset/45edaab4-70cc-4bf2-80c5-75db78a4fe1a";
const PAIN_ICON1 = "/zia-icon-question.svg";
const PAIN_ICON2 = "/zia-icon-frame-1.svg";
const PAIN_ICON3 = "/zia-icon-frame-2.svg";

/* ─────────────────────────────────────────────────────────────────────────────
   Shared primitives
   ─────────────────────────────────────────────────────────────────────────── */

/** 16:9 slide card – fixed ratio on lg, auto-height on mobile */
function Card({
  bg,
  children,
  className = "",
  id,
}: {
  bg: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative w-full overflow-hidden rounded-2xl lg:aspect-[16/9] ${className}`}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

/** Eyebrow label */
function Label({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className="font-[family-name:var(--font-montserrat)] font-semibold
                 text-[9px] sm:text-[10px] lg:text-[10.8px] leading-[1.2] tracking-[0.02em]"
      style={{ color: dark ? ACC_DARK : ACC_LIGHT }}
    >
      {children}
    </p>
  );
}

/** Section heading */
function Heading({
  children,
  dark = false,
  large = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  large?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-montserrat)] font-semibold leading-[1.2] tracking-tight
        ${large
          ? "text-xl sm:text-2xl lg:text-[38.4px] leading-[1.16]"
          : "text-base sm:text-lg lg:text-[19.2px] leading-[1.32]"
        } ${className}`}
      style={{ color: dark ? "#fdfcfc" : "#010e14" }}
    >
      {children}
    </p>
  );
}

/** Body copy */
function Body({
  children,
  dark = false,
  small = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  small?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-montserrat)] font-light leading-[1.5]
        ${small ? "text-[9px] sm:text-[10px] lg:text-[10.8px]" : "text-xs sm:text-sm lg:text-[14.4px]"}
        ${className}`}
      style={{ color: dark ? "#bfbfbd" : "#010e14" }}
    >
      {children}
    </p>
  );
}

/** Zia brand emblem (two wavy orange marks) */
function Emblem({ size = "sm", light = false }: { size?: "sm" | "md"; light?: boolean }) {
  const w = size === "md" ? "w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] lg:w-[134px] lg:h-[67px]"
                           : "w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] lg:w-[100px] lg:h-[50px]";
  return (
    <div className={`relative ${w} shrink-0`}>
      <Image src={light ? EMBLEM_LIGHT : EMBLEM} alt="" fill className="object-contain object-left" unoptimized />
    </div>
  );
}

/** Small tag pill */
function Tag({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full
                 font-[family-name:var(--font-montserrat)] font-semibold
                 text-[9px] sm:text-[10px] lg:text-[10.8px] leading-[1.2] whitespace-nowrap"
      style={{
        background: dark ? "rgba(253,252,252,0.08)" : "rgba(1,14,20,0.05)",
        color:      dark ? "#fdfcfc"                : "#010e14",
      }}
    >
      {children}
    </span>
  );
}

/** Device category card used in S5bSmartDevice */
function DeviceCard({ img, name, items, contain = false }: { img: string; name: string; items: string[]; contain?: boolean }) {
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="relative w-full aspect-[3/2] lg:w-[145px] lg:h-[95px] lg:aspect-auto overflow-hidden">
        <Image src={img} alt={name} fill className={contain ? "object-contain" : "object-cover"} unoptimized />
      </div>
      <div className="flex flex-col gap-1 px-[5px]">
        <p className="font-[family-name:var(--font-montserrat)] font-normal text-[10px] lg:text-[11.2px] text-[#010e14] leading-[1.25]">
          {name}
        </p>
        <ul className="list-disc pl-3">
          {items.map((item) => (
            <li key={item} className="font-[family-name:var(--font-montserrat)] font-light text-[8px] lg:text-[7.5px] text-[#010e14] leading-[1.5]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Sections
   ─────────────────────────────────────────────────────────────────────────── */

/** S1 – Cover */
function S1Cover() {
  return (
    <Card bg={BG_DARK}>
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image src={COVER_IMG} alt="Zia Smart Home" fill className="object-cover" unoptimized />
      </div>
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full
                      px-5 sm:px-10 lg:px-[66px]
                      pt-5 sm:pt-8 lg:pt-[133px]
                      pb-5 sm:pb-8 lg:pb-[60px]
                      min-h-[200px] sm:min-h-[280px]">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="relative h-8 sm:h-10 lg:h-[62px] w-[55px] sm:w-[70px] lg:w-[87px]">
            <Image src={ZIA_LOGO} alt="Zia" fill className="object-contain object-left" unoptimized />
          </div>
          <p className="font-[family-name:var(--font-montserrat)] font-normal
                        text-xs sm:text-base lg:text-[19.2px] leading-[1.32]
                        text-[#fdfcfc]">
            Your home, made smart
          </p>
        </div>
        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-6 sm:mt-8 lg:mt-0">
          {["E2E Design", "Branding", "D2C Mobile App"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 sm:px-4 lg:px-[16px] py-1.5 sm:py-2 lg:py-[10px]
                         rounded-full bg-white/10 text-white/80
                         font-[family-name:var(--font-manrope)] font-medium
                         text-[9px] sm:text-xs lg:text-[18px] tracking-[0.18px] whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** S2 – Background + Brief (text-only rows) */
function S2Background() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-1">
      {/* Background */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="font-[family-name:var(--font-manrope)] font-semibold
                      text-xl sm:text-2xl lg:text-[32px] text-white leading-[1.4]">
          Background
        </p>
        <p className="font-[family-name:var(--font-manrope)] font-light
                      text-sm sm:text-base lg:text-[18px] text-[#929296]
                      tracking-[0.18px] leading-[1.48] max-w-3xl">
          This conceptual project is the result of a rapid one-week design sprint, where I developed an
          end-to-end, high-fidelity solution based on a self-selected brief, outside of my typical
          working week — it was a lot!
        </p>
      </div>
      {/* The Brief */}
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="font-[family-name:var(--font-manrope)] font-semibold
                      text-xl sm:text-2xl lg:text-[32px] text-white leading-[1.4]">
          The brief
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <p className="font-[family-name:var(--font-manrope)] font-light
                        text-sm sm:text-base lg:text-[18px] text-[#929296]
                        tracking-[0.18px] leading-[1.48]">
            You are designing a mobile app for a high-end smart home control system. This platform
            allows users to manage and automate their luxury smart home devices, such as lighting,
            climate control, security, and entertainment systems.
          </p>
          <div className="font-[family-name:var(--font-manrope)] font-light
                          text-sm sm:text-base lg:text-[18px] text-[#929296]
                          tracking-[0.18px] leading-[1.48]">
            <p className="mb-2">Design in High-Fidelity the following flows to allow the user to:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Control and customise their smart home devices with a sleek and luxurious interface.</li>
              <li>Create and manage automated scenes (e.g., morning routine, evening relaxation)</li>
              <li>Monitor home security with a premium and elegant design</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/** S3 – Intro Screen */
function S3Intro() {
  return (
    <Card bg={BG_WHITE}>
      {/* Top half – full-bleed grid + phone flush right */}
      <div className="relative overflow-hidden h-[200px] sm:h-[280px] lg:h-[50%] bg-[#e5e3e1]">
        {/* Grid background – no rotation, full cover */}
        <Image src={INTRO_GRID} alt="" fill className="object-cover" unoptimized />
        {/* Phone in hand – right-aligned, full height, no rotation */}
        <div className="absolute right-0 inset-y-0 w-[48%] sm:w-[40%] lg:w-[33%]">
          <Image
            src={INTRO_PHONE}
            alt="Zia app on phone"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>
      </div>
      {/* Bottom half – 3 column intro text */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6
                      px-5 sm:px-8 lg:px-[72px] py-5 sm:py-6 lg:py-[43px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          <Label>Introducing</Label>
          <Heading large>Zia</Heading>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <Label>Vision</Label>
          <Body>
            Zia creates and implements premium smart home systems that offer effortless management of
            lighting, climate, security, and entertainment. Our solutions elevate your living
            experience, turning your home into a sophisticated and intuitive environment.
          </Body>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <Label>What is high-end?</Label>
          <Body>
            Classed as luxury, high-end products stand out due to their superior quality, design, and
            performance. They feature premium materials, meticulous attention to detail, advanced
            functionalities, and a seamless user experience that is beyond other mass-market options.
          </Body>
        </div>
      </div>
      {/* Copyright – matches Figma bottom-left */}
      <p className="hidden lg:block absolute bottom-4 left-[72px]
                    font-[family-name:var(--font-montserrat)] font-light
                    text-[10.8px] text-[#a4a2a2] leading-[1.5] whitespace-nowrap">
        © James Skinner 2025
      </p>
    </Card>
  );
}

/** S4 – Contents / TOC */
function S4Contents() {
  const items = [
    { title: "Discovering the problem",    sub: "What are we trying to solve?",                        href: "#discovering-the-problem" },
    { title: "Establishing a brand",       sub: "How should the product look & feel?",                 href: "#establishing-a-brand" },
    { title: "Dashboard",                  sub: "Task 1: Control & customise your smart home devices", href: "#ia-section" },
    { title: "Scenes",                     sub: "Task 2: Create and manage automated scenes",          href: "#scenes" },
    { title: "Security",                   sub: "Task 3: Monitor Home Security",                       href: "#security" },
    { title: "Personal assistant",         sub: "Bonus Task: AI Voice Control",                        href: "#personal-assistant" },
    { title: "If I were to go further...", sub: "",                                                     href: "#further" },
  ];
  return (
    <Card bg={BG_DARK} className="min-h-[280px] sm:min-h-[360px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 h-full
                      px-5 sm:px-8 lg:px-[72px] py-6 sm:py-8 lg:py-[87px]">
        {/* Left: title + button */}
        <div className="flex flex-col justify-between gap-6 lg:gap-0 lg:w-[40%] shrink-0">
          <p className="font-[family-name:var(--font-montserrat)] font-semibold
                        text-xl sm:text-2xl lg:text-[31px] text-[#f4f8f7] tracking-tight">
            Contents
          </p>
          <a
            href="https://www.figma.com/proto/VNl5iyjfUEujOYsh3AEAH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center
                       px-6 py-2 rounded-full bg-[#f3f3f6]
                       font-['Manrope'] font-medium text-sm lg:text-[18px]
                       text-[#011b1b] leading-[1.4] whitespace-nowrap
                       hover:bg-white transition-colors w-fit"
          >
            Final proposal
          </a>
        </div>
        {/* Right: TOC items */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[28px] lg:w-[60%]">
          {items.map((item) => (
            <a key={item.title} href={item.href}
               className="flex flex-col gap-1 group">
              <p className="font-[family-name:var(--font-montserrat)] font-normal
                            text-sm sm:text-base lg:text-[19.2px] text-[#fdfcfc] leading-[1.32]
                            group-hover:underline transition-opacity">
                {item.title}
              </p>
              {item.sub && (
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[10px] sm:text-xs lg:text-[10.8px] text-[#bfbfbd] leading-[1.5]">
                  {item.sub}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** S5 – Market Opportunity */
function S5Market() {
  return (
    <Card bg={BG_DARK} id="discovering-the-problem" className="min-h-[220px] sm:min-h-[280px]">
      {/* Flex column: emblem at top, text at bottom — matches Figma 171:19463 */}
      <div className="flex flex-col justify-between h-full
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[62px]
                      pb-8 sm:pb-10 lg:pb-[62px]">
        {/* Emblem – right-aligned */}
        <div className="flex justify-end">
          <Emblem size="md" light />
        </div>
        {/* Text block – pushed to bottom by justify-between */}
        <div className="flex flex-col gap-2 sm:gap-3 mt-10 sm:mt-16 lg:mt-0 lg:pr-[160px]">
          <p className="font-[family-name:var(--font-montserrat)] font-medium
                        text-xs sm:text-sm lg:text-[19.2px] leading-[1.5] tracking-tight"
             style={{ color: ACC_DARK }}>
            Market opportunity
          </p>
          <p className="font-[family-name:var(--font-montserrat)] font-semibold
                        text-xl sm:text-2xl lg:text-[38.4px] text-[#fdfcfc]
                        leading-[1.16] tracking-tight">
            By 2027, 50.2% of UK households will be smart homes.
          </p>
          <p className="font-[family-name:var(--font-montserrat)] font-normal
                        text-xs sm:text-sm lg:text-[19.2px] text-[#bfbfbd] leading-[1.48]">
            Driven by an increase in consumer awareness and a willingness to pay for the convenience and
            energy savings offered by smart technology.
          </p>
          <p className="font-[family-name:var(--font-montserrat)] font-light
                        text-[9px] sm:text-[10px] lg:text-[10.8px] text-[#fdfcfc] leading-[1.5] mt-1">
            Statista. Smart Home market insights report, 2024
          </p>
        </div>
      </div>
      {/* Copyright – bottom-left */}
      <p className="hidden lg:block absolute bottom-4 left-[72px]
                    font-[family-name:var(--font-montserrat)] font-light
                    text-[10.8px] text-[#5b5959] leading-[1.5] whitespace-nowrap">
        © James Skinner 2025
      </p>
    </Card>
  );
}

/** S5b – What is a smart device? */
function S5bSmartDevice() {
  const SMART_IMG1 = "/zia-climate.png";
  const SMART_IMG2 = "/zia-audio.png";
  const SMART_IMG3 = "/zia-household.png";
  const SMART_IMG4 = "/zia-security.png";
  const SMART_IMG5 = "/zia-visual.png";

  return (
    <Card bg={BG_WARM} className="min-h-[320px]">
      <div className="flex flex-col lg:flex-row items-start justify-between
                      px-5 sm:px-8 lg:px-[72px] py-5 sm:py-8 lg:py-[60px] h-full">
        {/* Left: text + copyright */}
        <div className="flex flex-col justify-between gap-4 lg:h-full lg:w-[263px] shrink-0 mb-6 lg:mb-0">
          <div className="flex flex-col gap-[7px]">
            <Label>Desk research</Label>
            <Heading>What is considered a smart device?</Heading>
            <Body>
              Any internet-connected device that allows a user to remotely monitor or manage household
              functions controlled through a user interface or voice commands.
            </Body>
          </div>
          <p className="hidden lg:block font-[family-name:var(--font-montserrat)] font-light
                        text-[10.8px] text-[#a4a2a2] leading-[1.5] whitespace-nowrap">
            © James Skinner 2025
          </p>
        </div>

        {/* Right: 3-column device grid with vertical dividers */}
        <div className="flex w-full lg:w-auto lg:h-[504px]
                        border-x border-[#bfbfbd] divide-x divide-[#bfbfbd]">
          {/* Col 1: Audio (top) ↕ Climate Control (bottom) */}
          <div className="flex flex-col justify-between
                          px-3 sm:px-4 lg:px-[22px] py-4 lg:py-[33.6px]
                          flex-1 lg:flex-none lg:w-[187px]">
            <DeviceCard img={SMART_IMG2} name="Audio"           items={["Speakers", "Alarms"]} contain />
            <DeviceCard img={SMART_IMG1} name="Climate Control" items={["Smart Thermostats", "Smart Lighting"]} />
          </div>
          {/* Col 2: Security & Access (top) ↕ Household Appliances (bottom) */}
          <div className="flex flex-col justify-between
                          px-3 sm:px-4 lg:px-[22px] py-4 lg:py-[22.4px]
                          flex-1 lg:flex-none lg:w-[168px]">
            <DeviceCard img={SMART_IMG4} name="Security & Access"     items={["Cameras", "Locks"]} />
            <DeviceCard img={SMART_IMG3} name="Household appliances"  items={["Robo Vacuums", "Smart Kitchen Appliances", "Ovens", "Coffee Machines"]} />
          </div>
          {/* Col 3: Visual only (top) */}
          <div className="flex flex-col justify-start
                          px-3 sm:px-4 lg:px-[22px] py-4 lg:py-[33.6px]
                          flex-1 lg:flex-none lg:w-[146px]">
            <DeviceCard img={SMART_IMG5} name="Visual" items={["TVs", "Streaming devices"]} />
          </div>
        </div>
      </div>
    </Card>
  );
}

/** S6 – Pain Points */
function S6PainPoints() {
  const cards = [
    {
      icon: PAIN_ICON1,
      title: "Over complicating daily tasks",
      body:  "Smart devices have got rid of intuitive physical controls now hidden behind an interface. For instance, unlocking a smartphone and navigating to a specific device can make something as simple as turning on a light feel cumbersome.",
    },
    {
      icon: PAIN_ICON2,
      title: "Disparate systems",
      body:  "On average a UK home has 9–10 smart devices, often from a collection of brands. These systems are not homogenous — they often require multiple apps and separate controls creating an issue that previously did not exist.",
    },
    {
      icon: PAIN_ICON3,
      title: "Voice Command Limitations",
      body:  "Voice assistants are a key feature of smart homes, but they can be frustrating. Commands often need precise wording, and the system may not grasp natural language or context — say 'turn on the light' and it might fail if the device is named 'living room lamp.'",
    },
  ];
  return (
    <Card bg={BG_WARM} className="min-h-[300px]">
      <div className="flex flex-col gap-5 sm:gap-6
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-6 sm:pb-8 lg:pb-[72px]">
        {/* Eyebrow + heading */}
        <div className="flex flex-col gap-1.5 sm:gap-2 max-w-md">
          <Label>Desk research</Label>
          <Heading large>Pain points</Heading>
          <Body>
            By analyzing user feedback with an LLM, I identified three major pain points with smart
            home devices:
          </Body>
        </div>
        {/* 3-col cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-2 sm:gap-3
                         bg-[#f3f3f3] border border-[#ebe6e0] rounded-xl sm:rounded-2xl
                         p-5 sm:p-6 lg:p-[28px]"
            >
              {/* Blue icon badge */}
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-[34px] lg:h-[34px]
                              rounded-xl bg-[#12569e] shrink-0">
                <div className="relative w-4 h-4 lg:w-[14px] lg:h-[14px]">
                  <Image src={c.icon} alt="" fill className="object-contain" unoptimized />
                </div>
              </div>
              <p className="font-[family-name:var(--font-montserrat)] font-normal
                            text-sm sm:text-base lg:text-[16.8px] text-[#010e14] leading-[1.2]">
                {c.title}
              </p>
              <Body small>{c.body}</Body>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** S7 – The Problem */
function S7Problem() {
  return (
    <Card bg={BG_WARM} className="min-h-[260px]">
      {/* Emblem top-right */}
      <div className="absolute top-5 sm:top-8 lg:top-[72px] right-5 sm:right-8 lg:right-[72px]">
        <Emblem />
      </div>
      <div className="flex flex-col gap-4 sm:gap-5
                      px-5 sm:px-8 lg:px-[72px]
                      pt-14 sm:pt-20 lg:pt-[243px]
                      pb-6 sm:pb-8 lg:pb-[80px]
                      max-w-[90%] sm:max-w-[80%] lg:max-w-[850px]">
        <p className="font-[family-name:var(--font-montserrat)] font-medium
                      text-xs sm:text-sm lg:text-[19.2px] leading-[1.5] tracking-tight"
           style={{ color: ACC_LIGHT }}>
          The key problem
        </p>
        <Heading large>A fragmented &ldquo;smart&rdquo; system</Heading>
        <div className="font-[family-name:var(--font-montserrat)] font-normal
                        text-xs sm:text-sm lg:text-[14.4px] text-[#5b5959] leading-[1.48] space-y-3">
          <p>
            Smart homes are increasingly controlled by multiple interfaces undermining the very value
            proposition of a smart home: simplicity and convenience. Instead of making life easier,
            they add cognitive load and friction to daily tasks.
          </p>
          <p>
            Users are forced to switch between different apps, voice assistants, and physical panels
            to manage their devices. This lack of a cohesive, accessible interface for a household is
            a significant barrier to the widespread adoption and seamless use of smart home technology.
          </p>
        </div>
        {/* HMW box */}
        <div className="flex gap-4 sm:gap-6 items-start
                        bg-[#f3f3f3] border border-white/20 rounded-xl
                        px-5 sm:px-6 lg:px-[28px] py-4 sm:py-5 mt-1">
          <span className="font-[family-name:var(--font-montserrat)] font-normal
                           text-xs sm:text-sm lg:text-[14.4px] text-[#010e14] shrink-0 pt-0.5">
            HMW
          </span>
          <ul className="list-disc font-[family-name:var(--font-montserrat)] font-light
                         text-[10px] sm:text-xs lg:text-[10.8px] text-[#010e14] leading-[1.5]
                         space-y-1 ml-4">
            <li>Consolidate devices into one single interface?</li>
            <li>Provide convenience to all users?</li>
            <li>Cater for inaccuracies in the Zia voice-assistant?</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

/** S8 – Brand Identity: Behind the name */
function S8BrandIdentity() {
  return (
    <Card bg={BG_WARM} id="establishing-a-brand" className="min-h-[280px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left: text */}
        <div className="flex flex-col justify-between gap-6
                        px-5 sm:px-8 lg:px-[72px]
                        pt-5 sm:pt-8 lg:pt-[72px]
                        pb-6 sm:pb-8 lg:pb-[72px]">
          <Emblem size="md" />
          <div className="flex flex-col gap-2 sm:gap-3">
            <Label>Brand Identity</Label>
            <Heading>Behind the name: Zia</Heading>
            <div className="font-[family-name:var(--font-montserrat)] font-light
                            text-xs sm:text-sm lg:text-[14.4px] text-[#010e14] leading-[1.5] space-y-3">
              <p>
                I was after a single word that tied nicely to the app&apos;s function but also
                inferred quality &amp; energy.
              </p>
              <p>
                <span className="underline">Zia</span> (ضياء) is the Arabic word for shine, light
                or splendor.
              </p>
            </div>
          </div>
          <a
            href="https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=7-4779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                       bg-black/5 hover:bg-black/10 transition-colors
                       font-[family-name:var(--font-montserrat)] font-semibold
                       text-[10px] sm:text-xs lg:text-[13px] text-[#010e14] w-fit"
          >
            → View iterations
          </a>
        </div>
        {/* Right: phone mockup */}
        <div className="flex items-center justify-center bg-[#e0dedd]
                        px-8 sm:px-12 py-6 sm:py-8 lg:py-[84px] min-h-[200px] lg:min-h-0">
          <div className="relative w-[140px] sm:w-[180px] lg:w-[221px]
                          rounded-[22px] sm:rounded-[27px]
                          overflow-hidden border-[3px] sm:border-[4px] border-[#0c0a08] bg-[#0c0a08]">
            <video
              src="/zia-splash.mp4"
              autoPlay
              loop
              playsInline
              controls
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

/** S9 – Logo Mark */
function S9LogoMark() {
  return (
    <Card bg={BG_SMOKE} className="min-h-[280px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-6 sm:pb-8 lg:pb-[72px]">
        {/* Left: text + sketch */}
        <div className="flex flex-col gap-4 sm:gap-5 justify-between">
          <div className="flex flex-col gap-2">
            <Label>Brand Identity</Label>
            <Heading>Logo mark</Heading>
            <Body>
              After lots of sketching, I applied the golden ratio to scale the wavy zig-zag pattern.
            </Body>
          </div>
          <div className="relative w-full aspect-[412/280] rounded-xl overflow-hidden">
            <Image src={LOGO_SKETCH} alt="Logo mark sketches" fill className="object-contain object-left" unoptimized />
          </div>
          <a
            href="https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=361-32625"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                       bg-black/5 hover:bg-black/10 transition-colors
                       font-[family-name:var(--font-montserrat)] font-semibold
                       text-[10px] sm:text-xs lg:text-[13px] text-[#010e14] w-fit"
          >
            → View iterations
          </a>
        </div>
        {/* Right: logo grid */}
        <div className="lg:flex lg:items-center">
          <div className="relative w-full aspect-[482/352] rounded-xl overflow-hidden">
            <Image src={LOGO_GRID} alt="Logo construction grid" fill className="object-contain" unoptimized />
          </div>
        </div>
      </div>
    </Card>
  );
}

/** S10 – App Icon */
function S10AppIcon() {
  const versions = [
    { src: ICON_V1,    label: "Version 1",       sub: "Block accent colour + emblem",  bg: "#ca4510" },
    { src: ICON_V14,   label: "Version 14",      sub: "Applying grid pattern",          bg: "#1c1c1e" },
    { src: ICON_FINAL, label: "Version 23 (final)", sub: "Setting the grid pattern back", bg: "#0f0f0f" },
  ];
  return (
    <Card bg={BG_SMOKE} className="min-h-[280px]">
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-6 sm:pb-8 lg:pb-[72px]">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2 max-w-lg">
            <Label>Brand Identity</Label>
            <Heading>App icon</Heading>
            <Body>
              I used the &ldquo;z&rdquo; pattern to create an emblem and refined the app icon with
              feedback from Gemini and Built for Mars AI.
            </Body>
          </div>
          <a
            href="https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=7-9700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                       bg-black/5 hover:bg-black/10 transition-colors
                       font-[family-name:var(--font-montserrat)] font-semibold
                       text-[10px] sm:text-xs lg:text-[13px] text-[#010e14] w-fit shrink-0"
          >
            → View iterations
          </a>
        </div>
        {/* Icon versions */}
        <div className="flex items-start justify-center w-full flex-wrap sm:flex-nowrap gap-4 lg:gap-[120px] sm:pt-[100px]">
          {versions.map((v, i) => (
            <div key={v.label} className="flex flex-col items-center gap-2 sm:gap-3">
              <div
                className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[144px] lg:h-[144px]
                           rounded-[22px] sm:rounded-[27px] overflow-hidden"
                style={{ background: v.bg }}
              >
                <Image src={v.src} alt={v.label} fill className="object-cover" unoptimized />
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-montserrat)] font-semibold
                              text-[9px] sm:text-[10px] lg:text-[9.6px] text-[#010e14] leading-[1.2]">
                  {v.label}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[9px] sm:text-[10px] lg:text-[10.8px] text-[#010e14] leading-[1.5]
                              max-w-[110px] text-center">
                  {v.sub}
                </p>
              </div>
              {/* Arrow between icons */}
              {i < versions.length - 1 && (
                <span className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** Shared label style for inside colour blocks */
function SwatchLabel({ name, hex, dark = false }: { name: string; hex: string; dark?: boolean }) {
  const col = dark ? "text-[#010e14]" : "text-[#fdfcfc]";
  return (
    <div>
      <p className={`font-[family-name:var(--font-montserrat)] font-normal text-[11px] sm:text-[12px] leading-[1.2] ${col}`}>{name}</p>
      <p className={`font-[family-name:var(--font-montserrat)] font-light text-[9px] leading-[1.5] ${col}`}>{hex}</p>
    </div>
  );
}

/** S11 – Colour Palette — two mosaic cards: Light + Dark */
function S11Colours() {
  return (
    <Card bg="#00070a" className="lg:aspect-auto">
        <div className="flex flex-col gap-6
                        px-5 sm:px-8 lg:px-[72px]
                        pt-5 sm:pt-8 lg:pt-[72px]
                        pb-6 sm:pb-8 lg:pb-[72px]">

          {/* Left text */}
          <div className="flex flex-col gap-6 shrink-0">
            <div className="flex flex-col gap-2">
              <Label dark>Brand Identity</Label>
              <Heading dark>Colour</Heading>
              <p className="font-[family-name:var(--font-montserrat)] font-light
                            text-xs sm:text-sm lg:text-[14.4px] text-[#fdfcfc] leading-[1.5]">
                Light &amp; Dark Mode Palettes
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-normal
                              text-sm lg:text-[16.8px] text-[#bfbfbd] leading-[1.2]">Adaptive modes</p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[10px] lg:text-[9.6px] text-[#bfbfbd] leading-[1.5]">
                  As the interface will be used at different times of the day &amp; scenes, the UI must
                  respond to its context.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-normal
                              text-sm lg:text-[16.8px] text-[#bfbfbd] leading-[1.2]">Neutral tones</p>
                <ul className="list-disc list-inside font-[family-name:var(--font-montserrat)] font-light
                               text-[10px] lg:text-[9.6px] text-[#bfbfbd] leading-[1.5] space-y-0.5 ml-1">
                  <li>Minimises Cognitive Load</li>
                  <li>Highlights Important Data</li>
                  <li>Increases Accessibility</li>
                  <li>Creates a Timeless &amp; Versatile Look</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-normal
                              text-sm lg:text-[16.8px] text-[#bfbfbd] leading-[1.2]">Lapis Lazuli</p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[10px] lg:text-[9.6px] text-[#bfbfbd] leading-[1.5]">
                  A rich, deep blue — perfect for cards, navigation, and dark mode.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-normal
                              text-sm lg:text-[16.8px] text-[#bfbfbd] leading-[1.2]">Burnt Sienna</p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[10px] lg:text-[9.6px] text-[#bfbfbd] leading-[1.5]">
                  Burnt Sienna evokes warmth and authenticity while infusing brands with earthy vitality.
                </p>
              </div>
            </div>
          </div>

          {/* Right: both mosaics stacked */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* ── Light Mode ── */}
            <p className="font-[family-name:var(--font-montserrat)] font-normal text-xs sm:text-sm text-[#bfbfbd] leading-[1.2]">Light Mode</p>

            {/* Mosaic — aspect matches Figma 737×454 */}
            <div className="relative w-full overflow-hidden rounded-[7px]" style={{ aspectRatio: "737/454" }}>
              <div className="absolute inset-0 flex">

                {/* ── Col A: White Smoke (61.8%) ── */}
                <div className="relative flex flex-col justify-end p-[3.5%]"
                     style={{ width: "61.8%", background: "#F3F3F3" }}>
                  {/* Logo */}
                  <div className="absolute" style={{ left: "7.4%", top: "7.4%", width: "26.5%", aspectRatio: "121/45" }}>
                    <Image src="/zia-pal-union-light.png" alt="Zia" fill className="object-contain object-left" unoptimized />
                  </div>
                  <SwatchLabel name="White Smoke" hex="#F3F3F3" dark />
                </div>

                {/* ── Col B: right 38.2% ── */}
                <div className="flex flex-col" style={{ width: "38.2%" }}>

                  {/* B-top: Platinum (61.6% of height) */}
                  <div className="relative flex flex-col justify-end p-[4%]"
                       style={{ flex: "1.604", background: "#E5E3E1" }}>
                    <SwatchLabel name="Platinum" hex="#E5E3E1" dark />
                  </div>

                  {/* B-bottom: remaining 38.4% */}
                  <div className="flex" style={{ flex: 1 }}>

                    {/* B-bottom-left: 38% of col B */}
                    <div className="flex flex-col" style={{ width: "38%" }}>
                      {/* White (61.1% of B-bottom height) */}
                      <div className="relative flex flex-col justify-end p-[5%]"
                           style={{ flex: "1.571", background: "#FDFCFC" }}>
                        <SwatchLabel name="White" hex="#FDFCFC" dark />
                      </div>
                      {/* Sinopia + Polynesian Blue accent strip */}
                      <div className="flex" style={{ flex: 1 }}>
                        <div style={{ flex: "1.73", background: "#CA4510" }} />
                        <div style={{ flex: 1, background: "#044389" }} />
                      </div>
                    </div>

                    {/* B-bottom-right: Smokey Black (62% of col B) */}
                    <div className="relative flex flex-col justify-end p-[4%]"
                         style={{ flex: "1.64", background: "#0C0A08" }}>
                      <SwatchLabel name="Smokey Black" hex="#18130D" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Light Mode accent labels */}
            <div className="flex justify-end gap-6 sm:gap-8">
              <SwatchLabel name="Sinopia" hex="#CA4510" />
              <SwatchLabel name="Polynesian Blue" hex="#044389" />
            </div>

            {/* ── Dark Mode ── */}
            <p className="font-[family-name:var(--font-montserrat)] font-normal text-xs sm:text-sm text-[#bfbfbd] leading-[1.2]">Dark Mode</p>
            <div className="relative w-full overflow-hidden rounded-[7px]" style={{ aspectRatio: "737/454" }}>
              <div className="absolute inset-0 flex">

                {/* ── Col A: Rich Black (61.8%) ── */}
                <div className="relative flex flex-col justify-end p-[3.5%]"
                     style={{ width: "61.8%", background: "#010E14" }}>
                  <div className="absolute" style={{ left: "7.4%", top: "7.4%", width: "26.5%", aspectRatio: "121/45" }}>
                    <Image src="/zia-pal-union-dark.png" alt="Zia" fill className="object-contain object-left" unoptimized />
                  </div>
                  <SwatchLabel name="Rich Black" hex="#010E14" />
                </div>

                {/* ── Col B: right 38.2% ── */}
                <div className="flex flex-col" style={{ width: "38.2%" }}>

                  {/* B-top: Eerie Black (61.6%) */}
                  <div className="relative flex flex-col justify-end p-[4%]"
                       style={{ flex: "1.604", background: "#1C1C1E" }}>
                    <SwatchLabel name="Eerie Black" hex="#1C1C1E" />
                  </div>

                  {/* B-bottom */}
                  <div className="flex" style={{ flex: 1 }}>

                    {/* B-bottom-left */}
                    <div className="flex flex-col" style={{ width: "38%" }}>
                      {/* Davy's Gray */}
                      <div className="relative flex flex-col justify-end p-[5%]"
                           style={{ flex: "1.571", background: "#5B5959" }}>
                        <SwatchLabel name="Davy's Gray" hex="#5B5959" />
                      </div>
                      {/* Burnt Sienna + Lapis Lazuli accent strip */}
                      <div className="flex" style={{ flex: 1 }}>
                        <div style={{ flex: "1.73", background: "#E97451" }} />
                        <div style={{ flex: 1, background: "#12569E" }} />
                      </div>
                    </div>

                    {/* B-bottom-right: Jet */}
                    <div className="relative flex flex-col justify-end p-[4%]"
                         style={{ flex: "1.64", background: "#2C2C2E" }}>
                      <SwatchLabel name="Jet" hex="#2C2C2E" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dark Mode accent labels */}
            <div className="flex justify-end gap-6 sm:gap-8">
              <SwatchLabel name="Burnt Sienna" hex="#E97451" />
              <SwatchLabel name="Lapis Lazuli" hex="#12569E" />
            </div>
          </div>
        </div>
      </Card>
  );
}

/** Reusable Task outcome card */
function TaskCard({
  num,
  title,
  body,
  tags,
  phone,
  phoneAlt,
  video,
  id,
}: {
  num: string;
  title: string;
  body: string;
  tags: string[];
  phone: string;
  phoneAlt: string;
  video?: string;
  id?: string;
}) {
  return (
    <Card bg={BG_WARM} className="min-h-[280px]" id={id}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left: text */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-between
                        px-5 sm:px-8 lg:px-[72px]
                        pt-5 sm:pt-8 lg:pt-[72px]
                        pb-5 sm:pb-6 lg:pb-[60px]">
          <Emblem size="md" />
          <div className="flex flex-col gap-2 sm:gap-3">
            <Label>{num}</Label>
            <Heading large>{title}</Heading>
            <Body>{body}</Body>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>
          <div /> {/* spacer */}
        </div>
        {/* Right: phone */}
        <div className="flex items-center justify-center bg-[#e0dedd]
                        px-8 sm:px-12 py-6 sm:py-8 lg:py-[84px] min-h-[200px] lg:min-h-0">
          <div className="relative w-[140px] sm:w-[180px] lg:w-[221px]
                          aspect-[221/480] rounded-[22px] sm:rounded-[27px]
                          overflow-hidden border-[3px] sm:border-[4px] border-[#010e14] bg-[#010e14]">
            {video ? (
              <VideoLightbox src={video} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <Image src={phone} alt={phoneAlt} fill className="object-cover" unoptimized />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

/** S12-S15 – Task Outcomes */
function S12Tasks() {
  /* All tasks use the zia-thumbnail (phone-in-hand mockup) as the visual.
     In a production build these would be individual prototype screenshots or videos. */
  const phone = "/zia-thumbnail.png";
  const tasks = [
    {
      id: "dashboard",
      num: "Task 1",
      title: "Control & customise your smart devices",
      body: "With Zia you can control all your smart devices in one centralised app. View your system by room or even automate your morning routine.",
      tags: ["Simple", "Centralised system"],
      video: "/zia-task1.mp4",
    },
    {
      num: "Task 2",
      title: "Create & manage automated scenes",
      body: "Easily set the vibe in your home with your favourite ambience — create a morning routine, wind-down mode, or a custom scene from scratch.",
      tags: ["Tailored for you", "Customise your experience"],
      video: "/zia-task2.mp4",
    },
    {
      id: "security",
      num: "Task 3",
      title: "Monitor home security",
      body: "No matter if you're out and about or just chilling at home, you can keep your peace of mind with live camera feeds and smart door controls.",
      tags: ["Peace of mind"],
      video: "/zia-task3.mp4",
    },
    {
      id: "personal-assistant",
      num: "Bonus Task",
      title: "Zia — your personal assistant",
      body: "Can't find the control you're after? Simply ask Zia and she'll find what you're looking for. AI-driven voice control that understands natural language.",
      tags: ["AI-driven", "Voice-over control"],
      video: "/zia-bonus.mp4",
    },
  ];
  return (
    <>
      {tasks.map((t) => (
        <TaskCard key={t.num} {...t} phone={phone} phoneAlt={`${t.num} screen`} />
      ))}
    </>
  );
}

/** S16 – Further */
/** S11b – Type & Icon Pairing */
function S11bTypeIconPairing() {
  const icons: { path: string; alt: string; label: string; body: string }[] = [
    {
      path: "M13.1132 9.42516V14.5209M13.1132 0.883269C10.0363 3.80517 5.93865 5.40775 1.69588 5.34853C1.15604 6.99318 0.881734 8.71334 0.883276 10.4443C0.883276 18.0432 6.07962 24.4271 13.1132 26.2372C20.1467 24.4271 25.343 18.0432 25.343 10.4443C25.343 8.66419 25.0577 6.95201 24.5304 5.34853H24.3239C19.9809 5.34853 16.0347 3.64994 13.1132 0.883269ZM13.1132 18.5976H13.124V18.6084H13.1132V18.5976Z",
      alt: "Shield alert icon",
      label: "LabelLG",
      body: "Lorem ipsum dolor sit amet consectetur. Felis condimentum bibendum tempor erat et bibendum.",
    },
    {
      path: "M13.1132 0.883269C10.0363 3.80517 5.93865 5.40775 1.69588 5.34853C1.15604 6.99318 0.881734 8.71334 0.883276 10.4443C0.883276 18.0432 6.07962 24.4271 13.1132 26.2372C20.1467 24.4271 25.343 18.0432 25.343 10.4443C25.343 8.66419 25.0577 6.95201 24.5304 5.34853H24.3239C19.9809 5.34853 16.0347 3.64994 13.1132 0.883269Z",
      alt: "Shield icon",
      label: "LabelLG",
      body: "Lorem ipsum dolor sit amet consectetur. Felis condimentum bibendum tempor erat et bibendum.",
    },
    {
      path: "M9.03653 14.5209L12.094 17.5784L17.1898 10.4443M13.1132 0.883269C10.0363 3.80517 5.93865 5.40775 1.69588 5.34853C1.15618 6.99275 0.881878 8.71244 0.883274 10.443C0.883274 18.0418 6.07961 24.4258 13.1132 26.2372C20.1467 24.4271 25.343 18.0432 25.343 10.4443C25.343 8.66419 25.0577 6.95065 24.5304 5.34718H24.3239C19.9809 5.34718 16.0347 3.6513 13.1132 0.883269Z",
      alt: "Shield check icon",
      label: "LabelLG",
      body: "Lorem ipsum dolor sit amet consectetur. Felis condimentum bibendum tempor erat et bibendum.",
    },
  ];
  return (
    <Card bg={BG_SMOKE}>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-6 sm:pb-8 lg:pb-[72px]">

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Label>Brand Identity</Label>
            <Heading>Type &amp; icon pairing</Heading>
          </div>
          <a
            href="https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=352-32185"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                       bg-black/5 hover:bg-black/10 transition-colors shrink-0
                       font-[family-name:var(--font-montserrat)] font-semibold
                       text-[10px] sm:text-xs lg:text-[13px] text-[#010e14] whitespace-nowrap"
          >
            → View more
          </a>
        </div>

        {/* Typography showcase */}
        <div className="flex flex-col gap-1.5">
          <p className="font-[family-name:var(--font-montserrat)] font-semibold
                        text-[36px] sm:text-[40px] lg:text-[43px]
                        text-[#010e14] leading-[1.16] tracking-[-0.02em]">
            Display Lg
          </p>
          <p className="font-[family-name:var(--font-montserrat)] font-normal
                        text-[20px] sm:text-[22px] lg:text-[22px]
                        text-[#010e14] leading-[1.32]">
            Heading Lg
          </p>
        </div>

        {/* Icon + type columns */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10">
          {icons.map((icon) => (
            <div key={icon.alt} className="flex flex-col gap-3 flex-1">
              <svg
                viewBox="0 0 26.2263 27.1204"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0"
                aria-label={icon.alt}
              >
                <path
                  d={icon.path}
                  stroke="#0C0A08"
                  strokeWidth="1.76654"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col gap-1.5">
                <p className="font-[family-name:var(--font-montserrat)] font-semibold
                              text-[12px] text-[#010e14] leading-[1.2]">
                  {icon.label}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[12px] text-[#010e14] leading-[1.5]">
                  {icon.body}
                </p>
              </div>
            </div>
          ))}

          {/* Annotations (desktop only) */}
          <div className="hidden lg:flex flex-col justify-center gap-5 w-[180px] shrink-0 text-[#5b5959]">
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[8.4px] leading-[1.45]">
                Lightweight icon set
              </p>
              <p className="font-[family-name:var(--font-montserrat)] font-light text-[9.6px] leading-[1.5]">
                1.3 weight @ 24px
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-montserrat)] font-semibold text-[8.4px] leading-[1.45]">
                Montserrat font
              </p>
              <p className="font-[family-name:var(--font-montserrat)] font-light text-[9.6px] leading-[1.5]">
                A minimal san serif font that scales nicely at different font weights
              </p>
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
}

/** S13 – IA: Creating a logical navigation pattern */
function S13IA() {
  const considerations = [
    {
      n: "1.",
      title: "Control system globally",
      body: "Sync rooms & devices to the same mode. “Turn off everything”",
    },
    {
      n: "2.",
      title: "Control by Room",
      body: "A user could want to control by room as opposed to device type. “I’m leaving the kitchen, turn off all devices”",
    },
    {
      n: "3.",
      title: "Control by device type",
      body: "A user could want to control a single device type; e.g. “turn all lights off”",
    },
  ];

  const viewMoreHref =
    "https://www.figma.com/board/81TRCw9RpfLwaF9EtbGKEq/Untitled?node-id=16-1325&t=SHRKQC2nd0FB5Tx7-11";

  return (
    <Card bg={BG_WHITE} id="ia-section" className="min-h-[320px]">
      {/* Copyright – desktop only */}
      <p className="hidden lg:block absolute bottom-4 left-[72px]
                    font-[family-name:var(--font-montserrat)] font-light
                    text-[10.8px] text-[#a4a2a2] leading-[1.5] whitespace-nowrap">
        © James Skinner 2025
      </p>

      {/* View more – desktop: top-right corner */}
      <a
        href={viewMoreHref}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex absolute top-[72px] right-[72px]
                   items-center gap-2 px-3.5 py-2 rounded-[10px]
                   bg-black/5 hover:bg-black/10 transition-colors
                   font-[family-name:var(--font-montserrat)] font-semibold
                   text-[13px] text-[#010e14]"
      >
        → View more
      </a>

      {/* Left: text */}
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[28.8px]
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-5 sm:pb-6 lg:pb-[72px]
                      lg:max-w-[320px]">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <Label>Task 1:</Label>
          <Heading>IA: Creating a logical navigation pattern</Heading>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-[family-name:var(--font-montserrat)] font-medium
                        text-xs sm:text-sm lg:text-[14.4px] text-[#010e14] leading-[1.2]">
            Considerations
          </p>
          <div className="font-[family-name:var(--font-montserrat)] font-light
                          text-[10px] sm:text-xs lg:text-[10.8px] text-[#010e14] leading-[1.5] space-y-2">
            <p>A user may want to:</p>
            {considerations.map(({ n, title, body }) => (
              <div key={n} className="space-y-0.5">
                <p>
                  <span className="font-medium">{n} {title}</span>
                </p>
                <p className="ml-3 text-[#3a3a3a]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View more – mobile only */}
        <a
          href={viewMoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                     bg-black/5 hover:bg-black/10 transition-colors
                     font-[family-name:var(--font-montserrat)] font-semibold
                     text-[10px] sm:text-xs text-[#010e14] w-fit"
        >
          → View more
        </a>
      </div>

      {/* IA diagram image
          Desktop: absolute, lower-right (matches Figma node 192:11406 position)
          Mobile:  normal flow, full-width below text                           */}
      <div className="relative mx-5 sm:mx-8 mb-5 sm:mb-6 aspect-[1253/511]
                      lg:absolute lg:mx-0 lg:mb-0
                      lg:left-[39.4%] lg:top-[36.5%] lg:w-[54.4%] lg:h-[39.4%]">
        <Image
          src="/zia-ia-diagram.png"
          alt="IA navigation logic: Dashboard → Device type / Room / Routines → A specific device"
          fill
          className="object-contain object-left-top"
          unoptimized
        />
      </div>
    </Card>
  );
}

/** S14 – Testing navigation patterns */
function S14NavPatterns() {
  const href = "https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=142-5288";
  const options = [
    { n: "Option 1", sub: "Satellite buttons",     screen: "/zia-nav-screen1.png" },
    { n: "Option 2", sub: "Bottom sheet",           screen: "/zia-nav-screen2.png" },
    { n: "Option 3", sub: "Floating Action Button", screen: "/zia-nav-screen3.png" },
  ];
  return (
    <Card bg="#e5e3e1" className="min-h-[320px]">
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-6 sm:pb-8 lg:pb-[72px]">
        {/* Top: text + button */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-1.5 sm:gap-2 max-w-lg">
            <Label>Task 1:</Label>
            <Heading>Testing navigation patterns</Heading>
            <Body>
              To prevent hiding key controls, I explored various navigation patterns and
              applied my IA logic.
            </Body>
          </div>
          <a
            href={href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                       bg-black/5 hover:bg-black/10 transition-colors
                       font-[family-name:var(--font-montserrat)] font-semibold
                       text-[10px] sm:text-xs lg:text-[13px] text-[#010e14] shrink-0 w-fit"
          >
            → View more
          </a>
        </div>

        {/* 3 phones — coded label chip + screen image, top-aligned, 80px gap */}
        <div className="flex items-stretch justify-center w-full
                        flex-wrap sm:flex-nowrap gap-6 lg:gap-[80px] lg:h-[450px]">
          {options.map((o) => (
            <div key={o.n} className="flex flex-col justify-between items-start shrink-0
                                      w-[100px] sm:w-[120px] lg:w-[147px] h-full">
              {/* Label chip — matching Figma node 193:11411 */}
              <div className="w-full bg-[#fdfcfc] rounded-[6px] px-2.5 py-[6px]
                              flex flex-col gap-[4px]">
                <p className="font-[family-name:var(--font-montserrat)] font-semibold
                              text-[9px] sm:text-[10px] lg:text-[10.8px]
                              text-[#010e14] leading-[1.2]">
                  {o.n}
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-[8px] sm:text-[9px] lg:text-[9.6px]
                              text-[#5b5959] leading-[1.4]">
                  {o.sub}
                </p>
              </div>
              {/* Phone screen — frame already baked into the image */}
              <div className="relative w-full aspect-[153/315]">
                <Image src={o.screen} alt={`${o.n}: ${o.sub}`}
                       fill className="object-contain" unoptimized />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

/** Annotation label box used by S15DashboardFeatures */
function AnnotBox({ title, body, bodyHeader, list }: {
  title: string; body?: string; bodyHeader?: string; list?: string[];
}) {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
    fontSize: "8.958px",
  };
  return (
    <div style={{
      backgroundColor: "#1c1c1e",
      border: "0.895px solid #2c2c2e",
      borderRadius: "5px",
      padding: "5px 8px",
      flexShrink: 0,
    }}>
      <p style={{ ...base, fontWeight: 600, lineHeight: 1.2, color: "#fdfcfc",
                  marginBottom: (body || bodyHeader || list) ? "2px" : 0 }}>
        {title}
      </p>
      {body && (
        <p style={{ ...base, fontWeight: 300, lineHeight: 1.45, color: "#bfbfbd" }}>{body}</p>
      )}
      {bodyHeader && (
        <p style={{ ...base, fontWeight: 300, lineHeight: 1.45, color: "#bfbfbd" }}>{bodyHeader}</p>
      )}
      {list && (
        <ul style={{ ...base, fontWeight: 300, lineHeight: 1.45, color: "#bfbfbd",
                     listStyleType: "disc", paddingLeft: "10px", margin: 0 }}>
          {list.map((item) => (
            <li key={item} style={{ marginBottom: 0 }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const DASH_CONNECTOR: React.CSSProperties = { borderTop: "1px dashed #e97451" };
const DASH_VERT: React.CSSProperties = { borderLeft: "1px dashed #e97451", width: 0 };

/** S15 – Dashboard features */
function S15DashboardFeatures() {
  const href = "https://www.figma.com/design/VNl5iyjfUEujOYsh3AEAH8?node-id=158-7363";

  const rightLabels = [
    { top: 154.9,  title: "Settings",
      list: ["Manage your zia account", "Pair new devices", "Change app theme", "Log out"] },
    { top: 254.25, title: "Climate Control",
      list: ["Turn Fan on/off & control speed & Movement", "Set desired temperature",
             "Turn on A/C", "Apply Eco Mode, Dehumidify"] },
    { top: 339.73, title: "Master Sliders",
      bodyHeader: "Controls:", list: ["Master Lighting brightness", "Master Volume"] },
    { top: 407.31, title: "Voice control Assistant" },
  ];

  const leftLabels = [
    { top: 138.79, title: "Customise your dashboard",
      body: "Adjust the order of the modular blocks" },
    { top: 202.34, title: "Media card",
      body: "View what you're listening & where it's being played" },
    { top: 267.23, title: "Choose your ambient scene" },
    { top: 326.76, title: "Quick Links",
      bodyHeader: "Quickly Nav to:",
      list: ["Security devices", "Media devices", "Lighting devices", "Customer support"] },
  ];

  return (
    <Card bg="#2c2c2e" className="min-h-[320px]">
      {/* Copyright – desktop only */}
      <p className="hidden lg:block absolute bottom-4 left-[72px]
                    font-[family-name:var(--font-montserrat)] font-light
                    text-[10.8px] text-[#5b5959] leading-[1.5] whitespace-nowrap">
        © James Skinner 2025
      </p>

      {/* View prototype – desktop: top-right */}
      <a href={href} target="_blank" rel="noopener noreferrer"
         className="hidden lg:inline-flex absolute top-[72px] right-[72px]
                    items-center gap-2 px-3.5 py-2 rounded-[10px]
                    border border-[#f3f3f3]/20 hover:border-[#f3f3f3]/50 transition-colors
                    font-[family-name:var(--font-montserrat)] font-normal
                    text-[13px] text-[#fdfcfc]">
        → View prototype
      </a>

      {/* Left: text */}
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[28.8px]
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-5 sm:pb-6 lg:pb-[72px]
                      lg:max-w-[280px]">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <Label dark>Task 1:</Label>
          <Heading dark>Dashboard features</Heading>
          <p className="font-[family-name:var(--font-montserrat)] font-light
                        text-xs sm:text-sm lg:text-[14.4px] leading-[1.5] text-[#fdfcfc]">
            In dark mode
          </p>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer"
           className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                      border border-[#f3f3f3]/30 transition-colors
                      font-[family-name:var(--font-montserrat)] font-normal
                      text-[10px] sm:text-xs text-[#fdfcfc] w-fit">
          → View prototype
        </a>
      </div>

      {/* Mobile: phone screen — capped at 300px tall, centred */}
      <div className="lg:hidden relative mx-auto mb-5"
           style={{ height: "300px", width: `${Math.round(300 * 183 / 388)}px` }}>
        <Image src="/zia-dashboard-screen.png" alt="Dashboard features in dark mode"
               fill className="object-contain" unoptimized />
      </div>

      {/* Desktop: fixed 602×502 annotation container (Figma node 192:11408) */}
      <div className="hidden lg:block absolute"
           style={{ right: "80px", top: "50%", transform: "translateY(-50%)" }}>
        <div style={{ position: "relative", width: "602px", height: "502px" }}>

          {/* Phone screen — node 171:20717 */}
          <div style={{ position: "absolute", left: "219.3px", top: "117.3px",
                        width: "175.886px", height: "381.311px" }}>
            <Image src="/zia-dashboard-screen.png" alt="Dashboard screen"
                   fill className="object-cover" unoptimized />
          </div>

          {/* Top: System Alerts — box then dashed line down to phone */}
          <div style={{ position: "absolute", left: "269px", top: 0,
                        height: "130px", display: "flex", flexDirection: "column",
                        alignItems: "center" }}>
            <AnnotBox title="System Alerts" body="Notifies uses of events" />
            <div style={{ flex: 1, ...DASH_VERT }} />
          </div>

          {/* Top: Turn system off */}
          <div style={{ position: "absolute", left: "308px", top: "43.9px",
                        height: "73.4px", display: "flex", flexDirection: "column",
                        alignItems: "center" }}>
            <AnnotBox title="Turn system off" body="Kills all media & lights" />
            <div style={{ flex: 1, ...DASH_VERT }} />
          </div>

          {/* Right labels: short connector → box */}
          {rightLabels.map(({ top, title, list, bodyHeader }) => (
            <div key={title} style={{ position: "absolute", left: "395px",
                                      top: `${top}px`, right: 0,
                                      display: "flex", alignItems: "center" }}>
              <div style={{ flexShrink: 0, width: "18px", ...DASH_CONNECTOR }} />
              <AnnotBox title={title} list={list} bodyHeader={bodyHeader} />
            </div>
          ))}

          {/* Left labels: box → connector → phone left edge */}
          {leftLabels.map(({ top, title, body, bodyHeader, list }) => (
            <div key={title} style={{ position: "absolute", left: 0,
                                      top: `${top}px`, right: "382.7px",
                                      display: "flex", alignItems: "center" }}>
              <AnnotBox title={title} body={body} bodyHeader={bodyHeader} list={list} />
              <div style={{ flex: 1, ...DASH_CONNECTOR }} />
            </div>
          ))}

        </div>
      </div>
    </Card>
  );
}

/** S15b – Task 2: Create & Manage scenes */
function S15bScenes() {
  const href =
    "https://www.figma.com/proto/VNl5iyjfUEujOYsh3AEAH8/Zia-Smart-Home?page-id=184%3A4631&node-id=326-25199&viewport=262%2C-2287%2C0.23&t=tjpqER1tuHJ3fIrf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=326%3A25199&show-proto-sidebar=1";
  return (
    <Card bg="#1c1c1e" id="scenes" className="min-h-[320px]">
      {/* Copyright – desktop only */}
      <p className="hidden lg:block absolute bottom-4 left-[72px]
                    font-[family-name:var(--font-montserrat)] font-light
                    text-[10.8px] text-[#5b5959] leading-[1.5] whitespace-nowrap">
        © James Skinner 2025
      </p>

      {/* Left: text */}
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-[28.8px]
                      px-5 sm:px-8 lg:px-[72px]
                      pt-5 sm:pt-8 lg:pt-[72px]
                      pb-5 sm:pb-6 lg:pb-[72px]
                      lg:max-w-[365px]">
        <Emblem size="md" />

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <Label dark>Task 2:</Label>
          <Heading dark>Create &amp; Manage scenes</Heading>
          <div className="font-[family-name:var(--font-montserrat)] font-light
                          text-[10px] sm:text-xs lg:text-[10.8px] text-[#fdfcfc] leading-[1.5]
                          space-y-1 mt-1">
            <p className="font-medium text-xs sm:text-sm lg:text-[14.4px] leading-[1.2] mb-1">
              Feature requirements:
            </p>
            <ul className="list-disc ml-4 space-y-1">
              <li>Choose &amp; apply a scene to:
                <ul className="list-disc ml-4 mt-0.5 space-y-0.5">
                  <li>All rooms</li>
                  <li>Specific rooms</li>
                </ul>
              </li>
              <li>Customise a scene</li>
              <li>Create a new custom scene.</li>
            </ul>
          </div>
        </div>

        <a
          href={href} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px]
                     border border-[#f3f3f3]/30 hover:border-[#f3f3f3]/60 transition-colors
                     font-[family-name:var(--font-montserrat)] font-normal
                     text-[10px] sm:text-xs lg:text-[13px] text-[#fdfcfc] w-fit"
        >
          → View prototype
        </a>
      </div>

      {/* Two phone mockups (scene list + temperature)
          Desktop: absolute, right portion of card (mirrors Figma positions)
          Mobile:  full-width below text                                     */}
      <div className="relative mx-5 sm:mx-8 mb-5 sm:mb-6 aspect-[670/540]
                      lg:absolute lg:mx-0 lg:mb-0
                      lg:left-[37.3%] lg:top-[9.3%] lg:w-[58.2%] lg:h-[83.3%]">
        <Image
          src="/zia-scenes-phones.png"
          alt="Create & Manage scenes: scene list and temperature feature screens"
          fill
          className="object-contain object-left-top"
          unoptimized
        />
      </div>
    </Card>
  );
}

function S16Further() {
  const tools = [
    { tool: "Figma",          sub: "FigJam & Design", desc: "White boarding, note-taking, wire-framing & prototyping" },
    { tool: "Figma AI",       sub: "",               desc: "Copy generation & refinement" },
    { tool: "Gemini",         sub: "",               desc: "Desk research, copy refinement, image generation & UI design critique" },
    { tool: "Built for Mars", sub: "",               desc: "UX & UI Design critique" },
  ];
  return (
    <>
      {/* Further exploration */}
      <Card bg={BG_WHITE} id="further" className="min-h-[280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col gap-4 sm:gap-5 justify-between
                          px-5 sm:px-8 lg:px-[72px]
                          pt-5 sm:pt-8 lg:pt-[72px]
                          pb-5 sm:pb-6 lg:pb-[72px]">
            <Emblem size="md" />
            <div className="flex flex-col gap-3 sm:gap-4">
              <Label>If I were to go further...</Label>
              <Heading>I would want to explore:</Heading>
              <ul className="list-disc font-[family-name:var(--font-montserrat)] font-light
                             text-xs sm:text-sm lg:text-[10.8px] text-[#010e14] leading-[1.5]
                             space-y-1.5 ml-4">
                <li>Designing for intelligent routines: HMW personalise and automate a user&apos;s daily routine.</li>
                <li>How to integrate haptics &amp; sound into the experience.</li>
                <li>Adding micro-animation</li>
              </ul>
            </div>
            <p className="font-[family-name:var(--font-montserrat)] font-light
                          text-xs sm:text-sm lg:text-[10.8px] text-[#010e14] leading-[1.5]">
              If you&apos;re reading this, many thanks for getting this far! I really appreciate it. 🙂
            </p>
          </div>
          {/* Right: phone */}
          <div className="flex items-center justify-center bg-[#ecebe9]
                          px-8 sm:px-12 py-6 sm:py-8 lg:py-[84px] min-h-[200px] lg:min-h-0">
            <div className="w-[140px] sm:w-[180px] lg:w-[221px]
                            rounded-[22px] sm:rounded-[27px]
                            overflow-hidden border-[3px] sm:border-[4px] border-[#0c0a08] bg-[#0c0a08]">
              <video src="/zia-splash-screen.mp4" autoPlay loop playsInline controls className="block w-full" />
            </div>
          </div>
        </div>
      </Card>

      {/* Tools used */}
      <Card bg={BG_WHITE} className="min-h-[220px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left: emblem + heading */}
          <div className="flex flex-col justify-start sm:justify-center gap-6
                          px-5 sm:px-8 lg:px-[72px]
                          pt-5 sm:pt-8 lg:pt-[72px]
                          pb-5 sm:pb-6 lg:pb-[72px]">
            <Emblem size="md" />
            <div className="flex flex-col gap-2">
              <Label>Appendix</Label>
              <Heading>Tools I used for this task</Heading>
            </div>
          </div>
          {/* Right: tools table */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6
                          px-5 sm:px-8 lg:px-[72px]
                          pt-0 sm:pt-6 lg:pt-[72px]
                          pb-5 sm:pb-6 lg:pb-[72px]">
            {tools.map((t) => (
              <div key={t.tool} className="flex gap-6 sm:gap-8 lg:gap-[33px] items-start">
                <div className="shrink-0 w-[80px] sm:w-[96px]">
                  <p className="font-[family-name:var(--font-montserrat)] font-medium
                                text-xs sm:text-sm lg:text-[14.4px] text-[#010e14] leading-[1.5]">
                    {t.tool}
                  </p>
                  {t.sub && (
                    <p className="font-[family-name:var(--font-montserrat)] font-light
                                  text-[9px] sm:text-[10px] lg:text-[9.6px] text-[#010e14] leading-[1.5]">
                      {t.sub}
                    </p>
                  )}
                </div>
                <p className="font-[family-name:var(--font-montserrat)] font-light
                              text-xs sm:text-sm lg:text-[14.4px] text-[#010e14] leading-[1.5]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────────────────────────────────── */

export default function ZiaPage() {
  return (
    <div className="bg-[#141414] flex flex-col">
      <NavHeader bg="#141414" />
      <main className="flex flex-col gap-3 sm:gap-4 lg:gap-20 max-w-[1152px] mx-auto w-full
                       px-4 sm:px-6 lg:px-0
                       pt-8 sm:pt-10 lg:pt-12
                       pb-0">
        <S1Cover />
        {/* Text sections – no card bg, uses page background */}
        <div className="px-1 py-6 sm:py-8 lg:py-10">
          <S2Background />
        </div>
        <S3Intro />
        <S12Tasks />
        <S4Contents />
        <S5Market />
        <S5bSmartDevice />
        <S6PainPoints />
        <S7Problem />
        <S8BrandIdentity />
        <S9LogoMark />
        <S10AppIcon />
        <S11Colours />
        <S11bTypeIconPairing />
        <S13IA />
        <S14NavPatterns />
        <S15DashboardFeatures />
        <S15bScenes />
        <S16Further />
      </main>
      <div className="max-w-[1152px] mx-auto w-full px-4 sm:px-6 lg:px-0 mt-12 sm:mt-16 lg:mt-20">
        {/* spacer */}
      </div>
      <CaseStudyFooter />
    </div>
  );
}

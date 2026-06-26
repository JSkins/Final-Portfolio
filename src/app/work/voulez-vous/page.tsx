import React from "react";
import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import VideoOnView from "@/components/VideoOnView";

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */


function PillDark({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 md:py-1.5 rounded-full bg-white/10 text-white/80 text-[10px] sm:text-xs md:text-sm font-medium font-[family-name:var(--font-hanken)] tracking-tight whitespace-nowrap">
      {children}
    </span>
  );
}

function PillOutline({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-3 sm:px-4 py-0.5 sm:py-1 rounded-full border border-[#f3f3f6] text-[#f3f3f6] text-[10px] sm:text-sm md:text-base lg:text-lg font-light font-[family-name:var(--font-manrope)] tracking-tight whitespace-nowrap">
      {children}
    </span>
  );
}

function Label({ children, tone = "light" }: { children: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] font-medium text-xs sm:text-sm md:text-base lg:text-[19.2px] ${
        tone === "light" ? "text-[#9dc39d]" : "text-[#5f9b5f]"
      } tracking-tight leading-[1.5]`}
    >
      {children}
    </p>
  );
}

function H2({
  children,
  dark = false,
  large = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-poppins)] font-semibold ${
        large
          ? "text-lg sm:text-xl md:text-2xl lg:text-[38.4px]"
          : "text-base sm:text-lg md:text-xl lg:text-[28.8px]"
      } ${dark ? "text-white" : "text-[#0d0029]"} tracking-tight leading-[1.5]`}
    >
      {children}
    </p>
  );
}

function Body({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-hanken)] font-light text-[10px] sm:text-xs md:text-sm lg:text-[16.8px] ${
        dark ? "text-white" : "text-[#0d0029]"
      } tracking-tight leading-[1.4] ${className}`}
    >
      {children}
    </p>
  );
}

function Card({
  children,
  bg = "#ffffff",
  className = "",
  noRound = false,
  aspect = "16/9",
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
  noRound?: boolean;
  aspect?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        noRound ? "" : "rounded-2xl"
      } ${className}`}
      style={{ backgroundColor: bg, aspectRatio: aspect }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 1 — Cover
   ───────────────────────────────────────────────────────────── */

function S1Cover() {
  const tags = ["E2E Design", "Branding", "D2C Mobile App"];

  return (
    <Card bg="#0d0029">
      {/* Two-column layout: content left, martini right */}
      <div className="absolute inset-0 flex items-stretch">

        {/* ── Left col: wordmark + subtitle (top) / tags (bottom) ─── */}
        <div className="flex-1 min-w-0 flex flex-col justify-between
                        px-[3%] sm:px-[5%] md:px-[6%]
                        pt-[5%] sm:pt-[6%] md:pt-[7%]
                        pb-[5%] sm:pb-[6%] md:pb-[7%]">
          {/* Top: wordmark + subtitle */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <div className="relative w-[52%] sm:w-[46%] md:w-[42%] aspect-[379/85]">
              <Image
                src="/vv/inner/vv-wordmark.png"
                alt="Voulez Vous"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="font-[family-name:var(--font-manrope)] font-light text-xs sm:text-sm md:text-base lg:text-xl text-[#e2e3e3] tracking-tight leading-[1.48]">
              Your go-to drinks guide you can rely on
            </p>
          </div>

          {/* Bottom: filled tag chips */}
          <div className="flex gap-1.5 sm:gap-2 flex-wrap">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center
                           px-2.5 sm:px-3.5 lg:px-4
                           py-1 sm:py-1.5 lg:py-2.5
                           rounded-full
                           bg-white/10 text-white/80
                           font-[family-name:var(--font-manrope)] font-medium
                           text-[9px] sm:text-xs lg:text-lg
                           tracking-tight whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right col: martini, bottom-aligned ───────────────────── */}
        <div className="shrink-0 flex flex-col justify-end
                        w-[20%] sm:w-[22%] md:w-[22.2%]">
          <div className="relative w-full aspect-[256/260]">
            <Image
              src="/vv/inner/martini.png"
              alt=""
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 2 — Background / Intro
   ───────────────────────────────────────────────────────────── */

function S2Intro() {
  return (
    <div className="w-full pl-6 sm:pl-10 md:pl-12 lg:pl-[72px] pr-6 sm:pr-10 md:pr-12 lg:pr-[72px] py-6 sm:py-8 md:py-10 flex flex-col gap-10 max-w-[720px]">
      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="font-[family-name:var(--font-manrope)] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.4]">
          Background
        </h1>
        <p className="font-[family-name:var(--font-manrope)] font-light text-sm sm:text-base md:text-lg lg:text-[18px] text-[#929296] tracking-[0.18px] leading-[1.48]">
          A short two-week design sprint for a job interview blossomed into the
          launch of a mobile app on iOS and Android app stores. Voulez Vous is a
          drinks guide that empowers people at home to become pro bartenders
          with what they already have in the cupboard.
        </p>
      </div>
      <a
        href="https://www.voulezvous.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#f3f3f6] text-[#011b1b] font-[family-name:var(--font-manrope)] font-[550] text-base sm:text-lg w-fit"
      >
        Download here
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 3 — Meet the Team
   ───────────────────────────────────────────────────────────── */

function TeamCard({
  src,
  name,
  role,
  title,
}: {
  src: string;
  name: string;
  role: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[174px]">
      <div className="relative w-[80px] sm:w-[110px] md:w-[140px] lg:w-[174px] aspect-square rounded-full overflow-hidden">
        <Image src={src} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col items-center gap-3 sm:gap-5 md:gap-7 w-full text-center">
        <div className="flex flex-col items-center gap-0.5">
          <p className="font-[family-name:var(--font-manrope)] font-light text-[10px] sm:text-xs text-[#0d0029] tracking-tight leading-[1.48]">
            {name}
          </p>
          <p className="font-[family-name:var(--font-manrope)] font-light text-[10px] sm:text-xs text-[#0d0029]/50 tracking-tight leading-[1.48]">
            {role}
          </p>
        </div>
        <p className="font-[family-name:var(--font-manrope)] font-bold text-xs sm:text-sm md:text-base lg:text-[18px] text-[#0d0029] tracking-[0.18px] leading-[1.48]">
          {title}
        </p>
      </div>
    </div>
  );
}

function S3Team() {
  const heading = (
    <div className="flex items-center gap-3 sm:gap-4">
      <p className="font-[family-name:var(--font-manrope)] font-semibold text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#0d0029] leading-[1.4]">
        Meet the Team
      </p>
      <div className="relative h-5 sm:h-6 md:h-7 lg:h-9 w-auto aspect-[58/116]">
        <Image src="/vv/inner/slice.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );

  const cards = (
    <>
      <TeamCard src="/vv-james.jpg" name="James Skinner" role="Co-Founder" title="Product Designer" />
      <TeamCard src="/vv-sebastian.jpg" name="Sebastian Prentice" role="Co-Founder" title="Software Engineer" />
      <TeamCard src="/vv-cooper.jpg" name="Cooper Smith" role="Developer" title="Software Engineer" />
    </>
  );

  return (
    <>
      {/* Mobile: content-hugging */}
      <div className="sm:hidden w-full bg-white rounded-2xl overflow-hidden px-6 pt-6 pb-8 flex flex-col gap-6">
        {heading}
        <div className="flex justify-center gap-4">{cards}</div>
      </div>

      {/* sm+: 16:9 Card */}
      <Card bg="#ffffff" className="hidden sm:block">
        <div className="absolute inset-0 px-10 md:px-12 lg:px-[72px] py-8 md:py-10 lg:py-[72px] flex flex-col gap-10 md:gap-16 lg:gap-[60px]">
          {heading}
          <div className="flex justify-center gap-12 md:gap-16 lg:gap-[96px]">{cards}</div>
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 4 — Our Mission
   ───────────────────────────────────────────────────────────── */

function S4Mission() {
  return (
    <>
      {/* Mobile: stacked, content-hugging */}
      <div className="sm:hidden w-full bg-[#fafafa] rounded-2xl overflow-hidden flex flex-col">
        <div className="px-6 pt-6 pb-4 flex flex-col gap-1.5">
          <Label tone="light">Our Mission</Label>
          <div className="font-[family-name:var(--font-poppins)] font-medium text-sm text-[#0d0029] tracking-tight leading-[1.5]">
            <p>
              We want to become the{" "}
              <span className="bg-[#3d863b] text-white px-1.5 py-0.5 rounded-[3px] whitespace-nowrap">
                first-to-mind
              </span>{" "}
              drinks resource
            </p>
            <p>
              that empowers people at home to become pro bartenders with what
              they have in the cupboard.
            </p>
          </div>
        </div>
        {/* Phones: flex-end row so height hugs the taller phone */}
        <div className="flex justify-end items-end pr-4">
          <div className="relative w-[28%] aspect-[204/267] z-10">
            <Image
              src="/vv/inner/phone-mission-2.png"
              alt="Voulez Vous app"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative w-[28%] aspect-[204/356] -ml-3">
            <Image
              src="/vv/inner/phone-mission-1.png"
              alt="Voulez Vous app"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* sm+: 16:9 Card with absolute layout */}
      <Card bg="#fafafa" className="hidden sm:block">
        <div className="absolute top-[11%] left-10 md:left-12 lg:left-[72px] flex flex-col gap-[7.2px] max-w-[55%] lg:max-w-[850px]">
          <Label tone="light">Our Mission</Label>
          <div className="font-[family-name:var(--font-poppins)] font-medium text-xl md:text-2xl lg:text-[28.8px] text-[#0d0029] tracking-tight leading-[1.5]">
            <p>
              We want to become the{" "}
              <span className="bg-[#3d863b] text-white px-2 md:px-2.5 py-0.5 rounded whitespace-nowrap">
                first-to-mind
              </span>{" "}
              drinks resource
            </p>
            <p>
              that empowers people at home to become pro bartenders with what
              they have in the cupboard.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-[78.9%] w-[17.7%] aspect-[204/356]">
          <Image
            src="/vv/inner/phone-mission-1.png"
            alt="Voulez Vous app"
            fill
            className="object-contain object-bottom"
          />
        </div>
        <div className="absolute bottom-0 left-[58.7%] w-[17.7%] aspect-[204/267] z-10">
          <Image
            src="/vv/inner/phone-mission-2.png"
            alt="Voulez Vous app"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Sections 5, 6, 7 — Features
   ───────────────────────────────────────────────────────────── */

function FeatureLeft({
  heading,
  body,
  pills,
  phoneSrc,
  phoneAlt,
  videoSrc,
}: {
  heading: string;
  body: string;
  pills: string[];
  phoneSrc?: string;
  phoneAlt?: string;
  videoSrc?: string;
}) {
  return (
    <>
      {/* Mobile: stacked — text on top, phone panel below */}
      <div className="sm:hidden w-full bg-[#0d0029] rounded-2xl overflow-hidden flex flex-col">
        <div className="px-6 pt-6 pb-5 flex flex-col gap-2">
          <Label tone="light">Features</Label>
          <H2 dark>{heading}</H2>
          <div className="flex flex-col gap-2">
            <Body dark>{body}</Body>
            <div className="flex gap-1 flex-wrap">
              {pills.map((p) => (
                <PillDark key={p}>{p}</PillDark>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] bg-[#f1f1f1]">
          <div className="absolute inset-[6px]">
            {videoSrc ? (
              <VideoOnView src={videoSrc} />
            ) : phoneSrc ? (
              <Image src={phoneSrc} alt={phoneAlt ?? ""} fill className="object-contain" />
            ) : null}
          </div>
        </div>
      </div>

      {/* sm+: 16:9 side-by-side */}
      <Card bg="#0d0029" className="hidden sm:block">
        <div className="absolute left-10 md:left-12 lg:left-[72px] right-[52%] top-[23%] flex flex-col gap-[7.2px]">
          <Label tone="light">Features</Label>
          <H2 dark>{heading}</H2>
          <div className="flex flex-col gap-3 lg:gap-[19.2px]">
            <Body dark className="max-w-[400px]">
              {body}
            </Body>
            <div className="flex gap-1.5 lg:gap-[11.4px] flex-wrap">
              {pills.map((p) => (
                <PillDark key={p}>{p}</PillDark>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#f1f1f1]">
          <div className="absolute inset-[6px]">
            {videoSrc ? (
              <VideoOnView src={videoSrc} />
            ) : phoneSrc ? (
              <Image src={phoneSrc} alt={phoneAlt ?? ""} fill className="object-contain" />
            ) : null}
          </div>
        </div>
      </Card>
    </>
  );
}

function FeatureRight({
  heading,
  body,
  pills,
  phoneSrc,
  phoneAlt,
  videoSrc,
}: {
  heading: string;
  body: string;
  pills: string[];
  phoneSrc?: string;
  phoneAlt?: string;
  videoSrc?: string;
}) {
  return (
    <>
      {/* Mobile: stacked — text on top, phone panel below */}
      <div className="sm:hidden w-full bg-[#0d0029] rounded-2xl overflow-hidden flex flex-col">
        <div className="px-6 pt-6 pb-5 flex flex-col gap-2">
          <Label tone="light">Features</Label>
          <H2 dark>{heading}</H2>
          <div className="flex flex-col gap-2">
            <Body dark>{body}</Body>
            <div className="flex gap-1 flex-wrap">
              {pills.map((p) => (
                <PillDark key={p}>{p}</PillDark>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] bg-[#f2f1f1]">
          <div className="absolute inset-x-[20%] inset-y-[8%]">
            {videoSrc ? (
              <VideoOnView src={videoSrc} />
            ) : phoneSrc ? (
              <Image src={phoneSrc} alt={phoneAlt ?? ""} fill className="object-contain" />
            ) : null}
          </div>
        </div>
      </div>

      {/* sm+: 16:9 side-by-side */}
      <Card bg="#0d0029" className="hidden sm:block">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#f2f1f1]">
          <div className="absolute inset-x-[31%] inset-y-[17%]">
            {videoSrc ? (
              <VideoOnView src={videoSrc} />
            ) : phoneSrc ? (
              <Image src={phoneSrc} alt={phoneAlt ?? ""} fill className="object-contain" />
            ) : null}
          </div>
        </div>
        <div className="absolute left-[calc(50%+2.5rem)] lg:left-[calc(50%+72px)] right-10 top-[22%] flex flex-col gap-[7.2px]">
          <Label tone="light">Features</Label>
          <H2 dark>{heading}</H2>
          <div className="flex flex-col gap-3 lg:gap-[19.2px]">
            <Body dark className="max-w-[400px]">
              {body}
            </Body>
            <div className="flex gap-1.5 lg:gap-[7.2px] flex-wrap">
              {pills.map((p) => (
                <PillDark key={p}>{p}</PillDark>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

function S5Scanner() {
  return (
    <FeatureLeft
      heading="Discover what drink you can make, with what you have at home"
      body="Simply scan your ingredients and the app will curate a series of recipes you can enjoy with simple to follow recipes and tutorials."
      pills={["Scan any bottle", "Effortless", "Fun experience"]}
      videoSrc="/vv/inner/phone-scanner.mp4"
    />
  );
}

function S6Database() {
  return (
    <FeatureRight
      heading="Explore one of the world's largest cocktail databases!"
      body="Search for any drink you can think of — we've got you covered. And further learn where you can buy products at the best price."
      pills={["Database", "E-commerce"]}
      videoSrc="/vv/inner/phone-database.mp4"
    />
  );
}

function S7Recipe() {
  return (
    <FeatureLeft
      heading="Easy to follow recipes!"
      body="Users can scale recipes and watch quick tutorials to craft the perfect drink. The app provides clear step-by-step instructions."
      pills={["Tailor recipes to your needs"]}
      videoSrc="/vv/inner/phone-recipe.mp4"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 8 — Highlight the Problem
   ───────────────────────────────────────────────────────────── */

function S8Problem() {
  const textBlock = (
    <div className="flex flex-col gap-0.5 lg:gap-[7.2px]">
      <Label tone="dark">The Problem</Label>
      <Body>
        Whether you&rsquo;re making your first cocktail ever or you&rsquo;re a
        trained mixologist, everyone at home faces the same issue:
      </Body>
    </div>
  );

  return (
    <>
      {/* Mobile: stacked */}
      <div className="sm:hidden w-full bg-white rounded-2xl overflow-hidden flex flex-col">
        <div
          className="w-full aspect-[2/1]"
          style={{
            backgroundImage: "url(/vv/s08.png)",
            backgroundSize: "100% 200%",
            backgroundPosition: "top",
          }}
        />
        <div className="px-6 py-5 flex flex-col gap-3">
          {textBlock}
          <H2>
            &ldquo;What drinks can I make with the ingredients I have at
            home?&rdquo;
          </H2>
        </div>
      </div>

      {/* sm+: 16:9 card with absolute layout */}
      <Card bg="#ffffff" className="hidden sm:block">
        {/* Top half: bottle wall (top crop of s08.png) */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            backgroundImage: "url(/vv/s08.png)",
            backgroundSize: "100% 200%",
            backgroundPosition: "top",
          }}
        />
        {/* Text block */}
        <div className="absolute top-[58%] left-10 md:left-12 lg:left-[72px] right-[42%] flex flex-col gap-3 lg:gap-[28.8px]">
          {textBlock}
          <H2>
            &ldquo;What drinks can I make with the ingredients I have at
            home?&rdquo;
          </H2>
        </div>
        {/* Loading animation — bottom-right of white section, matches Figma node 111:20362 */}
        <div className="absolute left-[68%] top-[60%] w-[35%] aspect-[407/229]">
          <VideoOnView src="/vv/inner/loading-animation.mp4" />
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 9 — Market Trend
   ───────────────────────────────────────────────────────────── */

function S9MarketTrend() {
  const body = (
    <p className="font-[family-name:var(--font-poppins)] font-semibold text-base sm:text-lg md:text-2xl lg:text-[38.4px] text-white tracking-tight leading-[1.5] max-w-[850px]">
      With the rising cost of living, people are hosting and{" "}
      <span className="bg-[#2f6b30] px-1.5 py-0.5 rounded-[3px] sm:rounded">
        entertaining at home
      </span>{" "}
      more than ever, fuelling a booming demand for a high-quality{" "}
      <span className="bg-[#2f6b30] px-1.5 py-0.5 rounded-[3px] sm:rounded">
        drinks resource
      </span>
    </p>
  );

  return (
    <>
      {/* Mobile: content-hugging */}
      <div className="sm:hidden w-full bg-[#0d0029] rounded-2xl overflow-hidden relative px-6 py-6 flex flex-col gap-2">
        <Label tone="light">Recent Trends</Label>
        {body}
        {/* Slice — top-right corner */}
        <div className="absolute top-3 right-3 w-5 aspect-[1/2]">
          <Image src="/vv/inner/slice.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* sm+: 16:9 Card */}
      <Card bg="#0d0029" className="hidden sm:block">
        <div className="absolute top-[48%] left-10 md:left-12 lg:left-[72px] right-10 md:right-12 lg:right-[72px] flex flex-col gap-2">
          <Label tone="light">Recent Trends</Label>
          {body}
        </div>
        {/* Slice decoration — top-right, matches Figma 111:20375 */}
        <div className="absolute top-[11%] right-[6%] w-[5%] aspect-[1/2]">
          <Image src="/vv/inner/slice.svg" alt="" fill className="object-contain" />
        </div>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 10 — Re-affirming the Problem
   ───────────────────────────────────────────────────────────── */

function ShortcomingCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#f9f8f8] border border-[#e2e3e3] rounded-[10px] overflow-hidden shadow-[0px_14px_19px_rgba(50,50,71,0.02)] flex flex-col">
      <div className="bg-white flex items-center justify-center py-3 sm:py-4 md:py-5">
        {icon}
      </div>
      <div className="px-3 py-2 flex flex-col items-center gap-0.5">
        <p className="font-[family-name:var(--font-hanken)] font-bold text-xs sm:text-sm md:text-base lg:text-[16.8px] text-black tracking-tight leading-[1.4] text-center">
          {title}
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-[8px] sm:text-[10px] md:text-xs text-[#0d0029]/80 text-center tracking-tight leading-[1.4]">
          {copy}
        </p>
      </div>
    </div>
  );
}

function S10ReAffirming() {
  /* ── Icons ───────────────────────────────────────────────── */
  const equipmentIcon = (
    <div className="relative size-10 sm:size-12 md:size-14 lg:size-[72px]">
      <Image src="/vv/inner/sc-equipment.svg" alt="" fill className="object-contain" />
    </div>
  );

  const orangeIcon = (
    <div className="flex items-center justify-center bg-[rgba(238,245,239,0.8)] rounded-full size-10 sm:size-12 md:size-14 lg:size-[72px]">
      <div className="relative size-[70%]">
        <Image src="/vv/inner/sc-orange.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );

  const skillIcon = (
    <div className="relative size-10 sm:size-12 md:size-14 lg:size-[72px]">
      <Image src="/vv/inner/sc-skill-frame.svg" alt="" fill className="object-contain" />
      <div className="absolute inset-[20%]">
        <Image src="/vv/inner/sc-skill-icon.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );

  const effortIcon = (
    <div className="relative size-10 sm:size-12 md:size-14 lg:size-[72px]">
      <Image src="/vv/inner/sc-effort-circle.svg" alt="" fill className="object-contain" />
      <div className="absolute inset-[15%]">
        <Image src="/vv/inner/sc-effort-icon.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );

  /* ── Shared card grid ─────────────────────────────────────── */
  const cards = (
    <>
      <ShortcomingCard
        icon={equipmentIcon}
        title="Lack of Equipment"
        copy="To make a cocktail is simple; you don't need all the bells and whistles when making a drink"
      />
      <ShortcomingCard
        icon={orangeIcon}
        title="Cost of ingredients & Kit"
        copy="Due to industry jargon, people don't know necessarily what they're buying and buy renown brands & marketing ploys."
      />
      <ShortcomingCard
        icon={skillIcon}
        title="Lack of knowledge & Skill"
        copy="That's where VV comes into use"
      />
      <ShortcomingCard
        icon={effortIcon}
        title="Requires some effort"
        copy="Some people live to eat, some people love to eat — we can't satisfy everyone"
      />
    </>
  );

  return (
    <>
      {/* Mobile: content-hugging, stacked */}
      <div className="sm:hidden w-full bg-white rounded-2xl overflow-hidden px-6 pt-6 pb-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label tone="dark">Discovery</Label>
          <H2>The shortcomings of making cocktails</H2>
        </div>
        <div className="font-[family-name:var(--font-hanken)] font-light text-xs text-black tracking-tight leading-[1.4]">
          <p>
            We asked <span className="font-bold text-[#0d0029]">96 people</span>{" "}
            what stops them from making cocktails at home.
          </p>
          <p className="mt-2">
            We can dispel most of these shortcomings when using our app.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">{cards}</div>
      </div>

      {/* sm+: 16:9 Card with 12-col grid */}
      <Card bg="#ffffff" className="hidden sm:block">
        <div className="absolute inset-0 px-10 md:px-12 lg:px-[72px] py-8 md:py-10 lg:py-[72px] grid grid-cols-12 gap-4 md:gap-6">
          {/* Left col */}
          <div className="col-span-5 flex flex-col gap-2 sm:gap-3 md:gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <Label tone="dark">Discovery</Label>
              <H2>The shortcomings of making cocktails</H2>
            </div>
            <div className="font-[family-name:var(--font-hanken)] font-light text-[10px] sm:text-xs md:text-sm lg:text-[16.8px] text-black tracking-tight leading-[1.4] mt-2">
              <p>
                We asked <span className="font-bold text-[#0d0029]">96 people</span>{" "}
                what stops them from making cocktails at home.
              </p>
              <p className="mt-2">
                We can dispel most of these shortcomings when using our app.
              </p>
            </div>
          </div>
          {/* Right col: 2×2 card grid */}
          <div className="col-span-7 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-[28px] content-start">
            {cards}
          </div>
        </div>
        {/* Zest Twist decoration — matches Figma left-[69.7px] top-[341.74px] rotate-[88.69deg] */}
        <div className="absolute left-[6%] top-[53%] w-[5%] aspect-square rotate-[89deg]">
          <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain" />
        </div>
        {/* Copyright */}
        <p className="absolute bottom-[6%] left-[6%] font-[family-name:var(--font-hanken)] font-normal text-[9px] md:text-[10px] lg:text-xs text-[#0d0029]/20 tracking-tight">
          ©Voulez Vous 2025
        </p>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 25 — Logo Sets (built natively, scaled VV logo)
   ───────────────────────────────────────────────────────────── */

function S25Logos() {
  const rows = [
    { label: "XL", size: "120px",  h: "lg:h-[80px]",   imgH: "h-[56px] sm:h-[64px] lg:h-[80px]" },
    { label: "L",  size: "72px",   h: "lg:h-[52px]",   imgH: "h-[34px] sm:h-[42px] lg:h-[52px]" },
    { label: "M",  size: "44px",   h: "lg:h-[32px]",   imgH: "h-[22px] sm:h-[26px] lg:h-[32px]" },
    { label: "S",  size: "44px",   h: "lg:h-[26px]",   imgH: "h-[18px] sm:h-[22px] lg:h-[26px]" },
    { label: "XS", size: "32px",   h: "lg:h-[20px]",   imgH: "h-[14px] sm:h-[17px] lg:h-[20px]" },
  ];
  return (
    <Card bg="#0d0029">
      <div className="absolute inset-0 px-6 sm:px-10 md:px-12 lg:px-[72px] py-6 sm:py-8 md:py-10 lg:py-[72px] flex flex-col gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col gap-1 sm:gap-2">
          <Label tone="light">Design language</Label>
          <H2 dark>Logo Sets</H2>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {rows.map(({ label, size, imgH }, i) => (
            <div key={label}>
              {i === 0 && <div className="h-px bg-white/20 w-full" />}
              <div className="flex items-center justify-between py-3 sm:py-4 lg:py-5">
                <div className={`relative ${imgH} w-auto`}>
                  <Image
                    src="/vv/inner/vv-wordmark.png"
                    alt={`Logo ${label}`}
                    height={80}
                    width={240}
                    className={`${imgH} w-auto object-contain object-left`}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col items-end gap-0.5 shrink-0">
                  <span className="font-bold text-white text-[10px] sm:text-[10.4px] leading-none">{label}</span>
                  <span className="text-white/70 text-[10px] sm:text-[10.4px] leading-none font-normal">{size}</span>
                </div>
              </div>
              <div className="h-px bg-white/20 w-full" />
            </div>
          ))}
        </div>
        <p className="text-[rgba(255,255,255,0.5)] text-[9px] sm:text-[12px] font-[family-name:var(--font-hanken)] leading-[1.4]">©Voulez Vous 2025</p>
      </div>
    </Card>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 31 — Sign Up / Download
   ───────────────────────────────────────────────────────────── */

function S31SignUp() {
  return (
    <Card bg="#ffffff">
      {/* Decorative zest twists */}
      <div className="absolute top-0 left-0 size-16 sm:size-20 lg:size-24 opacity-90 -translate-x-1/4 -translate-y-1/4">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute top-4 right-[20%] size-6 sm:size-7 lg:size-[28.8px] opacity-80">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute bottom-[15%] right-[8%] size-8 sm:size-10 lg:size-[43.2px] opacity-80">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute top-[35%] right-[8%] size-6 sm:size-7 lg:size-[28.8px] opacity-70">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain rotate-180" unoptimized />
      </div>
      <div className="absolute top-[35%] left-[8%] size-8 sm:size-10 lg:size-[43.2px] opacity-80 rotate-180">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="absolute bottom-[10%] right-[3%] size-6 sm:size-7 lg:size-[28.8px] opacity-60">
        <Image src="/vv/inner/sc-zest-twist.svg" alt="" fill className="object-contain rotate-180" unoptimized />
      </div>
      {/* Centre content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-[33.6px] px-6">
        {/* App icon */}
        <div className="size-16 sm:size-20 md:size-28 lg:size-[152px] rounded-2xl lg:rounded-[54px] overflow-hidden bg-[#0d0029] flex items-center justify-center shrink-0">
          <Image src="/vv/inner/martini.png" alt="Voulez Vous app icon" width={120} height={120} className="size-[75%] object-contain" unoptimized />
        </div>
        {/* Text */}
        <div className="flex flex-col items-center gap-2 lg:gap-[9.6px] text-center max-w-[320px] sm:max-w-[384px]">
          <p className="font-[family-name:var(--font-poppins)] font-medium text-xl sm:text-2xl lg:text-[28.8px] text-[#0d0029] tracking-tight leading-[1.5]">Download now!</p>
          <p className="font-[family-name:var(--font-hanken)] font-normal text-sm sm:text-base lg:text-[18px] text-black leading-[1.36] tracking-tight">Discover what you can make at home now by downloading the Voulez Vous App now!</p>
        </div>
        {/* Button */}
        <a
          href="https://www.voulezvous.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-[32px] py-2 sm:py-3 lg:py-[9.6px] rounded-xl bg-[#3d863b] text-white font-[family-name:var(--font-hanken)] font-semibold text-sm sm:text-base lg:text-[14.4px] tracking-tight hover:bg-[#2f6b30] transition-colors w-[200px] sm:w-[220px] lg:w-[256px] drop-shadow-sm"
        >
          <div className="relative size-4 lg:size-[19.2px] shrink-0">
            <Image src="/vv/inner/arrow-square-out.png" alt="" fill className="object-contain" unoptimized />
          </div>
          Download here
        </a>
      </div>
      <p className="absolute bottom-3 left-6 sm:left-[72px] font-[family-name:var(--font-hanken)] text-[9px] sm:text-[12px] text-[rgba(13,0,41,0.2)] leading-[1.4]">©Voulez Vous 2025</p>
    </Card>
  );
}

/* ─────────────────────────────────────────────────────────────
   Section 11 — Target Audience (Discovery)
   ───────────────────────────────────────────────────────────── */

function S11TargetAudience() {
  const textBlock = (
    <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-[7.2px]">
      <Label tone="dark">Discovery</Label>
      <H2>Our Target Audience</H2>
      <Body>
        We primarily aim to target Millennials and Generation Z users, in both the UK &amp; US.
      </Body>
    </div>
  );

  /* Lemon slice SVG is landscape (115.2 × 57.6 viewBox).
     Wrap in a portrait container and rotate 90° so it appears as a tall wedge. */
  const lemonSlice = (
    <div className="relative w-[29px] sm:w-[40px] lg:w-[57.6px] aspect-[1/2] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/vv/inner/lemon-slice.png"
          alt=""
          width={115}
          height={58}
          className="w-[200%] rotate-90 shrink-0"
          unoptimized
        />
      </div>
    </div>
  );

  const statsGrid = (
    <div className="grid grid-cols-2 gap-x-5 sm:gap-x-8 lg:gap-x-[48px] gap-y-5 sm:gap-y-7 lg:gap-y-[80px]">
      {/* 85% */}
      <div className="flex flex-col gap-0.5 lg:gap-[2.4px]">
        <p className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl lg:text-[57.6px] text-[#3d863b] leading-[1.2] tracking-tight">
          85%
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-xs sm:text-sm lg:text-[18px] text-[#0d0029] tracking-tight leading-[1.4]">
          of adults drink alcohol in the UK (54.4m people)
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-[8px] sm:text-[9px] lg:text-[9.6px] text-[rgba(13,0,41,0.5)] tracking-tight leading-[1.4] mt-1">
          Mintel UK Alcoholic Drinks Industry Review 2024
        </p>
      </div>

      {/* 21-39yrs */}
      <div className="flex flex-col gap-0.5 lg:gap-[2.4px]">
        <p className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl lg:text-[57.6px] text-[#0d0029] leading-[1.2] tracking-tight">
          21-39
          <span className="font-[family-name:var(--font-hanken)] font-normal text-xl sm:text-2xl lg:text-[33.6px]">yrs</span>
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-xs sm:text-sm lg:text-[18px] text-[#0d0029] tracking-tight leading-[1.4]">
          Cite cocktails and long drinks as their drink of choice.
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-[8px] sm:text-[9px] lg:text-[9.6px] text-[rgba(13,0,41,0.5)] tracking-tight leading-[1.4] mt-1">
          Statista Global Consumer Survey, 2023
        </p>
      </div>

      {/* 43% */}
      <div className="flex flex-col gap-0.5 lg:gap-[2.4px]">
        <p className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl lg:text-[57.6px] text-[#0d0029] leading-[1.2] tracking-tight">
          43%
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-xs sm:text-sm lg:text-[18px] text-[#0d0029] tracking-tight leading-[1.4]">
          of 18-35yr olds take a picture of their cocktail &amp; post it to social media
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-[8px] sm:text-[9px] lg:text-[9.6px] text-[rgba(13,0,41,0.5)] tracking-tight leading-[1.4] mt-1">
          Bidfood Food &amp; Drink Trends 2024
        </p>
      </div>

      {/* 35% */}
      <div className="flex flex-col gap-0.5 lg:gap-[2.4px]">
        <p className="font-[family-name:var(--font-poppins)] font-semibold text-3xl sm:text-4xl lg:text-[57.6px] text-[#3d863b] leading-[1.2] tracking-tight">
          35%
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-xs sm:text-sm lg:text-[18px] text-[#0d0029] tracking-tight leading-[1.4]">
          Adults in the UK drink cocktails at least once a week
        </p>
        <p className="font-[family-name:var(--font-hanken)] font-normal text-[8px] sm:text-[9px] lg:text-[9.6px] text-[rgba(13,0,41,0.5)] tracking-tight leading-[1.4] mt-1">
          Bidfood Food &amp; Drink Trends 2024
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: content-hugging */}
      <div className="sm:hidden w-full bg-white rounded-2xl overflow-hidden px-6 pt-6 pb-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {lemonSlice}
          {textBlock}
        </div>
        {statsGrid}
      </div>

      {/* sm+: 16:9 Card with two-column layout */}
      <Card bg="#ffffff" className="hidden sm:block">
        <div className="absolute inset-0 px-10 md:px-12 lg:px-[72px] py-8 md:py-10 lg:py-[72px] grid grid-cols-12 gap-4 md:gap-6">
          {/* Left column: lemon slice + text */}
          <div className="col-span-5 flex flex-col justify-center gap-4 lg:gap-[28.8px]">
            {lemonSlice}
            {textBlock}
          </div>
          {/* Right column: stats 2×2 grid */}
          <div className="col-span-7 flex items-center">
            {statsGrid}
          </div>
        </div>
        <p className="absolute bottom-[4%] left-[6.25%] font-[family-name:var(--font-hanken)] font-normal text-[9px] md:text-[10px] lg:text-[12px] text-[rgba(13,0,41,0.2)] tracking-tight leading-[1.4]">
          ©Voulez Vous 2025
        </p>
      </Card>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Image-based sections (still screenshot, queued for later native build)
   ───────────────────────────────────────────────────────────── */

function ImageSection({
  src,
  alt,
  w,
  h,
  priority = false,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  priority?: boolean;
}) {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="w-full h-auto block"
        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1152px"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function VoulezVousPage() {
  return (
    <>
      <NavHeader bg="#0a0021" />

      <main className="bg-[#0d0029]">
        <div className="max-w-[1152px] mx-auto px-3 sm:px-6 pt-6 sm:pt-12 pb-20 sm:pb-28 flex flex-col gap-3 sm:gap-16">
          <S1Cover />
          <S2Intro />
          <S3Team />
          <S4Mission />
          <S5Scanner />
          <S6Database />
          <S7Recipe />

          <S8Problem />

          <S9MarketTrend />
          <S10ReAffirming />

          {/* Section 11 — built natively */}
          <S11TargetAudience />

          {/* Sections 12-21 (screenshots; queued for native rebuild) */}
          <ImageSection src="/vv/s12.png" alt="Discovery — Archetypes" w={1152} h={648} />
          <ImageSection src="/vv/s13.png" alt="Task Analysis" w={1152} h={648} />
          <ImageSection src="/vv/s14.png" alt="Key Flows" w={1152} h={648} />
          <ImageSection src="/vv/s15.png" alt="Ideation" w={1152} h={648} />
          <ImageSection src="/vv/s16.png" alt="Scanning a Bottle — V1" w={1152} h={648} />
          <ImageSection src="/vv/s17.png" alt="Scanning a Bottle — V2" w={1152} h={648} />
          <ImageSection src="/vv/s18.png" alt="Scanner Usability Testing" w={1152} h={648} />
          <ImageSection src="/vv/s19.png" alt="Scanner Redundancy" w={1152} h={648} />
          <ImageSection src="/vv/s20.png" alt="Usability Testing" w={1152} h={648} />
          <ImageSection src="/vv/s21.png" alt="Refining the Scanner UI" w={1152} h={648} />
          <ImageSection src="/vv/s22.png" alt="Design Language — Colour Palette" w={1152} h={648} />
          <ImageSection src="/vv/s23.png" alt="Design Language — Type Scale" w={1152} h={648} />
          <ImageSection src="/vv/s24.png" alt="Design Language — App Icon Sets" w={1152} h={648} />

          <S25Logos />

          <ImageSection src="/vv/s26.png" alt="Design Language — Motifs" w={1152} h={648} />
          <ImageSection src="/vv/s27.png" alt="Design Language — Badges" w={1152} h={648} />
          <ImageSection src="/vv/s28.png" alt="Design Language — Components" w={1152} h={648} />
          <ImageSection src="/vv/s29.png" alt="Drinks Cards" w={1152} h={648} />
          <ImageSection src="/vv/s30.png" alt="Key Takeaways" w={1152} h={648} />

          <S31SignUp />
        </div>
      </main>

      <CaseStudyFooter />
    </>
  );
}

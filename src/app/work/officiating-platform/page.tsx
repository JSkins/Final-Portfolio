import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import PlayOnceVideo from "@/components/PlayOnceVideo";
import VideoOnView from "@/components/VideoOnView";

/* ─────────────────────────────────────────────────────────────────────────────
   Design tokens
   ─────────────────────────────────────────────────────────────────────────── */
const ACCENT   = "#F4C440"; // Hawk-Eye yellow
const BG       = "#0b0b0b";
const SURFACE  = "#141414";
const MUTED    = "#929296";
const WHITE    = "#fdfcfc";

/* ─────────────────────────────────────────────────────────────────────────────
   Primitives
   ─────────────────────────────────────────────────────────────────────────── */

function Meta({ children }: { children: string }) {
  return (
    <span className="font-['Manrope'] font-light text-sm lg:text-[18px] leading-[1.48]"
          style={{ color: MUTED }}>
      {children}
    </span>
  );
}

function Dot() {
  return <span className="mx-2 sm:mx-3" style={{ color: MUTED }}>·</span>;
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-['Manrope'] font-semibold text-xs sm:text-sm tracking-[0.08em] uppercase mb-3 sm:mb-4"
       style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

function H2({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <h2 className={`font-['Public_Sans'] font-semibold text-white tracking-tight leading-[1.15]
      ${large ? "text-2xl sm:text-3xl lg:text-[38px]" : "text-xl sm:text-2xl lg:text-[28px]"}`}>
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-['Manrope'] font-light text-sm sm:text-base lg:text-[18px] leading-[1.6] ${className}`}
       style={{ color: MUTED }}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-0 border-t border-white/10" />;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <p className="font-['Public_Sans'] font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
         style={{ color: ACCENT }}>
        {value}
      </p>
      <Body>{label}</Body>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full font-['Manrope'] font-light text-xs sm:text-sm"
          style={{ border: `1px solid ${MUTED}30`, color: MUTED }}>
      {children}
    </span>
  );
}

function ProcessItem({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <p className="font-['Manrope'] font-light text-sm shrink-0 pt-0.5" style={{ color: ACCENT }}>
        {n}
      </p>
      <div className="flex flex-col gap-1.5">
        <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white leading-[1.3]">{title}</p>
        <Body>{body}</Body>
      </div>
    </div>
  );
}

function Callout({ title, body, className = "" }: { title: string; body: string; className?: string }) {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${className}`} style={{ backgroundColor: "#1a1a1a", border: "1px solid #ffffff14" }}>
      <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white mb-2 leading-[1.3]">{title}</p>
      <Body>{body}</Body>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────────────────────────────────── */

export default function OfficiatingPlatformPage() {
  return (
    <div style={{ backgroundColor: BG }} className="min-h-screen">
      <NavHeader bg={BG} />

      {/* ── Hero Header ── */}
      <section className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">

          {/* Left: meta + title + description */}
          <div className="flex flex-col gap-4 sm:gap-5 max-w-[700px]">
            <div className="flex flex-wrap items-center gap-x-0">
              <Meta>Hawk-Eye Innovations</Meta>
              <Dot />
              <Meta>2025</Meta>
              <Dot />
              <Meta>Lead Product Designer</Meta>
            </div>
            <h1 className="font-['Public_Sans'] font-semibold text-3xl sm:text-4xl lg:text-[52px]
                           text-white tracking-tight leading-[1.1]">
              Officiating Platform
            </h1>
            <Body className="max-w-[600px]">
              Automating Tennis Line Calling &amp; Supporting Tennis Review Officials to make
              the right decision in an instant.
            </Body>
          </div>

          {/* Right: team */}
          <div className="flex flex-col gap-2 lg:text-right shrink-0">
            <p className="font-['Manrope'] font-semibold text-xs sm:text-sm tracking-wide uppercase"
               style={{ color: ACCENT }}>
              The team
            </p>
            <Body>
              <a href="https://www.linkedin.com/in/will-fulwood/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors">
                William Fulwood, Product Manager
              </a>
            </Body>
            <Body>James Skinner, Product Designer</Body>
            <Body>+4 ML, FE &amp; BE Developers</Body>
          </div>
        </div>
      </section>

      {/* ── Hero Video ── */}
      <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] rounded-2xl overflow-hidden"
             style={{ backgroundColor: "#636363" }}>
          <VideoOnView
            src="/he-bounce.mp4"
            muted
            controls
            loop={false}
            className="object-cover"
          />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-0 py-14 sm:py-20 lg:py-24 flex flex-col gap-10 lg:gap-20">

        {/* ── Project Overview ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Challenge */}
          <div className="flex flex-col gap-4">
            <SectionLabel>The Challenge</SectionLabel>
            <H2>Fault!</H2>
            <Body>
              As part of general routine maintenance to Hawk-Eye&apos;s Tennis App suite, and with
              the addition of some new extended capabilities (data science advancement &amp; data viz),
              the project tasked us to consolidate our legacy tracking apps and merge them into a
              single usable piece of software for external users (Review Officials) to use.
            </Body>
            <Body>
              Indirectly, the app has dramatically bolstered fans&apos; experience!
            </Body>
          </div>
          {/* Aims + Details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <SectionLabel>Project Aims</SectionLabel>
              <Body>
                To reduce the training time for new users to become proficient with our products
                &amp; reduce the number of HEI operators on site. Leaning towards a SaaS product,
                there was a huge emphasis on UX.
              </Body>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-['Manrope'] font-semibold text-xs sm:text-sm text-white">What</p>
                <Body>External on-site Tennis officiating software for touch-screen &amp; PC devices.</Body>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-['Manrope'] font-semibold text-xs sm:text-sm text-white">Timeline</p>
                <Body>Nov 2023–Jan 2024 (3 months)</Body>
                <Body>Deadline: Australian Open 2024</Body>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Results & Impact ── */}
        <div className="flex flex-col gap-10 sm:gap-12">
          <div>
            <SectionLabel>Results &amp; Impact</SectionLabel>
            <H2 large>Project Impacts</H2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <Stat value="×2" label="Fewer Hawk-Eye operators required per court, per tournament — directly reducing operational head count in the Tennis Department." />
            <Stat value="×2" label="Legacy apps made redundant. By consolidating, we now have 1 app — eliminating two apps that previously required continuous maintenance." />
            <Stat value="Instant validation" label="Players, Coaches, Fans &amp; Umpires can now instantly see whether the ball was in or out &amp; by how much." />
            <Stat value="AO" label="Shipped in time for Australian Open 2024 — the app is now used at all major global Tennis events for officiating purposes." />
          </div>
        </div>

        <Divider />

        {/* ── Feature: Close Calls ── */}
        <div className="flex flex-col gap-8 sm:gap-10">

          {/* Close Calls text */}
          <div className="flex flex-col gap-4 max-w-[700px]">
            <SectionLabel>Fan Engagement</SectionLabel>
            <H2>Close Calls: Bolstering Fan Engagement</H2>
            <Body>
              Fans, Players &amp; Umpires can now see close call replays instantly after a
              controversial bounce. The app enables a front-end UI that automatically triggers
              replay footage the moment a close call is detected — no operator intervention needed.
            </Body>
          </div>

          {/* Close Calls video — same container style as hero */}
          <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] rounded-2xl overflow-hidden"
               style={{ backgroundColor: "#636363" }}>
            <video
              src="/he-auto-close-call.mp4"
              autoPlay loop playsInline controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Foot-Faults text */}
          <div className="flex flex-col gap-4 max-w-[700px]">
            <SectionLabel>Line Calling</SectionLabel>
            <H2>Calling Foot-Faults</H2>
            <Body>
              More Foot-Faults have been called than ever before. Umpires can now call Foot-Faults
              with confidence. Before, Foot-Fault cameras were poorly integrated — now the workflow
              is seamless.
            </Body>
          </div>

          {/* Calling a Foot-Fault video — play once, hero container style */}
          <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] rounded-2xl overflow-hidden"
               style={{ backgroundColor: "#636363" }}>
            <PlayOnceVideo
              src="/he-footfault.mp4"
              muted={false}
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* What is a Foot-Fault? callout */}
          <Callout
            title="What is a Foot-Fault?"
            body="In tennis, players can't step over the baseline or middle service line during their serve motion before hitting the ball. This rule is notoriously difficult to enforce without automated tracking."
            className="max-w-[552px]"
          />
        </div>

        <Divider />

        {/* ── Process: Legacy Tech ── */}
        <div className="flex flex-col gap-8">
          <div>
            <SectionLabel>Process</SectionLabel>
            <H2>Our Problems Faced with Legacy Tech</H2>
          </div>
          <div className="flex flex-col gap-6 max-w-[752px]">
            <ProcessItem n="01" title="Too many apps"
              body="There were at least 5 apps. Operators had to juggle them when working on-site. Events typically had 6–8 outputting feeds too." />
            <ProcessItem n="02" title="Dated GUIs"
              body="The complex GUIs dramatically affected the time needed to train new tennis operators. Workflows were non-intuitive and error-prone." />
            <ProcessItem n="03" title="Rising costs"
              body="Inefficiencies &amp; locally hosted technology meant the company was becoming more expensive than competitors. Change was needed." />
          </div>
        </div>

        {/* Image + Summary callout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden lg:col-span-2"
               style={{ backgroundColor: "#636363" }}>
            <Image
              src="/he-legacy-problems.png"
              alt="Legacy technology problems at Hawk-Eye"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-full rounded-2xl p-5 sm:p-6" style={{ backgroundColor: "#1a1a1a", border: "1px solid #ffffff14" }}>
            <p className="font-['Manrope'] font-semibold text-xs sm:text-sm text-white mb-3 uppercase tracking-wider">
              Summary of Tennis Department demands
            </p>
            <div className="flex flex-col gap-1.5">
              {[
                "For touchscreen native devices.",
                "For Review Officials, not expert operators.",
                "Simplified UI — operable by new users who may know little about tennis.",
                "\"Ohh and…. need to be able to call Footfaults & Review video!\"",
              ].map((item) => (
                <div key={item} className="flex gap-2.5 items-start">
                  <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full"
                        style={{ backgroundColor: ACCENT }} />
                  <Body>{item}</Body>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Process: Consolidating an MVP ── */}
        <div className="flex flex-col gap-4 max-w-[552px]">
          <div>
            <SectionLabel>Process</SectionLabel>
            <H2>Consolidating an MVP</H2>
          </div>
          <Body>
            In a previous project, the squad and I had designed an app that allowed specialist
            Hawk-Eye Tennis Operators to select a bounce and review it. The initial Bounce Vis
            app was designed for our HEI Ops, not for Review Officials (ROs). The Tennis RO
            app ultimately was a redesign for a different user.
          </Body>
        </div>

        <Divider />

        {/* ── Review Official Role ── */}
        <div className="flex flex-col gap-8 sm:gap-10">
          <div>
            <SectionLabel>Process</SectionLabel>
            <H2>The Role of a Review Official (RO)</H2>
            <Body className="mt-4 max-w-[600px]">
              We needed to agree on what we expected Tennis ROs to do and what was beyond their
              job description.
            </Body>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm text-white">Review Officials will:</p>
              <div className="flex flex-col gap-2">
                {[
                  "Officiate on line calling (albeit automated)",
                  "Close calls are automated — ROs cancel the review to court if unnecessary",
                  "Check tracking health",
                  "Confirm the system called the ball in the correct service box",
                  "In the event of an error, call HEI Op over for help & flag error",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 items-start">
                    <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full"
                          style={{ backgroundColor: ACCENT }} />
                    <Body>{item}</Body>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm text-white">Officiate on:</p>
              <div className="flex flex-col gap-2">
                {[
                  "Foot Faults via camera feed",
                  "Video review: Double bounces, Touching of Net",
                  "Worst case: Stops play & continuously updates chair umpire",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 items-start">
                    <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full"
                          style={{ backgroundColor: ACCENT }} />
                    <Body>{item}</Body>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Testing & Iterations ── */}
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-8">
            <SectionLabel>Process — Testing, Testing, 1, 2, 3…</SectionLabel>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden" style={{ backgroundColor: "#1F2125" }}>
              <Image src="/he-ro-testing-session.png" alt="RO Testing session" fill className="object-contain" unoptimized />
            </div>
            <div className="flex flex-col gap-4 max-w-[552px]">
              <H2>Iterating &amp; Validating</H2>
              <Body>
                We met stakeholders weekly to constantly review our design decisions. We conducted
                remote feedback sessions where we were able to rapidly validate and iterate.
              </Body>
              <Body>
                When we were satisfied with the app, I built a prototype to conduct an unmoderated
                usability test against ROs.
              </Body>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image src="/he-early-draft-wireframe.jpg" alt="Early draft wireframe sketch" fill className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col gap-3 max-w-[552px]">
              <p className="font-['Manrope'] font-semibold text-sm text-white">Early Draft — Failing Early</p>
              <Body>
                After a couple of weeks we presented the draft to stakeholders. The Officiating
                screen was heavily scrutinised — it seemed we had overlooked the needs of the RO
                during the design process.
              </Body>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 lg:max-w-[552px]" style={{ backgroundColor: "#1a1a1a", border: `1px solid ${ACCENT}30` }}>
              <p className="font-['Manrope'] font-semibold text-xs sm:text-sm mb-3"
                 style={{ color: ACCENT }}>
                Stakeholder Feedback
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Simplify the left panel — too much complexity for ROs to handle.",
                  "Foot-Fault cameras are too small.",
                  "Can we use the empty space on the screen better?",
                  "How Might We… make decisions more clear & obvious?",
                ].map((item) => (
                  <div key={item} className="flex gap-2.5 items-start">
                    <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full"
                          style={{ backgroundColor: ACCENT }} />
                    <Body>{item}</Body>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Callout
              title="Establishing an Alert Hierarchy"
              body="It was evident from testing that not all notifications should be treated in the same hierarchy. Some alerts require immediate user attention, whereas others are informational — giving user feedback that an event has occurred."
            />
            <Callout
              title="Consistent App Behaviours"
              body="I worked closely with the product manager to genericise a consistent app behaviour through all possible scenarios. The flow below is the app at its most complex — playing out a manually triggered replay."
            />
          </div>
        </div>

        <Divider />

        {/* ── Court Graphic Improvement ── */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div>
            <SectionLabel>Process — Iterations from User Testing</SectionLabel>
            <H2>Before &amp; Afters: Court Graphic</H2>
          </div>
          <Body className="max-w-[600px]">
            For added clarity, Review Officials wanted to know the court perspective they were
            looking at (i.e. at what end the event occurred). I determined a way — without adding
            too much noise — to add an umpire&apos;s region. Service bounces were also marked with
            an &ldquo;S&rdquo; to quickly differentiate from other bounces, improving navigation.
          </Body>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "Before", src: "/he-before-court.svg" },
              { label: "After",  src: "/he-after-court.svg" },
            ].map(({ label, src }) => (
              <div key={label} className="flex flex-col gap-3">
                <p className="font-['Manrope'] font-semibold text-xs sm:text-sm"
                   style={{ color: MUTED }}>{label}</p>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
                     style={{ backgroundColor: "#101010", border: "1px solid #ffffff14" }}>
                  <Image src={src} alt={`${label} court graphic`}
                         fill className="object-contain opacity-60" unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Summary ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 lg:py-20">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <SectionLabel>Summary</SectionLabel>
            <H2>Key Takeaways</H2>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white leading-[1.3]">
                Working in an Agile environment
              </p>
              <Body>
                I worked in collaboration with many stakeholders to develop the product. I had to
                find the balance between feedback &amp; too much feedback that hindered our
                progress. Gathering feedback at a regular cadence was key to the project&apos;s
                success.
              </Body>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white leading-[1.3]">
                I&apos;m now a bigger tennis fan!
              </p>
              <Body>
                The granularity required for this project gave me access to test &amp; interview
                some very cool tennis figures, which has only fuelled my love for the sport.
              </Body>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white leading-[1.3]">
                What Next
              </p>
              <Body>
                To what extent will this app disrupt the professional game? Only time will tell for
                the long-term impact this technology will have on the sport. We&apos;ve now seen
                the removal of all lines officials from court.
              </Body>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-['Manrope'] font-semibold text-sm sm:text-base text-white leading-[1.3]">
                Retrospective
              </p>
              <Body>
                We had a short retrospective to celebrate the project successes. Now, we&apos;re
                onto the next product…!
              </Body>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 sm:mt-12">
          {["Research", "Fusing legacy systems", "SaaS", "Tennis Tech", "Australian Open 2024",
            "Usability Testing", "Agile"].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

      </div>

      <CaseStudyFooter />
    </div>
  );
}

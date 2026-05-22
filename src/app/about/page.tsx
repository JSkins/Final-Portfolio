import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import GifOnce from "@/components/GifOnce";

// TODO: Replace with permanent image — Figma asset URL expires after ~7 days
const PHOTO_SRC = "https://www.figma.com/api/mcp/asset/aae6780d-a524-45f6-a737-fd85560b1859";

const skills = [
  "Product Design",
  "Research",
  "Design Systems",
  "Prototyping",
  "Branding",
];

export default function AboutPage() {
  return (
    <>
      <NavHeader />

      <main className="flex flex-col flex-1">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 pt-12 pb-[140px] flex flex-col gap-16">

          {/* ── Bio ── */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20 lg:min-h-[calc(100vh-76px)] lg:pb-10">

            {/* Portrait — fixed 480px tall, full-width on mobile/tablet, 420px wide on desktop */}
            <div className="w-full h-[480px] lg:w-[420px] lg:max-h-[480px] relative rounded-3xl overflow-hidden shrink-0 bg-[#1a1a1a]">
              {/* gifDurationMs — set this to the actual GIF loop length in ms */}
              <GifOnce
                src={PHOTO_SRC}
                alt="James Skinner"
                gifDurationMs={4000}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6 lg:flex-1">
              <h1 className="font-['Manrope'] font-semibold text-[40px] md:text-[48px] text-white leading-[1.4]">
                Hello! I&apos;m James
              </h1>
              <div className="flex flex-col gap-4 font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                <p>
                  I am helping build Moneybox&apos;s acclaimed investing proposition and
                  payments infrastructure, serving over 2 million active users. I am a
                  data-driven problem solver with a strong work ethos, leveraging diverse
                  design experience across digital products, architecture, and graphics to
                  distils complex challenges into intuitive interfaces. Proven built mobile
                  &amp; web experience across FinTech. SportTech, AR/VR, and D2C consumer apps.
                </p>
                <p>
                  I move between research, direction, and prototyping, using building to
                  create clarity and move ideas forward with conviction. My work is driven by
                  my passion, curiosity and creative thinking to push boundaries within a
                  project.
                </p>
                <p>
                  Outside of work, I am a big runner. I&apos;ve recently completed{" "}
                  <a
                    href="https://www.greenrockevents.com/gu36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-2 hover:text-[#929296] transition-colors duration-150"
                  >
                    GU36
                  </a>
                  !
                </p>
                <p>
                  I&apos;m looking for my next chapter, and so here&apos;s a bit more about
                  my story so far.
                </p>
              </div>
            </div>
          </div>

          {/* ── What I do ── */}
          <div className="flex flex-col gap-6">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              What I do
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#929296] rounded-full px-5 py-2 font-['Public_Sans'] font-light text-[20px] lg:text-[28px] text-[#929296] leading-[1.4] whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Map — "Working from London" ── */}
          <div className="w-full aspect-[1152/708] relative rounded-2xl overflow-hidden">
            {/* Background map */}
            <Image
              src="/wf-london.jpg"
              alt="Map of Europe — Working from London"
              fill
              className="object-cover"
              unoptimized
            />

            {/* Overlay — hidden on mobile, visible sm+ */}
            <div className="hidden sm:block">

              {/* Cursor pin */}
              <div className="absolute" style={{ left: "45.83%", top: "50.28%" }}>
                <svg
                  width="17" height="20"
                  viewBox="0 0 21.9573 24.3789"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "scaleY(-1)" }}
                >
                  <path
                    d="M1.35444 3.18758C1.15337 1.90099 2.48307 0.944113 3.62495 1.49617L3.7353 1.55476L19.8164 10.8321C21.1825 11.6207 20.7028 13.6734 19.1767 13.8341C18.3084 13.9255 16.8904 14.1148 15.4277 14.4727C13.936 14.8378 12.5337 15.3476 11.6035 16.0147C10.7172 16.6504 9.83338 17.7347 9.04975 18.9454C8.28046 20.134 7.67259 21.3403 7.30854 22.1192C6.96264 22.8593 6.21644 23.1099 5.63178 23.0333C5.04354 22.956 4.37483 22.5131 4.24604 21.6895L1.35444 3.18758Z"
                    fill="#141414" stroke="#F3F3F6" strokeWidth="2.66667"
                  />
                </svg>
              </div>

              {/* Orange location dot */}
              <div
                className="absolute size-[4px] rounded-full bg-[#f5b73d]"
                style={{ left: "45.31%", top: "53.67%" }}
              />

              {/* "Working from London" label */}
              <div className="absolute" style={{ left: "46.96%", top: "40.68%" }}>
                <div className="flex items-center gap-3 lg:gap-5 bg-[#141414] border border-[#e9e9e9] pl-2 pr-4 py-2 lg:pr-5 rounded-l-full rounded-tr-[20px] rounded-br-[20px] lg:rounded-tr-[24px] lg:rounded-br-[24px]">
                  <div className="relative size-9 lg:size-[52px] rounded-full overflow-hidden shrink-0">
                    <Image src="/js-avatar.jpg" alt="James Skinner" fill className="object-cover" unoptimized />
                  </div>
                  <span className="font-['Public_Sans'] font-light text-white whitespace-nowrap leading-[1.4] text-sm md:text-lg lg:text-2xl xl:text-[28px]">
                    Working from London
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

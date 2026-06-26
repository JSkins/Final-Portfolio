import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import GifOnce from "@/components/GifOnce";

const PHOTO_SRC = "/about-gif.gif";

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
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:min-h-[600px]">

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
              <h1 className="font-['Manrope'] font-semibold text-[40px] md:text-[48px] text-white leading-[1.28]">
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
                    className="text-white hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors duration-150"
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

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

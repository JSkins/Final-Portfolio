import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import CaseStudyFooter from "@/components/CaseStudyFooter";

export default function VoulezVousPage() {
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
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Freelance</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">2025</span>
                <span className="size-[4px] rounded-full bg-[#929296] shrink-0" />
                <span className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">Co-Founder, Product Designer</span>
              </div>
              <h1 className="font-['Manrope'] font-semibold text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Voulez Vous
              </h1>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                A short two-week design sprint for a job interview blossomed into the launch of a mobile app for iOS and Android. Voulez Vous is a drinks guide that empowers people at home to become pro bartenders with what they already have in the cupboard.
              </p>
            </div>

            {/* Col 2 — The team */}
            <div className="flex flex-col gap-3 lg:items-end shrink-0">
              <p className="font-['Public_Sans'] font-semibold text-2xl text-white leading-[1.4] tracking-[-0.02em]">
                The team
              </p>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                James Skinner — Co-Founder, Product Designer
              </p>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                Sebastian Prentice — Co-Founder, Engineer
              </p>
              <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] lg:text-right">
                Cooper Smith — Software Engineer
              </p>
            </div>
          </div>

          {/* ── Hero image ── */}
          <div className="w-full h-[194px] sm:h-[400px] lg:h-[648px] rounded-xl overflow-hidden relative bg-[#0d0029] flex items-center justify-center">
            <Image
              src="/vv-hero2.jpg"
              alt="Voulez Vous — Sweet Manhattan cocktail"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* ── Our Mission ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Our Mission
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              We want to become the first-to-mind drinks resource that empowers people at home to become pro bartenders with what they have in the cupboard. From scanning a bottle of Gordon's to unlocking a world of cocktail recipes — Voulez Vous bridges the gap between your home bar and a professional one.
            </p>
          </div>

          {/* ── Feature: The Scanner ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Discover what drink you can make, with what you have at home
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              Simply scan your ingredients and the app will curate a series of recipes you can enjoy — complete with simple to follow recipes and tutorials. We began by sketching the core scanner journey across three key tasks before testing with real users.
            </p>
          </div>

          {/* ── 3-col: Scanner wireframe sketches ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden relative bg-white">
              <Image
                src="/vv-scanner-1.jpg"
                alt="Scanner wireframe sketches — task flow"
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden relative bg-white">
              <Image
                src="/vv-scanner-2.jpg"
                alt="Scanner wireframe sketches — iteration 2"
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden relative bg-white">
              <Image
                src="/vv-scanner-3.jpg"
                alt="Scanner wireframe sketches — iteration 3"
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
          </div>

          {/* ── Feature: The Database ── */}
          <div className="flex flex-col gap-6 lg:max-w-[552px]">
            <h2 className="font-['Manrope'] font-semibold text-[28px] lg:text-[32px] text-white leading-[1.4]">
              Explore one of the world's largest cocktail databases
            </h2>
            <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
              Search for any drink you can think of — we've got you covered. From classics like Negronis and Moscow Mules to hidden gems, the database surfaces curated recipes matched to your home bar. Users can also discover where to buy products at the best price.
            </p>
          </div>

          {/* ── 2-col: App screens ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
            <div className="w-full h-[405px] lg:h-[648px] rounded-xl overflow-hidden relative bg-[#f2f1f1]">
              <Image
                src="/vv-drinks.jpg"
                alt="Voulez Vous drinks database"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="w-full h-[405px] lg:h-[648px] rounded-xl overflow-hidden relative bg-[#f2f1f1]">
              <Image
                src="/vv-app-1.jpg"
                alt="Scanning a bottle with Voulez Vous"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

        </div>
      </main>

      <CaseStudyFooter />
    </>
  );
}

import NavHeader from "@/components/NavHeader";
import Bio from "@/components/Bio";
import ProjectCarousel from "@/components/ProjectCarousel";
import References from "@/components/References";
import SpotifyWidget from "@/components/SpotifyWidget";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { carousels } from "@/content";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <NavHeader />

      <main className="flex flex-col flex-1">
        {/* ── Main content ── */}
        {/* px: 24px mobile → 104px tablet → 152px laptop → 64px desktop (capped by max-w-[1280px]) */}
        {/* gap: 48px up to xl, 64px at xl+ — matches Figma section gaps at every breakpoint */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-[104px] lg:px-[152px] xl:px-16 sm:py-10 flex flex-col gap-16 xl:gap-20">

          {/* Bio / About */}
          <Bio />

          {/* Carousel sections */}
          <div id="work" className="flex flex-col gap-16 xl:gap-20">
            {carousels.map((section) => (
              <ProjectCarousel key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* References — 80 px top gap matches Section frame in Figma */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-[104px] lg:px-[152px] xl:px-16 pt-20 pb-16">
          <References />
        </div>
      </main>

      <SpotifyWidget />
      <Footer />
    </>
  );
}

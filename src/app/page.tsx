import NavHeader from "@/components/NavHeader";
import ProjectCarousel from "@/components/ProjectCarousel";
import References from "@/components/References";
import Footer from "@/components/Footer";
import { carousels } from "@/content";

export default function Home() {
  return (
    <>
      <NavHeader />

      <main id="work" className="flex flex-col flex-1">
        {/* Carousel sections */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 flex flex-col gap-24 py-[140px]">
          {carousels.map((section) => (
            <ProjectCarousel key={section.id} section={section} />
          ))}
        </div>

        {/* References */}
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-16 pb-20">
          <References />
        </div>
      </main>

      <Footer />
    </>
  );
}

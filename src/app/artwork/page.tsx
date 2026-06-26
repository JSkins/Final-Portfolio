import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

const ROW1_LEFT  = "/artwork/old-man-sketch.jpg";
const ROW1_RIGHT = "/artwork/garden-watercolour.jpg";
const ROW2_LEFT  = "/artwork/house-watercolour.png";
const ROW3_LEFT  = "/artwork/landscape-painting.png";
const ROW3_RIGHT = "/artwork/oh-pretty-woman.png";
const ROW4_LEFT  = "/artwork/second-wave.jpg";
const ROW4_RIGHT = "/artwork/hand-sketch.png";
const ROW5_LEFT  = "/artwork/two-children.jpg";
const ROW5_RIGHT = "/artwork/london-building-sketch.png";
const ROW6_LEFT  = "/artwork/black-labrador.png";
const ROW6_RIGHT = "/artwork/vineyard-sketch.jpg";
const ROW7_LEFT  = "/artwork/megaphone-illustration.png";
const ROW7_RIGHT = "/artwork/circular-design-system.jpg";
const ROW8_VIDEO = "/artwork/man-wine-glass.mp4";
const ROW9_LEFT  = "/artwork/life-mirror.png";
const ROW9_RIGHT = "/artwork/limpets.png";
const ROW10_RIGHT = "/artwork/my-light-joshy.jpg";
const ROW11_LEFT  = "/artwork/swirl-twil.jpg";

export default function ArtworkPage() {
  return (
    <>
      <NavHeader />

      <main className="flex flex-col flex-1">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-[104px] lg:px-[152px] xl:px-16 pb-20 flex flex-col gap-16">

          {/* ── Header ── */}
          {/* Mobile: Col-2 on top, title below — Desktop: title left, Col-2 right */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-end gap-8">

            {/* Title + pills */}
            <div className="flex flex-col gap-6 lg:flex-1">
              <h1 className="font-['Manrope'] font-semibold text-[40px] lg:text-[48px] text-white leading-[1.4]">
                Some of my artwork through the years
              </h1>
              <div className="flex flex-wrap gap-2">
                {["Painting", "Illustration", "Photography"].map((pill) => (
                  <span
                    key={pill}
                    className="border border-[#929296] rounded-full px-4 py-1 font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px] whitespace-nowrap"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Col-2 — placeholder for artwork hero image */}
            <div className="w-full aspect-square lg:w-[420px] lg:h-[672px] lg:aspect-auto shrink-0" />
          </div>

          {/* ── Artwork grid ── */}
          <div className="flex flex-col gap-10 lg:gap-16">

            {/* Row 1: Old man sketch (fixed 384 px) | Garden watercolour (flex-1) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[4/5] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[480px] rounded-[20px] overflow-hidden">
                <Image src={ROW1_LEFT} alt="Old man sketch" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW1_RIGHT} alt="Garden watercolour" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 2: House watercolour (flex-1) | Empty placeholder */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW2_LEFT} alt="House watercolour" fill className="object-cover" unoptimized />
              </div>
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
            </div>

            {/* Row 3: Landscape painting (flex-1) | Strawberry print (fixed 384 px) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW3_LEFT} alt="Landscape painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[4/5] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW3_RIGHT} alt="Oh Pretty Woman — strawberry print" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 4: Second wave | Hand sketch (flex-1) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[3/2] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[480px] rounded-[20px] overflow-hidden">
                <Image src={ROW4_LEFT} alt="Second wave" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW4_RIGHT} alt="Hand sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 5: Two children mixed media | London building sketch (equal 50/50) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[4/5] lg:flex-1 lg:aspect-auto lg:h-[745px] rounded-[20px] overflow-hidden">
                <Image src={ROW5_LEFT} alt="Two children, mixed media painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/4] lg:flex-1 lg:aspect-auto lg:h-[745px] rounded-[20px] overflow-hidden">
                <Image src={ROW5_RIGHT} alt="London building sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 6: Black Labrador painting | Vineyard sketch (equal 50/50) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[5/7] lg:flex-1 lg:aspect-auto lg:h-[798px] rounded-[20px] overflow-hidden">
                <Image src={ROW6_LEFT} alt="Black Labrador, mixed media painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[5/7] lg:flex-1 lg:aspect-auto lg:h-[798px] rounded-[20px] overflow-hidden">
                <Image src={ROW6_RIGHT} alt="Vineyard sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 7: Megaphone illustration | Empty | Circular Design book (3 cols) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[4/5] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden bg-[#F2F2F2]">
                <Image src={ROW7_LEFT} alt="Megaphone illustration" fill className="object-contain" unoptimized />
              </div>
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
              <div className="relative w-full aspect-[5/7] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden bg-[#D6D3CA]">
                <Image src={ROW9_LEFT} alt="Life mirror, charcoal figure study" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 8: Empty placeholder | Man with wine glass (video) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <video
                  src={ROW8_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Row 9: Circular Design book (flex-1) | Limpets (fixed 384px) */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-[4/5] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden bg-[#49A077]">
                <Image src={ROW7_RIGHT} alt="Circular Design Systems book cover" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[9/10] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden bg-[#F2F2F2]">
                <Image src={ROW9_RIGHT} alt="Limpet shells sketch" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 10: Empty placeholder | My Light Joshy illustration */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
              <div className="relative w-full aspect-[3/4] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden bg-white">
                <Image src={ROW10_RIGHT} alt="My Light Joshy, light bulb illustration" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 11: Swirl illustration | Empty */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <div className="relative w-full aspect-square lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW11_LEFT} alt="Swirl pattern illustration" fill className="object-cover" unoptimized />
              </div>
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

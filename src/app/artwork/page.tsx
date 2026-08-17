import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

const ROW1_LEFT  = "/artwork/old-man-sketch.jpg";
const ROW1_RIGHT = "/artwork/garden-watercolour.jpg";
const ROW2_LEFT  = "/artwork/white-townhouse-painting.png";
const ROW2_RIGHT = "/artwork/cream-townhouse-painting.png";
const ROW3_LEFT  = "/artwork/landscape-painting.png";
const ROW3_RIGHT = "/artwork/oh-pretty-woman.png";
const ROW4_LEFT  = "/artwork/limpets.png";
const ROW4_RIGHT = "/artwork/yorkie-portrait.png";
const ROW5_LEFT  = "/artwork/house-watercolour.png";
const ROW6_RIGHT = "/artwork/hand-sketch.png";
const ROW7_LEFT  = "/artwork/two-children.jpg";
const ROW7_RIGHT = "/artwork/london-building-sketch.png";
const ROW8_LEFT  = "/artwork/black-labrador.png";
const ROW8_RIGHT = "/artwork/vineyard-sketch.jpg";
const ROW9_LEFT  = "/artwork/megaphone-illustration.png";
const ROW9_MID   = "/artwork/circular-design-system.jpg";
const ROW10_VIDEO = "/artwork/man-wine-glass.mp4";
const ROW11_LEFT  = "/artwork/second-wave.jpg";

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
          <div className="flex flex-col gap-6 lg:gap-16">

            {/* Row 1: Old man sketch (fixed 384 px) | Garden watercolour (flex-1) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[4/5] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[480px] rounded-[20px] overflow-hidden">
                <Image src={ROW1_LEFT} alt="Old man sketch" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW1_RIGHT} alt="Garden watercolour" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 2: White townhouse painting | Cream townhouse painting (equal 50/50, wide gap) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[34px]">
              <div className="relative w-full aspect-[3/4] lg:flex-1 lg:aspect-auto lg:h-[720px] rounded-[20px] overflow-hidden">
                <Image src={ROW2_LEFT} alt="White townhouse painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[373/527] lg:flex-1 lg:aspect-auto lg:h-[720px] rounded-[20px] overflow-hidden">
                <Image src={ROW2_RIGHT} alt="Cream townhouse painting" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 3: Landscape painting (flex-1) | Strawberry print (fixed 384 px) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW3_LEFT} alt="Landscape painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[4/5] lg:w-[384px] lg:shrink-0 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW3_RIGHT} alt="Oh Pretty Woman — strawberry print" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 4: Limpets sketch (flex-1) | Yorkshire terrier portrait (fixed 483 px) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[1106/677] lg:flex-1 lg:aspect-auto lg:h-[395px] rounded-[20px] overflow-hidden bg-[#F2F2F2]">
                <Image src={ROW4_LEFT} alt="Limpet shells sketch" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[373/527] lg:w-[483px] lg:shrink-0 lg:aspect-auto lg:h-[720px] rounded-[20px] overflow-hidden">
                <Image src={ROW4_RIGHT} alt="Yorkshire terrier portrait" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 5: House watercolour (flex-1) | Empty placeholder */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW5_LEFT} alt="House watercolour" fill className="object-cover" unoptimized />
              </div>
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
            </div>

            {/* Row 6: Empty placeholder | Hand sketch (flex-1) — desktop only */}
            <div className="hidden lg:flex lg:flex-row gap-6">
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <Image src={ROW6_RIGHT} alt="Hand sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 7: Two children mixed media | London building sketch (equal 50/50) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[4/5] lg:flex-1 lg:aspect-auto lg:h-[745px] rounded-[20px] overflow-hidden">
                <Image src={ROW7_LEFT} alt="Two children, mixed media painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/4] lg:flex-1 lg:aspect-auto lg:h-[745px] rounded-[20px] overflow-hidden">
                <Image src={ROW7_RIGHT} alt="London building sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 8: Black Labrador painting | Vineyard sketch (equal 50/50) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[5/7] lg:flex-1 lg:aspect-auto lg:h-[798px] rounded-[20px] overflow-hidden">
                <Image src={ROW8_LEFT} alt="Black Labrador, mixed media painting" fill className="object-cover" unoptimized />
              </div>
              <div className="relative w-full aspect-[5/7] lg:flex-1 lg:aspect-auto lg:h-[798px] rounded-[20px] overflow-hidden">
                <Image src={ROW8_RIGHT} alt="Vineyard sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 9: Megaphone illustration | Circular Design book | Empty (3 cols) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[3/2] lg:w-[360px] lg:shrink-0 lg:aspect-auto lg:h-[450px] rounded-[20px] overflow-hidden bg-[#F2F2F2]">
                <Image src={ROW9_LEFT} alt="Megaphone illustration" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[4/5] lg:w-[360px] lg:shrink-0 lg:aspect-auto lg:h-[450px] rounded-[20px] overflow-hidden bg-[#49A077]">
                <Image src={ROW9_MID} alt="Circular Design Systems book cover" fill className="object-contain" unoptimized />
              </div>
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
            </div>

            {/* Row 10: Empty placeholder | Man with wine glass (video) */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="hidden lg:block lg:w-[384px] lg:shrink-0 lg:h-[480px]" />
              <div className="relative w-full aspect-[3/2] lg:flex-1 lg:aspect-auto lg:h-[520px] rounded-[20px] overflow-hidden">
                <video
                  src={ROW10_VIDEO}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Row 11: Second wave | Empty */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full aspect-[564/652] lg:flex-1 lg:aspect-auto lg:h-[652px] rounded-[20px] overflow-hidden">
                <Image src={ROW11_LEFT} alt="Second Wave album artwork" fill className="object-cover" unoptimized />
              </div>
              <div className="hidden lg:block lg:flex-1 lg:h-[480px]" />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

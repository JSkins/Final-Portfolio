import Image from "next/image";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

// TODO: Replace with permanent images — Figma asset URLs expire after ~7 days
const ROW1_LEFT  = "https://www.figma.com/api/mcp/asset/5ba7ba3e-f9e3-4253-852c-f9aa73f1c960"; // old man sketch
const ROW1_RIGHT = "https://www.figma.com/api/mcp/asset/282aa44a-b2b5-4e67-b4f1-e4a7bf4cb7a9"; // garden watercolour
const ROW2_LEFT  = "https://www.figma.com/api/mcp/asset/15cedf98-f72b-480e-bbfb-c56736f31bb3"; // house watercolour
const ROW3_LEFT  = "https://www.figma.com/api/mcp/asset/26afc46a-7911-4967-a6c2-02d07a720faa"; // landscape painting
const ROW3_RIGHT = "https://www.figma.com/api/mcp/asset/b5fa6799-6f54-4290-ab03-642b8f06da87"; // strawberry print
const ROW4_RIGHT = "https://www.figma.com/api/mcp/asset/214b32a1-bd21-481a-af73-f09b848fe9c9"; // hand sketch
const ROW5_LEFT  = "https://www.figma.com/api/mcp/asset/19166a4f-40c0-4484-847e-84265b203313"; // two children, mixed media
const ROW5_RIGHT = "https://www.figma.com/api/mcp/asset/31c54e3e-8e76-4a1e-8a30-d8a516994707"; // London building sketch
const ROW6_LEFT  = "https://www.figma.com/api/mcp/asset/be1c13f5-d8e6-4d92-8bb2-b1dcd1a553fa"; // black Labrador painting
const ROW6_RIGHT = "https://www.figma.com/api/mcp/asset/b70675e6-dc4b-4dbb-890f-19230e64a1f8"; // vineyard sketch
const ROW7_LEFT  = "https://www.figma.com/api/mcp/asset/51be84a7-3ec8-422b-930e-856d8a10ec67"; // megaphone illustration
const ROW7_RIGHT = "https://www.figma.com/api/mcp/asset/b1acf41c-4610-452b-9499-4bc0da951347"; // Circular Design Systems book
const ROW8_RIGHT = "https://www.figma.com/api/mcp/asset/652d3a5b-ddb5-4abb-b4aa-02335be16689"; // man with wine glass sketch

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
                Some of my Artwork through the years
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
          <div className="flex flex-col gap-16">

            {/* Row 1: Old man sketch (fixed 384 px) | Garden watercolour (flex-1) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[4/5] md:w-[384px] md:shrink-0 md:aspect-auto md:h-[480px] rounded-2xl overflow-hidden">
                <Image src={ROW1_LEFT} alt="Old man sketch" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/2] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW1_RIGHT} alt="Garden watercolour" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 2: House watercolour (flex-1) | Empty placeholder */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[3/2] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW2_LEFT} alt="House watercolour" fill className="object-contain" unoptimized />
              </div>
              <div className="hidden md:block md:w-[384px] md:shrink-0 md:h-[480px]" />
            </div>

            {/* Row 3: Landscape painting (flex-1) | Strawberry print (fixed 384 px) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[3/2] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW3_LEFT} alt="Landscape painting" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[4/5] md:w-[384px] md:shrink-0 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW3_RIGHT} alt="Oh Pretty Woman — strawberry print" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 4: Empty placeholder | Hand sketch (flex-1) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="hidden md:block md:w-[384px] md:shrink-0 md:h-[480px]" />
              <div className="relative w-full aspect-[3/2] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW4_RIGHT} alt="Hand sketch" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 5: Two children mixed media | London building sketch (equal 50/50) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[4/5] md:flex-1 md:aspect-auto md:h-[745px] rounded-2xl overflow-hidden">
                <Image src={ROW5_LEFT} alt="Two children, mixed media painting" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[3/4] md:flex-1 md:aspect-auto md:h-[745px] rounded-2xl overflow-hidden">
                <Image src={ROW5_RIGHT} alt="London building sketch" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Row 6: Black Labrador painting | Vineyard sketch (equal 50/50) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[5/7] md:flex-1 md:aspect-auto md:h-[798px] rounded-2xl overflow-hidden">
                <Image src={ROW6_LEFT} alt="Black Labrador, mixed media painting" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-full aspect-[5/7] md:flex-1 md:aspect-auto md:h-[798px] rounded-2xl overflow-hidden">
                <Image src={ROW6_RIGHT} alt="Vineyard sketch" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 7: Megaphone illustration | Empty | Circular Design book (3 cols) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full aspect-[4/5] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW7_LEFT} alt="Megaphone illustration" fill className="object-contain" unoptimized />
              </div>
              <div className="hidden md:block md:w-[384px] md:shrink-0 md:h-[480px]" />
              <div className="relative w-full aspect-[4/5] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW7_RIGHT} alt="Circular Design Systems book cover" fill className="object-contain" unoptimized />
              </div>
            </div>

            {/* Row 8: Empty placeholder | Man with wine glass sketch (flex-1) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="hidden md:block md:w-[384px] md:shrink-0 md:h-[480px]" />
              <div className="relative w-full aspect-[3/2] md:flex-1 md:aspect-auto md:h-[520px] rounded-2xl overflow-hidden">
                <Image src={ROW8_RIGHT} alt="Man with wine glass, quick sketch" fill className="object-contain" unoptimized />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

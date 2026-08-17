import Image from "next/image";

export default function Bio() {
  return (
    // Mobile/Tablet: flex-col-reverse → image visually on top, text at bottom, gap-12 (48px) per Figma
    // Laptop (lg): flex-row, items-end, gap-14 (56px), text flex-1 left + image fixed 360x511 right (per Figma)
    // Desktop (xl): gap-20 (80px), text flex-1, image fixed 480x622 (per Figma)
    <section
      id="about"
      className="flex flex-col-reverse gap-12 min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-116px)] pb-10 md:pb-20 md:justify-between lg:flex-row lg:items-end lg:gap-14 lg:justify-start xl:gap-20 xl:justify-center"
    >
      {/* Text — visually bottom on mobile/tablet, left on laptop/desktop */}
      <div className="flex flex-col gap-3 shrink-0 lg:flex-1 lg:justify-center">
        <h1 className="font-['Manrope'] font-semibold text-[28px] md:text-[40px] xl:text-[48px] text-white leading-[1.28]">
          Hello 👋 I&apos;m James, a British designer
        </h1>
        <p className="font-['Manrope'] font-normal text-[20px] xl:text-[28px] text-[#929296] leading-[1.5] text-pretty">
          If people use it, I care about it. I&apos;m currently designing enterprise products at Trainline to make travel easier.
        </p>
      </div>

      {/* Image — visually top on mobile/tablet, right on laptop/desktop */}
      {/* Corner radius 12px at every breakpoint, per Figma. Mobile fills remaining height; tablet locks to Figma's 560:424 aspect; laptop/desktop use Figma's fixed box. */}
      <div className="relative w-full flex-1 min-h-0 rounded-[12px] overflow-hidden md:aspect-[560/424] md:h-auto md:flex-none lg:aspect-auto lg:w-[360px] lg:h-[511px] xl:w-[480px] xl:h-[622px]">
        <Image
          src="/james-hero.jpg"
          alt="James Skinner"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 360px, 100vw"
          unoptimized
        />
      </div>
    </section>
  );
}

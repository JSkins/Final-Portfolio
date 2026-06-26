export default function Bio() {
  return (
    // Mobile/Tablet: flex-col-reverse → image visually on top, text at bottom
    // Laptop (lg): flex-row, items-end, gap-12 (48px), text w-[348px] left + image flex-1 right
    // Desktop (xl): same as laptop, text widens to w-[720px]
    <section
      id="about"
      className="flex flex-col-reverse min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-116px)] pb-10 md:pb-20 md:justify-between lg:flex-row lg:items-end lg:gap-12 lg:justify-start xl:justify-center"
    >
      {/* Text — visually bottom on mobile/tablet, left on laptop/desktop */}
      <div className="flex flex-col gap-3 shrink-0 lg:flex-none lg:w-[348px] lg:justify-center xl:w-[720px]">
        <h1 className="font-['Manrope'] font-semibold text-[28px] md:text-[40px] xl:text-[48px] text-white leading-[1.28]">
          Hello! I&apos;m James - a British designer, artist, and maker.
        </h1>
        <p className="font-['Manrope'] font-normal text-[20px] xl:text-[28px] text-[#929296] leading-[1.5] text-pretty">
          If people use it, I care about it. I&apos;m currently designing for investing products at Moneybox to democratise wealth.
        </p>
      </div>

      {/* Image — visually top on mobile/tablet, right on laptop/desktop */}
      {/* TODO: Replace bg placeholder with <Image src="…" fill /> when photo is ready */}
      <div className="w-full flex-1 min-h-0 lg:h-full rounded-2xl overflow-hidden" />
    </section>
  );
}

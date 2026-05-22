import Image from "next/image";
import { testimonials } from "@/content";

export default function References() {
  return (
    <section id="references" className="w-full flex flex-col gap-10">
      {testimonials.map((t, i) => (
        <div key={t.id}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[var(--label,24px)] items-start">
            {/* Person */}
            <div className="flex gap-6 items-start md:w-1/2 shrink-0">
              <div className="relative size-[52px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={t.avatarSrc}
                  alt={t.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <p className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em]">
                  {t.name}
                </p>
                <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="md:w-1/2">
              <p className="font-['Manrope'] font-light text-[18px] text-white leading-[1.48] tracking-[0.18px]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Divider (omit after last) */}
          {i < testimonials.length - 1 && (
            <div className="mt-10 border-t border-[#292929]" />
          )}
        </div>
      ))}
    </section>
  );
}

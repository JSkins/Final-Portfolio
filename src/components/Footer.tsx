import { footer } from "@/content";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-[#292929]">
      <div className="max-w-[1152px] mx-auto px-6 py-8 flex items-center justify-between gap-6 flex-wrap">
        <div className="flex flex-col gap-1 leading-[1.4]">
          <p className="font-['Public_Sans'] font-light text-lg text-[#7b7b80]">
            {footer.location}
          </p>
          <p className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em]">
            {footer.title}
          </p>
          <p className="font-['Public_Sans'] font-light text-lg text-[#7b7b80]">
            {footer.copyright}
          </p>
        </div>

        <a
          href={footer.ctaHref}
          className="border border-[#f3f3f6] text-white font-['Manrope'] font-[550] text-lg leading-[1.4] px-6 py-[10px] rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
        >
          {footer.ctaLabel}
        </a>
      </div>
    </footer>
  );
}

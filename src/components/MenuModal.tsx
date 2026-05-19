"use client";
import { useEffect } from "react";
import { footer } from "@/content";

type Props = { open: boolean; onClose: () => void };

const links = [
  { label: "Work", href: "#work" },
  { label: "References", href: "#references" },
  { label: "Get in touch", href: footer.ctaHref },
];

export default function MenuModal({ open, onClose }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-2"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-[#7b7b80] hover:text-white font-['Manrope'] font-[550] text-lg px-6 py-[10px] rounded-full border border-[#292929] transition-colors"
      >
        Close
      </button>
      <nav className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={onClose}
            className="text-white font-['Manrope'] font-semibold text-4xl md:text-5xl hover:text-[#7b7b80] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

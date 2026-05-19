"use client";
import { useState } from "react";
import Image from "next/image";
import { nav } from "@/content";
import MenuModal from "./MenuModal";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#141414] border-b border-[#292929] flex items-center justify-between px-6 py-3 w-full">
        <div className="relative size-[52px] rounded-full overflow-hidden shrink-0">
          <Image
            src={nav.avatarSrc}
            alt={nav.avatarAlt}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/james-skinner-"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block font-['Manrope'] font-[550] text-lg text-white leading-[1.4] hover:text-[#929296] transition-colors whitespace-nowrap"
          >
            Connect on LinkedIn
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-[#f3f3f6] text-[#011b1b] font-['Manrope'] font-[550] text-lg leading-[1.4] px-6 py-[10px] rounded-full hover:bg-white transition-colors"
          >
            Menu
          </button>
        </div>
      </nav>
      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

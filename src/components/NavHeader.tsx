"use client";
import { useState } from "react";
import Image from "next/image";
import { nav } from "@/content";
import MenuModal from "./MenuModal";
import { usePathname, useRouter } from "next/navigation";

export default function NavHeader({ bg = "#141414" }: { bg?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // On case study pages, skip the loading animation when navigating home
  function handleAvatarClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname?.startsWith("/work/")) {
      e.preventDefault();
      sessionStorage.setItem("skipLoading", "1");
      router.push("/");
    }
    // All other pages: let the default <a href="/"> handle it normally
  }

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b flex items-center justify-between px-6 py-3 w-full"
        style={{ backgroundColor: bg, borderColor: bg }}
      >
        <a href="/" onClick={handleAvatarClick} className="relative size-[52px] rounded-full overflow-hidden shrink-0 block">
          <Image
            src={nav.avatarSrc}
            alt={nav.avatarAlt}
            fill
            className="object-cover"
            unoptimized
          />
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/james-skinner-"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block font-['Manrope'] font-normal text-lg text-white leading-[1.4] hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors whitespace-nowrap"
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

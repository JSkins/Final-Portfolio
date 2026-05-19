"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { nav, menu } from "@/content";

type Props = {
  open: boolean;
  onClose: () => void;
  /** The href of the currently active page/section, used to highlight the active link */
  activePath?: string;
};

export default function MenuModal({ open, onClose, activePath = "#work" }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu-overlay"
          className="fixed inset-0 z-[100] flex flex-col bg-[#141414]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Nav bar — mirrors NavHeader but with "Close" */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#292929] shrink-0">
            <div className="relative size-[52px] rounded-full overflow-hidden shrink-0">
              <Image
                src={nav.avatarSrc}
                alt={nav.avatarAlt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <button
              onClick={onClose}
              className="bg-[#f3f3f6] text-[#011b1b] font-['Manrope'] font-[550] text-lg leading-[1.4] px-6 py-[10px] rounded-full hover:bg-white transition-colors"
            >
              Close
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1 items-end max-w-[1152px] w-full mx-auto px-6 md:px-16 pb-16 md:pb-20 gap-3 overflow-hidden">

            {/* Col 1 — primary nav links */}
            <nav className="flex flex-col gap-3 flex-1">
              {menu.links.map((link, i) => {
                const isActive = activePath === link.href;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-['Manrope'] font-bold leading-[1.4] transition-colors duration-150 text-[clamp(32px,5vw,48px)] ${
                      isActive
                        ? "text-[#f5b73d]"
                        : "text-white hover:text-[#f5b73d]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Col 2 — contact + socials (desktop: right-aligned; mobile: hidden / stacked below) */}
            <motion.div
              className="hidden md:flex flex-col gap-6 items-end text-right shrink-0 pb-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Get in touch */}
              <div className="flex flex-col gap-2 items-end">
                <a
                  href={menu.contact.href}
                  onClick={onClose}
                  className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em] hover:text-[#f5b73d] transition-colors leading-[1.4]"
                >
                  {menu.contact.label}
                </a>
                {menu.contact.subLinks.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="font-['Public_Sans'] font-light text-lg text-white hover:text-[#f5b73d] transition-colors leading-[1.4]"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-2 items-end">
                <p className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em] leading-[1.4]">
                  {menu.socials.label}
                </p>
                {menu.socials.links.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Public_Sans'] font-light text-lg text-white hover:text-[#f5b73d] transition-colors leading-[1.4]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile-only secondary links — stacked below nav items */}
          <motion.div
            className="flex md:hidden flex-col gap-6 max-w-[1152px] w-full mx-auto px-6 pb-16 shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <div className="border-t border-[#292929] pt-6 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <a
                  href={menu.contact.href}
                  onClick={onClose}
                  className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em] hover:text-[#f5b73d] transition-colors leading-[1.4]"
                >
                  {menu.contact.label}
                </a>
                {menu.contact.subLinks.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="font-['Public_Sans'] font-light text-lg text-white hover:text-[#f5b73d] transition-colors leading-[1.4]"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2 items-end">
                <p className="font-['Public_Sans'] font-semibold text-2xl text-white tracking-[-0.02em] leading-[1.4]">
                  {menu.socials.label}
                </p>
                {menu.socials.links.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Public_Sans'] font-light text-lg text-white hover:text-[#f5b73d] transition-colors leading-[1.4]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

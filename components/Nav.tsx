"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Subtle nav change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Escape + focus management for mobile menu
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    // Move focus into the panel
    const t = setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("a, button")
        ?.focus();
    }, 60);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
        scrolled && !open
          ? "bg-ivory/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex items-center justify-between py-4 sm:py-5"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-display text-lg font-medium tracking-tight text-graphite"
        >
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-reel transition-transform duration-300 group-hover:scale-125"
          />
          <span>Rakesh Lal Das</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline font-mono text-[0.72rem] uppercase tracking-label text-graphite/80 hover:text-graphite"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex items-center gap-2 md:hidden"
        >
          <span className="font-mono text-[0.72rem] uppercase tracking-label text-graphite">
            {open ? "Close" : "Menu"}
          </span>
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full bg-graphite transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-graphite transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-graphite transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[85] flex flex-col bg-graphite px-5 pb-10 pt-24 text-ivory md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2"
                  >
                    <span className="font-mono text-xs text-reel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-4xl font-light">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-ivory/15 pt-6 font-mono text-[0.68rem] uppercase tracking-label text-ivory/50">
              <span>{profile.discipline}</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

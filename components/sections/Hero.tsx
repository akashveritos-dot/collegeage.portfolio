"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Film } from "lucide-react";
import { profile, projects } from "@/data/site";

const years = projects.map((p) => p.year).sort((a, b) => a - b);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20 sm:pt-28"
    >
      {/* 3D perspective ground line the figure stands on — pinned to section bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 [perspective:700px]"
      >
        <div
          className="mx-auto h-40 w-[92%] max-w-6xl border-t border-graphite/25"
          style={{
            transform: "rotateX(74deg)",
            transformOrigin: "bottom",
            background:
              "linear-gradient(to top, rgba(198,58,36,0.10), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-graphite/35 to-transparent" />
      </div>

      {/* Text block */}
      <div className="shell relative z-10 flex flex-1 flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="relative z-10 shrink-0 lg:col-span-7">
          <motion.p
            className="label mb-3 flex items-center gap-3 sm:mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="inline-block h-px w-8 bg-reel" />
            {profile.discipline}
          </motion.p>

          <h1 className="text-hero font-display font-light text-graphite">
            {["Rakesh", "Lal Das"].map((line, i) => (
              <span key={i} className="reveal-line">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-4 max-w-md font-display text-lg italic text-graphite/70 sm:mt-7 sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
          >
            “{profile.statement}”
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-graphite px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-label text-ivory transition-colors hover:bg-reel sm:px-6 sm:py-3 sm:text-xs"
            >
              View Selected Work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-graphite/25 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-label text-graphite transition-colors hover:border-graphite hover:bg-graphite hover:text-ivory sm:px-6 sm:py-3 sm:text-xs"
            >
              About Rakesh
            </a>
            <a
              href="https://www.imdb.com/name/nm12607916/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e2bd02]/30 bg-[#e2bd02]/5 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-label text-graphite transition-colors hover:border-[#e2bd02] hover:bg-[#e2bd02] hover:text-black sm:px-6 sm:py-3 sm:text-xs"
            >
              <Film size={12} className="text-[#e2bd02] transition-colors group-hover:text-black" />
              IMDb Profile
            </a>
            <a
              href="#contact"
              className="link-underline hidden font-mono text-xs uppercase tracking-label text-graphite/70 sm:inline"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Portrait — DIRECT child of the section, so its bottom shares the exact
          same reference as the ground line. Cutout, no box; feet touch the line.
          Mobile: in normal flow at the bottom. Desktop: absolute bottom-right. */}
      <motion.div
        className="pointer-events-none relative z-[5] mx-auto -mt-2 h-[42vh] w-full max-w-[15rem] shrink-0 xs:max-w-[17rem] sm:h-[46vh] sm:max-w-[20rem] lg:absolute lg:bottom-0 lg:right-[max(1.5rem,calc((100vw-1600px)/2+1rem))] lg:mx-0 lg:mt-0 lg:h-[84vh] lg:max-h-[860px] lg:w-[36vw] lg:max-w-[540px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* soft grounding shadow right under the figure */}
        <div
          aria-hidden
          className="absolute inset-x-8 bottom-0 h-4 rounded-[100%] bg-graphite/25 blur-lg sm:h-5"
        />
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 40vw"
          className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(22,19,15,0.25)]"
        />
      </motion.div>

      {/* Scroll indicator — desktop only, sits left of the portrait */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="shell pointer-events-auto absolute inset-x-0 bottom-6 z-10 hidden items-center gap-3 font-mono text-[0.62rem] uppercase tracking-label text-graphite/50 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="relative flex h-8 w-px overflow-hidden bg-graphite/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-reel"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Scroll — Timeline begins
      </motion.a>
    </section>
  );
}

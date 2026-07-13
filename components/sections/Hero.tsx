"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, projects } from "@/data/site";

const years = projects.map((p) => p.year).sort((a, b) => a - b);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20 sm:pt-28"
    >
      {/* Portrait — cutout, anchored to the bottom-right, sitting BEHIND the
          text as a depth layer. Flush to the bottom edge on every size. */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[66svh] w-[86%] max-w-[23rem] xs:h-[68svh] sm:w-[70%] sm:max-w-[26rem] lg:right-[max(1.5rem,calc((100vw-1600px)/2+3rem))] lg:h-[86vh] lg:w-[40vw] lg:max-w-[600px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          aria-hidden
          className="absolute inset-x-6 bottom-1 h-5 rounded-[100%] bg-graphite/25 blur-lg sm:h-6 sm:blur-xl"
        />
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="object-contain object-bottom drop-shadow-[0_24px_36px_rgba(22,19,15,0.25)]"
        />
      </motion.div>

      {/* Ivory scrim — keeps the layered text readable over the portrait on
          smaller screens; the image stays visible on the right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] lg:hidden"
        style={{
          background:
            "linear-gradient(to right, #f3eee3 0%, rgba(243,238,227,0.72) 42%, rgba(243,238,227,0) 78%)",
        }}
      />

      {/* 3D perspective ground line the figure stands on */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] [perspective:700px]"
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-graphite/40 to-transparent" />
      </div>

      <div className="shell relative z-10 flex flex-1 flex-col justify-start lg:grid lg:grid-cols-12 lg:items-center lg:gap-6">
        {/* Text block */}
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
            className="mt-4 max-w-[15rem] font-display text-lg italic text-graphite/70 sm:mt-7 sm:max-w-md sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
          >
            “{profile.statement}”
          </motion.p>

          <motion.div
            className="mt-5 flex flex-col items-start gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
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
              className="inline-flex items-center gap-2 rounded-full border border-graphite/25 bg-ivory/60 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-label text-graphite backdrop-blur-sm transition-colors hover:border-graphite hover:bg-graphite hover:text-ivory sm:bg-transparent sm:px-6 sm:py-3 sm:text-xs"
            >
              About Rakesh
            </a>
            <a
              href="#contact"
              className="link-underline hidden font-mono text-xs uppercase tracking-label text-graphite/70 sm:inline"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* selected credits strip — desktop only (keeps mobile first-view clean) */}
          <motion.dl
            className="mt-12 hidden flex-wrap gap-x-10 gap-y-4 border-t border-graphite/15 pt-6 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div>
              <dt className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                Selected Credits
              </dt>
              <dd className="mt-1 font-mono text-sm text-graphite">
                {years[0]} — {years[years.length - 1]}
              </dd>
            </div>
            {projects.map((p) => (
              <div key={p.slug}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                  {p.year}
                </dt>
                <dd className="mt-1 font-display text-sm text-graphite">
                  {p.title}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* right column spacer on desktop (portrait is absolute) */}
        <div className="hidden lg:col-span-5 lg:block" aria-hidden />
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="shell relative z-10 hidden items-center gap-3 pb-6 font-mono text-[0.62rem] uppercase tracking-label text-graphite/50 lg:flex"
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

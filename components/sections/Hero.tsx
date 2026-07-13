"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, projects } from "@/data/site";

const years = projects.map((p) => p.year).sort((a, b) => a - b);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28"
    >
      {/* 3D perspective ground line the figure stands on */}
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

      <div className="shell relative z-10 grid flex-1 grid-cols-1 items-center gap-6 lg:grid-cols-12">
        {/* Left — text block */}
        <div className="relative z-10 lg:col-span-7">
          <motion.p
            className="label mb-6 flex items-center gap-3"
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
            className="mt-7 max-w-md font-display text-xl italic text-graphite/70 sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
          >
            “{profile.statement}”
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-graphite px-6 py-3 font-mono text-xs uppercase tracking-label text-ivory transition-colors hover:bg-reel"
            >
              View Selected Work
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-graphite/25 px-6 py-3 font-mono text-xs uppercase tracking-label text-graphite transition-colors hover:border-graphite hover:bg-graphite hover:text-ivory"
            >
              About Rakesh
            </a>
            <a
              href="#contact"
              className="link-underline font-mono text-xs uppercase tracking-label text-graphite/70"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* selected credits strip */}
          <motion.dl
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-graphite/15 pt-6"
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

        {/* Right — spacer on desktop (portrait is absolute below) */}
        <div className="hidden lg:col-span-5 lg:block" aria-hidden />
      </div>

      {/* Portrait — cutout, no box, flush to the bottom edge */}
      <motion.div
        className="pointer-events-none relative z-[5] mx-auto mt-6 h-[44vh] w-full max-w-[19rem] self-center sm:h-[50vh] sm:max-w-[22rem] lg:absolute lg:bottom-0 lg:right-[max(1.5rem,calc((100vw-1600px)/2+3rem))] lg:mx-0 lg:mt-0 lg:h-[86vh] lg:w-[40vw] lg:max-w-[600px] lg:self-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* soft grounding shadow under the figure */}
        <div
          aria-hidden
          className="absolute inset-x-6 bottom-1 h-6 rounded-[100%] bg-graphite/25 blur-xl"
        />
        <Image
          src={profile.image}
          alt={profile.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 40vw"
          className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(22,19,15,0.25)]"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="shell relative z-10 flex items-center gap-3 pb-6 font-mono text-[0.62rem] uppercase tracking-label text-graphite/50"
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

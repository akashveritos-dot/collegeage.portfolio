"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % projects.length));

  return (
    <section
      id="work"
      className="relative bg-graphite py-16 text-ivory sm:py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="mb-14 flex items-center gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-reel">
            02 — Selected Work
          </span>
          <span className="h-px flex-1 bg-ivory/15" />
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-ivory/40">
            {String(projects.length).padStart(2, "0")} Projects
          </span>
        </Reveal>

        <ul className="flex flex-col relative z-10 gap-6">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="transition-all duration-300 border-b border-ivory/10 last:border-b-0 pb-6"
              style={{
                opacity: hovered === null ? 1 : hovered === i ? 1 : 0.45,
              }}
            >
              <Reveal>
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Poster Thumbnail (Left) */}
                  <button
                    type="button"
                    onClick={() => open(i)}
                    className="group relative aspect-[2/3] w-16 sm:w-20 overflow-hidden rounded bg-black/40 border border-ivory/10 shadow-lg transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                  >
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 font-mono text-[0.6rem] text-ivory/40">
                        NO POSTER
                      </div>
                    )}
                  </button>

                  {/* Details (Center) */}
                  <div className="flex-1 min-w-0">
                    <button
                      type="button"
                      onClick={() => open(i)}
                      className="text-left group/title focus:outline-none block w-full"
                    >
                      <h3 className="font-display text-xl sm:text-2xl font-normal leading-snug text-ivory group-hover/title:text-reel transition-colors duration-300 truncate">
                        {project.title}
                      </h3>
                    </button>
                    
                    {/* Rating and Format Row */}
                    <div className="flex items-center gap-2 mt-1 font-mono text-xs sm:text-sm">
                      {project.rating && (
                        <span className="flex items-center gap-1 text-amber-400 font-semibold">
                          ★ {project.rating}
                        </span>
                      )}
                      <span className="text-ivory/30">·</span>
                      <span className="text-ivory/60">{project.format}</span>
                    </div>

                    {/* Role, Episodes, and Year Row */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-2 font-mono text-[0.68rem] uppercase tracking-wider text-ivory/40">
                      <span className="text-ivory/70">{project.role}</span>
                      {project.episodes && (
                        <>
                          <span className="text-ivory/20">·</span>
                          <span className="text-sky-400 font-semibold normal-case">{project.episodes}</span>
                        </>
                      )}
                      <span className="text-ivory/20">·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Info Icon Controls (Right) */}
                  <button
                    type="button"
                    onClick={() => open(i)}
                    aria-label={`View details for ${project.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 bg-transparent text-ivory/50 transition-all duration-300 hover:border-reel hover:text-reel hover:scale-105 flex-shrink-0"
                  >
                    <Info size={18} />
                  </button>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active !== null && (
          <ProjectModal
            project={projects[active]}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

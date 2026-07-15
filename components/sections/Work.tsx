"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Info, LayoutGrid, ListFilter, Star, Film, Sparkles } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import ProjectModal from "@/components/ui/ProjectModal";
import type { Project } from "@/types";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const formats = ["ALL", "TV Series", "Short Film"];

  const filteredProjects = selectedFormat === "ALL"
    ? projects
    : projects.filter((p) => p.format === selectedFormat);

  const openBySlug = (slug: string) => {
    const idx = projects.findIndex((p) => p.slug === slug);
    if (idx !== -1) setActive(idx);
  };

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
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #C63A24 0%, transparent 70%)",
        }}
      />

      <div className="shell relative z-10">
        {/* Section Header */}
        <Reveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-reel">
              02 — Selected Work
            </span>
            <span className="h-px w-12 bg-ivory/15" />
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-ivory/40">
              {projects.length} Titles Verified
            </span>
          </div>

          {/* Format Filters & View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
            <div className="flex items-center gap-1 rounded-full border border-ivory/10 bg-black/40 p-1 backdrop-blur-md">
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setSelectedFormat(fmt)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider transition-all duration-300 ${
                    selectedFormat === fmt
                      ? "bg-reel text-ivory shadow-lg shadow-reel/20"
                      : "text-ivory/50 hover:text-ivory"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1 rounded-full border border-ivory/10 bg-black/40 p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`rounded-full p-2 transition-colors ${
                  viewMode === "grid" ? "bg-ivory/15 text-reel" : "text-ivory/40 hover:text-ivory"
                }`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`rounded-full p-2 transition-colors ${
                  viewMode === "list" ? "bg-ivory/15 text-reel" : "text-ivory/40 hover:text-ivory"
                }`}
              >
                <ListFilter size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* GRID VIEW */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <div
                  onClick={() => openBySlug(project.slug)}
                  className="group cursor-pointer relative flex flex-col overflow-hidden rounded-xl border border-ivory/10 bg-black/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-reel/50 hover:shadow-2xl hover:shadow-reel/10"
                >
                  {/* Poster Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/80">
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={`${project.title} poster frame`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 font-mono text-xs text-ivory/40">
                        <Film className="mb-2 text-reel opacity-50" size={24} />
                        <span>POSTER ARCHIVE</span>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute left-3 top-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="rounded-md border border-ivory/20 bg-black/60 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-ivory/90 backdrop-blur-md">
                        {project.year}
                      </span>

                      {project.rating && (
                        <span className="flex items-center gap-1 rounded-md border border-amber-500/30 bg-black/70 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-amber-400 backdrop-blur-md">
                          <Star size={11} fill="currentColor" /> {project.rating}
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 rounded-full border border-reel bg-reel/90 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ivory shadow-xl backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Info size={14} /> Inspect Details
                      </span>
                    </div>
                  </div>

                  {/* Card Details Footer */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-wider text-ivory/50">
                        <span>{project.format}</span>
                        {project.episodes && (
                          <span className="text-sky-400 font-medium normal-case">{project.episodes}</span>
                        )}
                      </div>
                      <h3 className="mt-1.5 font-display text-xl font-normal leading-snug text-ivory group-hover:text-reel transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ivory/60">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-ivory/10 pt-3 font-mono text-[0.65rem] uppercase tracking-wider text-ivory/40">
                      <span>{project.role}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 text-reel">→</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* LIST VIEW */
          <ul className="flex flex-col relative z-10 gap-4">
            {filteredProjects.map((project, i) => (
              <li
                key={project.slug}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="transition-all duration-300 rounded-xl border border-ivory/10 bg-black/30 p-4 sm:p-5 hover:border-reel/40 hover:bg-black/50"
                style={{
                  opacity: hovered === null ? 1 : hovered === i ? 1 : 0.6,
                }}
              >
                <Reveal>
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Scene Thumbnail */}
                    <button
                      type="button"
                      onClick={() => openBySlug(project.slug)}
                      className="group relative aspect-video w-24 sm:w-36 overflow-hidden rounded-lg bg-black/60 border border-ivory/10 shadow-lg transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                    >
                      {project.cover ? (
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 font-mono text-[0.6rem] text-ivory/40">
                          NO POSTER
                        </div>
                      )}
                    </button>

                    {/* Details Center */}
                    <div className="flex-1 min-w-0">
                      <button
                        type="button"
                        onClick={() => openBySlug(project.slug)}
                        className="text-left group/title focus:outline-none block w-full"
                      >
                        <h3 className="font-display text-lg sm:text-2xl font-normal leading-snug text-ivory group-hover/title:text-reel transition-colors duration-300 truncate">
                          {project.title}
                        </h3>
                      </button>

                      <div className="flex flex-wrap items-center gap-2 mt-1 font-mono text-xs sm:text-sm">
                        {project.rating && (
                          <span className="flex items-center gap-1 text-amber-400 font-semibold">
                            ★ {project.rating}
                          </span>
                        )}
                        <span className="text-ivory/30">·</span>
                        <span className="text-ivory/60">{project.format}</span>
                        {project.episodes && (
                          <>
                            <span className="text-ivory/30">·</span>
                            <span className="text-sky-400 font-medium">{project.episodes}</span>
                          </>
                        )}
                        <span className="text-ivory/30">·</span>
                        <span className="text-ivory/50">{project.year}</span>
                      </div>

                      <p className="mt-1 line-clamp-1 text-xs text-ivory/50 hidden sm:block">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Button Right */}
                    <button
                      type="button"
                      onClick={() => openBySlug(project.slug)}
                      aria-label={`View details for ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 bg-transparent text-ivory/50 transition-all duration-300 hover:border-reel hover:bg-reel hover:text-ivory flex-shrink-0"
                    >
                      <Info size={18} />
                    </button>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Project Details Modal */}
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


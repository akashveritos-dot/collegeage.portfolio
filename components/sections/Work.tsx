"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Info, Star, Film } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("ALL");

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
      {/* Subtle ambient glow */}
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
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>

          {/* Format Filter Tabs */}
          <div className="flex items-center gap-1 rounded-full border border-ivory/10 bg-black/40 p-1 backdrop-blur-md self-start sm:self-auto">
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
        </Reveal>

        {/* SINGLE-COLUMN IMDb-STYLE LIST VIEW */}
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
                  {/* Poster Thumbnail (Left) */}
                  <button
                    type="button"
                    onClick={() => openBySlug(project.slug)}
                    className="group relative aspect-video w-24 sm:w-36 overflow-hidden rounded-lg bg-black/60 border border-ivory/10 shadow-lg transition-transform duration-300 hover:scale-[1.03] flex-shrink-0"
                  >
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={`${project.title} poster frame`}
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 font-mono text-[0.6rem] text-ivory/40">
                        <Film size={18} className="text-reel" />
                      </div>
                    )}
                  </button>

                  {/* Details (Center) */}
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

                    {/* Metadata Row: Rating, Format, Episodes, Year */}
                    <div className="flex flex-wrap items-center gap-2 mt-1 font-mono text-xs sm:text-sm">
                      {project.rating && (
                        <span className="flex items-center gap-1 text-amber-400 font-semibold">
                          <Star size={12} fill="currentColor" /> {project.rating}
                        </span>
                      )}
                      {project.rating && <span className="text-ivory/30">·</span>}
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

                  {/* Info Icon Controls (Right) */}
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

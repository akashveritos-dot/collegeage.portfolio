"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import ProjectPoster from "@/components/ui/ProjectPoster";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + projects.length) % projects.length));
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % projects.length));

  return (
    <section id="work" className="relative bg-graphite py-24 text-ivory sm:py-32">
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

        <ul className="flex flex-col">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Reveal>
                <button
                  type="button"
                  onClick={() => open(i)}
                  data-cursor
                  className="group grid w-full grid-cols-1 items-center gap-6 border-t border-ivory/12 py-8 text-left transition-colors hover:bg-ivory/[0.03] md:grid-cols-12 md:gap-8 md:py-10"
                >
                  {/* number */}
                  <span className="font-mono text-sm text-reel md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* title + meta */}
                  <div className="md:col-span-5">
                    <h3 className="font-display text-4xl font-light leading-none text-ivory transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl md:text-6xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 font-mono text-xs uppercase tracking-label text-ivory/45">
                      {project.year} · {project.format} · {project.role}
                    </p>
                  </div>

                  {/* tagline — hidden on small, shown md+ */}
                  <p className="hidden text-ivory/60 md:col-span-3 md:block">
                    {project.tagline}
                  </p>

                  {/* preview poster */}
                  <div className="md:col-span-3">
                    <div className="relative aspect-video w-full overflow-hidden rounded-sm md:opacity-70 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                      <ProjectPoster
                        project={project}
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-label text-ivory/50 group-hover:text-reel">
                      View Project <span aria-hidden>→</span>
                    </span>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="border-t border-ivory/12" />
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

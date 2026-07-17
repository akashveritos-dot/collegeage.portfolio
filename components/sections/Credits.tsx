"use client";

import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { Star, Film } from "lucide-react";

// Sort by year descending (newest first for career trajectory)
const timeline = [...projects].sort((a, b) => b.year - a.year);

export default function Credits() {
  return (
    <section id="credits" className="relative overflow-hidden w-full max-w-full bg-ivory py-8 sm:py-16 lg:py-20">
      <div className="shell">
        <Reveal className="mb-4 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-reel">
              04 — Credits
            </span>
            <span className="hidden xs:inline-block h-px w-8 sm:w-12 bg-graphite/15" />
            <span className="font-mono text-[0.68rem] sm:text-xs uppercase tracking-wider text-graphite/40">
              Full Chronology
            </span>
          </div>
          <span className="font-mono text-[0.68rem] sm:text-xs uppercase tracking-wider text-graphite/40 self-start sm:self-auto">
            {projects.length} Titles
          </span>
        </Reveal>

        <ol className="relative">
          {/* vertical timeline spine */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-graphite/15 sm:left-[9px]"
          />
          {timeline.map((p, i) => (
            <li key={p.slug} className="relative pl-8 sm:pl-14">
              <Reveal delay={i * 0.04} className="relative border-b border-graphite/12 py-5 sm:py-7">
                {/* playhead marker */}
                <span
                  aria-hidden
                  className="absolute left-[-32px] sm:left-[-56px] top-6 flex h-4 w-4 items-center justify-center rounded-full border border-reel bg-ivory sm:h-[19px] sm:w-[19px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-reel" />
                </span>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                    <span className="font-mono text-sm font-semibold text-reel">{p.year}</span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-normal text-graphite leading-snug">
                      {p.title}
                    </h3>

                    {p.rating && (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-2 py-0.5 font-mono text-[0.7rem] font-bold text-amber-800">
                        <Star size={11} fill="currentColor" /> {p.rating}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-label text-graphite/50">
                    <span>{p.format}</span>
                    <span>·</span>
                    <span className="text-graphite/80">{p.role}</span>
                    {p.episodes && (
                      <>
                        <span>·</span>
                        <span className="text-reel font-semibold">{p.episodes}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-graphite/70">{p.tagline}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


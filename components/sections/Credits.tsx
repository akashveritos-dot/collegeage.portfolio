"use client";

import { projects } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

// Chronological order (oldest → newest) so it reads like a timeline.
const timeline = [...projects].sort((a, b) => a.year - b.year);

export default function Credits() {
  return (
    <section id="credits" className="relative bg-ivory py-16 sm:py-24 lg:py-32">
      <div className="shell">
        <Reveal className="mb-14 flex items-center gap-4">
          <span className="label">05 — Credits</span>
          <span className="h-px flex-1 bg-graphite/15" />
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-graphite/40">
            Scene Index
          </span>
        </Reveal>

        <ol className="relative">
          {/* vertical timeline spine */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-graphite/15 sm:left-[9px]"
          />
          {timeline.map((p, i) => (
            <li key={p.slug} className="relative pl-10 sm:pl-14">
              <Reveal delay={i} className="border-b border-graphite/12 py-8">
                {/* playhead marker */}
                <span
                  aria-hidden
                  className="absolute left-0 top-9 flex h-4 w-4 items-center justify-center rounded-full border border-reel bg-ivory sm:h-[19px] sm:w-[19px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-reel" />
                </span>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-reel">{p.year}</span>
                    <h3 className="font-display text-3xl font-light text-graphite sm:text-4xl">
                      {p.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-label text-graphite/45">
                    {p.format} · {p.role}
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-graphite/60">{p.tagline}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

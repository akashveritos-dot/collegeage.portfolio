"use client";

import { capabilities } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export default function Capabilities() {
  return (
    <section id="experience" className="relative overflow-hidden w-full max-w-full bg-graphite py-10 text-ivory sm:py-16 lg:py-20">
      <div className="shell">
        <Reveal className="mb-6 sm:mb-8 flex items-center gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-reel">
            05 — Experience
          </span>
          <span className="h-px flex-1 bg-ivory/15" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-display font-display font-light">
              Capabilities
            </h2>
            <p className="mt-6 max-w-sm text-ivory/60">
              The craft an editor brings to every project — from first
              assembly to final continuity.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:col-span-8">
            {capabilities.map((cap, i) => (
              <li key={cap.title} className="bg-graphite">
                <Reveal delay={i % 2} className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-ivory/[0.04] sm:p-8">
                  <span className="font-mono text-xs text-reel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-light">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ivory/60">
                    {cap.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { RevealLines, Reveal } from "@/components/motion/Reveal";

const beats = [
  { k: "Pace", v: "Every cut sets a tempo the audience feels before they notice." },
  { k: "Tension", v: "Holding a frame a beat longer turns silence into suspense." },
  { k: "Emotion", v: "The right cut lets a look land before a word ever has to." },
  { k: "Clarity", v: "Structure keeps the story legible even when the scene is chaos." },
  { k: "Continuity", v: "Invisible work: the world never breaks between two frames." },
];

export default function Philosophy() {
  const root = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !strip.current) return;
    const mm = gsap.matchMedia(root);

    mm.add("(min-width: 1024px)", () => {
      // Parallax the filmstrip horizontally as the section scrolls through view (desktop only).
      gsap.fromTo(
        strip.current,
        { xPercent: 6 },
        {
          xPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      id="philosophy"
      className="relative overflow-hidden bg-ivory py-10 sm:py-24 lg:py-32"
    >
      <div className="shell">
        <Reveal className="mb-2 sm:mb-10 flex items-center gap-4">
          <span className="label">04 — Philosophy</span>
          <span className="h-px flex-1 bg-graphite/15" />
        </Reveal>

        <h2 className="max-w-4xl text-display font-display font-light text-graphite">
          <RevealLines
            lines={["The cut between", "emotion and story."]}
          />
        </h2>

        <Reveal as="p" className="mt-8 max-w-xl text-lg leading-relaxed text-graphite/75">
          Editing is the last rewrite — the place where footage becomes
          feeling. It decides pace, tension, clarity and continuity, one
          frame at a time.
        </Reveal>
      </div>

      {/* Scroll-parallax filmstrip of beats */}
      <div className="mt-8 sm:mt-16 overflow-x-auto no-scrollbar pointer-events-auto lg:overflow-hidden lg:pointer-events-none" aria-hidden>
        <div
          ref={strip}
          className="flex w-max gap-4 will-change-transform px-4 sm:px-8 lg:px-0"
        >
          {beats.map((b, i) => (
            <div
              key={i}
              className="flex h-44 w-60 shrink-0 flex-col justify-between border border-graphite/15 bg-graphite p-4 text-ivory sm:h-56 sm:w-80 sm:p-5"
            >
              <div className="flex justify-between font-mono text-[0.58rem] uppercase tracking-label text-ivory/40">
                <span>Frame {String(i + 1).padStart(3, "0")}</span>
                <span className="text-reel">●</span>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-light">{b.k}</p>
                <p className="mt-2 text-xs sm:text-sm leading-snug text-ivory/60">{b.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible (non-decorative) list for screen readers & no-JS */}
      <div className="shell mt-16">
        <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {beats.map((b, i) => (
            <Reveal key={b.k} delay={i} className="border-t border-graphite/15 pt-4">
              <dt className="font-display text-2xl font-light text-graphite">
                {b.k}
              </dt>
              <dd className="mt-2 text-graphite/70">{b.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { profile, projects } from "@/data/site";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-16 sm:py-24 lg:py-32">
      <div className="shell">
        <Reveal className="mb-14 flex items-center gap-4">
          <span className="label">01 — About</span>
          <span className="h-px flex-1 bg-graphite/15" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky portrait */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              {/* Cutout portrait — no box, standing directly on the ground line */}
              <div className="relative aspect-[4/5] w-full">
                {/* grounding shadow + line sit exactly at the image's bottom edge */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 z-0"
                >
                  <div className="mx-auto h-4 w-[68%] rounded-[100%] bg-graphite/25 blur-md" />
                  <div className="-mt-px h-px w-full bg-gradient-to-r from-transparent via-graphite/45 to-transparent" />
                </div>
                <Image
                  src="/images/WhatsApp Image 2026-07-14 at 10.12.38 PM-Photoroom.png"
                  alt={profile.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="absolute z-[1] object-contain object-bottom drop-shadow-[0_18px_28px_rgba(22,19,15,0.22)]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-graphite/15 pt-4 font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                <span>Contact Sheet · {profile.name}</span>
                <span>Frame 02 / 24</span>
              </div>
            </div>
          </div>

          {/* Editorial text */}
          <div className="lg:col-span-7">
            <h2 className="text-display font-display font-light text-graphite">
              <RevealLines
                lines={["The editor behind", "the emotion."]}
                lineClassName="block"
              />
            </h2>

            <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-graphite/80">
              {profile.bioLong.map((para, i) => (
                <Reveal as="p" key={i} delay={i}>
                  {para}
                </Reveal>
              ))}
            </div>

            {/* Creative approach */}
            <Reveal className="mt-12 border-l-2 border-reel pl-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                Creative Approach
              </p>
              <p className="mt-3 font-display text-2xl font-light italic leading-snug text-graphite">
                “A cut is a decision about attention — where the eye goes,
                what the heart keeps, and the exact frame to let it go.”
              </p>
            </Reveal>

            {/* Known works + optional meta */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              <div className="col-span-2 sm:col-span-3">
                <p className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                  Known For
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {projects.map((p) => (
                    <li key={p.slug} className="font-display text-xl text-graphite">
                      {p.title}{" "}
                      <span className="font-mono text-sm text-graphite/40">
                        {p.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {profile.location && (
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                    Based In
                  </p>
                  <p className="mt-2 text-graphite">{profile.location}</p>
                </div>
              )}
              {profile.availability && (
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                    Availability
                  </p>
                  <p className="mt-2 text-graphite">{profile.availability}</p>
                </div>
              )}
            </div>

            {profile.resumeUrl && (
              <Reveal className="mt-10">
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-graphite/25 px-6 py-3 font-mono text-xs uppercase tracking-label text-graphite transition-colors hover:bg-graphite hover:text-ivory"
                >
                  Download Résumé <span aria-hidden>↓</span>
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Film, Play } from "lucide-react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="reel" className="relative bg-graphite py-16 text-ivory sm:py-24 lg:py-32">
      <div className="shell">
        {/* Section header */}
        <Reveal className="mb-14 flex items-center gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-reel">
            03 — Showreel
          </span>
          <span className="h-px flex-1 bg-ivory/15" />
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-ivory/40">
            Featured Cut
          </span>
        </Reveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Video Player */}
          <div className="lg:col-span-8">
            <Reveal className="group relative aspect-video w-full overflow-hidden rounded-lg border border-ivory/10 bg-black/40 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-ivory/20">
              {!isPlaying ? (
                // Custom Cinematic Thumbnail Overlay
                <div className="absolute inset-0 z-10 flex cursor-pointer flex-col justify-between p-6" onClick={() => setIsPlaying(true)}>
                  {/* Background Image */}
                  <Image
                    src="https://img.youtube.com/vi/GDxwLETL1Bw/maxresdefault.jpg"
                    alt="The Flight Attendant Season 2 Trailer Thumbnail"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />

                  {/* Dark gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                  {/* Top bar info */}
                  <div className="relative z-10 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-label text-ivory/60">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-reel animate-pulse" />
                      Showcase Video
                    </span>
                    <span>16:9 HD</span>
                  </div>

                  {/* Center Play Button with hover animations */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ivory/30 bg-ivory/10 text-ivory backdrop-blur-md transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:bg-reel group-hover:border-reel group-hover:text-ivory sm:h-20 sm:w-20">
                      {/* Ring Animation */}
                      <span className="absolute -inset-2 rounded-full border border-ivory/5 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
                      <Play size={24} fill="currentColor" className="ml-1 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Bottom details */}
                  <div className="relative z-10">
                    <p className="font-mono text-xs text-reel">Featured Scene</p>
                    <h3 className="mt-1 font-display text-2xl font-light sm:text-3xl">
                      The Flight Attendant (Season 2)
                    </h3>
                  </div>
                </div>
              ) : (
                // Loaded Iframe
                <iframe
                  src="https://www.youtube.com/embed/GDxwLETL1Bw?autoplay=1&rel=0"
                  title="Rakesh Lal Das — The Flight Attendant Editorial Showcase"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </Reveal>
          </div>

          {/* Right Column: Editorial details & IMDb profile link */}
          <div className="flex flex-col justify-center lg:col-span-4">
            <h2 className="text-display font-display font-light text-ivory">
              <RevealLines lines={["Holding tension", "at altitude."]} />
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-ivory/70">
              <Reveal as="p">
                A high-stakes thriller requires tension that breathes. This sequence showcase
                highlights the rhythmic pacing, rapid-cut transitions, and emotional beats 
                designed to keep the audience suspended in mid-air.
              </Reveal>

              <Reveal>
                <div className="border-t border-ivory/15 pt-5">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-4 font-mono text-[0.68rem] uppercase tracking-label text-ivory/50">
                    <div>
                      <dt className="text-reel">Project</dt>
                      <dd className="mt-1 font-display text-base font-light text-ivory normal-case">
                        Flight Attendant (2024)
                      </dd>
                    </div>
                    <div>
                      <dt className="text-reel">Format</dt>
                      <dd className="mt-1 font-display text-base font-light text-ivory normal-case">
                        HBO Max Series
                      </dd>
                    </div>
                    <div>
                      <dt className="text-reel">Role</dt>
                      <dd className="mt-1 font-display text-base font-light text-ivory normal-case">
                        Film & TV Editor
                      </dd>
                    </div>
                    <div>
                      <dt className="text-reel">Focus</dt>
                      <dd className="mt-1 font-display text-base font-light text-ivory normal-case">
                        Suspense & Rhythm
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal className="pt-6">
                <a
                  href="https://www.imdb.com/name/nm12607916/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#e2bd02] bg-[#e2bd02] px-6 py-3 font-mono text-xs uppercase tracking-label text-black transition-transform duration-300 hover:scale-[1.02] hover:bg-[#d1ad02] shadow-lg shadow-black/25"
                >
                  <Film size={14} />
                  View IMDb Profile
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Sub-row: Production Stills Showcase */}
        <Reveal className="mt-16 border-t border-ivory/10 pt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <p className="font-mono text-xs text-reel uppercase tracking-label">Gallery Showcase</p>
              <h4 className="font-display text-2xl font-light text-ivory mt-1">Production Stills</h4>
            </div>
            <p className="font-mono text-[0.62rem] uppercase tracking-label text-ivory/40">Frame 01, 02 & 03 · Editorial Bay</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative aspect-video w-full overflow-hidden rounded border border-ivory/5 bg-black/20 shadow-lg transition-all duration-500 hover:border-ivory/20">
              <Image
                src="/images/WhatsApp Image 2026-07-14 at 10.10.30 PM.jpeg"
                alt="The Flight Attendant production still - Rakesh Lal Das"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[0.6rem] uppercase tracking-label text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Flight Attendant</span>
                <span>Frame 01</span>
              </div>
            </div>
            <div className="group relative aspect-video w-full overflow-hidden rounded border border-ivory/5 bg-black/20 shadow-lg transition-all duration-500 hover:border-ivory/20">
              <Image
                src="/images/rakesh-lal-das.png"
                alt="Faltu production still - Rakesh Lal Das"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[0.6rem] uppercase tracking-label text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Faltu</span>
                <span>Frame 02</span>
              </div>
            </div>
            <div className="group relative aspect-video w-full overflow-hidden rounded border border-ivory/5 bg-black/20 shadow-lg transition-all duration-500 hover:border-ivory/20">
              <Image
                src="/images/WhatsApp Image 2026-07-14 at 10.11.49 PM.jpeg"
                alt="Nazar production still - Rakesh Lal Das"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[0.6rem] uppercase tracking-label text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Nazar</span>
                <span>Frame 03</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

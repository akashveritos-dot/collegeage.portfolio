"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/site";
import Socials from "@/components/ui/Socials";

function Timecode() {
  const [tc, setTc] = useState("00:00:00:00");
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const t = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(t / 3600)).padStart(2, "0");
      const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
      const s = String(t % 60).padStart(2, "0");
      const f = String(Math.floor(((Date.now() - start) % 1000) / 42)).padStart(2, "0");
      setTc(`${h}:${m}:${s}:${f}`);
    }, 45);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{tc}</span>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-graphite pb-10 pt-20 text-ivory">
      <div className="shell">
        {/* top row */}
        <div className="flex flex-col gap-10 border-b border-ivory/12 pb-12 lg:flex-row lg:justify-between">
          <div>
            <a href="#home" className="font-display text-4xl font-light sm:text-5xl">
              {profile.name}
            </a>
            <p className="mt-3 font-mono text-xs uppercase tracking-label text-ivory/50">
              {profile.discipline}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="font-mono text-[0.62rem] uppercase tracking-label text-ivory/40">
                Index
              </p>
              <ul className="mt-4 space-y-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="link-underline text-ivory/80 hover:text-ivory"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-label text-ivory/40">
                Elsewhere
              </p>
              <div className="mt-4">
                <Socials tone="dark" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-6 font-mono text-[0.62rem] uppercase tracking-label text-ivory/45 sm:flex-row sm:items-center">
          <span>
            © {year} {profile.name}. End Credits.
          </span>
          <span className="flex items-center gap-2 text-reel">
            <span className="h-1.5 w-1.5 rounded-full bg-reel" />
            <Timecode />
          </span>
          <a
            href="#home"
            className="link-underline inline-flex items-center gap-2 text-ivory/70 hover:text-ivory"
          >
            Back to Top <span aria-hidden>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

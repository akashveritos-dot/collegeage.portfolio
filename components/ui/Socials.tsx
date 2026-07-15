"use client";

import { Film, Instagram, Mail, Link2 } from "lucide-react";
import { socials, profile } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  film: Film,
  instagram: Instagram,
  mail: Mail,
};

export default function Socials({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "dark"
      ? "border-ivory/20 text-ivory/80 hover:border-reel hover:text-ivory"
      : "border-graphite/20 text-graphite/80 hover:border-reel hover:text-graphite";

  const items = [
    ...socials,
    ...(profile.email
      ? [{ label: "Email", href: `mailto:${profile.email}`, icon: "mail" }]
      : []),
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((s) => {
        const Icon = iconMap[s.icon] ?? Link2;
        const isInstagram = s.icon === "instagram";
        const isIMDb = s.icon === "film";

        if (!s.href) return null;

        if (isInstagram) {
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label font-bold text-white shadow-lg shadow-rose-500/20 transition-all duration-300 hover:scale-105 hover:shadow-rose-500/40"
              >
                <Icon size={15} aria-hidden />
                {s.label}
              </a>
            </li>
          );
        }

        if (isIMDb) {
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#f5c518] bg-[#f5c518] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label font-bold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:bg-[#e2bd02]"
              >
                <Icon size={15} aria-hidden />
                {s.label}
              </a>
            </li>
          );
        }

        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label transition-all duration-300 hover:scale-105 ${base}`}
            >
              <Icon size={14} aria-hidden />
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}


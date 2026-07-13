"use client";

import { Film, Linkedin, Instagram, Youtube, Video, Mail, Link2 } from "lucide-react";
import { socials, profile } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  film: Film,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  vimeo: Video,
  mail: Mail,
};

/**
 * Social links. Entries with a real href render as external links; entries
 * still awaiting a verified URL render as non-interactive, clearly-labelled
 * placeholders (never a fake link). Email is appended when provided.
 */
export default function Socials({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "dark"
      ? "border-ivory/20 text-ivory/80 hover:border-reel hover:text-ivory"
      : "border-graphite/20 text-graphite/80 hover:border-reel hover:text-graphite";
  const muted =
    tone === "dark" ? "border-ivory/10 text-ivory/30" : "border-graphite/10 text-graphite/30";

  const items = [
    ...socials,
    ...(profile.email
      ? [{ label: "Email", href: `mailto:${profile.email}`, icon: "mail" }]
      : []),
  ];

  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((s) => {
        const Icon = iconMap[s.icon] ?? Link2;
        if (!s.href) {
          return (
            <li key={s.label}>
              <span
                className={`inline-flex cursor-default items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label ${muted}`}
                title={`${s.label} — link coming soon`}
              >
                <Icon size={14} aria-hidden />
                {s.label}
                <span className="sr-only"> (link coming soon)</span>
              </span>
            </li>
          );
        }
        const external = s.href.startsWith("http");
        return (
          <li key={s.label}>
            <a
              href={s.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={s.label}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-label transition-colors ${base}`}
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

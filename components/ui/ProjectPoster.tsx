import Image from "next/image";
import type { Project } from "@/types";

/**
 * Renders a project's cover. When no local image exists yet (`cover: null`)
 * it draws a refined film-frame placeholder instead of a broken image —
 * sprocket holes, title, year and a timecode strip.
 */
export default function ProjectPoster({
  project,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={`Still from ${project.title} (${project.year}) — edited by Rakesh Lal Das`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-center"
      />
    );
  }

  // Placeholder film frame
  return (
    <div
      aria-label={`${project.title} (${project.year}) — cover image coming soon`}
      role="img"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-graphite text-ivory"
    >
      {/* sprocket rails */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 flex w-4 flex-col justify-around py-3 sm:w-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="mx-auto h-2 w-2 rounded-[2px] bg-ivory/10" />
        ))}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 flex w-4 flex-col justify-around py-3 sm:w-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="mx-auto h-2 w-2 rounded-[2px] bg-ivory/10" />
        ))}
      </div>

      {/* subtle grid glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(198,58,36,0.18), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between px-6 pt-5 font-mono text-[0.6rem] uppercase tracking-label text-ivory/50 sm:px-8">
        <span>{project.format}</span>
        <span className="text-reel">REC ●</span>
      </div>

      <div className="relative px-6 pb-2 sm:px-8">
        <p className="font-mono text-xs text-reel">{project.year}</p>
        <p className="mt-1 font-display text-[clamp(1.8rem,4vw,3rem)] font-light leading-none">
          {project.title}
        </p>
      </div>

      <div className="relative flex items-center justify-between border-t border-ivory/10 px-6 py-3 font-mono text-[0.58rem] uppercase tracking-label text-ivory/40 sm:px-8">
        <span>Roll 24</span>
        <span>{project.role}</span>
        <span className="tabular-nums">00:00:{String(project.year).slice(-2)}:00</span>
      </div>
    </div>
  );
}

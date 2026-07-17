"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import ProjectPoster from "./ProjectPoster";

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[95] flex justify-end bg-graphite/70 backdrop-blur-sm overflow-y-auto no-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative min-h-screen w-full max-w-2xl bg-ivory"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header controls */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-ivory/90 px-6 py-4 backdrop-blur-md sm:px-10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-graphite/70 hover:text-graphite"
          >
            <ArrowLeft size={14} /> Back to Work
          </button>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-full border border-graphite/20 p-2 text-graphite hover:bg-graphite hover:text-ivory"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 pb-16 sm:px-10">
          {/* hero visual */}
          <div className="relative mt-2 aspect-video w-full overflow-hidden rounded bg-black/90 border border-graphite/10 shadow-sm">
            <ProjectPoster project={project} sizes="(max-width: 768px) 100vw, 640px" />
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-label text-reel">
            {project.year} · {project.format}
          </p>
          <h2
            id="modal-title"
            className="mt-3 font-display text-5xl font-light text-graphite"
          >
            {project.title}
          </h2>
          <p className="mt-3 font-display text-xl italic text-graphite/60">
            {project.tagline}
          </p>

          <p className="mt-8 max-w-prose leading-relaxed text-graphite/80">
            {project.description}
          </p>

          {/* credits */}
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-graphite/15 pt-8">
            {project.credits.map((c) => (
              <div key={c.label}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-label text-graphite/45">
                  {c.label}
                </dt>
                <dd className="mt-1 font-display text-lg text-graphite">
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* gallery */}
          {project.gallery.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-3">
              {project.gallery.map((src, i) => (
                <div key={i} className="relative aspect-video overflow-hidden bg-graphite">
                  <Image
                    src={src}
                    alt={`${project.title} still ${i + 1}`}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-graphite px-6 py-3 font-mono text-xs uppercase tracking-label text-ivory hover:bg-reel"
            >
              {project.externalLabel ?? "View External"} <ExternalLink size={14} />
            </a>
          )}

          {/* prev / next */}
          <div className="mt-14 flex items-center justify-between border-t border-graphite/15 pt-6">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-graphite/70 hover:text-graphite"
            >
              <ArrowLeft size={14} /> Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-graphite/70 hover:text-graphite"
            >
              Next <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

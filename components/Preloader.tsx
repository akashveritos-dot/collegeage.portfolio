"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/site";

/**
 * Film-countdown preloader. A timecode counts up while a playhead sweeps
 * the timeline, then the name is revealed and the curtain lifts.
 * Skipped for repeat visits in the same session and for reduced motion.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const seen =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("rld_seen");

    if (reduced || seen) return;

    document.body.style.overflow = "hidden";
    setShow(true);

    const start = performance.now();
    const DURATION = 1900;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const done = setTimeout(() => {
      sessionStorage.setItem("rld_seen", "1");
      setShow(false);
      document.body.style.overflow = "";
    }, DURATION + 650);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  const tc = (n: number) => {
    const total = Math.floor((n / 100) * 240); // fake frames up to 00:00:10:00
    const s = String(Math.floor(total / 24)).padStart(2, "0");
    const f = String(total % 24).padStart(2, "0");
    return `00:00:${s}:${f}`;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col justify-between bg-graphite px-5 py-6 text-ivory sm:px-8 sm:py-8"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top row — timecode */}
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-label text-ivory/60">
            <span>Loading Reel</span>
            <span className="tabular-nums text-reel">{tc(count)}</span>
          </div>

          {/* Center — name reveal */}
          <div className="flex flex-1 items-center">
            <div className="w-full">
              <div className="reveal-line">
                <motion.h1
                  className="font-display text-[clamp(2rem,9vw,6rem)] font-light leading-none"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {profile.name}
                </motion.h1>
              </div>
              <motion.p
                className="mt-3 font-mono text-xs uppercase tracking-label text-ivory/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {profile.discipline}
              </motion.p>
            </div>
          </div>

          {/* Bottom — timeline + playhead */}
          <div>
            <div className="relative h-px w-full bg-ivory/20">
              <motion.div
                className="absolute inset-y-0 left-0 bg-reel"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-reel"
                initial={{ left: "0%" }}
                animate={{ left: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[0.6rem] uppercase tracking-label text-ivory/40">
              <span>Frame 001</span>
              <span className="tabular-nums">{count}%</span>
              <span>Cut</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

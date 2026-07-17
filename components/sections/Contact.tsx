"use client";

import { useState } from "react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import Socials from "@/components/ui/Socials";
import { profile } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMsg, setServerMsg] = useState("");

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) e.name = "Please enter your name.";
    if (!emailRe.test(email)) e.email = "Please enter a valid email address.";
    if (message.length < 10) e.message = "Tell me a little more (10+ characters).";
    return e;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields.
    if (data.get("company")) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("error");
      setServerMsg("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          production: data.get("production"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Request failed");
      setStatus("success");
      setServerMsg(json.message || "Message sent. Thank you.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerMsg(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const field =
    "w-full border-b border-ivory/25 bg-transparent py-3 text-ivory placeholder:text-ivory/30 focus:border-reel focus:outline-none";

  return (
    <section id="contact" className="relative overflow-hidden w-full max-w-full bg-graphite py-8 text-ivory sm:py-16 lg:py-20">
      <div className="shell">
        <Reveal className="mb-2 sm:mb-8 flex items-center gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-reel">
            06 — Contact
          </span>
          <span className="h-px flex-1 bg-ivory/15" />
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left — pitch */}
          <div className="lg:col-span-5">
            <h2 className="text-display font-display font-light">
              <RevealLines lines={["Have a story that", "needs its rhythm?"]} />
            </h2>
            <Reveal as="p" className="mt-8 max-w-sm text-lg leading-relaxed text-ivory/70">
              Producers, directors and production houses — send the project,
              the timeline and where you want the audience to feel it most.
            </Reveal>

            {profile.email && (
              <Reveal className="mt-8">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline font-display text-2xl text-ivory"
                >
                  {profile.email}
                </a>
              </Reveal>
            )}

            {profile.availability && (
              <Reveal className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ivory/60">
                <span className="h-2 w-2 rounded-full bg-reel" />
                {profile.availability}
              </Reveal>
            )}

            <Reveal className="mt-10">
              <Socials tone="dark" />
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              {/* honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    className={`${field} mt-2`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="err-name" className="mt-2 font-mono text-xs text-reel">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    className={`${field} mt-2`}
                    placeholder="you@studio.com"
                  />
                  {errors.email && (
                    <p id="err-email" className="mt-2 font-mono text-xs text-reel">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="production" className="label">
                  Project / Production
                </label>
                <input
                  id="production"
                  name="production"
                  type="text"
                  className={`${field} mt-2`}
                  placeholder="Feature, series, format… (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  className={`${field} mt-2 resize-none`}
                  placeholder="Tell me about the story and the timeline."
                />
                {errors.message && (
                  <p id="err-message" className="mt-2 font-mono text-xs text-reel">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full bg-reel px-7 py-3.5 font-mono text-xs uppercase tracking-label text-ivory transition-colors hover:bg-reel/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  {status !== "loading" && <span aria-hidden>→</span>}
                </button>

                {/* status region for screen readers */}
                <p
                  role="status"
                  aria-live="polite"
                  className={`font-mono text-xs ${
                    status === "success"
                      ? "text-reel"
                      : status === "error"
                        ? "text-reel"
                        : "text-ivory/50"
                  }`}
                >
                  {serverMsg}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

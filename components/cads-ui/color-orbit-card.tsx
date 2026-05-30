"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ColorOrbitCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  metric?: string;
  cta?: string;
  className?: string;
};

export function ColorOrbitCard({
  eyebrow = "New component",
  title = "Color Orbit Card",
  description = "A premium card with a colorful animated border that keeps orbiting around the surface.",
  metric = "360°",
  cta = "View source",
  className,
}: ColorOrbitCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn("group relative w-full max-w-md overflow-hidden rounded-[2rem] p-[1.5px]", className)}
    >
      <div className="absolute -inset-24 animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg,#d7ff5c,#40c9ff,#a855f7,#ff4ecd,#ff9f1c,#d7ff5c)] opacity-90 blur-[2px]" />
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,92,0.22),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(64,201,255,0.18),transparent_32%)]" />

      <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/10 bg-ink/90 p-6 shadow-2xl shadow-black/35 backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl transition group-hover:bg-acid/25" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-acid">
            <Sparkles size={13} /> {eyebrow}
          </span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1 font-[var(--font-display)] text-2xl text-bone">
            {metric}
          </span>
        </div>

        <h3 className="mt-10 font-[var(--font-display)] text-4xl leading-none tracking-[-0.04em] text-bone">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-bone/62">{description}</p>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-xs uppercase tracking-[0.22em] text-bone/42">Animated border</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-bone px-4 py-2 text-sm font-bold text-ink transition hover:bg-acid focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70"
          >
            {cta} <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

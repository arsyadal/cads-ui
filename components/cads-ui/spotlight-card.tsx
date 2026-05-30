"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: string;
};

export function SpotlightCard({
  eyebrow = "Spotlight",
  title = "Cursor-reactive card",
  description = "A premium surface with a soft light that follows the pointer and degrades safely on touch devices.",
  cta = "Explore",
  className,
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <article
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-bone/12 bg-bone/[0.045] p-6 text-bone shadow-2xl shadow-black/25 backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100",
        "before:bg-[radial-gradient(220px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(215,255,92,0.20),rgba(64,201,255,0.08)_38%,transparent_70%)]",
        "after:pointer-events-none after:absolute after:inset-px after:rounded-[calc(2rem-1px)] after:border after:border-white/5 after:content-['']",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-copper/10 blur-3xl transition group-hover:bg-acid/15" />
      <div className="relative">
        <span className="inline-flex rounded-full border border-acid/25 bg-acid/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-acid">
          {eyebrow}
        </span>
        <h3 className="mt-10 font-[var(--font-display)] text-4xl leading-none tracking-[-0.045em]">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-bone/62">{description}</p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.04] px-4 py-2 text-sm font-bold text-bone/78 transition hover:border-acid/35 hover:bg-acid hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70"
        >
          {cta} <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

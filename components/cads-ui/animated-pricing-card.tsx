"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedPricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
};

export function AnimatedPricingCard({
  name,
  price,
  description,
  features,
  cta,
  badge,
  featured,
}: AnimatedPricingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: featured ? 1.025 : 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl shadow-black/20",
        featured
          ? "border-acid/40 bg-gradient-to-b from-acid/[0.16] via-bone/[0.07] to-bone/[0.035]"
          : "border-bone/12 bg-bone/[0.04]",
      )}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-bone/50 to-transparent opacity-40" />
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity",
          featured ? "bg-acid/25 opacity-100" : "bg-copper/20 opacity-0 group-hover:opacity-100",
        )}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-bone/60">{name}</p>
          <div className="mt-4 flex items-end gap-2">
            <h3 className="font-[var(--font-display)] text-6xl leading-none tracking-[-0.05em] text-bone">{price}</h3>
            {price !== "$0" ? <span className="mb-2 text-sm text-bone/45">one-time</span> : null}
          </div>
        </div>
        {badge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-acid px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-ink">
            <Sparkles size={13} /> {badge}
          </span>
        ) : null}
      </div>

      <p className="relative mt-5 min-h-12 text-sm leading-6 text-bone/62">{description}</p>

      <ul className="relative mt-7 space-y-3 border-t border-bone/10 pt-6">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-bone/72">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid/15 text-acid">
              <Check size={14} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={cn(
          "relative mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70",
          featured ? "bg-acid text-ink hover:bg-[#e5ff83]" : "border border-bone/15 text-bone/80 hover:bg-bone/10",
        )}
      >
        {cta}
      </a>
    </motion.article>
  );
}

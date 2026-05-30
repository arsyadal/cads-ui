"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type FloatingIslandItem = {
  label: string;
  href: string;
};

type FloatingIslandNavbarProps = {
  items: FloatingIslandItem[];
  active?: string;
  cta?: { label: string; href: string };
  className?: string;
};

export function FloatingIslandNavbar({ items, active = items[0]?.href, cta, className }: FloatingIslandNavbarProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "mx-auto flex w-fit max-w-[calc(100vw-24px)] items-center gap-1 rounded-full border border-bone/15 bg-ink/70 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-1 overflow-x-auto rounded-full">
        {items.map((item) => {
          const isActive = item.href === active;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm text-bone/70 transition-colors hover:text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70",
                isActive && "text-ink",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="floating-island-active"
                  className="absolute inset-0 rounded-full bg-acid"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{item.label}</span>
            </a>
          );
        })}
      </div>
      {cta ? (
        <a
          href={cta.href}
          className="hidden rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70 sm:inline-flex"
        >
          {cta.label}
        </a>
      ) : null}
    </nav>
  );
}

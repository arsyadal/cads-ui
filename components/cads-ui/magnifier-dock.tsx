"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DockItem = {
  label: string;
  icon: LucideIcon;
  href: string;
};

type MagnifierDockProps = {
  items: DockItem[];
  className?: string;
};

function DockIcon({ item, mouseX }: { item: DockItem; mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const distance = useTransform(mouseX, (value) => {
    if (typeof document === "undefined") return 999;
    const bounds = document.getElementById(`dock-${item.label}`)?.getBoundingClientRect();
    return bounds ? value - bounds.left - bounds.width / 2 : 999;
  });
  const width = useTransform(distance, [-160, 0, 160], [48, 76, 48]);
  const smoothWidth = useSpring(width, { mass: 0.2, stiffness: 180, damping: 18 });

  return (
    <motion.a
      id={`dock-${item.label}`}
      href={item.href}
      style={{ width: smoothWidth, height: smoothWidth }}
      className="group relative grid place-items-center rounded-2xl border border-bone/10 bg-bone/8 text-bone shadow-lg shadow-black/25 backdrop-blur transition focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70"
      aria-label={item.label}
    >
      <item.icon className="h-5 w-5 transition group-hover:text-acid" />
      <span className="pointer-events-none absolute -top-10 scale-95 rounded-full bg-bone px-3 py-1 text-xs font-bold text-ink opacity-0 shadow-xl transition group-hover:scale-100 group-hover:opacity-100">
        {item.label}
      </span>
    </motion.a>
  );
}

export function MagnifierDock({ items, className }: MagnifierDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex w-fit items-end gap-3 rounded-[1.75rem] border border-bone/15 bg-ink/65 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl",
        "max-sm:gap-2 max-sm:overflow-x-auto max-sm:[&>a]:!h-12 max-sm:[&>a]:!w-12",
        className,
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.label} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}

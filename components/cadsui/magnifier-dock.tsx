"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"

export type DockItem = {
  label: string
  href: string
  icon: React.ReactNode
  target?: string
}

export type MagnifierDockProps = {
  items: DockItem[]
  size?: number
  magnifiedSize?: number
  className?: string
}

export function MagnifierDock({ items, size = 48, magnifiedSize = 76, className }: MagnifierDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <nav
      aria-label="Shortcut dock"
      className={cn(
        "mx-auto flex w-fit items-end gap-2 rounded-[1.6rem] border border-white/12 bg-[#07090b]/72 px-3 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl",
        className,
      )}
      onMouseMove={(event) => mouseX.set(event.clientX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
    >
      {items.map((item) => (
        <DockIcon key={`${item.label}-${item.href}`} item={item} mouseX={mouseX} size={size} magnifiedSize={magnifiedSize} />
      ))}
    </nav>
  )
}

function DockIcon({
  item,
  mouseX,
  size,
  magnifiedSize,
}: {
  item: DockItem
  mouseX: MotionValue<number>
  size: number
  magnifiedSize: number
}) {
  const ref = React.useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return Number.POSITIVE_INFINITY
    return value - bounds.left - bounds.width / 2
  })
  const widthTransform = useTransform(distance, [-170, 0, 170], [size, magnifiedSize, size])
  const yTransform = useTransform(distance, [-120, 0, 120], [0, -10, 0])
  const width = useSpring(reduceMotion ? size : widthTransform, { mass: 0.18, stiffness: 220, damping: 18 })
  const y = useSpring(reduceMotion ? 0 : yTransform, { mass: 0.18, stiffness: 220, damping: 18 })

  return (
    <motion.div className="group relative flex aspect-square items-center justify-center" style={{ width, y }}>
      <Link
        ref={ref}
        href={item.href}
        target={item.target}
        rel={item.target === "_blank" ? "noreferrer" : undefined}
        aria-label={item.label}
        className="grid size-full place-items-center rounded-[1.15rem] border border-white/10 bg-white/[0.055] text-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-200/30 hover:bg-cyan-200/12 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200/60"
      >
        <span className="grid size-5 place-items-center md:size-6">{item.icon}</span>
      </Link>
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#080a0d] px-3 py-1 text-xs whitespace-nowrap text-white/78 opacity-0 shadow-xl transition duration-150 group-hover:-top-12 group-hover:opacity-100 group-focus-within:-top-12 group-focus-within:opacity-100">
        {item.label}
      </span>
    </motion.div>
  )
}

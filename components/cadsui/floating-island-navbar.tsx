"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type NavItem = {
  label: string
  href: string
  icon?: React.ReactNode
}

export type FloatingIslandNavbarProps = {
  logo?: React.ReactNode
  items: NavItem[]
  cta?: {
    label: string
    href: string
  }
  activeHref?: string
  className?: string
}

export function FloatingIslandNavbar({
  logo,
  items,
  cta,
  activeHref,
  className,
}: FloatingIslandNavbarProps) {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16)
  })

  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <div className={cn("fixed inset-x-0 top-5 z-40 flex justify-center px-4", className)}>
      <motion.nav
        initial={reduceMotion ? false : { y: -18, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className={cn(
          "relative w-full max-w-3xl overflow-hidden rounded-full border px-3 py-2 shadow-2xl backdrop-blur-2xl transition-colors duration-300 md:w-auto",
          scrolled
            ? "border-white/14 bg-[#07090b]/82 shadow-black/45"
            : "border-white/10 bg-[#07090b]/48 shadow-black/20",
        )}
        aria-label="Floating navigation"
      >
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(102,244,255,0.16),transparent_28%,rgba(248,197,114,0.12)_68%,transparent)]" />
        <div className="relative flex items-center justify-between gap-2">
          <Link href="/" className="flex min-w-0 items-center gap-2 rounded-full px-2 py-1 text-white">
            {logo ?? <DefaultLogo />}
            <span className="hidden text-sm font-semibold tracking-[0.2em] uppercase sm:inline">CadsUI</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <NavLink key={item.href} item={item} active={activeHref === item.href} />
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {cta ? (
              <Link
                href={cta.href}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                {cta.label}
              </Link>
            ) : null}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative overflow-hidden md:hidden"
            >
              <div className="mt-2 grid gap-1 border-t border-white/10 pt-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-white/70 transition",
                      activeHref === item.href && "bg-white/10 text-white",
                    )}
                  >
                    {item.icon ? <span className="text-cyan-100">{item.icon}</span> : null}
                    {item.label}
                  </Link>
                ))}
                {cta ? (
                  <Link
                    href={cta.href}
                    onClick={() => setOpen(false)}
                    className="mt-1 rounded-2xl bg-white px-3 py-3 text-center text-sm font-semibold text-black"
                  >
                    {cta.label}
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/62 transition hover:text-white",
        active && "text-white",
      )}
    >
      {active ? (
        <motion.span
          layoutId="cadsui-floating-active"
          className="absolute inset-0 rounded-full border border-white/10 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          transition={{ type: "spring", stiffness: 360, damping: 34 }}
        />
      ) : (
        <span className="absolute inset-0 rounded-full opacity-0 transition group-hover:bg-white/8 group-hover:opacity-100" />
      )}
      {item.icon ? <span className="relative text-cyan-100/80">{item.icon}</span> : null}
      <span className="relative">{item.label}</span>
    </Link>
  )
}

function DefaultLogo() {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_140deg,#66f4ff,#a38bff,#f8c572,#66f4ff)] p-px">
      <span className="grid size-full place-items-center rounded-full bg-[#080a0c] text-xs font-black tracking-tighter text-white">
        C
      </span>
    </span>
  )
}

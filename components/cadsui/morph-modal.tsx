"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export type MorphModalProps = {
  trigger: React.ReactNode
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function MorphModal({ trigger, title, description, children, footer, className }: MorphModalProps) {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const titleId = React.useId()
  const descriptionId = React.useId()
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const timer = window.setTimeout(() => {
      dialogRef.current?.focus()
    }, 40)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="contents"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {trigger}
      </button>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className="fixed inset-0 z-50 grid place-items-center px-4 py-8"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                >
                  <motion.button
                    type="button"
                    aria-label="Close modal"
                    className="absolute inset-0 cursor-default bg-black/62 backdrop-blur-md"
                    onClick={() => setOpen(false)}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                  />

                  <motion.div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? titleId : undefined}
                    aria-describedby={description ? descriptionId : undefined}
                    tabIndex={-1}
                    className={cn(
                      "relative max-h-[88vh] w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#080a0d]/95 text-left text-white shadow-[0_30px_120px_rgba(0,0,0,0.7)] outline-none backdrop-blur-2xl",
                      className,
                    )}
                    initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.94, borderRadius: "999px" }}
                    animate={{ opacity: 1, y: 0, scale: 1, borderRadius: "2rem" }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.96, borderRadius: "999px" }}
                    transition={{ type: "spring", stiffness: 310, damping: 30 }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(102,244,255,0.2),transparent_36%),radial-gradient(circle_at_88%_12%,rgba(248,197,114,0.16),transparent_34%)]" />
                    <div className="relative flex items-start justify-between gap-6 border-b border-white/10 p-6">
                      <div>
                        {title ? (
                          <h2 id={titleId} className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {title}
                          </h2>
                        ) : null}
                        {description ? (
                          <p id={descriptionId} className="mt-2 max-w-md text-sm leading-6 text-white/58">
                            {description}
                          </p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        aria-label="Close modal"
                        onClick={() => setOpen(false)}
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/8 text-white/68 transition hover:bg-white/12 hover:text-white"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="relative overflow-y-auto p-6">{children}</div>

                    {footer ? <div className="relative border-t border-white/10 p-6">{footer}</div> : null}
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  )
}

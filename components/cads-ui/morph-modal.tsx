"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useId, useState } from "react";

export function MorphModal() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const surfaceId = `morph-modal-surface-${id}`;

  return (
    <LayoutGroup id={surfaceId}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <motion.button
            layoutId={surfaceId}
            className="relative overflow-hidden rounded-full bg-copper px-5 py-3 text-sm font-bold text-white shadow-copper transition hover:-translate-y-0.5 hover:bg-[#de7d42] focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70"
            style={{ borderRadius: 999 }}
            transition={{ layout: { type: "spring", stiffness: 430, damping: 36, mass: 0.85 } }}
          >
            <motion.span layout="position" className="relative z-10">
              Open Morph Modal
            </motion.span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/18 to-white/0 opacity-70" />
          </motion.button>
        </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                layoutId={surfaceId}
                className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-bone/15 bg-[#12120f] p-6 shadow-2xl shadow-black/60 outline-none"
                style={{ borderRadius: 32 }}
                transition={{ layout: { type: "spring", stiffness: 430, damping: 36, mass: 0.85 } }}
              >
                <motion.div
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-acid/20 blur-3xl"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.28, delay: 0.08 }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.18, delay: 0.16 }}
                >
                  <Dialog.Close className="absolute right-4 top-4 rounded-full border border-bone/10 bg-bone/5 p-2 text-bone/70 transition hover:text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70">
                    <X size={18} />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                  transition={{ duration: 0.28, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-4 inline-flex rounded-full border border-acid/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-acid">
                    Premium interaction
                  </p>
                  <Dialog.Title className="font-[var(--font-display)] text-4xl leading-tight text-bone md:text-5xl">
                    Modal that opens like liquid metal.
                  </Dialog.Title>
                  <Dialog.Description className="mt-4 max-w-md text-bone/65">
                    Built for signup flows, product previews, and gallery moments that need a cinematic entrance without a heavy abstraction.
                  </Dialog.Description>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button className="rounded-full bg-acid px-5 py-3 text-sm font-bold text-ink">Copy component</button>
                    <Dialog.Close className="rounded-full border border-bone/15 px-5 py-3 text-sm text-bone/80">Close</Dialog.Close>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
      </Dialog.Root>
    </LayoutGroup>
  );
}

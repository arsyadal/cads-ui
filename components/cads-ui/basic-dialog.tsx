"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost">Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-[min(92vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-bone/12 bg-[#12120f] p-6 text-bone shadow-2xl shadow-black/50 outline-none",
          )}
        >
          <Dialog.Close className="absolute right-4 top-4 rounded-full border border-bone/10 bg-bone/5 p-2 text-bone/70 transition hover:text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-acid/70">
            <X size={18} />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          <Dialog.Title className="font-[var(--font-display)] text-4xl leading-none tracking-[-0.04em]">
            Basic Dialog
          </Dialog.Title>
          <Dialog.Description className="mt-3 max-w-sm text-sm leading-6 text-bone/62">
            Accessible Radix-powered dialog for confirmations, forms, and simple product messages.
          </Dialog.Description>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button size="sm">Confirm</Button>
            <Dialog.Close asChild>
              <Button size="sm" variant="ghost">Cancel</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

"use client"

import { Bell, Briefcase, Github, Home, LayoutGrid, Linkedin, Mail, Rocket, Search, Sparkles, Twitter } from "lucide-react"
import { FloatingIslandNavbar } from "@/components/cadsui/floating-island-navbar"
import { MagnifierDock } from "@/components/cadsui/magnifier-dock"
import { MorphModal } from "@/components/cadsui/morph-modal"

export function ComponentPreview({ slug }: { slug: string }) {
  if (slug === "floating-island-navbar") return <FloatingIslandNavbarPreview />
  if (slug === "morph-modal") return <MorphModalPreview />
  if (slug === "magnifier-dock") return <MagnifierDockPreview />
  return null
}

export function FloatingIslandNavbarPreview() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#06080a]">
      <div className="grid-fade absolute inset-0 opacity-70" />
      <FloatingIslandNavbar
        className="absolute top-4"
        activeHref="#features"
        items={[
          { label: "Home", href: "#home", icon: <Home size={15} /> },
          { label: "Features", href: "#features", icon: <Sparkles size={15} /> },
          { label: "Work", href: "#work", icon: <Briefcase size={15} /> },
        ]}
        cta={{ label: "Launch", href: "#launch" }}
      />
      <div className="relative mx-auto flex min-h-[360px] max-w-2xl flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-4 rounded-full border border-cyan-200/20 bg-cyan-200/8 px-4 py-2 text-xs font-medium tracking-[0.24em] text-cyan-100 uppercase">
          Floating navigation
        </p>
        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">A navbar that behaves like a product detail.</h3>
        <p className="mt-5 max-w-lg text-sm leading-6 text-white/55">
          Pill layout, active state, scroll-aware surface, and responsive expansion are included.
        </p>
      </div>
    </div>
  )
}

export function MorphModalPreview() {
  return (
    <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#06080a] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(163,139,255,0.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(102,244,255,0.14),transparent_32%)]" />
      <MorphModal
        title="Launch Pack"
        description="A compact modal pattern for product previews, onboarding, and premium content reveals."
        trigger={
          <div className="relative w-full max-w-sm cursor-pointer rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/40 transition hover:-translate-y-1 hover:bg-white/[0.075]">
            <div className="mb-10 grid size-12 place-items-center rounded-2xl bg-cyan-200/12 text-cyan-100">
              <Rocket size={22} />
            </div>
            <p className="text-sm text-white/50">Click to morph</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">Open premium detail</h3>
          </div>
        }
        footer={
          <button className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100">
            Copy component
          </button>
        }
      >
        <div className="grid gap-3 text-sm leading-6 text-white/64">
          <p>
            Morph Modal includes backdrop blur, spring scale motion, close affordances, keyboard escape, focus return, and dark mode styling.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white/70">
            Best for portfolio previews, feature explanations, login prompts, and compact product detail flows.
          </div>
        </div>
      </MorphModal>
    </div>
  )
}

export function MagnifierDockPreview() {
  return (
    <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#06080a] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(102,244,255,0.09),transparent_35%,rgba(248,197,114,0.11))]" />
      <div className="relative text-center">
        <p className="mb-8 text-sm text-white/50">Hover the dock</p>
        <MagnifierDock
          items={[
            { label: "GitHub", href: "#github", icon: <Github size={22} /> },
            { label: "Twitter", href: "#twitter", icon: <Twitter size={22} /> },
            { label: "LinkedIn", href: "#linkedin", icon: <Linkedin size={22} /> },
            { label: "Email", href: "#email", icon: <Mail size={22} /> },
            { label: "Search", href: "#search", icon: <Search size={22} /> },
            { label: "Updates", href: "#updates", icon: <Bell size={22} /> },
            { label: "Components", href: "#components", icon: <LayoutGrid size={22} /> },
          ]}
        />
      </div>
    </div>
  )
}

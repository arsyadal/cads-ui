"use client"

import Link from "next/link"
import { ArrowRight, Github, Layers3, Palette, Sparkles, Terminal } from "lucide-react"
import { FloatingIslandNavbarPreview, MagnifierDockPreview, MorphModalPreview } from "@/components/site/component-preview"

const stats = [
  { label: "MVP components", value: "3" },
  { label: "Distribution", value: "copy-paste" },
  { label: "Stack", value: "React + Tailwind" },
]

export function HeroSection() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-40">
        <div className="grid-fade absolute inset-x-0 top-0 h-[760px] opacity-60" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-sm text-white/58 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <span className="grid size-7 place-items-center rounded-full bg-cyan-200/12 text-cyan-100">
                <Sparkles size={15} />
              </span>
              MVP 0.1 is focused on premium motion primitives.
            </div>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.88] tracking-[-0.08em] text-white md:text-8xl">
              Motion components that make interfaces feel expensive.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
              CadsUI is a copy-paste kit for React, Tailwind, and shadcn-style projects. Start with a floating navbar, morph modal, and magnifier dock — then customize the source.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/components"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                View components <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <Github size={16} /> GitHub soon
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="text-2xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-white/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[640px] lg:min-h-[720px]">
            <div className="absolute right-0 top-0 w-[88%] rotate-2 scale-[0.92] opacity-80 blur-[0.1px]">
              <FloatingIslandNavbarPreview />
            </div>
            <div className="absolute left-0 top-48 w-[72%] -rotate-3 shadow-2xl shadow-black/50">
              <MorphModalPreview />
            </div>
            <div className="absolute bottom-0 right-4 w-[76%] rotate-1 shadow-2xl shadow-black/50">
              <MagnifierDockPreview />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-white/[0.035] p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <Feature icon={<Terminal size={20} />} title="Copy-paste first">
              No black-box library. You own the component source and can edit every class, prop, and motion curve.
            </Feature>
            <Feature icon={<Palette size={20} />} title="Premium visual defaults">
              Dark mode, depth, active states, and micro-interactions are designed from the first commit.
            </Feature>
            <Feature icon={<Layers3 size={20} />} title="MVP-sized scope">
              The first launch ships three polished components, documentation, and live previews.
            </Feature>
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[1.8rem] border border-white/10 bg-[#07090b]/70 p-6">
      <div className="mb-8 grid size-11 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">{icon}</div>
      <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/52">{children}</p>
    </article>
  )
}

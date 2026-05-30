"use client";

import { ArrowRight, Code2, Layers3, Mail, Package, Send, Sparkles, Terminal, WandSparkles } from "lucide-react";
import { AnimatedPricingCard } from "@/components/cads-ui/animated-pricing-card";
import { Badge } from "@/components/cads-ui/badge";
import { BasicDialog } from "@/components/cads-ui/basic-dialog";
import { Button } from "@/components/cads-ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cads-ui/card";
import { Input } from "@/components/cads-ui/input";
import { ColorOrbitCard } from "@/components/cads-ui/color-orbit-card";
import { FloatingIslandNavbar } from "@/components/cads-ui/floating-island-navbar";
import { MagnifierDock } from "@/components/cads-ui/magnifier-dock";
import { MorphModal } from "@/components/cads-ui/morph-modal";
import { SpotlightCard } from "@/components/cads-ui/spotlight-card";

const navItems = [
  { label: "Components", href: "#components" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "#pricing" },
];

const dockItems = [
  { label: "Code", href: "#", icon: Code2 },
  { label: "Install", href: "#install", icon: Terminal },
  { label: "Pack", href: "#pricing", icon: Package },
  { label: "Updates", href: "#", icon: Mail },
  { label: "Launch", href: "#", icon: Send },
];

const freeCoreItems = ["Button", "Badge", "Card", "Input", "Textarea", "Basic Dialog"];
const proMotionItems = ["Morph Modal", "Floating Island Navbar", "Magnifier Dock", "Color Orbit Card", "Animated Pricing Card", "Spotlight Card"];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Public components for developers who want to test the feel before buying the full pack.",
    features: ["6 free core components", "Copy-paste source", "Docs + install notes", "Dark mode baseline"],
    cta: "Start free",
  },
  {
    name: "Early Access",
    price: "$19",
    description: "The first paid pack for indie builders who want premium interactions without designing from zero.",
    features: ["10+ motion components", "Premium component source", "Commercial project usage", "Beta lifetime updates"],
    cta: "Get early access",
    badge: "Best",
    featured: true,
  },
  {
    name: "Lifetime",
    price: "$99",
    description: "A higher-trust bundle hypothesis for future packs, blocks, and registry access.",
    features: ["All future component packs", "Landing page blocks", "Registry/CLI access", "Priority component requests"],
    cta: "Join waitlist",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="cads-grid pointer-events-none absolute inset-0" />
      <header className="sticky top-4 z-30 px-4 pt-4">
        <FloatingIslandNavbar items={navItems} active="#components" cta={{ label: "Get early access", href: "#pricing" }} />
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-acid/25 bg-acid/10 px-4 py-2 text-sm text-acid">
            <Sparkles size={16} /> MVP 0.1 now in build
          </div>
          <h1 className="font-[var(--font-display)] text-6xl leading-[0.9] tracking-[-0.05em] text-bone md:text-8xl">
            Premium motion components, without the library weight.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-bone/68">
            cads-ui is a copy-paste component kit for React developers building landing pages, portfolios, and SaaS marketing sites that need to feel expensive fast.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/docs" className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5">
              Browse docs <ArrowRight size={18} />
            </a>
            <a href="#components" className="inline-flex items-center justify-center rounded-full border border-bone/15 px-6 py-3 text-bone/80 transition hover:bg-bone/10">
              See components
            </a>
          </div>
        </div>

        <div className="relative rounded-[2.5rem] border border-bone/12 bg-bone/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="absolute -right-16 -top-12 h-52 w-52 rounded-full bg-copper/25 blur-3xl" />
          <div className="rounded-[2rem] border border-bone/10 bg-ink/80 p-6">
            <div className="mb-8 flex items-center justify-between border-b border-bone/10 pb-4">
              <span className="font-[var(--font-display)] text-2xl">cads-ui</span>
              <span className="rounded-full bg-acid px-3 py-1 text-xs font-bold text-ink">FREE + PRO</span>
            </div>
            <div className="space-y-8">
              <FloatingIslandNavbar items={navItems} active="/docs" />
              <div className="rounded-[2rem] border border-bone/10 bg-gradient-to-br from-bone/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-copper">Morph Modal</p>
                <h2 className="mt-3 font-[var(--font-display)] text-4xl leading-none">Open cinematic UI moments.</h2>
                <p className="mt-3 text-sm text-bone/60">Radix accessibility + spring motion + Tailwind ownership.</p>
                <div className="mt-6"><MorphModal /></div>
              </div>
              <MagnifierDock items={dockItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="relative overflow-hidden p-2">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-acid/12 blur-3xl" />
            <CardHeader>
              <Badge variant="acid" className="w-fit">Free Core</Badge>
              <CardTitle className="text-5xl">Basic components that earn trust first.</CardTitle>
              <CardDescription>
                Open, copy-paste primitives for adoption: enough to build forms, sections, and docs without paying.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap gap-2">
                {freeCoreItems.map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
              <div className="rounded-[1.5rem] border border-bone/10 bg-black/25 p-4">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-bone/75">
                  <Layers3 size={16} className="text-acid" /> Preview primitives
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Button</Button>
                  <Button size="sm" variant="ghost">Ghost</Button>
                  <Badge variant="copper">Beta</Badge>
                  <Input className="max-w-52" placeholder="Email" aria-label="Email preview" />
                  <BasicDialog />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden p-2">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-copper/16 blur-3xl" />
            <CardHeader>
              <Badge variant="copper" className="w-fit">Pro Motion</Badge>
              <CardTitle className="text-5xl">Animated components people pay for.</CardTitle>
              <CardDescription>
                Premium interactions for landing pages, portfolios, and SaaS marketing sites that need visual impact fast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex flex-wrap gap-2">
                {proMotionItems.map((item) => (
                  <Badge key={item} variant="default">{item}</Badge>
                ))}
              </div>
              <div className="rounded-[1.5rem] border border-bone/10 bg-black/25 p-4">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-bone/75">
                  <WandSparkles size={16} className="text-copper" /> Motion preview
                </div>
                <ColorOrbitCard title="Pro Motion" description="Animated components become the paid layer." metric="PRO" cta="Preview" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="components" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-copper">MVP components</p>
            <h2 className="mt-3 font-[var(--font-display)] text-5xl tracking-[-0.04em]">Start with three sharp interactions.</h2>
          </div>
          <a href="/docs" className="hidden rounded-full border border-bone/15 px-5 py-3 text-sm text-bone/75 md:inline-flex">View docs</a>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {[
            ["Floating Island Navbar", "Sticky rounded navigation with active-pill motion and CTA slot."],
            ["Morph Modal", "Accessible modal with backdrop fade and organic scale/morph entrance."],
            ["Magnifier Dock", "Icon launcher with hover magnification, tooltips, and mobile fallback."],
            ["Color Orbit Card", "Card with colorful animated border that moves around the surface."],
            ["Spotlight Card", "Cursor-follow highlight card with a soft premium light field."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[2rem] border border-bone/12 bg-bone/[0.04] p-6 transition hover:-translate-y-1 hover:bg-bone/[0.07]">
              <h3 className="font-[var(--font-display)] text-3xl">{title}</h3>
              <p className="mt-4 text-bone/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid items-center gap-8 rounded-[2.5rem] border border-bone/12 bg-bone/[0.035] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-acid">New card component</p>
            <h2 className="mt-3 font-[var(--font-display)] text-5xl leading-none tracking-[-0.05em]">
              A border that keeps orbiting.
            </h2>
            <p className="mt-5 max-w-md text-bone/62">
              Designed for feature highlights, premium plan cards, product stats, or any section that needs one focal card.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ColorOrbitCard />
            <SpotlightCard />
          </div>
        </div>
      </section>

      <section id="install" className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-bone/12 bg-[#11110f] p-6">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-acid">Install baseline</p>
          <pre className="rounded-2xl bg-black/45 p-5 text-sm text-bone/85"><code>{`npm install motion @radix-ui/react-dialog lucide-react clsx tailwind-merge`}</code></pre>
        </div>
      </section>

      <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-4xl rounded-full bg-acid/10 blur-3xl" />
        <div className="relative mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-copper">Pricing hypothesis</p>
            <h2 className="mt-3 max-w-2xl font-[var(--font-display)] text-5xl tracking-[-0.05em] md:text-6xl">
              Free to try. Paid when the UI starts selling for you.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-bone/58">
            Pricing is intentionally simple for MVP validation: prove demand, sell the pack, then expand into CLI and blocks.
          </p>
        </div>
        <div className="relative grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <AnimatedPricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    </main>
  );
}

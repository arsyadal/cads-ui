"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ArrowLeft, Code2, Mail, Package, Send, Terminal } from "lucide-react";
import registry from "@/registry/components.json";
import { AnimatedPricingCard } from "@/components/cads-ui/animated-pricing-card";
import { Badge as CadsBadge } from "@/components/cads-ui/badge";
import { BasicDialog } from "@/components/cads-ui/basic-dialog";
import { Button } from "@/components/cads-ui/button";
import { Card as PreviewCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/cads-ui/card";
import { ColorOrbitCard } from "@/components/cads-ui/color-orbit-card";
import { FloatingIslandNavbar } from "@/components/cads-ui/floating-island-navbar";
import { Input } from "@/components/cads-ui/input";
import { MagnifierDock } from "@/components/cads-ui/magnifier-dock";
import { MorphModal } from "@/components/cads-ui/morph-modal";
import { SpotlightCard } from "@/components/cads-ui/spotlight-card";
import { Textarea } from "@/components/cads-ui/textarea";
import { cn } from "@/lib/utils";

type ComponentMeta = (typeof registry)[number];

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Components", href: "#components" },
  { label: "Install", href: "#install" },
];

const dockItems = [
  { label: "Code", href: "#", icon: Code2 },
  { label: "Install", href: "#install", icon: Terminal },
  { label: "Pack", href: "#", icon: Package },
  { label: "Mail", href: "#", icon: Mail },
  { label: "Ship", href: "#", icon: Send },
];

const previewMap: Record<string, ReactNode> = {
  button: (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  badge: (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <CadsBadge>Default</CadsBadge>
      <CadsBadge variant="acid">Free</CadsBadge>
      <CadsBadge variant="copper">Pro</CadsBadge>
      <CadsBadge variant="outline">Soon</CadsBadge>
    </div>
  ),
  card: (
    <PreviewCard className="max-w-sm">
      <CardHeader>
        <CardTitle>Free Core Card</CardTitle>
        <CardDescription>Composable card primitives with cads-ui visual defaults.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="ghost">Open docs</Button>
      </CardContent>
    </PreviewCard>
  ),
  input: <Input className="max-w-sm" placeholder="you@company.com" aria-label="Email" />,
  textarea: <Textarea className="max-w-sm" placeholder="Tell us what you are building..." aria-label="Message" />,
  "basic-dialog": <BasicDialog />,
  "floating-island-navbar": <FloatingIslandNavbar items={navItems} active="#components" cta={{ label: "CTA", href: "#" }} />,
  "morph-modal": <MorphModal />,
  "magnifier-dock": <MagnifierDock items={dockItems} />,
  "color-orbit-card": <ColorOrbitCard />,
  "animated-pricing-card": (
    <AnimatedPricingCard
      name="Early Access"
      price="$19"
      description="The first paid pack for indie builders who want premium interactions."
      features={["Premium component source", "Commercial usage", "Beta lifetime updates"]}
      cta="Get access"
      badge="Best"
      featured
    />
  ),
  "spotlight-card": <SpotlightCard />,
};

const components = registry as ComponentMeta[];
const freeComponents = components.filter((component) => component.tier === "Free");
const proComponents = components.filter((component) => component.tier === "Pro");
const docSectionIds = ["overview", "install", ...components.map((component) => component.slug)];

function TierBadge({ tier }: { tier: string }) {
  return <CadsBadge variant={tier === "Free" ? "acid" : "copper"}>{tier}</CadsBadge>;
}

function dependencyText(component: ComponentMeta) {
  return component.dependencies.length ? component.dependencies.join(", ") : "No external dependencies";
}

function sidebarLinkClass(isActive: boolean) {
  return cn(
    "group flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
    isActive
      ? "bg-acid/12 text-acid shadow-[0_0_28px_rgba(215,255,92,0.13)]"
      : "text-bone/68 hover:bg-bone/8 hover:text-bone",
  );
}

function mobileLinkClass(isActive: boolean) {
  return cn(
    "shrink-0 rounded-full px-4 py-2 text-sm transition",
    isActive ? "bg-acid text-ink shadow-glow" : "bg-bone/8 text-bone/75 hover:bg-bone/12 hover:text-bone",
  );
}

function ActiveDot({ active }: { active: boolean }) {
  return <span className={cn("h-1.5 w-1.5 rounded-full transition", active ? "bg-acid shadow-[0_0_12px_#d7ff5c]" : "bg-bone/18")} />;
}

export default function DocsPage() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    function updateActiveSection() {
      let current = "overview";

      for (const id of docSectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= 160) {
          current = id;
        }
      }

      setActiveId(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="min-h-screen px-6 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-bone/65 hover:text-bone">
          <ArrowLeft size={16} /> Back to landing
        </Link>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-[1.75rem] border border-bone/12 bg-bone/[0.04] p-4 backdrop-blur-xl">
              <div className="rounded-2xl border border-bone/10 bg-black/20 p-4">
                <p className="font-[var(--font-display)] text-2xl">cads-ui</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-bone/40">Registry-powered docs</p>
              </div>

              <nav className="mt-4 space-y-1" aria-label="Docs sidebar">
                <a href="#overview" aria-current={activeId === "overview" ? "page" : undefined} className={sidebarLinkClass(activeId === "overview")}>
                  <ActiveDot active={activeId === "overview"} /> Overview
                </a>
                <a href="#install" aria-current={activeId === "install" ? "page" : undefined} className={sidebarLinkClass(activeId === "install")}>
                  <ActiveDot active={activeId === "install"} /> Install
                </a>
                <div className="px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-[0.22em] text-acid">Free Core</div>
                {freeComponents.map((component) => (
                  <a
                    key={component.slug}
                    href={`#${component.slug}`}
                    aria-current={activeId === component.slug ? "page" : undefined}
                    className={sidebarLinkClass(activeId === component.slug)}
                  >
                    <ActiveDot active={activeId === component.slug} /> {component.name}
                  </a>
                ))}
                <div className="px-3 pb-1 pt-4 text-xs font-bold uppercase tracking-[0.22em] text-copper">Pro Motion</div>
                {proComponents.map((component) => (
                  <a
                    key={component.slug}
                    href={`#${component.slug}`}
                    aria-current={activeId === component.slug ? "page" : undefined}
                    className={sidebarLinkClass(activeId === component.slug)}
                  >
                    <ActiveDot active={activeId === component.slug} /> {component.name}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <section id="overview" className="scroll-mt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-copper">Docs MVP</p>
              <h1 className="mt-4 font-[var(--font-display)] text-6xl tracking-[-0.05em] md:text-7xl">Copy, paste, customize.</h1>
              <p className="mt-5 max-w-2xl text-bone/65">
                These docs now read component names, tiers, dependencies, props, files, and accessibility notes from `registry/components.json`.
              </p>
            </section>

            <nav className="mt-8 flex gap-2 overflow-x-auto rounded-[1.5rem] border border-bone/12 bg-bone/[0.04] p-2 lg:hidden" aria-label="Mobile docs navigation">
              <a href="#overview" aria-current={activeId === "overview" ? "page" : undefined} className={mobileLinkClass(activeId === "overview")}>Overview</a>
              <a href="#install" aria-current={activeId === "install" ? "page" : undefined} className={mobileLinkClass(activeId === "install")}>Install</a>
              {components.map((component) => (
                <a
                  key={component.slug}
                  href={`#${component.slug}`}
                  aria-current={activeId === component.slug ? "page" : undefined}
                  className={mobileLinkClass(activeId === component.slug)}
                >
                  {component.name}
                </a>
              ))}
            </nav>

            <section id="install" className="mt-10 scroll-mt-8 rounded-[2rem] border border-bone/12 bg-bone/[0.04] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-[var(--font-display)] text-4xl">Install baseline</h2>
                <CadsBadge variant="outline">Free + Pro</CadsBadge>
              </div>
              <p className="mt-2 text-bone/60">Install common dependencies used by the current MVP components.</p>
              <pre className="mt-5 rounded-2xl bg-black/45 p-4 text-sm text-bone/80"><code>{`npm install motion @radix-ui/react-dialog lucide-react clsx tailwind-merge`}</code></pre>
              <div className="mt-5 rounded-2xl border border-bone/10 bg-black/25 p-4">
                <h3 className="font-semibold">CLI foundation</h3>
                <p className="mt-2 text-sm text-bone/60">Free Core components can be copied from the registry. Pro Motion is gated for now.</p>
                <pre className="mt-4 rounded-xl bg-black/45 p-4 text-sm text-bone/80"><code>{`npx cads-ui list
npx cads-ui info button
npx cads-ui add button`}</code></pre>
              </div>
            </section>

            <div id="components" className="mt-8 space-y-5">
              {components.map((component) => (
                <section key={component.slug} id={component.slug} className="scroll-mt-8 rounded-[2rem] border border-bone/12 bg-bone/[0.04] p-6">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <TierBadge tier={component.tier} />
                        <CadsBadge variant="outline">{component.status}</CadsBadge>
                        <code className="rounded-full bg-black/40 px-3 py-1 text-xs text-bone/50">{component.files[0]}</code>
                      </div>
                      <h2 className="font-[var(--font-display)] text-4xl">{component.name}</h2>
                      <p className="mt-2 text-bone/60">{component.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.75rem] border border-bone/10 bg-black/25 p-6">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-acid/80">Live preview</p>
                    <div className="flex min-h-28 items-center justify-center overflow-x-auto rounded-[1.25rem] bg-bone/[0.04] p-6">
                      {previewMap[component.slug]}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-black/25 p-4">
                      <h3 className="font-semibold">Dependencies</h3>
                      <p className="mt-2 text-sm text-bone/62">{dependencyText(component)}</p>
                    </div>
                    <div className="rounded-2xl bg-black/25 p-4">
                      <h3 className="font-semibold">Props</h3>
                      <ul className="mt-2 space-y-1 text-sm text-bone/62">
                        {component.props.map((prop) => <li key={prop}>• {prop}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-black/25 p-4">
                      <h3 className="font-semibold">Accessibility</h3>
                      <p className="mt-2 text-sm text-bone/62">{component.accessibility}</p>
                    </div>
                  </div>

                  <pre className="mt-5 rounded-2xl bg-black/45 p-4 text-sm text-bone/80"><code>{`import { ${component.exportName} } from "@/components/cads-ui/${component.slug}";`}</code></pre>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

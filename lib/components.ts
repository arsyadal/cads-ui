export type ComponentDoc = {
  slug: string
  name: string
  tagline: string
  description: string
  install: string[]
  copyPath: string
  usage: string
  props: { name: string; type: string; description: string }[]
  accessibility: string[]
}

export const componentDocs: ComponentDoc[] = [
  {
    slug: "floating-island-navbar",
    name: "Floating Island Navbar",
    tagline: "A scroll-aware pill navbar for premium landing pages.",
    description:
      "Floating Island Navbar ships with active indicators, responsive expansion, optional CTA, glass surface, and smooth spring transitions.",
    install: ["motion", "lucide-react", "clsx", "tailwind-merge"],
    copyPath: "components/cadsui/floating-island-navbar.tsx",
    usage: `import { FloatingIslandNavbar } from "@/components/cadsui/floating-island-navbar"
import { Home, Sparkles } from "lucide-react"

export function Demo() {
  return (
    <FloatingIslandNavbar
      activeHref="#features"
      items={[
        { label: "Home", href: "#home", icon: <Home size={15} /> },
        { label: "Features", href: "#features", icon: <Sparkles size={15} /> },
      ]}
      cta={{ label: "Launch", href: "#launch" }}
    />
  )
}`,
    props: [
      { name: "logo", type: "React.ReactNode", description: "Optional custom logo slot." },
      { name: "items", type: "NavItem[]", description: "Navigation links with optional icons." },
      { name: "cta", type: "{ label: string; href: string }", description: "Optional call-to-action button." },
      { name: "activeHref", type: "string", description: "Href used to render the active pill indicator." },
      { name: "className", type: "string", description: "Extra classes for placement/customization." },
    ],
    accessibility: [
      "Uses semantic nav with aria-label.",
      "Mobile toggle exposes aria-expanded and clear labels.",
      "Escape closes the mobile menu.",
    ],
  },
  {
    slug: "morph-modal",
    name: "Morph Modal",
    tagline: "A spring-driven modal reveal for product details and premium previews.",
    description:
      "Morph Modal turns any trigger into a polished dialog with backdrop blur, scale morphing, keyboard escape, focus return, and flexible footer/content slots.",
    install: ["motion", "lucide-react", "clsx", "tailwind-merge"],
    copyPath: "components/cadsui/morph-modal.tsx",
    usage: `import { MorphModal } from "@/components/cadsui/morph-modal"

export function Demo() {
  return (
    <MorphModal
      title="Launch Pack"
      description="Premium content reveal with focus handling."
      trigger={<button>Open modal</button>}
      footer={<button>Copy component</button>}
    >
      <p>Your modal content goes here.</p>
    </MorphModal>
  )
}`,
    props: [
      { name: "trigger", type: "React.ReactNode", description: "Element used to open the dialog." },
      { name: "title", type: "string", description: "Optional accessible dialog title." },
      { name: "description", type: "string", description: "Optional accessible dialog description." },
      { name: "children", type: "React.ReactNode", description: "Main modal content." },
      { name: "footer", type: "React.ReactNode", description: "Optional footer slot." },
      { name: "className", type: "string", description: "Extra classes for dialog shell." },
    ],
    accessibility: [
      "Uses role=dialog and aria-modal.",
      "Escape, backdrop, and close button dismiss the modal.",
      "Focus moves to the dialog on open and returns to trigger on close.",
    ],
  },
  {
    slug: "magnifier-dock",
    name: "Magnifier Dock",
    tagline: "A springy icon dock with tooltip labels and mobile-safe fallback.",
    description:
      "Magnifier Dock creates a polished shortcut/social dock where icons near the cursor grow smoothly without shifting page layout.",
    install: ["motion", "clsx", "tailwind-merge"],
    copyPath: "components/cadsui/magnifier-dock.tsx",
    usage: `import { MagnifierDock } from "@/components/cadsui/magnifier-dock"
import { Github, Mail } from "lucide-react"

export function Demo() {
  return (
    <MagnifierDock
      items={[
        { label: "GitHub", href: "https://github.com", icon: <Github /> },
        { label: "Email", href: "mailto:hello@example.com", icon: <Mail /> },
      ]}
    />
  )
}`,
    props: [
      { name: "items", type: "DockItem[]", description: "Dock links with label, href, icon, and optional target." },
      { name: "size", type: "number", description: "Default icon button size in pixels." },
      { name: "magnifiedSize", type: "number", description: "Maximum hover size in pixels." },
      { name: "className", type: "string", description: "Extra classes for dock shell." },
    ],
    accessibility: [
      "Each link receives an aria-label from item.label.",
      "Tooltip is decorative; label still exists for assistive tech.",
      "Focus styles are visible for keyboard users.",
    ],
  },
]

export function getComponentDoc(slug: string) {
  return componentDocs.find((component) => component.slug === slug)
}

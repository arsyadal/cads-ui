import Link from "next/link"

const navItems = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/components/floating-island-navbar" },
  { label: "PRD", href: "#roadmap" },
]

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#07090b]/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3" aria-label="CadsUI home">
          <span className="grid size-8 place-items-center rounded-full bg-[conic-gradient(from_140deg,#66f4ff,#a38bff,#f8c572,#66f4ff)] p-px">
            <span className="grid size-full place-items-center rounded-full bg-[#080a0c] text-xs font-black tracking-tighter text-white">
              C
            </span>
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-white uppercase">CadsUI</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/components"
          className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_30px_rgba(102,244,255,0.16)] transition hover:bg-cyan-300/16"
        >
          View kit
        </Link>
      </div>
    </header>
  )
}

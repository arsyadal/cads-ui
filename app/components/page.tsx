import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ComponentPreview } from "@/components/site/component-preview"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { componentDocs } from "@/lib/components"

export default function ComponentsPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 pb-20 pt-32 md:pt-40">
        <section className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.24em] text-cyan-100 uppercase">Components</p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
              MVP components ready to copy into your project.
            </h1>
            <p className="max-w-sm text-sm leading-6 text-white/52">
              Each component includes a live preview, install note, usage snippet, props, and accessibility notes.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-6xl gap-6">
          {componentDocs.map((component) => (
            <article key={component.slug} className="grid gap-5 rounded-[2.4rem] border border-white/10 bg-white/[0.035] p-4 lg:grid-cols-[0.95fr_1.05fr]">
              <ComponentPreview slug={component.slug} />
              <div className="flex flex-col justify-between p-2 md:p-6">
                <div>
                  <p className="text-sm text-cyan-100/80">{component.tagline}</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">{component.name}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">{component.description}</p>
                </div>
                <Link
                  href={`/components/${component.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
                >
                  Open docs <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

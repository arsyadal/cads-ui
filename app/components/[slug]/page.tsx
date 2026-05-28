import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Copy } from "lucide-react"
import { ComponentPreview } from "@/components/site/component-preview"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { componentDocs, getComponentDoc } from "@/lib/components"

export function generateStaticParams() {
  return componentDocs.map((component) => ({ slug: component.slug }))
}

export default async function ComponentDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponentDoc(slug)

  if (!component) notFound()

  return (
    <>
      <SiteHeader />
      <main className="px-4 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link href="/components" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
            <ArrowLeft size={16} /> Back to components
          </Link>

          <section className="mt-8 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-medium tracking-[0.24em] text-cyan-100 uppercase">CadsUI component</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl">{component.name}</h1>
              <p className="mt-5 text-lg leading-8 text-white/56">{component.description}</p>

              <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-5">
                <div className="text-sm font-semibold text-white">Install dependencies</div>
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-cyan-100">
                  npm install {component.install.join(" ")}
                </pre>
                <div className="mt-5 text-sm font-semibold text-white">Copy into</div>
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/70">
                  {component.copyPath}
                </pre>
              </div>
            </div>

            <div className="space-y-6">
              <ComponentPreview slug={component.slug} />

              <Section title="Usage">
                <CodeBlock code={component.usage} />
              </Section>

              <Section title="Props">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-white/[0.055] text-white">
                      <tr>
                        <th className="p-4 font-semibold">Name</th>
                        <th className="p-4 font-semibold">Type</th>
                        <th className="p-4 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/58">
                      {component.props.map((prop) => (
                        <tr key={prop.name}>
                          <td className="p-4 font-medium text-cyan-100">{prop.name}</td>
                          <td className="p-4 font-mono text-xs text-white/62">{prop.type}</td>
                          <td className="p-4">{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Accessibility">
                <ul className="grid gap-3 text-sm text-white/60">
                  {component.accessibility.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <h2 className="mb-5 text-2xl font-semibold tracking-[-0.05em] text-white">{title}</h2>
      {children}
    </section>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative">
      <div className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-white/55">
        <Copy size={13} /> Copy manually
      </div>
      <pre className="overflow-x-auto rounded-[1.3rem] border border-white/10 bg-black/40 p-5 pt-14 text-sm leading-6 text-cyan-50">
        <code>{code}</code>
      </pre>
    </div>
  )
}

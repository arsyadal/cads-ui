import { HeroSection } from "@/components/site/hero-section"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <section id="roadmap" className="px-4 pb-20">
        <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-white/10 bg-[#07090b]/72 p-6 backdrop-blur-xl md:p-10">
          <p className="text-sm font-medium tracking-[0.24em] text-cyan-100 uppercase">Roadmap</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
            Build three components, publish docs, validate demand.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {["Foundation", "MVP components", "Polish & publish", "Launch & validate"].map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-8 text-sm text-white/35">0{index + 1}</div>
                <div className="text-lg font-semibold tracking-[-0.04em] text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

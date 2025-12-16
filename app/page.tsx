import Image from "next/image"
import Link from "next/link"
import { CoreMetricsSection } from "@/components/core-metrics-section"
import { HeroSection } from "@/components/hero-section"
import { PilotFormSection } from "@/components/pilot-form-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DebugPing } from "@/components/debug-ping"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function HomePage() {
  const showcaseCta = {
    imageSrc: "/红色树脂书籍冰箱贴 (1).png",
    alt: "Fridge Channel magnet in action on a fridge door",
    title: "See how the fridge magnet turns into a channel",
    body: "Place the one-tap magnet on your reader’s fridge and drive them straight into your content with every glance.",
    ctaLabel: "Start your Fridge Channel",
    ctaHref: "#join-pilot",
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <DebugPing runId="run1" hasWhatIsSection={false} note="page.tsx current layout" />
      {/* Hero Section */}
      <HeroSection />

      {/* How Fridge Channel strengthens your C.O.R.E Section - styled like untillabs Assaying Organ Health */}
      <section id="why-creators-love-it" className="relative overflow-hidden py-16" style={{ backgroundColor: '#C8320B' }}>
        {/* Smooth gradient transitions at boundaries with curved blend */}
        <div 
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: '280px',
            background: `linear-gradient(to bottom, 
              #F7F7F4 0%, 
              rgba(247, 247, 244, 0.95) 15%,
              rgba(247, 247, 244, 0.85) 25%,
              rgba(247, 247, 244, 0.7) 35%,
              rgba(247, 247, 244, 0.55) 45%,
              rgba(247, 247, 244, 0.4) 55%,
              rgba(247, 247, 244, 0.25) 65%,
              rgba(247, 247, 244, 0.15) 75%,
              rgba(247, 247, 244, 0.08) 85%,
              rgba(247, 247, 244, 0.03) 92%,
              transparent 100%
            )`
          }}
        ></div>
        <div 
          className="absolute inset-x-0 bottom-0 z-0"
          style={{
            height: '280px',
            background: `linear-gradient(to top, 
              #F7F7F4 0%, 
              rgba(247, 247, 244, 0.95) 15%,
              rgba(247, 247, 244, 0.85) 25%,
              rgba(247, 247, 244, 0.7) 35%,
              rgba(247, 247, 244, 0.55) 45%,
              rgba(247, 247, 244, 0.4) 55%,
              rgba(247, 247, 244, 0.25) 65%,
              rgba(247, 247, 244, 0.15) 75%,
              rgba(247, 247, 244, 0.08) 85%,
              rgba(247, 247, 244, 0.03) 92%,
              transparent 100%
            )`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-6 text-left">
              <div className="space-y-4">
                <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
                  <span className="text-2xl md:text-3xl font-black text-white">Fridge Channel</span> is a high-traffic offline channel built on a paying reader’s fridge door — a one-tap, always-on shortcut that brings fans straight into your content inside the Fridge Channel app.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl">
                  Turn the fridge door into an owned channel that lifts{" "}
                  <span className="text-2xl md:text-3xl font-black text-white drop-shadow-md">C.O.R.E.</span>
                </p>
              </div>
              <span className="text-5xl md:text-7xl font-black text-white/80 leading-none" aria-hidden="true">“”</span>
            </div>

            <CoreMetricsSection />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works">
        <HowItWorksTimeline />
      </section>

      {/* Pricing Section - styled like C.O.R.E Section */}
      <section id="pricing" className="relative overflow-hidden py-16" style={{ backgroundColor: '#C42E0B' }}>
        {/* Smooth gradient transitions at boundaries with curved blend */}
        <div 
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: '320px',
            background: `linear-gradient(to bottom, 
              #F7F7F4 0%, 
              rgba(247, 247, 244, 0.95) 15%,
              rgba(247, 247, 244, 0.85) 25%,
              rgba(247, 247, 244, 0.7) 35%,
              rgba(247, 247, 244, 0.55) 45%,
              rgba(247, 247, 244, 0.4) 55%,
              rgba(247, 247, 244, 0.25) 65%,
              rgba(247, 247, 244, 0.15) 75%,
              rgba(247, 247, 244, 0.08) 85%,
              rgba(247, 247, 244, 0.03) 92%,
              transparent 100%
            )`
          }}
        ></div>
        <div 
          className="absolute inset-x-0 bottom-0 z-0"
          style={{
            height: '320px',
            background: `linear-gradient(to top, 
              #F7F7F4 0%, 
              rgba(247, 247, 244, 0.95) 15%,
              rgba(247, 247, 244, 0.85) 25%,
              rgba(247, 247, 244, 0.7) 35%,
              rgba(247, 247, 244, 0.55) 45%,
              rgba(247, 247, 244, 0.4) 55%,
              rgba(247, 247, 244, 0.25) 65%,
              rgba(247, 247, 244, 0.15) 75%,
              rgba(247, 247, 244, 0.08) 85%,
              rgba(247, 247, 244, 0.03) 92%,
              transparent 100%
            )`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div className="max-w-4xl mx-auto space-y-8 bg-white/5 rounded-2xl border border-white/20 p-6 md:p-10 shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
              Biggest concerns
            </h2>
            <ul className="space-y-4 text-base md:text-lg leading-relaxed text-white/90">
              {[
                {
                  q: "Does it require an app?",
                  a: (
                    <>
                      Yes — the magnet is a one-tap key that opens your fridge-time content <strong className="text-white">inside the Fridge Channel app.</strong>
                    </>
                  ),
                },
                {
                  q: "Will this replace my newsletter?",
                  a: (
                    <>
                      No. FC creates <strong className="text-white">teasers + guided prompts</strong> that drive readers to <strong className="text-white">Open full issue</strong>.
                    </>
                  ),
                },
                {
                  q: "Will it hurt my business?",
                  a: (
                    <>
                      It’s an <strong className="text-white">add-on for existing paying readers</strong> — designed for true fans who want faster access + gentle reminders.
                    </>
                  ),
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/80" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">{item.q}</p>
                    <p className="text-white/90">{item.a}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Post-pricing visual showcase with CTA */}
      <section className="bg-[#F7F7F4]">
        <div className="container mx-auto px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg border border-black/5 bg-white">
              <Image
                src={showcaseCta.imageSrc}
                alt={showcaseCta.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex h-full items-center justify-center">
              <div>
                <Link href={showcaseCta.ctaHref}>
                  <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110"
                    background="linear-gradient(120deg, #9f1026, #f25f6c)"
                    shimmerColor="#ffe5e9"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                      {showcaseCta.ctaLabel}
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section id="faq" className="container mx-auto px-4 pt-10 pb-10 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQ </h2>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    What if nobody buys the magnet?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      You lose nothing — it’s an optional add-on for paying readers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Do I have to change my newsletter setup?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No — just add FC’s email to your paid list.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Pricing (for true fans)?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      $2.99 one-time per magnet + $1.99/month extra; <strong className="font-semibold text-foreground">50/50 revenue share</strong> between you and Fridge Channel.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              © Fridge Channel 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

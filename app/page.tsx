import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CoreMetricsSection } from "@/components/core-metrics-section-official"
import { HeroSection } from "@/components/hero-section-official"
import PricingCards from "@/components/pricing-cards"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card"
import { PilotFormSection } from "@/components/pilot-form-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline-official"
import { Navigation } from "@/components/navigation"
import { ProblemSection } from "@/components/problem-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HandWrittenTextButton } from "@/components/ui/hand-written-text-button"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* How Fridge Channel strengthens your C.O.R.E Section - styled like untillabs Assaying Organ Health */}
      <section id="why-creators-love-it" className="relative overflow-hidden" style={{ backgroundColor: '#C32D0B' }}>
        {/* Smooth gradient transitions at boundaries with curved blend */}
        <div
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: 'clamp(200px, 15vh, 400px)',
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
            height: 'clamp(200px, 15vh, 400px)',
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
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance text-white">THE C.O.R.E Your Fridge Channel improves</h2>
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
      <section id="pricing" className="relative overflow-hidden" style={{ backgroundColor: '#8D0104' }}>
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
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center py-24">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-balance text-white">Pricing</h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                <strong className="font-semibold text-white">Turn household attention into subscriptions, retention, and durable revenue.</strong>
              </p>
            </div>

            {/* 1. FC Pass — Household */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">1. FC Pass — Household</h3>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                  <strong className="font-semibold text-white">$19.99 / year per household</strong>
                </p>
                <p className="text-base md:text-lg text-white/90 mb-3">Unlocks:</p>
                <ul className="space-y-2 text-base md:text-lg text-white/90 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Fridge consumption experience after tap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>App experience (and recommendations where enabled)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2) Creator platform fee */}
            <div className="space-y-6">
              <PricingCards />
            </div>

            {/* 3. Subscription revenue share */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">3. Subscription revenue share — long-term alignment</h3>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-4">
                <p className="text-base md:text-lg text-white/90">
                  If a user subscribes to you <strong className="font-semibold text-white">through FC</strong>, we take <strong className="font-semibold text-white">15% of that subscription revenue</strong> <strong className="font-semibold text-white">for as long as that subscriber stays subscribed</strong>.
                </p>
                <ul className="space-y-2 text-base md:text-lg text-white/90 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Only applies to <strong className="font-semibold text-white">new subscriptions created inside FC</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Applies <strong className="font-semibold text-white">every billing cycle</strong> (monthly / annual)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>If no subscription happens → <strong className="font-semibold text-white">we take $0</strong></span>
                  </li>
                </ul>
                <p className="text-base md:text-lg text-white/90 pt-2">
                  <strong className="font-semibold text-white">Not affiliate. Permanent participation tied to incremental acquisition.</strong>
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-16">
              <div className="max-w-3xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/booking">
                      <ShimmerButton
                        className="shadow-2xl transition-transform duration-300 hover:scale-110 w-full sm:w-auto"
                        background="rgba(0, 0, 0, 1)"
                        shimmerColor="#ffffff"
                      >
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                          Turn on Fridge Channel Magnet
                        </span>
                      </ShimmerButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What creators can see their household asset Section */}
      <section id="who-its-for" className="container mx-auto px-4 pt-20 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">What creators can see their household asset</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ENTRY Card */}
              <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:bg-white/80 hover:border-gray-300/70 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  <span className="font-bold text-foreground">ENTRY</span>
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  activation rate, scans, consumption events, completion rate by format
                </p>
              </div>

              {/* RETENTION Card */}
              <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:bg-white/80 hover:border-gray-300/70 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  <span className="font-bold text-foreground">RETENTION</span>
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  D7/D30 return, WAU households, streaks, scene comparisons
                </p>
              </div>

              {/* REVENUE Card */}
              <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:bg-white/80 hover:border-gray-300/70 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  <span className="font-bold text-foreground">REVENUE</span>
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  FC-originated subs, conversion rate by scene/format, lift vs control, incremental revenue per household, LTV from FC-acquired subs
                </p>
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
              <p className="text-muted-foreground mt-4 text-balance text-lg">
                Quick answers to common questions about Fridge Channel.
              </p>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Will this hurt my existing subscription business?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. FC is designed to increase <em>usage occasions,</em> drive <strong>Open full issue, and convert more paid subscribers.</strong> Existing subscribers still consume your full work; FC reduces "I never open this" churn.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    How do you define "FC-originated subscriber"?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      A subscriber who completes the first paid subscription event <strong>inside FC</strong> (tracked and shown in your analytics on REVENUE tier).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Does 15% apply to my existing subscribers?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. Only new subscriptions created inside FC.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    What does the household pay for?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      FC Pass unlocks the household consumption experience and app layer.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    What if nobody converts?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      You still get usage + retention signals (ENTRY/RETENTION), and you can iterate scenes/formats. FC only earns the 15% when FC creates subscribers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Do I need to change my newsletter setup?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. Add an email address / forward issues. Everything else is handled.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    What about privacy?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      We track household-level usage signals needed to improve scenes and attribution. We do not sell household data.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Who handles production and support?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      We do: design, manufacturing, QA, shipping, tracking, replacement, and support.
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
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-sm hover:underline text-muted-foreground">
                Home
              </Link>
              <Link href="/about-us" className="text-sm hover:underline text-muted-foreground">
                Our Story
              </Link>
              <Link href="#how-it-works" className="text-sm hover:underline text-muted-foreground">
                How it Works
              </Link>
              <Link href="/privacy" className="text-sm hover:underline text-muted-foreground">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm hover:underline text-muted-foreground">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

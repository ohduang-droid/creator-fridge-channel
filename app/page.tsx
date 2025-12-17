import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CoreMetricsSection } from "@/components/core-metrics-section"
import { HeroSection } from "@/components/hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card"
import { PilotFormSection } from "@/components/pilot-form-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline"
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

      {/* What is a Fridge Channel Section */}
      <section id="what-is-fridge-channel" className="container mx-auto px-4 pt-40 pb-0 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-balance">What is Fridge Channel?</h2>
          
          {/* Core Definition */}
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <div className="text-lg leading-relaxed py-2">
              <TextGradientScroll
                text="Fridge Channel is a high-traffic, offline channel For creator your paid readers, built on their fridge door. Your paying subscribers place a customized (usually your Newsletter logo) AI-powered NFC magnet on the fridge and use it as a one-tap shortcut into your content in the Fridge Channel app — straight to you, with no feeds and no algorithms in between."
                type="letter"
                textOpacity="soft"
                className="text-lg leading-relaxed max-w-3xl mx-auto"
              />
            </div>
          </div>

          {/* Three Key Points */}
          <div className="max-w-3xl mx-auto space-y-6 pt-0.5">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <div className="flex-1 text-base md:text-lg leading-relaxed">
                <TextGradientScroll
                  text="Built where attention already is. Almost every household has a fridge, and it's opened many times a day for coffee, water, cooking, and family chats — the fridge door is the heart of the home."
                  type="letter"
                  textOpacity="soft"
                  className="text-base md:text-lg leading-relaxed"
                />
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <div className="flex-1 text-base md:text-lg leading-relaxed">
                <TextGradientScroll
                  text="A visible channel, not a private inbox. Your logo and magnet live on a shared surface the whole household and visiting friends can see, instead of being buried in one person's inbox."
                  type="letter"
                  textOpacity="soft"
                  className="text-base md:text-lg leading-relaxed"
                />
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <div className="flex-1 text-base md:text-lg leading-relaxed">
                <TextGradientScroll
                  text="The FC magnet is just the shortcut. It's a one-tap NFC key only paying subscribers can use, taking them directly into your latest fridge-time content inside the Fridge Channel app, outside any algorithmic feed."
                  type="letter"
                  textOpacity="soft"
                  className="text-base md:text-lg leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Fridge Channel strengthens your C.O.R.E Section - styled like untillabs Assaying Organ Health */}
      <section id="why-creators-love-it" className="relative min-h-[200vh] overflow-hidden" style={{ backgroundColor: '#C32D0B' }}>
        {/* Smooth gradient transitions at boundaries with curved blend */}
        <div 
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: '600px',
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
            height: '600px',
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
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[200vh]" style={{ paddingTop: '87.5px', paddingBottom: '87.5px' }}>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance text-white">How Fridge Channel strengthens your C.O.R.E</h2>
            </div>

            <CoreMetricsSection />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works">
        <HowItWorksTimeline />
      </section>

      {/* Why Subscribers Love It Section */}
      <section id="who-its-for" className="container mx-auto px-4 pt-20 pb-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Why subscribers love it</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                The FC magnet isn't for everyone.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                It's for a very specific kind of paying reader:
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    They already love your newsletter.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    They've paid, they recommend it, they want it in their life long-term.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    They hate seeing it rot in their inbox.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Great issues pile up between receipts and notifications. They feel guilty for "not using" what they pay for.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div className="flex-1 space-y-3">
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    They want faster access and gentle reminders.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    A tap on the fridge is easier than digging through email.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    30–120 seconds of guided fridge-time content feels like,
                  </p>
                  <blockquote className="border-l-4 border-primary/30 pl-4 italic text-base md:text-lg text-muted-foreground">
                    "I'm actually using my subscription."
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                For these subscribers, Fridge Channel Magnet isn't weird merch.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                It's the <strong className="font-semibold text-foreground">natural upgrade for true fans</strong> who already think:
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 italic text-base md:text-lg text-muted-foreground">
                "I believe in this newsletter — I just needed a better way to get to it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - styled like C.O.R.E Section */}
      <section id="pricing" className="relative min-h-[200vh] overflow-hidden" style={{ backgroundColor: '#8D0104' }}>
        {/* Smooth gradient transitions at boundaries with curved blend */}
        <div 
          className="absolute inset-x-0 top-0 z-0"
          style={{
            height: '600px',
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
            height: '600px',
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
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[200vh]" style={{ paddingTop: '87.5px', paddingBottom: '87.5px' }}>
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-balance text-white">Pricing</h2>

              <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <p className="text-xl md:text-2xl font-semibold text-white">
                        $2.99 one-time for each FC magnet
                      </p>
                      <p className="text-base md:text-lg text-white/80">
                        (you can pay for it as the creator, or let subscribers pay)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <p className="text-xl md:text-2xl font-semibold text-white">
                        $1.99/month per Fridge Channel Magnet subscriber
                      </p>
                      <p className="text-base md:text-lg text-white/80">
                        – on top of your existing newsletter price
                      </p>
                      <p className="text-base md:text-lg text-white/80">
                        – <strong className="font-semibold text-white">50/50 revenue share</strong> between you and Fridge Channel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What This Means in Practice */}
            <div className="space-y-6 pt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-left"></h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* For Subscribers */}
                <Card className="border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:scale-[1.02] hover:border-white/30 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold font-mono text-white">For subscribers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-sm md:text-base text-white/90 font-mono">
                      They already pay for your newsletter. If they want the FC magnet experience (faster access + gentle reminders), they:
                    </p>
                    <ul className="space-y-2 text-sm md:text-base text-white/90 ml-4 font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>pay <strong className="font-semibold text-white">$2.99</strong> once for the magnet, and</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span><strong className="font-semibold text-white">$1.99/month</strong> extra to keep their Fridge Channel active.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* For creator you */}
                <Card className="border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:scale-[1.02] hover:border-white/30 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold font-mono text-white">For you (the creator)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-sm md:text-base text-white/90 font-mono">
                      You earn <strong className="font-semibold text-white">~$1/month extra</strong> for every Fridge Channel Magnet subscriber, recurring.
                    </p>
                    <p className="text-sm md:text-base text-white/90 font-mono">
                      You also get a clearly labeled segment of your <strong className="font-semibold text-white">strongest believers</strong> — people who care enough to pay for easier access and usage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-16">
              <div className="max-w-3xl mx-auto">
                <div className="text-center space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ShimmerButton 
                      className="shadow-2xl w-full sm:w-auto"
                      background="rgba(0, 0, 0, 1)"
                      shimmerColor="#ffffff"
                    >
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                        Turn on Fridge Channel Magnet
                      </span>
                    </ShimmerButton>
                  </div>
                </div>
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
                    What if nobody buys the magnet?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Then you pay nothing. No fixed fees, no minimums. The model only kicks in when subscribers opt in.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Do I have to change my newsletter setup?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. You just add Fridge Channel's email address to your paid list. If you ever want to stop, remove our email and everything goes back to normal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    Will this hurt my existing subscription business?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-base text-muted-foreground">
                        No. Fridge Channel Magnet is an optional upgrade layer:
                      </p>
                      <ul className="space-y-2 text-base text-muted-foreground ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>only visible to readers who already pay and already love your work,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>it doesn't change your base price or force anyone into a new tier.</span>
                        </li>
                      </ul>
                    </div>
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

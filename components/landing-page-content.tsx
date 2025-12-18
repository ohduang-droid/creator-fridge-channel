import { HeroSection } from "@/components/hero-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline-official"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"

interface LandingPageContentProps {
  heroVideoUrl?: string | null
  coverImageUrl?: string | null
  normalImageUrls?: string[]
  creatorName?: string
}

export const LandingPageContent = ({
  heroVideoUrl,
  coverImageUrl = null,
  normalImageUrls = [],
  creatorName,
}: LandingPageContentProps) => {
  const heroOverlayImage = coverImageUrl ?? null
  const isCreatorPage = Boolean(creatorName)
  const faqCoverImage = isCreatorPage && heroOverlayImage ? heroOverlayImage : null

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      {/* Hero Section */}
      <HeroSection
        videoSrc={heroVideoUrl}
        overlayImageSrc={heroOverlayImage}
        showHeroOverlayCta={!isCreatorPage}
      />

      {/* What is a Fridge Channel Section */}
      <section id="what-is-fridge-channel" className="relative container mx-auto px-4 pt-40 pb-20 bg-muted/30">
        {/* Smooth gradient transition from hero section */}
        <div 
          className="absolute inset-x-0 top-0 h-32 z-0"
          style={{
            background: `linear-gradient(to bottom, 
              #F7F7F4 0%,
              rgba(247, 247, 244, 0.95) 30%,
              rgba(247, 247, 244, 0.85) 50%,
              rgba(247, 247, 244, 0.7) 70%,
              rgba(247, 247, 244, 0.5) 85%,
              transparent 100%
            )`
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-balance">What is Fridge Channel?</h2>

          {/* Core Definition */}
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <div className="text-lg leading-relaxed min-h-[300px] py-8">
              <TextGradientScroll
                text="Fridge Channel is a **household channel** built on the fridge door. Creators deploy **custom AI-powered magnets** (usually your newsletter logo for Fridge Edition). When anyone taps it, they enter the Fridge Channel experience: **short, scenario-aware consumption** that pulls them into your full work — and converts new paid subscribers when they're ready. No feeds. No algorithmic timeline. No later is never"
                type="letter"
                textOpacity="soft"
                className="text-lg leading-relaxed max-w-3xl mx-auto"
              />
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-6xl mx-auto pt-4">
            <ul className="space-y-4 text-lg text-foreground text-pretty leading-relaxed flex flex-col items-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <TextGradientScroll
                  text="Owned household touchpoint (your Newsletter logo lives on the fridge)"
                  type="letter"
                  textOpacity="soft"
                  className="text-lg leading-relaxed"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <TextGradientScroll
                  text='30–120s "fridge-time" consumption that leads to *Open full issue*'
                  type="letter"
                  textOpacity="soft"
                  className="text-lg leading-relaxed"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <TextGradientScroll
                  text="New subscriber acquisition with attribution + long-term alignment"
                  type="letter"
                  textOpacity="soft"
                  className="text-lg leading-relaxed"
                />
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works">
        <HowItWorksTimeline coverImageSrc={faqCoverImage} />
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
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from "next/link"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline-official"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { ShimmerButton } from "@/components/ui/shimmer-button"

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
  const timelineCtaCoverImage = faqCoverImage ?? "/science-hero-bg.webp"

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      {/* Hero Section */}
      <HeroSection
        videoSrc={heroVideoUrl}
        overlayImageSrc={heroOverlayImage}
        showHeroOverlayCta={!isCreatorPage}
        enableOverlayTransition={!isCreatorPage}
        scrollAfterFirstLoop={isCreatorPage}
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
                  text="More New Paid: higher free → paid conversion from FridgeChannel-touched users"
                  type="word"
                  textOpacity="soft"
                  className="text-lg leading-relaxed"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <TextGradientScroll
                  text="Longer Lifetime: more retained billing cycles by lifting usage intensity"
                  type="word"
                  textOpacity="soft"
                  className="text-lg leading-relaxed"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <TextGradientScroll
                  text="ROI-ready: pilot → measure → scale with auditable attribution"
                  type="word"
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
        {isCreatorPage && (
          <div className="w-full pb-10 pt-6">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={timelineCtaCoverImage}
                alt="Background"
                fill
                className="object-cover"
                sizes="100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 h-full">
                <div className="absolute left-1/2 top-[83%] -translate-x-1/2 -translate-y-1/2">
                  <Link
                    href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ShimmerButton
                      className="px-4 shadow-2xl transition-transform duration-300 hover:scale-110 sm:px-6"
                      background="linear-gradient(120deg, #9f1026, #f25f6c)"
                      shimmerColor="#ffe5e9"
                    >
                      <span className="whitespace-nowrap text-center text-xs font-medium leading-none tracking-tight text-white sm:text-sm lg:text-lg">
                        Founder Chat → Launch Channel
                      </span>
                    </ShimmerButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mini FAQ Section */}
      <section id="faq" className="container mx-auto px-4 pt-10 pb-10">
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
                    1) What exactly is "incremental Growth"?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Users with FC touch evidence who later become paid.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    2) If they pay later on desktop, does it count?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Yes. We attribute by touch → later paid, not by CTA click.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    3) Do you charge Retention if paid users never used FC?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. Retention billing requires touch evidence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    4) Why does Retention start from period 11?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      To make it fair and debate-proof: we only monetize clearly extended lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    5) How do you handle annual plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Annual plans are converted into 12 equivalent billing periods; Retention applies from equivalent period 11.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    6) Refunds/chargebacks?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      If revenue is reversed, that period fee becomes $0; if after invoice, we issue a credit next invoice.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    7) How do I verify you didn't overcharge?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Audit any line item: it has a dashboard evidence link. No evidence, no bill.
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

"use client";

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Card, CardContent } from "@/components/ui/card"
import { GooeyDimensions } from "@/components/ui/gooey-dimensions"
import { WhoWeServeCards } from "@/components/ui/who-we-serve-cards"
import { GlowEffect } from "@/components/ui/glow-effect"
import { SmokeCard } from "@/components/ui/smoke-card"
import { AnimatedText } from "@/components/ui/animated-shiny-text"
import { BlurText } from "@/components/ui/blur-text"
import { SectionReveal } from "@/components/ui/section-reveal"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { WaterRippleEffect } from "@/components/ui/water-ripple-effect"
import { Timeline } from "@/components/ui/timeline"
import { ImageMask } from "@/components/ui/image-mask"
import { SiteFooter } from "@/components/site-footer"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const ctaBgUrl = encodeURI("/截屏2026-01-08 19.34.38.png");

  // Hero content fade out as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Background parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#F7F3ED] relative overflow-x-hidden flex flex-col">
      <Navigation />

      <main className="flex-1">
      {/* Hero Section - Microsoft AI style */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div
          style={{
            y: backgroundY,
            scale: backgroundScale,
          }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/bg-ethics-hero.webp)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F3ED]/80" />
          <WaterRippleEffect intensity={1.2} speed={0.8} />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
            scale: heroScale,
          }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="space-y-8 md:space-y-12">
            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black"
              >
                Recurring Revenue Starts From Home
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <BlurText
                text="A touchpoint that shows up in the highest-frequency spot at home—with content people choose."
                delay={50}
                animateBy="words"
                direction="bottom"
                className="text-lg sm:text-xl md:text-2xl leading-relaxed text-black/80"
                stepDuration={0.25}
                boldWords={['touchpoint', 'highest-frequency', 'spot', 'home', 'content', 'choose']}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl leading-relaxed text-black/70 mt-4 text-left"
              >
                <strong className="font-semibold text-black">
                  One tap drives the next step.
                </strong>
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 md:gap-6 pt-4"
            >
              <Link href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[220px]"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Start a Pilot
                  </span>
                </ShimmerButton>
              </Link>
              <Link href="#who-we-serve">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[220px]"
                  background="rgba(255, 255, 255, 1)"
                  shimmerColor="#000000"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black lg:text-lg">
                    See Who We Serve
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who We Serve Section */}
      <SectionWrapper id="who-we-serve" enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">WHO WE SERVE</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <strong className="font-semibold text-foreground">Built for organizations that rely on repeat action—visits, reorders, renewals, and donations</strong>
                </p>
              </div>
            </SectionReveal>

            {/* Categories */}
            <SectionReveal delay={0.2} direction="up" distance={50}>
              <WhoWeServeCards
                cards={[
                  {
                    title: "Universities",
                    description: "Increase renewals. Grow monthly giving. Reactivate lapsed donors.",
                    link: "/who-we-serve/universities",
                    linkText: "Learn more →",
                    imageUrl: "/University.png",
                  },
                  {
                    title: "Nonprofits",
                    description: "Grow recurring donors. Improve retention beyond campaigns.",
                    link: "/who-we-serve/nonprofits",
                    linkText: "Learn more →",
                    imageUrl: "/nonprofit.png",
                  },
                  {
                    title: "Chains & Franchises",
                    description: "Bring people back to locations. Activate loyalty. Drive redemption.",
                    link: "/who-we-serve/chains-franchises",
                    linkText: "Learn more →",
                    imageUrl: "/franchises.png",
                  },
                  {
                    title: "Retailers",
                    description: "Increase trip frequency. Run measurable offers. Launch new product trials.",
                    link: "/who-we-serve/retailers",
                    linkText: "Learn more →",
                    imageUrl: "/retailar.png",
                  },
                  {
                    title: "DTC Brands",
                    description: "Drive second orders. Grow subscribe & save. Earn referrals and reviews.",
                    link: "/who-we-serve/dtc-brands",
                    linkText: "Learn more →",
                    imageUrl: "/DTCBrand.png",
                  },
                ]}
              />
            </SectionReveal>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* Why FC Is A Category Of One Section */}
      <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">WHY FC IS A CATEGORY OF ONE</h2>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                  FC sits in the highest-frequency spot at home—so it gets seen without feeds or inboxes. People tap because the content is chosen by themselves. One tap takes them to the next step.
                </p>
              </div>
            </SectionReveal>

            {/* The 5 Dimensions */}
            <SectionReveal delay={0.2} direction="up" distance={50}>
              <div className="space-y-6 pt-8">
                <GooeyDimensions
                  items={[
                    {
                      number: 1,
                      title: "Highest Daily-Life Exposure",
                      description: "Seen in the most repeated household moments—every day.",
                    },
                    {
                      number: 2,
                      title: "Algorithm-Free Reach",
                      description: "No feed. No inbox. No platform dependency.",
                    },
                    {
                      number: 3,
                      title: "Instant Action Path",
                      description: "Attention → preview → action in one tap.",
                    },
                    {
                      number: 4,
                      title: "Household Multipliers",
                      description: "Not one user on one screen—the whole household over time.",
                    },
                    {
                      number: 5,
                      title: "Persistent, Owned Touchpoint",
                      description: "The touchpoint stays. The cost doesn't scale with impressions.",
                    },
                  ]}
                />
              </div>
            </SectionReveal>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* How It Works Section */}
      <section id="how-it-works">
        <div className="w-full bg-muted/30 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">HOW IT WORKS</h2>
          </div>
          <Timeline
            data={[
              {
                title: "1. Choose the audience",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Pick one group you want to move: lapsed, low-frequency, new, high-value, donors/alumni.
                    </p>
                  </div>
                ),
              },
              {
                title: "2. Set the content people choose",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Offer 3–5 tracks that fit home life (short, repeatable).
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      You can provide content—or FC can produce it.
                    </p>
                  </div>
                ),
              },
              {
                title: "3. Define the next step",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      One primary CTA per audience:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-8">
                      <li><strong className="font-semibold text-foreground">Locations/Retail:</strong> visit, redeem, loyalty sign-up</li>
                      <li><strong className="font-semibold text-foreground">DTC:</strong> reorder, subscribe & save, refer, review</li>
                      <li><strong className="font-semibold text-foreground">Universities/Nonprofits:</strong> renew, monthly giving, RSVP</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "4. Distribute through what you already own",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Stores · Shipments · Mail · Events
                    </p>
                  </div>
                ),
              },
              {
                title: "5. Measure outcomes",
                content: (
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Track actions through links/codes, POS/loyalty signals, and simple test vs control.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Image Mask Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <ImageMask />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="w-full py-12 relative overflow-hidden"
        style={{
          backgroundImage: `url('${ctaBgUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <Link href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank">
              <ShimmerButton
                className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[220px]"
                background="rgba(0, 0, 0, 1)"
                shimmerColor="#ffffff"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Start a Pilot
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
    </div>
  )
}

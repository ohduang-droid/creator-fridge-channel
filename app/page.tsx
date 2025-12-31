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
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Hero content fade out as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Background parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#F7F3ED] relative overflow-x-hidden">
      <Navigation />

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
                Get people to join,
                <br />
                <span className="font-normal">get them to stay.</span>
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
                text="FC is a household-owned channel with the highest daily-life exposure Algorithm-free reach + one-tap action—built to drive conversion and retention"
                delay={50}
                animateBy="words"
                direction="bottom"
                className="text-lg sm:text-xl md:text-2xl leading-relaxed text-black/80"
                stepDuration={0.25}
                boldWords={['household-owned', 'channel', 'highest', 'daily-life', 'exposure', 'Algorithm-free', 'reach', 'one-tap', 'action', 'conversion', 'retention']}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 md:gap-6 pt-4"
            >
              <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank">
                <ShimmerButton
                  className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[184px]"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Run a Pilot
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

      {/* Proof Bullets */}
      <SectionWrapper enableFadeTransition={true}>
        <SectionReveal delay={0.1} direction="up" distance={40}>
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <SectionReveal delay={0} direction="up" distance={30}>
                <div>
                  <p className="text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-foreground">Highest Daily-Life Exposure</strong> — your message shows up where habits repeat
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.1} direction="up" distance={30}>
                <div>
                  <p className="text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-foreground">Algorithm-Free Reach</strong> — no feed, no inbox games, no platform risk
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2} direction="up" distance={30}>
                <div>
                  <p className="text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-foreground">Instant Action Path</strong> — tap → preview → next step
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* Who We Serve Section */}
      <SectionWrapper id="who-we-serve" enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">WHO WE SERVE</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <strong className="font-semibold text-foreground">Built for renewal-driven organizations.</strong>
                </p>
              </div>
            </SectionReveal>

            {/* Three Categories */}
            <SectionReveal delay={0.2} direction="up" distance={50}>
              <WhoWeServeCards
                cards={[
                  {
                    title: "Subscription Businesses",
                    subtitle: "(SaaS, newsletters, communities, local news, tools)",
                    description: "Drive more joins and reduce churn—without relying on platforms.",
                    link: "/who-we-serve/subscription-business",
                    linkText: "Learn more →",
                  },
                  {
                    title: "Universities",
                    subtitle: "An at-home alumni engagement channel",
                    description: "Drive recurring giving and alumni membership renewals.",
                    link: "/who-we-serve/university",
                    linkText: "Learn more →",
                  },
                  {
                    title: "Nonprofits",
                    description: "Grow recurring supporters and improve retention beyond campaigns.",
                    link: "/who-we-serve/nonprofit",
                    linkText: "Learn more →",
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
                  FC is the only touchpoint that's <strong className="font-semibold text-foreground">high-frequency</strong>, <strong className="font-semibold text-foreground">algorithm-free</strong>, <strong className="font-semibold text-foreground">one-tap actionable</strong>, and <strong className="font-semibold text-foreground">household-wide</strong>—at the same time.
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

      {/* What We Measure & Move Section */}
      <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
        <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">WHAT WE MEASURE & MOVE</h2>
              </div>
            </SectionReveal>

            {/* Two Metrics */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto">
              {/* Conversion */}
              <SectionReveal delay={0.1} direction="up" distance={50}>
                <div className="relative h-full rounded-xl overflow-hidden group">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
                    style={{
                      backgroundImage: 'url(/imgflower.avif)',
                    }}
                  />
                  <Card className="relative border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 h-full z-20 pointer-events-none">
                    <CardContent className="p-6 space-y-4 h-full flex flex-col pointer-events-auto">
                      <h3 className="text-2xl md:text-3xl font-bold">Conversion</h3>
                      <p className="text-base md:text-lg leading-relaxed text-muted-foreground flex-grow">
                        Starts after an FC touch: join, start, upgrade.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </SectionReveal>

              {/* Retention */}
              <SectionReveal delay={0.2} direction="up" distance={50}>
                <div className="relative h-full rounded-xl overflow-hidden group">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
                    style={{
                      backgroundImage: 'url(/shadow-image-3163.avif)',
                    }}
                  />
                  <Card className="relative border border-border/30 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90 h-full z-20 pointer-events-none">
                    <CardContent className="p-6 space-y-4 h-full flex flex-col pointer-events-auto">
                      <h3 className="text-2xl md:text-3xl font-bold">Retention</h3>
                      <p className="text-base md:text-lg leading-relaxed text-muted-foreground flex-grow">
                        Repeat action over time: renew, stay active, keep supporting.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>
      </SectionWrapper>

      {/* Pilot Section */}
      <section id="pilot-section" className="w-full py-12 relative">
        <SectionWrapper 
          enableFadeTransition={true}
          className="w-full"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/bg-ethics-hero.webp)',
            }}
          />
          <SectionReveal delay={0.1} direction="up" distance={60}>
          <div className="max-w-6xl mx-auto px-4 space-y-4 relative z-10 mt-5">
            {/* Section Header */}
            <SectionReveal delay={0} direction="up" distance={40}>
              <div className="text-center space-y-1 mt-5">
                <h2 className="text-3xl md:text-5xl font-bold text-balance">PILOT</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <strong className="font-semibold text-foreground">A pilot designed to prove lift.</strong>
                </p>
              </div>
            </SectionReveal>

            {/* Three Steps */}
            <div className="max-w-4xl mx-auto space-y-3 pt-2 text-center">
              {/* 1. Design */}
              <SectionReveal delay={0.1} direction="up" distance={30}>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">
                    1. <strong className="font-semibold text-foreground">Design</strong> — pick segment, content format, success metrics
                  </h3>
                </div>
              </SectionReveal>

              {/* 2. Deploy */}
              <SectionReveal delay={0.15} direction="up" distance={30}>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">
                    2. <strong className="font-semibold text-foreground">Deploy</strong> — ship magnets to a test group
                  </h3>
                </div>
              </SectionReveal>

              {/* 3. Measure */}
              <SectionReveal delay={0.2} direction="up" distance={30}>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">
                    3. <strong className="font-semibold text-foreground">Measure</strong> — track joins + renewal lift
                  </h3>
                </div>
              </SectionReveal>
            </div>

            {/* CTA */}
            <SectionReveal delay={0.25} direction="up" distance={30}>
              <div className="flex justify-center pt-2">
                <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank">
                  <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110"
                    background="rgba(0, 0, 0, 1)"
                    shimmerColor="#ffffff"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                      Start a Pilot
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </SectionReveal>
        </SectionWrapper>
      </section>

      {/* Footer */}
      <SectionWrapper enableFadeTransition={true}>
        <SectionReveal delay={0.1} direction="up" distance={40}>
          <footer className="bg-muted/30 border-t border-border">
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
        </SectionReveal>
      </SectionWrapper>
    </div>
  )
}

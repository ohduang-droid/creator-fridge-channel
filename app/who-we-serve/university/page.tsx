"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { SectionTransition } from "@/components/ui/section-transition"
import { FridgeChannelFeatures } from "@/components/fridge-channel-features"
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { motion } from "framer-motion"

export default function UniversityPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F4]">
            <Navigation />

            {/* Hero Section */}
            <HeroSection
                colors={["#1a4d2e", "#2d6a4f", "#40916c", "#52b788", "#74c69d", "#95d5b2"]}
                distortion={0.8}
                swirl={0.6}
                speed={0.42}
                offsetX={0.08}
                veilOpacity="bg-transparent"
                maxWidth="max-w-5xl"
                className="pt-16 min-h-[700px]"
            >
                <div className="flex flex-col items-center justify-center px-6 text-center min-h-[700px]">
                    <div className="mx-auto max-w-5xl" style={{ marginTop: '80px' }}>
                        <div className="relative mx-auto h-full pt-24 pb-12 p-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white"
                            >
                                Alumni revenue infrastructure at home
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="max-w-3xl mx-auto py-4 mt-8"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80">
                                Fridge Channel turns daily household attention into <strong className="font-semibold text-white">more recurring donors, more renewals, and higher retention</strong>—without platform risk.
                            </p>
                        </motion.div>
                        <div className="flex items-center justify-center gap-4" style={{ marginTop: '40px' }}>
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
                            <Link href="#how-it-works">
                                <ShimmerButton
                                    className="shadow-2xl transition-transform duration-300 hover:scale-110"
                                    background="rgba(255, 255, 255, 1)"
                                    shimmerColor="#000000"
                                >
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black lg:text-lg">
                                        How It Works
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </HeroSection>

            {/* Fridge Channel will bring you Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance">Fridge Channel will bring you</h2>
                    </div>

                    <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                        <FridgeChannelFeatures />
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* Our solution Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section id="what-is-fridge-channel" className="container mx-auto px-4 pt-8 pb-0">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-balance">Our solution</h2>

                    <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-center">
                        {/* Left column - 70% (7 columns) */}
                        <div className="md:col-span-7 prose prose-lg max-w-none text-foreground space-y-6">
                            <div className="text-lg leading-relaxed py-2">
                                <TextGradientScroll
                                    text="Fridge Channel brings your alumni relationship back into daily life through an AI-powered, magnet-based household touchpoint that creates repeated value exposure."
                                    type="letter"
                                    textOpacity="soft"
                                    className="text-lg leading-relaxed"
                                />
                            </div>
                            <div className="text-lg leading-relaxed py-2">
                                <TextGradientScroll
                                    text="It's a simple loop: glance → tap → preview."
                                    type="letter"
                                    textOpacity="soft"
                                    className="text-lg leading-relaxed"
                                />
                            </div>
                            <div className="text-lg leading-relaxed py-2">
                                <TextGradientScroll
                                    text="Not another channel to push. A channel that shows up—every day."
                                    type="letter"
                                    textOpacity="soft"
                                    className="text-lg leading-relaxed"
                                />
                            </div>
                        </div>

                        {/* Right column - 30% (3 columns) */}
                        <div className="md:col-span-3 flex items-center justify-center">
                            <img 
                                src="/imgflower.avif" 
                                alt="Flower" 
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* What alumni get in one tap Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance">What alumni get in one tap</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl font-semibold text-foreground">
                                <strong className="font-semibold text-foreground">One tap opens a 20-second "campus pulse."</strong>
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                Not a long read. Not a donation ask. Just enough to trigger: <em>"This place is alive—and I'm still part of it."</em>
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                In one tap, alumni can:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {/* Left column - Image */}
                            <div className="flex items-center justify-center">
                                <img 
                                    src="/flower.png" 
                                    alt="Flower" 
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>

                            {/* Right column - List items */}
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            <strong className="font-semibold text-foreground">See what's new</strong> — a real update from campus this week
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            <strong className="font-semibold text-foreground">Feel the impact</strong> — one proof point: scholarship outcome, student story, program result
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            <strong className="font-semibold text-foreground">Meet someone</strong> — a short alumni spotlight or student interview
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl leading-relaxed">
                                            <strong className="font-semibold text-foreground">Take one next step</strong> — RSVP, volunteer, share, renew, or give (when it's the right moment)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-8">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                <strong className="font-semibold text-foreground">That daily micro-moment is the product.</strong>
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                It builds familiarity and habit—so when you <em>do</em> ask, they're already warm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* How it Works Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section id="how-it-works">
                <div className="w-full bg-muted/30 dark:bg-neutral-950">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">HOW IT WORKS</h2>
                    </div>
                    <Timeline
                        data={[
                            {
                                title: "1. Define a pilot cohort",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            We ship AI-powered magnets to a defined alumni cohort.
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Default tracking: <strong className="font-semibold text-foreground">1 magnet = 1 alumni household touchpoint</strong> in the FC tracking chain.
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Common cohorts:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-8">
                                            <li><strong className="font-semibold text-foreground">LYBUNT / SYBUNT</strong> reactivation</li>
                                            <li><strong className="font-semibold text-foreground">new donors</strong> (drive "second gift")</li>
                                            <li><strong className="font-semibold text-foreground">young alumni</strong> (sustainer enrollment)</li>
                                            <li><strong className="font-semibold text-foreground">at-risk donors</strong> (lapse prevention)</li>
                                            <li><strong className="font-semibold text-foreground">membership renewals</strong> (alumni association)</li>
                                        </ul>
                                    </div>
                                ),
                            },
                            {
                                title: "2. Households generate touch evidence",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Households tap/scan and consume FC previews.
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                            FC records <strong className="font-semibold text-foreground">touch events</strong> (tap/preview) as household-level evidence.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "3. We measure incremental outcomes",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            You choose what "success" means in your shop (12-month vs FY retention, year-2 renewal, etc.).
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            We report FC touch activity and support clean readouts using <strong className="font-semibold text-foreground">test/holdout</strong> when you want.
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Typical outcomes:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-8">
                                            <li><strong className="font-semibold text-foreground">Growth:</strong> sustainer enrollment, membership join, new donor start</li>
                                            <li><strong className="font-semibold text-foreground">Retention:</strong> year-over-year retention, renewal rates, reduced lapses</li>
                                            <li><strong className="font-semibold text-foreground">Reactivation:</strong> LYBUNT/SYBUNT return rate</li>
                                        </ul>
                                    </div>
                                ),
                            },
                            {
                                title: "4. Reporting package",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Monthly:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-8">
                                            <li>Dashboard view of touch activity + cohort performance</li>
                                            <li>Downloadable CSV export (household-level rows)</li>
                                            <li>Evidence links for QA and internal review</li>
                                        </ul>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </section>
            </SectionTransition>

            {/* Reporting you get Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section className="container mx-auto px-4 pt-40 pb-20 bg-muted/30">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance">Reporting you get (audit-friendly)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Left column - Content */}
                        <div className="space-y-8">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                Exports can include:
                            </p>

                            <ul className="space-y-3 text-lg md:text-xl text-muted-foreground ml-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>anonymized household touchpoint ID</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>touch timestamps + preview events</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>content variant ID (which preview / message)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>cohort label (e.g., SYBUNT test group)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>optional outcome flags you map from your CRM (giving/renewal indicators)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>evidence link / dashboard view</span>
                                </li>
                            </ul>

                            <div className="space-y-4 pt-8">
                                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                    <strong className="font-semibold text-foreground">No revenue share. No fundraising commission.</strong>
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                                    Reporting exists for transparency and internal alignment.
                                </p>
                            </div>
                        </div>

                        {/* Right column - Image */}
                        <div className="flex items-center justify-center">
                            <img 
                                src="/shadow-image-3163.avif" 
                                alt="Shadow image" 
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* Pricing Section */}
            <SectionTransition intensity="low" enableFade={true} enableMovement={false}>
            <section id="pricing" className="relative min-h-[200vh] overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: '#469A74',
                    }}
                ></div>
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

                <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[200vh]" style={{ paddingTop: '175px', paddingBottom: '175px' }}>
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="space-y-12">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-balance text-black">PRICING</h2>
                                <h3 className="text-xl md:text-2xl font-semibold text-black">Flat annual fee. Zero commission.</h3>
                            </div>

                            <div className="max-w-2xl mx-auto space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                                        <div className="flex-1 space-y-2">
                                            <p className="text-xl md:text-2xl font-semibold text-black">
                                                <span className="text-3xl md:text-4xl">$39.90</span> per magnet / per year
                                            </p>
                                            <p className="text-base md:text-lg text-black/80">
                                                <strong className="font-semibold text-black">1 magnet = 1 alumni household touchpoint</strong> (tracked, auditable).
                                            </p>
                                            <p className="text-base md:text-lg text-black/80">
                                                This is a <strong className="font-semibold text-black">channel fee</strong>, not a fundraising cut. You keep 100% of donations and dues.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What's included */}
                        <div className="space-y-6 pt-8">
                            <h3 className="text-xl md:text-2xl font-semibold text-black text-center">What's included (end-to-end)</h3>

                            <div className="max-w-3xl mx-auto space-y-4">
                                <ul className="space-y-3 text-lg md:text-xl text-black/90 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">Institution-ready design:</strong> branding, layouts, CTA patterns, message templates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">Manufacturing + QA:</strong> NFC build, finishing, reliability checks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">Logistics handled:</strong> customs clearance + shipping + delivery coordination</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">AI system included:</strong> preview generation, routing, personalization logic, content ops rules</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">Tracking + reporting:</strong> dashboards + exportable CSV + evidence links</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-black mt-1">•</span>
                                        <span><strong className="font-semibold text-black">Pilot setup + iteration:</strong> cohort plan + rollout playbook + monthly optimization loop</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Recommended pilot sizing */}
                        <div className="space-y-6 pt-8">
                            <div className="max-w-3xl mx-auto space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-black text-center">Recommended pilot sizing</h3>
                                <p className="text-lg md:text-xl text-black/90 text-center">
                                    Most universities start with <strong className="font-semibold text-black">1,500–3,000 alumni household touchpoints</strong> for a clear pilot readout and clean internal alignment.
                                </p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-16">
                            <div className="max-w-3xl mx-auto">
                                <div className="text-center space-y-6">
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank">
                                            <ShimmerButton
                                                className="shadow-2xl w-full sm:w-auto"
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* Privacy & compliance Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section className="container mx-auto px-4 pt-40 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance">Privacy & compliance</h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div className="flex-1">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    FC tracking is <strong className="font-semibold text-foreground">touchpoint-based</strong> by default (anonymized household touchpoint ID + interactions).
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div className="flex-1">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    No personal identity is required unless you choose deeper matching on your side.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div className="flex-1">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Designed to support institutional privacy review and donor confidentiality expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* Final CTA Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section className="w-full pt-40 pb-40" style={{ backgroundColor: '#2E6B50' }}>
                <div className="max-w-4xl mx-auto px-4 space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-balance text-white">
                            Stop renting attention. Own a daily household touchpoint for alumni revenue.
                        </h2>
                        <div className="flex justify-center pt-8">
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
                    </div>
                </div>
            </section>
            </SectionTransition>

            {/* FAQ Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
            <section id="faq" className="container mx-auto px-4 pt-20 pb-20 border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQ</h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">
                                Quick answers to common questions about Fridge Channel.
                            </p>
                        </div>

                        <div className="md:col-span-3">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        Is this a fundraising commission or revenue share?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            No. Flat annual fee per touchpoint: $39.90/magnet/year.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        What do alumni see after tapping?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            A short "campus pulse": impact proof, wins, alumni stories, and one next step—approved by your team's rules/templates.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        How do we prove incrementality?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            Run a test vs holdout cohort if you want. We supply household-level touch evidence + exports to support uplift analysis.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        Does this replace email/direct mail/events?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            No. It reinforces them with daily household presence, improving conversion and retention across your existing channels.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        What segments work best?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            LYBUNT/SYBUNT, new donors (second gift), young alumni sustainers, at-risk donors, membership renewals.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                        What do we need to launch?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-muted-foreground">
                                            Cohort definition + approved content rules/templates. FC handles design, production, shipping, and system setup.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            </SectionTransition>

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

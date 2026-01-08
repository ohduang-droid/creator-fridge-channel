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
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { MostPopularPlansSection } from "@/components/most-popular-plans-section"
import { TrustComplianceSection } from "@/components/TrustComplianceSection"
import { SiteFooter } from "@/components/site-footer"
import { PilotFlowTimeline } from "@/components/ui/pilot-flow-timeline"
import { HeroTextReveal } from "@/components/ui/hero-text-reveal"

export default function UniversitiesPage() {
    const pilotSteps = [
        {
            id: "step-1",
            title: "1. Pick a plan",
            body: ["CTA + cohort + size range", "Align on the pilot scope"],
        },
        {
            id: "step-2",
            title: "2. Mock in 48h",
            body: ["No data needed", "Can be shared internally"],
        },
        {
            id: "step-3",
            title: "3. 15-min review",
            body: ["Keep / tweak / stop", "Fast decision loop"],
        },
        { id: "step-4", title: "4. Pilot design", body: ["Rules + measurement boundary"] },
        {
            id: "step-5",
            title: "5. Stakeholder review",
            body: ["Legal / procurement / brand review; share Trust Center"],
        },
        { id: "step-6", title: "6. Kickoff & production", body: ["Timeline + replacement policy"] },
        { id: "step-7", title: "7. Pilot running", body: ["Aggregated outcomes reporting"] },
        { id: "step-8", title: "8. Review & scale", body: ["Next cohort / next plan"] },
    ] as const


    return (
        <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
            <Navigation />

            <main className="flex-1">
            {/* Hero Section */}
            <HeroSection
                colors={["#1a4d2e", "#2d6a4f", "#40916c", "#52b788", "#74c69d", "#95d5b2"]}
                distortion={0.8}
                swirl={0.6}
                speed={0.42}
                offsetX={0.08}
                veilOpacity="bg-transparent"
                bottomFadeColor="#F7F7F4"
                maxWidth="max-w-7xl"
                className="pt-16 min-h-[700px]"
            >
                <div className="flex flex-col items-center justify-center text-center min-h-[700px] -translate-y-10">
                    <div className="mx-auto w-full mt-20">
                        <div className="relative mx-auto h-full pt-24 pb-12">
                            <HeroTextReveal
                                translateY={40}
                                duration={0.7}
                                className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white"
                            >
                                At-home infrastructure for <strong className="font-semibold">recurring giving</strong> and <strong className="font-semibold">renewals</strong>
                            </HeroTextReveal>
                        </div>

                        <HeroTextReveal
                            delay={0.2}
                            translateY={30}
                            duration={0.7}
                            className="w-full max-w-7xl mx-auto px-6 py-4 mt-8"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80">
                                Fridge Channel turns daily household attention into <strong className="font-semibold text-white">more monthly donors</strong>, <strong className="font-semibold text-white">higher annual-fund renewals</strong>, and <strong className="font-semibold text-white">stronger alumni retention</strong>—without relying on feeds or inboxes.
                            </p>
                        </HeroTextReveal>
                        <div className="flex items-center justify-center gap-4 mt-10">
                            <Link href="#most-popular-plans">
                                <ShimmerButton
                                    className="shadow-2xl transition-transform duration-300 hover:scale-110 w-[272px]"
                                    background="rgba(0, 0, 0, 1)"
                                    shimmerColor="#ffffff"
                                >
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                                        See plans
                                    </span>
                                </ShimmerButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </HeroSection>

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
                                title: "1. Place",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            <strong className="font-semibold text-foreground">At-home touchpoint</strong> lives where daily routines happen.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "2. Content",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Alumni <strong className="font-semibold text-foreground">tap/scan</strong> → <strong className="font-semibold text-foreground">your university-branded page</strong>: alumni stories, campus updates, campaign pages, event RSVP, giving page.
                                        </p>
                                        <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-lg text-muted-foreground">
                                            <strong className="font-semibold text-foreground">You control the destination + CTA.</strong>
                                        </blockquote>
                                    </div>
                                ),
                            },
                            {
                                title: "3. User action",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Alumni take the next step on <strong className="font-semibold text-foreground">your</strong> destination:
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            <strong className="font-semibold text-foreground">Donate monthly / Renew / RSVP</strong>.
                                        </p>
                                    </div>
                                ),
                            },
                            {
                                title: "4. University measurement",
                                content: (
                                    <div>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            Your team sees <strong className="font-semibold text-foreground">aggregated</strong> outcomes (visits → clicks → completions).
                                        </p>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                            <strong className="font-semibold text-foreground">No PII. No person-level tracking.</strong>
                                        </p>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </section>
            </SectionTransition>

            {/* Most Popular Plans Section */}
            <section id="most-popular-plans" className="scroll-mt-28">
                <MostPopularPlansSection />
            </section>

            {/* How a Pilot Works Section - Flow Style */}
            <SectionTransition intensity="low" enableFade={true} enableMovement={false}>
                <section id="pricing">
                    <PilotFlowTimeline 
                        steps={pilotSteps}
                        title="How a Pilot Works"
                    />
                </section>
            </SectionTransition>

            {/* Trust & Compliance Section */}
            <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                <TrustComplianceSection />
            </SectionTransition>

            {/* Final CTA Section */}
            <section className="w-full bg-[#4C8666] relative z-10">
                <div className="container mx-auto px-4 py-20">
                    <div className="flex justify-center items-center">
                        <Link href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" target="_blank" rel="noopener noreferrer">
                            <ShimmerButton
                                className="shadow-2xl transition-transform duration-300 hover:scale-110"
                                background="rgba(0, 0, 0, 1)"
                                shimmerColor="#ffffff"
                            >
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                                    Request a mock
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

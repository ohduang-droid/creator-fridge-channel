"use client";

import Image from "next/image"
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
import { MostPopularPlansSectionRetailers } from "@/components/most-popular-plans-section-retailers"
import { TrustComplianceSection } from "@/components/TrustComplianceSection"
import { SiteFooter } from "@/components/site-footer"
import { PilotFlowTimeline } from "@/components/ui/pilot-flow-timeline"
import { HeroTextReveal } from "@/components/ui/hero-text-reveal"
import { AnimatedTitle } from "@/components/ui/animated-title"
import FAQs from "@/components/ui/faqs-component"

export default function RetailersPage() {
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
    ]

    return (
        <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection
                    colors={["#1a4d2e", "#ffffff", "#2d6a4f", "#ffffff", "#40916c", "#ffffff"]}
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
                                    At-home infrastructure for <strong className="font-semibold">trip frequency</strong> and <strong className="font-semibold">basket growth</strong>
                                </HeroTextReveal>
                            </div>

                            <HeroTextReveal
                                delay={0.2}
                                translateY={30}
                                duration={0.7}
                                className="w-full max-w-7xl mx-auto px-6 py-4 mt-8"
                            >
                                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80">
                                    Fridge Channel converts household routines into <strong className="font-semibold text-white">more trips</strong>, <strong className="font-semibold text-white">more items per trip</strong>, and <strong className="font-semibold text-white">measurable redemption</strong>—without feeds or inboxes.
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
                {/* How it Works Section */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true} fadeRange={[0, 0.1, 0.9, 1]}>
                    <section id="how-it-works">
                        <div className="w-full bg-muted/30 dark:bg-neutral-950">
                            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20">
                                <AnimatedTitle className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">HOW IT WORKS</AnimatedTitle>
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
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    <div className="relative w-full overflow-hidden rounded-lg">
                                                        <Image
                                                            src="/step1-1.png"
                                                            alt="How it works step 1 - image 1"
                                                            width={1200}
                                                            height={900}
                                                            className="w-full h-auto"
                                                            priority
                                                        />
                                                    </div>
                                                    <div className="relative w-full overflow-hidden rounded-lg">
                                                        <Image
                                                            src="/step1-2.png"
                                                            alt="How it works step 1 - image 2"
                                                            width={1200}
                                                            height={900}
                                                            className="w-full h-auto"
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "2. Content",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Shoppers <strong className="font-semibold text-foreground">tap/scan</strong> →{" "}
                                                    <strong className="font-semibold text-foreground">your retailer-governed destination</strong>:
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    weekly deal / weekly picks, list-building, category spotlight, loyalty page, store map or directions (where available).
                                                </p>
                                                <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-lg text-muted-foreground">
                                                    You control the destination + CTA (eg:{" "}
                                                    <strong className="font-semibold text-foreground">
                                                        Get this week’s deal / Add to basket / Join loyalty / Shop the category
                                                    </strong>
                                                    )
                                                </blockquote>
                                                <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg mt-6">
                                                    <Image
                                                        src="/r2.png"
                                                        alt="How it works step 2 illustration"
                                                        width={1200}
                                                        height={900}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "3. User Action",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Shoppers take the next step on <strong className="font-semibold text-foreground">your</strong> CTA
                                                </p>
                                                <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg mt-6">
                                                    <Image
                                                        src="/r3.png"
                                                        alt="How it works step 3 illustration"
                                                        width={1200}
                                                        height={900}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "4. Retailer measurement",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Your team sees <strong className="font-semibold text-foreground">aggregated</strong>{" "}
                                                    outcomes at store/region/campaign level
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    (visits → CTA clicks → outcome signals where available).
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    <strong className="font-semibold text-foreground">No PII. No person-level tracking.</strong>
                                                </p>
                                                <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg mt-6">
                                                    <Image
                                                        src="/r4.png"
                                                        alt="How it works step 4 illustration"
                                                        width={1200}
                                                        height={900}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
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
                    <MostPopularPlansSectionRetailers />
                </section>

                {/* How a Pilot Works Section - Flow Style */}
                <SectionTransition intensity="low" enableFade={false} enableMovement={false}>
                    <section id="pricing">
                        <PilotFlowTimeline
                            steps={pilotSteps}
                            title="How a Pilot Works"
                            accentColor="#469A74"
                            backgroundColor="#F7F7F4"
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

                {/* FAQ Section */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <FAQs
                        id="faq"
                        title="FAQ"
                        faqItems={[
                            {
                                id: "who-pays-budget",
                                question: "Who pays—retailer budget or brand (co-op) budget?",
                                answer:
                                    "Both models work. Retailers use this for trip frequency, basket growth, and loyalty—often funded by shopper marketing/CRM budgets. Brands can also sponsor campaigns (category spotlight, seasonal pushes) through co-op/trade programs while keeping retailer governance and measurement consistent. The clean structure is: retailer owns the program + approvals; brands fund specific campaigns within approved templates.",
                            },
                            {
                                id: "conflict-with-rmn-sms-email-app-push",
                                question: "Will this conflict with retailer media networks, SMS/email, app push?",
                                answer:
                                    "No—FC is a complementary at-home touchpoint. Retail media drives reach; SMS/email/app push drives reminders; FC adds repeated household visibility with user-initiated actions. You keep your existing channels, and FC becomes the “offline-to-online” bridge that reinforces the same weekly deal, list build, loyalty action, or pickup/reorder CTA.",
                            },
                            {
                                id: "localized-by-region-store",
                                question: "Can campaigns be localized by region/store?",
                                answer:
                                    "Yes. You can run one national template with region/store routing. The destination can resolve to the shopper’s nearest store page, regional weekly circular, or localized pickup/offer page—while creative, terms, and CTA stay within retailer-approved rules.",
                            },
                            {
                                id: "multiple-ctas",
                                question: "Can one touchpoint include multiple CTAs?",
                                answer:
                                    "We recommend one touchpoint = one next step for maximum conversion. If you need multiple outcomes (weekly deal vs loyalty vs category), use plan-level separation or lifecycle/state routing so each user sees a single prioritized CTA rather than a menu.",
                            },
                            {
                                id: "measure-lift-boundary",
                                question: "How do you measure lift—what’s the attribution boundary?",
                                answer:
                                    "We report aggregated events (taps/visits/clicks) and outcome signals where available (redemption, add-to-list, join loyalty). For incrementality, pilots can use region/store test-vs-control or matched-store comparisons. We do not do person-level tracking, cross-device identity stitching, or claim to attribute all sales to FC—measurement is directional and/or controlled at aggregated levels.",
                            },
                            {
                                id: "data-boundaries-pii",
                                question: "What are the data boundaries—any PII?",
                                answer:
                                    "No PII is required. FC operates on aggregated events only. If your CTA routes into your own loyalty or ecommerce environment, that downstream step is handled within your systems and policies; FC remains an aggregated engagement layer.",
                            },
                            {
                                id: "delivery-qc-replacements",
                                question: "Delivery, QC, replacement policy?",
                                answer:
                                    "Standard flow: approvals → print-ready assets → production → shipment to your distribution point(s). QC rules and sampling checks are defined upfront, and replacement covers print defects, shipping damage, or functional failures within policy. Timelines are explicit and shift only with approval delays.",
                            },
                            {
                                id: "brand-safety-compliance-multi-brand",
                                question: "Brand safety and compliance—especially for multi-brand retailers?",
                                answer:
                                    "Retailer governance is primary. Retailer approves CTA, destination, offer terms, co-branding rules, and category exclusions. Vendor campaigns run only within retailer-approved templates, with version control for auditable changes. This protects pricing policy, claims compliance, and category restrictions.",
                            },
                        ]}
                    />
                </SectionTransition>

            </main>
            <SiteFooter />
        </div>
    )
}


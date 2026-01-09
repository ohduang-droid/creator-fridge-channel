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
import { MostPopularPlansSectionChainsFranchises } from "@/components/most-popular-plans-section-chains-franchises"
import { TrustComplianceSection } from "@/components/TrustComplianceSection"
import { SiteFooter } from "@/components/site-footer"
import { PilotFlowTimeline } from "@/components/ui/pilot-flow-timeline"
import { HeroTextReveal } from "@/components/ui/hero-text-reveal"
import { AnimatedTitle } from "@/components/ui/animated-title"
import FAQs from "@/components/ui/faqs-component"

export default function ChainsFranchisesPage() {
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
                    // White + Fridge Channel orange hero background
                    colors={["#FFFFFF", "#FF6C02", "#FFE5D1", "#FFB37A", "#FFFFFF", "#FF6C02"]}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                    // Add a subtle dark veil so the white text stays readable
                    veilOpacity="bg-black/15"
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
                                    At-home infrastructure for <strong className="font-semibold">repeat visits</strong> and <strong className="font-semibold">loyalty activation</strong>
                                </HeroTextReveal>
                            </div>

                            <HeroTextReveal
                                delay={0.2}
                                translateY={30}
                                duration={0.7}
                                className="w-full max-w-7xl mx-auto px-6 py-4 mt-8"
                            >
                                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/80">
                                    Fridge Channel turns daily household attention into <strong className="font-semibold text-white">more repeat orders</strong>, <strong className="font-semibold text-white">higher loyalty enrollments</strong>, and <strong className="font-semibold text-white">stronger local retention</strong>—without relying on feeds or inboxes.
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
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                                    <Image
                                                        src="/step1-1.png"
                                                        alt="How it works step 1 illustration 1"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl border border-border/60 shadow-sm"
                                                        sizes="(max-width: 640px) 100vw, 50vw"
                                                    />
                                                    <Image
                                                        src="/step1-2.png"
                                                        alt="How it works step 1 illustration 2"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl border border-border/60 shadow-sm"
                                                        sizes="(max-width: 640px) 100vw, 50vw"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "2. Content",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Customers <strong className="font-semibold text-foreground">tap/scan</strong> →{" "}
                                                    <strong className="font-semibold text-foreground">your brand-approved retail destination</strong>:
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    reorder page, offer claim, booking flow, store directions, loyalty join or activation.
                                                </p>
                                                <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-lg text-muted-foreground">
                                                    <strong className="font-semibold text-foreground">You control the destination + CTA.</strong>
                                                </blockquote>
                                                <div className="mt-6 w-full sm:w-1/2">
                                                    <Image
                                                        src="/c2.png"
                                                        alt="How it works step 2 illustration"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl border border-border/60 shadow-sm"
                                                        sizes="(max-width: 640px) 100vw, 50vw"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "3.  User Action",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Customers take the next step on <strong className="font-semibold text-foreground">your</strong>{" "}
                                                    destination—
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    <strong className="font-semibold text-foreground">one clear action, routed by customer state</strong>:
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    <strong className="font-semibold text-foreground">
                                                        Repeat / Claim offer / Book now / Join or activate loyalty
                                                    </strong>
                                                    .
                                                </p>
                                                <div className="mt-6 w-full sm:w-1/2">
                                                    <Image
                                                        src="/c3.png"
                                                        alt="How it works step 3 illustration"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl border border-border/60 shadow-sm"
                                                        sizes="(max-width: 640px) 100vw, 50vw"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        title: "4. Retail measurement",
                                        content: (
                                            <div>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    Your team sees <strong className="font-semibold text-foreground">aggregated</strong>{" "}
                                                    outcomes at store or region level
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    (visits → CTA clicks → outcome signals where available).
                                                </p>
                                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                                    <strong className="font-semibold text-foreground">No PII. No person-level tracking.</strong>
                                                </p>
                                                <div className="mt-6 w-full sm:w-1/2">
                                                    <Image
                                                        src="/c4.png"
                                                        alt="How it works step 4 illustration"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl border border-border/60 shadow-sm"
                                                        sizes="(max-width: 640px) 100vw, 50vw"
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
                    <MostPopularPlansSectionChainsFranchises />
                </section>

                {/* How a Pilot Works Section - Flow Style */}
                <SectionTransition intensity="low" enableFade={false} enableMovement={false}>
                    <section id="pricing">
                        <PilotFlowTimeline
                            steps={pilotSteps}
                            title="How a Pilot Works"
                            accentColor="#FF6C02"
                            backgroundColor="#F7F7F4"
                        />
                    </section>
                </SectionTransition>

                {/* Trust & Compliance Section */}
                <SectionTransition intensity="medium" enableFade={true} enableMovement={true}>
                    <TrustComplianceSection />
                </SectionTransition>

                {/* Final CTA Section */}
                <section className="w-full bg-[#FF6C02] relative z-10">
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
                                id: "hq-vs-store-budget",
                                question: "Is this a HQ budget or a store (franchisee) budget?",
                                answer:
                                    "It can be either—depending on who controls distribution, who captures the benefit, and how much governance is required. If you need brand/legal control, standardized templates, consistent reporting, and scalable rollout across locations, it typically sits with HQ or regional budgets. If it’s highly local (store events, neighborhood winback, service bookings) and stores can execute distribution themselves, it often fits store-level local marketing budgets. The cleanest model is hybrid: HQ funds governance + templates/reporting, while stores fund per-location deployment.",
                            },
                            {
                                id: "conflict-with-sms-email-app",
                                question: "Will this conflict with SMS/Email/App?",
                                answer:
                                    "No. It’s complementary, not a replacement. SMS/Email/App are push channels that can fatigue quickly; FC is a high-visibility at-home touchpoint that customers activate by choice. You keep running lifecycle campaigns through your existing CRM, and FC reinforces the same “next step” without adding push frequency—helping drive return visits, redemptions, loyalty actions, and bookings.",
                            },
                            {
                                id: "store-localize-hq-approve",
                                question: "Can stores localize? How does HQ approve?",
                                answer:
                                    "Yes—localization can be controlled through “templates + variables.” HQ approves the non-negotiables (brand rules, CTA types, landing-page structure, legal terms, visual system). Stores/regions only customize allowed fields (location, hours, event date, regional offer code, booking link). If HQ wants strict control, use HQ-led destinations; if you want local flexibility, use store/region routing within HQ-approved constraints.",
                            },
                            {
                                id: "multiple-ctas",
                                question: "Can one touchpoint include multiple CTAs?",
                                answer:
                                    "It can, but we recommend one touchpoint = one next step. Multiple CTAs dilute conversion in a short attention window. If you need different actions for different people, use cohort/state routing so the experience shows one CTA per user state—rather than stacking buttons on the same screen.",
                            },
                            {
                                id: "measure-incremental-lift",
                                question: "How do you measure incremental lift? Is there a control/attribution boundary?",
                                answer:
                                    "Baseline reporting is directional lift using aggregated metrics (by store/region/campaign): taps/visits/CTA clicks plus outcome signals where available (redemptions, bookings, reorders). For rigorous lift, pilots can run test vs control (matched stores/regions, or time-based controls) to estimate incremental visits/orders/redemptions. Attribution boundaries are explicit: no person-level cross-device tracking, no “all sales credited to FC” claims—only measurable aggregated lift signals and optional controlled comparisons.",
                            },
                            {
                                id: "data-boundaries",
                                question: "What are the data boundaries? Does this involve PII?",
                                answer:
                                    "No PII is required. FC captures aggregated events (e.g., tap/scan, landing-page visits, CTA clicks) and reports them at store/region/campaign levels. We do not collect names, emails, phone numbers, or build identity graphs. If your CTA routes into your own loyalty/checkout system, that downstream action happens within your systems and policies; FC remains at the aggregated engagement layer.",
                            },
                            {
                                id: "delivery-replacements",
                                question: "Delivery & replacements: timeline, QC, replacement policy?",
                                answer:
                                    "The flow is approvals (CTA/destination/creative) → print-ready files → production → shipment to HQ or distribution points for stores. We provide standard QC rules (including sampling checks) and a clear replacement policy for issues like print defects, shipping damage, or functional failures within defined terms. Timelines and responsibilities are explicit, and approval delays shift schedules accordingly; pilots typically include a small buffer quantity to prevent store-level execution gaps.",
                            },
                            {
                                id: "brand-safety",
                                question: "Brand safety: approvals, category exclusions, compliance requirements?",
                                answer:
                                    "Brand safety is enforced via approval workflows, category exclusions, and version control. HQ can require approval for copy, visuals, offer terms, disclaimers, and destinations—especially in regulated categories. You can define prohibited categories, restricted claims, and required compliance language. All customer-facing assets run on approved versions with auditable changes; store localization is limited to HQ-approved variables to protect pricing policy, legal terms, and brand consistency.",
                            },
                        ]}
                    />
                </SectionTransition>

            </main>
            <SiteFooter />
        </div>
    )
}

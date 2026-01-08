"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section-official"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card"
import { PilotFormSection } from "@/components/pilot-form-section"
import { HowItWorksTimeline } from "@/components/how-it-works-timeline-official"
import { Navigation } from "@/components/navigation"
import { ProblemSection } from "@/components/problem-section"
import { ROIEngineSection } from "@/components/roi-engine-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HandWrittenTextButton } from "@/components/ui/hand-written-text-button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function SubscriptionBusinessPage() {
    return (
        <div className="min-h-screen bg-[#F7F7F4]">
            <Navigation />
            {/* Hero Section */}
            <HeroSection />

            {/* Problem Section */}
            <div className="mt-10">
                <ProblemSection />
            </div>

            {/* Subscription Value Lost Section */}
            <section id="subscription-value-lost" className="container mx-auto px-4 pt-16 pb-16 mt-10 hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-6">
                        Your Problem
                    </h2>

                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            If you are building a subscription business powered by <strong className="font-semibold text-foreground">content-driven growth</strong> and <strong className="font-semibold text-foreground">renewals</strong> you will face this challenge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Always delay */}
                        <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                                Always delay
                            </h3>
                            <ul className="space-y-3 text-base text-foreground/80 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground mt-1">•</span>
                                    <span>"I'll use it later" becomes "I forgot"</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Your touchpoints are not yours */}
                        <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                                Your touchpoints are not yours
                            </h3>
                            <ul className="space-y-3 text-base text-foreground/80 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground mt-1">•</span>
                                    <span>Algorithms decide when you show up</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3: Renewal issues */}
                        <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                                Renewals arrive before value does
                            </h3>
                            <ul className="space-y-3 text-base text-foreground/80 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="text-foreground mt-1">•</span>
                                    <span>Paid users feel less value before renewal which lead to churn pressure rises</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Fridge Channel strengthens your C.O.R.E Section - styled like untillabs Assaying Organ Health */}
            <section id="why-creators-love-it" className="relative overflow-hidden mt-10" style={{ backgroundColor: '#C32D0B' }}>
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
                    {/* Who This Is For Section */}
                    <div className="max-w-6xl mx-auto mt-16 pt-16">
                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-8 text-white">
                            Our solution
                        </h2>

                        {/* Introduction text */}
                        <div className="mb-8 text-center max-w-4xl mx-auto">
                            <TextGenerateEffect
                                words="FridgeChannel brings your subscription back into daily life through an AI powered magnet based household touchpoint that creates repeated value exposure. With a simple loop of glance scan and preview your audience is reminded of your value every day and can instantly open the full issue upgrade or take action. More daily visibility means stronger conversion momentum and less churn at renewal."
                                className="text-lg md:text-xl text-white/90 leading-relaxed"
                                filter={false}
                                duration={0.5}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="mt-10">
                <HowItWorksTimeline />
            </section>

            {/* ROI Engine Section */}
            <div className="mt-10">
                <ROIEngineSection />
            </div>

            {/* Pricing Section - styled like C.O.R.E Section */}
            <section id="pricing" className="relative overflow-hidden mt-10" style={{ backgroundColor: '#8D0104' }}>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-balance text-white">OUTCOME-BASED PRICING</h2>
                            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                                <strong className="font-semibold text-white">Turn household attention into subscriptions, retention, and durable revenue.</strong>
                            </p>
                        </div>

                        {/* 1. Pilot Fee */}
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">1. Pilot Fee</h3>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                                <ul className="space-y-2 text-base md:text-lg text-white/90 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Cohort:</strong> 1500 ≤ touchpoints &lt; 3000
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">$10 / user</strong> (first batch)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">$20 / user</strong> (after pilot expansion)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Subscription revenue share */}
                        {/* 2. Growth Share (New Paid) */}
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">2. Growth Share (New Paid)</h3>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                                <ul className="space-y-2 text-base md:text-lg text-white/90 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Fee:</strong> <strong className="font-semibold text-white">10% × subscription revenue / billing period</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Applies to:</strong> users who become <strong className="font-semibold text-white">New Paid</strong> after FC touch
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Duration:</strong> while the user stays paid
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Retention Share (Month 11+) */}
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">3. Retention Share (Month 11+)</h3>
                            <div className="bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-lg p-6">
                                <ul className="space-y-2 text-base md:text-lg text-white/90 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Period 1–10:</strong> <strong className="font-semibold text-white">$0</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">From period 11+:</strong> <strong className="font-semibold text-white">10% × subscription revenue / billing period</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Applies to:</strong> paid users who have FC touch
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white mt-1">•</span>
                                        <span>
                                            <strong className="font-semibold text-white">Duration:</strong> while the user stays paid
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What creators can see their household asset Section */}
            <section id="who-its-for" className="container mx-auto px-4 pt-20 pb-20 mt-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance">Every month you get</h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4 text-center ml-20">
                        <ul className="space-y-3 text-lg text-foreground leading-relaxed text-left">
                            <li className="flex items-start gap-2">
                                <span className="text-foreground mt-1">•</span>
                                <span>
                                    Invoice with two columns: <strong className="font-semibold text-foreground">Growth Share / Retention Share (Month 11+)</strong>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground mt-1">•</span>
                                <span>
                                    A downloadable <strong className="font-semibold text-foreground">CSV</strong> (one row per user), including:
                                </span>
                            </li>
                        </ul>
                        <ul className="space-y-2 text-base text-foreground/80 leading-relaxed text-left ml-8 list-disc">
                            <li>anonymized</li>
                            <li>touch timestamp(s)</li>
                            <li>paid-start timestamp (Growth)</li>
                            <li>billing period index (Retention)</li>
                            <li>subscription revenue + fee</li>
                            <li>dashboard evidence link</li>
                        </ul>

                        {/* Summary Rules */}
                        <div className="mt-12 pt-8 flex justify-center">
                            <div className="bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-gray-200/50 rounded-lg p-6 w-fit shadow-lg">
                                <ul className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed text-left">
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1">•</span>
                                        <span>
                                            <strong className="font-bold text-foreground">No double charge:</strong> one user, one period, <strong className="font-bold text-foreground">10% max</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1">•</span>
                                        <span>
                                            <strong className="font-bold text-foreground">No evidence, no bill:</strong> every charged user has dashboard proof
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-foreground mt-1">•</span>
                                        <span>
                                            <strong className="font-bold text-foreground">Refunds:</strong> reversed revenue = <strong className="font-bold text-foreground">$0 fee</strong> (credited next invoice if needed)
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="final-cta" className="relative overflow-hidden mt-10" style={{ backgroundColor: '#8D0104' }}>
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
                <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center py-48">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {/* Header */}
                        <div className="space-y-6 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-balance text-white">
                                <strong className="font-bold">Ready to lift conversion and retention with a channel you can audit?</strong>
                            </h2>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col items-center gap-4 pt-4">
                            <Link
                                href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ShimmerButton
                                    className="shadow-2xl transition-transform duration-300 hover:scale-110 w-full sm:w-[302px]"
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

            {/* Mini FAQ Section */}
            <section id="faq" className="container mx-auto px-4 pt-10 pb-10 border-t border-border mt-10">
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
                        {/* <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
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
            </nav> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}

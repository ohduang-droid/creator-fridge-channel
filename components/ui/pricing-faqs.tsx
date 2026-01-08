'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function PricingFAQs() {
    const faqItems = [
        {
            id: 'faq-1',
            question: "What's the difference between Network and Private?",
            answer: (
                <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground leading-relaxed">
                    <li>
                        <strong className="font-semibold text-foreground">Network Mode</strong>: mutual discovery inside FC
                        (you can receive traffic and also contribute some).
                    </li>
                    <li>
                        <strong className="font-semibold text-foreground">Private Mode</strong>: closed and brand-safe (no
                        cross-traffic inside FC).
                    </li>
                </ul>
            ),
        },
        {
            id: 'faq-2',
            question: 'Where does Category Exclusion fit?',
            answer: (
                <div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Category Exclusion is a <strong className="font-semibold text-foreground">Network Mode safety layer</strong>:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground leading-relaxed mt-2">
                        <li>Stay in Network (still get discovery)</li>
                        <li>
                            Block competitor categories from recommendations
                            <div className="mt-2 pl-4 text-sm md:text-base">
                                If you want <strong className="font-semibold text-foreground">zero</strong> cross-traffic, choose{" "}
                                <strong className="font-semibold text-foreground">Private Mode</strong>.
                            </div>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: 'faq-3',
            question: 'Do you ship to individual households?',
            answer: (
                <div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Not in standard Delivery. We ship in bulk <strong className="font-semibold text-foreground">to your organization</strong>, and you distribute.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-3">
                        (Last-mile fulfillment can be arranged via partners as an add-on.)
                    </p>
                </div>
            ),
        },
        {
            id: 'faq-4',
            question: 'Is "Active" just a tap?',
            answer: (
                <div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        No. <strong className="font-semibold text-foreground">Impact Active requires ≥10 seconds verified engagement.</strong>
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-2">
                        <strong className="font-semibold text-foreground">Intent Active requires a qualified CTA</strong> (not accidental clicks).
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-2">
                        One touchpoint/month is charged once; Intent overrides Impact.
                    </p>
                </div>
            ),
        },
        {
            id: 'faq-5',
            question: 'Can a fridge have touchpoints from multiple brands?',
            answer: (
                <p className="text-base text-muted-foreground leading-relaxed">
                    Yes. Multi-brand fridges are normal. Your traffic model controls only what happens{" "}
                    <strong className="font-semibold text-foreground">inside FC after a user interacts</strong>.
                </p>
            ),
        },
    ]

    return (
        <section className="pt-0 pb-0">
            <div className="mx-auto max-w-5xl px-6">
                {/* Divider */}
                <div className="border-t border-border/20 mb-12"></div>
                <div className="flex flex-col items-center">
                    <div className="text-center mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">FAQ</h2>
                    </div>

                    <div className="w-full max-w-3xl">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    )
}

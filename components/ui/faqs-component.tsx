'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

type FAQItem = {
    id: string
    question: string
    answer: string
}

export default function FAQs({
    id,
    title = 'FAQ',
    description,
    supportHref,
    supportText,
    faqItems,
}: {
    id?: string
    title?: string
    description?: string
    supportHref?: string
    supportText?: string
    faqItems: FAQItem[]
}) {
    return (
        <section id={id} className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
                    {description ? (
                        <p className="text-muted-foreground mt-4 text-balance text-lg">{description}</p>
                    ) : null}
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1"
                    >
                        {faqItems.map((item) => (
                            <AccordionItem key={item.id} value={item.id} className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {supportHref ? (
                        <p className="text-muted-foreground mt-6">
                            {supportText ?? "Can't find what you're looking for? Contact our"}{' '}
                            <Link href={supportHref} className="text-primary font-medium hover:underline">
                                customer support team
                            </Link>
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    )
}


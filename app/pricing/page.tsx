import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />

      <main className="pt-28 flex-1">
        <section className="container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <header className="space-y-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">Pricing</h1>
            </header>

            {/* Pay only when a touchpoint is used */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Pay only when a touchpoint is used</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Fridge Channel turns fridge touchpoints into measurable actions.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Billing is usage-based:</strong> we charge per <strong>Active Touchpoint-Month</strong>.
              </p>
              <hr className="border-border/60" />
            </section>

            {/* Cards */}
            <section className="grid gap-6 md:grid-cols-3">
              <Card className="bg-white border border-border/60">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">Card 1 — Delivery (One-time)</CardTitle>
                  <p className="text-2xl font-semibold">$3 / touchpoint</p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    We ship touchpoints <strong className="font-semibold text-foreground">to your organization</strong>{" "}
                    (HQ / warehouse / stores / designated location).
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">You distribute to end users.</strong> Last-mile
                    fulfillment to individual households is not included.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Includes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Production-ready touchpoints</li>
                      <li>Basic QC + bulk shipping to your address</li>
                      <li>Standard packaging for distribution</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/60">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">Card 2 — Platform Usage (Monthly)</CardTitle>
                  <p className="text-2xl font-semibold">Per Active Touchpoint-Month</p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    A touchpoint is billed only when it becomes <strong className="font-semibold text-foreground">Active</strong>{" "}
                    in a given month.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Active has 2 levels (charged once per month):</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong className="font-semibold text-foreground">Impact Active (Heard)</strong> →{" "}
                        <strong className="font-semibold text-foreground">1.0× base</strong>
                      </li>
                      <li>
                        <strong className="font-semibold text-foreground">Intent Active (Qualified CTA)</strong> →{" "}
                        <strong className="font-semibold text-foreground">1.2× base</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong className="font-semibold text-foreground">Rule:</strong> per touchpoint per month, we charge{" "}
                      <strong className="font-semibold text-foreground">once</strong>.
                    </p>
                    <p>
                      If both happen, <strong className="font-semibold text-foreground">Intent overrides</strong> (no double
                      charge).
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button asChild className="rounded-full w-full">
                      <Link href="#usage-pricing">View Usage Pricing</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-border/60">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">Card 3 — Traffic Model (Choose one)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="font-semibold text-foreground">Network Mode (default):</strong> mutual discovery
                    inside the FC app
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">Private Mode:</strong> no cross-traffic inside the
                    FC app
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">Category Exclusion</strong> is a safety layer for
                    Network Mode (details below).
                  </p>
                  <div className="pt-2">
                    <Button asChild className="rounded-full w-full">
                      <Link href="/contact">Choose Network or Private</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What counts as Active */}
            <section className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">What counts as Active</h2>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold">Level 1 — Impact Active (Heard)</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A touchpoint is <strong className="font-semibold text-foreground">Impact Active</strong> if it reaches:
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>≥10 seconds verified listen/engagement</strong> within the month.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold">Level 2 — Intent Active (Qualified CTA)</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A touchpoint is <strong className="font-semibold text-foreground">Intent Active</strong> if it generates:
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>≥1 qualified CTA</strong> within the month.
                </p>

                <div className="space-y-2">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    <strong className="font-semibold text-foreground">What makes a CTA “qualified”</strong> (to avoid mis-click
                    billing):
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
                    <li>
                      CTA click + landing page stay <strong className="font-semibold text-foreground">≥3 seconds</strong>,{" "}
                      <strong className="font-semibold text-foreground">or</strong>
                    </li>
                    <li>
                      CTA click + a meaningful event (e.g., add-to-cart, donate form start, checkout start)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage pricing */}
            <section id="usage-pricing" className="space-y-6 scroll-mt-28">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Usage pricing</h2>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Base price per Active Touchpoint-Month</h3>
                <div className="overflow-x-auto rounded-lg border border-border/60 bg-white">
                  <table className="w-full text-left">
                    <thead className="border-b border-border/60">
                      <tr className="text-sm text-muted-foreground">
                        <th className="px-4 py-3 font-medium">Monthly Avg Active Touchpoints</th>
                        <th className="px-4 py-3 font-medium">Base Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm md:text-base">
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3">0 – 50k</td>
                        <td className="px-4 py-3 font-semibold">$0.65</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3">50k – 250k</td>
                        <td className="px-4 py-3 font-semibold">$0.55</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3">250k – 1M</td>
                        <td className="px-4 py-3 font-semibold">$0.50</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="px-4 py-3">1M – 5M</td>
                        <td className="px-4 py-3 font-semibold">$0.45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">5M+</td>
                        <td className="px-4 py-3 font-semibold">$0.40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-base md:text-lg text-muted-foreground leading-relaxed">---</h3>
              </div>
            </section>

            {/* Add-ons */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Add-ons</h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white border border-border/60">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg">Private Mode (Brand-safe)</CardTitle>
                    <p className="text-xl font-semibold">+ $0.1 / Active Touchpoint-Month</p>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    No inbound/outbound cross-traffic inside FC.
                  </CardContent>
                </Card>

                <Card className="bg-white border border-border/60">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg">Category Exclusion (ONLY available for Enterprise Clients)</CardTitle>
                    <p className="text-xl font-semibold">+ $0.25 / Active Touchpoint-Month</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Blocks specified competitor <strong className="font-semibold text-foreground">categories</strong>{" "}
                      from appearing as in-app recommendations.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Standard: exclude by <strong className="font-semibold text-foreground">category taxonomy</strong>
                      </li>
                      <li>
                        Enterprise upgrade: exclude by <strong className="font-semibold text-foreground">brand blocklist</strong>
                      </li>
                    </ul>
                    <p>
                      <strong className="font-semibold text-foreground">Important:</strong> Category Exclusion affects only{" "}
                      <strong className="font-semibold text-foreground"> in-app recommendations</strong>.
                    </p>
                    <p>It does not prevent households from having multiple brands’ touchpoints.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-border/60">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg">Context Intelligence</CardTitle>
                    <p className="text-xl font-semibold">+ $0.15 / Active Touchpoint-Month</p>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Serve different content/CTAs based on time and context (breakfast / meal prep / after school).
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Billing (fair + predictable) */}
            <section className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Billing (fair + predictable)</h2>
              <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed">
                <li>
                  <strong className="font-semibold text-foreground">Prepaid credits:</strong> billed monthly/quarterly,
                  deducted by usage
                </li>
                <li>
                  <strong className="font-semibold text-foreground">60-day rollover:</strong> unused credits roll for 60
                  days
                </li>
                <li>
                  <strong className="font-semibold text-foreground">Overage protection:</strong> monthly overage capped at{" "}
                  <strong className="font-semibold text-foreground">20%</strong> of prepaid amount
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">FAQ</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>What’s the difference between Network and Private?</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger>Where does Category Exclusion fit?</AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger>Do you ship to individual households?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Not in standard Delivery. We ship in bulk <strong className="font-semibold text-foreground">to your organization</strong>, and you distribute.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-3">
                      (Last-mile fulfillment can be arranged via partners as an add-on.)
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger>Is “Active” just a tap?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      No. <strong className="font-semibold text-foreground">Impact Active requires ≥10 seconds verified engagement.</strong>
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-2">
                      <strong className="font-semibold text-foreground">Intent Active requires a qualified CTA</strong> (not accidental clicks).
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mt-2">
                      One touchpoint/month is charged once; Intent overrides Impact.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger>Can a fridge have touchpoints from multiple brands?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Yes. Multi-brand fridges are normal. Your traffic model controls only what happens{" "}
                      <strong className="font-semibold text-foreground">inside FC after a user interacts</strong>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}


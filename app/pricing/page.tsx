import Link from "next/link"
import Image from "next/image"

import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteFooter } from "@/components/site-footer"
import PricingFAQs from "@/components/ui/pricing-faqs"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />

      <main className="pt-28 flex-1">
        <section className="container mx-auto px-6 pt-10 pb-16">
          <div className="max-w-5xl mx-auto space-y-24">
            <header className="space-y-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">Pricing</h1>
            </header>

            {/* Pay only when a touchpoint is used */}
            <section className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Pay only when a touchpoint is used</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Fridge Channel turns fridge touchpoints into measurable actions.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Billing is usage-based:</strong> we charge per <strong>Active Touchpoint-Month</strong>.
              </p>

              {/* What counts as Active - moved here with normal text styling */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Left column: Content */}
                  <div className="flex-1 rounded-lg border border-border/60 bg-muted/10 p-6 space-y-3 text-sm text-muted-foreground leading-normal text-left">
                    <p>
                      A touchpoint is <strong className="font-semibold text-foreground">Active</strong> when it shows real
                      engagement in a given month. There are two levels:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="font-semibold text-foreground">Impact Active (Heard)</strong> means the touchpoint reaches{" "}
                        <strong className="font-semibold text-foreground">≥10 seconds verified listen/engagement</strong> within the
                        month.
                      </li>

                      <li>
                        <strong className="font-semibold text-foreground">Intent Active (Qualified CTA)</strong> means it generates{" "}
                        <strong className="font-semibold text-foreground">≥1 qualified CTA</strong> within the month.
                      </li>
                    </ul>

                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong className="font-semibold text-foreground">What makes a CTA "qualified"</strong> (to avoid mis-click
                        billing)?
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          CTA click + landing page stay <strong className="font-semibold text-foreground">≥3 seconds</strong>,{" "}
                          <strong className="font-semibold text-foreground">or</strong>
                        </li>
                        <li>CTA click + a meaningful event (e.g., add-to-cart, donate form start, checkout start)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right column: Image */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <div className="relative w-full md:w-64 h-64 rounded-lg overflow-hidden">
                      <Image
                        src="/imgflower.avif"
                        alt="Touchpoint engagement illustration"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* Cards */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Glassy pricing card style (match Most Popular Plans grid) */}
              <div className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Delivery (One-time)</h3>
                  <h4 className="text-lg md:text-xl font-semibold text-foreground">$3 / touchpoint</h4>
                </div>

                <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    We ship touchpoints <strong className="font-semibold text-foreground">to your organization</strong>{" "}
                    (HQ / warehouse / stores / designated location).
                  </p>
                  <p>
                    <strong className="font-semibold text-foreground">You distribute to end users.</strong> Last-mile
                    fulfillment to individual households is not included.
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-sm font-medium text-foreground">Includes:</p>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    {[
                      "Production-ready touchpoints",
                      "Basic QC + bulk shipping to your address",
                      "Standard packaging for distribution",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-0.5 text-foreground/80" aria-hidden="true">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Keep bottom CTA row spacing like Cursor cards */}
                <div className="mt-4 text-sm font-medium text-foreground/80 justify-self-end" aria-hidden="true">
                  {/* intentionally empty */}
                </div>
              </div>

              {/* Card 2 is a CTA: make the whole card clickable (Cursor-style) */}
              <Link
                href="#usage-pricing"
                className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
                aria-label="View Usage Pricing"
              >
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Platform Usage (Monthly)</h3>
                  <h4 className="text-lg md:text-xl font-semibold text-foreground">
                    Per Active Touchpoint-Month
                  </h4>
                </div>

                <div className="mt-4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    A touchpoint is billed only when it becomes{" "}
                    <strong className="font-semibold text-foreground">Active</strong> in a given month.
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-sm font-medium text-foreground">Active has 2 levels (charged once per month):</p>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    {[
                      <>
                        <strong className="font-semibold text-foreground">Impact Active (Heard)</strong> →{" "}
                        <strong className="font-semibold text-foreground">1.0× base</strong>
                      </>,
                      <>
                        <strong className="font-semibold text-foreground">Intent Active (Qualified CTA)</strong> →{" "}
                        <strong className="font-semibold text-foreground">1.2× base</strong>
                      </>,
                    ].map((node, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-foreground/80" aria-hidden="true">✓</span>
                        <span>{node}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="font-semibold text-foreground">Rule:</strong> per touchpoint per month, we charge{" "}
                    <strong className="font-semibold text-foreground">once</strong>.
                  </p>
                  <p>
                    If both happen, <strong className="font-semibold text-foreground">Intent overrides</strong> (no double
                    charge).
                  </p>
                </div>

                <div className="mt-4 justify-self-end text-sm font-medium text-foreground/80">
                  View Usage Pricing →
                </div>
              </Link>

              <div className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">Traffic Model (Choose one)</h3>
                </div>

                <div className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 text-foreground/80" aria-hidden="true">✓</span>
                    <span>
                      <strong className="font-semibold text-foreground">Network Mode (default):</strong> mutual discovery
                      inside the FC app
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 text-foreground/80" aria-hidden="true">✓</span>
                    <span>
                      <strong className="font-semibold text-foreground">Private Mode:</strong> no cross-traffic inside the
                      FC app
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 text-foreground/80" aria-hidden="true">✓</span>
                    <span>
                      <strong className="font-semibold text-foreground">Category Exclusion</strong> is a safety layer for
                      Network Mode (details below).
                    </span>
                  </p>
                </div>

                <div className="mt-4 text-sm font-medium text-foreground/80 justify-self-end" aria-hidden="true">
                  {/* intentionally empty */}
                </div>
              </div>
            </section>


            {/* Usage pricing */}
            <section id="usage-pricing" className="space-y-6 scroll-mt-28">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Usage pricing</h2>
              </div>

              <div className="space-y-3 flex flex-col items-center">
                <p className="text-base text-muted-foreground">Base price per Active Touchpoint-Month</p>
                {/* Wispr-style two-column table layout (keep original text) */}
                <div className="w-full rounded-lg bg-[#F7F7F4] max-w-md">
                  <div className="flex items-center justify-between border-b border-border/60 py-4">
                    <div className="text-sm md:text-base font-semibold text-foreground">
                      Monthly Avg Active Touchpoints
                    </div>
                    <div className="text-sm md:text-base font-semibold text-foreground">
                      Base Price
                    </div>
                  </div>

                  {[
                    { left: "0 – 50k", right: "$0.65" },
                    { left: "50k – 250k", right: "$0.55" },
                    { left: "250k – 1M", right: "$0.50" },
                    { left: "1M – 5M", right: "$0.45" },
                    { left: "5M+", right: "$0.40" },
                  ].map((row) => (
                    <div
                      key={row.left}
                      className="flex items-center justify-between border-b border-border/50 py-3 text-sm md:text-base"
                    >
                      <div className="text-foreground">{row.left}</div>
                      <div className="text-foreground">{row.right}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Add-ons */}
            <section className="space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Add-ons</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">Private Mode (Brand-safe)</div>
                    <p className="text-xl font-semibold text-foreground">+ $0.1 / Active Touchpoint-Month</p>
                  </div>
                  <div className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    No inbound/outbound cross-traffic inside FC.
                  </div>
                </div>

                <div className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">
                      Category Exclusion (ONLY available for Enterprise Clients)
                    </div>
                    <p className="text-xl font-semibold text-foreground">+ $0.25 / Active Touchpoint-Month</p>
                  </div>
                  <div className="mt-4 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
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
                  </div>
                </div>

                <div className="h-full backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex flex-col transition-all duration-300 from-black/5 to-black/0 border border-black/10 dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91] hover:shadow-2xl hover:-translate-y-0.5 px-7 py-8">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground">Context Intelligence</div>
                    <p className="text-xl font-semibold text-foreground">+ $0.15 / Active Touchpoint-Month</p>
                  </div>
                  <div className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Serve different content/CTAs based on time and context (breakfast / meal prep / after school).
                  </div>
                </div>
              </div>
            </section>

            {/* Billing */}
            <section className="space-y-4 flex flex-col items-center">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Billing</h2>
              </div>
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

            <PricingFAQs />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}


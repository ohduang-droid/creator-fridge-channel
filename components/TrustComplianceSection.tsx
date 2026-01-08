"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Using mockData; dev team will replace with real API hook useFetchTrustCompliance()
interface TrustSummaryItem {
  id: string; // from API
  title: string; // from API
  body: string; // from API
  trustCtaText: string; // from API (display text)
  trustHref: string; // from API (route)
}

const mockSummaryItems: TrustSummaryItem[] = [
  {
    id: "privacy-no-pii",
    title: "Privacy: No PII required",
    body: "We do not require donor names, emails, phone numbers, addresses, or any individual-level identifiers to run a validation or pilot. The experience can route to your existing public giving or engagement pages without sharing personal data with us.",
    trustCtaText: "See Trust Center → Privacy & Data Boundaries",
    trustHref: "/trust",
  },
  {
    id: "data-handling-aggregated",
    title: "Data handling: aggregated events only (where available)",
    body: "Where measurement is enabled, we only process aggregated counts (e.g., visits, clicks, completions) rather than individual-level logs. If your donation/registration platform supports confirmation signals, we use them in aggregate—otherwise we rely on aggregated web analytics.",
    trustCtaText: "See Trust Center → Measurement Methodology & Attribution Limits",
    trustHref: "/trust",
  },
  {
    id: "brand-control",
    title: "Brand control: you approve CTA + destination + creative",
    body: "Your institution controls what the alumni sees and where they land: the CTA label, the destination URL, and the on-page content are yours to approve. Nothing goes live without your sign-off on brand, messaging, and compliance requirements.",
    trustCtaText: "See Trust Center → Brand Safety & Approvals",
    trustHref: "/trust",
  },
  {
    id: "user-choice",
    title: "User choice: user-initiated (opt-in)",
    body: "Engagement is initiated by the user (tap/scan) at their own discretion—there is no forced exposure, no interruption, and no “push” behavior. This keeps the interaction aligned with alumni expectations and reduces risk of perceived intrusion.",
    trustCtaText: "See Trust Center → Brand Safety & Approvals",
    trustHref: "/trust",
  },
  {
    id: "frequency-no-push",
    title: "Frequency: no push, no inbox spam",
    body: "Fridge Channel does not send emails, texts, or push notifications to alumni. The touchpoint is passive until the alumni chooses to engage, which avoids inbox fatigue and platform dependency.",
    trustCtaText: "See Trust Center → Privacy & Data Boundaries",
    trustHref: "/trust",
  },
  {
    id: "measurement-boundaries",
    title: "Measurement boundaries: no person-level tracking",
    body: "We do not track or report behavior at the individual level and do not perform identity resolution or cross-device matching. Reporting is focused on plan-level performance using aggregated funnel metrics and clearly stated attribution limits.",
    trustCtaText: "See Trust Center → Measurement Methodology & Attribution Limits",
    trustHref: "/trust",
  },
  {
    id: "logistics-qc",
    title: "Logistics & QC: timeline + replacement policy",
    body: "We provide a defined fulfillment timeline and basic quality controls suitable for pilot-scale distribution. If items arrive damaged or fail to function, we follow a documented replacement policy so the pilot remains operational and predictable.",
    trustCtaText: "See Trust Center → Logistics & Timelines; QC & Replacement Policy",
    trustHref: "/trust",
  },
  {
    id: "governance",
    title: "Governance: clear owner + escalation path",
    body: "Each pilot has a single accountable owner on both sides, plus an escalation path for time-sensitive issues (logistics, brand approvals, measurement questions). This prevents internal confusion and reduces back-and-forth during execution.",
    trustCtaText: "See Trust Center → Contact & Escalation",
    trustHref: "/trust",
  },
];

const mockTrustCenterDirectory: string[] = [
  "Privacy & data boundaries",
  "Measurement methodology + attribution limits",
  "Logistics & timelines",
  "QC & replacement policy",
  "Brand safety & approvals",
  "Pilot terms & exit criteria",
  "(Optional) Security overview",
  "Contact & escalation",
];

export function TrustComplianceSection() {
  return (
    <section id="trust-compliance" className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Trust &amp; Compliance</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Page-visible summary (8 items)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockSummaryItems.map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
                <Link
                  href={item.trustHref}
                  className="inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  aria-label={item.trustCtaText}
                >
                  {item.trustCtaText}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl border bg-muted/20 p-6 md:p-8 space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold">More Info in Trust Center</h3>
            <p className="text-muted-foreground">
              Trust Center 目录（列出来，增强可信度）：
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
            {mockTrustCenterDirectory.map((label) => (
              <li key={label} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/trust">Go to Trust Center →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


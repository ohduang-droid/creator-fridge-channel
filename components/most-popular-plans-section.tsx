"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";

// Using mockData; dev team will replace with real API hook useFetchPlans()
interface PlanData {
  id: string; // from API
  title: string; // from API
  bestFor: string; // from API
  cohort: string; // from API
  primaryCta: string; // from API
  pilotSizeDuration: string; // from API
  primaryKpi: string; // from API
  observability: string[]; // from API
  includes: string; // from API
  buttonText: string; // from API
  onButtonClick: () => void; // wired by dev team
}

const mockPlans: PlanData[] = [
  {
    id: "monthly-giving-lift",
    title: "Monthly Giving Lift Plan",
    bestFor: "Converting engaged alumni and one-time donors into recurring monthly givers.",
    cohort: "Engaged alumni · one-time donors · lapsed donors (recent)",
    primaryCta: "Start a monthly gift",
    pilotSizeDuration: "5k–10k households · 4–6 weeks",
    primaryKpi: "Monthly donor starts (confirmed)",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → monthly-gift start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      console.log("Monthly Giving Lift Plan clicked");
    },
  },
  {
    id: "annual-fund-renewal",
    title: "Annual Fund Renewal Push Plan",
    bestFor: "Improving annual fund renewal by keeping \"give again this year\" visible at home.",
    cohort: "Prior-year donors · annual fund prospects · broad alumni (as appropriate)",
    primaryCta: "Make an annual fund gift",
    pilotSizeDuration: "5k–10k households · 10–20 weeks",
    primaryKpi: "Gift completions",
    observability: [
      "Track: tap/scan → giving page visits",
      "Track: CTA clicks → donation completion (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      console.log("Annual Fund Renewal Push Plan clicked");
    },
  },
  {
    id: "donor-stewardship-retention",
    title: "Donor Stewardship & Retention Plan",
    bestFor: "Strengthening donor retention through stewardship touchpoints that reinforce impact and prompt upgrades.",
    cohort: "Current donors · recurring donors · leadership annual donors (broad)",
    primaryCta: "View impact update → upgrade gift / start monthly",
    pilotSizeDuration: "5k–10k households · 6–12 weeks",
    primaryKpi: "Upgrade + monthly starts (aggregate)",
    observability: [
      "Track: tap/scan → impact page visits",
      "Track: CTA clicks → upgrade/monthly start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes: "content routing (impact + CTA) · production + replacement policy · aggregated measurement summary",
    buttonText: "Get a mock for this plan",
    onButtonClick: () => {
      console.log("Donor Stewardship & Retention Plan clicked");
    },
  },
];

interface PlanCardProps {
  plan: PlanData;
}

function PlanCard({ plan }: PlanCardProps) {
  return (
    <Card className="h-full flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground mb-4">
          {plan.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-4">
        <div className="space-y-3 flex-1">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Best for:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.bestFor}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Cohort:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.cohort}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Primary CTA:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.primaryCta}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Pilot size & duration:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.pilotSizeDuration}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Primary KPI:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.primaryKpi}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Observability (3-line standard):</p>
            <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground ml-2">
              {plan.observability.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Includes:</p>
            <p className="text-base text-muted-foreground leading-relaxed">{plan.includes}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <ShimmerButton
            onClick={plan.onButtonClick}
            className="w-full transition-transform duration-300 hover:scale-105"
            background="rgba(0, 0, 0, 1)"
            shimmerColor="#ffffff"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
              {plan.buttonText}
            </span>
          </ShimmerButton>
        </div>
      </CardContent>
    </Card>
  );
}

export function MostPopularPlansSection() {
  return (
    <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
      <SectionReveal delay={0.1} direction="up" distance={60}>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <SectionReveal delay={0} direction="up" distance={40}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Most Popular Plans</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a plan. We'll send a mock you can forward internally
              </p>
            </div>
          </SectionReveal>

          {/* Plans Grid */}
          <SectionReveal delay={0.2} direction="up" distance={50}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {mockPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}

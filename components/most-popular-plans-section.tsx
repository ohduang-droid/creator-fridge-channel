"use client";

import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { AnimatedTitle } from "@/components/ui/animated-title";

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
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
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
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
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
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
];

interface PlanCardProps {
  plan: PlanData;
}

function PlanCard({ plan }: PlanCardProps) {
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    hover:shadow-2xl hover:-translate-y-0.5
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    bg-primary/85 hover:bg-primary/90 text-primary-foreground backdrop-blur-md border border-white/20 shadow-sm
  `;

  return (
    <div className={cardClasses.trim()}>
      <div className="mb-4">
        <h3 className="text-[28px] md:text-[32px] font-extralight tracking-[-0.03em] text-foreground">
          {plan.title}
        </h3>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Best for:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.bestFor}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Cohort:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.cohort}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Primary CTA:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.primaryCta}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Pilot size & duration:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.pilotSizeDuration}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Primary KPI:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.primaryKpi}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Observability (3-line standard):</p>
          <ul className="flex flex-col gap-2 text-[14px] text-foreground/90">
            {plan.observability.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 text-primary" aria-hidden="true">
                  ✓
                </span>
                <span className="text-foreground/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Includes:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.includes}</p>
        </div>
      </div>

      <div className="pt-6">
        <RippleButton className={buttonClasses.trim()} onClick={() => plan.onButtonClick()}>
          {plan.buttonText}
        </RippleButton>
      </div>
    </div>
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
              <AnimatedTitle className="text-3xl md:text-5xl font-bold text-balance">Most Popular Plans</AnimatedTitle>
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

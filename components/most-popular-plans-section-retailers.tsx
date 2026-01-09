"use client";

import type { ReactNode } from "react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { AnimatedTitle } from "@/components/ui/animated-title";

interface PlanData {
  id: string;
  title: string;
  bestFor: string;
  cohort: string;
  primaryCta: ReactNode;
  pilotSizeDuration: string;
  primaryKpi: string;
  observabilityLabel: string;
  observability: string[];
  includes: string;
  buttonText: string;
  onButtonClick: () => void;
}

const retailerPlans: PlanData[] = [
  {
    id: "plan-a-trip-driver",
    title: "Plan A — Trip Driver (Weekly Return)",
    bestFor: "Increasing return trips within 7–14 days.",
    cohort: "Active shoppers · nearby households · lapsed recent",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Get this week’s deal / See weekly picks / Map to store
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Trip frequency lift / redemption lift (store or region-level)",
    observabilityLabel: "Observability (3-line standard):",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → offer views / store directions (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-b-basket-builder",
    title: "Plan B — Basket Builder (Cross-sell)",
    bestFor: "Growing basket size via curated add-ons and missions.",
    cohort: "Active shoppers · high-frequency shoppers · category buyers",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Add to basket / Build your list / Bundle & save
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Items-per-trip / basket size lift (directional)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → list build / add-to-cart (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-c-loyalty-activation",
    title: "Plan C — Loyalty Activation (Enroll + Reactivate)",
    bestFor: "Increasing loyalty signups and points activity.",
    cohort: "Non-members · inactive members · low-frequency members",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Join loyalty / Activate points / Scan for rewards
      </strong>
    ),
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Loyalty enrollments / activations (confirmed where available)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → join/activate start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
  {
    id: "plan-d-brand-sponsored",
    title: "Plan D — Brand-Sponsored Category Spotlight (Co-op Ready)",
    bestFor: "Running vendor-funded campaigns that still drive retailer outcomes.",
    cohort: "Category buyers · lapsed category buyers · lookalike households (broad)",
    primaryCta: (
      <strong className="font-semibold text-foreground">
        Shop the category / Redeem brand offer / Explore picks
      </strong>
    ),
    pilotSizeDuration: "20k–100k households · 4–6 weeks",
    primaryKpi: "Category lift / redemption lift (store or region-level)",
    observabilityLabel: "Observability:",
    observability: [
      "Track: tap/scan → landing page visits (campaign-level)",
      "Track: CTA clicks → offer views / redemption intent (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "Co-branded creative workflow · CTA + destination setup · production + replacement policy · aggregated measurement summary",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open(
        "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
        "_blank"
      );
    },
  },
];

interface PlanCardProps {
  plan: PlanData;
}

function PlanCard({ plan }: PlanCardProps) {
  const displayTitle = plan.title.replace(/^Plan\s+[A-Z]\s*[—–-]\s*/i, "");

  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    hover:shadow-2xl hover:-translate-y-0.5
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    bg-[#469A74]/85 hover:bg-[#3E8A68]/85 text-white backdrop-blur-md border border-white/20 shadow-sm
  `;

  return (
    <div className={cardClasses.trim()}>
      <div className="mb-4">
        <h3 className="text-[24px] md:text-[28px] font-extralight tracking-[-0.03em] text-foreground">
          {displayTitle}
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
          <div className="text-[14px] text-foreground/70 leading-relaxed">{plan.primaryCta}</div>
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
          <p className="text-sm font-semibold text-foreground mb-1">{plan.observabilityLabel}</p>
          <ul className="flex flex-col gap-2 text-[14px] text-foreground/90">
            {plan.observability.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 text-[#469A74]" aria-hidden="true">
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

export function MostPopularPlansSectionRetailers() {
  return (
    <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
      <SectionReveal delay={0.1} direction="up" distance={60}>
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionReveal delay={0} direction="up" distance={40}>
            <div className="text-center space-y-4">
              <AnimatedTitle className="text-3xl md:text-5xl font-bold text-balance">
                Most Popular Plans
              </AnimatedTitle>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose a plan. We'll send a mock you can forward internally
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} direction="up" distance={50}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {retailerPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}


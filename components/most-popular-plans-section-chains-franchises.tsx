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
  distributionOwner: string;
  pilotSizeDuration: string;
  primaryKpi: string;
  observability: string[];
  includes: string;
  launchReadiness: string;
  buttonText: string;
  onButtonClick: () => void;
}

const chainsFranchisesPlans: PlanData[] = [
  {
    id: "post-purchase-repeat",
    title: "Post-Purchase Repeat Plan",
    bestFor: "Converting first-time buyers into a 2nd and 3rd purchase within 7–21 days.",
    cohort: "New customers (first purchase/first visit) · recent buyers",
    primaryCta: "Reorder / Shop again / Come back this week",
    distributionOwner: "Store-led (bag/receipt/packaging) · HQ-approved creative",
    pilotSizeDuration: "5k–20k households · 4–6 weeks",
    primaryKpi: "Repeat purchase / return visit lift (store-level)",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → offer view / reorder / directions (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · store-ready print files · production + replacement policy · aggregated measurement summary",
    launchReadiness: "Ready to ship in 30 business days after approvals",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
  {
    id: "winback-60-90-180",
    title: "Winback Plan (60/90/180d)",
    bestFor: "Reactivating lapsed customers who don’t respond to SMS/email.",
    cohort: "Lapsed customers (60/90/180 days) · churn-risk segments",
    primaryCta: "Claim offer / Book now / Return today",
    distributionOwner: "HQ/Region-led (targeting + rollout) · Store optional handout",
    pilotSizeDuration: "10k–50k households · 4–6 weeks",
    primaryKpi: "Return visit / reorder lift (incremental)",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → redemption intent / booking / store directions (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · rollout pack for stores · production + replacement policy · aggregated measurement summary",
    launchReadiness: "Ready to ship in 30 business days after approvals",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
  {
    id: "loyalty-activation",
    title: "Loyalty Activation Plan",
    bestFor: "Increasing loyalty enrollments and re-activating inactive members.",
    cohort: "Non-members · inactive members · low-frequency members",
    primaryCta: "Join rewards / Activate points / Upgrade",
    distributionOwner: "HQ-led rules + approval · Store-led at checkout + bag insert",
    pilotSizeDuration: "5k–20k households · 4–6 weeks",
    primaryKpi: "Loyalty joins / activations (confirmed where available)",
    observability: [
      "Track: tap/scan → landing page visits",
      "Track: CTA clicks → join/activate start (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "CTA + destination setup · store scripts/signage copy · production + replacement policy · aggregated measurement summary",
    launchReadiness: "Ready to ship in 30 business days after approvals",
    buttonText: "Book a Pilot Meeting",
    onButtonClick: () => {
      window.open("https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting", "_blank");
    },
  },
  {
    id: "lifecycle-smart-state-based",
    title: "Lifecycle Smart Plan(State-Based CTA)",
    bestFor:
      "Running one distribution stream while CTAs automatically adapt by customer state (New → Active → Lapsed → Reactivated).",
    cohort: "New · active · lapsed · reactivated (state transitions)",
    primaryCta: (
      <div className="text-[14px] text-foreground/70 leading-relaxed">
        <div>Auto-routing by state</div>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong className="font-semibold text-foreground">New:</strong> Join rewards / First repeat
          </li>
          <li>
            <strong className="font-semibold text-foreground">Active:</strong> New drop / Limited offer / Upgrade
          </li>
          <li>
            <strong className="font-semibold text-foreground">Lapsed:</strong> Winback offer / Book now
          </li>
          <li>
            <strong className="font-semibold text-foreground">Reactivated:</strong> Second repeat / Loyalty activation
          </li>
        </ul>
      </div>
    ),
    distributionOwner: "HQ-led rules + governance · Store-led distribution (same kit)",
    pilotSizeDuration: "10k–50k households · 4–8 weeks",
    primaryKpi: "Composite lift: repeat + winback + loyalty activation (state-segmented)",
    observability: [
      "Track: tap/scan → landing page visits (by state)",
      "Track: CTA clicks → routed action starts (where available)",
      "Boundary: aggregated only · no PII",
    ],
    includes:
      "State routing setup · CTA + destination setup (per state) · production + replacement policy · aggregated measurement summary",
    launchReadiness: "Ready to ship in 30 business days after approvals",
    buttonText: "Book a Pilot Meeting",
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
    bg-[#FF6C02]/90 hover:bg-[#FF6C02] text-white backdrop-blur-md border border-white/20 shadow-sm
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
          <div className="text-[14px] text-foreground/70 leading-relaxed">{plan.primaryCta}</div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Distribution owner:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.distributionOwner}</p>
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
                <span className="mt-0.5 text-[#FF6C02]" aria-hidden="true">
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

        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Launch readiness:</p>
          <p className="text-[14px] text-foreground/70 leading-relaxed">{plan.launchReadiness}</p>
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

export function MostPopularPlansSectionChainsFranchises() {
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {chainsFranchisesPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </SectionWrapper>
  );
}


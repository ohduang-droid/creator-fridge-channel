"use client";

import type { ReactNode } from "react";
import { MostPopularPlansCarouselSection, type MostPopularPlan, CARD_GRADIENTS } from "@/components/most-popular-plans-carousel-section";

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
      "Track: tap → landing page visits",
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
      "Track: tap → landing page visits",
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
      "Track: tap → landing page visits",
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
      "Track: tap → landing page visits (by state)",
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

export function MostPopularPlansSectionChainsFranchises() {
  const plans: MostPopularPlan[] = chainsFranchisesPlans.map((p) => ({
    id: p.id,
    title: p.title,
    bestFor: p.bestFor,
    cohort: p.cohort,
    primaryCta: p.primaryCta,
    pilotSizeDuration: p.pilotSizeDuration,
    primaryKpi: p.primaryKpi,
    observability: p.observability,
    includes: p.includes,
    buttonText: p.buttonText,
    onButtonClick: p.onButtonClick,
    extra: [
      { label: "Distribution owner", value: p.distributionOwner },
      { label: "Launch readiness", value: p.launchReadiness },
    ],
  }));

  return <MostPopularPlansCarouselSection plans={plans} activeCardColor="#D9AD8E" activeCardGradient={CARD_GRADIENTS.chains} />;
}

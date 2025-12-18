"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "ENTRY",
    description: "For creators who want to deploy FC with minimal surface area.",
    price: 99,
    yearlyPrice: 999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "M1 Context Access: 1 scene", icon: null },
      { text: "M2 Design Template Library: Core templates", icon: null },
      { text: "M3 Format Pack (AI): AI generates 1 default format", icon: null },
      { text: "M4 Production SLA: Standard", icon: null },
      { text: "M5 Analytics: Activation + consumption basics", icon: null },
      { text: "M6 CTA Playbooks: Not included", icon: null },
    ],
    includes: [
      "Includes:",
      "M1 Context Access: 1 scene",
      "M2 Design Template Library: Core templates",
      "M3 Format Pack (AI): AI generates 1 default format",
      "M4 Production SLA: Standard",
      "M5 Analytics: Activation + consumption basics",
      "M6 CTA Playbooks: Not included",
    ],
    ctaBehavior: [
      "CTA behavior (current rule):",
      "Paid subscriber → Open full issue",
      "Unpaid visitor → No CTA",
    ],
  },
  {
    name: "RETENTION",
    description: "Multiple scenes. Habit formation. For creators who want repeat consumption and early subscription leverage.",
    price: 299,
    yearlyPrice: 2999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "M1 Context Access: Up to 5 scenes", icon: null },
      { text: "M1b Context Recommendation: Quarterly (data-driven)", icon: null },
      { text: "M2 Design Template Library: Extended", icon: null },
      { text: "M3 Format Pack (AI): Multi-format generation (10s / 2min / bullets)", icon: null },
      { text: "M4 Production SLA: Standard + Rush option", icon: null },
      { text: "M5 Analytics: Retention & revisit signals", icon: null },
      { text: "M6 CTA Playbooks: Included (systemized, future-ready)", icon: null },
    ],
    includes: [
      "Includes:",
      "M1 Context Access: Up to 5 scenes",
      "M1b Context Recommendation: Quarterly (data-driven)",
      "M2 Design Template Library: Extended",
      "M3 Format Pack (AI): Multi-format generation (10s / 2min / bullets)",
      "M4 Production SLA: Standard + Rush option",
      "M5 Analytics: Retention & revisit signals",
      "M6 CTA Playbooks: Included (systemized, future-ready)",
    ],
  },
  {
    name: "REVENUE",
    description: "Attribution. Experiments. Pricing power. For creators who want measurable lift, subscription growth, and long-term revenue control.",
    price: 999,
    yearlyPrice: 9999,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "M1 Context Access: All scenes", icon: null },
      { text: "M1b Context Recommendation: Monthly + experiment guidance", icon: null },
      { text: "M2 Design Template Library: Full + optional custom", icon: null },
      { text: "M3 Format Pack (AI): Full library + personalized variants", icon: null },
      { text: "M4 Production SLA: Standard / Rush / Ultra-rush", icon: null },
      { text: "M5 Analytics & Experiments: Full attribution + lift proof", icon: null },
      { text: "M6 CTA Playbooks: Full library + testing", icon: null },
      { text: "App Recommendation Page: Enabled", icon: null },
      { text: "Creator-sponsored FC Pass: Optional (volume-gated)", icon: null },
    ],
    includes: [
      "Includes:",
      "M1 Context Access: All scenes",
      "M1b Context Recommendation: Monthly + experiment guidance",
      "M2 Design Template Library: Full + optional custom",
      "M3 Format Pack (AI): Full library + personalized variants",
      "M4 Production SLA: Standard / Rush / Ultra-rush",
      "M5 Analytics & Experiments: Full attribution + lift proof",
      "M6 CTA Playbooks: Full library + testing",
      "App Recommendation Page: Enabled",
      "Creator-sponsored FC Pass: Optional (volume-gated)",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit sm:h-12 cursor-pointer h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0"
              ? "text-white"
              : "text-white/70 hover:text-white",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-2 shadow-lg shadow-black/20 border-white/40 bg-white/30 backdrop-blur-sm"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1"
              ? "text-white"
              : "text-white/70 hover:text-white",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10  w-full  rounded-full border-2 shadow-lg shadow-black/20 border-white/40 bg-white/30 backdrop-blur-sm"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">
            Yearly
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 pt-8 max-w-7xl mx-auto relative"
      ref={pricingRef}
    >
      <article className="flex sm:flex-row flex-col sm:pb-0 pb-4 sm:items-center items-start justify-between mb-8">
        <div className="text-left mb-6">
          <h2 className="text-4xl font-medium leading-[130%] text-white mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              2. Creator platform fee — choose a plan
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-white/90 w-[80%]"
          >
            Creators pay monthly to access scenes, AI formats, data, and rollout systems.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="shrink-0" />
        </TimelineContent>
      </article>

      <TimelineContent
        as="div"
        animationNum={2}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="grid md:grid-cols-3 gap-4 mx-auto sm:p-3 items-stretch"
      >
        {plans.map((plan, index) => (
          <TimelineContent
            as="div"
            key={plan.name}
            animationNum={index + 3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="h-full"
          >
            <Card
              className={`relative flex-col flex justify-between h-full ${
                plan.popular
                  ? "scale-110 ring-2 ring-white bg-gradient-to-t from-black to-neutral-900 text-white"
                  : "border border-white/20 bg-white/10 backdrop-blur-md pt-4 text-white"
              }`}
            >
              <CardContent className="pt-0">
                <div className="space-y-2 pb-3">
                  {plan.popular && (
                    <div className="pt-4">
                      <span className="bg-neutral-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold">
                      $
                      <NumberFlow
                        format={{
                          currency: "USD",
                        }}
                        value={isYearly ? plan.yearlyPrice : plan.price}
                        className="text-4xl font-semibold"
                      />
                    </span>
                    <span
                      className={
                        plan.popular
                          ? "text-neutral-200 ml-1"
                          : "text-white/80 ml-1"
                      }
                    >
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold mb-2">{plan.name}</h3>
                </div>
                <p
                  className={
                    plan.popular
                      ? "text-sm text-neutral-200 mb-4"
                      : "text-sm text-white/80 mb-4"
                  }
                >
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <h4 className="font-medium text-base mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span
                          className={
                            plan.popular
                              ? "text-white h-6 w-6 bg-neutral-600 border border-neutral-500 rounded-full grid place-content-center mt-0.5 mr-3"
                              : "text-black h-6 w-6 bg-white border border-black rounded-full grid place-content-center mt-0.5 mr-3"
                          }
                        >
                          <CheckCheck className="h-4 w-4" />
                        </span>
                        <span
                          className={
                            plan.popular
                              ? "text-sm text-neutral-100"
                              : "text-sm text-white/90"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.ctaBehavior && (
                      <>
                        <li className="flex items-center">
                          <span
                            className={
                              plan.popular
                                ? "text-white h-6 w-6 bg-neutral-600 border border-neutral-500 rounded-full grid place-content-center mt-0.5 mr-3"
                                : "text-black h-6 w-6 bg-white border border-black rounded-full grid place-content-center mt-0.5 mr-3"
                            }
                          >
                            <CheckCheck className="h-4 w-4" />
                          </span>
                          <span
                            className={
                              plan.popular
                                ? "text-sm text-neutral-100"
                                : "text-sm text-white/90"
                            }
                          >
                            {plan.ctaBehavior[0]}
                          </span>
                        </li>
                        {plan.ctaBehavior.slice(1).map((item, idx) => (
                          <li key={`cta-${idx}`} className="pl-8">
                            <span
                              className={
                                plan.popular
                                  ? "text-sm text-neutral-100"
                                  : "text-sm text-white/90"
                              }
                            >
                              • {item}
                            </span>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </TimelineContent>
    </div>
  );
}


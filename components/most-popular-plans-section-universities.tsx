"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimatedTitle } from "@/components/ui/animated-title";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/shiny-button-1";

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

const universityPlans: PlanData[] = [
    {
        id: "monthly-giving-lift",
        title: "Monthly Giving Lift Plan",
        bestFor: "Converting engaged alumni and one-time donors into recurring monthly givers.",
        cohort: "Engaged alumni · one-time donors · lapsed donors (recent)",
        primaryCta: (
            <strong className="font-semibold text-foreground">
                Start a monthly gift
            </strong>
        ),
        pilotSizeDuration: "5k–10k households · 4–6 weeks",
        primaryKpi: "Monthly donor starts (confirmed)",
        observabilityLabel: "Observability:",
        observability: [
            "Track: tap → landing page visits",
            "Track: CTA clicks → monthly-gift start (where available)",
            "Boundary: aggregated only · no PII",
        ],
        includes:
            "CTA + destination setup · production + replacement policy · aggregated measurement summary",
        buttonText: "Get a mock for this plan",
        onButtonClick: () => {
            window.open(
                "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
                "_blank"
            );
        },
    },
    {
        id: "annual-fund-renewal",
        title: "Annual Fund Renewal Push Plan",
        bestFor: "Improving annual fund renewal by keeping \"give again this year\" visible at home.",
        cohort: "Prior-year donors · annual fund prospects · broad alumni (as appropriate)",
        primaryCta: (
            <strong className="font-semibold text-foreground">
                Make an annual fund gift
            </strong>
        ),
        pilotSizeDuration: "5k–10k households · 10–20 weeks",
        primaryKpi: "Gift completions",
        observabilityLabel: "Observability:",
        observability: [
            "Track: tap → giving page visits",
            "Track: CTA clicks → donation completion (where available)",
            "Boundary: aggregated only · no PII",
        ],
        includes:
            "CTA + destination setup · production + replacement policy · aggregated measurement summary",
        buttonText: "Get a mock for this plan",
        onButtonClick: () => {
            window.open(
                "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting",
                "_blank"
            );
        },
    },
    {
        id: "donor-stewardship-retention",
        title: "Donor Stewardship & Retention Plan",
        bestFor: "Strengthening donor retention through stewardship touchpoints that reinforce impact and prompt upgrades.",
        cohort: "Current donors · recurring donors · leadership annual donors (broad)",
        primaryCta: (
            <strong className="font-semibold text-foreground">
                View impact update → upgrade gift / start monthly
            </strong>
        ),
        pilotSizeDuration: "5k–10k households · 6–12 weeks",
        primaryKpi: "Upgrade + monthly starts (aggregate)",
        observabilityLabel: "Observability:",
        observability: [
            "Track: tap → impact page visits",
            "Track: CTA clicks → upgrade/monthly start (where available)",
            "Boundary: aggregated only · no PII",
        ],
        includes:
            "content routing (impact + CTA) · production + replacement policy · aggregated measurement summary",
        buttonText: "Get a mock for this plan",
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
    isActive: boolean;
}

const ACTIVE_CARD_WIDTH = "w-[450px] sm:w-[510px] lg:w-[630px]";
const INACTIVE_CARD_WIDTH = "w-[520px] sm:w-[600px] lg:w-[680px]";

// Universities gradient
const UNIVERSITIES_GRADIENT = "linear-gradient(135deg, #7A8FA8 0%, #5E718F 40%, #4A5B74 100%)";

function PlanCard({ plan, isActive }: PlanCardProps) {
    const cardClasses = cn(
        // Base (Trawelt-like) card
        "rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-black overflow-hidden flex flex-col relative",
        // Smooth state transitions
        "transition-[filter,opacity,transform] duration-500",
        // When we attach the fixed bottom CTA tray, remove bottom rounding so it visually stacks.
        isActive && "rounded-t-2xl rounded-b-none shadow-none min-h-[500px] sm:min-h-[540px] lg:min-h-[580px]",
        // Inactive visual collapse
        !isActive && "bg-[#F7F2EA] opacity-60 saturate-0 contrast-90 max-h-[460px] sm:max-h-[500px] lg:max-h-[540px]"
    );

    return (
        <div
            className={cardClasses}
            style={isActive ? { background: UNIVERSITIES_GRADIENT } : undefined}
        >
            {/* Glassmorphism overlay for active cards */}
            {isActive && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 30%, transparent 60%)",
                        borderRadius: "inherit",
                    }}
                    aria-hidden="true"
                />
            )}
            <div className="px-6 pt-6">
                <div className="text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em] font-light border-b border-black/15 pb-4">
                    {plan.title}
                </div>
            </div>

            <div className="px-6 pt-5 pb-6 flex-1">
                {isActive ? (
                    <div className="flex flex-col h-full">
                        {/* Full plan content */}
                        <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-black/75 flex-1">
                            <div>
                                <div className="text-[14px] text-black/75">
                                    <span className="text-sm font-semibold text-black">Best for:</span> <span>{plan.bestFor}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-[14px] text-black/75">
                                    <span className="text-sm font-semibold text-black">Cohort:</span> <span>{plan.cohort}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-[14px] text-black/75">
                                    <span className="text-sm font-semibold text-black">Primary CTA:</span>{" "}
                                    <span className="text-black/80">{plan.primaryCta}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-[14px] text-black/75">
                                    <span className="text-sm font-semibold text-black">Pilot size & duration:</span>{" "}
                                    <span>{plan.pilotSizeDuration}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-[14px] text-black/75">
                                    <span className="text-sm font-semibold text-black">Primary KPI:</span>{" "}
                                    <span>{plan.primaryKpi}</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-black mb-2">{plan.observabilityLabel}</div>
                                <ul className="flex flex-col gap-2 text-black/75">
                                    {plan.observability.map((item, idx) => (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-0.5 text-[#5E718F]" aria-hidden="true">
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-black mb-1">Includes:</div>
                                <div>{plan.includes}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="border-t border-black/15 pt-4 h-full flex flex-col">
                        <div className="space-y-4 flex-1 text-[14px] leading-relaxed text-black/75">
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Best for:</span> {plan.bestFor}
                            </div>
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Cohort:</span> {plan.cohort}
                            </div>
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Primary CTA:</span>{" "}
                                <span className="text-black/75">{plan.primaryCta}</span>
                            </div>
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Pilot size & duration:</span> {plan.pilotSizeDuration}
                            </div>
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Primary KPI:</span> {plan.primaryKpi}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-black mb-2">{plan.observabilityLabel}</div>
                                <ul className="flex flex-col gap-2 text-black/75">
                                    {plan.observability.map((item, idx) => (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-0.5 text-[#5E718F]" aria-hidden="true">
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-[14px] text-black/70">
                                <span className="font-semibold text-black">Includes:</span> {plan.includes}
                            </div>
                        </div>

                        <div className="mt-auto pt-8 text-[13px] text-black/55">Drag to explore</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function MostPopularPlansSectionUniversities() {
    const plans = universityPlans;
    // Duplicate slides to ensure proper loop centering (3 plans → 6 slides)
    const slides = [...plans, ...plans];
    const [selectedIndex, setSelectedIndex] = useState(0);
    // Map selectedIndex back to original plan index
    const realPlanIndex = selectedIndex % plans.length;

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        loop: true,
    });

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            emblaApi?.scrollTo(index);
        },
        [emblaApi]
    );

    // Trackpad / mouse wheel horizontal swipe support (without breaking normal vertical scroll)
    const wheelAccum = useRef(0);
    const onWheel = useCallback(
        (e: React.WheelEvent) => {
            if (!emblaApi) return;
            const absX = Math.abs(e.deltaX);
            const absY = Math.abs(e.deltaY);
            const isMostlyHorizontal = absX > absY;

            if (!isMostlyHorizontal) return;
            e.preventDefault();

            wheelAccum.current += e.deltaX;
            if (Math.abs(wheelAccum.current) < 24) return;

            if (wheelAccum.current > 0) emblaApi.scrollNext();
            else emblaApi.scrollPrev();
            wheelAccum.current = 0;
        },
        [emblaApi]
    );

    return (
        <SectionWrapper enableFadeTransition={true} className="container mx-auto px-4 py-20">
            <SectionReveal delay={0.1} direction="up" distance={60}>
                <div className="max-w-7xl mx-auto space-y-12">
                    <SectionReveal delay={0} direction="up" distance={40}>
                        <div className="text-center space-y-4">
                            <AnimatedTitle className="text-3xl md:text-5xl font-bold text-balance">
                                Most Popular Plans
                            </AnimatedTitle>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={0.2} direction="up" distance={50}>
                        {/* Full-bleed stage (breaks out of container) */}
                        <div className="relative w-screen mx-[calc(50%-50vw)]">
                            {/* Dark stage like Trawelt */}
                            <div className="rounded-[28px] bg-[#F7F7F4] px-0 py-0 overflow-hidden">
                                <div className="relative">
                                    {/* Subtle spotlight / vignette */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 opacity-80"
                                        style={{
                                            background:
                                                "radial-gradient(700px 320px at 50% 40%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%), radial-gradient(1100px 520px at 50% 60%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 65%)",
                                        }}
                                    />

                                    <div
                                        className="overflow-hidden select-none pt-0 pb-0"
                                        ref={emblaRef}
                                        onWheel={onWheel}
                                        aria-label="Most popular plans carousel"
                                    >
                                        {/* Use per-slide padding instead of flex gap so loop boundary (D↔A) keeps spacing */}
                                        <div className="flex items-start px-0 -mx-5 sm:-mx-7">
                                            {slides.map((plan, slideIndex) => {
                                                const isActive = slideIndex === selectedIndex;
                                                return (
                                                    <motion.button
                                                        key={`${plan.id}-${slideIndex}`}
                                                        type="button"
                                                        className={cn(
                                                            "relative flex-[0_0_auto] text-left focus:outline-none",
                                                            "cursor-grab active:cursor-grabbing",
                                                            "px-5 sm:px-7"
                                                        )}
                                                        onClick={() => scrollTo(slideIndex)}
                                                        aria-label={`Select ${plan.title}`}
                                                        animate={{
                                                            scale: isActive ? 1 : 0.95,
                                                            opacity: isActive ? 1 : 0.62,
                                                            y: isActive ? 0 : 10,
                                                        }}
                                                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                                    >
                                                        {/* Make non-selected slides visually larger (≈2x of the old inactive size) */}
                                                        <div
                                                            className={cn(
                                                                isActive ? ACTIVE_CARD_WIDTH : INACTIVE_CARD_WIDTH
                                                            )}
                                                        >
                                                            <PlanCard plan={plan} isActive={isActive} />
                                                        </div>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Bottom CTA tray (touches the active card bottom border) */}
                                    <div className="relative z-20 flex justify-center -mt-px pb-0">
                                        <div
                                            className={cn(
                                                ACTIVE_CARD_WIDTH,
                                                // Shadow moved to the TOP edge (upwards)
                                                "rounded-b-2xl shadow-[0_-18px_50px_rgba(0,0,0,0.22)] px-6 py-5 relative overflow-hidden"
                                            )}
                                            style={{ background: UNIVERSITIES_GRADIENT }}
                                        >
                                            {/* Bottom tray glassmorphism overlay */}
                                            <div
                                                className="absolute inset-0 pointer-events-none"
                                                style={{
                                                    background: "linear-gradient(0deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
                                                }}
                                                aria-hidden="true"
                                            />
                                            <div className="flex items-center justify-center">
                                                <GlowButton
                                                    aria-label={plans[realPlanIndex]?.buttonText ?? "Get a mock for this plan"}
                                                    onClick={() => plans[realPlanIndex]?.onButtonClick()}
                                                    className="mx-0"
                                                    width={240}
                                                >
                                                    {plans[realPlanIndex]?.buttonText ?? "Get a mock for this plan"}
                                                </GlowButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </SectionReveal >
        </SectionWrapper >
    );
}

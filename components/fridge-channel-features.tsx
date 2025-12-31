"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "More Sustainers (Recurring Giving)",
    description: "higher enrollment into monthly giving from FC-touched alumni households",
  },
  {
    title: "Higher Retention",
    description: "improved year-over-year donor retention and fewer lapses",
  },
  {
    title: "More Renewals",
    description: "higher alumni association membership renewals and re-joins",
  },
  {
    title: "Reactivation Support",
    description: "measurable lift on LYBUNT / SYBUNT reactivation cohorts",
  },
  {
    title: "Audit-ready",
    description: "household-level touch evidence + exportable reporting",
  },
];

function RevealText({ children, index, total }: { children: React.ReactNode; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export function FridgeChannelFeatures() {
    return (
        <div className="relative">
            <div className="relative z-10 space-y-4">
                {features.map((feature, index) => (
                    <RevealText key={index} index={index} total={features.length}>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div className="flex-1">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    <strong className="font-semibold text-foreground">{feature.title}</strong> — {feature.description}
                                </p>
                            </div>
                        </div>
                    </RevealText>
                ))}
            </div>
        </div>
    )
}


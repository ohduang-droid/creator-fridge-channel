"use client";

import { Timeline } from "@/components/ui/timeline";

export function HowItWorksTimeline() {
  const data = [
    {
      title: "1. Prepare Content",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Add Fridge Channel’s email to your paid mailing list. We receive each paid issue and prepare fridge-time guided teasers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <strong className="font-semibold text-foreground">No extra buttons. No new editor.</strong>
          </p>
        </div>
      ),
    },
    {
      title: "2. Design Magnet ",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You share brand + constraints. We send mockups/demos. You approve — we handle the rest.
          </p>
        </div>
      ),
    },
    {
      title: "3. Sell it",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You tell paying readers it exists. After they click buy, we handle: production, QC, global shipping, tracking, replacement, support.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-muted/30 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-6">How it works</h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}


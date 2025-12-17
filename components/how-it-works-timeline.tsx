"use client";

import { Timeline } from "@/components/ui/timeline";

export function HowItWorksTimeline() {
  const data = [
    {
      title: "1. Prepare Content",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You simply  <strong className="font-semibold text-foreground">add Fridge Channel's email address to your paid mailing list</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Every time you send a paid issue, we receive it too and our AI prepares fridge-time, guided teasers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            👉 No extra buttons to click. No new editor to learn.
          </p>
        </div>
      ),
    },
    {
      title: "2. Design Magnet ",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We turn your idea into a fridge-ready magnet
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Fridge Channel provides <strong className="font-semibold text-foreground">professional design tools and a dedicated team</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-8">
            <li>you share your ideas, brand, and constraints,</li>
            <li>we send you <strong className="font-semibold text-foreground">ready-to-review Fridge Channel Magnet mockups and demos</strong>,</li>
            <li>you approve, we handle the rest.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Sell it",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <strong className="font-semibold text-foreground">You sell, we do everything else.</strong>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Your job: <strong className="font-semibold text-foreground">tell your paying subscribers Fridge Channel Magnet exists and why it's valuable</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Our job: everything after they click "buy".
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mb-4">
            <li>production & quality control</li>
            <li>customs & global shipping</li>
            <li>tracking, replacement, and customer support</li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 pt-4">
            You focus on the newsletter and the relationship.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fridge Channel handles the fridge, the magnet, and the boring logistics.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-muted/30 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-balance mb-12">How it works</h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}


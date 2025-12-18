"use client";

import Link from "next/link";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface HowItWorksTimelineProps {
  coverImageSrc?: string | null;
}

export function HowItWorksTimeline({ coverImageSrc }: HowItWorksTimelineProps = {}) {
  const data = [
    {
      title: "1. Connect your content",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Add Fridge Channel's email to your list (or forward issues), or add your RSS into Fridge Channel AI-Powered Tools.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every paid issue becomes <strong className="font-semibold text-foreground">fridge-time formats</strong> automatically.
          </p>
        </div>
      ),
    },
    {
      title: "2. Choose scenes + design the magnet",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Pick the family moments you want to show up (coffee, cooking, after work…).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We generate formats (10s / 2min / bullets), and ship a magnet that fits your brand.
          </p>
        </div>
      ),
    },
    {
      title: "3. Launch + measure lift",
      content: (
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Households activate with <strong className="font-semibold text-foreground">FC Pass</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            You see usage, returns, and (on higher tiers) <strong className="font-semibold text-foreground">subscription attribution + lift</strong>.
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
      <div className="w-full pb-10 pt-6">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={coverImageSrc ?? "/science-hero-bg.webp"}
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* Button on top of background */}
          <div className="relative z-10 flex items-end justify-center h-full pb-6">
            <Link href="/booking">
              <ShimmerButton 
                className="shadow-2xl transition-transform duration-300 hover:scale-110"
                background="linear-gradient(120deg, #9f1026, #f25f6c)"
                shimmerColor="#ffe5e9"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Start your Fridge Channel pilot
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

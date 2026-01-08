"use client";

import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const ROIEngineSection = () => {
  return (
    <section id="roi-engine" className="container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            <strong className="font-bold">Touchpoint ROI Engine</strong>
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            <strong className="font-semibold">In 3 minutes,</strong> estimate your ROI and get your fastest path to a FridgeChannel pilot.
          </p>
        </div>

        {/* Features List */}
        <div className="mb-10">
          <ul className="space-y-4 text-lg text-foreground leading-relaxed">
            <li className="flex items-start gap-3 justify-center">
              <span className="text-foreground mt-1">•</span>
              <span>
                Your <strong className="font-semibold text-foreground">pilot size</strong> (1500–3000) and rollout plan
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center">
              <span className="text-foreground mt-1">•</span>
              <span>
                Your <strong className="font-semibold text-foreground">expected lift</strong> in conversion & retention (ranges)
              </span>
            </li>
            <li className="flex items-start gap-3 justify-center">
              <span className="text-foreground mt-1">•</span>
              <span>
                Your <strong className="font-semibold text-foreground">pricing fit</strong> and exact next steps to start
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
            target="_blank"
            rel="noreferrer"
          >
            <ShimmerButton
              className="shadow-2xl transition-transform duration-300 hover:scale-110"
              background="rgba(0, 0, 0, 1)"
              shimmerColor="#ffffff"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Run ROI Engine →
              </span>
            </ShimmerButton>
          </Link>
          <p className="text-sm text-muted-foreground">
            No login. No sales spam.
          </p>
        </div>
      </div>
    </section>
  );
};


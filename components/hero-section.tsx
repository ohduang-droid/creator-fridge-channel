"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Link from "next/link";

export const HeroSection = () => {
  const contentTypes = [
    "Podcasts",
    "Newsletters",
    "Blogs",
    "Music",
    "RSS Feeds",
    "X Threads",
    "Daily Briefs",
  ];


  return (
    <section id="home" className="relative pt-16 min-h-[700px] overflow-hidden bg-white pb-0">
        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="/hero1215.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="flex flex-col items-center justify-center px-6 text-center relative z-10 min-h-[700px] mt-6">
          <div className="mx-auto max-w-5xl" style={{ marginTop: '80px' }}>
            <div className="relative mx-auto h-full pt-24 pb-12 p-6">
              <h1 className="text-center text-2xl md:text-5xl mt-2 text-black">
                Boost your newsletter's C.O.R.E in the heart of your readers' homes
              </h1>
            </div>

            <div className="flex items-center justify-center" style={{ marginTop: '40px' }}>
              <Link href="#join-pilot">
                <ShimmerButton 
                  className="shadow-2xl transition-transform duration-300 hover:scale-110"
                  background="linear-gradient(120deg, #9f1026, #f25f6c)"
                  shimmerColor="#ffe5e9"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Start your Fridge Channel
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};


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
    <section id="home" className="relative pt-8 min-h-[700px] overflow-hidden bg-transparent pb-0">
        {/* Background image with blur effect similar to untillabs.com */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/science-hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px) brightness(1.05)',
            transform: 'scale(1.05)',
          }}
        />
        {/* Overlay gradient for natural transition to page background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent/30 via-[#F7F7F4]/20 to-[#F7F7F4]"></div>
        
        <div className="flex flex-col items-center justify-center px-6 text-center relative z-10 min-h-[700px] mt-6">
          <div className="mx-auto max-w-5xl" style={{ marginTop: '80px' }}>
            <div className="relative mx-auto h-full pt-24 pb-12 p-6">
              <h1 className="text-center text-2xl md:text-5xl mt-2 text-white">
                Household touchpoints are a gold asset
              </h1>
            </div>

            <div className="text-white py-4 mt-8 text-lg md:text-xl font-mono">
              Fridge Channel builds your newsletter into a daily routine by AI-powered magnet: a tap on the fridge that drives habit, revisits, and new paid subscribers
            </div>
            <div className="flex items-center justify-center" style={{ marginTop: '40px' }}>
              <Link
                href="https://calendly.com/billy-fridgechannels/30min"
                target="_blank"
                rel="noreferrer"
              >
                <ShimmerButton 
                  className="shadow-2xl transition-transform duration-300 hover:scale-110"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Founder Chat → Launch Channel
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
};

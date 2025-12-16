"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";

interface HeroSectionProps {
  videoSrc?: string | null;
  overlayImageSrc?: string;
}

export const HeroSection = ({ videoSrc, overlayImageSrc }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const resolvedVideo = videoSrc ?? "/hero1215.mp4";
  const resolvedOverlayImage = overlayImageSrc ?? "/red-resin-book-magnet.png";

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setShowOverlay(false);
    video.currentTime = 0;
    video.play().catch(() => {});
  }, []);

  const scheduleNextLoop = useCallback(() => {
    if (overlayTimerRef.current) {
      clearTimeout(overlayTimerRef.current);
    }
    setShowOverlay(true);
    overlayTimerRef.current = setTimeout(startPlayback, 2000);
  }, [startPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      scheduleNextLoop();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (overlayTimerRef.current) {
        clearTimeout(overlayTimerRef.current);
      }
    };
  }, [scheduleNextLoop, resolvedVideo]);

  useEffect(() => {
    // When video source changes, reset overlay state to ensure 2s display before playing
    setShowOverlay(true);
    scheduleNextLoop();

    return () => {
      if (overlayTimerRef.current) {
        clearTimeout(overlayTimerRef.current);
      }
    };
  }, [resolvedVideo, scheduleNextLoop]);

  return (
    <section id="home" className="relative pt-16 min-h-[700px] overflow-hidden bg-white pb-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={resolvedVideo}
          muted
          playsInline
          preload="auto"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: showOverlay ? 1 : 0 }}
        >
          <Image
            src={resolvedOverlayImage}
            alt="Hero overlay"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
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

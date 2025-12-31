"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  /**
   * Animation intensity - controls how much the section moves during scroll
   */
  intensity?: "low" | "medium" | "high";
  /**
   * Enable smooth fade transition
   */
  enableFade?: boolean;
  /**
   * Enable vertical movement during scroll
   */
  enableMovement?: boolean;
}

/**
 * Section Transition Component - Microsoft AI style smooth section transitions
 * 
 * Features:
 * - Smooth fade in/out as section enters/exits viewport
 * - Subtle vertical movement for depth effect
 * - Continuous scroll-based animations (not one-time reveals)
 * - Configurable intensity levels
 */
export function SectionTransition({
  children,
  className,
  id,
  style,
  intensity = "medium",
  enableFade = true,
  enableMovement = true,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.4"],
  });

  // Intensity-based movement distance - much more pronounced for visible transitions
  const movementDistance = {
    low: 80,
    medium: 100,
    high: 150,
  }[intensity];

  // Opacity: Very pronounced fade in/out - Microsoft AI style
  // Clear and visible fade transition
  const opacity = enableFade
    ? useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
    : 1;

  // Vertical movement: Very pronounced slide effect - Microsoft AI style
  // Section clearly and visibly slides up from below as it enters viewport
  const y = enableMovement
    ? useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [movementDistance, 0, 0, -movementDistance * 0.7])
    : 0;

  // Scale: More noticeable zoom effect for depth
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.92]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        ...style,
        opacity: enableFade ? opacity : undefined,
        y: enableMovement ? y : undefined,
        scale,
      }}
      transition={{
        ease: [0.16, 1, 0.3, 1], // Microsoft AI style easing - smooth and natural
      }}
      className={cn("relative w-full", className)}
    >
      {children}
    </motion.section>
  );
}


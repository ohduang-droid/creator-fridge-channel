"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Section Reveal Component - Microsoft AI style scroll animations
 * 
 * Features:
 * - Fade in on scroll
 * - Slide animation from specified direction
 * - Smooth transitions between sections
 * - Configurable delay, distance, and duration
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 60,
  duration = 0.8,
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-10%",
  });

  // Initial animation state based on direction
  const initialY = direction === "up" ? distance : direction === "down" ? -distance : 0;
  const initialX = direction === "left" ? distance : direction === "right" ? -distance : 0;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: initialY,
        x: initialX,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {
              opacity: 0,
              y: initialY,
              x: initialX,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth feel (Microsoft AI style)
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}


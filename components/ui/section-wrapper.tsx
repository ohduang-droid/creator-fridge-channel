"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Enable smooth fade transition between sections
   */
  enableFadeTransition?: boolean;
  /**
   * Enable parallax effect for background elements
   */
  enableParallax?: boolean;
}

/**
 * Section Wrapper Component - Wraps sections with smooth transitions
 * 
 * Provides:
 * - Smooth scroll-based opacity transitions
 * - Parallax effects for background elements
 * - Microsoft AI style section transitions
 */
export function SectionWrapper({
  children,
  className,
  id,
  enableFadeTransition = true,
  enableParallax = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade transition as section enters/exits viewport
  const opacity = enableFadeTransition
    ? useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
    : 1;

  // Parallax effect for background
  const parallaxY = enableParallax
    ? useTransform(scrollYProgress, [0, 1], [0, 50])
    : 0;

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        opacity: enableFadeTransition ? opacity : undefined,
      }}
      className={cn("relative w-full", className)}
    >
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}


"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface HorizontalSlideWrapperProps {
  children: React.ReactNode;
}

export function HorizontalSlideWrapper({ children }: HorizontalSlideWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  // Transform horizontally with clear stops:
  // - 0-20%: Show first section clearly (0%)
  // - 20-80%: Smooth transition between sections
  // - 80-100%: Show second section clearly (-50%)
  // This ensures when scrolling stops, one section is fully visible
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["0%", "0%", "-50%", "-50%"]
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex w-[200%]"
      >
        {children}
      </motion.div>
    </div>
  );
}


"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HorizontalSlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalSlideContainer({ children, className }: HorizontalSlideContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create horizontal sliding effect based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        style={{ x }}
        className="flex w-[200%]"
      >
        <div className="w-1/2 flex-shrink-0">
          {children}
        </div>
        <div className="w-1/2 flex-shrink-0">
          {/* Duplicate content for seamless loop or second section */}
        </div>
      </motion.div>
    </div>
  );
}


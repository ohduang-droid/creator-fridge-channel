"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HorizontalSlideTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalSlideTransition({ children, className }: HorizontalSlideTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform from right to left as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        style={{
          x,
          opacity,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}


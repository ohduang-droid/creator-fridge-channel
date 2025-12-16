"use client";

import { useRef, useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";

interface HorizontalSlideCardsProps {
  children: React.ReactNode;
}

export function HorizontalSlideCards({ children }: HorizontalSlideCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.05"],
  });

  // Count children to determine layout
  const childCount = useMemo(() => {
    return React.Children.count(children);
  }, [children]);

  // Create transforms for all cases (hooks must be called unconditionally)
  const xFor1 = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["100%", "0%", "0%"]
  );
  
  const xFor2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.9, 1],
    ["0%", "0%", "-50%", "-50%", "-50%"]
  );
  
  const xFor3 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35, 0.65, 0.7, 1],
    ["0%", "0%", "-33.33%", "-33.33%", "-66.66%", "-66.66%"]
  );

  const xFor4 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    ["0%", "0%", "-25%", "-25%", "-50%", "-50%", "-75%", "-75%"]
  );

  const xFor5 = useTransform(
    scrollYProgress,
    [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 0.96, 1],
    ["0%", "0%", "-20%", "-20%", "-40%", "-40%", "-60%", "-60%", "-80%", "-80%"]
  );

  // Select the appropriate transform based on child count
  const x = childCount === 1 ? xFor1 : (childCount === 2 ? xFor2 : (childCount === 3 ? xFor3 : (childCount === 4 ? xFor4 : xFor5)));
  const containerWidth = childCount === 1 ? "100%" : (childCount === 2 ? "200%" : (childCount === 3 ? "300%" : (childCount === 4 ? "400%" : "500%")));

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div
        style={{ x, width: containerWidth }}
        className="flex"
      >
        {children}
      </motion.div>
    </div>
  );
}


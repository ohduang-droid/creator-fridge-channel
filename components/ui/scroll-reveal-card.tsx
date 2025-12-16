"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollRevealCard({ 
  children, 
  className,
  delay = 0 
}: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.5"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
      }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}


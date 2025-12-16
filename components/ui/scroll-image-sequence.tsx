"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScrollImageSequenceProps {
  images: string[];
  className?: string;
  containerRef?: React.RefObject<HTMLElement>;
}

export function ScrollImageSequence({
  images,
  className,
  containerRef,
}: ScrollImageSequenceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef || ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * images.length),
        images.length - 1
      );
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [scrollYProgress, images.length]);

  return (
    <div ref={ref} className={cn("relative w-full h-full", className)}>
      {images.length > 0 && (
        <Image
          src={images[currentIndex]}
          alt="Scroll sequence"
          fill
          className="object-cover"
          unoptimized
        />
      )}
    </div>
  );
}


"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set([0])); // 默认只显示第一个步骤

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisibleSteps((prev) => {
      const next = new Set(prev);
      const stepCount = data.length;
      const maxIndex = Math.max(stepCount - 1, 1);
      const revealSpan = 0.6;
      const revealOffset = 0.15;

      data.forEach((_, index) => {
        const threshold = (index / maxIndex) * revealSpan;
        if (latest >= Math.max(threshold - revealOffset, 0)) {
          next.add(index);
        }
      });

      return next;
    });
  });

  // 处理鼠标进入事件，显示所有隐藏的步骤
  const handleMouseEnter = () => {
    // 显示所有步骤（动态生成索引）
    const allIndices = Array.from({ length: data.length }, (_, i) => i);
    setVisibleSteps(new Set(allIndices));
  };

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          // 第一个步骤（index 0）始终可见，其他步骤默认隐藏
          const isVisible = index === 0 ? true : visibleSteps.has(index);
          
          return (
            <motion.div
              key={index}
              className="flex justify-start pt-5 md:pt-20 md:gap-10"
              initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ 
                pointerEvents: isVisible ? 'auto' : 'none',
                visibility: isVisible ? 'visible' : 'hidden'
              }}
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </motion.div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

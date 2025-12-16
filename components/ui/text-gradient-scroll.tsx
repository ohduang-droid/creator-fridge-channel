"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

type TextOpacityEnum = "none" | "soft" | "medium";
type ViewTypeEnum = "word" | "letter";

type TextGradientScrollType = {
  text: string;
  type?: ViewTypeEnum;
  className?: string;
  textOpacity?: TextOpacityEnum;
};

type LetterType = {
  children: React.ReactNode | string;
  progress: MotionValue<number>;
  range: number[];
  isHovered?: boolean;
  isScrollStopped?: boolean;
};

type WordType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  isHovered?: boolean;
  isScrollStopped?: boolean;
};

type CharType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  isHovered?: boolean;
  isScrollStopped?: boolean;
};

type TextGradientScrollContextType = {
  textOpacity?: TextOpacityEnum;
  type?: ViewTypeEnum;
  isHovered?: boolean;
  isScrollStopped?: boolean;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>(
  {}
);

function useGradientScroll() {
  const context = useContext(TextGradientScrollContext);
  return context;
}

function TextGradientScroll({
  text,
  className,
  type = "letter",
  textOpacity = "soft",
}: TextGradientScrollType) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isScrollStopped, setIsScrollStopped] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 监听滚动停止
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    setIsScrollStopped(false);
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrollStopped(true);
    }, 300); // 滚动停止300ms后显示完整文本
  });

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const words = text.split(" ");

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type, isHovered, isScrollStopped }}>
      <p 
        ref={ref} 
        className={cn("relative flex m-0 flex-wrap", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return type === "word" ? (
            <Word key={i} progress={scrollYProgress} range={[start, end]} isHovered={isHovered} isScrollStopped={isScrollStopped}>
              {word}
            </Word>
          ) : (
            <Letter key={i} progress={scrollYProgress} range={[start, end]} isHovered={isHovered} isScrollStopped={isScrollStopped}>
              {word}
            </Letter>
          );
        })}
      </p>
    </TextGradientScrollContext.Provider>
  );
}

export { TextGradientScroll };

const Word = ({ children, progress, range, isHovered, isScrollStopped }: WordType) => {
  const baseOpacity = useTransform(progress, range, [0, 1]);
  const { isHovered: contextHovered, isScrollStopped: contextStopped } = useGradientScroll();
  const shouldShowFull = (isHovered ?? contextHovered) || (isScrollStopped ?? contextStopped);
  const [opacity, setOpacity] = useState(0);
  const shouldShowFullRef = useRef(shouldShowFull);
  
  // 更新 ref
  useEffect(() => {
    shouldShowFullRef.current = shouldShowFull;
  }, [shouldShowFull]);
  
  // 监听 baseOpacity 变化
  useMotionValueEvent(baseOpacity, "change", (latest) => {
    if (!shouldShowFullRef.current) {
      setOpacity(latest);
    }
  });
  
  // 监听 shouldShowFull 变化
  useEffect(() => {
    if (shouldShowFull) {
      setOpacity(1);
    } else {
      // 恢复 baseOpacity 的当前值
      const currentValue = baseOpacity.get();
      setOpacity(currentValue);
    }
  }, [shouldShowFull, baseOpacity]);

  return (
    <span className="relative me-2 mt-2">
      <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

const Letter = ({ children, progress, range, isHovered, isScrollStopped }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative me-2 mt-2">
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]} isHovered={isHovered} isScrollStopped={isScrollStopped}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
  return null;
};

const Char = ({ children, progress, range, isHovered, isScrollStopped }: CharType) => {
  const baseOpacity = useTransform(progress, range, [0, 1]);
  const { textOpacity, isHovered: contextHovered, isScrollStopped: contextStopped } = useGradientScroll();
  const shouldShowFull = (isHovered ?? contextHovered) || (isScrollStopped ?? contextStopped);
  const [opacity, setOpacity] = useState(0);
  const shouldShowFullRef = useRef(shouldShowFull);
  
  // 更新 ref
  useEffect(() => {
    shouldShowFullRef.current = shouldShowFull;
  }, [shouldShowFull]);
  
  // 监听 baseOpacity 变化
  useMotionValueEvent(baseOpacity, "change", (latest) => {
    if (!shouldShowFullRef.current) {
      setOpacity(latest);
    }
  });
  
  // 监听 shouldShowFull 变化
  useEffect(() => {
    if (shouldShowFull) {
      setOpacity(1);
    } else {
      // 恢复 baseOpacity 的当前值
      const currentValue = baseOpacity.get();
      setOpacity(currentValue);
    }
  }, [shouldShowFull, baseOpacity]);

  return (
    <span>
      <span
        className={cn("absolute", {
          "opacity-0": textOpacity == "none",
          "opacity-10": textOpacity == "soft",
          "opacity-30": textOpacity == "medium",
        })}
      >
        {children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};




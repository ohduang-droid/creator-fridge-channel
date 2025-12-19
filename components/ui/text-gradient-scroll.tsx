"use client";

import React, { createContext, useContext, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
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
  italic?: boolean;
};

type WordType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  italic?: boolean;
};

type CharType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
  italic?: boolean;
};

type TextGradientScrollContextType = {
  textOpacity?: TextOpacityEnum;
  type?: ViewTypeEnum;
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

  // Parse text for bold markers (**text**) and italic markers (*text*)
  const parseText = (text: string) => {
    const parts: Array<{ text: string; bold: boolean; italic: boolean }> = [];
    // First, find all bold markers (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    const boldMatches: Array<{ start: number; end: number; text: string }> = [];

    while ((match = boldRegex.exec(text)) !== null) {
      boldMatches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[1],
      });
    }

    // Then, find italic markers (*text*) that are not part of bold markers
    const italicRegex = /\*([^*]+?)\*/g;
    const italicMatches: Array<{ start: number; end: number; text: string }> = [];

    while ((match = italicRegex.exec(text)) !== null) {
      // Check if this italic match overlaps with any bold marker
      const overlapsBold = boldMatches.some(
        (bm) => match.index < bm.end && match.index + match[0].length > bm.start
      );
      if (!overlapsBold) {
        italicMatches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[1],
        });
      }
    }

    // Combine and sort all matches
    const allMatches = [
      ...boldMatches.map((m) => ({ ...m, type: "bold" as const })),
      ...italicMatches.map((m) => ({ ...m, type: "italic" as const })),
    ].sort((a, b) => a.start - b.start);

    // Build parts array
    let lastIndex = 0;
    for (const match of allMatches) {
      if (match.start > lastIndex) {
        parts.push({ text: text.substring(lastIndex, match.start), bold: false, italic: false });
      }
      parts.push({
        text: match.text,
        bold: match.type === "bold",
        italic: match.type === "italic",
      });
      lastIndex = match.end;
    }

    if (lastIndex < text.length) {
      parts.push({ text: text.substring(lastIndex), bold: false, italic: false });
    }

    if (parts.length === 0) {
      parts.push({ text, bold: false, italic: false });
    }

    return parts;
  };

  const textParts = parseText(text);
  const tokens: Array<{ text: string; bold: boolean; italic: boolean; isWhitespace: boolean }> = [];

  textParts.forEach((part) => {
    const splitTokens = part.text.split(/(\s+)/).filter(Boolean);
    splitTokens.forEach((token) => {
      tokens.push({
        text: token,
        bold: part.bold,
        italic: part.italic,
        isWhitespace: /^\s+$/.test(token),
      });
    });
  });

  const animatedTokensCount = tokens.filter((token) => !token.isWhitespace).length;
  let animatedIndex = 0;

  return (
    <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
      <p ref={ref} className={cn("relative flex m-0 flex-wrap", className)}>
        {tokens.map(({ text, bold, italic, isWhitespace }, i) => {
          if (isWhitespace) {
            return (
              <span key={`space-${i}`} className="whitespace-pre">
                {text}
              </span>
            );
          }

          const start = animatedIndex / animatedTokensCount;
          const end = start + 1 / animatedTokensCount;
          animatedIndex += 1;

          if (bold) {
            return (
              <strong key={`bold-${i}`} className="relative mt-2 font-bold">
                {text}
              </strong>
            );
          }

          if (italic) {
            const content = type === "word" ? (
              <Word key={`italic-${i}`} progress={scrollYProgress} range={[start, end]} italic>
                {text}
              </Word>
            ) : (
              <Letter key={`italic-${i}`} progress={scrollYProgress} range={[start, end]} italic>
                {text}
              </Letter>
            );
            return <React.Fragment key={`italic-fragment-${i}`}>{content}</React.Fragment>;
          }

          const content = type === "word" ? (
            <Word key={`word-${i}`} progress={scrollYProgress} range={[start, end]}>
              {text}
            </Word>
          ) : (
            <Letter key={`letter-${i}`} progress={scrollYProgress} range={[start, end]}>
              {text}
            </Letter>
          );
          return <React.Fragment key={`fragment-${i}`}>{content}</React.Fragment>;
        })}
      </p>
    </TextGradientScrollContext.Provider>
  );
}

export { TextGradientScroll };

const Word = ({ children, progress, range, italic }: WordType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-2">
      <span style={{ position: "absolute", opacity: 0.1 }}>
        {italic ? <em>{children}</em> : children}
      </span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {italic ? <em>{children}</em> : children}
      </motion.span>
    </span>
  );
};

const Letter = ({ children, progress, range, italic }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative mt-2">
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]} italic={italic}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
  return null;
};

const Char = ({ children, progress, range, italic }: CharType) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const { textOpacity } = useGradientScroll();

  return (
    <span>
      <span
        className={cn("absolute", {
          "opacity-0": textOpacity == "none",
          "opacity-10": textOpacity == "soft",
          "opacity-30": textOpacity == "medium",
        })}
      >
        {italic ? <em>{children}</em> : children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {italic ? <em>{children}</em> : children}
      </motion.span>
    </span>
  );
};

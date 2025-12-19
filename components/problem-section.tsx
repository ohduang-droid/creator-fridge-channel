"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { FadeText } from "@/components/ui/fade-text";
import { motion } from "framer-motion";

interface PainCardProps {
  title: string;
  subtitle: string;
  tag: string;
  tagLabel: string;
  description: string[];
  delay?: number;
  index: number;
}

// Helper function to render text with italic formatting
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*.*?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <span key={index}>{part}</span>;
  });
};

const PainCard: React.FC<PainCardProps> = ({ 
  title, 
  subtitle,
  tag, 
  tagLabel, 
  description,
  delay = 0,
  index
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 延迟显示，根据 index 设置不同的延迟
            setTimeout(() => {
              setIsVisible(true);
            }, delay * 200); // 每个卡片延迟 200ms
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-700 ease-out",
        index >= 2 && "mt-4",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      )}
    >
      <div className="flex flex-col space-y-1.5 h-full">
        <div>
          <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-1">
            {title}
          </h3>
          <p className="text-lg md:text-xl font-medium text-foreground mb-2">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-1.5">
          {description.map((para, paraIndex) => (
            <p 
              key={paraIndex}
              className="text-base text-foreground leading-relaxed text-pretty"
            >
              {renderFormattedText(para)}
            </p>
          ))}
        </div>

        {/* Tag badge */}
        <div className="pt-1.5 border-t border-border/50 mt-auto">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-3 py-1.5 bg-muted/50 border border-border/50 rounded">
              {tag}
            </span>
            <span className="text-sm text-muted-foreground">{tagLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProblemSection = () => {
  const painPoints = [
    {
      title: "Paid, but half-asleep",
      subtitle: "Engagement drops as content piles up.",
      tag: "E / O",
      tagLabel: "Engagement & Open Rate",
      description: [
        "Your readers pay For creator your work — and then your issues drown in their inbox or app notifications. They *intend* to read, but \"later\" becomes \"never\".",
        "Sooner or later they notice they rarely open your emails, start questioning why they're still paying, and churn follows. Your open rate, true engagement, and retention all lag far behind the value you're actually delivering."
      ],
      imageUrl: "/blue.png",
      delay: 0,
    },
    {
      title: "You don't own the touchpoint",
      subtitle: "Platform dependency limits control.",
      tag: "C",
      tagLabel: "Channel Owned",
      description: [
        "Almost every touchpoint is rented: feeds, algorithms, email filters. A single product change can silently cut your reach, and there's no physical, always-on place in your readers' real lives that belongs to *you*."
      ],
      imageUrl: "/orange.png",
      delay: 1,
    },
    {
      title: "True fans are under-monetized",
      subtitle: "Missed opportunities leave value on the table.",
      tag: "E",
      tagLabel: "Earnings per subscriber",
      description: [
        "Many of your paying subscribers would happily buy more — courses, community, events, deeper access. But there's no natural, persistent way to invite them into that next layer, so most of that value is left on the table."
      ],
      imageUrl: "/green.png",
      delay: 2,
    },
    {
      title: "Offline word-of-mouth is invisible",
      subtitle: "Referral opportunities are missed.",
      tag: "R",
      tagLabel: "Referral",
      description: [
        "People talk about you in chats and repost your work online,",
        "but in their homes and offices there's almost nothing that visibly says, \"I follow this creator.\"",
        "Offline discovery and referrals barely exist."
      ],
      delay: 3,
    },
  ];

  // Helper function to render formatted text with bold and italic
  const renderFormattedText = (text: string) => {
    const parts: Array<{ text: string; isBold: boolean; isItalic: boolean }> = [];
    const regex = /(\*\*.*?\*\*|\*[^*].*?\*|[^*]+)/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        if (beforeText.trim() || beforeText === " ") {
          parts.push({ text: beforeText, isBold: false, isItalic: false });
        }
      }
      
      const matchedText = match[0];
      if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
        parts.push({ text: matchedText.slice(2, -2), isBold: true, isItalic: false });
      } else if (matchedText.startsWith("*") && matchedText.endsWith("*") && matchedText.length > 2) {
        parts.push({ text: matchedText.slice(1, -1), isBold: false, isItalic: true });
      } else {
        parts.push({ text: matchedText, isBold: false, isItalic: false });
      }
      
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      if (remainingText.trim() || remainingText === " ") {
        parts.push({ text: remainingText, isBold: false, isItalic: false });
      }
    }

    return (
      <span className="flex flex-wrap items-start gap-0">
        {parts.map((part, index) => {
          const className = cn(
            "text-2xl font-bold text-foreground leading-relaxed inline whitespace-pre-wrap",
            part.isBold && "font-bold",
            part.isItalic && "italic"
          );

          return (
            <span key={index} className={className}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  };

  // List items data
  const listItems = [
    "**Owned household touchpoint** (your Newsletter logo lives on the fridge)",
    '**30–120s "fridge-time" consumption** that leads to *Open full issue*',
    "**New subscriber acquisition** with attribution + long-term alignment",
  ];

  return (
    <section id="problem" className="container mx-auto px-4 pt-8 md:pt-12 pb-4 md:pb-6">
      {/* Content List */}
      <div className="max-w-6xl mx-auto pt-4">
        <ul className="space-y-4 text-2xl font-bold text-foreground text-pretty leading-relaxed flex flex-col items-center">
          {listItems.map((item, index) => (
            <ScrollRevealListItem key={index} index={index}>
              <li className="flex items-center justify-center gap-2">
                <span className="text-foreground">•</span>
                <span>
                  {renderFormattedText(item)}
                </span>
              </li>
            </ScrollRevealListItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Component for scroll reveal animation on list items
const ScrollRevealListItem = ({ 
  children, 
  index 
}: { 
  children: React.ReactNode; 
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

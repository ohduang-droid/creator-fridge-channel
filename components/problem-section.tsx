"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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

  return (
    <section id="problem" className="container mx-auto px-4 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Title - styled like untillabs Our Approach */}
        <div className="text-center space-y-6 py-8 md:py-12">
          <h2 className="text-4xl md:text-[52.8px] font-medium text-foreground mb-6">
            The problems paid newsletters are stuck with

          </h2>
          <p className="text-base text-foreground text-pretty leading-relaxed [&_strong]:font-semibold [&_b]:font-semibold">
            You already have paying subscribers.
          </p>
          <p className="text-base text-foreground text-pretty leading-relaxed [&_strong]:font-semibold [&_b]:font-semibold">
            But their attention, your relationship with them, and the money you earn per true fan are still limited by a purely online setup.
          </p>
        </div>
      </div>

      {/* Pain Points Cards - Grid 2 columns with staggered animation */}
      <div className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {painPoints.map((pain, index) => (
            <PainCard
              key={index}
              title={pain.title}
              subtitle={pain.subtitle}
              tag={pain.tag}
              tagLabel={pain.tagLabel}
              description={pain.description}
              delay={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


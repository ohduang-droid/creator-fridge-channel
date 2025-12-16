"use client";

import { ScrollRevealCard } from "@/components/ui/scroll-reveal-card";

interface CoreMetricCardProps {
  letter: string;
  title: string;
  description: string;
  delay?: number;
}

// Helper function to render text with bold formatting
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

const CoreMetricCard: React.FC<CoreMetricCardProps> = ({ letter, title, description, delay = 0 }) => {
  // Remove the first letter from title since it's already shown in the icon
  const titleWithoutFirstLetter = title.slice(1);
  
  return (
    <ScrollRevealCard delay={delay} className="h-full">
      <div className="group h-full flex flex-col space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
        <div className="flex items-center gap-3">
          <div className="text-3xl md:text-4xl font-bold text-white font-mono">
            {letter}
          </div>
          <h4 className="text-2xl md:text-3xl font-black text-white">
            {titleWithoutFirstLetter}
          </h4>
        </div>
        <p className="text-base md:text-lg font-medium text-white leading-relaxed [&_strong]:font-semibold [&_strong]:text-white">
          {renderFormattedText(description)}
        </p>
      </div>
    </ScrollRevealCard>
  );
};

export function CoreMetricsSection() {
  const coreMetrics = [
    {
      letter: "C",
      title: "Channel Owned",
      description: "Your magnet becomes the default entry point at the fridge — offline, always-on, controllable.",
      delay: 0,
    },
    {
      letter: "O",
      title: "Open Rate",
      description: "AI-crafted 30–120s fridge-time teasers explain “why this issue matters now” and naturally lead to **Open** full issue.",
      delay: 1,
    },
    {
      letter: "R",
      title: "Retention",
      description: "Light, context-aware nudges keep your newsletter visibly “in use” in daily life, reducing quiet churn.",
      delay: 2,
    },
    {
      letter: "E",
      title: "Earnings per subscriber",
      description: "Offer the FC magnet as a paid add-on to existing subscribers — a higher-signal, higher-ARPU tier.",
      delay: 3,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Core Metrics Cards */}
      <div className="grid md:grid-cols-2 gap-8 pt-8">
        {coreMetrics.map((metric, index) => (
          <CoreMetricCard
            key={index}
            letter={metric.letter}
            title={metric.title}
            description={metric.description}
            delay={metric.delay}
          />
        ))}
      </div>
    </div>
  );
}


"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCard {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkText: string;
  imageUrl?: string; // Optional image URL - from API
}

interface WhoWeServeCardsProps {
  cards: ServiceCard[];
}

// Using mockData; dev team will replace with real API hook useFetchServiceCards()
const mockCardImages = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const WhoWeServeCards: React.FC<WhoWeServeCardsProps> = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Calculate card width including margins
  // w-[450px] + mx-6 (24px * 2) = 498px per card
  const cardWidth = 498; // 450px + 48px (mx-6 on both sides)
  const totalWidth = cardWidth * cards.length;
  const animationDuration = cards.length * 8; // 8 seconds per card

  // Duplicate cards for seamless infinite scroll effect
  // We duplicate 2 times to create seamless loop
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden pt-8">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        .auto-scroll {
          animation: scroll-left ${animationDuration}s linear infinite;
        }

        .auto-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex auto-scroll">
        {duplicatedCards.map((card, index) => {
          const imageUrl = card.imageUrl || mockCardImages[index % mockCardImages.length];
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          
          return (
            <div
              key={`${card.title}-${index}`}
              className="flex h-full w-[400px] min-w-[450px] flex-shrink-0 2xl:w-[450px] mx-6 transition-all duration-300"
              style={{
                transform: isHovered ? 'scale(1.05)' : isOtherHovered ? 'scale(0.95)' : 'scale(1)',
                opacity: isOtherHovered ? 0.6 : 1,
                filter: isOtherHovered ? 'blur(2px)' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={card.link} className="block h-full w-full">
                <article className={`aspect-[430/256] h-full min-h-[290px] w-full overflow-hidden text-black rounded-[2rem] duration-300 ease-in-out transition-all group ${
                  isHovered 
                    ? 'bg-white/90 backdrop-blur-xl shadow-2xl' 
                    : 'bg-[#F7F3ED] shadow-sm hover:bg-white/80 hover:backdrop-blur-md'
                }`}>
                  <div className="h-full p-2">
                    <div className="relative flex h-full w-full overflow-hidden rounded-3xl">
                      {/* Text content - left side */}
                      <div className={`relative z-10 flex h-full w-1/2 flex-col items-start justify-between rounded-3xl p-4 after:absolute after:inset-0 after:z-5 after:translate-x-[10px] after:rounded-2xl after:content-[''] after:pointer-events-none after:duration-300 after:ease-in-out after:transition-all ${
                        isHovered
                          ? 'after:bg-white/90 after:backdrop-blur-xl'
                          : 'after:bg-[#F7F3ED] group-hover:after:bg-white/80 group-hover:after:backdrop-blur-md'
                      }`}>
                        <div className="relative z-20 flex h-full w-full flex-col gap-2">
                          <h3 className="font-display w-full text-left leading-none font-medium text-balance text-xl md:text-2xl">
                            {card.title}
                          </h3>
                          {card.subtitle && (
                            <p className="text-xs text-left font-mono leading-none text-muted-foreground">
                              {card.subtitle}
                            </p>
                          )}
                          <p className="text-left w-full text-black/70 text-pretty text-sm md:text-base leading-relaxed">
                            {card.description}
                          </p>
                          <div className="text-xs flex items-center text-left leading-none absolute bottom-0 left-0 gap-2 text-muted-foreground">
                            <span className="hidden">{card.linkText}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image - right side (larger) */}
                      <div className="relative h-full w-1/2 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={card.title}
                          width={394}
                          height={480}
                          className={`h-full w-full object-cover transition-transform duration-300 ${
                            isHovered ? 'scale-110' : 'scale-100'
                          }`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};


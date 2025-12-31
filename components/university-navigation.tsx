"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Our Story", href: "/about-us" },
];

export function UniversityNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnGreenBackground, setIsOnGreenBackground] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check if we're on the hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const navHeight = 80;
        const isOverlappingHero = rect.top < navHeight && rect.bottom > 0;
        setIsOnHeroSection(isOverlappingHero);
      } else {
        setIsOnHeroSection(false);
      }
      
      // Check if we're on the green background section (pricing section with #73802E)
      const pricingSection = document.getElementById('pricing');
      let isOnGreen = false;
      
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        const navHeight = 80;
        if (rect.top < navHeight && rect.bottom > 0) {
          isOnGreen = true;
        }
      }
      
      setIsOnGreenBackground(isOnGreen);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles: 
  // - Hero or Green background = glass effect
  // - Light background = white background with gradient
  const isGlassMode = isOnHeroSection || isOnGreenBackground;
  const isLightMode = !isGlassMode;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 px-4">
      {/* Navigation bar - styled like untillabs */}
      <div
        className={cn(
          "w-full max-w-7xl mx-auto rounded-full px-6 py-3",
          "flex items-center justify-between gap-4",
          "transition-all duration-300",
          // Light background mode (米色背景) - white to gray gradient left to right
          isLightMode
            ? cn(
                "bg-white shadow-sm",
                "border border-gray-200/50"
              )
            : cn(
                // Glass mode (hero section or green background)
                "bg-white/10 backdrop-blur-md border border-white/20",
                isScrolled && "bg-white/15 backdrop-blur-lg"
              )
        )}
        style={
          isLightMode
            ? {
                background: "linear-gradient(to right, #ffffff 0%, #f5f5f5 50%, #e8e8e8 100%)",
              }
            : undefined
        }
      >
        {/* Logo - Left side */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          {/* Logo icon - three circles */}
          <div className="flex items-center gap-1">
            <div className={cn(
              "w-2 h-2 rounded-full",
              isGlassMode ? "bg-white" : "bg-black"
            )}></div>
            <div className={cn(
              "w-2 h-2 rounded-full -ml-1",
              isGlassMode ? "bg-white" : "bg-black"
            )}></div>
            <div className={cn(
              "w-2 h-2 rounded-full ml-1",
              isGlassMode ? "bg-white" : "bg-black"
            )}></div>
          </div>
          <span className={cn(
            "font-semibold text-lg",
            isGlassMode ? "text-white" : "text-black"
          )}>Fridge Channel</span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isGlassMode
                  ? "text-white/90 hover:text-white"
                  : "text-gray-600 hover:text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            className={cn(
              "hover:opacity-80 transition-opacity",
              isGlassMode ? "text-white" : "text-black"
            )}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}


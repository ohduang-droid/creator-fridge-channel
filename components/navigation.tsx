"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Our Story", href: "/about-us" },
  { label: "Creator Shortlist", href: "/creator-wanted" },
];

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCreatorShortlistPage = pathname === "/creator-wanted";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnRedBackground, setIsOnRedBackground] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  useEffect(() => {
    // If not on home page, use light mode by default
    if (!isHomePage) {
      setIsOnHeroSection(false);
      setIsOnRedBackground(false);
      return;
    }

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
      
      // Check if we're on the red background sections (#C32D0B or #8D0104)
      const redSection1 = document.getElementById('why-creators-love-it');
      const redSection2 = document.getElementById('pricing');
      let isOnRed = false;
      
      if (redSection1) {
        const rect = redSection1.getBoundingClientRect();
        const navHeight = 80;
        if (rect.top < navHeight && rect.bottom > 0) {
          isOnRed = true;
        }
      }
      
      if (redSection2 && !isOnRed) {
        const rect = redSection2.getBoundingClientRect();
        const navHeight = 80;
        if (rect.top < navHeight && rect.bottom > 0) {
          isOnRed = true;
        }
      }
      
      setIsOnRedBackground(isOnRed);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Determine styles: 
  // - Hero or Red background = glass effect
  // - Creator Shortlist page also uses glass mode for consistency
  // - Light background = white background with gradient
  const isGlassMode = isCreatorShortlistPage || isOnHeroSection || isOnRedBackground;
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
                // Glass mode (hero section or red background)
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
          href={isHomePage ? "#home" : "/#home"}
          className="flex items-center gap-2 shrink-0"
        >
          {/* Logo icon */}
          <Image
            src="/icon_white.svg"
            alt="Fridge Channel logo"
            width={28}
            height={28}
            className={cn(
              "h-7 w-7",
              isGlassMode ? "brightness-200 contrast-125" : "brightness-100"
            )}
            priority={false}
          />
          <span className={cn(
            "font-semibold text-lg",
            isGlassMode ? "text-white" : "text-black"
          )}>Fridge Channel</span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="flex items-center gap-4 xl:gap-8 flex-1 justify-center">
          {navItems.map((item) => {
            // If not on home page and href is an anchor link, prepend "/" to make it absolute
            const href = !isHomePage && item.href.startsWith("#") 
              ? `/${item.href}` 
              : item.href;
            
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  isGlassMode
                    ? "text-white/90 hover:text-white"
                    : "text-gray-600 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            );
          })}
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

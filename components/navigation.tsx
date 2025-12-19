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
  { label: "Creator Shortlist", href: "/creator-shortlist" },
];

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCreatorShortlistPage = pathname === "/creator-shortlist";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnRedBackground, setIsOnRedBackground] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine styles: 
  // - Hero or Red background = glass effect
  // - Creator Shortlist page also uses glass mode for consistency
  // - Light background = white background with gradient
  const isGlassMode = isCreatorShortlistPage || isOnHeroSection || isOnRedBackground;
  const isLightMode = !isGlassMode;

  return (
    <>
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
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">
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
          <div className="lg:hidden ml-auto">
            <button
              className={cn(
                "hover:opacity-80 transition-opacity",
                isGlassMode ? "text-white" : "text-black"
              )}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>

          {/* Desktop spacer for symmetry */}
          <div className="hidden lg:block w-6" aria-hidden="true" />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 h-full w-5/6 max-w-sm bg-white text-gray-900 shadow-2xl flex flex-col px-6 py-10">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900 transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => {
                const href = !isHomePage && item.href.startsWith("#") 
                  ? `/${item.href}` 
                  : item.href;

                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-gray-800"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="https://calendly.com/billy-fridgechannels/30min"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center rounded-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Founder Chat → Launch Channel
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

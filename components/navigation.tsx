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
  // const isCreatorShortlistPage = pathname === "/creator-shortlist"; // Kept for reference if needed, but primary logic below matches existing
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnRedBackground, setIsOnRedBackground] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false); // Mobile dropdown state

  // Determine current "Who We Serve" page for label display
  const getCurrentWhoWeServe = () => {
    if (pathname?.includes('/who-we-serve/university')) return 'University';
    if (pathname?.includes('/who-we-serve/subscription-business')) return 'Subscription Business';
    if (pathname?.includes('/who-we-serve/nonprofit')) return 'Nonprofit';
    return null;
  };

  const currentWhoWeServe = getCurrentWhoWeServe();

  useEffect(() => {
    // Scroll detection enabled for all pages to support Hero transparency
    // if (!isHomePage) { ... } removed

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
      const finalCta = document.getElementById('final-cta');

      let isOnRed = false;

      const checkRed = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const navHeight = 80;
          if (rect.top < navHeight && rect.bottom > 0) return true;
        }
        return false;
      };

      if (checkRed('why-creators-love-it') || checkRed('pricing') || checkRed('final-cta')) {
        isOnRed = true;
      }

      setIsOnRedBackground(isOnRed);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const isGlassMode = isOnHeroSection || isOnRedBackground;
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
                "bg-white/70 backdrop-blur-md shadow-sm",
                "border border-gray-200/50"
              )
              : cn(
                // Glass mode (hero section or red background)
                "bg-white/10 backdrop-blur-md border border-white/20",
                isScrolled && "bg-white/15 backdrop-blur-lg"
              )
          )}
        >
          {/* Logo - Left side */}
          <Link
            href={isHomePage ? "#home" : "/"}
            className="flex items-center gap-2 shrink-0"
          >
            {/* Logo icon */}
            <Image
              src="/icon_white.svg"
              alt="Fridge Channel logo"
              width={28}
              height={28}
              className={cn(
                "h-7 w-7 transition-all duration-300",
                isGlassMode ? "brightness-200 contrast-125" : "filter invert opacity-75"
              )}
              priority={false}
            />
            <span className={cn(
              "font-semibold text-lg",
              isGlassMode ? "text-white" : "text-black"
            )}>Fridge Channel</span>
          </Link>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-1 justify-center">

            {/* Who We Serve Dropdown */}
            <div className="relative group">
              <button
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 outline-none",
                  isGlassMode ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-black",
                  currentWhoWeServe && (isGlassMode ? "text-white font-bold" : "text-black font-bold")
                )}
              >
                {currentWhoWeServe || "Who We Serve"}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className={cn(
                  "min-w-[200px] flex flex-col p-1 rounded-lg shadow-lg border",
                  "bg-white/80 backdrop-blur-xl border-white/50"
                )}>
                  <Link href="/who-we-serve/university" className={cn("px-4 py-2 text-sm text-gray-700 hover:bg-black/5 rounded-md transition-colors", currentWhoWeServe === 'University' && "bg-black/5 font-semibold")}>University</Link>
                  <Link href="/who-we-serve/nonprofit" className={cn("px-4 py-2 text-sm text-gray-700 hover:bg-black/5 rounded-md transition-colors", currentWhoWeServe === 'Nonprofit' && "bg-black/5 font-semibold")}>Nonprofit</Link>
                  <Link href="/who-we-serve/subscription-business" className={cn("px-4 py-2 text-sm text-gray-700 hover:bg-black/5 rounded-md transition-colors", currentWhoWeServe === 'Subscription Business' && "bg-black/5 font-semibold")}>Subscription Business</Link>
                </div>
              </div>
            </div>

            {/* Why FC */}
            <Link
              href="/why-us"
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isGlassMode ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-black"
              )}
            >
              Why FC
            </Link>

            {/* Start a Pilot */}
            <Link
              href="https://calendly.com/billy-fridgechannels/30min"
              target="_blank"
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                isGlassMode ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-black"
              )}
            >
              Start a Pilot
            </Link>

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
          <div className="absolute top-0 right-0 h-full w-5/6 max-w-sm bg-white text-gray-900 shadow-2xl flex flex-col px-6 py-10 overflow-y-auto">
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
            <div className="mt-8 flex flex-col space-y-6">
              {/* Mobile Who We Serve */}
              <div>
                <button
                  onClick={() => setIsWhoWeServeOpen(!isWhoWeServeOpen)}
                  className="flex items-center justify-between w-full text-base font-semibold text-gray-800"
                >
                  Who We Serve
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={cn("transition-transform duration-200", isWhoWeServeOpen ? "rotate-180" : "")}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isWhoWeServeOpen && (
                  <div className="mt-3 ml-4 flex flex-col space-y-3 border-l-2 border-gray-100 pl-4">
                    <Link href="/who-we-serve/university" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-black">University</Link>
                    <Link href="/who-we-serve/nonprofit" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-black">Nonprofit</Link>
                    <Link href="/who-we-serve/subscription-business" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-black">Subscription Business</Link>
                  </div>
                )}
              </div>

              <Link href="/why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-800">
                Why FC
              </Link>

              <Link href="https://calendly.com/billy-fridgechannels/30min" target="_blank" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-gray-800">
                Start a Pilot
              </Link>
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="https://calendly.com/billy-fridgechannels/30min"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center rounded-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Pilot Check
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

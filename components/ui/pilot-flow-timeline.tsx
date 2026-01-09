"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { AnimatedTitle } from "@/components/ui/animated-title";

interface PilotStep {
  id: string;
  title: string;
  body: string[];
}

interface PilotFlowTimelineProps {
  steps: PilotStep[];
  title?: string;
}

/* =========================
   Spline & Math Utils
========================= */

function solveCatmullRom(
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  t: number
): Point {
  const t2 = t * t;
  const t3 = t2 * t;

  const v0 = (p2.x - p0.x) * 0.5;
  const v1 = (p3.x - p1.x) * 0.5;
  const t2_3 = 2 * t3;
  const t3_2 = 3 * t2;

  const x =
    (t2_3 - t3_2 + 1) * p1.x +
    (t3_2 - t2_3) * p2.x +
    (t3 - 2 * t2 + t) * v0 +
    (t3 - t2) * v1;

  const v0y = (p2.y - p0.y) * 0.5;
  const v1y = (p3.y - p1.y) * 0.5;
  const y =
    (t2_3 - t3_2 + 1) * p1.y +
    (t3_2 - t2_3) * p2.y +
    (t3 - 2 * t2 + t) * v0y +
    (t3 - t2) * v1y;

  return { x, y };
}

interface Point {
  x: number;
  y: number;
}

function generateNarrativePath(points: Point[]): string {
  if (points.length < 2) return "";
  const fullPoints = [points[0], ...points, points[points.length - 1]];
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < fullPoints.length - 2; i++) {
    const p0 = fullPoints[i - 1];
    const p1 = fullPoints[i];
    const p2 = fullPoints[i + 1];
    const p3 = fullPoints[i + 2];
    const segments = 20;
    for (let s = 1; s <= segments; s++) {
      const t = s / segments;
      const { x, y } = solveCatmullRom(p0, p1, p2, p3, t);
      d += ` L ${x} ${y}`;
    }
  }
  return d;
}

/* =========================
   Hardcoded "Narrative" Layout
========================= */
const STEP_COORDS_DESKTOP = [
  { x: 100, y: 50 },
  { x: 300, y: 130 },
  { x: 220, y: 210 },
  { x: 450, y: 300 },
  { x: 350, y: 390 },
  { x: 600, y: 470 },
  { x: 500, y: 560 },
  { x: 800, y: 640 },
];

const WRAPPER_HEIGHT = 680;
const WRAPPER_WIDTH = 1000;

/* =========================
   Sub-Component: Interactive Step Item
========================= */
function PilotStepItem({
  step,
  index,
  totalSteps,
  point,
  scrollYProgress,
  isLeftAligned,
}: {
  step: PilotStep;
  index: number;
  totalSteps: number;
  point: Point;
  scrollYProgress: MotionValue<number>;
  isLeftAligned: boolean;
}) {
  const stepTarget = index / (totalSteps - 1 || 1);

  // Adjusted timing: Animation completes by 75% of total scroll distance
  // giving the user the remaining 25% (mostly) to view the result.
  const adjustedTarget = stepTarget * 0.75;

  const approachStart = Math.max(0, adjustedTarget - 0.10);
  const hitPoint = adjustedTarget;
  const passPoint = Math.min(1, adjustedTarget + 0.10);

  // Opacity: Fully visible by the time we hit
  const opacity = useTransform(scrollYProgress, [approachStart, hitPoint], [0, 1]);

  // Y: Settle into position
  const y = useTransform(scrollYProgress, [approachStart, hitPoint], [20, 0]);

  // Scale: Pulse effect
  const scale = useTransform(scrollYProgress, [approachStart, hitPoint, passPoint], [0.9, 1.15, 1]);

  return (
    <div
      className={clsx(
        "absolute z-10 w-[240px] flex flex-col gap-1 transition-all duration-500",
        isLeftAligned ? "items-end text-right" : "items-start text-left"
      )}
      style={{
        left: `${(point.x / WRAPPER_WIDTH) * 100}%`,
        top: `${(point.y / WRAPPER_HEIGHT) * 100}%`,
        transform: `translate(${isLeftAligned ? "-100%" : "0"}, -50%)`,
        marginLeft: isLeftAligned ? "-2rem" : "2rem",
      }}
    >
      <motion.div style={{ opacity, y, scale, originX: isLeftAligned ? 1 : 0 }} className="flex flex-col gap-1">
        <div
          className={clsx(
            "absolute top-1/2 w-4 h-4 bg-white border-[3px] border-[#469A74] rounded-full",
            isLeftAligned ? "-right-[2rem] translate-x-1/2" : "-left-[2rem] -translate-x-1/2"
          )}
          style={{ marginTop: "-8px" }}
        />
        <h3 className="text-[20px] font-semibold text-[#1a1a1a]">
          {step.title}
        </h3>
        {step.body.map((line, i) => (
          <p key={i} className="text-[14px] leading-[18px] text-[#1a1a1a]/75">
            {line}
          </p>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================
   Main Component
========================= */
export function PilotFlowTimeline({
  steps,
  title = "How a Pilot Works",
}: PilotFlowTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepPoints = STEP_COORDS_DESKTOP.slice(0, steps.length);
  const pathD = generateNarrativePath(stepPoints);

  // Use a tall container to create scroll space
  // We trigger based on the container entering/leaving the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to path drawing (0% to 75% completes the path)
  // This leaves a significant chunk (75%-100%) for "dwell time"
  const pathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  // Spring the path for smoothness
  const smoothPathLength = useSpring(pathLength, {
    stiffness: 400,
    damping: 90,
  });

  // Scale logic to fit the viewport
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Available space: Window height - Title area (~120px) - Padding (~40px)
      // Navbar often takes ~80px. Title takes ~80px.
      const availableHeight = window.innerHeight - 200;
      const availableWidth = window.innerWidth - 40;

      const scaleH = availableHeight / WRAPPER_HEIGHT;
      const scaleW = availableWidth / WRAPPER_WIDTH;

      // Use the smaller scale to ensure it fits both dimensions, maxing out at 1 (no upscaling)
      // Also clamp to a reasonable minimum to avoid it becoming microscopic
      const newScale = Math.min(1, Math.max(0.6, Math.min(scaleH, scaleW)));

      setScale(newScale);
    };

    // Run initially and on resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // 300vh height ensures the user has to scroll "through" the animation
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#F7F7F4]">

      {/* Sticky wrapper to pin the content while scrolling through the 300vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-32">

        <motion.div
          className="w-full flex flex-col items-center justify-start"
        >
          {/* Title - Fixed at top relative to the flex center, but let's give it some space */}
          <div className="text-center pb-8 z-20 shrink-0">
            <AnimatedTitle className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1.4px] text-[#1a1a1a]">
              {title}
            </AnimatedTitle>
          </div>

          {/* Desktop Layout Uses SVG Path - Scaled Wrapper */}
          <div
            className="relative w-full hidden md:flex items-center justify-center shrink-0"
          // We remove fixed height here and rely on the scaled inner content
          // The flex parent will center this block
          >
            {/* The scaled container consisting of the fixed-size diagram */}
            <div
              style={{
                width: WRAPPER_WIDTH,
                height: WRAPPER_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top center", // Pivot from top to keep title/graph distance stable
                transition: "transform 0.1s linear" // Smooth resize
              }}
              className="relative shrink-0"
            >
              <svg
                viewBox={`0 0 ${WRAPPER_WIDTH} ${WRAPPER_HEIGHT}`}
                className="absolute inset-0 w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#469A74" />
                    <stop offset="100%" stopColor="#469A74" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated Green Line */}
                <motion.path
                  d={pathD}
                  stroke="url(#line-gradient)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="opacity-90"
                  style={{ pathLength: smoothPathLength }}
                />
              </svg>

              {/* Steps */}
              {steps.map((step, index) => {
                const pt = stepPoints[index] || { x: 0, y: 0 };
                const isLeftAligned = [0, 2, 4, 6].includes(index);

                return (
                  <PilotStepItem
                    key={step.id}
                    step={step}
                    index={index}
                    totalSteps={steps.length}
                    point={pt}
                    scrollYProgress={scrollYProgress}
                    isLeftAligned={isLeftAligned}
                  />
                );
              })}
            </div>
          </div>

          {/* Mobile Layout (unchanged, flows naturally) */}
          <div className="md:hidden px-6 pb-16 space-y-12 w-full max-w-md">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pl-6 border-l-2 border-[#469A74]/30">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#469A74]" />
                <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
                  {step.title}
                </h3>
                {step.body.map((line, i) => (
                  <p
                    key={i}
                    className="text-[14px] leading-[20px] text-[#1a1a1a]/70 mt-1"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

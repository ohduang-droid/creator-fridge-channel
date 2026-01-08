"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

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

/**
 * Calculates a point on a Catmull-Rom spline at time t
 * p0, p1, p2, p3 are the control points
 * t is between 0 and 1 (0 at p1, 1 at p2)
 */
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

/**
 * Generates an SVG path data string that passes smoothly through validPoints.
 * Defines explicit "narrative" control points for the 8 steps.
 */
function generateNarrativePath(points: Point[]): string {
  // We need at least 2 points to draw a line
  if (points.length < 2) return "";

  // Duplicate start/end points to close the spline calculation curve properly
  // (Standard trick for Catmull-Rom to work on the first/last segments)
  const fullPoints = [points[0], ...points, points[points.length - 1]];

  let d = `M ${points[0].x} ${points[0].y}`;

  // For every segment between p1 and p2
  for (let i = 1; i < fullPoints.length - 2; i++) {
    const p0 = fullPoints[i - 1];
    const p1 = fullPoints[i];
    const p2 = fullPoints[i + 1];
    const p3 = fullPoints[i + 2];

    // Granularity of the curve segments
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
  { x: 100, y: 50 },   // 1. Pick a plan (Top Left)
  { x: 300, y: 200 },  // 2. Mock in 48h (Dip Right)
  { x: 220, y: 350 },  // 3. 15-min review (Loop Back Left)
  { x: 450, y: 480 },  // 4. Pilot design (Center/Right)
  { x: 350, y: 620 },  // 5. Stakeholder review (Left-ish)
  { x: 600, y: 700 },  // 6. Kickoff & production (Right)
  { x: 500, y: 850 },  // 7. Pilot running (Center)
  { x: 800, y: 950 },  // 8. Review & scale (Far Right End)
];

const WRAPPER_HEIGHT = 1050;
const WRAPPER_WIDTH = 1000;

/* =========================
   Main Component
========================= */
export function PilotFlowTimeline({
  steps,
  title = "How a Pilot Works",
}: PilotFlowTimelineProps) {
  // If we have fewer/more steps than coords, slice or repeat logic.
  // Ideally, this component is specialized for exactly 8 steps.
  const stepPoints = STEP_COORDS_DESKTOP.slice(0, steps.length);

  // Generate the path string connecting these points smoothly
  const pathD = generateNarrativePath(stepPoints);

  return (
    <div className="w-full bg-[#F7F7F4]">
      {/* Title */}
      <div className="text-center py-16">
        <h2 className="text-[48px] leading-[52px] tracking-[-1.4px] text-[#1a1a1a]">
          {title}
        </h2>
      </div>

      {/* Desktop Layout Uses SVG Path */}
      <div
        className="relative max-w-6xl mx-auto hidden md:block"
        style={{ height: `${WRAPPER_HEIGHT}px` }}
      >
        <svg
          viewBox={`0 0 ${WRAPPER_WIDTH} ${WRAPPER_HEIGHT}`}
          className="absolute inset-0 w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={pathD}
            stroke="url(#line-gradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            className="opacity-90"
          />
        </svg>

        {/* Steps */}
        {steps.map((step, index) => {
          // Fallback if we have more steps than points
          const pt = stepPoints[index] || { x: 0, y: 0 };

          // Determine text alignment "sides" of the curve
          // 0: Left, 1: Right, 2: Left, 3: Right ... check coords?
          // Actually, let's keep the text AWAY from the curve.

          // Custom offsets for perfect placement
          const isLeftAligned = [0, 2, 4, 6].includes(index);

          return (
            <div
              key={step.id}
              className={clsx(
                "absolute z-10 w-[240px] flex flex-col gap-1 transition-all duration-500 hover:scale-105",
                isLeftAligned ? "items-end text-right" : "items-start text-left"
              )}
              style={{
                left: `${(pt.x / WRAPPER_WIDTH) * 100}%`,
                top: `${(pt.y / WRAPPER_HEIGHT) * 100}%`,
                transform: `translate(${isLeftAligned ? "-100%" : "0"}, -50%)`,
                marginLeft: isLeftAligned ? "-2rem" : "2rem",
              }}
            >
              {/* Optional: Dot on the line */}
              <div
                className={clsx(
                  "absolute top-1/2 w-4 h-4 bg-white border-[3px] border-purple-500 rounded-full",
                  isLeftAligned ? "-right-[2rem] translate-x-1/2" : "-left-[2rem] -translate-x-1/2"
                )}
                style={{ marginTop: "-8px" }}
              />

              <h3 className="text-[20px] font-semibold text-[#1a1a1a]">
                {step.title}
              </h3>
              {step.body.map((line, i) => (
                <p
                  key={i}
                  className="text-[14px] leading-[18px] text-[#1a1a1a]/75"
                >
                  {line}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 pb-16 space-y-12">
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-6 border-l-2 border-purple-200">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-purple-500" />
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
    </div>
  );
}

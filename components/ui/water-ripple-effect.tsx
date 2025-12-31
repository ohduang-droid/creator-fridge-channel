"use client";

import { motion } from "framer-motion";

interface WaterRippleEffectProps {
  className?: string;
  intensity?: number;
  speed?: number;
}

/**
 * Water Ripple Effect Component
 * Creates a floating water ripple animation effect
 */
export function WaterRippleEffect({
  className = "",
  intensity = 1,
  speed = 1,
}: WaterRippleEffectProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-[1] ${className}`}>
      {/* Layer 1: Large ripples moving slowly */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 15 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 800px 600px at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 600px 800px at 80% 80%, rgba(255, 255, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 700px 500px at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 0%",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Layer 2: Medium ripples moving in opposite direction */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "100% 100%",
            "0% 0%",
            "100% 100%",
          ],
        }}
        transition={{
          duration: 20 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 600px 700px at 60% 30%, rgba(255, 255, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 500px 600px at 30% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 650px 550px at 90% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "100% 100%",
          mixBlendMode: "overlay",
        }}
      />

      {/* Layer 3: Small ripples for detail */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "50% 50%",
            "150% 150%",
            "50% 50%",
          ],
        }}
        transition={{
          duration: 12 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle 300px at 25% 45%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle 250px at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle 280px at 50% 25%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 50%",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Wave-like floating effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -30 * intensity, 0],
          x: [0, 15 * intensity, 0],
          rotate: [0, 1 * intensity, 0],
        }}
        transition={{
          duration: 6 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 100px,
              rgba(255, 255, 255, 0.03) 100px,
              rgba(255, 255, 255, 0.03) 200px
            )
          `,
          backgroundSize: "400px 400px",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}


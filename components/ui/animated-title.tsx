"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTitleProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedTitle({ children, className, delay = 0 }: AnimatedTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Flatten children to string if possible, generally we expect a string
    const text = typeof children === "string" ? children : String(children);

    // Split into characters (handle spaces correctly)
    const characters = Array.from(text);

    return (
        <div className={className} ref={ref}>
            <motion.span
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.03, delayChildren: delay }}
                aria-hidden
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, x: -10, y: 10 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: { type: "spring", damping: 12, stiffness: 200 }
                            },
                        }}
                        style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
            {/* Screen reader only text */}
            <span className="sr-only">{text}</span>
        </div>
    );
}

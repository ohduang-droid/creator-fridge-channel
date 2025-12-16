"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";
import { VariantProps } from "class-variance-authority";

interface HandWrittenButtonProps 
    extends React.ComponentProps<typeof Button> {
    showUnderline?: boolean;
}

function HandWrittenButton({
    children,
    className,
    showUnderline = true,
    ...props
}: HandWrittenButtonProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.3 },
            },
        },
    };

    return (
        <div className="relative inline-block">
            <Button
                className={cn("relative z-10", className)}
                {...props}
            >
                {children}
            </Button>
            {showUnderline && (
                <div className="absolute -bottom-2 left-0 right-0 h-4 overflow-hidden">
                    <motion.svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 20"
                        initial="hidden"
                        animate="visible"
                        className="w-full h-full"
                    >
                        <motion.path
                            d="M 10 10 
                               Q 50 5, 90 10
                               T 170 10
                               Q 190 12, 190 10"
                            fill="none"
                            strokeWidth="2"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={draw}
                            className="text-primary opacity-60"
                        />
                    </motion.svg>
                </div>
            )}
        </div>
    );
}

export { HandWrittenButton }


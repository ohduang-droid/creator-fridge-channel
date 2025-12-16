"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HandWrittenTextButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: "sm" | "md" | "lg";
}

function HandWrittenTextButton({
    children,
    href,
    onClick,
    className,
    size = "md",
}: HandWrittenTextButtonProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { 
                    duration: 2.5, 
                    ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number]
                },
                opacity: { duration: 0.5 },
            },
        },
    };

    const sizeClasses = {
        sm: "text-xl md:text-2xl",
        md: "text-2xl md:text-3xl",
        lg: "text-3xl md:text-4xl",
    };

    const content = (
        <div className={cn("relative inline-block cursor-pointer", className)} onClick={onClick}>
            <div className="relative inline-flex items-center justify-center px-10 py-10">
                <motion.svg
                    className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                    initial="hidden"
                    animate="visible"
                    viewBox="0 0 1200 300"
                    preserveAspectRatio="none"
                    style={{
                        left: '-1rem',
                        top: '-1rem',
                        width: 'calc(100% + 2rem)',
                        height: 'calc(100% + 2rem)',
                    }}
                >
                    <motion.path
                        d="M 950 70 
                           C 1250 280, 1050 460, 600 500
                           C 250 500, 150 460, 150 280
                           C 150 100, 350 60, 600 60
                           C 850 60, 950 160, 950 160"
                        fill="none"
                        strokeWidth="12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-black dark:text-white opacity-90"
                    />
                </motion.svg>
                <motion.span
                    className={cn("relative z-10 text-black dark:text-white tracking-tighter font-semibold whitespace-nowrap", sizeClasses[size])}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ transform: 'translateY(0.5rem)' }}
                >
                    {children}
                </motion.span>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {content}
            </Link>
        );
    }

    return content;
}

export { HandWrittenTextButton }


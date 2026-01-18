'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    glow?: boolean;
}

// Style constants
const BASE_STYLES =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const VARIANTS = {
    primary: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 focus:ring-cyan-400',
    secondary: 'glass-card text-foreground hover:bg-slate-600/50 focus:ring-slate-500',
    ghost: 'text-muted hover:text-foreground hover:bg-slate-800/50 focus:ring-slate-500',
} as const;

const SIZES = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
} as const;

/**
 * Reusable Button component with variants and glow effect
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
        const glowStyles = glow
            ? 'shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]'
            : '';

        return (
            <button
                ref={ref}
                className={cn(BASE_STYLES, VARIANTS[variant], SIZES[size], glowStyles, className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

/**
 * Animated button wrapper using Framer Motion
 */
export const MotionButton = motion.create(Button);

'use client';

import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    text: string;
    className?: string;
}

/**
 * Typewriter text display component with blinking cursor
 * Uses span elements to avoid hydration issues when nested
 */
export function TypewriterEffect({ text, className = '' }: TypewriterEffectProps) {
    return (
        <span className={`font-mono ${className}`}>
            <span className="text-cyan-400">{text}</span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
            />
        </span>
    );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

/**
 * Theme toggle button with animated icon transition
 */
export function ThemeToggle() {
    const { theme, toggleTheme, isDark, mounted } = useTheme();

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                <div className="w-5 h-5 bg-slate-600 rounded-full animate-pulse" />
            </div>
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-purple transition-all overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
        >
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Moon className="w-5 h-5 text-purple-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className="w-5 h-5 text-amber-500" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

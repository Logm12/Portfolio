'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

/**
 * Custom hook for managing dark/light mode with localStorage persistence
 */
export function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
            applyTheme(savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = prefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            applyTheme(initialTheme);
        }
    }, []);

    // Apply theme to document
    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        root.classList.remove('dark', 'light');
        root.classList.add(newTheme);

        // Apply background color directly for immediate visual feedback
        if (newTheme === 'light') {
            document.body.style.backgroundColor = '#f8fafc';
            document.body.style.color = '#0f172a';
        } else {
            document.body.style.backgroundColor = '#050510';
            document.body.style.color = '#f8fafc';
        }
    };

    // Toggle theme
    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }, [theme]);

    const isDark = theme === 'dark';

    return { theme, toggleTheme, isDark, mounted };
}

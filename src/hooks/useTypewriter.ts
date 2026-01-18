'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for typewriter effect
 * @param phrases - Array of strings to cycle through
 * @param typingSpeed - Speed of typing in ms (default: 50)
 * @param deletingSpeed - Speed of deleting in ms (default: 30)
 * @param pauseDuration - Pause between phrases in ms (default: 2000)
 */
export function useTypewriter(
    phrases: string[],
    typingSpeed = 50,
    deletingSpeed = 30,
    pauseDuration = 2000
) {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isComplete, setIsComplete] = useState(false);

    const currentPhrase = phrases[phraseIndex];

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            // Typing
            if (displayText.length < currentPhrase.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1));
                }, typingSpeed);
            } else {
                // Finished typing current phrase
                if (phraseIndex === phrases.length - 1) {
                    // Last phrase - stay complete
                    setIsComplete(true);
                } else {
                    // Pause before deleting
                    timeout = setTimeout(() => {
                        setIsTyping(false);
                    }, pauseDuration);
                }
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, deletingSpeed);
            } else {
                // Finished deleting, move to next phrase
                setPhraseIndex((prev) => prev + 1);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, phraseIndex, currentPhrase, phrases.length, typingSpeed, deletingSpeed, pauseDuration]);

    const reset = useCallback(() => {
        setDisplayText('');
        setPhraseIndex(0);
        setIsTyping(true);
        setIsComplete(false);
    }, []);

    return { displayText, isComplete, isTyping, reset };
}

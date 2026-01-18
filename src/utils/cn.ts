import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to conditionally join class names
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

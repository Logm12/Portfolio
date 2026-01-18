'use client';

import { motion } from 'framer-motion';
import { aboutMeContent } from '@/data/projects';

// ============================================================================
// TYPES
// ============================================================================

interface Highlight {
    label: string;
    value: string;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/** Section header with gradient text */
function SectionHeader({ headline, subtitle }: { headline: string; subtitle: string }) {
    return (
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold gradient-text-cyan mb-2"
            >
                {headline}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg italic"
            >
                {subtitle}
            </motion.p>
        </div>
    );
}

/** Highlight card - shows key stats */
function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 text-center"
        >
            <p className="text-pink-400 text-sm font-medium mb-1">{highlight.label}</p>
            <p className="text-foreground text-lg font-bold">{highlight.value}</p>
        </motion.div>
    );
}

/** Paragraph with animation */
function AnimatedParagraph({ text, index }: { text: string; index: number }) {
    return (
        <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-muted text-lg leading-relaxed"
        >
            {text}
        </motion.p>
    );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * About Me Section - Storytelling component
 *
 * Displays the "hybrid" narrative combining WorldQuant + Viettel experience
 *
 * Refactored for:
 * - Modularity: Each element is a separate component
 * - Data-driven: Content comes from data/projects.ts
 * - Testability: Components accept props
 */
export function AboutMe() {
    const { headline, subtitle, paragraphs, highlights } = aboutMeContent;

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <SectionHeader headline={headline} subtitle={subtitle} />

                {/* Narrative paragraphs */}
                <div className="space-y-6 mb-12">
                    {paragraphs.map((paragraph, index) => (
                        <AnimatedParagraph key={index} text={paragraph} index={index} />
                    ))}
                </div>

                {/* Highlight cards grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                        <HighlightCard key={highlight.label} highlight={highlight} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

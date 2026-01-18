'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/projects';
import { SkillCategory } from '@/types';

// ============================================================================
// CONSTANTS
// ============================================================================

const CHART_CONFIG = {
    size: 400, // SVG viewport size
    center: 200, // Center point
    maxRadius: 150, // Maximum radius for the chart
    levels: 5, // Number of concentric circles
    animationDuration: 1,
} as const;

// Colors for gradient effect
const GRADIENT_COLORS = {
    fill: 'rgba(236, 72, 153, 0.3)', // Pink with transparency
    stroke: 'rgb(236, 72, 153)', // Solid pink
    lightFill: 'rgba(6, 182, 212, 0.2)', // Cyan for light mode
    lightStroke: 'rgb(6, 182, 212)',
} as const;

// ============================================================================
// UTILITY FUNCTIONS (Testable, pure functions)
// ============================================================================

/**
 * Calculate point position on radar chart
 * @param index - Category index
 * @param total - Total number of categories
 * @param radius - Distance from center
 * @param cx - Center X
 * @param cy - Center Y
 */
function calculatePoint(
    index: number,
    total: number,
    radius: number,
    cx: number = CHART_CONFIG.center,
    cy: number = CHART_CONFIG.center
): { x: number; y: number } {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return {
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
    };
}

/**
 * Generate SVG path for polygon
 */
function generatePolygonPath(categories: SkillCategory[]): string {
    const total = categories.length;
    const points = categories.map((cat, index) => {
        const radius = (cat.level / 100) * CHART_CONFIG.maxRadius;
        const { x, y } = calculatePoint(index, total, radius);
        return `${x},${y}`;
    });
    return `M ${points.join(' L ')} Z`;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/** Concentric circles (grid) for radar chart */
function RadarGrid({ levels }: { levels: number }) {
    return (
        <>
            {Array.from({ length: levels }).map((_, i) => {
                const radius = ((i + 1) / levels) * CHART_CONFIG.maxRadius;
                return (
                    <circle
                        key={i}
                        cx={CHART_CONFIG.center}
                        cy={CHART_CONFIG.center}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity={0.1}
                        strokeWidth={1}
                    />
                );
            })}
        </>
    );
}

/** Axis lines from center to each category */
function RadarAxes({ categories }: { categories: SkillCategory[] }) {
    const total = categories.length;
    return (
        <>
            {categories.map((_, index) => {
                const { x, y } = calculatePoint(index, total, CHART_CONFIG.maxRadius);
                return (
                    <line
                        key={index}
                        x1={CHART_CONFIG.center}
                        y1={CHART_CONFIG.center}
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeOpacity={0.1}
                        strokeWidth={1}
                    />
                );
            })}
        </>
    );
}

/** Labels for each category axis */
function RadarLabels({ categories }: { categories: SkillCategory[] }) {
    const total = categories.length;
    const labelOffset = 25; // Distance beyond the max radius

    return (
        <>
            {categories.map((category, index) => {
                const { x, y } = calculatePoint(
                    index,
                    total,
                    CHART_CONFIG.maxRadius + labelOffset
                );
                return (
                    <text
                        key={category.name}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs fill-current text-muted"
                    >
                        {category.name}
                    </text>
                );
            })}
        </>
    );
}

/** Animated data polygon */
function RadarPolygon({ categories }: { categories: SkillCategory[] }) {
    const pathData = generatePolygonPath(categories);

    return (
        <motion.path
            d={pathData}
            fill={GRADIENT_COLORS.fill}
            stroke={GRADIENT_COLORS.stroke}
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: CHART_CONFIG.animationDuration, ease: 'easeOut' }}
            style={{ transformOrigin: 'center' }}
        />
    );
}

/** Data points on each axis */
function RadarPoints({ categories }: { categories: SkillCategory[] }) {
    const total = categories.length;

    return (
        <>
            {categories.map((category, index) => {
                const radius = (category.level / 100) * CHART_CONFIG.maxRadius;
                const { x, y } = calculatePoint(index, total, radius);

                return (
                    <motion.circle
                        key={category.name}
                        cx={x}
                        cy={y}
                        r={5}
                        fill={GRADIENT_COLORS.stroke}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                    />
                );
            })}
        </>
    );
}

/** Skills list for a category */
function SkillsList({ category }: { category: SkillCategory }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4"
        >
            <h4 className="text-sm font-semibold text-foreground mb-2">{category.name}</h4>
            <div className="flex flex-wrap gap-1">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-pink-500/20 text-pink-400 rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Skill Radar Chart - SVG-based radar/spider chart
 *
 * Displays skill proficiency across 5 categories:
 * - AI/ML Core
 * - Data Engineering
 * - LLM & NLP
 * - Deployment/Ops
 * - Quantitative
 *
 * Refactored for:
 * - Pure utility functions for calculations
 * - Modular sub-components
 * - Theme-aware styling
 */
export function SkillRadar() {
    const categories = skillCategories;

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text-purple italic mb-4">
                        Skill Radar
                    </h2>
                    <p className="text-muted">Full-stack AI Engineer skill distribution</p>
                </motion.div>

                {/* Chart and Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Radar Chart */}
                    <div className="flex justify-center">
                        <svg
                            viewBox={`0 0 ${CHART_CONFIG.size} ${CHART_CONFIG.size}`}
                            className="w-full max-w-md text-foreground"
                        >
                            <RadarGrid levels={CHART_CONFIG.levels} />
                            <RadarAxes categories={categories} />
                            <RadarPolygon categories={categories} />
                            <RadarPoints categories={categories} />
                            <RadarLabels categories={categories} />
                        </svg>
                    </div>

                    {/* Skills List Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {categories.map((category) => (
                            <SkillsList key={category.name} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

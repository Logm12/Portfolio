'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { honors } from '@/data/projects';
import { Honor } from '@/types';

/** Individual award/honor card with large image display */
function HonorCard({ honor, index }: { honor: Honor; index: number }) {
    const hasImage = honor.image && honor.image !== '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card overflow-hidden group cursor-pointer flex flex-col"
        >
            {/* Image Container - Fixed height to ensure image displays */}
            <div className="relative w-full h-64 overflow-hidden bg-slate-800/30">
                {hasImage ? (
                    <Image
                        src={honor.image!}
                        alt={honor.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                        <span className="text-4xl text-muted">Award</span>
                    </div>
                )}

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {honor.date}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-pink-400 transition-colors line-clamp-2 mb-2">
                    {honor.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-cyan-400 font-medium mb-2">{honor.issuer}</p>

                {/* Description */}
                {honor.description && (
                    <p className="text-sm text-muted line-clamp-2 mt-auto">{honor.description}</p>
                )}
            </div>
        </motion.div>
    );
}

/**
 * Honors & Awards Section - Professional grid display
 *
 * Features:
 * - Large image cards with hover effects (h-64 = 256px fixed height)
 * - Gradient overlays for text readability
 * - Responsive grid layout
 * - Animation on scroll
 */
export function HonorsAwards() {
    // Don't render if no honors
    if (honors.length === 0) return null;

    return (
        <section id="honors" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text-pink mb-4">
                        Honors & Awards
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Recognition for academic excellence and competitive achievements
                    </p>
                </motion.div>

                {/* Awards Grid - Responsive */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {honors.map((honor, index) => (
                        <HonorCard key={honor.id} honor={honor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

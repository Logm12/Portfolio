'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutMeContent } from '@/data/projects';
import { Quote, Sparkles, Terminal, Code2 } from 'lucide-react';

interface Highlight {
    label: string;
    value: string;
}

function SectionHeader({ headline }: { headline: string }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold gradient-text-cyan mb-8 text-center md:text-left"
        >
            {headline}
        </motion.h2>
    );
}

function ProfileImage({ src }: { src: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0"
        >
            {/* Animated border/glow rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow-reverse" />
            <div className="absolute -inset-4 rounded-full border border-purple-500/30 animate-spin-slow dashed-border" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900/50 shadow-2xl glow-cyan">
                <Image
                    src={src}
                    alt="Profile"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                />
            </div>

            {/* Floating icons */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-10 bg-slate-900/80 p-2 rounded-xl border border-cyan-500/30 backdrop-blur-sm"
            >
                <Terminal className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-4 bottom-20 bg-slate-900/80 p-2 rounded-xl border border-purple-500/30 backdrop-blur-sm"
            >
                <Code2 className="w-6 h-6 text-purple-400" />
            </motion.div>
        </motion.div>
    );
}

function HighlightStats({ highlights }: { highlights: Highlight[] }) {
    return (
        <div className="grid grid-cols-3 gap-4 mt-8">
            {highlights.map((highlight, index) => (
                <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex flex-col items-center md:items-start p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                    <span className="text-xl md:text-2xl font-bold text-foreground">{highlight.value}</span>
                    <span className="text-xs text-muted text-center md:text-left">{highlight.label}</span>
                </motion.div>
            ))}
        </div>
    );
}

function QuoteBox({ quote }: { quote: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 glass-card border-l-4 border-cyan-500 relative overflow-hidden"
        >
            <div className="absolute top-2 right-4 opacity-10">
                <Quote size={40} />
            </div>
            <p className="text-muted italic relative z-10 font-medium">"{quote}"</p>
        </motion.div>
    );
}

export function AboutMe() {
    const { headline, profileImage, subtitle, paragraphs, highlights, quote } = aboutMeContent;

    return (
        <section id="about" className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Image (Desktop) / Top (Mobile) */}
                    <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-1">
                        <ProfileImage src={profileImage || '/placeholder-profile.jpg'} />
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:col-span-7 order-2 md:order-2 text-center md:text-left">
                        <SectionHeader headline={headline} />

                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                        >
                            {subtitle}
                        </motion.h3>

                        <div className="space-y-4 text-muted text-lg leading-relaxed">
                            {paragraphs.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        <HighlightStats highlights={highlights} />

                        {quote && <QuoteBox quote={quote} />}
                    </div>
                </div>
            </div>
        </section>
    );
}

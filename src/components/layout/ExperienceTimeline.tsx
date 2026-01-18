'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/projects';

// Skills mapping for each experience
const SKILLS_MAP: Record<string, string[]> = {
    viettel: ['Python', 'LLM', 'RAG', 'Quantization'],
    worldquant: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
};

/**
 * Experience Timeline - Theme aware vertical timeline
 */
export function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text-cyan mb-4">
                        Experience Timeline
                    </h2>
                    <p className="text-muted">My journey in data science and AI engineering</p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Gradient line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

                    {/* Timeline items */}
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Individual timeline item component
 */
function TimelineItem({
    experience,
    index,
}: {
    experience: (typeof experiences)[0];
    index: number;
}) {
    const skills = SKILLS_MAP[experience.id] || [];
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-start gap-8 mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
        >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 glow-purple">
                {experience.isActive && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                )}
            </div>

            {/* Content card */}
            <div
                className={`ml-16 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
            >
                <motion.div whileHover={{ scale: 1.02 }} className="glass-card-glow p-6">
                    {/* Period */}
                    <span className="text-cyan-400 font-mono text-sm">{experience.period}</span>

                    {/* Role */}
                    <h3 className="text-xl font-bold text-foreground mt-2">{experience.role}</h3>

                    {/* Company */}
                    <p className="text-purple-400 font-medium">{experience.company}</p>

                    {/* Description */}
                    <p className="text-muted mt-3 text-sm leading-relaxed">{experience.description}</p>

                    {/* Skills pills */}
                    <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

'use client';

import { motion } from 'framer-motion';

/**
 * Tech Stack categories based on ACTUAL technologies used in 3 projects:
 * - VDT_GraphRec_Pro: Python, FastAPI, PyTorch, Qdrant, PostgreSQL, React, TypeScript, Docker
 * - HFT_MLOps_System: Python, Kafka, MLflow, Feast, Streamlit, Docker, Redis
 * - Customer_Retention_CC: Python, CausalML, SHAP, React, Docker, PostgreSQL
 */

interface TechCategory {
    title: string;
    skills: { name: string; level: number; icon: string }[];
}

const TECH_CATEGORIES: TechCategory[] = [
    {
        title: 'Core Languages',
        skills: [
            { name: 'Python', level: 95, icon: '🐍' },
            { name: 'SQL', level: 85, icon: '🗄️' },
            { name: 'TypeScript', level: 75, icon: '💙' },
            { name: 'JavaScript', level: 70, icon: '⚡' },
        ],
    },
    {
        title: 'AI/ML Frameworks',
        skills: [
            { name: 'PyTorch', level: 90, icon: '🔥' },
            { name: 'Scikit-learn', level: 85, icon: '🤖' },
            { name: 'CausalML', level: 80, icon: '📊' },
            { name: 'SHAP', level: 75, icon: '📈' },
        ],
    },
    {
        title: 'Data Infrastructure',
        skills: [
            { name: 'PostgreSQL', level: 90, icon: '🐘' },
            { name: 'Qdrant', level: 85, icon: '🔍' },
            { name: 'Kafka', level: 80, icon: '📡' },
            { name: 'Redis', level: 75, icon: '🔴' },
        ],
    },
    {
        title: 'MLOps & DevOps',
        skills: [
            { name: 'Docker', level: 95, icon: '🐳' },
            { name: 'FastAPI', level: 90, icon: '⚡' },
            { name: 'MLflow', level: 85, icon: '📊' },
            { name: 'Feast', level: 70, icon: '🍽️' },
        ],
    },
];

/**
 * Tech Stack Section - Theme aware design
 */
export function TechStack() {
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
                        Tech Stack
                    </h2>
                    <p className="text-muted">Technologies used across my portfolio projects</p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {TECH_CATEGORIES.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-6"
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        delay={catIndex * 0.1 + skillIndex * 0.05}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Source note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-muted text-xs mt-8"
                >
                    * Proficiency based on actual usage in portfolio projects
                </motion.p>
            </div>
        </section>
    );
}

/**
 * Individual skill bar component
 */
function SkillBar({ skill, delay }: { skill: TechCategory['skills'][0]; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="space-y-2"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span>{skill.icon}</span>
                    <span className="text-muted text-sm">{skill.name}</span>
                </div>
                <span className="text-pink-400 text-sm font-medium">{skill.level}%</span>
            </div>
            <div className="h-2 glass-card rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay }}
                    className="h-full progress-gradient rounded-full"
                />
            </div>
        </motion.div>
    );
}

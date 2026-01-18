'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    index: number;
    onViewDetails: (project: Project) => void;
}

// Color schemes for different projects
const COLOR_SCHEMES = [
    { bg: 'bg-pink-500', icon: '🎬' },
    { bg: 'bg-blue-500', icon: '📈' },
    { bg: 'bg-purple-500', icon: '🎯' },
] as const;

/**
 * Project Card - Theme aware card with colored icon and hover effects
 */
export function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
    const scheme = COLOR_SCHEMES[index % COLOR_SCHEMES.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-glow p-6 cursor-pointer group"
            onClick={() => onViewDetails(project)}
        >
            {/* Icon */}
            <div className={`icon-square ${scheme.bg} text-2xl mb-4`}>{scheme.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-slate-700/50">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-muted hover:text-cyan-400 text-sm transition-colors"
                >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                </a>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewDetails(project);
                    }}
                    className="flex items-center gap-1 text-muted hover:text-pink-400 text-sm transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                    <span>Details</span>
                </button>
            </div>
        </motion.div>
    );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, FileText, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Project, ProjectMetric } from '@/types';
import { Button } from '@/components/ui/Button';

// ============================================================================
// TYPES
// ============================================================================

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

// ============================================================================
// SUB-COMPONENTS (Modular design for testability)
// ============================================================================

/** Modal backdrop with blur effect */
function ModalBackdrop({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        />
    );
}

/** Close button */
function CloseButton({ onClose }: { onClose: () => void }) {
    return (
        <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-slate-700/50 text-muted hover:text-foreground transition-colors z-10"
            aria-label="Close modal"
        >
            <X className="w-6 h-6" />
        </button>
    );
}

/** Metrics display grid */
function MetricsGrid({ metrics }: { metrics: ProjectMetric[] }) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
                <div
                    key={metric.label}
                    className="glass-card p-4 text-center"
                >
                    <p className="text-xl font-bold text-pink-400">{metric.value}</p>
                    <p className="text-xs text-muted">{metric.label}</p>
                </div>
            ))}
        </div>
    );
}

/** Architecture diagram or demo video placeholder */
function MediaSection({ project }: { project: Project }) {
    const hasArchitectureImage = project.architectureImage;
    const hasDemoVideo = project.demoVideo;

    if (hasDemoVideo) {
        return (
            <div className="aspect-video glass-card flex items-center justify-center overflow-hidden bg-black/20">
                <video
                    src={project.demoVideo}
                    controls
                    className="w-full h-full object-contain"
                    poster={hasArchitectureImage}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return (
        <div className="aspect-video glass-card flex items-center justify-center overflow-hidden">
            {hasArchitectureImage ? (
                <Image
                    src={project.architectureImage!}
                    alt={`${project.title} architecture`}
                    width={640}
                    height={360}
                    className="object-contain w-full h-full p-4"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            ) : (
                <div className="text-center p-8">
                    <p className="text-muted mb-4">Demo Video</p>
                    <p className="text-muted text-sm">Video demonstration coming soon</p>
                </div>
            )}
        </div>
    );
}

/** Tech stack badges */
function TechStackBadges({ techStack }: { techStack: Project['techStack'] }) {
    return (
        <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <span
                        key={tech.name}
                        className="px-3 py-2 glass-card text-muted rounded-lg text-sm"
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

/** Project links (GitHub, Demo, Report) */
function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap gap-3">
            {project.githubUrl && project.githubUrl !== '#' && (
                <Button
                    variant="secondary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center gap-2"
                >
                    <Github className="w-4 h-4" />
                    View on GitHub
                </Button>
            )}
            {project.demoUrl && (
                <Button
                    variant="primary"
                    glow
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex items-center gap-2"
                >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                </Button>
            )}
            {project.reportUrl && (
                <Button
                    variant="ghost"
                    onClick={() => window.open(project.reportUrl, '_blank')}
                    className="flex items-center gap-2"
                >
                    <FileText className="w-4 h-4" />
                    Full Report
                </Button>
            )}
        </div>
    );
}

/** Project tags */
function ProjectTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

/** Problem section */
function ProblemSection({ problem }: { problem: string }) {
    return (
        <div>
            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full" />
                The Problem
            </h4>
            <p className="text-muted leading-relaxed">{problem}</p>
        </div>
    );
}

/** Solution section */
function SolutionSection({ solution }: { solution: string }) {
    return (
        <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                The Solution
            </h4>
            <p className="text-muted leading-relaxed">{solution}</p>
        </div>
    );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Full-screen Project Modal - Theme aware design
 *
 * Displays:
 * - Architecture diagram / demo video
 * - Metrics grid (for spotlight projects)
 * - Tech stack badges
 * - Problem/Solution narrative
 * - Links to GitHub, demo, report
 *
 * Refactored for:
 * - Modularity: Each section is a separate component
 * - Testability: Props-based, isolated rendering
 * - Extensibility: Easy to add new sections
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    const hasMetrics = project.metrics && project.metrics.length > 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <ModalBackdrop onClose={onClose} />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-8 lg:inset-16 bg-background rounded-2xl z-50 overflow-hidden border border-slate-700/50 shadow-2xl"
                    >
                        <CloseButton onClose={onClose} />

                        {/* Content */}
                        <div className="h-full overflow-y-auto p-6 md:p-10">
                            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
                                {/* Left Column - Media and Tech */}
                                <div className="space-y-6">
                                    <MediaSection project={project} />

                                    {/* Metrics (if available) */}
                                    {hasMetrics && <MetricsGrid metrics={project.metrics!} />}

                                    <TechStackBadges techStack={project.techStack} />
                                    <ProjectLinks project={project} />
                                </div>

                                {/* Right Column - Details */}
                                <div className="space-y-8">
                                    {/* Title and tags */}
                                    <div>
                                        <ProjectTags tags={project.tags} />
                                        <h2 className="text-3xl font-bold text-foreground">{project.title}</h2>
                                        <p className="text-muted mt-4 leading-relaxed">
                                            {project.fullDescription || project.description}
                                        </p>
                                    </div>

                                    <ProblemSection problem={project.problem} />
                                    <SolutionSection solution={project.solution} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

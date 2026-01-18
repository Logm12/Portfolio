'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

/**
 * Featured Projects Section - Theme aware grid layout
 */
export function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = useCallback((project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    }, []);

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text-pink mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Interactive gallery showcasing AI/ML projects that push the boundaries of what&apos;s possible
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onViewDetails={handleViewDetails}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}

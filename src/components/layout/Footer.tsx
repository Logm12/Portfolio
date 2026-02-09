'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/projects';

/**
 * Footer - Simple signature with social links
 */
export function Footer() {
    const iconMap: Record<string, React.ReactNode> = {
        github: <Github className="w-5 h-5" />,
        linkedin: <Linkedin className="w-5 h-5" />,
        mail: <Mail className="w-5 h-5" />,
    };

    return (
        <footer className="py-16 px-6 border-t border-slate-800/50">
            <div className="max-w-4xl mx-auto">
                {/* Let's Connect Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text-cyan mb-4">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-muted">Ready to discuss your next AI project?</p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mb-12"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target={link.name !== 'Email' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 glass-card text-muted hover:text-cyan-400 hover:glow-cyan transition-all"
                            aria-label={link.name}
                        >
                            {iconMap[link.icon]}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Simple Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-muted text-sm">
                        &copy; 2025 Mac Pham Thien Long. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

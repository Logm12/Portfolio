'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TypewriterEffect } from './TypewriterEffect';
import { useTypewriter } from '@/hooks/useTypewriter';
import { typewriterPhrases } from '@/data/projects';
import { Brain, Cpu, Zap, ChevronDown, LucideIcon } from 'lucide-react';

interface HeroIcon {
    Icon: LucideIcon;
    label: string;
    color: string;
}

const HERO_ICONS: readonly HeroIcon[] = [
    { Icon: Brain, label: 'Deep Learning', color: 'from-pink-500 to-purple-500' },
    { Icon: Cpu, label: 'System Design', color: 'from-cyan-500 to-blue-500' },
    { Icon: Zap, label: 'High Performance', color: 'from-purple-500 to-pink-500' },
] as const;

const ANIMATION_CONFIG = {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    scaleIn: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    delays: {
        name: 0.2,
        subtitle: 0.4,
        icons: 0.6,
        role: 0.9,
        typewriter: 1.1,
        buttons: 1.3,
        scroll: 1.5,
    },
} as const;

function HeroName() {
    return (
        <motion.h1
            {...ANIMATION_CONFIG.scaleIn}
            transition={{ delay: ANIMATION_CONFIG.delays.name, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
            <span className="gradient-text-pink">MAC PHAM</span>
            <br />
            <span className="gradient-text-pink">THIEN LONG</span>
        </motion.h1>
    );
}

function HeroSubtitle() {
    return (
        <motion.div
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ delay: ANIMATION_CONFIG.delays.subtitle }}
            className="space-y-2"
        >
            <p className="text-xl md:text-2xl font-medium text-foreground">Welcome to My Portfolio</p>
            <p className="text-muted">Exploring AI, ML & Data Science</p>
        </motion.div>
    );
}

function HeroIconItem({ icon, index }: { icon: HeroIcon; index: number }) {
    const { Icon, label, color } = icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: ANIMATION_CONFIG.delays.icons + 0.1 + index * 0.1 }}
            className="flex flex-col items-center gap-2"
        >
            <div className={`icon-circle bg-gradient-to-br ${color} p-0.5`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" />
                </div>
            </div>
            <span className="text-xs text-muted">{label}</span>
        </motion.div>
    );
}

function HeroIconRow() {
    return (
        <motion.div
            {...ANIMATION_CONFIG.slideUp}
            transition={{ delay: ANIMATION_CONFIG.delays.icons }}
            className="flex justify-center gap-6 py-6"
        >
            {HERO_ICONS.map((icon, index) => (
                <HeroIconItem key={icon.label} icon={icon} index={index} />
            ))}
        </motion.div>
    );
}

function HeroRole() {
    return (
        <motion.div
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ delay: ANIMATION_CONFIG.delays.role }}
            className="space-y-2"
        >
            <p className="text-foreground">AI Engineer</p>
            <p className="text-sm text-muted">Building intelligent systems • Python • NLP • Deep Learning</p>
        </motion.div>
    );
}

function HeroTypewriter({ text }: { text: string }) {
    return (
        <motion.div
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ delay: ANIMATION_CONFIG.delays.typewriter }}
            className="glass-card-glow p-4 max-w-xl mx-auto"
        >
            <div className="text-sm text-muted italic">
                &ldquo;
                <TypewriterEffect text={text} className="inline" />
                &rdquo;
            </div>
        </motion.div>
    );
}

function HeroCTAButtons({ onViewProjects }: { onViewProjects: () => void }) {
    const handleDownloadCV = () => window.open('/assets/resume.pdf', '_blank');

    return (
        <motion.div
            {...ANIMATION_CONFIG.slideUp}
            transition={{ delay: ANIMATION_CONFIG.delays.buttons }}
            className="flex flex-wrap justify-center gap-4 pt-4"
        >
            <Button variant="primary" glow onClick={onViewProjects}>
                View Projects
            </Button>
            <Button variant="secondary" onClick={handleDownloadCV}>
                Download CV
            </Button>
        </motion.div>
    );
}

function ScrollIndicator({ onClick }: { onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: ANIMATION_CONFIG.delays.scroll }}
            className="mt-16"
        >
            <motion.button
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                onClick={onClick}
                className="p-3 glass-card rounded-full transition-all hover:glow-purple"
                aria-label="Scroll to projects"
            >
                <ChevronDown className="w-6 h-6 text-muted hover:text-pink-400 transition-colors" />
            </motion.button>
        </motion.div>
    );
}

export function HeroSection() {
    const { displayText } = useTypewriter(typewriterPhrases, 60, 40, 1500);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8 flex flex-col items-center"
            >
                <HeroName />
                <HeroSubtitle />
                <HeroIconRow />
                <HeroRole />
                <HeroTypewriter text={displayText} />
                <HeroCTAButtons onViewProjects={scrollToProjects} />
                <ScrollIndicator onClick={scrollToProjects} />
            </motion.div>
        </section>
    );
}

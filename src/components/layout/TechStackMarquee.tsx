'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { techStackItems } from '@/data/projects';

// Map tech names to their icon paths (all real images now)
const ICON_MAP: Record<string, string> = {
    Kafka: '/icons/kafka.png',
    React: '/icons/react.png',
    PostgreSQL: '/icons/postgresql.png',
    Qdrant: '/icons/qdrant.png',
    MLflow: '/icons/mlflow.png',
    Python: '/icons/python.png',
    Docker: '/icons/docker.png',
    Kubernetes: '/icons/kubernetes.png',
    FastAPI: '/icons/fastapi.png',
    PyTorch: '/icons/pytorch.png',
    Redis: '/icons/redis.png',
    TypeScript: '/icons/typescript.png',
};

/**
 * Tech Stack Marquee - Infinite scrolling tech icons with theme awareness
 */
export function TechStackMarquee() {
    // Duplicate items for seamless infinite scroll
    const items = [...techStackItems, ...techStackItems];

    return (
        <section className="py-8 overflow-hidden border-y border-slate-700/50 marquee-bg">
            <motion.div
                className="flex gap-16 whitespace-nowrap items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 25,
                        ease: 'linear',
                    },
                }}
            >
                {items.map((tech, index) => (
                    <TechIcon key={`${tech.name}-${index}`} name={tech.name} />
                ))}
            </motion.div>
        </section>
    );
}

/**
 * Tech icon component - larger size (48px) with hover effects
 */
function TechIcon({ name }: { name: string }) {
    const imagePath = ICON_MAP[name];

    if (imagePath) {
        return (
            <motion.div
                className="relative w-12 h-12 flex-shrink-0 cursor-pointer"
                title={name}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Image
                    src={imagePath}
                    alt={`${name} logo`}
                    fill
                    sizes="48px"
                    className="object-contain drop-shadow-lg"
                />
            </motion.div>
        );
    }

    return (
        <span className="text-4xl cursor-pointer hover:scale-110 transition-transform" title={name}>
            💻
        </span>
    );
}

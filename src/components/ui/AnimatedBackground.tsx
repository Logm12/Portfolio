'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

// Configuration constants
const CONNECTION_DISTANCE = 180;
const NODE_DENSITY = 35;
const MAX_NODES = 50;

/**
 * Animated background with polygon mesh / neural network effect
 * Adapts to light/dark mode
 */
export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const nodesRef = useRef<Node[]>([]);
    const animationRef = useRef<number>();
    const [isDark, setIsDark] = useState(true);

    // Theme detection
    useEffect(() => {
        const checkTheme = () => {
            const isLight = document.documentElement.classList.contains('light');
            setIsDark(!isLight);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    // Initialize nodes
    const initializeNodes = useCallback((width: number, height: number) => {
        const nodeCount = Math.min(MAX_NODES, Math.floor(width / NODE_DENSITY));
        nodesRef.current = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 2 + 1,
        }));
    }, []);

    // Animation effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        initializeNodes(canvas.width, canvas.height);
        window.addEventListener('resize', setCanvasSize);

        // Theme-based opacity settings
        const lineOpacity = isDark ? 0.4 : 0.15;
        const nodeOpacity = isDark ? 1 : 0.4;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const nodes = nodesRef.current;

            // Draw connections
            drawConnections(ctx, nodes, lineOpacity);

            // Update and draw nodes
            drawNodes(ctx, nodes, canvas.width, canvas.height, nodeOpacity);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDark, initializeNodes]);

    // Background style based on theme
    const bgStyle = isDark
        ? { background: 'linear-gradient(180deg, #050510 0%, #0f0f1a 50%, #050510 100%)' }
        : { background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)' };

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={bgStyle}
            aria-hidden="true"
        />
    );
}

/**
 * Draw connections between nodes
 */
function drawConnections(
    ctx: CanvasRenderingContext2D,
    nodes: Node[],
    opacityMultiplier: number
) {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
                const opacity = (1 - distance / CONNECTION_DISTANCE) * opacityMultiplier;

                const gradient = ctx.createLinearGradient(
                    nodes[i].x,
                    nodes[i].y,
                    nodes[j].x,
                    nodes[j].y
                );
                gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity})`);
                gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);

                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

/**
 * Draw and update nodes
 */
function drawNodes(
    ctx: CanvasRenderingContext2D,
    nodes: Node[],
    width: number,
    height: number,
    opacityMultiplier: number
) {
    const colors = ['#06b6d4', '#8b5cf6', '#ec4899'];

    nodes.forEach((node, index) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        const colorIndex = index % 3;
        const color = colors[colorIndex];

        // Draw glow
        const glowRadius = node.radius * 4;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
        gradient.addColorStop(0, `${color}${Math.round(0.8 * opacityMultiplier * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${color}${Math.round(0.3 * opacityMultiplier * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${color}00`);

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw solid center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    });
}

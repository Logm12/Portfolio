/**
 * Portfolio Content Data
 * Centralized data file for all portfolio content
 */

import { Project, Experience, SocialLink, TechItem, Honor, SkillCategory } from '@/types';

/**
 * Technology Stack Items
 * Displayed in the marquee section
 */
export const techStackItems: TechItem[] = [
    { name: 'Docker', category: 'deployment' },
    { name: 'Kubernetes', category: 'deployment' },
    { name: 'FastAPI', category: 'deployment' },
    { name: 'PyTorch', category: 'ml' },
    { name: 'Kafka', category: 'data' },
    { name: 'React', category: 'core' },
    { name: 'PostgreSQL', category: 'data' },
    { name: 'Qdrant', category: 'data' },
    { name: 'MLflow', category: 'deployment' },
    { name: 'Redis', category: 'data' },
    { name: 'Python', category: 'core' },
    { name: 'TypeScript', category: 'core' },
];

/**
 * Featured Projects
 */
export const projects: Project[] = [
    {
        id: 'viettel-llm',
        title: 'Viettel AI Coding Assistant',
        description:
            'Edge-optimized code completion running on CPU with 170ms latency. Privacy-first, zero cloud dependency.',
        fullDescription:
            'Built an end-to-end edge AI system for secure code completion at Viettel Networks. Uses fill-in-the-middle (FIM) training, QLoRA fine-tuning, DPO alignment, and GGUF quantization to run locally on CPU. Integrated with VS Code via OpenAI-compatible API.',
        tags: ['LLM', 'On-device AI', 'Quantization', 'Viettel Internship'],
        image: '/assets/architecture/viettel-llm.svg',
        demoVideo: '/assets/demo-ai-auto-complete.mp4',
        techStack: [
            { name: 'Qwen2.5-Coder-0.5B' },
            { name: 'QLoRA + DPO' },
            { name: 'GGUF Q4_K_M' },
            { name: 'llama-cpp-python' },
            { name: 'FastAPI' },
            { name: 'Docker' },
        ],
        metrics: [
            { label: 'Inference Latency', value: '20-50ms' },
            { label: 'Model Size', value: '~400MB' },
            { label: 'Infrastructure', value: 'CPU Only' },
            { label: 'API Compatible', value: 'OpenAI' },
        ],
        problem:
            'Cloud-based code completion (GitHub Copilot) requires constant internet, has 200-500ms latency, raises privacy concerns for enterprise code, and incurs $10-20/month subscription costs.',
        solution:
            'Fine-tuned Qwen2.5-Coder with QLoRA on 300K+ code files, aligned with DPO, quantized to 4-bit GGUF. Deployed as OpenAI-compatible API server. Achieves 20-50ms latency on CPU, works offline, zero external dependencies.',
        githubUrl: 'https://github.com/Logm12/AI-Tab-Autocomplete',
        isSpotlight: true,
    },
    {
        id: 'graphrec',
        title: 'Graph-Based Movie RecSys',
        description:
            'Real-time movie recommendation with <50ms latency using LightGCN and Vector Database. Supports 610 users with cold-start handling.',
        fullDescription:
            'Implemented graph neural network for recommendation, capturing multi-hop neighborhood information. Vector similarity search with Qdrant for sub-100ms responses.',
        tags: ['Deep Learning', 'Microservices', 'High Performance'],
        image: '/assets/architecture/Movie-rec-diagram.png',
        architectureImage: '/assets/architecture/Movie-rec-diagram.png',
        techStack: [
            { name: 'LightGCN (PyTorch)' },
            { name: 'Qdrant Vector DB' },
            { name: 'FastAPI' },
            { name: 'React + Mantine' },
            { name: 'PostgreSQL' },
            { name: 'Docker' },
        ],
        metrics: [
            { label: 'Latency', value: '<50ms' },
            { label: 'Users', value: '610' },
            { label: 'NDCG@10', value: '0.42' },
        ],
        problem:
            'Traditional recommendation systems struggle with user-item interaction sparsity and fail to capture high-order collaborative signals. Cold-start users receive poor recommendations.',
        solution:
            'Implemented LightGCN to learn user-item embeddings through graph convolution. Used Qdrant for sub-100ms vector similarity search. Added genre-based cold-start support for new users.',
        githubUrl: 'https://github.com/Logm12/movie_recommendation_system',
    },
    {
        id: 'hft-mlops',
        title: 'Real-time Algo Trading MLOps',
        description:
            'High-frequency trading pipeline with automated drift detection and Feature Store. Ensemble ML models for market prediction.',
        fullDescription:
            'End-to-end MLOps system for cryptocurrency trading with real-time Kafka streaming, Feast feature store, and MLflow model versioning.',
        tags: ['FinTech', 'Event-Driven', 'Kafka'],
        image: '/assets/architecture/HFT_archtechture_diagrams.png',
        architectureImage: '/assets/architecture/HFT_archtechture_diagrams.png',
        techStack: [
            { name: 'XGBoost + LightGBM' },
            { name: 'Apache Kafka' },
            { name: 'Feast + Redis' },
            { name: 'MLflow' },
            { name: 'TimescaleDB' },
            { name: 'Streamlit' },
        ],
        metrics: [
            { label: 'Throughput', value: '500 msg/s' },
            { label: 'Feature Latency', value: '<5ms' },
            { label: 'Drift Detection', value: 'Real-time' },
        ],
        problem:
            'Financial markets are volatile; models degrade quickly. Manual retraining is slow, and feature inconsistency between training and serving causes prediction errors.',
        solution:
            'Built event-driven architecture with Kafka for real-time streaming. Implemented Feast Feature Store for consistent feature serving. Automated model versioning with MLflow and drift detection.',
        githubUrl: 'https://github.com/Logm12/HLF_MLOps',
    },
    {
        id: 'customer-retention',
        title: 'Customer Retention Command Center',
        description:
            'Marketing ROI optimization using uplift modeling (T-Learner) and explainable AI. Identifies persuadable customers for targeted campaigns.',
        fullDescription:
            'Causal inference platform that segments customers into Persuadables, Sure Things, Lost Causes, and Sleeping Dogs. Maximizes campaign ROI by targeting only persuadable segments.',
        tags: ['Causal Inference', 'Business Intelligence', 'React'],
        image: '/assets/architecture/Customer_Architechture Diagram.png',
        architectureImage: '/assets/architecture/Customer_Architechture Diagram.png',
        techStack: [
            { name: 'LightGBM T-Learner' },
            { name: 'SHAP (Explainable AI)' },
            { name: 'FastAPI' },
            { name: 'React + Ant Design' },
            { name: 'Polars' },
            { name: 'Docker' },
        ],
        metrics: [
            { label: 'Qini Score', value: '33.79' },
            { label: 'Incremental ROI', value: '$19,122' },
            { label: 'Segments', value: '4 Types' },
        ],
        problem:
            'Traditional churn prediction wastes budget on customers who would stay anyway or are impossible to retain. Marketing campaigns have low ROI due to poor targeting.',
        solution:
            'Applied causal inference with T-Learner to estimate individual treatment effects. Segmented customers into 4 groups: Persuadables (target), Sure Things (ignore), Lost Causes (ignore), Sleeping Dogs (avoid).',
        githubUrl: 'https://github.com/Logm12/CustomerChurnGraph',
    },

    {
        id: 'emotion-music-gen',
        title: 'Emotion-Driven Music Generation',
        description:
            'Generative AI system that converts Vietnamese text into MIDI melodies based on detected emotions.',
        fullDescription:
            'Research and development of an end-to-end model for text-to-music generation. Utilized PhoBERT (state-of-the-art for Vietnamese) for emotion classification with ~90% accuracy, integrated with LSTM/Bi-LSTM networks for melody generation contextually aligned with emotions. Applied data augmentation on the VGMIDI dataset to enhance model diversity.',
        tags: ['NLP', 'Generative AI', 'Research'],
        image: '/assets/architecture/AI Music Gen.png',
        architectureImage: '/assets/architecture/AI Music Gen.png',
        techStack: [
            { name: 'PhoBERT' },
            { name: 'LSTM/Bi-LSTM' },
            { name: 'Python' },
            { name: 'Data Augmentation' },
            { name: 'PyTorch' },
        ],
        metrics: [
            { label: 'Emotion Accuracy', value: '90.0%' },
            { label: 'Architecture', value: 'End-to-End' },
            { label: 'Dataset', value: 'VGMIDI + Custom' },
        ],
        problem:
            'Existing text-to-music systems often lack emotional depth or fail to support specific languages like Vietnamese effectively.',
        solution:
            'Combined PhoBERT for robust emotion extraction from Vietnamese text with Bi-LSTM sequence modeling to generate emotionally resonant musical patterns.',
        githubUrl: 'https://github.com/Logm12/AI-Music-Generation',
    },

    {
        id: 'student-performance-clustering',
        title: 'Student Performance Clustering',
        description:
            'Automated student segmentation based on academic performance using K-means clustering.',
        fullDescription:
            'Data science project applying unsupervised learning to categorize student profiles based on grades and learning behaviors. Process includes: data cleaning, elbow method for optimal K determination, K-means implementation, and data visualization to support personalized educational roadmaps.',
        tags: ['Data Science', 'Machine Learning', 'Academic'],
        image: '/assets/architecture/Kmeans.png',
        architectureImage: '/assets/architecture/Kmeans.png',
        techStack: [
            { name: 'Python' },
            { name: 'K-Means' },
            { name: 'Pandas' },
            { name: 'Matplotlib' },
            { name: 'Scikit-learn' },
        ],
        metrics: [
            { label: 'Algorithm', value: 'K-Means' },
            { label: 'Role', value: 'Team Leader' },
            { label: 'Outcome', value: 'Automated Profiling' },
        ],
        problem:
            'Schools lack automated tools to identify student groups with similar learning patterns for targeted intervention.',
        solution:
            'Applied K-means clustering to group students into distinct segments, enabling educators to design tailored support strategies.',
        githubUrl: 'https://github.com/Logm12/student_performance_clustering',
    },
];

/**
 * Work Experience Timeline
 */
export const experiences: Experience[] = [
    {
        id: 'viettel',
        period: '11/2025-12/2025',
        company: 'Viettel Networks',
        role: 'AI Engineer Intern',
        description:
            'Deploying LLM on-premise, model quantization (GGUF), and building RAG systems for enterprise document retrieval.',
        isActive: true,
        skills: ['LLM', 'Quantization', 'RAG', 'FastAPI'],
    },
    {
        id: 'worldquant',
        period: '07/2023 - Present',
        company: 'WorldQuant BRAIN',
        role: 'Research Consultant',
        description:
            'Built 600+ quantitative alpha models using statistical arbitrage and machine learning techniques for financial markets.',
        isActive: true,
        skills: ['Python', 'Statistics', 'Time-series', 'Backtesting'],
    },
];

/**
 * Social Links
 */
export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Logm12', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mạc-phạm-thiên-long-aa3091267', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:longmac321@gmail.com', icon: 'mail' },
];

/**
 * Honors and Awards
 */
export const honors: Honor[] = [
    {
        id: 'viettel-award',
        title: 'National Finals of the MOS World Championship 2025',
        issuer: 'Viettel 2025',
        date: '01/07/2025',
        image: '/assets/awards/2nd National Contest.png',
        description: 'Competition for office IT solutions',
    },
    {
        id: 'sinh-vien-5-tot',
        title: 'Student of 5 Merits',
        issuer: 'University',
        date: '28/10/2025',
        image: '/assets/awards/5 Merits.png',
        description: 'Excellence in academics and extracurriculars',
    },
    {
        id: 'inter_olym',
        title: 'Vietnam Representative at International Olympiad of Financial Security 2025',
        issuer: 'Russia',
        date: '03/10/2025',
        image: '/assets/awards/IOFS.png',
        description: 'Represented Vietnam in the final round in Krasnoyarsk, Russia',
    },
];

/**
 * Skill Categories for Radar Chart
 */
export const skillCategories: SkillCategory[] = [
    {
        name: 'AI/ML Core',
        level: 90,
        skills: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas'],
    },
    {
        name: 'Data Engineering',
        level: 80,
        skills: ['SQL', 'Kafka', 'PostgreSQL', 'Redis'],
    },
    {
        name: 'LLM & NLP',
        level: 85,
        skills: ['HuggingFace', 'LangChain', 'QLoRA', 'GGUF'],
    },
    {
        name: 'Deployment/Ops',
        level: 85,
        skills: ['Docker', 'FastAPI', 'MLflow', 'Kubernetes'],
    },
    {
        name: 'Quantitative',
        level: 75,
        skills: ['Time-series', 'Backtesting', 'Statistics', 'Financial ML'],
    },
];

/**
 * Typewriter Phrases for Hero Section
 */
export const typewriterPhrases = [
    'Initializing System...',
    'Loading Models...',
    'Building Scalable Solutions...',
    'Hello, I build end-to-end AI systems.',
];

/**
 * About Me Section Content
 */
export const aboutMeContent = {
    headline: 'About Me',
    profileImage: '/assets/info/person.jpg',
    subtitle: 'AI/ML Engineer • Problem Solver • Continuous Learner',
    paragraphs: [
        'I am an aspiring AI Engineer with a strong foundation in deep learning and system optimization. I have a proven track record of bridging the gap between research and production, notably in deploying high-performance LLMs on edge devices and developing scalable quantitative models. I am also passionate about MLOps and high-performance computing, seeking to leverage technical expertise to build impactful, data-driven solutions in a world-class engineering environment.'
    ],
    highlights: [
        { label: 'WorldQuant', value: '600+ Alpha Models' },
        { label: 'Viettel', value: 'Edge AI Deployment' },
        { label: 'Focus', value: 'Production-Ready ML' },
    ],
};

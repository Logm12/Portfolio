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
        id: 'car-agent-function-call',
        title: 'Intelligent Vehicle Agent with Function Calling',
        description:
            'A LangGraph-based vehicle assistant deploying registry-validator-executor logic, utilizing NVIDIA NIM Llama Guard 3 for safety moderation.',
        fullDescription:
            'Developed a vehicle assistant using LangGraph and NVIDIA NIM. Designed a registry-validator-executor pattern where Pydantic checks inputs at the validator layer and connection errors are managed in the executor. Implemented the vivi-brain-bench framework to validate 20 control tools across 90 tasks under strict consistency metrics, achieving a 95.56% tool execution success rate. Configured safety gates using Llama Guard 3 and integrated Mem0 memory with local Qdrant databases.',
        tags: ['LangGraph', 'NVIDIA NIM', 'Llama Guard 3', 'Mem0', 'Qdrant', 'AI Agents'],
        image: '/assets/architecture/vinsmart-car-agent.svg',
        techStack: [
            { name: 'LangGraph' },
            { name: 'NVIDIA NIM' },
            { name: 'Llama Guard 3' },
            { name: 'Mem0 + Qdrant' },
            { name: 'FastAPI' },
            { name: 'Next.js' },
        ],
        metrics: [
            { label: 'Tool Success Rate', value: '95.56%' },
            { label: 'Classification Accuracy', value: '100% (Safety)' },
            { label: 'Pass3 Rate (Base Tasks)', value: '77.78%' },
            { label: 'Control Tools', value: '20 Tools' },
        ],
        problem:
            'Traditional in-car assistants fail to execute complex control tasks reliably, lack safety guardrails against malicious or out-of-scope instructions, and do not persist driver-specific preferences.',
        solution:
            'Built a multi-agent system with validation and executor blocks, adding human-in-the-loop gates for high-risk actions. Memory is persisted per-driver utilizing vector database search.',
        githubUrl: 'https://github.com/Logm12/car-agent-function-call',
        isSpotlight: true,
    },
    {
        id: 'thesis-financial-analyzer',
        title: 'Multi-Agent Financial Analysis System',
        description:
            'A multi-agent workflow featuring a query router, a ChromaDB retriever, and a sandboxed Python execution environment to parse financial reports.',
        fullDescription:
            'Orchestrated a multi-agent LangGraph workflow featuring a query router, a ChromaDB retriever, and a sandboxed Python execution environment. Built an asynchronous document extraction pipeline using FastAPI, PyMuPDF, and OCR (Pytesseract, EasyOCR). Measured and optimized system performance using RAGAS on a 200-sample benchmark, achieving over 93% Faithfulness and 95% Answer Relevance.',
        tags: ['LangGraph', 'ChromaDB', 'FastAPI', 'RAGAS', 'React', 'Docker'],
        image: '/assets/architecture/thesis-financial.svg',
        techStack: [
            { name: 'LangGraph' },
            { name: 'FastAPI' },
            { name: 'ChromaDB' },
            { name: 'Redis' },
            { name: 'React' },
            { name: 'Docker' },
        ],
        metrics: [
            { label: 'Faithfulness', value: '93%+' },
            { label: 'Answer Relevance', value: '95%+' },
            { label: 'Benchmark size', value: '200 samples' },
        ],
        problem:
            'Extracting and calculating metrics from multi-page financial PDFs is prone to hallucinations and requires complex calculations that standard RAG systems cannot calculate.',
        solution:
            'Created specialized agents (Router, Retriever, Coder) to delegate tasks. The Coder agent writes and executes Python calculations locally inside a sandbox with automatic compiler traceback feedback.',
        githubUrl: 'https://github.com/Logm12/Thesis',
    },
    {
        id: 'edupilot',
        title: 'EduPilot: Large-Scale AI Teaching Assistant',
        description:
            'A Socratic tutoring agentic system supporting 9,000+ students, built with Spring Boot, Next.js, FastAPI, gRPC, and PostgreSQL.',
        fullDescription:
            'Designed and scaled a Socratic tutoring agentic system supporting 9,000+ students, optimizing resource load from 1 TA per 1,800 students. Reduced response latency to under 1.5 seconds using advanced RAG and a Redis-based semantic cache that intercepted 30%–50% of duplicate queries. Engineered dual-stage guardrails achieving 92%–95% intent classification accuracy. Implemented a data-privacy gateway to redact PII and integrated a graceful fallback system for human TA escalation.',
        tags: ['gRPC', 'Spring Boot', 'LangGraph', 'Next.js', 'Redis', 'Semantic Cache'],
        image: '/assets/architecture/edupilot.svg',
        techStack: [
            { name: 'Spring Boot' },
            { name: 'LangGraph' },
            { name: 'gRPC' },
            { name: 'Next.js' },
            { name: 'Redis Semantic Cache' },
            { name: 'pgvector' },
        ],
        metrics: [
            { label: 'Scale Support', value: '9,000+ Students' },
            { label: 'Response Latency', value: '<1.5s' },
            { label: 'Cache Intercept', value: '30%-50%' },
            { label: 'Intent Accuracy', value: '92%-95%' },
        ],
        problem:
            'Teaching assistants are overwhelmed by repetitive academic and administrative queries, causing response times to delay up to 2-3 days.',
        solution:
            'Developed a multi-agent system with semantic caching and gRPC interfaces, automating academic queries and forwarding complex cases to human TAs.',
        githubUrl: 'https://github.com/Logm12/A20-App-128',
    },
    {
        id: 'viettel-llm',
        title: 'Viettel AI Coding Assistant',
        description:
            'Edge-optimized code completion running on CPU with 170ms latency. Privacy-first, zero cloud dependency.',
        fullDescription:
            'Built an end-to-end edge AI system for secure code completion at Viettel Networks. Uses fill-in-the-middle (FIM) training, QLoRA fine-tuning, DPO alignment, and GGUF quantization to run locally on CPU. Integrated with VS Code via OpenAI-compatible API.',
        tags: ['LLM', 'On-device AI', 'Quantization', 'Viettel Internship'],
        image: '/assets/architecture/viettel-llm.svg',
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
            'Cloud-based code completion requires internet, has higher latency, raises privacy concerns for enterprise code, and incurs subscription costs.',
        solution:
            'Fine-tuned Qwen2.5-Coder with QLoRA on 300K+ code files, aligned with DPO, quantized to 4-bit GGUF. Deployed as OpenAI-compatible API server. Achieves 20-50ms latency on CPU, works offline, zero external dependencies.',
        githubUrl: 'https://github.com/Logm12/AI-Tab-Autocomplete',
    },
    {
        id: 'reefer-logistics',
        title: 'Reefer Logistics Supply Chain Optimization Model',
        description:
            'An MIQP optimization model for Vietnam’s domestic reefer logistics market, resolving vehicle routing and perishability constraints.',
        fullDescription:
            'Formulated a Mixed-Integer Quadratic Programming (MIQP) optimization model for Vietnam’s domestic reefer logistics market, resolving vehicle routing, cold storage selection, and perishability loss constraints. Linearized binary-continuous variable interactions in model constraints to enable efficient solving via Gurobi. Derived an optimal network that cut costs to 257.38M VND (saving 20–35% over decentralized baselines).',
        tags: ['Optimization', 'MIQP', 'Gurobi', 'Supply Chain', 'Python'],
        image: '/assets/architecture/reefer-logistics.svg',
        techStack: [
            { name: 'Python' },
            { name: 'Gurobi' },
            { name: 'MIQP' },
            { name: 'Supply Chain Simulation' },
        ],
        metrics: [
            { label: 'Cost Reduction', value: '20%-35%' },
            { label: 'Total Cost', value: '257.38M VND' },
            { label: 'On-Time Delivery', value: '100%' },
        ],
        problem:
            'Vietnam\'s domestic cold chain logistics suffer from fragmented storage, underutilized vehicles, and poor route planning, which drives up operational costs and product spoilage.',
        solution:
            'Formulated an optimization model integrating vehicle routing, cold storage selection, delivery timing, and product quality degradation into a single solvable MIQP objective.',
    },
    {
        id: 'fire-detection',
        title: 'Fire and Smoke Detection System',
        description:
            'A hybrid safety-critical fire detection system combining hardware sensor arrays with real-time computer vision on a Raspberry Pi.',
        fullDescription:
            'Designed and built a hybrid fire detection system combining hardware sensor arrays (temperature, smoke MQ-2, flame) with real-time computer vision on a Raspberry Pi. Trained and evaluated custom YOLOv5 models on a Roboflow dataset of 2,427 fire/smoke images, achieving 85.5% mAP@0.5. Conducted comparative benchmarking of model variants under low-compute edge constraints.',
        tags: ['YOLOv5', 'Raspberry Pi', 'Roboflow', 'Embedded Systems', 'Computer Vision'],
        image: '/assets/architecture/fire-detection.svg',
        techStack: [
            { name: 'YOLOv5' },
            { name: 'Roboflow' },
            { name: 'Google Colab' },
            { name: 'Raspberry Pi 4' },
            { name: 'Embedded Sensors' },
        ],
        metrics: [
            { label: 'mAP@0.5', value: '85.5%' },
            { label: 'Precision', value: '89.5%' },
            { label: 'Recall', value: '80.6%' },
        ],
        problem:
            'Traditional smoke detectors can be slow or produce false positives, whereas standalone computer vision models are too resource-heavy for low-power edge nodes.',
        solution:
            'Combined physical sensor readings with an optimized YOLOv5 model running on a Raspberry Pi 4 to cross-verify indicators before triggering alarms.',
        githubUrl: 'https://github.com/Logm12/Fire-Detection-YOLOv5',
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
            'Financial markets are volatile; models degrade quickly. retries are slow, and feature inconsistency between training and serving causes prediction errors.',
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
];

/**
 * Work Experience Timeline
 */
export const experiences: Experience[] = [
    {
        id: 'vinsmartfuture',
        period: '04/2026 – 07/2026',
        company: 'VinSmartFuture (Device AI Division)',
        role: 'AI Engineer Intern',
        description:
            'Co-developed a LangGraph-based in-car voice assistant using a registry-validator-executor architecture. Conducted adversarial testing on tool calls to evaluate agent resilience, and designed testing frameworks to evaluate control tools.',
        isActive: true,
        skills: ['LangGraph', 'NVIDIA NIM', 'Llama Guard 3', 'Qdrant', 'FastAPI'],
    },
    {
        id: 'viettel',
        period: '11/2025 – 12/2025',
        company: 'Viettel Networks',
        role: 'AI Engineer Intern',
        description:
            'Deployed on-premise LLMs, performed model quantization (GGUF), fine-tuned models using QLoRA and DPO, and built data sanitization pipelines for offline coding assistants.',
        isActive: true,
        skills: ['QLoRA', 'DPO', 'Quantization', 'GGUF', 'FastAPI'],
    },
    {
        id: 'worldquant',
        period: '07/2023 – Present',
        company: 'WorldQuant BRAIN',
        role: 'Research Consultant',
        description:
            'Designed and optimized over 667 alpha models using statistical arbitrage and machine learning techniques to forecast market movements.',
        isActive: true,
        skills: ['Python', 'Statistics', 'Time-series', 'Backtesting'],
    },
];

/**
 * Social Links
 */
export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Logm12', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pham-thien-long-mac', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:longmac321@gmail.com', icon: 'mail' },
];

/**
 * Honors and Awards
 */
export const honors: Honor[] = [
    {
        id: 'sinh-vien-5-tot',
        title: 'Student of 5 Merits (Hanoi City Level)',
        issuer: 'Hanoi Youth Union',
        date: '12/2025',
        image: '/assets/awards/5 Merits.png',
        description: 'Recognition for academic achievement, ethics, skills, physical training, and volunteering.',
    },
    {
        id: 'inter_olym',
        title: 'Vietnam Representative at International Olympiad of Financial Security',
        issuer: 'Russia',
        date: '09/2025',
        image: '/assets/awards/IOFS.png',
        description: 'Represented Vietnam in the final stage in Krasnoyarsk, Russia.',
    },
    {
        id: 'mis-talent',
        title: '2nd Prize, MIS Talent Competition',
        issuer: 'VNU-IS',
        date: '08/2025',
        image: '/assets/awards/MISTalent.png',
        description: 'E-Mastery category for innovative business models utilizing AI.',
    },
    {
        id: 'moswc',
        title: '2nd Prize (National Finals), MOS World Championship',
        issuer: 'Microsoft / IIG Vietnam',
        date: '07/2025',
        image: '/assets/awards/MOSWC.png',
        description: 'National award in the Microsoft Excel category.',
    },
    {
        id: 'vnuis-research',
        title: '3rd Prize, Co-Author, 17th Student Scientific Research Conference',
        issuer: 'VNU-IS',
        date: '05/2025',
        image: '/assets/awards/Research.png',
        description: 'Award for the reefer logistics cold chain optimization paper.',
    },
    {
        id: 'star-awards',
        title: '1st Prize, Star Awards English Competition',
        issuer: 'Hanoi Region',
        date: '11/2024',
        image: '/assets/awards/StarAwards.png',
        description: 'Regional English communication and academic competition.',
    },
    {
        id: 'fbu-research',
        title: 'Presented & Published Paper, 5th Student Scientific Research Conference',
        issuer: 'FBU',
        date: '05/2024',
        image: '/assets/awards/FBU.png',
        description: 'Selected paper on Multi-Sensor Real-Time Fire and Smoke Detection.',
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
        level: 88,
        skills: ['HuggingFace', 'LangGraph', 'NVIDIA NIM', 'QLoRA', 'GGUF'],
    },
    {
        name: 'Deployment/Ops',
        level: 85,
        skills: ['Docker', 'FastAPI', 'gRPC', 'Kubernetes'],
    },
    {
        name: 'Quantitative',
        level: 80,
        skills: ['Time-series', 'Backtesting', 'Statistics', 'MIQP', 'Gurobi'],
    },
];

/**
 * Typewriter Phrases for Hero Section
 */
export const typewriterPhrases = [
    'Initializing System...',
    'Loading Models...',
    'Building Scalable AI Solutions...',
    'Hello, I build end-to-end intelligent systems.',
];

/**
 * About Me Section Content
 */
export const aboutMeContent = {
    headline: 'About Me',
    profileImage: '/assets/info/person.jpg',
    subtitle: 'AI Engineer • Problem Solver • Continuous Learner',
    paragraphs: [
        'I am an AI Engineer with a background in Management Information Systems. I specialize in developing production-ready AI applications, with a strong focus on Multi-agent orchestration, LLM optimization, and data engineering. I have hands-on experience co-developing voice assistants, fine-tuning lightweight LLMs for offline environments, and building large-scale intelligent systems.'
    ],
    highlights: [
        { label: 'VinSmartFuture', value: 'LangGraph Assistant' },
        { label: 'Viettel Networks', value: 'Edge AI Deployment' },
        { label: 'WorldQuant', value: '600+ Alpha Models' },
    ],
};

# Glossary of Technical Terms

This document explains technical terms used in the portfolio for non-technical readers.

---

## Web Development & Design Terms

### SPA (Single Page Application)
A website that loads a single HTML page and dynamically updates content without full page reloads. Creates a smoother, app-like experience.

### Responsive Design
A design approach ensuring websites look good on all screen sizes—from smartphones to desktop monitors.

### Glassmorphism
A modern design trend featuring semi-transparent backgrounds with blur effects, creating a "frosted glass" appearance. Used extensively in this portfolio for cards.

### Gradient Text
Text that transitions smoothly between multiple colors. In this portfolio, names and headers use pink-to-purple gradients.

### Canvas API
A browser technology for drawing graphics programmatically. Used here to create the animated neural network background with glowing nodes.

### Framer Motion
A popular animation library for React that makes it easy to add smooth, professional animations to web interfaces.

### Tailwind CSS
A utility-first CSS framework providing pre-built classes for styling, enabling rapid development of beautiful interfaces.

### Hydration
The process where React "activates" server-rendered HTML by attaching event listeners. A "hydration error" occurs when the server HTML doesn't match what React expects on the client.

---

## AI/Machine Learning Terms

### Deep Learning
A subset of machine learning using neural networks with many layers to learn complex patterns. Powers image recognition, NLP, and recommendation systems.

### LightGCN (Light Graph Convolutional Network)
A neural network designed for recommendation systems. It learns user preferences by analyzing connections between users and items in a graph structure.

### Vector Database (e.g., Qdrant)
A specialized database storing data as mathematical vectors (lists of numbers). Enables fast similarity search for recommendations.

### MLOps (Machine Learning Operations)
The practice of deploying and maintaining ML models in production. Similar to DevOps but specifically for AI systems.

### Causal Inference
A statistical approach to understand cause-and-effect relationships, not just correlations. Answers questions like "Would this customer have stayed if we offered a discount?"

### Uplift Modeling
A technique predicting the incremental impact of an action (like a marketing campaign) on individuals. Identifies customers who will respond positively to treatment.

### T-Learner
An algorithm for uplift modeling using two separate models—one for treatment group, one for control—to estimate treatment effects.

### Feature Store (e.g., Feast)
A centralized repository for ML features. Ensures consistency between training and production environments.

### Drift Detection
Monitoring for changes in data patterns over time that could degrade model performance. Critical for maintaining accuracy in production.

---

## System Architecture Terms

### Microservices
An architectural style building applications as collections of small, independent services communicating over a network. Easier to scale and maintain than monolithic apps.

### API (Application Programming Interface)
Rules allowing different software applications to communicate. Like a waiter taking your order to the kitchen.

### Docker
A platform for running applications in isolated containers. Ensures software runs the same way everywhere.

### Kafka
A distributed streaming platform for real-time data pipelines. Handles millions of events per second.

### FastAPI
A modern Python web framework for building APIs quickly with automatic documentation.

### Latency
Time delay between request and response. Lower latency = faster responses. "Sub-100ms" means responses in less than 0.1 seconds.

---

## Design & Animation Terms

### Neural Network Background
The animated background with floating dots and connecting lines, simulating how neurons connect in a brain or a graph neural network.

### Progress Bars
Visual indicators showing skill proficiency levels (e.g., Python 95%). In this portfolio, they animate when scrolled into view.

### Typewriter Effect
Text that appears character-by-character as if being typed on a keyboard. Used in the hero section quote.

### Glow Effect
A soft light emanating from elements, created with CSS box-shadow. Used on buttons and cards to add depth.

### Marquee
A scrolling banner of content. In this portfolio, the tech stack marquee shows logos continuously scrolling horizontally.

---

## Project-Specific Terms

### Cold-Start Problem
The challenge of making recommendations for new users with no interaction history. Solved using genre preferences or default recommendations.

### Feature Engineering
Creating new variables from raw data to improve ML model performance.

### ROI (Return on Investment)
A financial metric measuring profitability. In marketing, shows revenue generated per dollar spent.

### Qini Score/Coefficient
A metric evaluating uplift models. Higher scores = better ability to identify responsive customers.

### SHAP (SHapley Additive exPlanations)
A method to explain individual predictions from ML models. Shows which features contributed most to a decision.

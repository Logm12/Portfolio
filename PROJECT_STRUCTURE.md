# Project Structure Documentation

This document provides an overview of the file and folder structure of the **Portfolio Website** project, explaining the purpose of each key component.

## Root Directory

*   **`README.md`**: The main entry point for the project, containing setup instructions, features, and usage guides.
*   **`PROJECT_REPORT.md`**: A detailed report on the project's development, technical decisions, and architecture.
*   **`PROJECT_STRUCTURE.md`**: This file, documenting the codebase organization.
*   **`package.json`**: manifest file for Node.js projects, listing dependencies and scripts (e.g., `dev`, `build`, `lint`).
*   **`next.config.ts`**: Configuration file for the Next.js framework (e.g., image domains, redirects).
*   **`tsconfig.json`**: Configuration for the TypeScript compiler.
*   **`playwright.config.ts`**: Configuration for Playwright end-to-end testing.
*   **`eslint.config.mjs`**: Configuration for ESLint to ensure code quality.

## Source Code (`src/`)

The core application code is located in the `src` directory.

### `src/app/` (App Router)
Constraints the routes and pages of the application.
*   **`page.tsx`**: The main entry page (`/`). It composes all the sections (Hero, Projects, About, etc.) into a single-page view.
*   **`layout.tsx`**: The root layout wrapper, defining the global HTML structure, fonts (Geist), and metadata.
*   **`globals.css`**: Global CSS styles, including Tailwind directives and custom CSS variables for theming.

### `src/components/`
Reusable UI components organized by category.
*   **`index.ts`**: Barrel file that exports all components for easier importing.

#### `src/components/hero/`
*   **`HeroSection.tsx`**: The top section of the landing page with the main introduction and CTA.
*   **`TypewriterEffect.tsx`**: A component that simulates a typewriter effect for dynamic text.

#### `src/components/layout/`
*   **`AboutMe.tsx`**: Section detailing personal background and biographic info.
*   **`ExperienceTimeline.tsx`**: Displays work history in a vertical timeline format.
*   **`Footer.tsx`**: The site footer with social links and copyright info.
*   **`HonorsAwards.tsx`**: Displays certificates and awards in a grid.
*   **`SkillRadar.tsx`**: A visualization of skills using a radar/spider chart.
*   **`TechStackMarquee.tsx`**: An infinite scrolling marquee of technology logos.

#### `src/components/projects/`
*   **`FeaturedProjects.tsx`**: The container for the projects section.
*   **`ProjectCard.tsx`**: An individual card displaying a project summary.
*   **`ProjectModal.tsx`**: A detailed modal view for a project, showing architecture diagrams (images or videos), metrics, and full descriptions.

#### `src/components/ui/`
*   **`AnimatedBackground.tsx`**: A background component providing visual effects (e.g., particles, gradients).
*   **`Button.tsx`**: Reusable button components with various variants (primary, secondary, etc.).
*   **`ThemeToggle.tsx`**: A toggle switch for Light/Dark mode.

### `src/data/`
*   **`projects.ts`**: The central data source. It contains arrays of objects for:
    *   `projects`: All project details (id, title, description, images/videos, tech stack).
    *   `experiences`: Work history data.
    *   `socialLinks`: URLs for GitHub, LinkedIn, Email.
    *   `honors`: Awards data.
    *   `techStackItems`: List of technologies for the marquee.

### `src/types/`
*   **`index.ts`**: TypeScript interface definitions (`Project`, `Experience`, `TechItem`, etc.) used throughout the app to ensure type safety.

### `src/hooks/`
Custom React hooks.
*   (e.g., `useScroll`, `useTheme`, etc. - depending on implementation details)

## Public Assets (`public/`)
Static files served directly by the web server.

*   **`assets/`**:
    *   **`architecture/`**: Stores project architecture diagrams (`.png`, `.svg`) and demo videos (`.mp4`).
    *   **`awards/`**: Images of certificates and awards.
    *   **`info/`**: Personal images (e.g., profile picture).
*   **`icons/`**: SVGs for technology icons used in the marquee.

## Documentation (`docs/`)
Additional documentation files.
*   **`GLOSSARY.md`**: Definitions of terms and concepts used in the project.

## Scripts
*   `npm run dev`: Starts the local development server.
*   `npm run build`: Builds the application for production.
*   `npm start`: Runs the built production application.
*   `npm run lint`: Runs ESLint to check for code issues.

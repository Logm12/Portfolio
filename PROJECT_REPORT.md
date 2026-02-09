# Portfolio Website - Technical Report

**Project Name**: Personal Portfolio Website  
**Author**: Mạc Phạm Thiên Long  
**Report Date**: 18/01/2026

---

## 1. Executive Summary

| Aspect | Description |
|--------|-------------|
| **Problem** | Need a professional portfolio to showcase AI/ML projects with modern design and optimal performance |
| **Solution** | Built a Next.js-based portfolio with Figma-inspired design, animated components, and modular architecture |
| **Key Results** | Fast load times (<1s), theme consistency (dark/light), mobile responsive, easy deployment on Vercel |

---

## 2. Problem Statement

### 2.1 Context

As an AI Engineer applying for positions, a professional portfolio is essential to:
- Showcase technical projects with clear problem/solution narratives
- Demonstrate frontend development skills
- Present academic and professional achievements

### 2.2 Requirements

1. Modern, visually appealing design (Figma-inspired)
2. Theme switching (dark/light mode)
3. Responsive layout (mobile, tablet, desktop)
4. Fast performance (optimized images, lazy loading)
5. Easy content management (centralized data file)
6. One-click deployment (Vercel)

---

## 3. Solution & Architecture

### 3.1 Tech Stack

| Category | Technology | Rationale |
|----------|------------|-----------|
| **Framework** | Next.js 16 | Server-side rendering, optimized images, App Router |
| **Styling** | Tailwind CSS 4.0 | Utility-first, fast development, theme support |
| **Animation** | Framer Motion | Declarative animations, scroll-triggered effects |
| **Language** | TypeScript | Type safety, better IDE support |
| **Icons** | Lucide React | Lightweight, consistent iconography |

### 3.2 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Theme variables (CSS custom properties)
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composition
├── components/
│   ├── hero/            # HeroSection, TypewriterEffect
│   ├── layout/          # AboutMe, SkillRadar, HonorsAwards, TechStack
│   ├── projects/        # FeaturedProjects, ProjectCard, ProjectModal
│   └── ui/              # Button, ThemeToggle, AnimatedBackground
├── data/
│   └── projects.ts      # Centralized content (projects, skills, honors)
├── hooks/               # useTheme, useTypewriter
└── types/               # TypeScript interfaces
```

### 3.3 Design System

**Theme Variables** (CSS Custom Properties):

```css
:root {
  --background: 222 47% 3%;       /* Dark blue-black */
  --foreground: 210 40% 98%;      /* Near white */
  --muted: 215 20% 55%;           /* Gray text */
  --accent-pink: 330 100% 65%;    /* Primary accent */
  --accent-cyan: 180 100% 50%;    /* Secondary accent */
}
```

**Glass Card Effect**:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 4. Implementation Details

### 4.1 Key Components

| Component | Description | Features |
|-----------|-------------|----------|
| **HeroSection** | Landing section | Typewriter effect, animated icons, CTA buttons |
| **SkillRadar** | Skills visualization | SVG-based 5-axis radar chart |
| **FeaturedProjects** | Project showcase | Cards with hover effects, modal details |
| **HonorsAwards** | Achievements display | Large image cards, gradient overlays |
| **AnimatedBackground** | Canvas animation | Neural network-style floating nodes |

### 4.2 Modular Code Structure

Each component is refactored with:

1. **Sub-components**: Small, testable, reusable
2. **Configuration objects**: Centralized animation/styling config
3. **Pure utility functions**: For calculations (e.g., `calculatePoint()`)
4. **TypeScript interfaces**: Type-safe data structures

**Example** (SkillRadar.tsx):
```typescript
// Configuration
const CHART_CONFIG = {
  size: 400,
  center: 200,
  maxRadius: 150,
  levels: 5,
} as const;

// Pure function
function calculatePoint(index: number, total: number, radius: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return { x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
}
```

---

## 5. Results

### 5.1 Performance

| Metric | Value |
|--------|-------|
| First Contentful Paint | <1s |
| Largest Contentful Paint | <2s |
| Bundle Size | <500KB (gzipped) |
| Image Optimization | Next.js automatic (WebP, lazy load) |

### 5.2 Features Delivered

✅ Dark/Light mode with seamless transitions  
✅ Animated hero section with typewriter effect  
✅ SVG radar chart for skill visualization  
✅ Project cards with modal details and metrics  
✅ Honors section with large certificate images  
✅ Responsive design (mobile-first)  
✅ Theme-aware styling (CSS variables)  

---

## 6. Deployment

### Vercel Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select GitHub repository
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Update DNS records

**Environment Variables**: None required!

---

## 7. Future Work

| Enhancement | Priority |
|-------------|----------|
| Add blog section with MDX | Medium |
| Implement contact form | Low |
| Add project demo videos | Medium |
| PWA support (offline) | Low |

---

## Appendix: Live Demo

🔗 **GitHub**: https://github.com/Logm12/Portfolio  
🌐 **Live Site**: (After Vercel deployment)

---

*Report generated on 18/01/2026*

---

## 8. Recent Updates (February 2026)

### 8.1 Feature Enhancements
-   **Video Support**: Added support for `.mp4` demo videos in project modals. Projects can now display a video walkthough instead of a static architecture diagram.
-   **Documentation**: Added `PROJECT_STRUCTURE.md` to document the codebase organization.

### 8.2 Bug Fixes
-   **Build Stability**: Fixed syntax errors in `src/data/projects.ts` that were causing Vercel build failures.
-   **Broken Links**: Corrected LinkedIn and Email links in the footer to use proper protocols (`https://`, `mailto:`), resolving 404 errors.
-   **Asset Handling**: Renamed assets to use kebab-case for better compatibility and implemented a server restart trigger for asset refreshes.

### 8.3 Content Updates
-   **Footer**: Updated footer to display "© 2025 Mac Pham Thien Long. All rights reserved."


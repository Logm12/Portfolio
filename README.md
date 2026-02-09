# Portfolio Website - Mac Pham Thien Long

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

A modern, animated portfolio showcasing AI/ML and Data Science projects.

---

## Features

| Feature | Description |
|---------|-------------|
| Figma-Inspired Design | Glassmorphism, gradients, micro-animations |
| Dark/Light Mode | Theme-aware with CSS variables |
| Skill Radar Chart | SVG-based 5-axis radar visualization |
| Honors Display | Award certificates with large images |
| Animated Background | Neural network-style canvas animation |
| Fast & Responsive | Next.js with Turbopack, optimized images |

---

## Quick Start

```bash
# Clone repository
git clone https://github.com/Logm12/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run development server (port 4200)
npm run dev

# Open http://localhost:4200
```

---

## Project Structure

```
portfolio-website/
├── public/
│   └── assets/
│       ├── architecture/    # Project architecture diagrams
│       └── awards/          # Certificate images
├── src/
## 📂 Project Structure

For a detailed breakdown of the file system and component responsibilities, please refer to [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

```bash
src/
├── app/                 # Next.js App Router (Pages & Layout)
├── components/          # Reusable UI Components
├── data/                # Centralized Content (Projects, Exp)
├── hooks/               # Custom React Hooks
└── types/               # TypeScript Definitions
```

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS 4.0 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Website Sections

1. **Hero** - Name, title, animated typewriter, CTA buttons
2. **Tech Stack Marquee** - Scrolling technology logos
3. **About Me** - "The Hybrid Engineer" storytelling
4. **Featured Projects** - Project cards with spotlight (Viettel AI)
5. **Skill Radar** - 5-axis SVG radar chart
6. **Experience Timeline** - Work history
7. **Honors & Awards** - Certificates grid
8. **Footer** - Contact links

---

## Deployment on Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Logm12/Portfolio)

### Option 2: Manual Deploy

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click "Deploy"

**No environment variables required!**

---

## Customization

### Add Your Content

1. **Projects**: Edit `src/data/projects.ts`
2. **Awards**: Add images to `public/assets/awards/`
3. **Social Links**: Update `socialLinks` in `projects.ts`

### Managing Images (Architecture & Projects)

To add new images (e.g., architecture diagrams) and avoid 404 errors:

1.  **Placement**: Save your image in `public/assets/architecture/`.
    *   Example: `public/assets/architecture/my-new-diagram.png`
2.  **Naming**: Use `kebab-case` (lowercase with hyphens) for best compatibility.
    *   ✅ `my-diagram.png`
    *   ⚠️ `My Diagram.png` (Avoid spaces if possible)
3.  **Update Code**: In `src/data/projects.ts`, use the **exact** filename:
    ```typescript
    image: '/assets/architecture/my-diagram.png',
    architectureImage: '/assets/architecture/my-diagram.png',
    // Optional: Add a demo video
    demoVideo: '/assets/demo-video.mp4', 
    ```
    *Note: The path must start with `/assets/` (not `public/assets/`).*

### Change Theme Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: 222 47% 3%;
  --foreground: 210 40% 98%;
  --accent-pink: 330 100% 65%;
  --accent-cyan: 180 100% 50%;
}
```

---

## Author

**Mac Pham Thien Long**

- AI Engineer Intern @ Viettel Networks
- Research Consultant @ WorldQuant BRAIN
- Email: longmac.dev@gmail.com
- GitHub: [github.com/Logm12](https://github.com/Logm12)

---

## License

MIT License - feel free to use for your own portfolio!

---

Made with care by Mac Pham Thien Long

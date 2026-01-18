'use client';

import {
  HeroSection,
  TechStackMarquee,
  FeaturedProjects,
  ExperienceTimeline,
  Footer,
  ThemeToggle,
  AnimatedBackground,
  AboutMe,
  SkillRadar,
  HonorsAwards,
} from '@/components';

/**
 * Main Portfolio Page - Single Page Application
 *
 * Section Order:
 * 1. Hero - Name, title, CTA buttons
 * 2. Tech Stack Marquee - Scrolling tech logos
 * 3. About Me - Hybrid storytelling (WorldQuant + Viettel)
 * 4. Featured Projects - Project cards with Viettel AI as spotlight
 * 5. Skill Radar - SVG radar chart with 5 skill axes
 * 6. Experience Timeline - Work history
 * 7. Honors & Awards - Certificates and achievements
 * 8. Footer - Contact info and credits
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Tech Stack Marquee */}
        <TechStackMarquee />

        {/* Section 3: About Me (NEW) */}
        <AboutMe />

        {/* Section 4: Featured Projects */}
        <FeaturedProjects />

        {/* Section 5: Skill Radar (NEW - replaces TechStack) */}
        <SkillRadar />

        {/* Section 6: Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 7: Honors & Awards (NEW) */}
        <HonorsAwards />

        {/* Section 8: Footer */}
        <Footer />
      </div>
    </main>
  );
}

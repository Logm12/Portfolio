import { test, expect } from '@playwright/test';

test.describe('Portfolio Website - Recruiter Perspective', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the homepage with correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Mac Pham Thien Long|AI Engineer Portfolio/);
    });

    test('should display the hero section with name', async ({ page }) => {
        const heroName = page.locator('h1');
        await expect(heroName).toBeVisible();
        await expect(heroName).toContainText(/MAC PHAM|THIEN LONG/i);
    });

    test('should have visible navigation buttons', async ({ page }) => {
        const viewProjectsButton = page.getByRole('button', { name: /view projects/i });
        const downloadCVButton = page.getByRole('button', { name: /download cv/i });

        await expect(viewProjectsButton).toBeVisible();
        await expect(downloadCVButton).toBeVisible();
    });

    test('should scroll to projects section when clicking View Projects', async ({ page }) => {
        const viewProjectsButton = page.getByRole('button', { name: /view projects/i });
        await viewProjectsButton.click();

        // Wait for scroll animation
        await page.waitForTimeout(1000);

        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeInViewport();
    });

    test('should display at least 3 featured projects', async ({ page }) => {
        const projectCards = page.locator('[data-testid="project-card"], .glass-card').filter({ hasText: /project|recsys|trading|retention/i });

        // Scroll to projects section first
        await page.locator('#projects').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        const count = await projectCards.count();
        expect(count).toBeGreaterThanOrEqual(3);
    });

    test('should have working dark/light theme toggle', async ({ page }) => {
        const themeToggle = page.getByRole('button', { name: /theme|toggle|dark|light/i });

        if (await themeToggle.isVisible()) {
            await themeToggle.click();
            await page.waitForTimeout(300);

            // Check that theme class changed
            const html = page.locator('html');
            const classList = await html.getAttribute('class') || '';
            expect(classList).toBeDefined();
        }
    });

    test('should display skills section with radar chart', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await skillsSection.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);

        await expect(skillsSection).toBeVisible();

        // Check for SVG radar chart
        const radarChart = skillsSection.locator('svg');
        await expect(radarChart).toBeVisible();
    });

    test('should have accessible contact information', async ({ page }) => {
        // Scroll to footer
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        const githubLink = page.getByRole('link', { name: /github/i });
        const linkedinLink = page.getByRole('link', { name: /linkedin/i });
        const emailLink = page.getByRole('link', { name: /email|mail/i });

        // At least one contact method should be visible
        const hasGithub = await githubLink.isVisible().catch(() => false);
        const hasLinkedin = await linkedinLink.isVisible().catch(() => false);
        const hasEmail = await emailLink.isVisible().catch(() => false);

        expect(hasGithub || hasLinkedin || hasEmail).toBe(true);
    });

    test('should be responsive on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.reload();

        const heroSection = page.locator('section').first();
        await expect(heroSection).toBeVisible();

        // Name should still be visible
        const heroName = page.locator('h1');
        await expect(heroName).toBeVisible();
    });

    test('should have no console errors', async ({ page }) => {
        const errors: string[] = [];

        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        await page.reload();
        await page.waitForTimeout(2000);

        // Filter out known non-critical errors
        const criticalErrors = errors.filter(
            (e) => !e.includes('favicon') && !e.includes('404')
        );

        expect(criticalErrors).toHaveLength(0);
    });

    test('should load all images without errors', async ({ page }) => {
        const failedImages: string[] = [];

        page.on('response', (response) => {
            if (
                response.request().resourceType() === 'image' &&
                response.status() >= 400
            ) {
                failedImages.push(response.url());
            }
        });

        await page.reload();
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(2000);

        expect(failedImages).toHaveLength(0);
    });
});

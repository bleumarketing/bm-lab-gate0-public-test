const { test, expect } = require('@playwright/test');

test('home page renders at this viewport', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Gate 0 toolchain test');
  await expect(page.getByTestId('status')).toHaveText('Next.js + GSAP running');
  await expect(page.getByTestId('reveal')).toHaveCSS('opacity', '1', { timeout: 5000 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  await page.screenshot({ path: `artifacts/screenshots/${testInfo.project.name}.png`, fullPage: true });
});

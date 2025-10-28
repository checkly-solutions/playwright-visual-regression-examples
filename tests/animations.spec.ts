// animations.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Visual regression – handle animations", () => {
  test("should freeze animations before snapshot", async ({ page }) => {
    await page.goto("https://www.checklyhq.com");

    // Example: disable CSS animations/transitions globally
    await page.addStyleTag({
      content: `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
      }
    `,
    });

    // Wait for layout stable state
    await page.waitForTimeout(1000);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      "landing-page-no-animations.png"
    );
  });
});

// component-only.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Visual regression of a single component", () => {
  test("should snapshot logo section only", async ({ page }) => {
    await page.goto("https://www.checklyhq.com");

    const section = await page
      .locator('section[data-component="hero"]')
      .first();
    // adjust selector to target the hero component
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    expect(await section.screenshot()).toMatchSnapshot("hero-component.png");
  });
});

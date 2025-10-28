// basic.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Landing page visual regression – basic", () => {
  test("should match full-page baseline", async ({ page }) => {
    await page.goto("https://www.checklyhq.com");
    // wait for main content to load (adjust selector as needed)
    await page.waitForSelector("header, footer");

    // take full-page screenshot
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      "landing-page-full.png"
    );
  });
});

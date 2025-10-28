// hide-element.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Visual regression with hidden element", () => {
  test("should hide dynamic banner then match snapshot", async ({ page }) => {
    await page.goto("https://www.checklyhq.com");
    // Suppose there is a dynamic rotating banner or animation we want to hide
    const bannerSelector = "header .hero-banner"; // adjust
    await page.waitForSelector(bannerSelector);

    // Hide the element so it doesn't cause flakiness
    await page.locator(bannerSelector).evaluate((el) => {
      (el as HTMLElement).style.visibility = "hidden";
    });

    await page.waitForTimeout(500); // give layout a moment

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      "landing-page-hide-banner.png"
    );
  });
});

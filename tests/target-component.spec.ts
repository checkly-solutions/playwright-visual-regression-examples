// component-only.spec.ts
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Click" }).click();
  await expect(
    page.getByRole("button", { name: "Button That Ignores DOM Click" })
  ).toBeVisible();

  /*
  We focus on a specific component using xpaths. It's preferred to use more stable selectors like data-testid, or custom ids in real projects.
  */
  await expect(page.locator("xpath=/html/body/section/div")).toHaveScreenshot()

});

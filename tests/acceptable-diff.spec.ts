//acceptable-diff.spec.ts
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Click" }).click();

//   await page.getByRole("button", { name: "Button That Ignores DOM Click" }).click();

  /*
  We focus on a single component of the entire page & 
  then take a screenshot of the entire page with the masked image
  */

  await expect(page).toHaveScreenshot({ maxDiffPixels: 12000 });


});

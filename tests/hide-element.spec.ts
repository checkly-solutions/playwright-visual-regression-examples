// component-only.spec.ts
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Click" }).click();
  await expect(
    page.getByRole("button", { name: "Button That Ignores DOM Click" })
  ).toBeVisible();

  /*
  We focus on a single component of the entire page & then take a screenshot of the page with the masked image
  */
  await expect(page).toHaveScreenshot({
    mask: [page.getByRole("button", { name: "Button That Ignores DOM Click" })],
  });
});

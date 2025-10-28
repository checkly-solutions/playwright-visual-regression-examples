// animations.spec.ts
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Animated Button" }).click();
  await page.getByRole("button", { name: "Start Animation" }).click();
/* 
     When using toHaveScreenshot, animations are automatically set to "disabled". 
     This prevents animations from causing flakiness in visual regression tests.
*/ 
  await expect(page).toHaveScreenshot({animations: 'disabled'});

});

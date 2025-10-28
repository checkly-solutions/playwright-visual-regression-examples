// component-only.spec.ts
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Click" }).click();
  await expect(
    page.getByRole("button", { name: "Button That Ignores DOM Click" })
  ).toBeVisible();

    const section = await page.locator('//*[@id="badButton"]').first();
    // adjust selector to target the hero component
    await page.waitForTimeout(300);

    expect(await section.screenshot()).toMatchSnapshot("hero-component.png");

  await page
    .getByRole("button", { name: "Button That Ignores DOM Click" })
    .click();
  // Target id="badButton" and obscure w/ Playwright after click
});

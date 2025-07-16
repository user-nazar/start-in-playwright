import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Main Page - Display of the Elements section", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  expect(await home.isElementsSectionVisible()).toBeTruthy();
});

test("Main Page - Navigate to the form", async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.clickFormsSection();
  await home.clickPracticeForm();
  await expect(page).toHaveURL(/.*automation-practice-form/);
});

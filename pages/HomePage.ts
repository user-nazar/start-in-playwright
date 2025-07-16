import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/");
  }

  async clickFormsSection() {
    await this.page.getByText("Forms").click();
  }

  async clickPracticeForm() {
    await this.page.getByText("Practice Form").click();
  }

  async isElementsSectionVisible() {
    return this.page.isVisible("text=Elements");
  }
}

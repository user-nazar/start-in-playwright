import { Page, Locator } from "@playwright/test";

export class HomePage {
  private readonly formsSectionLink: Locator;
  private readonly practiceFormLink: Locator;
  private readonly elementsSectionText: Locator;

  constructor(private page: Page) {
    this.formsSectionLink = page.getByText("Forms");
    this.practiceFormLink = page.getByText("Practice Form");
    this.elementsSectionText = page.getByText("Elements");
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickFormsSection() {
    await this.formsSectionLink.click();
  }

  async clickPracticeForm() {
    await this.practiceFormLink.click();
  }

  async isElementsSectionVisible() {
    return this.elementsSectionText.isVisible();
  }
}

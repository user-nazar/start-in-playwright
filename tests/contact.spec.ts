import { Page } from "@playwright/test";

export class ContactPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForForm() {
    await this.page.waitForSelector("#userName", {
      state: "visible",
      timeout: 10000,
    });
  }

  async fillForm(name: string, email: string, message: string) {
    await this.waitForForm();
    await this.page.fill("#userName", name);
    await this.page.fill("#userEmail", email);
    await this.page.fill("#currentAddress", message);
  }

  async submitForm() {
    await this.page.click("#submit");
  }

  async isConfirmationVisible() {
    const confirmation = this.page.locator("#output");
    await confirmation.waitFor({ state: "visible", timeout: 5000 });
    return confirmation.isVisible();
  }
}

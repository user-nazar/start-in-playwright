import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly genderRadioLabel: Locator;
  readonly phoneInput: Locator;
  readonly submitBtn: Locator;
  readonly modalTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.genderRadioLabel = page.locator('label[for="gender-radio-1"]');
    this.phoneInput = page.locator('#userNumber');
    this.submitBtn = page.locator('#submit');
    this.modalTitle = page.locator('#example-modal-sizes-title-lg');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });
  }

  async fillForm(first: string, last: string, email: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.emailInput.fill(email);

    const isBlocked = await this.genderRadioLabel.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      const elemAtPoint = document.elementFromPoint(rect.left + 5, rect.top + 5);
      return elemAtPoint !== el;
    });

    if (isBlocked) {
      await this.page.evaluate(() => {
        const ad = document.querySelector('#fixedban');
        if (ad) ad.remove();
      });
    }

    await this.genderRadioLabel.click();
    await this.phoneInput.fill('0123456789');
  }

  async submitForm() {
    await this.submitBtn.scrollIntoViewIfNeeded();
    await this.submitBtn.click();
  }

  async assertModalVisible() {
    await expect(this.modalTitle).toBeVisible({ timeout: 5000 });
  }
}

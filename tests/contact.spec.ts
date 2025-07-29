import { test } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

test('Contact Page: fill and submit form with confirmation', async ({ page }) => {
  const contact = new ContactPage(page);
  await contact.goto();
  await contact.fillForm('John', 'Doe', 'john@example.com');
  await contact.submitForm();
  await contact.assertModalVisible();
});

import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My personal/);

  // create a locator
  const getTestTasksPage = page.getByRole('link', { name: 'Тестовые задания' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getTestTasksPage).toHaveAttribute('href', '/test-works');

  // Click the get started link.
  await getTestTasksPage.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*works/);
});

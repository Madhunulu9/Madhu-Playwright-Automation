import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qasmart.in/');
  await page.getByRole('link', { name: '✅DropDown' }).click();
  await page.getByRole('combobox').selectOption('rtm');
  await expect(page.getByRole('combobox')).toBeVisible();
});
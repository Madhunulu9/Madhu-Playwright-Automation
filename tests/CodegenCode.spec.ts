import { test, expect } from '@playwright/test';
import { CommonMethods } from "../pages/Methods"
import loginData from '../data/loginData.json'

test('Add first item to cart', async ({ page }) => {
  const methods = new CommonMethods(page);
    const product = 'Sauce Labs Backpack'
  await page.goto('https://www.saucedemo.com/');

 await methods.sauceCodeLlogin(loginData.username2,loginData.password2)

  // First product: Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('.shopping_cart_link').click();
  await page.waitForTimeout(5000)

  await expect(page.locator('.inventory_item_name')).toHaveText(product);
});
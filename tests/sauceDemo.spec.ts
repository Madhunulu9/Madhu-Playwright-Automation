import {test , expect} from"@playwright/test"
import { SauceDemoMethods } from "../pages/sauceDemoMethods";
import sauceDemo from '../data/sauceDemo.json'

test('interview coding' , async({page})=>{
  const methods = new SauceDemoMethods(page)
 await page.goto('https://www.saucedemo.com/');
 await methods.login(sauceDemo.username,sauceDemo.password)
    const product = 'sauce labs Backpack';
   await page.locator('.inventory_item').filter({hasText:product}).getByText('Add to cart').click();

})
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator("//div[text()='Description']")).toContainText('Description');
});
test('low to high' , async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('select').selectOption('lohi');
    await page.waitForTimeout(2000)
    const Price = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Onesie' }).locator('.inventory_item_price');
    await expect(Price).toHaveText('$7.99');
})
test('high to low' , async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('select').selectOption('hilo');
    await page.waitForTimeout(2000)
    const Price = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Fleece Jacket' }).locator('.inventory_item_price');
    await expect(Price).toHaveText('$49.99');
})
test('Order Checkout ' , async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const product = 'Sauce Labs Backpack';
    await page.locator('.inventory_item').filter({hasText:product}).getByText('Add to cart').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator("//div[text()='Description']")).toContainText('Description');
    await expect(page.locator('//div[@class="inventory_item_name"]')).toHaveText(product)
    await page.locator('#checkout').click();
     await expect(page.locator("//span[@class='title']")).toBeVisible()
     await page.locator('#first-name').fill('Madhu')
     await page.locator('#last-name').fill('Kumar')
     await page.locator('#postal-code').fill('533440')
     await page.locator('#continue').click()
     await expect(page.locator('//div[@class="inventory_item_name"]')).toHaveText(product)
      const Price = page.locator('.inventory_item_price');
    await expect(Price).toHaveText('$29.99');
    await page.locator('#finish').click();
    await expect(page.locator('//h2[@class="complete-header"]')).toBeVisible();
})

test('sauceCode E2E flow' , async ({page})=>{
const methods = new SauceDemoMethods(page)
 await page.goto('https://www.saucedemo.com/');
 await methods.login(sauceDemo.username,sauceDemo.password)
 await methods.itemAddingToCart(sauceDemo.product)
 await methods.checkOut(sauceDemo.firstName,sauceDemo.LatName,sauceDemo.pincode);
 await methods.verifyOrderCompleteMesssage();
})

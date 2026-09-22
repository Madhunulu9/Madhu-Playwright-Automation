import { expect, test } from '../fixtures/sauceDemo.fixture';
import sauceDemo from "../data/sauceDemo.json"

test.describe('SauceDemo custom fixtures', () => {
  test('can test login with the loginPage fixture', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(sauceDemo.username,sauceDemo.password);
    await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('starts logged in with the loggedInPage fixture', async ({ loggedInPage }) => {
    await expect(loggedInPage.page.getByText('Products')).toBeVisible();
    await loggedInPage.page.getByTestId('add-to-cart-sauce-labs-backpack').click();
    await expect(loggedInPage.page.getByTestId('shopping-cart-badge')).toHaveText('1');
  });
});

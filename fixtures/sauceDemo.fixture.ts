import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type SauceDemoFixtures = {
  /** Use when the test needs to test login itself. */
  loginPage: LoginPage;
  /** Use when the test should start after a successful login. */
  loggedInPage: LoginPage;
};

export const test = base.extend<SauceDemoFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';

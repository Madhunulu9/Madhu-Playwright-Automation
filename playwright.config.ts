import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  // Test folder
  testDir: './tests',

  // Disable parallel execution
  fullyParallel: false,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 0,

  // Run only one worker (Sequential Execution)
  workers: 3,

  // HTML Report
  reporter: 'html',

  // Common settings
  use: {
    // Headless Execution
    headless: false,
    viewport:null,
    launchOptions:{
     args: ['--start-maximized'],
    },

    // Capture trace only on first retry
    trace: 'on-first-retry',

    // Optional timeout
    actionTimeout: 30000,

    // Screenshot only on failure
    screenshot: 'only-on-failure',

    // Video only on failure
    video: 'retain-on-failure',
  },

  // Run only in Chrome (Chromium)
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
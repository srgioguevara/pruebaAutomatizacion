import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    screenshot: 'only-on-failure', 
      },
});
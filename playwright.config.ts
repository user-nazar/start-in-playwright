import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://demoqa.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  timeout: 60000,
});

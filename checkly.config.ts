import { defineConfig } from 'checkly';

const config = defineConfig({
  projectName: `Playwright Visual Regression Examples`,
  logicalId: `playwright-visual-regression-examples`,
  repoUrl:
    "https://github.com/modern-sapien/playwright-visual-regression-examples",
  checks: {
    activated: true,
    muted: false,
    runtimeId: "2025.04",
    frequency: 60,
    locations: ["us-east-1", "eu-west-1"],
    // privateLocations: ['private-infra'],
    tags: [`cli`],
    // alertChannels: [emailChannel, slackChannel, webhookChannel],
    checkMatch: "*/tests/*.check.ts",
    ignoreDirectoriesMatch: [],
    browserChecks: {
      frequency: 30,
      testMatch: "./tests/*.spec.ts",
      tags: ["browser"],
    },
    // playwrightConfigPath: "./playwright.config.ts",
    // playwrightChecks: [
    //   {
    //     name: "All PWT tests",
    //     logicalId: "all-tests",
    //     playwrightConfigPath: "./playwright.config.ts",
    //     frequency: 10
    //   },
    // ],
  },
  cli: {
    runLocation: "us-east-1",
    // privateRunLocation: 'private-infra'
  },
});

export default config;

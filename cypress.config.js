const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
  },
  downloadsFolder: "cypress/ download_image",
  chromeWebSecurity: false,
  experimentalCspAllowList: true,
  viewportHeight: 668,
  viewportWidth: 1024,
  defaultCommandTimeout: 8000,
  video: true,
});

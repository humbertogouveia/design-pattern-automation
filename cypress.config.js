const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({

  retries: {
    runMode: 1
  },

  e2e: {
    video: true,
    baseUrl:'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: "[]-result",
    html: false
  }
});

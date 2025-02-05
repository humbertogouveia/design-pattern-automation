const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://lojaebac.ebaconline.art.br/',
    baseUrl:'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: process.env.ebacStoreVersion
    }
  },
});

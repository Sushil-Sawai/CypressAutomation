const { defineConfig } = require("cypress");
//const cucumber = require('cypress-cucumber-preprocessor').default
//const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports"
   },
  env: {
    'url1': 'https://rahulshettyacademy.com/angularpractice/',
    'url': 'https://rahulshettyacademy.com/AutomationPractice/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('file:preprocessor', cucumber()) 
      on('task', {downloadFile})
    },
    //specPattern: '/cypress/e2e/RahulShetty-class/BDD/*.feature' 
  },
  
});

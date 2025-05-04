const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: '6z42ph',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Automação cypress cucumber',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
    },
    baseUrl:"https://www.pagbrasil.com/fb831484f9611648f05411b3746466b6/form.html",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
     
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

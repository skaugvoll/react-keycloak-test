import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    KC_REALM: "test",
    KC_CLIENT_ID: "test-client",
  },
});

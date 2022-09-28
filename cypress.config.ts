import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        generateOTP: require("cypress-otp"),
      });
    },
  },
  env: {
    // KC_REALM: "test",
    // KC_CLIENT_ID: "test-client",
    KC_REALM: "test-otp",
    KC_CLIENT_ID: "test-otp",
  },
});

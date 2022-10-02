import "cypress-keycloak";

import { createUUID, generateOTPSecret } from "./signin-utils";

const clientId = Cypress.env("KC_CLIENT_ID");
const realm = Cypress.env("KC_REALM");

console.log("clientId", clientId);
console.log("realm", realm);

const root = "http://localhost:8080"; // TODO: get from env var
const otp_secret = "JB5DQ4KWNA4VM3CEJU3USTLJN44DO3KF"; // secret got from freeOTP+ app

Cypress.Commands.add("kcLogin", (username, password) => {
  cy.login({
    root,
    realm,
    username,
    password,
    client_id: clientId,
    redirect_uri: "http://localhost:3000",
    path_prefix: "",
  });
});

Cypress.Commands.add("kcLoginOTP", (username, password) => {
  cy.request({
    url: `${root}/realms/${realm}/protocol/openid-connect/auth`,
    qs: {
      client_id: clientId,
      redirect_uri: "http://localhost:3000",
      scope: "openid",
      state: createUUID(),
      nonce: createUUID(),
      response_type: "code",
      response_mode: "fragment",
    },
  }).then((loginResponse) => {
    const html = document.createElement("html");
    html.innerHTML = loginResponse.body;

    const form = html.getElementsByTagName("form");
    const isAuthorized = !form.length;

    // console.log("FORM_1_: ", form, form[0].action);

    if (!isAuthorized) {
      return cy
        .request({
          form: true,
          method: "POST",
          url: form[0].action,
          followRedirect: false,
          body: {
            username,
            password,
          },
        })
        .then((otpResponse) => {
          const html = document.createElement("html");
          html.innerHTML = otpResponse.body;

          const form = html.getElementsByTagName("form");

          const form_action = form[0].action;
          const form_method = form[0].method;
          // console.log("FORM_2_: ", form, form[0].action, form[0].method);

          const token = generateOTPSecret(otp_secret);
          // console.log("TOKEN GENERATED: ", token);

          const body = { otp: token }; // this gives invalid authenticator code

          cy.request({
            form: true,
            method: form_method,
            url: form_action,
            followRedirect: false,
            body: body,
          }).then((response) => {
            console.log(
              "this response should be after trying to enter otp \n",
              response.body
            );
          });
        });
    }
  });
});

Cypress.Commands.add("kcLogout", () => {
  cy.logout({
    root,
    realm,
    path_prefix: "",
  });
});

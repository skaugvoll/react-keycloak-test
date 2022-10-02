import "cypress-keycloak";

const clientId = Cypress.env("KC_CLIENT_ID");
const realm = Cypress.env("KC_REALM");

console.log("clientId", clientId);
console.log("realm", realm);

const root = "http://localhost:8080"; // TODO: get from env var

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

Cypress.Commands.add("kcLogout", () => {
  cy.logout({
    root,
    realm,
    // post_logout_redirect_uri: "http://localhost:3000/",
    path_prefix: "",
  });
});

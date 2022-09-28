import "cypress-keycloak";
// import createUUID from "./createUUID";

const clientId = Cypress.env("KC_CLIENT_ID");
const realm = Cypress.env("KC_REALM");

console.log("clientId", clientId);
console.log("realm", realm);

const root = "http://localhost:8080"; // TODO: get from env var
const test1_otp_secret = "KV2W46TKKVLVGTDBJV2E24LEHFFUSUTX";
const test2_otp_secret = "N5XXA23YGNDUQU3UJBETAZCQJUZUSMKF"; // got through zxing uploading setup qr-code
// const test2_otp_secret = "GFQUQYJVGNHWIRCEKZEQO6KGHBVDOMTH"; // got through zxing uploading setup qr-code
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
  // this gives invalid authorisation code, in the requests to keycloak.
  // not sure why. Am I using wrong secret ? broken library ?
  // looking at the developer console, application, cookies, it looks like there is set session id's
  cy.loginOTP({
    root,
    realm,
    username,
    password,
    client_id: clientId,
    redirect_uri: "http://localhost:3000/",
    path_prefix: "",
    otp_secret: test2_otp_secret,
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

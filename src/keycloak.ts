import Keycloak from "keycloak-js";

const realm = process.env.REACT_APP_KC_REALM!;
const clientId = process.env.REACT_APP_KC_CLIENT_ID!;

console.info(`KC Config:\nRealm: ${realm}\nCID: ${clientId}`);

const keycloakConfig = {
  url: "http://localhost:8080",
  // url: "http://localhost:8080/auth",
  realm,
  clientId,
  "public-client": true,
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;

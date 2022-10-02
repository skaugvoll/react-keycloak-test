declare namespace Cypress {
  interface Chainable {
    kcLogin(username: string, password: string): Chainable<void>;
    kcLogout(): Chainable<void>;
  }
}

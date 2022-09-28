describe("authorised", () => {
  beforeEach(() => {
    // cy.kcLogin("test", "test");
    cy.kcLoginOTP("test2", "test2");
  });

  afterEach(() => {
    // cy.kcLogout();
    cy.visit("http://localhost:3000/secured"); // using this we can visually see that we are signed out
  });

  it("shows token", () => {
    cy.visit("http://localhost:3000/secured");
    cy.get("[data-cy='tokenInfo']").should("exist");
  });
});

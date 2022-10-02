describe("unautherised", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/secured");
    cy.get('[data-cy="signin"]').should("exist");
  });
});

describe("toggleswitch change list view order", () => {
  beforeEach(() => cy.visit("/"));

  it("should change toggle switch value", () => {
    cy.get('[data-testid="toggle-switch"]').click();
    cy.get(".CardBody").contains("Zzzax");
  });
});

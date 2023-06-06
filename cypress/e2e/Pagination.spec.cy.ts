describe("should click pagination button", () => {
  beforeEach(() => cy.visit("/"));

  it("should change page", () => {
    cy.get(".PaginationButton").eq(2).click();
  });
});

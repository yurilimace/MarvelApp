/// <reference types="cypress" />

describe("Just open home screen", () => {
  beforeEach(() => cy.visit("/"));

  it("should go to detail page", () => {
    cy.get(".CardBody").eq(0).children().eq(0).click();
    cy.location().should((location) => {
      expect(location.pathname).to.include("/character");
    });
  });
});

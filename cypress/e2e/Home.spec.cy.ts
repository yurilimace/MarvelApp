/// <reference types="cypress" />

describe("Just open home screen", () => {
  beforeEach(() => cy.visit("/"));

  it("should render correctly", () => {
    cy.get(".CardBody").contains("3-D Man");
  });
});

/// <reference types="cypress" />

describe("Just open home screen", () => {
  beforeEach(() => cy.visit("/"));

  it("should render correctly", () => {
    cy.get(".SearchInput").type("spider-man").trigger("change");
    cy.get(".CardBody")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase().includes("spider-man")).to.be.true;
      });
  });
});

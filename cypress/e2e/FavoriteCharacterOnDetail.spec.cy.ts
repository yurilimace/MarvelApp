describe("toggleswitch change list view order", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should click on favorite button", () => {
    cy.get(".CardBody").eq(0).children().eq(0).click();
    cy.location().should((location) => {
      expect(location.pathname).to.include("/character");
    });
    cy.get(".FavoriteButton").click();
    cy.window().then((win) => {
      const item = win.localStorage.getItem("favoriteCharacters");
      expect(item).to.be.string;
    });
  });
});

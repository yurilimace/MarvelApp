describe("toggleswitch change list view order", () => {
  beforeEach(() => {
    const localStorageMock = [
      {
        id: 1009148,
        name: "Absorbing Man",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg",
      },
      {
        id: 1010354,
        name: "Adam Warlock",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg",
      },
      {
        id: 1010699,
        name: "Aaron Stack",
        image:
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
      },
      {
        id: 1011176,
        name: "Ajak",
        image: "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215.jpg",
      },
      {
        name: "Abomination (Emil Blonsky)",
        id: 1009146,
        image: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
      },
    ];
    cy.visit("/");
    cy.window().then((win) => {
      win.localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify(localStorageMock)
      );
    });
  });

  it("should click on favorite button", () => {
    cy.contains("Somente Favoritos").click();
  });
});

import { render, screen } from "@testing-library/react";

import { Card } from "./Card";
// import { createContext } from "react";
import { ContextTest } from "../../Context/context";
import { MemoryRouter } from "react-router-dom";

describe("Card Component Test suite", () => {
  const mockedContextValue = {
    contextValue: [],
    IsFavoriteCharacter: () => false,
    AddFavoriteCharacter: jest.fn,
    RemoveFavoriteCharacter: jest.fn,
    updateContextValue: jest.fn,
  };

  const mockedCardInfo = {
    name: "characterName",
    id: 1234,
    image: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
  };

  const ComponentRenderer = () =>
    render(
      <ContextTest.Provider value={mockedContextValue}>
        <MemoryRouter>
          <Card
            name={mockedCardInfo.name}
            id={mockedCardInfo.id}
            image={mockedCardInfo.image}
          />
        </MemoryRouter>
      </ContextTest.Provider>
    );

  beforeEach(() => {
    console.log(mockedContextValue);
    ComponentRenderer();
  });

  it("should render Correctly", async () => {
    const name = screen.getByText("characterName");
    const image = await screen.findByAltText("card-image");
    const button = await screen.findByTestId("favorite-button");
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

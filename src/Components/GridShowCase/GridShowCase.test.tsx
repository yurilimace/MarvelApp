import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ContextComponent } from "../../Context/context";
import { GridShowcase } from "./GridShowCase";
import { CharacterFormated } from "../../types";

describe("Grid showcase test suite", () => {
  const characterFormatedMock = [
    { name: "character name", id: 123, image: "image.jpg" },
  ];

  const mockedGridShowCaseData = {
    data: characterFormatedMock as CharacterFormated[],
    showFavorite: false,
  };

  let showFavoriteValue = false;

  const TestWrapper = ({ children }: any) => (
    <MemoryRouter>
      <ContextComponent> {children} </ContextComponent>
    </MemoryRouter>
  );

  const RendererComponent = (showFavorite: boolean) => {
    const renderer = render(
      <GridShowcase
        data={mockedGridShowCaseData.data}
        showFavorite={showFavorite ? true : false}
      />,
      {
        wrapper: TestWrapper,
      }
    );
    return {
      ...renderer,
      rerender: () => RendererComponent(showFavorite),
    };
  };

  it("should render correctly", async () => {
    RendererComponent(showFavoriteValue);
    const name = screen.getByText("character name");
    const image = screen.getByAltText("card-image");
    const button = await screen.findByTestId("favorite-button");

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should show favorite list saved on localstorage", async () => {
    showFavoriteValue = true;
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify([{ name: "Absorbing Man", id: 123, image: "image.jpg" }])
    );
    RendererComponent(showFavoriteValue);

    const name = await screen.findByText("Absorbing Man");
    expect(name).toBeInTheDocument();
  });
});

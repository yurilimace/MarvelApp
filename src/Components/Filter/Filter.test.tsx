import { fireEvent, render, screen } from "@testing-library/react";
import { Filter, FilterObject } from "./Filter";

describe("Filter Test suite", () => {
  const filterObjectMocked = {
    orderBy: "asc",
    showFavorite: false,
  } as FilterObject;

  const mockedFilterProps = {
    filterType: filterObjectMocked,
    setFiltertype: jest.fn(),
    favoriteCharactersSize: 10,
  };

  const RendererComponent = () =>
    render(
      <Filter
        filterType={filterObjectMocked}
        setFilterType={mockedFilterProps.setFiltertype}
        favoriteCharactersSize={mockedFilterProps.favoriteCharactersSize}
      />
    );

  beforeEach(() => RendererComponent());

  it("Should render correctly", async () => {
    const totalCharacter = screen.getByText(
      `Encontrado ${mockedFilterProps.favoriteCharactersSize} heróis`
    );
    const heroIcon = await screen.findByAltText("filter-hero-icon");
    const toggleSwitch = await screen.findByTestId("toggle-switch");
    const favoriteButton = await screen.findByTestId("favorite-button");

    expect(totalCharacter).toBeInTheDocument();
    expect(heroIcon).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(toggleSwitch).toBeInTheDocument();
  });

  it("should call setFilterType function", async () => {
    const favoriteButton = await screen.findByTestId("favorite-button");

    fireEvent.click(favoriteButton);
    expect(favoriteButton).toBeInTheDocument();

    expect(mockedFilterProps.setFiltertype).toBeCalled();
  });

  it("should call filter type to show favorite characters", async () => {
    const heroIcon = await screen.findByAltText("filter-hero-icon");
    const inputFilter = await screen.findByTestId("toggle-switch-input");
    fireEvent.click(inputFilter);
    expect(heroIcon).toBeInTheDocument();
    expect(mockedFilterProps.setFiltertype).toBeCalled();
  });
});

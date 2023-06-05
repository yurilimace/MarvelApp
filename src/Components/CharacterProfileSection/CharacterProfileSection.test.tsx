import { MemoryRouter } from "react-router-dom";
import { ContextComponent } from "../../Context/context";
import { CharacterProfileSection } from "./CharacterProfileSection";
import { render, screen } from "@testing-library/react";

describe("Character Profile Section test suite", () => {
  const mockedStoriesObject = {
    title: "Character Story vol 1",
    image: "story-cover.jpg",
    lastReleaseDate: "2008-12-17T00:00:00-0500",
  };

  const mockedCharactProfileSectionData = {
    name: "character Name",
    id: 1234,
    description: "Character Description mocked",
    image: "someImage.jpg",
    stories: [mockedStoriesObject],
  };

  const RenderComponent = () =>
    render(
      <MemoryRouter>
        <ContextComponent>
          <CharacterProfileSection data={mockedCharactProfileSectionData} />
        </ContextComponent>
      </MemoryRouter>
    );

  beforeEach(() => RenderComponent());

  it("should render correctly", async () => {
    const characterName = screen.getByText("character Name");
    const button = await screen.findByTestId("favorite-button");
    const characterDescription = screen.getByText(
      "Character Description mocked"
    );
    const lastComicRelease = screen.getByTestId("comicLastRelease");

    expect(characterName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(characterDescription).toBeInTheDocument();
    expect(lastComicRelease).toBeInTheDocument();
  });

  it("should render CharacterAppearances", async () => {
    const comicCounterIcon = await screen.findByAltText("comicCounterIcon");
    const movieCounterIcon = await screen.findByAltText("movieCounterIcon");
    const comicCounter = await screen.findByTestId("comicCounter");
    const movieCounter = await screen.findByTestId("movieCounter");
    expect(comicCounterIcon).toBeInTheDocument();
    expect(comicCounter).toBeInTheDocument();
    expect(movieCounterIcon).toBeInTheDocument();
    expect(movieCounter).toBeInTheDocument();
  });
});

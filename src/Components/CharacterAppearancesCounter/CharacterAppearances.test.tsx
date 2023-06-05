import { render, screen } from "@testing-library/react";
import { CharacterAppearances } from "./CharacterAppearances";

describe("Character Appearences test suite", () => {
  const ComponentRenderer = () =>
    render(<CharacterAppearances comicsAppearances={10} />);

  beforeEach(() => ComponentRenderer());

  it("should render correctly", async () => {
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

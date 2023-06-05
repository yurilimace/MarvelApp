import { fireEvent, render, screen } from "@testing-library/react";
import { FavoriteButton } from "./FavoriteButton";
import { ReactElement, JSXElementConstructor } from "react";

describe("Favorite Button test suite", () => {
  const FavoriteButtonMocked = {
    onClick: jest.fn(),
    favoriteIcon: jest.fn(),
    title: "Button Title",
  };

  let rerender: (
    ui: ReactElement<any, string | JSXElementConstructor<any>>
  ) => void;

  const RendererComponent = () =>
    render(
      <FavoriteButton
        onClick={FavoriteButtonMocked.onClick}
        favoriteIcon={FavoriteButtonMocked.favoriteIcon.mockReturnValueOnce(
          false
        )}
        title={FavoriteButtonMocked.title}
      />
    );

  beforeEach(() => {
    const { rerender: ComponentRerender } = RendererComponent();
    rerender = ComponentRerender;
  });

  it("should render correctly", async () => {
    const button = await screen.findByTestId("favorite-button");
    const icon = await screen.findByAltText("favoriteButtonIcon");
    const buttonTitle = screen.getByText("Button Title");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(buttonTitle).toBeInTheDocument();
  });

  it("should render button without title", async () => {
    rerender(
      <FavoriteButton
        onClick={FavoriteButtonMocked.onClick}
        favoriteIcon={FavoriteButtonMocked.favoriteIcon.mockReturnValueOnce(
          false
        )}
      />
    );
    const button = await screen.findByTestId("favorite-button");
    const icon = await screen.findByAltText("favoriteButtonIcon");
    const buttonTitle = await screen.queryByText("Button Title");

    console.log(buttonTitle);

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(buttonTitle).toBeNull();
  });

  it("should call onClick function", async () => {
    const button = await screen.findByTestId("favorite-button");
    fireEvent.click(button);
    expect(FavoriteButtonMocked.onClick).toBeCalled();
  });
});

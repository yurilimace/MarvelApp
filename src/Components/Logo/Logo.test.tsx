import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo component test suite", () => {
  const mockedLogoImage = "mockedLogo.svg";
  const RendererComponent = () => render(<Logo src={mockedLogoImage} />);

  it("should render correctly", async () => {
    RendererComponent();
    const mockedImage = await screen.findByAltText("logo-image");
    expect(mockedImage).toBeInTheDocument();
  });
});

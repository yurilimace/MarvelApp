import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar test suite", () => {
  const RendererComponent = () => render(<Navbar />);

  it("should render correctly", async () => {
    RendererComponent();
    const iconNavbar = await screen.findByAltText("logo-image");
    const searchInput = await screen.findByTestId("searchInput");
    expect(iconNavbar).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});

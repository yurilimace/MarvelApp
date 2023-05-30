import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Jest First Test", () => {
  const ComponentRenderer = () => render(<App />);

  beforeEach(() => {
    ComponentRenderer();
  });
  it("should render correctly", () => {
    const text = screen.getByText("valor inicial");
    expect(text).toBeInTheDocument();
  });
  it("should change h2 text", async () => {
    const button = screen.getByText("mudar o valor");
    fireEvent.click(button);
    const text = await screen.findByText("novo valor");
    expect(text).toBeInTheDocument();
  });
});

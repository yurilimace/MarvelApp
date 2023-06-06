import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("Search input test suite", () => {
  const mockedSearchInput = jest.fn();

  const RendereComponent = () =>
    render(<SearchInput setSearchInput={mockedSearchInput} />);

  it("should render correctly", () => {
    RendereComponent();
    const input = screen.getByTestId("searchInput");
    expect(input).toBeInTheDocument();
  });

  it("should call handleChange function", () => {
    RendereComponent();
    const input = screen.getByTestId("searchInput");
    fireEvent.change(input, { target: { value: "input value" } });
    expect(input).toHaveValue("input value");
  });
});

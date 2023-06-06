import { fireEvent, render, screen } from "@testing-library/react";
import { ToggleSwitch } from "./ToggleSwitch";

describe("ToggleSwitch test suite", () => {
  const mockedToggle = {
    defaultValue: jest.fn().mockReturnValue(true),
    handleChange: jest.fn(),
  };

  const RendererComponent = () =>
    render(
      <ToggleSwitch
        defaultValue={mockedToggle.defaultValue}
        handleChange={mockedToggle.handleChange}
      />
    );

  it("should render correctly", async () => {
    RendererComponent();
    const toggleSwitch = await screen.findByTestId("toggle-switch");
    const toggleSInput = await screen.findByTestId("toggle-switch-input");
    expect(toggleSwitch).toBeInTheDocument();
    expect(toggleSInput).toBeInTheDocument();
  });

  it("should call handleChange props ", async () => {
    RendererComponent();
    const toggleInput = await screen.findByTestId("toggle-switch-input");
    expect(toggleInput).toBeInTheDocument();
    fireEvent.click(toggleInput);
    expect(mockedToggle.handleChange).toBeCalled();
  });
});

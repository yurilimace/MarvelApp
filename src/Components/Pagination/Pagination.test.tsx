import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination test suite", () => {
  const mockedPaginationProps = {
    currentPage: 0,
    lastPage: 10,
    setCurrentPage: jest.fn(),
  };
  const RendererComponent = () =>
    render(
      <Pagination
        currentPage={mockedPaginationProps.currentPage}
        lastPage={mockedPaginationProps.lastPage}
        setCurrentPage={mockedPaginationProps.setCurrentPage}
      />
    );

  it("should render correctly", () => {
    RendererComponent();
    const currentPageText = screen.getByText(
      (mockedPaginationProps.currentPage + 1).toString()
    );
    const lastPage = screen.getByText(
      mockedPaginationProps.lastPage.toString()
    );
    expect(currentPageText).toBeInTheDocument();
    expect(lastPage).toBeInTheDocument();
  });

  it("should call setCurrentPage", () => {
    RendererComponent();
    const lastPage = screen.getByText(
      mockedPaginationProps.lastPage.toString()
    );

    fireEvent.click(lastPage);

    expect(mockedPaginationProps.setCurrentPage).toBeCalled();
  });
});

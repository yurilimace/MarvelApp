import { useEffect, useState } from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (el: number) => void;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
}: PaginationProps) => {
  const [paginationSiblings, setPaginationSiblings] = useState<number[]>([]);

  const CalculatePaginationSiblings = () => {
    const newArr = [];
    if (paginationSiblings.length === 0) {
      for (let i = 0; i < 5; i++) {
        newArr.push(currentPage + 1 + i);
      }
      setPaginationSiblings(newArr);
    } else {
      const lastElement = paginationSiblings[paginationSiblings.length - 1];

      if (currentPage + 1 === lastElement) {
        for (let i = 0; i < 5; i++) {
          newArr.push(currentPage + 1 + i);
        }

        setPaginationSiblings(newArr);
      }
    }
  };

  useEffect(() => {
    CalculatePaginationSiblings();
  }, [currentPage]);

  return (
    <div className="PaginationContainer">
      {paginationSiblings.map((el) => (
        <button
          className={
            currentPage + 1 === el
              ? "PaginationButton Active"
              : "PaginationButton"
          }
          onClick={() => setCurrentPage(el - 1)}
        >
          {el}
        </button>
      ))}
      <div className="PaginationSpacer"> ... </div>
      <button
        className={
          currentPage + 1 === lastPage
            ? "PaginationButton Active"
            : "PaginationButton"
        }
        onClick={() => setCurrentPage(lastPage - 1)}
      >
        {" "}
        {lastPage}{" "}
      </button>
    </div>
  );
};

import "./Pagination.css";

// vou precisar do total de paginas,offset e das paginas vizinhas para montar.

export const Pagination = () => {
  return (
    <div className="PaginationContainer">
      <button> 1 </button>
      <button> 2 </button>
      <button> 3 </button>
      <button> 4 </button>
    </div>
  );
};

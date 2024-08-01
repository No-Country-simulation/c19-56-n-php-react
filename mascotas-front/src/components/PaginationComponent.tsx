import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

type PaginationComponentProps = {
  prevPage: (page: number) => void | null;
  nextPage: (page: number) => void | null;
  setPage: (page: number) => void;
  currentPageState: number;
  lastPageState: number;
  totalPageState: number;
  startPage: number;
  endPage: number;
  totalPages: number;
  pageNumbers: number[];
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  prevPage,
  nextPage,
  setPage,
  currentPageState,
  lastPageState,
  totalPageState,
  startPage,
  endPage,
  totalPages,
  pageNumbers,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex justify-center mt-8">
        <div className="flex items-center">
          {currentPageState > 1 && (
            <a
              href="#"
              onClick={() => setPage(currentPageState - 1)}
              className="bg-[#efefef] px-4 py-2 mx-1"
            >
              Anterior
            </a>
          )}

          {startPage > 1 && <div>...</div>}
          {pageNumbers?.map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`mx-1 px-3 py-2 ${
                currentPageState === number
                  ? "bg-[#000] text-white"
                  : "bg-[#efefef]"
              }`}
            >
              {number}
            </button>
          ))}
          {endPage < totalPages && <div>...</div>}

          {nextPage && (
            <a
              href="#"
              onClick={() => setPage(currentPageState + 1)}
              className="bg-[#efefef] px-4 py-2 mx-1"
            >
              Siguiente
            </a>
          )}
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-700">
          <span className="font-bold">{currentPageState}</span> -{" "}
          <span className="font-bold">{lastPageState}</span> de{" "}
          <span className="font-bold">{totalPageState}</span> solicitudes
        </p>
      </div>
    </div>
  );
};

export default PaginationComponent;

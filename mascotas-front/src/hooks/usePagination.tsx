export const usePagination = (
  total: number,
  currentPage: number,
  setPage: any
) => {
  const totalPages = Math.ceil(total / 10);
  const startPage = Math.max(1, currentPage - 10);
  const endPage = Math.min(totalPages, currentPage + 10);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const nextPage = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage: number) => Math.max(prevPage - 1, 1));
  };

  return { pageNumbers, nextPage, prevPage };
};

import { usePetsFrontPageData } from "@/hooks/usePetsDataFrontPage";
import Card from "./Card";

import { usePetsPaginateFrontPageStore } from "@/store/frontPage/Paginations/petsPaginationsFrontPage.store";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "./PaginationComponent";

export default function Cards() {
  const totalPageState = usePetsPaginateFrontPageStore(
    (state) => state.totalPageState
  );
  const setPage = usePetsPaginateFrontPageStore((state) => state.setPageState);
  const currentPageState = usePetsPaginateFrontPageStore(
    (state) => state.currentPageState
  );
  const lastPageState = usePetsPaginateFrontPageStore(
    (state) => state.lastPageState
  );
  const { listPets, isLoading } = usePetsFrontPageData();
  console.log(listPets);
  const { pageNumbers, nextPage, prevPage } = usePagination(
    totalPageState,
    currentPageState,
    setPage
  );
  const totalPages = Math.ceil(totalPageState / 10);
  const startPage = Math.max(1, currentPageState - 10);
  const endPage = Math.min(totalPages, currentPageState + 10);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!isLoading &&
          listPets.map((pet: any) => (
            <Card
              id={pet.id}
              key={pet.id}
              name={pet.name}
              image={pet.image}
              age={pet.age}
              description={pet.description}
            />
          ))}
      </div>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
        currentPageState={currentPageState}
        lastPageState={lastPageState}
        totalPageState={totalPageState}
        startPage={startPage}
        endPage={endPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
      />
    </div>
  );
}

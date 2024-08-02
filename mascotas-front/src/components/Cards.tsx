import { usePetsFrontPageData } from "@/hooks/usePetsDataFrontPage";
import Card from "./Card";

import { usePetsPaginateFrontPageStore } from "@/store/frontPage/Paginations/petsPaginationsFrontPage.store";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "./PaginationComponent";
import { useSpecieStore } from "@/store/filter/filterForSpecie.store";
import { useRaceStore } from "@/store/filter/filterForRace.store";
import { useSizeStore } from "@/store/filter/filterForSize.store";
import { useFilterRange } from "@/store/filter/filterForAge.store";

export default function Cards() {
  const species = useSpecieStore((state) => state.selectedSpecies);
  const race = useRaceStore((state) => state.selectedRace);
  const size = useSizeStore((state) => state.size);
  const age = useFilterRange((state) => state.maxValue);
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
      <div className="flex flex-wrap space-x-4 py-3 px-3">
        {species && (
          <h3 className="text-sm font-semibold">Especies: {species.name}</h3>
        )}
        {race && <h3 className="text-sm font-semibold">Raza de mascota: {race.name}</h3>}
        {size && <h3 className="text-sm font-semibold">Tamaño de mascota: {size}</h3>}
        {age && <h3 className="text-sm font-semibold">Edad de mascota: {age} años</h3>}
      </div>
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

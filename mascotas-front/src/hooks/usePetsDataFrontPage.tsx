import { useAuthStore } from "@/store";
import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { usePetsPaginateFrontPageStore } from "@/store/frontPage/Paginations/petsPaginationsFrontPage.store";
import { useSpecieStore } from "@/store/filter/filterForSpecie.store";
import { useRaceStore } from "@/store/filter/filterForRace.store";
import { useSizeStore } from "@/store/filter/filterForSize.store";
import { useFilterRange } from "@/store/filter/filterForAge.store";

export const usePetsFrontPageData = () => {
  const token = useAuthStore((state) => state.token);
  const page = usePetsPaginateFrontPageStore((state) => state.pageState);
  const species = useSpecieStore((state) => state.selectedSpecies);
  const race = useRaceStore((state) => state.selectedRace);
  const size = useSizeStore((state) => state.size);
  const age = useFilterRange((state) => state.maxValue);

  console.log("species", species);
  console.log(race, 'race');
  console.log(size, 'size');
  console.log(age, 'age');
  const setCurrentPageState = usePetsPaginateFrontPageStore(
    (state) => state.setCurrentPageState
  );
  const setTotalPageState = usePetsPaginateFrontPageStore(
    (state) => state.setTotalPageState
  );
  const setLastPageState = usePetsPaginateFrontPageStore(
    (state) => state.setLastPageState
  );
  const { data, isLoading } = useFetch(`/api/pets?page=${page}`, {}, token);
  const { total, currentPage, lastPage, data: listPets } = data || {};
  useEffect(() => {
    if (total !== undefined && currentPage !== undefined) {
      setTotalPageState(total);
      setCurrentPageState(currentPage);
      setLastPageState(lastPage);
    }
  }, [total, currentPage, lastPage]);
  return {
    listPets,
    isLoading,
  };
};

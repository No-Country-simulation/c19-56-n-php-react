import { useAuthStore } from "@/store";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { usePetsPaginateFrontPageStore } from "@/store/frontPage/Paginations/petsPaginationsFrontPage.store";
import { useSpecieStore } from "@/store/filter/filterForSpecie.store";
import { useRaceStore } from "@/store/filter/filterForRace.store";
import { useSizeStore } from "@/store/filter/filterForSize.store";
import { useFilterRange } from "@/store/filter/filterForAge.store";
import { useDebounce } from "./useDebounce";

export const usePetsFrontPageData = () => {
  const token = useAuthStore((state) => state.token);
  const page = usePetsPaginateFrontPageStore((state) => state.pageState);
  const species = useSpecieStore((state) => state.selectedSpecies);
  const race = useRaceStore((state) => state.selectedRace);
  const size = useSizeStore((state) => state.size);
  const age = useFilterRange((state) => state.maxValue);

  console.log(size, "size desde filter");
  const [debouncedAge, setDebouncedAge] = useState<number>(age || 0);

  // const debouncedSpecies = useDebounce({ inputValue: species?.id , delay: 500 });
  // const debouncedRace = useDebounce({ inputValue: race?.id, delay: 500 });
  const debouncedSize = useDebounce({ inputValue: size, delay: 500 });

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (age) {
        setDebouncedAge(age);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [age]);

  let queryString = "";

  if (species) {
    queryString += `specie_id=${species.id}`;
  }

  if (race) {
    queryString += queryString ? `&race_id=${race.id}` : `race_id=${race.id}`;
  }

  if (size) {
    console.log("call to size", size);
    queryString += queryString ? `&size=${size}` : `size=${size}`;
  }

  if (debouncedAge !== undefined) {
    queryString += queryString ? `&age=${debouncedAge}` : `age=${debouncedAge}`;
  }

  console.log(queryString, "query string");
  let url = `/api/pets?page=${page}${queryString ? `&${queryString}` : ""}`;
  console.log(url, "url");
  const { data, isLoading } = useFetch(url, {}, token);

  const setCurrentPageState = usePetsPaginateFrontPageStore(
    (state) => state.setCurrentPageState
  );
  const setTotalPageState = usePetsPaginateFrontPageStore(
    (state) => state.setTotalPageState
  );
  const setLastPageState = usePetsPaginateFrontPageStore(
    (state) => state.setLastPageState
  );

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

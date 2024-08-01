import { useAuthStore } from "@/store";
import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { usePetsPaginateFrontPageStore } from "@/store/frontPage/Paginations/petsPaginationsFrontPage.store";

export const usePetsFrontPageData = () => {
  const token = useAuthStore((state) => state.token);
  const page = usePetsPaginateFrontPageStore((state) => state.pageState);
  const currentPageState = usePetsPaginateFrontPageStore(
    (state) => state.currentPageState
  );
  const totalPageState = usePetsPaginateFrontPageStore(
    (state) => state.totalPageState
  );
  const lastPageState = usePetsPaginateFrontPageStore(
    (state) => state.lastPageState
  );
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

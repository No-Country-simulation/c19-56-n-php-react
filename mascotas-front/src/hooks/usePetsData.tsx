import { useAuthStore, usePetsPaginateStore } from "@/store";
import { useEffect } from "react";
import { useFetch } from "./useFetch";

export const usePetsData = () => {
  const token = useAuthStore((state) => state.token);
  const page = usePetsPaginateStore((state) => state.pageState);
  const currentPageState = usePetsPaginateStore(
    (state) => state.currentPageState
  );
  const totalPageState = usePetsPaginateStore((state) => state.totalPageState);
  const lastPageState = usePetsPaginateStore((state) => state.lastPageState);
  const setCurrentPageState = usePetsPaginateStore(
    (state) => state.setCurrentPageState
  );
  const setTotalPageState = usePetsPaginateStore(
    (state) => state.setTotalPageState
  );
  const setLastPageState = usePetsPaginateStore(
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

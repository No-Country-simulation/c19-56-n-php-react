import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IpaginateContext {
  pageState: number;
  currentPageState: number;
  totalPageState: number;
  lastPageState: number;
  setTotalPageState: (value: number) => void;
  setPageState: (value: number) => void;
  setCurrentPageState: (value: number) => void;
  setLastPageState: (value: number) => void;
}
const pageContext: StateCreator<
  IpaginateContext,
  [["zustand/devtools", never]]
> = (set) => ({
  currentPageState: 1,
  pageState: 1,
  totalPageState: 0,
  lastPageState: 0,
  setPageState: (value: number) =>
    set({ pageState: value }, false, "setPageContext"),
  setCurrentPageState: (value: number) =>
    set({ currentPageState: value }, false, "setCurrentPageContext"),
  setTotalPageState: (value: number) =>
    set({ totalPageState: value }, false, "setTotalPageContext"),
  setLastPageState: (value: number) =>
    set({ lastPageState: value }, false, "setLastPageContext"),
});
export const usePetsPaginateStore = create<IpaginateContext>()(
  devtools(
    persist(pageContext, {
      name: "paginatePets",
    })
  )
);

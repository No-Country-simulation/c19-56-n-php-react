import { type StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface ISearchState {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const useSearchMascotasStore = create<ISearchState>()(
  devtools((set) => ({
    inputValue: "",
    setInputValue: (value: string) => set(() => ({ inputValue: value })),
  }))
);

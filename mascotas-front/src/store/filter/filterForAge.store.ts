import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IFilterRange {
  minValue: number | undefined;
  setMinValue: (value: number | undefined) => void;
  maxValue: number | undefined;
  setMaxValue: (value: number | undefined) => void;
}

const filterValueState: StateCreator<
  IFilterRange,
  [["zustand/devtools", never]]
> = (set) => ({
  minValue: 0,
  setMinValue: (value: number | undefined) => set({ minValue: value }),
  maxValue: undefined,
  setMaxValue: (value: number | undefined) => set({ maxValue: value }),
});

export const useFilterRange = create<IFilterRange>()(filterValueState);

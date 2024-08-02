import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ISizeState {
  size: string;
  toggleRace: (specie: string) => void;
}

const sizeState: StateCreator<ISizeState, [["zustand/devtools", never]]> = (
  set
) => ({
  size: "pequeño",
  toggleRace: (value: string) => set({ size: value }),
});

export const useSizeStore = create<ISizeState>()(
  devtools(
    persist(sizeState, {
      name: "selectedSize",
    })
  )
);

import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ISpecie } from "../../interfaces";

interface ISpecieState {
  selectedSpecies: ISpecie | null;
  toggleSpecie: (specie: ISpecie) => void;
}

const specieState: StateCreator<ISpecieState, [["zustand/devtools", never]]> = (
  set
) => ({
  selectedSpecies: null,
  toggleSpecie: (specie: ISpecie) =>
    set((state) => ({
      selectedSpecies: state.selectedSpecies?.id === specie.id ? null : specie,
    })),
});

export const useSpecieStore = create<ISpecieState>()(
  devtools(
    persist(specieState, {
      name: "selectedSpecies",
    })
  )
);
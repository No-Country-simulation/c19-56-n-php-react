import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IRace } from "../../interfaces";

interface IRaceState {
  selectedRace: IRace | null;
  toggleRace: (specie: IRace) => void;
}

const raceState: StateCreator<IRaceState, [["zustand/devtools", never]]> = (
  set
) => ({
  selectedRace: null,
  toggleRace: (race: IRace) =>
    set((state) => ({
      selectedRace: state.selectedRace?.id === race.id ? null : race,
    })),
});

export const useRaceStore = create<IRaceState>()(
  devtools(
    persist(raceState, {
      name: "selectedRace",
    })
  )
);

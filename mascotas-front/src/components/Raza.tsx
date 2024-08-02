import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "@/icons";
import { Label } from "./ui/label";
import { useFetchWithOutPaginate } from "@/hooks/useFetchWithOutPaginate";
import { useSpecieStore } from "@/store/filter/filterForSpecie.store";
import { IRace, ISpecie } from "@/interfaces";
import { useRaceStore } from "@/store/filter/filterForRace.store";

export const Raza = () => {
  const especies = useSpecieStore((state) => state.selectedSpecies);
  const specieIdParam = especies?.id ? `?specie_id=${especies.id}` : "";
  const toggleRace = useRaceStore((state) => state.toggleRace);
  const selectedRace = useRaceStore((state) => state.selectedRace);
  const { data, isLoading } = useFetchWithOutPaginate(
    `/api/races${specieIdParam}`
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center w-full md:w-auto text-gray-800 font-bold text-xl opacity-80"
        >
          Razas
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <div className="flex flex-col">
          {data?.map((race: IRace) => (
            <Button
              key={race.id}
              onClick={() => toggleRace(race)}
              variant="ghost"
              className={`outline-none flex items-center gap-2 text-gray-800 font-bold text-xl opacity-80 ${
                selectedRace?.id === race.id ? "bg-blue-500 text-white" : ""
              }`}
            >
              {race.name}
            </Button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
import { ISpecie } from "@/interfaces";

export const Species = () => {
  const { data, isLoading } = useFetchWithOutPaginate(`/api/specie`);
  const selectedSpecies = useSpecieStore((state) => state.selectedSpecies);
  const toggleSpecie = useSpecieStore((state) => state.toggleSpecie);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center w-full md:w-auto text-gray-800 font-bold text-xl opacity-80"
        >
          Especies
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <div className="flex flex-col">
          {data?.map((specie: ISpecie) => (
            <Button
              key={specie.id}
              onClick={() => toggleSpecie(specie)}
              variant="ghost"
              className="outline-none flex items-center gap-2 text-gray-800 font-bold text-xl opacity-80"
            >
              {specie.name}
            </Button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

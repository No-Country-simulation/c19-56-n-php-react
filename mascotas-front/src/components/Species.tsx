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

export const Species = () => {
  const { data, isLoading } = useFetchWithOutPaginate(`/api/specie`);
  console.log(data);
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
          {data.map((specie: { id: number; name: string }) => (
            <Button
              key={specie.id}
              variant="ghost"
              className="outline-none flex items-center gap-2 text-gray-800 font-bold text-xl opacity-80"
            >
              <Label>{specie.name}</Label>
            </Button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

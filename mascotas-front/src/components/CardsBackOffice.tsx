import React, { use, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon, FilterIcon, PlusIcon, SearchIcon } from "@/icons";
import CardBackOffice from "./CardBackOffice";
import Pagination from "./PaginationComponent";
import { Pet, Pets } from "@/interfaces";
import { usePetsData } from "@/hooks";
import { usePetsPaginateStore } from "@/store";
import { usePagination } from "@/hooks/usePagination";
import { CreateNewPet } from "./CreatePet";

const CardsBackOffice = () => {
  const totalPageState = usePetsPaginateStore((state) => state.totalPageState);
  const setPage = usePetsPaginateStore((state) => state.setPageState);
  const currentPageState = usePetsPaginateStore(
    (state) => state.currentPageState
  );
  const lastPageState = usePetsPaginateStore((state) => state.lastPageState);
  const { listPets, isLoading } = usePetsData();
  const { pageNumbers, nextPage, prevPage } = usePagination(
    totalPageState,
    currentPageState,
    setPage
  );
  const totalPages = Math.ceil(totalPageState / 10);
  const startPage = Math.max(1, currentPageState - 10);
  const endPage = Math.min(totalPages, currentPageState + 10);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <header className="bg-background px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                <div className="flex items-center justify-between">
                  <span>Role</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <div className="flex items-center justify-between">
                  <span>Age</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </div>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </div>
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search users..."
              className="pl-8 pr-4 py-2 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
       
        <CreateNewPet />
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listPets?.map((pet: Pet) => {
          // TODO: Agregar Descripcion desde el backend para pets
          return (
            <CardBackOffice
              key={pet.id}
              image={pet.image}
              name={pet.name}
              age={pet.age}
              // description={pet.descripcion}
            />
          );
        })}
        <label className="flex items-center justify-center border-2 border-dashed rounded-md h-32 cursor-pointer">
          <AiOutlinePlus size={24} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            // onChange={handleAddImage}
          />
        </label>
      </div>
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        setPage={setPage}
        currentPageState={currentPageState}
        lastPageState={lastPageState}
        totalPageState={totalPageState}
        startPage={startPage}
        endPage={endPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
      />
    </main>
  );
};

export default CardsBackOffice;

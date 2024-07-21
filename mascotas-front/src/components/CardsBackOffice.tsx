import React, { use, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useFetch } from "@/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon, FilterIcon, PlusIcon, SearchIcon } from "@/icons";
import CardBackOffice from "./CardBackOffice";
import axios from "axios";
// import { Pet } from "@/Types";
import Pagination from "./PaginationComponent";
import { useAuthStore, usePetsPaginateStore } from "@/store";
import { Pet, Pets } from "@/interfaces";

const CardsBackOffice = () => {
  const token = useAuthStore((state) => state.token);
  const page = usePetsPaginateStore((state) => state.pageState);
  const setPageState = usePetsPaginateStore((state) => state.setPageState);
  // const currentPage = usePetsPaginateStore(state => state.currentPageState)
  const setCurrentPageState = usePetsPaginateStore(
    (state) => state.setCurrentPageState
  );
  const setTotalPageState = usePetsPaginateStore(
    (state) => state.setTotalPageState
  );
  const setLastPageState = usePetsPaginateStore(
    (state) => state.setLastPageState
  );

  const { data, isLoading } = useFetch(`/api/pets?page=${page}`, {}, token);
  // console.log(data, isLoading, "data");

  const { total, currentPage, lastPage, data: listPets } = data || {};
  // console.log(listPets, total, currentPage, lastPage, "list");
  useEffect(() => {
    if (total !== undefined && currentPage !== undefined) {
      setTotalPageState(total);
      setCurrentPageState(currentPage);
      setLastPageState(lastPage);
    }
  }, [total, currentPage, lastPage]);
  // console.log(listPets, 'listPets')
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
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          <span>Add User</span>
        </Button>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listPets?.map((pet: Pet) => {
          console.log(pet);
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
      <Pagination />
    </main>
  );
};

export default CardsBackOffice;

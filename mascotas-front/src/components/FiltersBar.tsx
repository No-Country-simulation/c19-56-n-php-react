import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon, DogIcon, PawPrintIcon, SmileIcon } from "@/icons";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Species } from "./Species";
import { Raza } from "./Raza";

const species = ["perros", "gatos", "aves", "roedores", "reptiles"];

export default function FiltersBar() {
  const [size, setSize] = useState("small");
  const [ageRange, setAgeRange] = useState([0, 10]);

  return (
    <div className="w-full">
      <div className="container px-4 md:px-6 py-6 md:py-10">
        <div className="flex flex-wrap md:flex-row md:justify-center md:items-start gap-4 md:gap-8">
          <Species />
          <Raza />
          {["Especies", "Razas", "Temperamento"].map((category, idx) => (
            <DropdownMenu key={idx}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="outliner-none flex items-center gap-2 text-gray-800 font-bold text-xl opacity-80"
                >
                  {category === "Especies" ? (
                    <PawPrintIcon className="w-5 h-5" />
                  ) : category === "Razas" ? (
                    <DogIcon className="w-5 h-5" />
                  ) : (
                    <SmileIcon className="w-5 h-5" />
                  )}
                  {category}
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {species.map((specie) => (
                  <DropdownMenuCheckboxItem key={specie}>
                    <div className="flex items-center justify-between  text-gray-800 font-bold text-xl opacity-80">
                      <span>{specie}</span>
                    </div>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center w-full md:w-auto text-gray-800 font-bold text-xl opacity-80"
              >
                Rangos
                <ChevronDownIcon className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 py-6 px-4">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-semibold">Tamaño:</div>
                  <div className="flex flex-row gap-2">
                    {["small", "medium", "large"].map((sizeValue) => (
                      <Label
                        key={sizeValue}
                        className={`flex items-center gap-2 font-normal cursor-pointer ${
                          size === sizeValue ? "font-semibold" : ""
                        }`}
                        onClick={() => setSize(sizeValue)}
                      >
                        <input
                          type="radio"
                          value={sizeValue}
                          checked={size === sizeValue}
                          onChange={() => setSize(sizeValue)}
                          className="sr-only"
                        />
                        <div
                          className={`h-4 w-4 rounded-full border relative ${
                            size === sizeValue
                              ? "border-primary"
                              : "border-gray-400"
                          }`}
                        >
                          <span
                            className={`absolute inset-0 m-auto h-2 w-2 rounded-full ${
                              size === sizeValue ? "bg-black" : "bg-transparent"
                            }`}
                          ></span>
                        </div>
                        {sizeValue.charAt(0).toUpperCase() + sizeValue.slice(1)}
                      </Label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-semibold">Edad:</div>
                  <div className="flex items-center gap-2">
                    <Slider
                      min={0}
                      max={20}
                      value={ageRange}
                      onValueChange={setAgeRange}
                      className="flex-1"
                    />
                    <span>
                      {ageRange[0]} - {ageRange[1]} años
                    </span>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

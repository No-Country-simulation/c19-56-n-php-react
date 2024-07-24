import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  CalendarIcon,
  DogIcon,
  FilterIcon,
  PawPrintIcon,
  RulerIcon,
  SmileIcon,
} from "@/icons"

export default function FiltersBar() {
  return (
    <div className="w-full">
      <div className="container px-4 md:px-6 py-6 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 md:hidden"
              >
                <FilterIcon className="w-5 h-5" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-full md:w-auto md:grid md:grid-cols-5 md:gap-4"
            >
              <DropdownMenuItem className="flex items-center gap-2">
                <PawPrintIcon className="w-5 h-5" />
                Especie
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <DogIcon className="w-5 h-5" />
                Raza
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Edad
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <RulerIcon className="w-5 h-5" />
                Tamaño
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <SmileIcon className="w-5 h-5" />
                Temperamento
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <PawPrintIcon className="w-5 h-5" />
              Especies
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <DogIcon className="w-5 h-5" />
              Raza
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Edad
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5" />
              Tamaño
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <SmileIcon className="w-5 h-5" />
              Temperamento
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

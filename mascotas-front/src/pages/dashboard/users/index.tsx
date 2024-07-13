import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRightIcon, FilterIcon, PlusIcon, SearchIcon } from "@/icons"
import BackOffice from "@/layout/BackOffice"
import { Th, UserRow } from "@/components/TableUsers"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 2,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 4,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 6,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 8,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 10,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 11,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 12,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 13,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 14,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
  {
    id: 15,
    name: "John Doe",
    email: "john@doe.com",
    rol: "admin",
  },
  {
    id: 16,
    name: "Olivia Williams",
    email: "olivia@example.com",
    rol: "Editor",
  },
]

export default function Component() {
  return (
    <BackOffice>
      <div className="w-full">
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
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (

                <UserRow
                  key={u.id}
                  id={u.id}
                  name={u.name}
                  email={u.email}
                  rol={u.rol}
                  deleteUser={(id: number) =>
                    alert(`Todo: funcion de borrar usuario! id: ${id}`)
                  }
                />

              ))}

            </tbody>
          </table>
        </div>
      </div>
    </BackOffice>
  )
}

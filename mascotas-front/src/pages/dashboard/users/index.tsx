import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import {
  ChevronRightIcon,
  EyeIcon,
  FilterIcon,
  MoveVerticalIcon,
  PlusIcon,
  SearchIcon,
} from "@/icons"
import { FilePenIcon, TrashIcon } from "lucide-react"
import BackOffice from "@/layout/BackOffice"

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
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Username
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-medium text-sm">
                  Role
                </th>
                <th className="px-4 py-3 text-right font-medium text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted/20 hover:bg-muted/10">
                <td className="px-4 py-3 text-base font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-base">john@example.com</td>
                <td className="px-4 py-3 text-base">Admin</td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <MoveVerticalIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <FilePenIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span>Delete</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <tr className="border-b border-muted/20 hover:bg-muted/10">
                <td className="px-4 py-3 text-base font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>OW</AvatarFallback>
                    </Avatar>
                    <span>Olivia Williams</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-base">olivia@example.com</td>
                <td className="px-4 py-3 text-base">Editor</td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <MoveVerticalIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <FilePenIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span>Delete</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
              <tr className="border-b border-muted/20 hover:bg-muted/10">
                <td className="px-4 py-3 text-base font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>NW</AvatarFallback>
                    </Avatar>
                    <span>Noah Williams</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-base">noah@example.com</td>
                <td className="px-4 py-3 text-base">User</td>
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <MoveVerticalIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <FilePenIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span>Delete</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BackOffice>
  )
}

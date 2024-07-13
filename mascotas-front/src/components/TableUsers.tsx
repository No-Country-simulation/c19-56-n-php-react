import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { EyeIcon, MoveVerticalIcon } from "@/icons"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { FilePenIcon, TrashIcon } from "lucide-react"

interface UserProps {
  id: number
  name: string
  email: string
  rol: string
  deleteUser: (id: number) => void
}

export const UserRow = ({ id, name, email, rol, deleteUser }: UserProps) => {
  const initials = name
    .split(" ")
    .map((w) => w.slice(0, 1))
    .join("")

  return (
    <tr className="border-b border-muted/20 hover:bg-muted/10">
      <td className="px-4 py-3 text-base font-medium">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span>{name}</span>
        </div>
      </td>

      <td className="px-4 py-3 text-base">{email}</td>

      <td className="px-4 py-3 text-base">{rol}</td>

      <td className="px-4 py-3 text-right">
        <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
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
              <div
                onClick={() => deleteUser(id)}
                className="flex items-center gap-2"
              >
                <TrashIcon className="h-4 w-4" />
                <span>Delete</span>
              </div>
            </DropdownMenuItem>

          </DropdownMenuContent>

        </DropdownMenu>
      </td>
    </tr>
  )
}

export const Th = ({ children }: { children: any }) => {
  return <th className="px-4 py-3 text-left font-medium text-xl">{children}</th>
}

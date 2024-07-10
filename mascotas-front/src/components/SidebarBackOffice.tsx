import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronLeftIcon,
  HomeIcon,
  Package2Icon,
  PawPrintIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "@/icons"

export default function SidebarBackOffice() {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <aside className="bg-background border-r border-muted/40 flex flex-col justify-between py-4 px-2 transition-all duration-300 group data-[collapsed=true]:w-14 data-[collapsed=false]:w-60">
        <div className="flex flex-col items-start justify-center gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <Package2Icon className="h-6 w-6" />
            <span className="group-data-[collapsed=true]:hidden">Acme Inc</span>
          </Link>

          <nav className="flex flex-col items-start gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary group-data-[collapsed=true]:justify-center"
              prefetch={false}
            >
              <HomeIcon className="h-5 w-5" />
              <span className="group-data-[collapsed=true]:hidden">Home</span>
            </Link>
            <Link
              href="/dashboard/pets"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary group-data-[collapsed=true]:justify-center"
              prefetch={false}
            >
              <PawPrintIcon className="h-5 w-5" />
              <span className="group-data-[collapsed=true]:hidden">Pets</span>
            </Link>
            <Link
              href="/dashboard/users"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary group-data-[collapsed=true]:justify-center"
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5" />
              <span className="group-data-[collapsed=true]:hidden">Users</span>
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary group-data-[collapsed=true]:justify-center"
              prefetch={false}
            >
              <UserIcon className="h-5 w-5" />
              <span className="group-data-[collapsed=true]:hidden">
                Profile
              </span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary group-data-[collapsed=true]:justify-center"
              prefetch={false}
            >
              <SettingsIcon className="h-5 w-5" />
              <span className="group-data-[collapsed=true]:hidden">
                Settings
              </span>
            </Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-full transition-all group-data-[collapsed=true]:rotate-180"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </aside>
      <div className="flex-1 p-6" />
    </div>
  )
}

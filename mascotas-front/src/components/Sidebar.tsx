import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useEffect, useState } from "react"
import NavigationItem from "./NavigationItem"
import { isCryptoKey } from "util/types"
import { HomeIcon, MenuIcon, Package2Icon, PawPrintIcon, SettingsIcon, UserIcon, UsersIcon } from "@/icons"
//CLX para clase dinamica
//Zustand para state
const classtyles =
  "flex items-center grow rounded-lg px-3 py-2 text-muted-foreground transition-colors ease-out duration-150 hover:bg-[#222] hover:text-primary"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen bg-[#333]">
      <aside
        className={`container bg-inherit border-r border-muted/40 flex flex-col justify-start py-4  gap-4 ease-in-out duration-300 ${
          isCollapsed ? "w-[9rem] pl-8 pr-0" : "w-64 px-8"
        }`}
      >
        <div className="flex flex-row items-center justify-between gap-7 text-white">
          <Link
            href="#"
            className={`${classtyles} ${
              isCollapsed ? "flex items-center gap-20 font-semibold" : ""
            }`}
            prefetch={false}
            // flex items-center gap-20 font-semibold
          >
            <Package2Icon className="h-6 w-6" />
            <span className=" text-nowrap">A.C.M.E Inc</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <nav
          className={`flex flex-row flex-wrap w-full items-start justify-between gap-5 overflow-x-hidden ${
            isCollapsed ? "w-[6rem]  " : "  "
          } text-white text-xl`}
        >
          <NavigationItem
            href='/dashboard'
            title='Home'
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <HomeIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href='/dashboard/pets'
            title='Pets'
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <PawPrintIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href='/dashboard/users'
            title='Users'
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <UsersIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href='/dashboard/profile'
            title='Profile'
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <UserIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href='/dashboard/settings'
            title='Settings'
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <SettingsIcon className="h-5 w-5" />
          </NavigationItem>

        </nav>
      </aside>
    </div>
  )
}

export default Sidebar

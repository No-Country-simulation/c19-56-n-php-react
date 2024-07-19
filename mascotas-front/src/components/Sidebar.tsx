import { Button } from "@/components/ui/button"
import { useState } from "react"
import NavigationItem from "./NavigationItem"
import { isCryptoKey } from "util/types"
import {
  HomeIcon,
  MenuClosedIcon,
  MenuOpenIcon,
  PawPrintIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "@/icons"
//CLX para clase dinamica
//Zustand para state
const classtyles =
  "flex items-left grow rounded-lg px-3 py-2 text-muted-foreground transition-colors ease-out duration-150 hover:bg-[#222] hover:text-primary"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  function handleToggle() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      className={`min-h-screen bg-[#333] text-white transition-width duration-300 ${
        isCollapsed ? "w-20" : "w-52"
      }`}
    >
      <aside className="flex flex-col justify-between h-screen p-0 border-r border-gray-700 transition-all duration-300">

        <nav
          className={`px-2 flex flex-col flex-wrap w-full items-start justify-between gap-5 overflow-x-hidden text-white text-xl`}
        >
        <Button
          variant="ghost"
          size="icon"
          className={`m-4 ml-auto rounded-full transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
          onClick={handleToggle}
        >
          {!isCollapsed ? (
            <MenuOpenIcon className="h-5 w-5" />
          ) : (
            <MenuClosedIcon className="h-5 w-5" />
          )}
        </Button>
          <NavigationItem
            href="/dashboard"
            title="Home"
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <HomeIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href="/dashboard/pets"
            title="Pets"
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <PawPrintIcon className="h-5 w-5" />
          </NavigationItem>
          <NavigationItem
            href="/dashboard/users"
            title="Users"
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <UsersIcon className="h-5 w-5" />
          </NavigationItem>
          {/* <NavigationItem
            href="/dashboard/profile"
            title="Profile"
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <UserIcon className="h-5 w-5" />
          </NavigationItem> */}
        </nav>
        <div className={`px-2 flex flex-col flex-wrap w-full items-start justify-between gap-5 overflow-x-hidden text-white text-xl`}>
          <NavigationItem
            href="/dashboard/settings"
            title="Settings"
            isCollapsed={isCollapsed}
            classtyles={classtyles}
          >
            <SettingsIcon className="h-5 w-5" />
          </NavigationItem>
          <br />
        </div>
      </aside>
    </div>
  )
}

export default Sidebar

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  Package2Icon,
  PawPrintIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "@/icons";
import { useState } from "react";

export default function SidebarBackOffice() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={`h-screen bg-gray-800 text-white transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <aside className="flex flex-col justify-between h-full p-4 border-r border-gray-700 transition-all duration-300">
        <div className="flex flex-col items-start gap-6">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <Package2Icon className="h-6 w-6" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Acme Inc</span>
          </Link>

          <nav className="flex flex-col items-start gap-2">
            <Link href="/dashboard" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${isCollapsed ? 'justify-center' : ''}`}>
              <HomeIcon className="h-5 w-5" />
              <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Home</span>
            </Link>
            <Link href="/dashboard/pets" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${isCollapsed ? 'justify-center' : ''}`}>
              <PawPrintIcon className="h-5 w-5" />
              <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Pets</span>
            </Link>
            <Link href="/dashboard/users" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${isCollapsed ? 'justify-center' : ''}`}>
              <UsersIcon className="h-5 w-5" />
              <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Users</span>
            </Link>
            <Link href="/dashboard/profile" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${isCollapsed ? 'justify-center' : ''}`}>
              <UserIcon className="h-5 w-5" />
              <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Profile</span>
            </Link>
            <Link href="/dashboard/settings" className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${isCollapsed ? 'justify-center' : ''}`}>
              <SettingsIcon className="h-5 w-5" />
              <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Settings</span>
            </Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`ml-auto rounded-full transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          onClick={handleToggle}
        >
          {!isCollapsed ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />}
        </Button>
      </aside>
      <div className="flex-1 p-6" />
    </div>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b-2 border-black/20 bg-transparent backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-1 h-6 bg-black" />
            <div className="w-1 h-6 bg-black" />
            <div className="w-1 h-6 bg-black" />
          </div>
          <span className="text-xl font-bold text-black">magiCV</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className={`text-sm font-mono text-black hover:underline ${
              pathname === "/dashboard" ? "underline" : ""
            }`}
          >
            {"> DASHBOARD"}
          </Link>
          <Link
            href="/components"
            className={`text-sm font-mono text-black hover:underline ${
              pathname === "/components" ? "underline" : ""
            }`}
          >
            {"> COMPONENTS"}
          </Link>
          <Link href="/pricing" className="text-sm font-mono text-black hover:underline">
            {"> PRICING"}
          </Link>
          <Link href="/settings" className="text-sm font-mono text-black hover:underline">
            {"> SETTINGS"}
          </Link>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full text-black hover:bg-black/10">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-sm border-2 border-black/20">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-black">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings" className="cursor-pointer text-black">
                <Settings className="w-4 h-4 mr-2" />
                Account Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

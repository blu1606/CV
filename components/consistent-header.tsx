"use client"

import { Button } from "@/components/ui/button"
import { Plus, Settings, LogOut, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ConsistentHeader() {
  const pathname = usePathname()

  return (
    <header className="border-2 border-foreground/20 mx-4 mt-4">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-1">
            <div className="w-1 h-6 bg-foreground" />
            <div className="w-1 h-6 bg-foreground" />
            <div className="w-1 h-6 bg-foreground" />
          </div>
          <span className="text-xl font-bold text-black">magiCV</span>
        </Link>
        
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
          <Link 
            href="/dashboard" 
            className="text-sm font-mono text-black hover:underline"
          >
            {"> NEW CV"}
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-mono text-black hover:underline"
          >
            {"> PRICING"}
          </Link>
          <Link 
            href="/settings" 
            className={`text-sm font-mono text-black hover:underline ${
              pathname === "/settings" ? "underline" : ""
            }`}
          >
            {"> SETTINGS"}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="font-mono text-xs border-2 border-foreground/40 text-black hover:bg-foreground/10 bg-transparent"
            asChild
          >
            <Link href="/components/create">
              <Plus className="w-3 h-3 mr-1" />
              NEW CV
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="font-mono text-xs border-2 border-foreground/40 text-black hover:bg-foreground/10 bg-transparent"
              >
                <User className="w-3 h-3 mr-1" />
                ACCOUNT
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-sm border-2 border-foreground/20">
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
      </div>
    </header>
  )
}

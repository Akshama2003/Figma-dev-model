"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Sprout, ShoppingCart, User, Wallet, Bell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
              <Sprout className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800 font-caveat">Kisan Booth</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/marketplace" className="text-gray-700 hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/request-crop" className="text-gray-700 hover:text-green-600 transition-colors">
              Request Crop
            </Link>
            <Link href="/fund-farmer" className="text-gray-700 hover:text-green-600 transition-colors">
              Fund a Farmer
            </Link>
            <Link href="/learn" className="text-gray-700 hover:text-green-600 transition-colors">
              Learn
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
              <Badge variant="secondary" className="ml-1">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <Wallet className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/dashboard">My Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/farmer-panel">Farmer Panel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/marketplace" className="text-gray-700 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/request-crop" className="text-gray-700 hover:text-green-600">
                Request Crop
              </Link>
              <Link href="/fund-farmer" className="text-gray-700 hover:text-green-600">
                Fund a Farmer
              </Link>
              <Link href="/learn" className="text-gray-700 hover:text-green-600">
                Learn
              </Link>
              <div className="pt-4 border-t">
                <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

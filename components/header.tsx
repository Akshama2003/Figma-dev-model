"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Sprout, ShoppingCart, User, Wallet, Bell, Shield } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

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
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
              Web3
            </Badge>
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
            <Link href="/web3" className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
              Web3 Features
              <Shield className="h-3 w-3 ml-1 text-blue-600" />
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

            {/* Wallet Connection Status */}
            <Button
              variant={isWalletConnected ? "secondary" : "ghost"}
              size="sm"
              className={isWalletConnected ? "bg-green-100 text-green-800" : ""}
            >
              <Wallet className="h-4 w-4" />
              {isWalletConnected && (
                <Badge variant="secondary" className="ml-1 bg-green-200 text-green-800">
                  Connected
                </Badge>
              )}
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
                <DropdownMenuItem>
                  <Link href="/web3">Web3 Features</Link>
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
              <Link href="/web3" className="text-gray-700 hover:text-green-600 flex items-center">
                Web3 Features
                <Shield className="h-3 w-3 ml-1 text-blue-600" />
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

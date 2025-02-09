"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between ${isScrolled ? "p-3" : "p-3"} transition-all duration-300`}>
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/transcarelogo.png"
          alt="TransCare Logo"
          width={32}
          height={32}
          className={`${isScrolled ? "h-6 w-6" : "h-6 w-6"} transition-all duration-300`}
        />
        <span className={`text-xl font-bold ${isScrolled ? "text-lg" : "text-xl"} transition-all duration-300`}>TransCare</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLinks />
        <LanguageSelector />
        <Link href="/auth">
          <Button>Sign In</Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col space-y-4 mt-6">
            <NavLinks />
            <LanguageSelector />
            <Link href="/auth">
              <Button className="w-full">Sign In</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {["Self-Discovery", "Mental-Health", "HRT","Community", "Profile"].map((item) => {
        const href = `/${item.toLowerCase()}`
        const isActive = pathname === href

        return (
          <Link
            key={item}
            href={href}
            className={`relative text-gray-600 hover:text-gray-900 transition-colors ${isActive ? "font-bold text-gray-900" : ""
              } group`} // Added `group` for hover effect
          >
            {item}
            {/* Line for active tab */}
            {isActive && (
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500"></span>
            )}
            {/* Line for hover effect */}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        )
      })}
    </>
  )
}

function LanguageSelector() {
  return (
    <select className="bg-transparent border-none text-gray-600 hover:text-gray-900 cursor-pointer">
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
    </select>
  )
}
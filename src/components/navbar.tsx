"use client"
/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { teams } from "@/types/types" // Importing the teams array from your types file


const navItems = [
  { name: "Home", href: "/" },
  // Teams is now handled separately as a dropdown
  { name: "Drivers", href: "/drivers" },
  { name: "Calendar", href: "/calendar" },
  { name: "News", href: "/news" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [teamsExpanded, setTeamsExpanded] = useState(false)
  // Add state for hover dropdown
  const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false)

  // Create a ref for the dropdown container
  const teamsDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-red-600"
              >
                F1<span className="text-primary">Geeks</span>
              </motion.div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
            </motion.div>

            {/* Teams hover dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="relative"
              ref={teamsDropdownRef}
              onMouseEnter={() => setIsTeamsDropdownOpen(true)}
              onMouseLeave={() => setIsTeamsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary">
                Teams{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isTeamsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isTeamsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-transparent backdrop-blur-md border border-white/10 z-50"
                  >
                    <div className="p-2">
                      {teams.map((team) => (
                        <Link
                          key={team.id}
                          href={`/teams/${team.id}`}
                          className="block w-full text-left py-2.5 px-4 my-1 rounded-md cursor-pointer font-medium hover:bg-white/10 transition-colors"
                        >
                          {team.name}
                        </Link>
                      ))}
                      <div className="h-px bg-white/20 my-2"></div>
                      <Link
                        href="/teams"
                        className="block w-full text-left py-2.5 px-4 rounded-md cursor-pointer text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        View All Teams
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Other nav items */}
            {navItems.slice(1).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index + 3) * 0.1 }}
              >
                <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button asChild>
                <Link href="https://www.formula1.com/en/timing/f1-live" target="_blank" rel="noopener noreferrer">
                  Live Timing
                </Link>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-base font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Teams expandable submenu for mobile */}
            <div className="py-2">
              <button
                onClick={() => setTeamsExpanded(!teamsExpanded)}
                className="flex items-center justify-between w-full py-2 text-base font-medium hover:text-primary"
              >
                <span>Teams</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${teamsExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {teamsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 space-y-3 mt-2"
                >
                  {teams.map((team) => (
                    <Link
                      key={team.id}
                      href={`/teams/${team.id}`}
                      className="block py-1.5 text-sm hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {team.name}
                    </Link>
                  ))}
                  <div className="h-px bg-white/20 my-2"></div>
                  <Link
                    href="/teams"
                    className="block py-1.5 text-sm text-white/70 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Teams
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Other nav items for mobile */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild className="w-full mt-4">
              <Link href="https://www.formula1.com/en/timing/f1-live" target="_blank" rel="noopener noreferrer">
                Live Timing
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

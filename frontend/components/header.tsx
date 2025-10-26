"use client"

import {useEffect, useState} from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            S
          </div>
          <span className="font-bold text-lg hidden sm:inline">Studio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm hover:text-primary transition">
            Services
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            Work
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            About
          </a>
          <a href="#" className="text-sm hover:text-primary transition">
            Blog
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-muted rounded-lg transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-sm hover:text-primary transition py-2">
              Services
            </a>
            <a href="#" className="block text-sm hover:text-primary transition py-2">
              Work
            </a>
            <a href="#" className="block text-sm hover:text-primary transition py-2">
              About
            </a>
            <a href="#" className="block text-sm hover:text-primary transition py-2">
              Blog
            </a>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

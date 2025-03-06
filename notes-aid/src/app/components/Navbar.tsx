"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, NotebookPen } from "lucide-react"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return null
  }

  return (
    <nav className="w-full py-4 px-6 border-b transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <NotebookPen className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Notes-Aid<sup className="text-xs font-normal text-gray-500 dark:text-gray-400 mx-2">Beta</sup>
                </h1>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              console.log("Theme toggled")
              setTheme(theme === "dark" ? "light" : "dark")
            }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

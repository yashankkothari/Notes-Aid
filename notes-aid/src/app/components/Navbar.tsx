import React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu } from "lucide-react"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full py-4 px-6 border-b transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Engineering Notes
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

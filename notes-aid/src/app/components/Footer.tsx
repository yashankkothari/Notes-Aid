import { NotebookPen, Github, Mail, Heart } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <NotebookPen className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Engineering Notes
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your comprehensive resource for engineering study materials and
              notes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase">
              Connect With Us
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Engineering Notes. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Vedansh the boss dude
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { NotebookPen, Github, Mail, Rocket } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand Section */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <NotebookPen className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                Engineering Notes
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Your comprehensive resource for engineering study materials and
              notes. Curated with care for students by students.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase">
              Connect With Us
            </h3>
            <div className="flex flex-col md:flex-row gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#333333] dark:text-white hover:text-[#706C61] dark:hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub Repository</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-2 text-[#333333] dark:text-white hover:text-[#706C61] dark:hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Contribute Notes</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Engineering Notes. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              Engineered with{" "}
              <Rocket className="w-4 h-4 mx-1 text-indigo-500 dark:text-cyan-400 animate-bounce" />{" "}
              by Aarush, Minav, and Vedansh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

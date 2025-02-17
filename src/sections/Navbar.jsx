"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaStackOverflow } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="container mx-auto fixed z-10 top-0 left-0 right-0">
      <div className="bg-black p-4">
        <div className="flex justify-between items-center px-5 text-white">
          <div className="space-x-5 items-center hidden md:flex">
            <a
              href="mailto:muhammad.yusuf@merkleinnovation.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/yusufswe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadyusuf-compsci/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin />
            </a>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaMedium size={25} />
            </a>
            <a
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaStackOverflow size={25} />
            </a>
          </div>
          <div className="space-x-5 hidden md:flex">
            <button
              onClick={() => scrollToSection("project")}
              className="hover:text-blue-500 transition"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-green-500 transition"
            >
              Contact
            </button>
          </div>
          <div className="flex ml-auto justify-end md:hidden">
            <button
              className="relative w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={twMerge(
                  "absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out",
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                )}
              />
              <span
                className={twMerge(
                  "absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={twMerge(
                  "absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out",
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-1"
                )}
              />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col md:hidden items-center gap-6 py-6 bg-neutral-900/80 backdrop-blur-md  text-white shadow-lg rounded-b-lg">
              <div className="flex gap-4">
                <a
                  href="mailto:muhammad.yusuf@merkleinnovation.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://github.com/yusufswe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammadyusuf-compsci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <FaMedium size={24} />
                </a>
                <a
                  href="https://stackoverflow.com/questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <FaStackOverflow size={24} />
                </a>
              </div>

              <div className="flex flex-col items-center space-y-4 w-full">
                <button
                  onClick={() => scrollToSection("project")}
                  className="px-4 py-2 w-40 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  Project
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 w-40 bg-green-600 hover:bg-green-700 rounded-lg transition"
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

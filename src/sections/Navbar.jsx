import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaStackOverflow } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="container mx-auto ">
      <div className="bg-black p-4">
        <div className="flex justify-between items-center px-5 text-white">
          <div className="flex space-x-5 items-center">
            <a
              href="mailto:muhammad.yusuf@merkleinnovation.co.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
            <a href="https://github.com/yusufswe" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadyusuf-compsci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>

            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
              <FaMedium size={25} />
            </a>
            <a href="https://stackoverflow.com/questions" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow size={25} />
            </a>
          </div>
          <div className="flex space-x-5">
            <button onClick={() => scrollToSection("project")} className="hover:underline">
              Project
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:underline">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

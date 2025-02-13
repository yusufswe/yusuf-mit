import React from "react";
import { Mail, Github, Linkedin, Medium, Stackoverflow } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="container mx-auto">
      <div className="bg-black p-4">
        <div className="flex justify-between px-5 text-white">
          <div className="flex space-x-5">
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

            <a href="muhammad.yusuf@merkleinnovation.co.id">{/* <Medium /> */}</a>
            <a href="muhammad.yusuf@merkleinnovation.co.id">{/* <Stackoverflow /> */}</a>
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

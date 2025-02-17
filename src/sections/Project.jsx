import React from "react";
import ProjectCard from "../components/ProjectCard";
import imgProjek1 from "../assets/img/myimage.webp";
import { motion } from "framer-motion";

const projects = [
  {
    title: "React Space",
    description:
      "Space themed React components in a React web application with reusable components and animations",
    image: imgProjek1,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A solution to implement infinite scroll with performance support, helping developers to implement in JS and TS",
    image: imgProjek1,
  },
  {
    title: "Photo Gallery",
    description:
      "A cool way of using photo gallery to share and favorite travel photos in a shared source of photos",
    image: imgProjek1,
  },
  {
    title: "Event planner",
    description:
      "A simple application for special events to discover unique events happening in your city with filter",
    image: imgProjek1,
  },
];

export default function Project() {
  return (
    <section className="container mx-auto bg-[#1B4332] text-white py-16 px-4" id="project">
      <motion.div
        initial={{ opacity: 0, y: 150, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

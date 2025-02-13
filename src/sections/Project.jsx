import React from "react";
import ProjectCard from "../components/ProjectCard";
import imgProjek1 from "../assets/img/myimage.jpg";
import imgProjek2 from "../assets/img/myimage2.jpg";
import imgProjek3 from "../assets/img/splashimg.jpg";
import imgProjek4 from "../assets/img/myimage4.jpg";

export default function Project() {
  return (
    <section className="bg-[#1B4332] text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="React Space"
            description="Space themed React components in a React web application with reusable components and animations"
            image={imgProjek1}
          />
          <ProjectCard
            title="React Infinite Scroll"
            description="A solution to implement infinite scroll with performance support, helping developers to implement in JS and TS"
            image={imgProjek2}
          />
          <ProjectCard
            title="Photo Gallery"
            description="A cool way of using photo gallery to share and favorite travel photos in a shared source of photos"
            image={imgProjek3}
          />
          <ProjectCard
            title="Event planner"
            description="A simple application for special events to discover unique events happening in your city with filter"
            image={imgProjek4}
          />
        </div>
      </div>
    </section>
  );
}

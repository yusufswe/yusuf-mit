import React from "react";

function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="text-blue-600 inline-flex items-center hover:opacity-80 transition-opacity"
        >
          See more →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

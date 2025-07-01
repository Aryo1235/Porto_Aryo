import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl p-5 border border-2 border-sky-300 shadow-lg hover:shadow-[12px_12px_0px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-2">
      {project.image && (
        <div className="rounded-md overflow-hidden mb-4 border border-sky-300">
          <img
            src={
              project.image ||
              "https://via.placeholder.com/400x200?text=No+Image"
            }
            alt={project.title}
            className="w-full h-40 object-cover object-center  bg-gray-100"
          />
        </div>
      )}
      <div className="border-t-2 border-sky-300 my-4 w-full"></div>
      <h4 className="text-xl font-semibold text-sky-800 my-1">
        {project.title}
      </h4>
      <p className="text-gray-700 text-sm mb-5 h-48">{project.desc}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors "
      >
        Lihat
      </a>
    </div>
  );
}

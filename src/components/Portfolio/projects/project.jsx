import React from "react";

const Project = ({ filteredProjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="p-4 border rounded shadow hover:shadow-lg"
        >
          <img src={project.img} alt="" />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;

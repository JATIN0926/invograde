"use client";
import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";

const ProjectsArea = ({ isOpen }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectData) => {
    setSelectedProject(projectData);
  };

  const closeModal = () => {
    setTimeout(() => {
      setSelectedProject(null);
    }, 400); 
  };
  

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-[80%]" : "w-full"
      } p-10 flex flex-col gap-8 overflow-y-auto z-[40]`}
    >
      <h1 className="text-black text-[1.15rem] font-medium">For You</h1>
      <div className="flex items-center justify-between flex-wrap gap-10 w-full z-[40]">
        {[...Array(12)].map((_, i) => (
          <ProjectCard
            key={i}
            onClick={() => openModal({ title: `Project ${i + 1}` })}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          projectData={selectedProject}
        />
      )}
    </div>
  );
};

export default ProjectsArea;

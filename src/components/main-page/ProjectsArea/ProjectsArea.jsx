"use client"; // Ensure this is running on the client-side

import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsArea = ({ isOpen }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-[80%]" : "w-full"
      } p-10 flex flex-col gap-8 overflow-y-auto`}
    >
      <h1 className="text-black text-[1.15rem] font-medium">For You</h1>
      <div className="flex items-center justify-between flex-wrap gap-10 w-full">
        <ProjectCard />
        {/* Render more project cards */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsArea;

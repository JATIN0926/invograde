import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsArea = () => {
  return (
    <div className=" w-[95%] p-10 flex flex-col gap-8  overflow-y-auto">
      <h1 className=" text-black text-[1.1rem] font-medium">For You</h1>
      <div className="flex items-center justify-between flex-wrap gap-10 w-full">
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
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsArea;

"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";
import { getAllProjects } from "@/utils/api/projectApi";
import Loader from "../../common/Loader/Loader";

const ProjectsArea = ({ isOpen }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const openModal = (projectData) => {
    setSelectedProject(projectData);
  };

  const closeModal = () => {
    setTimeout(() => {
      setSelectedProject(null);
    }, 400);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getAllProjects();
        setProjects(data.projects);
      } catch (err) {
        console.error("Error fetching projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-[80%]" : "w-full"
      } p-10 flex flex-col gap-8 overflow-y-auto z-[40]`}
    >
      <h1 className="text-black text-[1.15rem] font-medium">For You</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-start flex-wrap gap-10 w-full z-[40]">
          {projects
            ?.filter((project) => project !== null && project !== undefined)
            .map((project) => (
              <ProjectCard
                key={project._id}
                data={project}
                onClick={() => openModal(project)}
                isSelected={selectedProject?._id === project._id}
              />
            ))}
        </div>
      )}

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

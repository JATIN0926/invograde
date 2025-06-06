"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import MyProjectCard from "./MyProjectCard";
import axiosInstance from "@/utils/axiosInstance";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetchedRef = useRef(false);

  const fetchProjects = async () => {
    try {
      const response = await axiosInstance.get("/api/projects/user/projects");

      if (response.data.success) {
        setProjects(response.data.projects);
      } else {
        toast.error("Failed to load projects.");
      }
    } catch (error) {
      toast.error("Error fetching projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      fetchProjects();
    }
  }, []);

  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <h1 className="font-PublicSans-Regular text-xl font-semibold">
        My Projects
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-lg text-center ">No projects found.</p>
      ) : (
        <div className="w-full flex flex-wrap items-center justify-start gap-10">
          {projects.map((project) => (
            <MyProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjects;

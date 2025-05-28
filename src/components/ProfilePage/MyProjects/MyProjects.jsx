"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MyProjectCard from "./MyProjectCard";
import axiosInstance from "@/utils/axiosInstance";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <h1 className="font-PublicSans-Regular text-base">My Projects</h1>

      {loading ? (
        <p>Loading...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
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

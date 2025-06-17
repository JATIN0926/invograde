// utils/api.js or utils/projectApi.js
import axiosInstance from "@/utils/axiosInstance";

export const getAllProjects = async (params = {}) => {
  const res = await axiosInstance.get("/api/projects", { params });
  return res.data;
};

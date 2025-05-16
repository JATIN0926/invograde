import Image from "next/image";
import React from "react";
import MyProjectCard from "./MyProjectCard";

const MyProjects = () => {
  return (
    <div className=" flex flex-col items-start justify-center gap-6">
      <h1 className=" font-PublicSans-Regular text-base">My Projects</h1>
      <div className=" w-full flex flex-wrap items-center justify-between gap-3">
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
        <MyProjectCard />
      </div>
    </div>
  );
};

export default MyProjects;

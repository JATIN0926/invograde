import Image from "next/image";
import React from "react";

const MyProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="h-[15rem] w-[28%] flex flex-col gap-2 z-[40] cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[80%] w-full relative rounded-md overflow-hidden">
        <Image
          src={project.thumbnail || "/images/ProjectCardPlaceholder.png"}
          alt={project.title || "Project Image"}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full flex items-center justify-between px-1">
        <h1 className="text-sm font-semibold">{project.title}</h1>
        <div className="flex items-center gap-1">
          <Image
            src="/icons/heart_like.png"
            alt="like"
            width={16}
            height={16}
          />
          <span className="text-xs text-black">{project.likes || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;

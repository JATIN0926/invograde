import Image from "next/image";
import React from "react";

const ProjectCard = ({ key, data, onClick, isSelected }) => {
  const { title, thumbnail, userId, likes } = data;

  return (
    <div
      className="h-[15rem] w-[28%] flex flex-col gap-4 z-[40] cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[80%] w-full relative rounded-md">
        <Image
          src={thumbnail || "/images/ProjectCardPlaceholder.png"}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-black border-[1px] relative overflow-hidden">
            {/* profile image fallback */}
            {/* Replace with userId.profileImage if available */}
            <Image
              src={"/images/ProfileAvatar.png"}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-[#3A3084] text-[0.9rem]">{userId?.username}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative">
            <Image src="/icons/Like.png" alt="like" fill />
          </div>
          <h1 className="text-[0.8rem] text-black">{likes || 0}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

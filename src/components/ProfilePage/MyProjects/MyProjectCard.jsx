import { toggleProjectLike } from "@/utils/api/projectApi";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MyProjectCard = ({ project, onClick }) => {
  const [likes, setLikes] = useState(project.likes || 0);
  const [liked, setLiked] = useState(project.likedByCurrentUser || false);
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = async (e) => {
    e.stopPropagation();
    if (loading) return;
    setLoading(true);

    try {
      const { liked: nowLiked, likes: updatedLikes } = await toggleProjectLike(
        project._id
      );
      setLiked(nowLiked);
      setLikes(updatedLikes);
    } catch (err) {
      console.error("Like toggle failed", err);
      toast.error("Failed to update like");
    } finally {
      setLoading(false);
    }
  };
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
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleLikeToggle}
        >
          <Image
            src="/icons/heart_like.png"
            alt="like"
            width={16}
            height={16}
          />
          <span className="text-xs text-black">{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;

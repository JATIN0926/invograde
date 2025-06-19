import { toggleProjectLike } from "@/utils/api/projectApi";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProjectCard = ({ key, data, onClick, isSelected }) => {
  const {
    _id,
    title,
    thumbnail,
    userId,
    likes: initialLikes,
    likedByCurrentUser,
  } = data;

  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(likedByCurrentUser || false);
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = async (e) => {
    e.stopPropagation();
    if (loading) return;
    setLoading(true);

    try {
      const { liked: nowLiked, likes: updatedLikes } = await toggleProjectLike(
        _id
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
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLikeToggle}
        >
          <div className="w-5 h-5 relative">
            <Image src="/icons/Like.png" alt="like" fill />
          </div>
          <h1 className="text-[0.8rem] text-black">{likes}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

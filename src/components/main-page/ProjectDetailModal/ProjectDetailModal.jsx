"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectDetailModal = ({ isOpen, onClose, projectData }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!projectData) return null;

  const {
    title,
    description,
    thumbnail,
    createdAt,
    likes = [],
    tags = [],
    userId,
  } = projectData;

  console.log("data", projectData);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="project-detail-modal"
            initial={{ y: "100%" }}
            animate={{ y: "1%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 bottom-0 w-full h-[90%] bg-white z-[100] shadow-lg rounded-t-2xl flex flex-col"
          >
            {/* Scrollable content */}
            <div className="flex flex-col w-full flex-grow overflow-y-auto">
              {/* Header */}
              <div className="p-4 px-10 flex items-center justify-between font-PublicSans-Medium">
                <div className="flex items-start justify-center gap-4 text-[#3A3084]">
                  <div className="w-12 h-10 relative">
                    <Image
                      src={userId?.avatar || "/images/ProfileAvatar.png"}
                      alt="Profile"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h1 className="text-2xl">
                      {userId?.username || "Unknown User"}{" "}
                    </h1>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/heart_like.png" alt="like" fill />
                      </div>
                      <h1 className="text-[0.8rem] text-black">
                        {likes.length}
                      </h1>
                    </div>
                  </div>
                  <p className="text-lg ml-6 mt-1">{title}</p>
                </div>
                <div className="flex gap-4 items-center self-start">
                  <h2 className="text-black text-lg">
                    Published: {new Date(createdAt).toLocaleDateString()}
                  </h2>
                  <button
                    className="text-gray-400 hover:text-gray-600 text-xl"
                    onClick={onClose}
                  >
                    <Image
                      src="/icons/cross_close.png"
                      alt="cross"
                      width={35}
                      height={35}
                    />
                  </button>
                </div>
              </div>

              <div className="w-full relative rounded-md aspect-video mb-6">
                <Image
                  src={thumbnail || "/images/ProjectCardPlaceholder.png"}
                  alt="img"
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full p-5 px-8 flex flex-col items-center justify-center gap-8 bg-[#E9DEFF]">
                <div className="flex items-start justify-center gap-4 w-[90%]">
                  <div className="w-5 h-5 relative">
                    <Image src="/icons/heart_like.png" alt="like" fill />
                  </div>
                  <p className="text-xl text-[#141520] font-PublicSans-Regular">
                    {description}
                  </p>
                </div>
                <div className="flex items-start justify-center gap-4 w-[90%]">
                  <div className="w-5 h-5 relative">
                    <Image src="/icons/heart_like.png" alt="like" fill />
                  </div>
                  <div className="text-base text-[#141520] font-PublicSans-Medium flex items-center justify-evenly w-full">
                    {tags.map((tag, i) => (
                      <p key={i}>{tag}</p>
                    ))}
                  </div>
                </div>
                <button className="text-base text-[#141520] font-PublicSans-Medium underline">
                  View Profile
                </button>
              </div>

              <div className="w-[90%] flex items-center justify-between flex-wrap self-center mt-6">
                {/* <ProjectCard data={projectData} />
                  <ProjectCard data={projectData} />
                  <ProjectCard data={projectData} /> */}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;

"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectDetailModal = ({ isOpen, onClose, projectData }) => {
  // ✅ Prevent body from scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
                      src="/images/ProfileAvatar.png"
                      alt="Profile"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h1 className="text-2xl">Louis Montana -</h1>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/heart_like.png" alt="like" fill />
                      </div>
                      <h1 className="text-[0.8rem] text-black">79</h1>
                    </div>
                  </div>
                  <p className="text-lg ml-6 mt-1">
                    ZaRa UI/UX Branding | Landing Page
                  </p>
                </div>
                <div className="flex gap-4 items-center self-start">
                  <h2 className="text-black text-lg">
                    Published: November 11, 2024
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
                  src="/images/ProjectCardPlaceholder.png"
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
                    Trying to design a modern, user-friendly website for a salon
                    and beauty parlor that offers both home services and
                    in-salon experiences. The aim was to create a smooth and
                    easy-to-use platform where clients can easily book their
                    favorite treatments from the comfort of their homes or in
                    the salon. My focus was on making the design clean, highly
                    functional, and visually appealing.
                  </p>
                </div>
                <div className="flex items-start justify-center gap-4 w-[90%]">
                  <div className="w-5 h-5 relative">
                    <Image src="/icons/heart_like.png" alt="like" fill />
                  </div>
                  <div className="text-base text-[#141520] font-PublicSans-Medium flex items-center justify-evenly w-full">
                    <p>Wireframing </p>
                    <p>Prototyping </p>
                    <p>Figma </p>
                    <p>User experience</p>
                    <p>User interface</p>
                    <p>Adobe xd</p>
                    <p>Designing</p>
                    <p>Project management</p>
                  </div>
                </div>
                <button className="text-base text-[#141520] font-PublicSans-Medium underline">
                  View Profile
                </button>
              </div>

              <div className="w-[90%] flex items-center justify-between flex-wrap self-center mt-6">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;

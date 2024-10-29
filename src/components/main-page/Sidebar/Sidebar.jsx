"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();
  const [isProjectsActive, setIsProjectsActive] = useState(false);

  const handleProjectsClick = () => {
    setIsProjectsActive(!isProjectsActive);

    router.push("/main-page/projects");
  };

  useEffect(() => {
    if (!isOpen) {
      setIsProjectsActive(false);
    }
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "w-[17%]" : "w-[7%]"
      } transition-all duration-300 pt-8 border-r-2 border-r-[#84848440] drop-shadow-[#84848440]`}
    >
      <div
        className={`w-full flex flex-col items-start pl-4 justify-start gap-5`}
      >
        {/* Toggle Button */}
        <div
          className="w-full flex items-center pl-2.5 hover:bg-[#DDCCFF] transition-all cursor-pointer gap-2 rounded-md"
          onClick={toggleSidebar}
        >
          <div className="w-6 h-6 relative">
            <Image
              src="/icons/Sidebar_open_close.png"
              alt="Sidebar_open_close"
              fill
            />
          </div>
          <h1
            className={`text-lg transition-all duration-300 ${
              isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
            } overflow-hidden`}
          >
            Collapse
          </h1>
        </div>

        {/* Sidebar Menu Items */}
        <div
          className={` rounded-md flex items-center gap-1 cursor-pointer transition-all w-full ${
            isProjectsActive ? "bg-[#DDCCFF]" : ""
          }`}
          onClick={() => {
            if (isOpen) {
              handleProjectsClick();
            }
          }}
        >
          <div className="w-[2.7rem] aspect-square relative">
            <Image src="/icons/Projects.png" alt="Projects" fill />
          </div>
          {isOpen && <h1 className="text-lg">Projects</h1>}
        </div>

        {/* Conditional div below the Projects section */}
        {isProjectsActive && (
          <div className="w-[90%] self-center flex items-start justify-between">
            <div className="flex flex-col  justify-between items-center h-[10rem]">
              <div className=" w-6 h-6 relative">
                <Image src="/icons/giveTitle.png" alt="giveTitle" fill />
              </div>
              <div className=" w-6 h-6 relative">
                <Image src="/icons/skillsUsed.png" alt="skillsUsed" fill />
              </div>
              <div className=" w-6 h-6 relative">
                <Image src="/icons/chooseDomain.png" alt="chooseDomain" fill />
              </div>
              <div className=" w-6 h-6 relative">
                <Image src="/icons/AddTags.png" alt="AddTags" fill />
              </div>
            </div>
            <div className="flex flex-col justify-between items-start h-[10rem] gap-3 ">
              <h1 className=" text-[#774FCC] text-[0.9rem] font-PublicSans-Medium cursor-pointer">
                Give it a Title
              </h1>
              <h1 className=" text-[#774FCC] text-[0.9rem] font-PublicSans-Medium cursor-pointer">
                Skills used
              </h1>
              <h1 className=" text-[#774FCC] text-[0.9rem] font-PublicSans-Medium cursor-pointer">
                Choose Domain
              </h1>
              <h1 className=" text-[#774FCC] text-[0.9rem] font-PublicSans-Medium cursor-pointer">
                Add Tags
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

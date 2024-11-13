import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setProjectsActive } from "@/redux/slices/sidebarSlice";
import { setCurrentStep } from "@/redux/slices/projectSlice.js";
import Image from "next/image";

const Sidebar = ({ isOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isProjectsActive = useSelector(
    (state) => state.sidebar.isProjectsActive
  );
  const { currentStep } = useSelector((state) => state.project);

  const handleProjectsClick = () => {
    dispatch(setProjectsActive(!isProjectsActive));
    router.push("/main-page/projects");
  };

  useEffect(() => {
    if (!isOpen) {
      dispatch(setProjectsActive(false)); // Reset `isProjectsActive` when sidebar is closed
    }
  }, [isOpen, dispatch]);

  return (
    <div
      className={`${
        isOpen ? "w-[17%]" : "w-[6%]"
      } transition-all duration-300 pt-8 border-r-2 border-r-[#84848440] drop-shadow-[#84848440]`}
    >
      <div className="w-full flex flex-col items-start pl-4 justify-start gap-5">
        <div
          className="w-[85%] flex items-center pl-2.5 p-2 hover:bg-[#DDCCFF] transition-all cursor-pointer gap-[1.85rem] rounded-md"
          onClick={() => dispatch(toggleSidebar())}
        >
          <div className="flex justify-center items-center pl-6 w-6 h-6 relative">
            <Image
              src="/icons/Sidebar_open_close.png"
              alt="Sidebar_open_close"
              fill
            />
          </div>
          {/* Smooth transition for the Collapse text */}
          <h1
            className={`text-[1.1rem] font-PublicSans-Regular transition-all duration-300 transform ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              visibility: isOpen ? "visible" : "hidden",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            Collapse
          </h1>
        </div>
        <div
          className={`rounded-md flex items-center cursor-pointer transition-all gap-5 w-[85%] ${
            isProjectsActive ? "bg-[#DDCCFF]" : ""
          }`}
          onClick={() => {
            if (isOpen) {
              handleProjectsClick();
            }
          }}
        >
          <div className="w-[2.7rem] h-[2.7rem] min-w-[2.7rem] min-h-[2.7rem] relative">
            <Image src="/icons/Projects.png" alt="Projects" fill />
          </div>
          <h1
            className={`text-base font-PublicSans-Regular transition-opacity duration-300 overflow-hidden ${
              isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
            }`}
            style={{
              whiteSpace: "nowrap", // Prevents text wrapping during transition
            }}
          >
            Projects
          </h1>
        </div>

        {/* Conditional rendering with fixed width styling */}
        {isProjectsActive && (
          <div
            className="w-full self-center flex items-start justify-between px-2 pr-6"
            style={{
              minWidth: "10rem", // Add min width to prevent shrinking
            }}
          >
            <div className="flex flex-col justify-between items-center h-[10rem]">
              <div
                className="w-6 h-6 relative cursor-pointer"
                onClick={() => dispatch(setCurrentStep("title"))}
              >
                {currentStep === "title" ? (
                  <Image
                    src="/icons/giveTitle_focus.png"
                    alt="giveTitle"
                    fill
                  />
                ) : (
                  <Image src="/icons/giveTitle.png" alt="giveTitle" fill />
                )}
              </div>
              <div
                className="w-6 h-6 relative cursor-pointer"
                onClick={() => dispatch(setCurrentStep("skills"))}
              >
                {currentStep === "skills" ? (
                  <Image
                    src="/icons/skillsUsed_focus.png"
                    alt="skillsUsed"
                    fill
                  />
                ) : (
                  <Image src="/icons/skillsUsed.png" alt="skillsUsed" fill />
                )}
              </div>
              <div
                className="w-6 h-6 relative cursor-pointer"
                onClick={() => dispatch(setCurrentStep("domain"))}
              >
                {currentStep === "domain" ? (
                  <Image
                    src="/icons/chooseDomain_focus.png"
                    alt="chooseDomain"
                    fill
                  />
                ) : (
                  <Image
                    src="/icons/chooseDomain.png"
                    alt="chooseDomain"
                    fill
                  />
                )}
              </div>
              <div
                className="w-6 h-6 relative cursor-pointer"
                onClick={() => dispatch(setCurrentStep("tags"))}
              >
                {currentStep === "tags" ? (
                  <Image src="/icons/AddTags_focus.png" alt="AddTags" fill />
                ) : (
                  <Image src="/icons/AddTags.png" alt="AddTags" fill />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between items-start h-[10rem] gap-3">
              <h1
                className={` ${
                  currentStep === "title" ? "text-[#3A3084]" : "text-[#774FCC]"
                }  text-[0.9rem] font-PublicSans-Medium cursor-pointer hover:underline`}
                onClick={() => dispatch(setCurrentStep("title"))}
              >
                Give it a Title
              </h1>
              <h1
                className={` ${
                  currentStep === "skills" ? "text-[#3A3084]" : "text-[#774FCC]"
                } text-[0.9rem] font-PublicSans-Medium cursor-pointer hover:underline`}
                onClick={() => dispatch(setCurrentStep("skills"))}
              >
                Skills used
              </h1>
              <h1
                className={` ${
                  currentStep === "domain" ? "text-[#3A3084]" : "text-[#774FCC]"
                } text-[0.9rem] font-PublicSans-Medium cursor-pointer hover:underline`}
                onClick={() => dispatch(setCurrentStep("domain"))}
              >
                Choose Domain
              </h1>
              <h1
                className={` ${
                  currentStep === "tags" ? "text-[#3A3084]" : "text-[#774FCC]"
                } text-[0.9rem] font-PublicSans-Medium cursor-pointer hover:underline`}
                onClick={() => dispatch(setCurrentStep("tags"))}
              >
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

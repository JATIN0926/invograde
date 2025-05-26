import Image from "next/image";
import React, { useRef } from "react";
import MyProjects from "../MyProjects/MyProjects";
import { useSelector } from "react-redux";

const ProfilePage = ({ isOpen }) => {
  const fileInputRef = useRef(null);
  const user = useSelector((state) => state.user.user);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-[80%]" : "w-full"
      } p-10 flex flex-col gap-8 overflow-y-auto z-[40]`}
    >
      <div className="flex flex-col items-start justify-center gap-6">
        <h1>Welcome, {user.username} !</h1>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-20 relative cursor-pointer">
              <Image src="/images/ProfileAvatar.png" alt="ProfileAvatar" fill />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="font-PublicSans-SemiBold text-[1.2rem]">
                {user.username}
              </h2>
              <h3 className="font-PublicSans-Regular text-[0.9rem] text-gray-600">
                {user.email}
              </h3>
            </div>
          </div>
          <button className="bg-[#774FCC] px-8 p-2 text-white font-PublicSans-Light text-[0.87rem] flex items-center gap-2 rounded-lg">
            <p>Edit</p>
          </button>
        </div>
        <div className="w-full flex flex-col gap-6">
          {/* Form Section */}
          <div className="grid grid-cols-2 gap-y-7 gap-x-16 w-full font-PublicSans-Medium">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">Full Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                value={user.username}
                className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none placeholder:text-[0.9rem] placeholder:font-light"
              />
            </div>

            {/* Specialization */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">
                Specialization
              </label>
              <input
                type="text"
                placeholder="Designer/ Developer"
              value={user.careerType}
                className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none placeholder:text-[0.9rem] placeholder:font-light"
              />
            </div>

            {/* Gender Dropdown */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">Gender</label>
              <select className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Are you a student? Dropdown */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">
                Are you a student?
              </label>
              <select className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resume Upload Section */}
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="text-gray-800 text-[0.9rem] font-PublicSans-Regular">
            My Resume
          </h2>
          <div
            className="border-[#774FCC] bg-[#F9F9F9] p-6 rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer text-center font-PublicSans-Regular border-2 border-dashed"
            onClick={handleFileUploadClick}
          >
            <div className="relative h-7 w-7">
              <Image src="/icons/file_icon.png" alt="Upload Icon" fill />
            </div>
            <p className="text-[0.9rem]">
              <span className="text-[#5446BC]">Click to upload</span> or Drag &
              Drop
            </p>
            <p className="text-gray-400 text-[0.9rem]">
              SVG, PNG, JPG or GIF (max. 300x300px)
            </p>
          </div>
          {/* Hidden File Input */}
          <input type="file" ref={fileInputRef} className="hidden" />
          <p className="text-black text-[0.9rem] font-PublicSans-Regular text-center">
            Don’t have a PDF file?{" "}
            <span className="text-[#5446BC] cursor-pointer hover:underline">
              <a href="/profile/create-resume">Create Resume</a>
            </span>
          </p>
        </div>
      </div>
      <MyProjects />
    </div>
  );
};

export default ProfilePage;

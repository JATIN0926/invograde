import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkExperience } from "@/redux/slices/modalSlice";

const AddWorkModal = ({ isOpen, onClose }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleSave = () => {
    if (jobTitle.trim() === "") return;

    dispatch(
      addWorkExperience({
        jobTitle,
        companyName,
      })
    );
    setJobTitle("");
    setCompanyName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[40%] relative font-PublicSans-Regular">
        {/* Header Section: title and close button in same line */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-PublicSans-Regular text-black">
            Add your most recent work experience
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl font-bold"
          >
            ✖
          </button>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Job title *"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="border border-[#AAAAAA] w-full p-3 rounded-lg placeholder:font-PublicSans-Regular"
          />
          <input
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-[#AAAAAA] w-full p-3 rounded-lg placeholder:font-PublicSans-Regular"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6 font-PublicSans-Regular">
          <button
            onClick={onClose}
            className="border border-[#774FCC] text-black px-4 py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="border border-[#774FCC] text-black px-4 py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWorkModal;
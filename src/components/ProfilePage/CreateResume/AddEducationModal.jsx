"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, closeEducationModal } from "@/redux/slices/modalSlice";

const AddEducationModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.modals.educationModalOpen);

  const [educationLevel, setEducationLevel] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  if (!isOpen) return null;

  const handleSave = (addAnother = false) => {
    if (educationLevel.trim()) {
      const newEducation = {
        degree: educationLevel,
        fieldOfStudy,
      };

      dispatch(addEducation(newEducation));
      setEducationLevel("");
      setFieldOfStudy("");

      if (!addAnother) {
        dispatch(closeEducationModal());
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[40%] relative font-PublicSans-Regular">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-black">Add Education</h2>
          <button
            onClick={() => dispatch(closeEducationModal())}
            className="text-gray-600 hover:text-black text-xl font-bold"
          >
            ✖
          </button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-5">
          <input
            type="text"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            placeholder="Provide your level of education"
            className="border border-[#AAAAAA] w-full p-3 rounded-lg"
          />
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            placeholder="Field of study"
            className="border border-[#AAAAAA] w-full p-3 rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => dispatch(closeEducationModal())}
            className="border border-[#774FCC] text-black px-4 py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSave(true)}
            className="border border-[#774FCC] text-black px-8 py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            Save and add another
          </button>
          <button
            onClick={() => handleSave(false)}
            className="border border-[#774FCC] text-black px-4 py-2 rounded-lg hover:bg-purple-200 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEducationModal;

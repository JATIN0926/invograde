"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, closeSkillsModal } from "@/redux/slices/modalSlice";

const AddSkillsModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.modals.skillsModalOpen);
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");

  if (!isOpen) return null;

  const handleSave = (addAnother = false) => {
    if (skill.trim()) {
      const newSkill = {
        name: skill,
        yearsOfExperience: experience ? parseInt(experience) : null,
      };

      dispatch(addSkill(newSkill));
      setSkill("");
      setExperience("");

      if (!addAnother) {
        dispatch(closeSkillsModal());
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[40%] relative font-PublicSans-Regular">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-black">Add Skills</h2>
          <button
            onClick={() => dispatch(closeSkillsModal())}
            className="text-gray-600 hover:text-black text-xl font-bold"
          >
            ✖
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Provide skills to your resume"
            className="border border-[#AAAAAA] w-full p-3 rounded-lg"
          />
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Years of experience : Ex-2"
            className="border border-[#AAAAAA] w-full p-3 rounded-lg"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => dispatch(closeSkillsModal())}
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

export default AddSkillsModal;

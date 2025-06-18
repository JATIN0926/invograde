import React, { useState } from "react";

const SkillsSection = ({ skills, onSkillsChange, onNext, onClose }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e) => {
    if (
      e.key === "Enter" &&
      newSkill.trim() &&
      skills.length < 8 &&
      !skills.includes(newSkill.trim())
    ) {
      const updatedSkills = [...skills, newSkill.trim()];
      onSkillsChange(updatedSkills); // Pass the updated array
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
    onSkillsChange(updatedSkills); // Pass the updated array
  };

  return (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg w-[65%] max-h-[105%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2 border-[#3A3084]">
      <div className="relative p-4 px-10">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex flex-col">
          <h2 className="text-xl text-[#141520] font-PublicSans-Medium text-center">
            Mention all the skills you&apos;ve used in your Project
          </h2>

          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleAddSkill}
            placeholder={` ${
              skills.length === 8
                ? "Max skills reached"
                : "Press Enter to add a skill"
            } `}
            className="w-full border-none outline-none focus:ring-0 caret-purple-500 font-PublicSans-Medium text-[#3A3084] text-xl text-center"
            disabled={skills.length >= 8}
          />

          <div className="grid grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 text-[#3A3084] font-PublicSans-Regular text-[1.1rem]"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className=" w-full  flex items-center justify-end ">
            {/* <div className="flex items-center space-x-2 pt-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#5446BC] border-gray-300 rounded focus:ring-[#5446BC]"
              />
              <label className="text-lg text-[#3A3084]">
                Add these skills to my resume
              </label>
            </div> */}

            <button
              onClick={onNext}
              className="bg-[#5446BC] text-white px-4 py-2 rounded-md hover:bg-[#4a3ea8] transition-colors"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

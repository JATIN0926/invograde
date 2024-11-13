// components/DomainSection.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, removeCategory } from "@/redux/slices/projectSlice";
import Image from "next/image";

const DomainSection = ({ onNext, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.project.categories) || [];
  const [selectedOption, setSelectedOption] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  const availableCategories = [
    "Accessibility Design",
    "AI/ML Development",
    "API Development",
    "AR/VR Design",
    "Back-End Development",
    "Big Data",
    "Others",
  ];

  const handleCategorySelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "Others" || selectedValue === "") {
      setCustomCategory("");
    } else {
      dispatch(addCategory(selectedValue));
      setSelectedOption("");
    }
  };

  const handleCustomCategorySubmit = (e) => {
    e.preventDefault();
    if (customCategory.trim() && !categories.includes(customCategory)) {
      dispatch(addCategory(customCategory.trim()));
      setCustomCategory("");
    }
  };

  const handleRemoveCategory = (category) => {
    dispatch(removeCategory(category));
  };

  const handleCustomInputKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCustomCategorySubmit(e);
    }
  };

  return (
    <div className="absolute inset-0 p-4 bg-white rounded-[0.35rem] border-2 border-[#3A3084] shadow-lg w-[75%] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <button
        className="absolute right-5 top-2 text-gray-400 hover:text-gray-600 text-xl"
        onClick={onClose}
      >
        <Image
          src="/icons/cross_close.png"
          alt="cross"
          width={35}
          height={35}
        />
      </button>
      <div className="p-6 flex flex-col gap-2">
        <h2 className="text-[1.25rem] font-PublicSans-Medium self-center text-[#141520]">
          Choose Categories
        </h2>

        <select
          value={selectedOption}
          onChange={handleCategorySelect}
          className="block w-full mb-3 p-2 border border-[#774FCC] rounded-md text-base text-[#774FCC] font-PublicSans-Regular"
        >
          <option value="">Choose any five domains for your work</option>
          {availableCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {selectedOption === "Others" && (
          <input
            type="text"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            onKeyDown={handleCustomInputKeyPress}
            placeholder={` ${categories?.length === 5 ? "Max categories reached" : "Enter custom category and press Enter"} `}
            className="p-2 border border-gray-300 rounded-md mb-4 w-full text-base"
            disabled = {categories?.length === 5}
          />
        )}

        <div className="flex flex-wrap gap-3 mt-2">
          {categories?.map((category, index) => (
            <span
              key={index}
              className="flex items-center text-base font-medium text-[#3A3084]"
            >
              {category}
              <button
                onClick={() => handleRemoveCategory(category)}
                className="ml-1 text-lg cursor-pointer text-gray-600"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
        <button
          onClick={onNext}
          className="bg-[#3A3084] text-white p-2 rounded-md mt-4 self-end"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default DomainSection;

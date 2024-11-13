// TitleSection.js
import Image from "next/image";
import React from "react";

const TitleSection = ({ title, onTitleChange, onNext, onClose }) => {
  return (
    <div className="absolute inset-0 p-4 bg-white rounded-[0.35rem] border-2 border-[#3A3084] shadow-lg w-[65%] h-[65%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="relative p-6">
        {/* Close button */}
        <button
          className="absolute right-3 top-0 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          <Image src="/icons/cross_close.png" alt="cross" width={35} height={35} />
        </button>

        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-xl text-[#141520] font-PublicSans-Medium">
            What is your Project Title?
          </h2>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e)}
            className="w-full border-none outline-none p-4 focus:ring-0 caret-purple-500 font-PublicSans-Medium text-[#3A3084] text-2xl text-center"
          />

          <button
            onClick={onNext}
            className="bg-[#5446BC] text-white px-4 py-2 rounded-md hover:bg-[#4a3ea8] self-end"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;

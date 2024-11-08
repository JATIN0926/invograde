
// TitleSection.js
import React from 'react';

const TitleSection = ({ title, onTitleChange, onNext ,onClose}) => {
  return (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg w-[450px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="relative p-6">
        {/* Close button */}
        <button 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-lg text-gray-800">
            What is your Project Title?
          </h2>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e)}
            placeholder="Enter your project title"
            className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={onNext}
            className="bg-[#5446BC] text-white px-4 py-2 rounded-md hover:bg-[#4a3ea8] transition-colors"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
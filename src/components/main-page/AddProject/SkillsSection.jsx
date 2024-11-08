
import React, { useState } from 'react';

const SkillsSection = ({ skills, onSkillsChange, onNext ,onClose}) => {
  const [newSkill, setNewSkill] = useState('');
  const [addToResume, setAddToResume] = useState(false);

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      const updatedSkills = [...skills, newSkill.trim()];
      onSkillsChange({ target: { value: updatedSkills.join(',') } });
      setNewSkill('');
    }
  };



  const removeSkill = (skillToRemove) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    onSkillsChange({ target: { value: updatedSkills.join(',') } });

  };

  return (
    <div className="absolute inset-0 bg-white rounded-lg shadow-lg w-[500px] min-h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="relative p-6">
    
        <button 
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="flex flex-col space-y-6">
          <h2 className="text-lg text-center text-gray-800">
            Mention all the skills you've used in your Project
          </h2>
          
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleAddSkill}
            placeholder="Type a skill and press Enter"
            className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 text-[#3A3084] font-PublicSans-Regular text-sm"
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

          <div className="flex items-center space-x-2 pt-4">
            <input
              type="checkbox"
              checked={addToResume}
              onChange={(e) => setAddToResume(e.target.checked)}
              className="w-4 h-4 text-[#5446BC] border-gray-300 rounded focus:ring-[#5446BC]"
            />
            <label className="text-sm text-gray-600">
              Add these skills to my resume
            </label>
          </div>

          <button
            onClick={onNext}
            className="bg-[#5446BC] text-white px-4 py-2 rounded-md hover:bg-[#4a3ea8] transition-colors self-end"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
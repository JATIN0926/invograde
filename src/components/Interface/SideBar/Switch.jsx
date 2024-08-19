'use client'
import React, { useState } from 'react';

function CustomToggleSwitch({ color, toggleColor}) {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-14 h-8 flex items-center ${color} rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out`}
      onClick={handleToggle}
    >
      <div
        className={`h-6 w-6 rounded-full shadow-md transform ${isOn ? 'translate-x-6' : ''} ${toggleColor} transition-transform duration-300 ease-in-out`}
      />
    </div>
  );
}

export default CustomToggleSwitch;

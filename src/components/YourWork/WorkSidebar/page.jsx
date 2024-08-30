"use client"
import React, { useState } from 'react';
import CustomToggleSwitch from '../../Interface/SideBar/Switch';
import Image from 'next/image';

const texts = ['Give it a Title', 'Skills Used', 'Choose Domain', 'Add Tags']
const WorkSideBar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonIndex) => {
    setHoveredButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className={`w-[18%] max-h-[105vh] h-[100vh] fixed left-0 top-[95px] bottom-0 border-r-[0.5px] border-r-[#000000] font-IBMPlexSans-SemiBold z-30 pt-4`}>
      <div className="h-full w-full flex flex-col gap-2">
        <div className="w-full h-[5%] flex flex-row items-center justify-center gap-3">
          <h1>Learner</h1>
          <CustomToggleSwitch color='bg-[#DDCCFF]' toggleColor="bg-[#3A3084]" />
          <h1>Trainer</h1>
        </div>
        <div className="h-[80%] w-full bg-[#3A3084] flex flex-col items-center justify-start gap-3 pt-3.5">
          <div className='font-IBMPlexSans-SemiBold w-[82%] bg-transparent rounded-md px-6 text-white flex flex-col items-center justify-center gap-3.5'>
            
            {texts.map((text, index) => (
              <div 
                key={index}
                className={`hover:bg-white hover:text-[#774FCC] transition-all w-[12rem] h-[3rem] text-base rounded-lg cursor-pointer bg-[#774FCC] flex items-center justify-between px-5`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <h1>{text}</h1>
                <p>
                  <Image 
                    src={hoveredButton === index ? '/icons/Arrow-Bold-Purple.svg' : '/icons/Arrow-Bold.svg'} 
                    height={10} 
                    width={10} 
                  />
                </p>
              </div>
            ))}
          </div>
          
          <div className='bg-[white] rounded-md p-4 px-6 text-[#3A3084] flex flex-col items-start justify-start w-[82%] gap-2 font-IBMPlexSans-Bold'>
            <h1>Badges</h1>
            <h1>Networks</h1>
            <h1>Accomplishment</h1>
            <h1>Resume</h1> 
            <h1>Find Work</h1>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSideBar;

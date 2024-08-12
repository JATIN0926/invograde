import React from "react";

const CurvedCard = ({text}) => {
  return (
    <div
      className="relative w-[18%] p-4 bg-[#1B1723] max-h-[20rem] h-[7.5rem] rounded-md flex items-start justify-center text-center"
    >
      <div className="absolute bottom-0 right-0 w-[1.5rem] h-[1.5rem] bg-[#131313]"></div>
      <p className=" text-start w-[85%] font-IBMPlexSans-Light font-medium text-base">{text}</p>
    </div>
  );
};

export default CurvedCard;

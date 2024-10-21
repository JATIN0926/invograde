import Image from "next/image";
import React from "react";

const CourseCard = () => {
  return (
    // <div className="w-[30%] flex flex-col items-center justify-center gap-2 outline-none hover:outline-[3px] hover:outline-[#774FCC] border-none transition-all rounded-xl shadow-lg shadow-[#774FCC] overflow-hidden cursor-pointer">
    <div className="w-[30%] flex flex-col items-center justify-center gap-2 border-[1px] border-transparent hover:border-[#774FCC] hover:shadow-[0_0_0_3px_#774FCC] transition-all rounded-xl shadow-lg shadow-[#774FCC] overflow-hidden cursor-pointer">
      <div className="w-full max-h-[12rem] h-[11rem] flex items-center justify-center bg-gray-800"></div>
      <div className=" flex flex-col items-center justify-center gap-6 px-5 py-2.5 ">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className=" text-[#3A3084] font-IBMPlexSans-Bold text-[0.9rem]">
            The Language of Design: Form & Meaning
          </h1>
          <div className="flex items-center justify-between w-full font-IBMPlexSans-SemiBold ">
            <h2 className=" text-[0.62rem]">Shreyas Saxena</h2>
            <div className=" basis-[30%]  flex items-center justify-center gap-1.5">
              <div className=" aspect-square w-[20%] relative">
                <Image src="/icons/time.svg" alt="time" fill />
              </div>
              <p className=" text-[0.62rem]">40 Min</p>
            </div>
          </div>
        </div>
        <p className="text-[#454545] font-IBMPlexSans-Bold text-[0.9rem] self-start">$0</p>
      </div>
    </div>
  );
};

export default CourseCard;

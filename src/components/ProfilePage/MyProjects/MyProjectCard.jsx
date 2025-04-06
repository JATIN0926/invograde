import Image from "next/image";
import React from "react";

const MyProjectCard = () => {
  return (
    <div className=" h-[15rem] w-[28%] flex flex-col gap-2 z-[40]">
      <div className=" h-[80%]  w-full relative rounded-md">
        <Image src="/images/ProjectCardPlaceholder.png" alt="img" fill />
      </div>
      <div className=" w-full flex items-center justify-end">
        <div className=" flex items-center justify-center gap-2">
          <div className=" w-5 h-5 relative">
            <Image src="/icons/heart_like.png" alt="like" fill />
          </div>
          <h1 className=" text-[0.8rem] text-black">79</h1>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;

import Image from "next/image";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-24 px-10  flex flex-col items-center justify-center">
      <div className="w-[60%] text-center text-white  flex flex-col items-center justify-center gap-8">
        <p className=" font-Outfit-Regular text-base tracking-[-0.3px]">
          Invograde Is Not Just a Profile
        </p>
        <p className=" font-Outfit-Regular text-3xl tracking-[-0.7px] text-center">
          Blending creativity, credibility, and community into one unified
          space. It’s where talent is discovered through interaction, not
          algorithms.
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;

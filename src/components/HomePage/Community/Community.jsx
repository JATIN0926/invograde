"use client";
import React from "react";
import { motion } from "framer-motion";

const words = ["Building", "Community", "Personal", "Work Gallery"];

const scrollVariant = {
  animate: {
    y: ["0%", "-100%"],
    transition: {
      duration: words.length * 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const Community = () => {
  return (
    <div className="w-full min-h-dvh bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-24 px-10 flex flex-col items-center justify-center">
      <div className="w-[85%] text-center text-white flex flex-col items-center justify-center gap-8">
        <div className="relative h-[10rem] w-full overflow-hidden ">
          {/* Top gradient overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-[1rem] z-10 pointer-events-none bg-gradient-to-b from-[rgba(25,13,66,1)] via-[rgba(79,52,199,0.7)] to-transparent rounded-3xl" /> */}

          <motion.div
            variants={scrollVariant}
            animate="animate"
            className="flex flex-col items-center z-0"
          >
            {words.map((word, index) => (
              <h1
                key={index}
                className="font-Outfit-Regular text-[10rem] tracking-[-0.3px] leading-[10rem]"
              >
                <span className="whitespace-nowrap">{word}</span>
              </h1>
            ))}
            <h1 className="font-Outfit-Regular text-[10rem] tracking-[-0.3px] leading-[10rem]">
              {words[0]}
            </h1>
          </motion.div>
        </div>

        <p className="font-Outfit-Regular text-base text-center w-[60%]">
          Download our step-by-step user guide to explore how Invograde works —
          from setting up your profile to uploading projects, connecting with
          others, and getting noticed. Start strong, build smart.
        </p>

        <button className="bg-white px-5 py-2 cursor-pointer rounded-full text-[#333333] font-Outfit-Medium text-[0.7rem] uppercase tracking-[0.24px]">
          Show Me
        </button>
      </div>
    </div>
  );
};

export default Community;

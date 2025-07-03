"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import Image from "next/image";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const textControls = useAnimationControls();
  const buttonControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      buttonControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      });
    }
  }, [isInView, textControls, buttonControls]);

  return (
    <div className="w-full min-h-dvh bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-24 px-10 flex flex-col items-center justify-center">
      <div className="w-[85%] text-center text-white flex flex-col items-center justify-center gap-8">
        <div className="relative h-[10rem] w-full overflow-hidden">
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
            {/* Repeated first word to loop smoothly */}
            <h1 className="font-Outfit-Regular text-[10rem] tracking-[-0.3px] leading-[10rem]">
              {words[0]}
            </h1>
          </motion.div>
        </div>

        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="font-Outfit-Regular text-base text-center w-[60%]"
        >
          Download our step-by-step user guide to explore how Invograde works —
          from setting up your profile to uploading projects, connecting with
          others, and getting noticed. Start strong, build smart.
        </motion.p>

        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: {
              scale: 1,
              backgroundColor: "#ffffff",
              color: "#333333",
            },
            hover: {
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0)",
              color: "#ffffff",
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-5 py-2 cursor-pointer rounded-full font-Outfit-Medium text-[0.7rem] uppercase tracking-[0.24px] border border-white flex items-center overflow-hidden"
        >
          <motion.span
            variants={{
              rest: { marginRight: "0rem" },
              hover: { marginRight: "0.6rem" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Show Me
          </motion.span>

          {/* Optional Arrow Icon (just like before) */}
          <motion.span
            variants={{
              rest: { opacity: 0, x: 8, width: 0 },
              hover: { opacity: 1, x: 0, width: 12 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative h-3 overflow-hidden"
          >
            <div className="relative w-3 h-3">
              <Image
                src="/icons/arrow_left.svg"
                alt="Arrow Icon"
                fill
                className="rotate-180 object-contain"
              />
            </div>
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
};

export default Community;

"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

const GettingStarted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const para1Controls = useAnimationControls();
  const para2Controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      para1Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      para2Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      });
    }
  }, [isInView, para1Controls, para2Controls]);

  return (
    <div className="w-full bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-24 px-10 flex flex-col items-center justify-center">
      <div
        ref={ref}
        className="w-[60%] text-center text-white flex flex-col items-center justify-center gap-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={para1Controls}
          className="font-Outfit-Regular text-base tracking-[-0.3px]"
        >
          Invograde Is Not Just a Profile
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={para2Controls}
          className="font-Outfit-Regular text-3xl tracking-[-0.7px] text-center"
        >
          Blending creativity, credibility, and community into one unified
          space. It’s where talent is discovered through interaction, not
          algorithms.
        </motion.p>
      </div>
    </div>
  );
};

export default GettingStarted;

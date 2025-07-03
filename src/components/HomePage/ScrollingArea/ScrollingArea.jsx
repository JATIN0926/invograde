"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ScrollingArea = () => {
  const icons = [
    "/icons/scroll1.svg",
    "/icons/scroll2.svg",
    "/icons/scroll3.svg",
    "/icons/scroll4.svg",
    "/icons/scroll5.svg",
    "/icons/scroll6.svg",
    "/icons/scroll7.svg",
    "/icons/scroll8.svg",
    "/icons/scroll9.svg",
    "/icons/scroll10.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden py-20">
      {/* Scrolling icons */}
      <motion.div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {icons.map((iconSrc, i) => (
            <Image
              key={i}
              src={iconSrc}
              alt={`icon-${i}`}
              width={60}
              height={60}
            />
          ))}
          {/* Duplicate to ensure seamless loop */}
          {icons.map((iconSrc, i) => (
            <Image
              key={`dup-${i}`}
              src={iconSrc}
              alt={`icon-dup-${i}`}
              width={60}
              height={60}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Center tick with ripples */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Animated ripples */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#4F1AD6] z-0"
              style={{ width: "100%", height: "100%" }}
              animate={{
                scale: [1, 2.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Tick icon in center */}
          <Image
            className="relative z-10"
            src="/icons/tick.svg"
            alt="tick"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollingArea;

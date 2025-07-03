"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const lineVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const lines = [
    "Your Work Deserves",
    "More Than a Resume. Show It.",
    "Share It. Get Hired",
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-dvh bg-gradient-to-b from-[#190D42] via-[#4F34C7] to-[#BAB9F8] rounded-3xl py-6 flex flex-col items-center justify-center gap-10">
      {/* hero1 - from top */}
      <motion.div
        initial={{ y: -100, x: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -top-[15%] right-[7%]"
      >
        <div className="relative aspect-square w-[15rem]">
          <Image
            src="/images/hero1.png"
            alt="hero1"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* hero2 - from diagonal top left */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative w-[15rem] aspect-square"
      >
        <Image
          src="/images/hero2.png"
          alt="hero2"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="flex items-center justify-between w-full px-6">
        {/* hero3 - from left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-[15rem] aspect-square mt-20"
        >
          <Image
            src="/images/hero3.png"
            alt="hero3"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text section with animated lines */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-3">
            <h2 className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF99] bg-clip-text text-transparent font-Outfit-SemiBold text-[1.1rem] tracking-[-0.44px]">
              Introducing
            </h2>
            <div className="relative w-8 h-8">
              <Image
                src="/icons/InvogradeIcon.png"
                alt="InvogradeIcon"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-white font-Outfit-SemiBold tracking-[-0.48px] text-[1.2rem]">
              Invograde
            </h2>
          </div>

          {/* Animated lines */}
          <div className="flex flex-col items-center justify-center text-white text-[2.5rem] font-Outfit-Regular leading-[3rem] tracking-[-1.3px] text-center w-[100%]">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: lines.length * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Link href="/main-page">
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
                className="mt-6 px-5 py-2 cursor-pointer rounded-full font-Outfit-Medium text-[0.6rem] uppercase tracking-[0.24px] border border-white flex items-center overflow-hidden"
              >
                <motion.span
                  variants={{
                    rest: { marginRight: "0rem" },
                    hover: { marginRight: "0.6rem" },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Get Started
                </motion.span>

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
            </Link>
          </motion.div>
        </div>

        {/* hero4 - from right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-[15rem] aspect-square mb-20"
        >
          <Image
            src="/images/hero4.png"
            alt="hero4"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

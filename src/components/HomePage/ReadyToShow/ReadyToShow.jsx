"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "framer-motion";

const ReadyToShow = () => {
  const images = [
    {
      src: "/images/hero1.png",
      alt: "Top Left",
      className: "-top-[10%] left-6",
    },
    {
      src: "/images/hero3.png",
      alt: "Top Right",
      className: "-top-[5%] right-6",
    },
    {
      src: "/images/desc_1.png",
      alt: "Bottom Left",
      className: "bottom-[30%] -left-[4%]",
    },
    {
      src: "/images/hero4.png",
      alt: "Bottom Right",
      className: "bottom-[30%] -right-[4%]",
    },
    {
      src: "/images/desc_3.png",
      alt: "Center Bottom",
      className: "-bottom-[10%] left-1/2 -translate-x-1/2",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const h1Controls = useAnimationControls();
  const pControls = useAnimationControls();
  const btnControls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      h1Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      pControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      });
      btnControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
      });
    }
  }, [inView, h1Controls, pControls, btnControls]);

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full min-h-dvh bg-[linear-gradient(to_bottom,_#190D42,_#4F34C7,_#BAB9F8)] rounded-3xl py-16 flex items-center justify-center relative overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute ${img.className} w-[13rem] aspect-square z-0 pointer-events-none`}
          variants={floatAnimation}
          animate="animate"
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </motion.div>
      ))}

      <div
        ref={ref}
        className="w-[45%] h-full flex flex-col items-center justify-center gap-4 text-center text-white z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={h1Controls}
          className="font-Outfit-Regular text-[3.5rem] tracking-[-1px] leading-[3.5rem]"
        >
          Ready to Show What You&apos;re Made Of?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={pControls}
          className="font-Outfit-Regular text-[1.1rem]"
        >
          Build your digital presence, share what you’ve built, and be seen by
          the right people.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={btnControls}>
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

              {/* Optional: Arrow appears on hover */}
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
    </div>
  );
};

export default ReadyToShow;

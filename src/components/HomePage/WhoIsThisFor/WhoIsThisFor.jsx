"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { InfiniteMovingCards } from "./MovingCards";
import { motion, useAnimationControls, useInView } from "framer-motion";

const items = [
  { src: "/images/gameDev.png", text: "Game Developers", bgColor: "#3A3084" },
  {
    src: "/images/graphicDesigners.png",
    text: "Graphic Designers",
    bgColor: "#774FCC",
  },
  { src: "/images/webdev.png", text: "Web Developers", bgColor: "#3A3084" },
  { src: "/images/figma.png", text: "UI/UX Designers", bgColor: "#774FCC" },
  { src: "/images/freelancers.png", text: "Freelancers", bgColor: "#3A3084" },
  {
    src: "/images/DigitalDesigners.png",
    text: "Digital Designers",
    bgColor: "#774FCC",
  },
  { src: "/images/Appdev.png", text: "App Developers", bgColor: "#3A3084" },
  { src: "/images/tutor.png", text: "Tutors/Educators", bgColor: "#774FCC" },
];

const WhoIsThisFor = () => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [0, 1],
        transition: { duration: 1, ease: "easeInOut" },
      }).then(() => {
        controls.start({
          y: ["0%", "-150%"],
          transition: { duration: 1, ease: "easeInOut" },
        }).then(() => {
          controls.start({
            opacity: [1, 0],
            transition: { duration: 1, ease: "easeInOut" },
          });
        });
      });
    }
  }, [isInView, controls]);

  return (
    <>
      <div className="w-full">
        <div className="p-6 w-full flex items-center justify-center">
          <div className="w-[90%] flex items-center justify-between">
            <h1 className="text-5xl font-IBMPlexSans-Medium font-medium w-[35%] tracking-[-0.05em]">
              Who is this for ?
            </h1>
            <div className="flex flex-col items-start justify-center w-[55%]">
              <p className="text-[#787878] font-IBMPlexSans-Light">
                Our goal is to bridge the gap between learners and trainers, the
                project aims to foster a community of growth, collaboration, and
                professional development.
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/ContactArrow.svg"
                  alt=""
                  width={25}
                  height={20}
                />
                <h2 className="font-IBMPlexSans-Regular">Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteMovingCards items={items} />
      <div className="w-full h-screen p-6 flex items-center justify-center">
        <div className="w-[95%] relative rounded-lg bg-[#DDCCFF] p-6 flex items-center justify-center h-[95%]">
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            <div className="flex w-full ">
              <h1 className="font-Snippet-Regular mr-auto font-bold self-center text-[1.1rem]">
                invograde
              </h1>
              <div className="flex items-center align-top justify-between w-[20%]">
                <h2 className="font-IBMPlexSans-Regular text-[#141520] font-semibold">
                  Company
                </h2>
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <h2 className="font-IBMPlexSans-Regular text-[#141520] font-semibold">
                  About Us
                </h2>
              </div>
              <div className="flex items-center justify-center ml-auto">
                <h1 className="font-semibold font-IBMPlexSans-Regular uppercase">
                  Get a Demo
                </h1>
                <div className="relative w-7 h-10">
                  <Image src="/icons/arrow-up.svg" alt="img" fill />
                </div>
              </div>
            </div>
            <p className="font-IBMPlexSans-SemiBold text-[2.5rem] leading-[3rem] text-center w-[90%]">
              Connect, inspire, and collaborate with fellow creatives and
              professionals across various industries. Through showcasing your
              creative projects and achievements, you aim to seek opportunities
              for growth and meaningful connections. Whether you are exploring
              portfolios, sharing insights, or initiating collaborations, you are
              here to engage in a journey of creativity, innovation, and mutual
              success. Let us link, inspire, and create together!
            </p>
          </div>
          <motion.div
            ref={ref}
            initial={{ scale: 0, y: "0%", opacity: 1 }}
            animate={controls}
            className="absolute translate-x-[-50%] translate-y-[-50%] bg-white w-[50%] aspect-video rounded-3xl"
          >
            <div className="w-full h-full relative">
              <div className="absolute left-[5%] bottom-[8%] bg-[#D9D9D9] rounded-3xl flex p-1 px-4 cursor-pointer">
                <div className="h-full w-full flex items-center justify-center gap-3">
                  <h1 className="font-IBMPlexSans-Regular font-semibold">Play</h1>
                  <div className="bg-[#141520] h-5 w-5 rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/play_btn_arrow.svg"
                      alt="img"
                      width={8}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhoIsThisFor;

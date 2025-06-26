"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const Description = () => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls
        .start({
          scale: [0, 1],
          transition: { duration: 1, ease: "easeInOut" },
        })
        .then(() => {
          controls
            .start({
              y: ["0%", "-150%"],
              transition: { duration: 1, ease: "easeInOut" },
            })
            .then(() => {
              controls.start({
                opacity: [1, 0],
                transition: { duration: 1, ease: "easeInOut" },
              });
            });
        });
    }
  }, [isInView, controls]);

  return (
    <div className="w-full bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-6 px-10 flex flex-col items-center justify-center gap-16">
      <div className="w-[75%] flex items-center justify-center gap-16 text-white">
        <div className="flex flex-col items-start justify-center gap-3">
          <h3 className="text-base tracking-[0.6px] uppercase font-Outfit-Medium">
            Get Discovered
          </h3>
          <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px]">
            Showcase Skills. Build Credibility.
          </h1>
          <p className="text-base font-Outfit-Regular ">
            A portfolio-first platform for students, designers, developers &
            creatives to upload their projects, resumes, and connect through
            proof of work — not just profiles.
          </p>
        </div>
        <div className="relative w-[55rem] aspect-square">
          <Image
            src="/images/desc_1.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-[70%] flex items-center justify-center">
        <div className="w-full relative rounded-3xl bg-[#988EE8] p-6 flex items-center justify-center h-[95%]">
          <div className="flex flex-col items-center justify-center gap-6 w-full py-16">
            <p className="font-Outfit-Regular text-[1.3rem] leading-[2rem] text-center text-black">
              Connect, inspire, and collaborate with fellow creatives and
              professionals across various industries. Through showcasing your
              creative projects and achievements, you aim to seek opportunities
              for growth and meaningful connections. Whether you are exploring
              portfolios, sharing insights, or initiating collaborations, you
              are here to engage in a journey of creativity, innovation, and
              mutual success. Let us link, inspire, and create together!
            </p>
          </div>
          <motion.div
            ref={ref}
            initial={{ scale: 0, y: "0%", opacity: 1 }}
            animate={controls}
            className="absolute translate-x-[-50%] translate-y-[-50%] bg-white w-[65%] aspect-video rounded-3xl"
          >
            <div className="w-full h-full relative">
              <div className="absolute left-[5%] bottom-[8%] bg-[#D9D9D9] rounded-3xl flex p-1 px-4 cursor-pointer">
                <div className="h-full w-full flex items-center justify-center gap-3">
                  <h1 className="font-IBMPlexSans-Regular font-semibold">
                    Play
                  </h1>
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

      <div className="w-[75%] flex items-center justify-center gap-24 text-white">
        <div className="relative w-[55rem] aspect-square">
          <Image
            src="/images/desc_2.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <h3 className="text-base tracking-[1.5px] text-[rgba(255,255,255,0.8)] uppercase font-Outfit-Medium">
            Next-gen linkedin
          </h3>
          <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px] text-[rgba(255, 255, 255, 1)] ">
            Where Visibility Meets Validation.
          </h1>
          <p className="text-base font-Outfit-Regular text-[rgba(255,255,255,0.8)] ">
            Invograde is a next-gen portfolio and talent discovery platform that
            transforms how emerging professionals launch their careers.
          </p>
        </div>
      </div>

      <div className="w-[75%] flex items-center justify-center gap-24 text-white">
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-base tracking-[1.5px] text-[rgba(255,255,255,0.8)] uppercase font-Outfit-Medium">
            See What’s Being Built
          </h3>
          <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px] text-[rgba(255, 255, 255, 1)] ">
            Fresh Projects Going Live.
          </h1>
          <p className="text-base font-Outfit-Regular text-[rgba(255,255,255,0.8)] ">
            Explore real projects, resumes, and portfolios shared by creators
            like you — all live, all authentic
          </p>
          <button className="bg-white px-5 py-2 cursor-pointer rounded-full text-[#333333] font-Outfit-Medium text-[0.6rem] uppercase tracking-[0.24px]">
            EXPLORE
          </button>
        </div>

        <div className="relative w-[45rem] aspect-square">
          <Image
            src="/images/desc_3.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;

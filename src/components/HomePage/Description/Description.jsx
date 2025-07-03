"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

const Description = () => {
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const imageFloat = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const inView1 = useInView(section1Ref, { once: true });
  const inView2 = useInView(section2Ref, { once: true });
  const inView3 = useInView(section3Ref, { once: true });

  useEffect(() => {
    if (inView1) {
      controls1.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
      }));
    }
    if (inView2) {
      controls2.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
      }));
    }
    if (inView3) {
      controls3.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
      }));
    }
  }, [inView1, inView2, inView3, controls1, controls2, controls3]);

  const ref = useRef(null);
  const modalInView = useInView(ref, { once: true });
  const modalControls = useAnimationControls();

  useEffect(() => {
    if (modalInView) {
      modalControls
        .start({
          scale: [0, 1],
          transition: { duration: 1, ease: "easeInOut" },
        })
        .then(() =>
          modalControls
            .start({
              y: ["0%", "-150%"],
              transition: { duration: 1, ease: "easeInOut" },
            })
            .then(() =>
              modalControls.start({
                opacity: [1, 0],
                transition: { duration: 1, ease: "easeInOut" },
              })
            )
        );
    }
  }, [modalInView, modalControls]);

  return (
    <div className="w-full bg-[linear-gradient(to_top,rgba(25,13,66,0),#190D42,#4F34C7,#BAB9F8)] rounded-3xl py-6 px-10 flex flex-col items-center justify-center gap-16">
      <div
        className="w-[75%] flex items-center justify-center gap-16 text-white"
        ref={section1Ref}
      >
        <div className="flex flex-col items-start justify-center gap-3">
          {[
            "Get Discovered",
            "Showcase Skills. Build Credibility.",
            "A portfolio-first platform for students, designers, developers & creatives to upload their projects, resumes, and connect through proof of work — not just profiles.",
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls1}
            >
              {i === 0 ? (
                <h3 className="text-base tracking-[0.6px] uppercase font-Outfit-Medium">
                  {text}
                </h3>
              ) : i === 1 ? (
                <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px]">
                  {text}
                </h1>
              ) : (
                <p className="text-base font-Outfit-Regular ">{text}</p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="relative w-[55rem] aspect-square"
          variants={imageFloat}
          animate="animate"
        >
          <Image
            src="/images/desc_1.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </motion.div>
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
            animate={modalControls}
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

      <div
        className="w-[75%] flex items-center justify-center gap-24 text-white"
        ref={section2Ref}
      >
        <motion.div
          className="relative w-[55rem] aspect-square"
          variants={imageFloat}
          animate="animate"
        >
          <Image
            src="/images/desc_2.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-col items-start justify-center gap-3">
          {[
            "Next-gen linkedin",
            "Where Visibility Meets Validation.",
            "Invograde is a next-gen portfolio and talent discovery platform that transforms how emerging professionals launch their careers.",
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls2}
            >
              {i === 0 ? (
                <h3 className="text-base tracking-[1.5px] text-[rgba(255,255,255,0.8)] uppercase font-Outfit-Medium">
                  {text}
                </h3>
              ) : i === 1 ? (
                <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px] text-[rgba(255, 255, 255, 1)]">
                  {text}
                </h1>
              ) : (
                <p className="text-base font-Outfit-Regular text-[rgba(255,255,255,0.8)]">
                  {text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="w-[75%] flex items-center justify-center gap-24 text-white"
        ref={section3Ref}
      >
        <div className="flex flex-col items-start justify-center gap-6">
          {[
            "See What’s Being Built",
            "Fresh Projects Going Live.",
            "Explore real projects, resumes, and portfolios shared by creators like you — all live, all authentic",
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls3}
            >
              {i === 0 ? (
                <h3 className="text-base tracking-[1.5px] text-[rgba(255,255,255,0.8)] uppercase font-Outfit-Medium">
                  {text}
                </h3>
              ) : i === 1 ? (
                <h1 className="text-5xl font-Outfit-Regular tracking-[-1.3px] text-[rgba(255, 255, 255, 1)]">
                  {text}
                </h1>
              ) : (
                <p className="text-base font-Outfit-Regular text-[rgba(255,255,255,0.8)]">
                  {text}
                </p>
              )}
            </motion.div>
          ))}
          <motion.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            custom={3}
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
            className="px-5 py-2 cursor-pointer rounded-full font-Outfit-Medium text-[0.6rem] uppercase tracking-[0.24px] border border-white flex items-center overflow-hidden"
          >
            <motion.span
              variants={{
                rest: { marginRight: "0rem" },
                hover: { marginRight: "0.6rem" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              EXPLORE
            </motion.span>

            {/* Optional: Arrow icon appears on hover */}
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
        <motion.div
          className="relative w-[45rem] aspect-square"
          variants={imageFloat}
          animate="animate"
        >
          <Image
            src="/images/desc_3.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="w-[40%] h-[15rem] rounded-3xl overflow-hidden flex-shrink-0 bg-gray-200"
              variants={imageFloat}
              animate="animate"
            >
              <Image
                src={`/images/carousel${item}.png`}
                alt={`carousel-img-${item}`}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;

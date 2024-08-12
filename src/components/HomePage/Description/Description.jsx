"use client";
import Image from "next/image";
import React, { useState } from "react";
import CurvedCard from "./CurvedCard";
import SVGDashedLine from "./SVGDashedLine";

const Description = () => {
  const [isHoveredLearner, setIsHoveredLearner] = useState(false);
  const [isHoveredTrainer, setIsHoveredTrainer] = useState(false);

  return (
    <div className="flex items-center w-full min-h-[120vh] h-screen justify-center text-white p-6 bg-[#131313] font-IBMPlexSans-Regular">
      <div className="flex flex-col items-center justify-between w-[80%] h-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-IBMPlexSans-Bold">
            InvoGrade is helping you to Grow, Learn & Earn.
          </h1>
          <p className="text-[#787878] text-center">
            Welcome to, a dynamic platform designed to empower you to learn,
            showcase, and monetize your skills. Here, you can access a wealth of
            resources to enhance your expertise, create a portfolio to display
            your talents, and connect with opportunities to earn from your
            skills. Not only can you monetize your abilities, but you can also
            gain valuable certifications that add credibility to your profile.
            This website is your all-in-one solution for professional growth,
            recognition, and financial success.
          </p>
        </div>
        <div className="w-[120%] flex items-center justify-evenly">
          <div
            className={`w-[40%] h-[70%] ${
              isHoveredLearner
                ? "bg-[#141520]"
                : "bg-gradient-to-b from-[#131313] to-[#422A74]"
            } transition-all duration-500 cursor-pointer rounded-md px-8 py-6 flex items-center justify-evenly`}
            onMouseEnter={() => setIsHoveredLearner(true)}
            onMouseLeave={() => setIsHoveredLearner(false)}
          >
            <div className="flex flex-col items-start justify-around h-[100%] w-[40%]">
              <Image
                src="/images/learner.svg"
                alt="img"
                width={50}
                height={50}
                className="w-[80%] h-[50%] relative -left-8"
              />
              <h1 className="text-[1.8rem] font-semibold pl-3">Learner</h1>
              <p className="pl-3">View more</p>
            </div>
            <div className="w-[55%] font-IBMPlexSans-Light  leading-[1.65rem] text-[0.9rem]">
              As a learner, you can watch expert walkthroughs and tutorials
              provided by skilled trainers, allowing you to sharpen your skills
              and gain practical knowledge.
            </div>
          </div>
          <div
            className={`w-[40%] h-[70%] ${
              isHoveredTrainer
                ? "bg-[#141520]"
                : "bg-gradient-to-b from-[#131313] to-[#422A74]"
            } transition-all cursor-pointer rounded-md px-8 py-8 flex items-center justify-evenly`}
            onMouseEnter={() => setIsHoveredTrainer(true)}
            onMouseLeave={() => setIsHoveredTrainer(false)}
          >
            <div className="flex flex-col items-start justify-around h-[100%] w-[45%]">
              <Image
                src="/images/trainer.svg"
                alt="img"
                width={50}
                height={50}
                className="w-[80%] h-[50%] relative -left-8 "
              />
              <h1 className="text-[1.8rem] font-semibold pl-3">Trainer</h1>
              <p className="pl-3">View more</p>
            </div>
            <div className="w-[55%] font-IBMPlexSans-Light leading-[1.65rem] text-[0.9rem]">
              This platform offers a space to teach and inspire by sharing your
              expertise in design and development. Whether you want to learn new
              skills or impart your knowledge to others.
            </div>
          </div>
        </div>
          <div className="w-[120%] flex items-start justify-between relative py-10">
            <CurvedCard text="Sign up and take the first step towards your professional growth and success!" />
            <SVGDashedLine />
            <CurvedCard text="Choose your domain & enroll yourself as a designer or a developer." />
            <SVGDashedLine />
            <CurvedCard text="Showcase your skills and start monetizing to reach out to your audience and earn." />
            <SVGDashedLine />
            <CurvedCard text="Start your career right away, build reputation & get hired." />
          </div>
      </div>
    </div>
  );
};

export default Description;

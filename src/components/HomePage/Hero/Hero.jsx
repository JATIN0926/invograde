"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-b from-[#190D42] via-[#4F34C7] to-[#BAB9F8] rounded-3xl py-6 flex flex-col items-center justify-center gap-10">
      <div className="relative w-[15rem] aspect-square">
        <Image
          src="/images/hero2.png"
          alt="hero-img"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-center justify-between w-full px-6 ">
        <div className="relative w-[21rem] aspect-square mt-20">
          <Image
            src="/images/hero3.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
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
          <p className="font-Outfit-Regular text-5xl leading-[3rem] tracking-[-1.3px] text-white w-[70%] text-center">
            Your Work Deserves More Than a Resume. Show It. Share It. Get Hired
          </p>
          <button className="bg-white mt-6 px-4 py-1.5 cursor-pointer rounded-full text-[#333333] font-Outfit-Medium text-[0.7rem] uppercase tracking-[0.24px]">
            Get Started
          </button>
        </div>
        <div className="relative w-[21rem] aspect-square mb-20">
          <Image
            src="/images/hero4.png"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client"
import Image from "next/image";
import React, { useState } from "react";

const Working = () => {
  // State to manage which image to display
  const [hoveredImage, setHoveredImage] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className="relative z-[10] rounded-md flex items-center justify-center h-[45vh] w-screen max-w-full text-white font-IBMPlexSans-Regular">
      <div className="absolute top-[-50%] shadow-lg shadow-[#3A3084] h-[60vh] w-[90%] bg-[#3A3084] p-6 px-24 flex items-center justify-between">
        {/* First Image Container */}
        <div className="flex flex-col items-start justify-center gap-6 w-[30%] h-[80%] cursor-pointer">
          <div
            className={`aspect-square w-20 flex items-center justify-center rounded-md transition-colors ${
              hoveredImage.first ? "bg-[#5446BC]" : "bg-white"
            }`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, first: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, first: false })
            }
          >
            <Image
              src={
                hoveredImage.first
                  ? "/images/rocket_white.png"
                  : "/images/rocket.png"
              }
              alt="img"
              width={50}
              height={50}
              className="w-[55%] aspect-square"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="font-semibold text-xl">Learn & Grow</h1>
            <p className="text-[#CDCDCD]">
              Continuous skill development is key to personal and professional
              growth, to transform challenges into stepping stones for success.
            </p>
          </div>
        </div>

        {/* Second Image Container */}
        <div className="flex flex-col items-start justify-center gap-6 w-[30%] h-[80%] cursor-pointer">
          <div
            className={`aspect-square w-20 flex items-center justify-center rounded-md transition-colors ${
              hoveredImage.second ? "bg-[#5446BC]" : "bg-white"
            }`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, second: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, second: false })
            }
          >
            <Image
              src={
                hoveredImage.second
                  ? "/images/money_white.png"
                  : "/images/money.png"
              }
              alt="img"
              width={50}
              height={50}
              className="w-[55%] aspect-square"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="font-semibold text-xl">Earn & Become an Expert</h1>
            <p className="text-[#CDCDCD]">
              Invest & monetize your skills to earn and become an expert in your
              field. Dedication and continuous learning are key to your side
              hustle.
            </p>
          </div>
        </div>

        {/* Third Image Container */}
        <div className="flex flex-col items-start justify-center gap-6 w-[30%] h-[80%]">
          <div
            className={`aspect-square w-20 flex items-center justify-center rounded-md transition-colors ${
              hoveredImage.third ? "bg-[#5446BC]" : "bg-white"
            }`}
            onMouseEnter={() =>
              setHoveredImage({ ...hoveredImage, third: true })
            }
            onMouseLeave={() =>
              setHoveredImage({ ...hoveredImage, third: false })
            }
          >
            <Image
              src={
                hoveredImage.third
                  ? "/images/graduate-cap_white.png"
                  : "/images/graduate-cap.png"
              }
              alt="img"
              width={50}
              height={50}
              className="w-[55%] aspect-square"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="font-semibold text-xl">Get Certified</h1>
            <p className="text-[#CDCDCD]">
              Unlock exclusive advantages with our certifications! Imagine the
              edge you’ll gain in the job market, the recognition from peers and
              industry leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;

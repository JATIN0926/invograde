"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const itemsRef = useRef([]);
  const thumbnailsRef = useRef([]);
  const timeAutoNext = 5000;

  const videos = [
    {
      src: "/images/hero1.png",
      title: "Mountains",
      location: "Nanda Devi, Karnataka",
    },
    {
      src: "/images/hero2.png",
      title: "Wildlife",
      location: "Jim Corbett, Uttrakhand",
    },
    {
      src: "/images/hero3.png",
      title: "Yoga and Culture",
      location: "Rishikesh, Haridwar",
    },
  ];

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      handleSelect((currentIndex + 1) % videos.length);
    }, timeAutoNext);

    return () => clearInterval(interval);
  }, [currentIndex]); // Reset interval when currentIndex or isZoomingAnimationComplete changes

  const handleSelect = (index) => {
    if (index === currentIndex) return;

    itemsRef.current[index].classList.add("fade-in");
    itemsRef.current[currentIndex].classList.add("fade-out");
    setNextIndex(index);
    setTimeout(() => {
      setCurrentIndex(index);
      setNextIndex(null);
      itemsRef.current[index].classList.remove("fade-in");
      itemsRef.current[currentIndex].classList.remove("fade-out");
    }, 1000);
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, videos.length);
    thumbnailsRef.current = thumbnailsRef.current.slice(0, videos.length);
  }, [videos]);

  return (
    <div className="carousel">
      <Navbar />
      <div className="list relative">
        {videos.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""} ${
              index === nextIndex ? "entering" : ""
            }`}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div
              className={`overlay ${index === nextIndex ? "entering" : ""}`}
            ></div>
            <Image
              src={item.src}
              width={200}
              height={200}
              className="object-cover w-full h-full"
              alt="img"
            />
            <div className=" content h-full px-20 z-[3]">
              <div className="flex items-center justify-between w-full h-full mt-10 ">
                <div className="flex flex-col items-start justify-start gap-12 w-[58%] h-[70%]">
                  <div className=" flex flex-col items-start justify-center gap-4">
                    <h2 className=" text-xl font-IBMPlexSans-Regular font-medium">
                      Start monetizing your skills
                    </h2>
                    <h1 className=" text-5xl font-IBMPlexSans-Bold font-semibold w-[95%]">
                      Discover the Talent & Shape the Future with Us.
                    </h1>
                  </div>
                  <p className=" text-2xl font-IBMPlexSans-Regular font-semibold">
                    Join us today and embark on the path to unleashing your full
                    potential.
                  </p>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className=" font-IBMPlexSans-Bold text-[2.7rem]">
                      <span className="text-black">DEV</span>ELOPER
                    </h1>
                    <h1 className=" font-IBMPlexSans-Bold text-6xl test text-transparent">
                      DESIGNER
                    </h1>
                  </div>
                </div>
                <div className="h-[30%] flex items-end">
                  <button className="relative overflow-hidden group bg-[#3A3084] rounded-full p-4 px-16 font-semibold">
                    <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5446BC] transition-all duration-500 group-hover:scale-[7] group-hover:opacity-100 opacity-0 z-10"></div>
                    <h1 className="relative z-20">Get Started</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

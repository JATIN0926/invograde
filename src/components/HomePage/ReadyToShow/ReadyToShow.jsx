import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      alt: "Bottom Right",
      className: "-bottom-[10%] left-1/2",
    },
  ];

  return (
    <div className="w-full min-h-dvh rotate bg-[linear-gradient(to_bottom,_#190D42,_#4F34C7,_#BAB9F8)] rounded-3xl py-16 flex items-center justify-center relative overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          width={100}
          height={100}
          className={`absolute ${img.className} w-[13rem] aspect-square  z-0 pointer-events-none`}
        />
      ))}
      <div className="w-[45%] h-full flex flex-col items-center justify-center gap-4 text-center text-white z-10">
        <h1 className="font-Outfit-Regular text-[3.5rem] tracking-[-1px] leading-[3.5rem]">
          Ready to Show What You&apos;re Made Of?
        </h1>
        <p className="font-Outfit-Regular text-[1.1rem]">
          Build your digital presence, share what you’ve built, and be seen by
          the right people.
        </p>
        <Link href="/main-page">
          <button className="bg-white mt-6 px-5 py-2 cursor-pointer rounded-full text-[#333333] font-Outfit-Medium text-[0.6rem] uppercase tracking-[0.24px]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyToShow;

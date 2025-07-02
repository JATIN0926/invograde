"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="fixed top-2 left-0 z-50 w-full flex items-center justify-between text-white px-7">
      <div className="flex items-center justify-center gap-2">
        <div className="relative w-6 h-6">
          <Image
            src="/icons/InvogradeIcon.png"
            alt="InvogradeIcon"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="font-Outfit-SemiBold text-[1.3rem] tracking-[-0.48px]">
          Invograde
        </h1>
      </div>
      <div className="rounded-3xl text-[0.7rem] border border-[rgba(255,255,255,0.1)] flex items-center justify-center gap-6 px-5 py-2.5 font-Outfit-Light bg-transparent uppercase backdrop-blur-md">
        <p className=" cursor-pointer">Home</p>
        <p className=" cursor-pointer">Features</p>
        <p className=" cursor-pointer">LIVE PROJECTS</p>
        <p className=" cursor-pointer">FAQ</p>
        <p className=" cursor-pointer">Get started</p>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

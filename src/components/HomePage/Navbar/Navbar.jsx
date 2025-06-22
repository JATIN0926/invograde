  "use client";
  import Link from "next/link";
  import { useSelector } from "react-redux";
  import Image from "next/image";

  const Navbar = () => {
    const user = useSelector((state) => state.user.user);

    return (
      <div className="w-full flex items-center justify-between text-white">
        <h1 className="font-Outfit-SemiBold text-[1.3rem] tracking-[-0.48px]">
          Invograde
        </h1>
        <div className="rounded-3xl border border-white flex items-center justify-center gap-5 px-3 py-1 font-Outfit-Regular uppercase text-base bg-white/10 backdrop-blur-md">
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

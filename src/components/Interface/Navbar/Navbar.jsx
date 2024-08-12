import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className=" w-full py-4 flex items-center justify-between px-5 fixed h-[15%] border-b-[1px] border-b-[#787878]">
      <div className=" flex items-center justify-center gap-[4rem]">
        <div className=" w-[4rem] h-[4rem] border-2 border-[#787878]"></div>
        <NavItem src="/icons/favorites.svg" text="Favorites" />
        <NavItem src="/icons/shorts.svg" text="shorts" />
      </div>
      <div className="flex items-center justify-center gap-[3rem] w-[65%]">
        <div className="w-[40%] relative">
            <Image src="/icons/search.svg" alt="img" width={50} height={50} className=" h-11 w-11 absolute left-2" />
          <input
            type="text"
            className=" rounded-2xl border-[#787878] border-[1px] w-full"
          />
        </div>
        <NavItem src="/icons/msgs.svg" text="Messages" />
        <NavItem src="/icons/yourWork.svg" text="Your work" />
        <NavItem src="/icons/notifications.svg" text="Notifications" />
        <NavItem src="/icons/acheive.svg" text="Achieve" />
      </div>
    </div>
  );
};

export default Navbar;

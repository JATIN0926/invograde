"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileComponent from "@/components/HomePage/ProfileComponent/ProfileComponent";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <nav className="w-full bg-white border-b border-gray-200 px-4 py-2 drop-shadow-xl relative z-[100]">
        <div className="w-full flex items-center justify-between gap-4 px-2">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 relative">
              <Image src="/icons/InvogradeIcon.png" alt="InvogradeIcon" fill />
            </div>
          </div>

          <div className="w-[30%]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 w-[25%]">
            <div className="w-6 h-6 relative cursor-pointer">
              <Image src="/icons/favourites.png" alt="favourites" fill />
            </div>
            <div className="w-6 h-6 relative cursor-pointer">
              <Image src="/icons/msgIcon.png" alt="msgIcon" fill />
            </div>
            <div className="w-6 h-6 relative cursor-pointer">
              <Image src="/icons/inbox.png" alt="inbox" fill />
            </div>
            <div className="w-6 h-6 relative cursor-pointer">
              <Image src="/icons/notifications.png" alt="notifications" fill />
            </div>
            <ProfileComponent />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

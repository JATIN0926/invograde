"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white border-b border-gray-200 px-4 py-2  drop-shadow-xl">
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
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
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
            <div className="relative" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="w-10 h-10 relative cursor-pointer" >
                <Image src="/images/ProfileAvatar.png" alt="ProfileAvatar" fill />
              </div>
              
              {showDropdown && (
                <div className=" absolute right-5 mt-2 w-[20rem] bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="p-3 px-4">
                    {/* Row 1 */}
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                      <div className="w-10 h-10 relative">
                        <Image src="/images/ProfileAvatar.png" alt="Profile" fill />
                      </div>
                      <div className="flex flex-col items-start justify-center">

                      <h1 className="text-gray-800 font-medium">Shreyas Saxena</h1>
                      <h2 className="">shreyassaxena0@gmail.com</h2>
                      </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="flex items-center gap-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/settings.png" alt="Settings" fill />
                      </div>
                      <span className="text-gray-700">Account Settings</span>
                    </div>
                    
                    {/* Row 3 */}
                    <div className="flex items-center gap-3 pt-3 cursor-pointer hover:bg-gray-50">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/LogOut.png" alt="Logout" fill />
                      </div>
                      <span className="text-gray-700">Logout</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

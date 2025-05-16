"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white border-b border-gray-200 px-4 py-2 drop-shadow-xl relative z-[10]">
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
            <div className="relative z-[20]">
              <div
                className="w-10 h-10 relative cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <Image
                  src="/images/ProfileAvatar.png"
                  alt="ProfileAvatar"
                  fill
                />
              </div>
              {showDropdown && (
                <div className=" absolute right-1 top-16 w-[20rem] px-4 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className=" py-6 px-4 flex flex-col items-start justify-center gap-2 font-PublicSans-Regular">
                    {/* Row 1 */}
                    <div className=" w-full flex items-center gap-3 pb-3 border-b border-gray-200 ">
                      <div className="w-12 h-10 relative">
                        <Image
                          src="/images/ProfileAvatar.png"
                          alt="Profile"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h1 className="  text-[0.9rem]">
                          Shreyas Saxena
                        </h1>
                        <h2 className=" text-[0.8rem]">shreyassaxena0@gmail.com</h2>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className=" w-full flex items-center gap-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/settings.png" alt="Settings" fill />
                      </div>
                      <span className=" text-black">Account Settings</span>
                    </div>

                    {/* Row 3 */}
                    <div className=" w-full flex items-center gap-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/edit_icon.png" alt="edit_icon" fill />
                      </div>
                      <span className=" text-black">My Resume</span>
                    </div>

                    {/* Row 4 */}
                    <div className="flex items-center gap-6 pt-3 cursor-pointer hover:bg-gray-50">
                      <div className="w-5 h-5 relative">
                        <Image src="/icons/LogOut.png" alt="Logout" fill />
                      </div>
                      <span className=" text-black">Logout</span>
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

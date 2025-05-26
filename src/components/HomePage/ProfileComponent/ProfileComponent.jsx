import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.user.user);
  return (
    <div className="relative z-[20]">
      <div
        className="w-10 h-10 relative cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Image src="/images/ProfileAvatar.png" alt="ProfileAvatar" fill />
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
                <h1 className="  text-[0.9rem]">{user.username}</h1>
                <h2 className=" text-[0.8rem]">{user.email}</h2>
              </div>
            </div>

            {/* Row 2 */}
            <div className=" w-full flex items-center gap-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ">
              <div className="w-5 h-5 relative">
                <Image src="/icons/settings.png" alt="Settings" fill />
              </div>
              <Link
                href={`/profile`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className=" text-black">Account Settings</span>
              </Link>
            </div>

            {/* Row 3 */}
            <div className=" w-full flex items-center gap-6 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50">
              <div className="w-5 h-5 relative">
                <Image src="/icons/edit_icon.png" alt="edit_icon" fill />
              </div>
              <Link
                href={`/profile/create-resume`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className=" text-black">My Resume</span>
              </Link>
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
  );
};

export default ProfileComponent;

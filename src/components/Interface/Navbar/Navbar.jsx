"use client"
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = ({isMessagesPage}) => {
  const [activeItem, setActiveItem] = useState("");
  const [showMessages, setShowMessages] = useState(false);

  const navItems = [
    { src: "/icons/favorites.svg", activeSrc: "/icons/favorites_click.svg", text: "Favorites", href:"/favorites" },
    { src: "/icons/shorts.svg", activeSrc: "/icons/shorts_click.svg", text: "Shorts", href:"/shorts" },
    { src: "/icons/msgs.svg", activeSrc: "/icons/msgs_click.svg", text: "Messages", },
    { src: "/icons/yourWork.svg", activeSrc: "/icons/yourWork_click.svg", text: "Your work", href:"/yourwork" },
    { src: "/icons/notifications.svg", activeSrc: "/icons/notifications_click.svg", text: "Notifications", href:"/notifications" },
    { src: "/icons/acheive.svg", activeSrc: "/icons/acheive_click.svg", text: "Achieve", href:"/acheive" },
  ];

  const handleNavItemClick = (item) => {
    if (item.text === "Messages") {
      setShowMessages(!showMessages);
      setActiveItem(showMessages ? "" : item.text);  // Toggle active state
    } else {
      setActiveItem(item.text);
      setShowMessages(false);
    }
  };

  return (
    <>
      <div className="w-full py-4 flex items-center justify-between px-5 border-b-[1px] border-b-[#787878] fixed top-0 left-0 z-50 bg-white">
        <div className="flex items-center justify-center gap-[4rem]">
          <div className="w-[4rem] h-[4rem] border-2 border-[#787878]"></div>
          {navItems.slice(0, 2).map((item, index) => (
            <NavItem
              key={index}
              src={item.src}
              activeSrc={item.activeSrc}
              text={item.text}
              isActive={activeItem === item.text}
              href={item.href}
              onClick={() => handleNavItemClick(item)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-[3rem] w-[65%]">
          <div className="w-[40%] relative">
            <Image
              src="/icons/search.svg"
              alt="img"
              width={50}
              height={50}
              className="h-11 w-11 absolute left-2"
            />
            <input
              type="text"
              className="rounded-2xl border-[#787878] border-[1px] w-full"
            />
          </div>
          {navItems.slice(2).map((item, index) => (
            <div key={index} className="relative">
              <NavItem
                src={item.src}
                activeSrc={item.activeSrc}
                text={item.text}
                isActive={activeItem === item.text}
                href={item.href}
                onClick={() => handleNavItemClick(item)}
              />
              {item.text === "Messages" && showMessages && (!isMessagesPage) && (
                <>
                  <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setShowMessages(false)}
                  ></div>
                  <div className="absolute right-0 top-full mt-2 w-[22rem] bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col justify-between max-h-[25rem] h-[22rem]">
                    {/* Triangle at the top of the message box */}
                    <div className="absolute right-4 -top-2 w-4 h-4 bg-white border-l border-t border-gray-300 transform rotate-45"></div>

                    {/* Message content */}
                    <div className="p-4 flex flex-col">
                      <div className="flex items-center justify-between mb-2 bg-[#774FCC] rounded-lg text-white p-2">
                        <div className="flex items-center justify-center gap-2 basis-[75%]">
                          <div className="rounded-full h-9 w-11 border-[1px] border-white"></div>
                          <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[0.95rem] font-IBMPlexSans-Bold">Invograde</h1>
                            <p className="text-[0.7rem] font-IBMPlexSans-Regular line-clamp-2">
                              We welcome you in our community. Hope you..
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#3A3084] w-6 h-6 rounded-full flex items-center justify-center font-IBMPlexSans-Regular">1</div>
                      </div>
                      <div className="flex items-center justify-between mb-2 bg-[#774FCC] rounded-lg text-white p-2">
                        <div className="flex items-center justify-center gap-2 basis-[75%]">
                          <div className="rounded-full h-9 w-11 border-[1px] border-white"></div>
                          <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[0.95rem] font-IBMPlexSans-Bold">Invograde</h1>
                            <p className="text-[0.7rem] font-IBMPlexSans-Regular line-clamp-2">
                              We welcome you in our community. Hope you..
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#3A3084] w-6 h-6 rounded-full flex items-center justify-center font-IBMPlexSans-Regular">1</div>
                      </div>
                    </div>
                    <Link href={`/messages`}><div className="p-2 text-center text-[#774FCC] cursor-pointer hover:underline">See more</div></Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

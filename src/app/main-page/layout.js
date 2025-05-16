"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import SideBar from "@/components/main-page/Sidebar/Sidebar";
import Navbar from "@/components/main-page/Navbar/Navbar";

export default function MainPageLayout({ children }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen); // Get sidebar state from Redux

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />
      <div className="w-full flex">
        {/* Sidebar remains consistent across different routes */}
        <SideBar isOpen={isOpen} toggleSidebar={() => dispatch(toggleSidebar())} />
        {/* Right side content will change based on the route */}
        <div className=" w-[85%] transition-all">
          {children}
        </div>
      </div>
    </div>
  );
}

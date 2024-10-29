"use client";

import React, { useState } from "react";
import SideBar from '@/components/main-page/Sidebar/Sidebar';
import Navbar from '@/components/main-page/Navbar/Navbar';

export default function MainPageLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />
      <div className="w-full flex">
        {/* Sidebar remains consistent across different routes */}
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {/* Right side content will change based on the route */}
        <div className="flex-1 transition-all">
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import ProjectsArea from '@/components/main-page/ProjectsArea/ProjectsArea';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen max-w-full flex flex-col">
        <ProjectsArea isOpen={isOpen} />
    </div>
  );
};

export default Page;
